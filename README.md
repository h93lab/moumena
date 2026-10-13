# Moumena portfolio

React/Vite portfolio with a Cloudflare Pages Function for the contact form.

## Develop and build

```sh
npm ci
npm run dev
npm run lint
npm run build
```

`npm run dev` previews the interface. To test the contact endpoint locally, copy `.env.example` to `.dev.vars`, fill in real values, build, then run `npx wrangler pages dev dist`. Keep `.dev.vars` private.

## Deploy on Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages. Use `main` as the production branch, `npm run build` as the build command, and `dist` as the output directory. The `functions/api/contact.js` endpoint deploys with the site. `public/_routes.json` keeps static requests outside Pages Functions.

Under **Settings → Variables and Secrets**, set `RESEND_API_KEY` as an encrypted secret. Set `CONTACT_FROM_EMAIL` to a sender on a domain verified in Resend, and `CONTACT_TO_EMAIL` to the inbox that should receive inquiries. Redeploy after setting them. The form shows an error and offers a direct email link until these values are configured; it never reports an unsent message as delivered.
