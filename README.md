# Joseph Yorke-Westcott Portfolio

A static portfolio site for Joseph Yorke-Westcott, structured around Work, Play, and About Me.

## Site Structure

- `Work`: homepage section with four placeholder project rows ready for real case-study details.
- `work/butu-magazine.html`: project page for BUTU Magazine Issue 1.
- `work/technicolour.html`: project page for Technicolour.
- `work/placeholder-3.html` and `work/placeholder-4.html`: reserved project pages for future work.
- `Play`: experimental section for passion projects, hobby work, type studies, image tests, and loose visual explorations.
- `About Me`: bio paragraphs plus direct links for email, Instagram, and resume.

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static server.

## Publish Temporarily on Vercel

### Vercel Dashboard

1. Create a GitHub repository and push these files.
2. Go to Vercel and choose `Add New Project`.
3. Import the repository.
4. Keep the framework preset as `Other`.
5. Leave the build command empty.
6. Set the output directory to `.` if Vercel asks.
7. Deploy.

Vercel will give you a temporary URL like `project-name.vercel.app`.

### Vercel CLI

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

Replace the placeholder email, Instagram URL, and resume link in `index.html` before publishing publicly.

## Figma Reference

Reference file created in Figma:

https://www.figma.com/design/XW38fsUaXfNaboxsds8KVg
