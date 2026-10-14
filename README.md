# Moumena portfolio

React/Vite portfolio with a Cloudflare Pages Function for the contact form.

## Content dashboard

After deployment, open `https://moumena.art/admin`. Only a confirmed Supabase Auth user with the email `moumena94@gmail.com` can save content or upload media. Choose **إنشاء الحساب لأول مرة** with a strong password, confirm the email, then sign in. Alternatively, create/confirm this user under **Supabase → Authentication → Users** and sign in with the password you set there. Do not share the password or a Supabase secret/service-role key with the frontend.

For email confirmation, configure **Supabase → Authentication → SMTP Settings** if the project's default mailer cannot deliver to that address. Add `https://moumena.art/admin` to **Authentication → URL Configuration → Redirect URLs**; set the Site URL to `https://moumena.art`. The dashboard uses the public Supabase publishable key, while RLS authorizes writes only for the confirmed owner account. The public site keeps its built-in content if the free Supabase project is paused.

Projects accept image uploads (up to 10 MB each) and video links. Google Drive files need **Anyone with the link** access for visitors to view embedded previews. YouTube and Vimeo links are supported too. The **حفظ ونشر** button publishes all pending edits. Updating the visible contact email in the dashboard does not change the Cloudflare `CONTACT_TO_EMAIL` setting used by the contact form.

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
