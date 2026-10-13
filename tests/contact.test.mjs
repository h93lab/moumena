import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../functions/api/contact.js';

const env = {
  RESEND_API_KEY: 'test-key',
  CONTACT_FROM_EMAIL: 'Moumena <hello@example.com>',
  CONTACT_TO_EMAIL: 'moumena@example.com',
};

const requestFor = (body, headers = {}) => new Request('https://example.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Origin: 'https://example.com', ...headers },
  body: JSON.stringify(body),
});

test('rejects invalid contact details before calling the email service', async () => {
  const result = await onRequestPost({ request: requestFor({ name: 'A', email: 'bad', message: '' }), env });
  assert.equal(result.status, 400);
  assert.equal((await result.json()).error, 'invalid_message');
});

test('never reports success when email delivery fails', async (context) => {
  context.mock.method(globalThis, 'fetch', async () => new Response('bad request', { status: 400 }));
  const result = await onRequestPost({ request: requestFor({ name: 'Sarah', email: 'sarah@example.com', message: 'Hello' }), env });
  assert.equal(result.status, 502);
  assert.equal((await result.json()).error, 'delivery_failed');
});

test('sends validated details with reply-to only when configured', async (context) => {
  let delivery;
  context.mock.method(globalThis, 'fetch', async (_url, options) => {
    delivery = JSON.parse(options.body);
    return new Response(JSON.stringify({ id: 'sent' }), { status: 200 });
  });
  const request = requestFor({ name: 'Sarah', email: 'sarah@example.com', message: 'Hello' });
  const result = await onRequestPost({ request, env });
  assert.equal(result.status, 200);
  assert.equal(delivery.reply_to, 'sarah@example.com');
  assert.equal(delivery.to[0], 'moumena@example.com');

  const unconfigured = await onRequestPost({ request: requestFor({ name: 'Sarah', email: 'sarah@example.com', message: 'Hello' }), env: {} });
  assert.equal(unconfigured.status, 503);
});
