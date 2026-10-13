const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
});

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin');
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return json({ error: 'invalid_origin' }, 403);
      }
    } catch {
      return json({ error: 'invalid_origin' }, 403);
    }
  }
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) {
    return json({ error: 'invalid_content_type' }, 415);
  }
  if (Number(request.headers.get('Content-Length')) > 10000) {
    return json({ error: 'message_too_large' }, 413);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  if (typeof body !== 'object' || body === null) return json({ error: 'invalid_message' }, 400);
  if (body.website) return json({ ok: true }); // Hidden field catches simple form bots.

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (
    !name || name.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
    !message || message.length > 5000
  ) {
    return json({ error: 'invalid_message' }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
    return json({ error: 'not_configured' }, 503);
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Portfolio inquiry from ${name.replace(/[\r\n]/g, ' ')}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
    return response.ok ? json({ ok: true }) : json({ error: 'delivery_failed' }, 502);
  } catch {
    return json({ error: 'delivery_failed' }, 502);
  }
}
