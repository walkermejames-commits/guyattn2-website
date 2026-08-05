# Guy Elton Decorating & Interiors

Website for Guy Elton's decorating and home-improvement business in Tunbridge
Wells and the surrounding area.

## Services featured

- Interior and exterior painting and decorating
- Interior and exterior design
- Patios and decking
- Flooring

## Local development

Requires Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

The page content lives in `app/page.tsx`, the design in `app/globals.css`, and
the project photograph in `public/work/`.

## Build and test

```bash
npm run build
npm run validate:artifact
```

The verified build creates a Cloudflare Worker entry point at
`dist/server/index.js` and static browser assets under `dist/client/`.

## Publish on Cloudflare Workers

1. Add this repository to Cloudflare Workers Builds.
2. Use `npm ci && npm run build` as the build command.
3. Use `npx wrangler deploy` as the deploy command.
4. After the first successful deployment, open the Worker in Cloudflare and
   add `guyattn2.com` under **Settings → Domains & Routes → Custom Domain**.
5. Add `www.guyattn2.com` as a second custom domain if the `www` address is
   also required.

The included `wrangler.jsonc` points Cloudflare to the server bundle and static
assets. Do not commit Cloudflare API tokens or other secrets to this repository.

## Current contact details

- Phone: 07424 824632
- Email: guy312312@hotmail.com

Confirm these details with Guy before promoting the domain publicly.
