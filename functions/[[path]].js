/**
 * Cloudflare Pages Function - [[path]].js
 * 
 * Catches all routes and server-renders the appropriate tool page.
 * Returns full HTML with unique metadata for SEO.
 */

import metadata from './meta.json';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/|\/$/g, ''); // Remove leading/trailing slashes
  
  // Homepage
  if (!path || path === 'index.html') {
    return await serveHomepage(context);
  }
  
  // Tool pages
  const toolId = path;
  const tool = metadata.tools.find(t => t.id === toolId);
  
  if (tool) {
    return await serveToolPage(context, tool);
  }
  
  // 404
  return new Response('Not Found', { status: 404 });
}

async function serveHomepage(context) {
  // Serve static homepage from /public/index.html
  return await context.env.ASSETS.fetch(context.request);
}

async function serveToolPage(context, tool) {
  const meta = metadata.metadata[tool.id];
  const canonicalUrl = `https://peaktoolshub.com/${tool.id}/`;
  
  const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0F4C81">

<title>${meta.title}</title>
<meta name="description" content="${meta.desc}">
<link rel="canonical" href="${canonicalUrl}">

<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonicalUrl}">
<meta name="twitter:card" content="summary_large_image">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
</head>
<body>

<!-- Navigation (SSR'd for SEO) -->
<nav>
  <a href="/" class="nav-logo">
    <div class="nav-logo-icon">PT</div>
    <span class="nav-logo-text">Peak<span>ToolsHub</span></span>
  </a>
  <div class="nav-search">
    <input type="text" id="search" placeholder="Search tools..." autocomplete="off">
  </div>
  <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
</nav>

<!-- Main content area -->
<div class="layout">
  <!-- Sidebar with all tools (for crawlability) -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-title">💵 Finance</div>
      ${generateSidebarLinks('finance')}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">📅 Date & Time</div>
      ${generateSidebarLinks('datetime')}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">🔄 Converters</div>
      ${generateSidebarLinks('converters')}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">🛒 Daily Life</div>
      ${generateSidebarLinks('daily')}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">💪 Health</div>
      ${generateSidebarLinks('health')}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">🏡 Home Planning</div>
      ${generateSidebarLinks('home')}
    </div>
    <div class="sidebar-section">
      <div class="sidebar-title">🇲🇾 Malaysia Tools</div>
      ${generateSidebarLinks('malaysia')}
    </div>
  </aside>

  <!-- Tool content (rendered client-side after JS loads, but shell is here for SEO) -->
  <main id="app" data-tool="${tool.id}">
    <div class="tool-header">
      <h1 class="tool-h1">${tool.icon} ${tool.name}</h1>
      <p class="tool-desc-short">${tool.desc}</p>
    </div>
    <div class="tool-card">
      <p style="text-align:center;color:var(--text-muted);padding:2rem;">Loading calculator...</p>
    </div>
  </main>
</div>

<!-- Footer with all tool links (critical for SEO crawlability) -->
<footer style="background:var(--bg-card);border-top:1px solid var(--border);padding:2rem 1rem;margin-top:3rem">
  <div style="max-width:1200px;margin:0 auto">
    <h2 style="font-size:18px;margin-bottom:1rem">All Calculators & Tools</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0.5rem;font-size:14px">
      ${generateFooterLinks()}
    </div>
    <p style="text-align:center;margin-top:2rem;font-size:13px;color:var(--text-muted)">
      © ${new Date().getFullYear()} PeakToolsHub. All rights reserved.
    </p>
  </div>
</footer>

<!-- Load interactive functionality -->
<script src="/app.js"></script>
<script>
// Boot the tool after JS loads
window.addEventListener('DOMContentLoaded', function() {
  const toolId = document.getElementById('app').getAttribute('data-tool');
  if (window.navigate) {
    window.navigate(toolId);
  }
});
</script>

</body>
</html>`;

  return new Response(html, {
    headers: { 
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  });
}

function generateSidebarLinks(cluster) {
  return metadata.tools
    .filter(t => t.cluster === cluster)
    .map(t => `<a href="/${t.id}/" class="sidebar-link">${t.icon} ${t.name}</a>`)
    .join('\n      ');
}

function generateFooterLinks() {
  return metadata.tools
    .map(t => `<a href="/${t.id}/" style="color:var(--text-muted);text-decoration:none;hover:color:var(--primary)">${t.name}</a>`)
    .join('\n      ');
}
