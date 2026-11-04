# AECTIS – under construction page

Static single-page site built with [Astro](https://astro.build). English and Dutch, switchable with the toggle in the footer. No cookies, no tracking, no external scripts.

The language choice is remembered in the browser's localStorage (stays on the visitor's device, never sent anywhere).

## Edit the details

All company details are at the top of `src/pages/index.astro`. For a sole proprietorship (eenmanszaak) the owner's name is normally shown too: fill in `owner` there to display it.

Colors are CSS variables at the top of the `<style>` block (`--purple`, `--violet`, `--blue`, `--black`), so changing the palette later is a one-minute job.

## Run locally

Requires Node.js (current LTS).

```
npm install
npm run dev       # preview at http://localhost:4321
npm run build     # static output in ./dist
```

## Deploy on Cloudflare

Option A (recommended): push this folder to a GitHub/GitLab repository, then in the Cloudflare dashboard go to Workers & Pages, create an application, import the repository, and use:

- Build command: `npm run build`
- Output directory: `dist`

Every push to the main branch then redeploys automatically.

Option B: direct upload from your computer.

```
npm run build
npx wrangler pages deploy dist --project-name aectis
```

Then open the project in Cloudflare, go to Custom domains, and add `aectis.be` (and `www.aectis.be`). Since your DNS is already on Cloudflare, the records are created for you and HTTPS is automatic.
