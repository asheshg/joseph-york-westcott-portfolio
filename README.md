# Joseph York-Westcott Portfolio

A static sample portfolio site inspired by the sparse editorial structure of `consul.studio`.

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static server.

## Publish Temporarily on Vercel

### Option A: Vercel Dashboard

1. Create a GitHub repository and push these files.
2. Go to Vercel and choose `Add New Project`.
3. Import the repository.
4. Keep the framework preset as `Other`.
5. Leave the build command empty.
6. Set the output directory to `.` if Vercel asks.
7. Deploy.

Vercel will give you a temporary URL like `project-name.vercel.app`.

### Option B: Vercel CLI

If Node.js is installed:

```bash
npx vercel deploy --yes
```

For a production deployment later:

```bash
npx vercel deploy --prod
```

## Add a Domain Later

1. Buy the domain from a registrar such as Namecheap, GoDaddy, Cloudflare, or Google Domains/Squarespace Domains.
2. In Vercel, open the project and go to `Settings > Domains`.
3. Add the domain.
4. Follow Vercel's DNS instructions.
5. If using Vercel nameservers, update nameservers at the registrar.
6. If keeping registrar DNS, add the `A` and `CNAME` records Vercel provides.

Replace the placeholder email in `index.html` before publishing publicly.

## Figma Reference

Reference file created in Figma:

https://www.figma.com/design/XW38fsUaXfNaboxsds8KVg

Alternative direction notes are in `figma-alternative-directions.md`.

Import-ready SVG frames:

- `figma-import-option-a-ransmeier.svg`
- `figma-import-option-a-mobile.svg`
- `figma-import-option-b-public-domain.svg`
- `figma-import-option-b-mobile.svg`
