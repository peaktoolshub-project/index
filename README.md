# PeakToolsHub - Multi-Page Deployment (Option B - SSR)

## Architecture

This is a **server-side rendered** setup using Cloudflare Pages Functions.

**Key files:**
- `functions/[[path]].js` - Edge function that catches all routes and renders tool pages
- `functions/meta.json` - Tool metadata (titles, descriptions)
- `public/index.html` - Static homepage
- `public/styles.css` - Shared CSS (17KB)
- `public/app.js` - Shared JavaScript (388KB)

## How it works

1. User visits `/epf-calculator/`
2. Cloudflare Function intercepts the request
3. Function generates full HTML with unique `<title>`, meta description, H1
4. HTML includes links to shared `/styles.css` and `/app.js`
5. Google sees complete HTML immediately (no client-side rendering delay)
6. Tool becomes interactive after JS loads

## SEO Features

✓ Real URLs (no hash fragments)
✓ Unique metadata per tool
✓ Server-side rendered HTML shell
✓ All 50 tools linked in sidebar + footer (crawlability)
✓ Canonical tags
✓ Open Graph tags

## Deployment to Cloudflare Pages

### Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
```

### Step 2: Authenticate

```bash
wrangler login
```

### Step 3: Deploy

```bash
cd peaktoolshub-rebuild
wrangler pages deploy public --project-name=peaktoolshub
```

That's it! Your site will be live at `peaktoolshub.pages.dev` within 60 seconds.

### Step 4: Connect custom domain

In Cloudflare dashboard:
1. Go to Workers & Pages → peaktoolshub
2. Custom domains → Add domain
3. Enter `peaktoolshub.com`
4. Wait for DNS propagation (5-60 min)

## File Structure

```
peaktoolshub-rebuild/
├── functions/
│   ├── [[path]].js          ← Edge function (SSR logic)
│   └── meta.json            ← Tool metadata
├── public/
│   ├── index.html           ← Homepage
│   ├── styles.css           ← Shared CSS
│   └── app.js               ← Shared JS (all tool logic)
├── wrangler.toml            ← Cloudflare config
└── README.md                ← This file
```

## Known Issues

### Annual Leave Optimizer Bug

**Issue:** Suggests leave AFTER holidays instead of BEFORE.

**Example:** June 16, 2026 (Tuesday) is a holiday. Tool suggests taking leave June 17-18 (Wed-Thu) to get 3 days off. Should suggest taking June 11-12 (Thu-Fri previous week) to bridge weekend → holiday for 6 days off.

**Root cause:** Logic in `calcAnnualLeave()` function (line ~184613 in app.js) scans forward from holidays instead of backward.

**Fix needed:** Reverse the bridge logic to look for preceding weekends.

**Status:** Marked for post-deployment fix.

## Testing Locally

Cloudflare Pages Functions require the Wrangler CLI to test locally:

```bash
wrangler pages dev public
```

Visit `http://localhost:8788/` to test.

## Sitemap Generation

After deployment, generate your sitemap with this structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://peaktoolshub.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://peaktoolshub.com/salary-calculator/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... all 50 tools ... -->
</urlset>
```

Save as `public/sitemap.xml` and redeploy.

## Future Enhancements

1. Fix Annual Leave Optimizer logic
2. Add Google Analytics tracking code
3. Add Google Search Console verification
4. Generate sitemap automatically
5. Add structured data (JSON-LD) for rich results

