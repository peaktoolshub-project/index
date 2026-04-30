
// ============================================================
// DATA
// ============================================================
const CURRENCIES = [
  {code:'MYR',name:'Malaysian Ringgit',flag:'🇲🇾'},
  {code:'USD',name:'US Dollar',flag:'🇺🇸'},
  {code:'GBP',name:'British Pound',flag:'🇬🇧'},
  {code:'EUR',name:'Euro',flag:'🇪🇺'},
  {code:'SGD',name:'Singapore Dollar',flag:'🇸🇬'},
  {code:'AUD',name:'Australian Dollar',flag:'🇦🇺'},
  {code:'JPY',name:'Japanese Yen',flag:'🇯🇵'},
  {code:'CNY',name:'Chinese Yuan',flag:'🇨🇳'},
  {code:'INR',name:'Indian Rupee',flag:'🇮🇳'},
  {code:'HKD',name:'Hong Kong Dollar',flag:'🇭🇰'},
  {code:'CAD',name:'Canadian Dollar',flag:'🇨🇦'},
  {code:'CHF',name:'Swiss Franc',flag:'🇨🇭'},
  {code:'NZD',name:'New Zealand Dollar',flag:'🇳🇿'},
  {code:'KRW',name:'South Korean Won',flag:'🇰🇷'},
  {code:'THB',name:'Thai Baht',flag:'🇹🇭'},
  {code:'IDR',name:'Indonesian Rupiah',flag:'🇮🇩'},
  {code:'PHP',name:'Philippine Peso',flag:'🇵🇭'},
  {code:'BDT',name:'Bangladeshi Taka',flag:'🇧🇩'},
  {code:'PKR',name:'Pakistani Rupee',flag:'🇵🇰'},
  {code:'AED',name:'UAE Dirham',flag:'🇦🇪'},
  {code:'SAR',name:'Saudi Riyal',flag:'🇸🇦'},
  {code:'QAR',name:'Qatari Riyal',flag:'🇶🇦'},
  {code:'KWD',name:'Kuwaiti Dinar',flag:'🇰🇼'},
  {code:'BHD',name:'Bahraini Dinar',flag:'🇧🇭'},
  {code:'EGP',name:'Egyptian Pound',flag:'🇪🇬'},
  {code:'ZAR',name:'South African Rand',flag:'🇿🇦'},
  {code:'NGN',name:'Nigerian Naira',flag:'🇳🇬'},
  {code:'BRL',name:'Brazilian Real',flag:'🇧🇷'},
  {code:'MXN',name:'Mexican Peso',flag:'🇲🇽'},
  {code:'TRY',name:'Turkish Lira',flag:'🇹🇷'},
  {code:'RUB',name:'Russian Ruble',flag:'🇷🇺'},
  {code:'SEK',name:'Swedish Krona',flag:'🇸🇪'},
  {code:'NOK',name:'Norwegian Krone',flag:'🇳🇴'},
  {code:'DKK',name:'Danish Krone',flag:'🇩🇰'},
  {code:'PLN',name:'Polish Zloty',flag:'🇵🇱'},
  {code:'VND',name:'Vietnamese Dong',flag:'🇻🇳'},
  {code:'TWD',name:'New Taiwan Dollar',flag:'🇹🇼'},
  {code:'BND',name:'Brunei Dollar',flag:'🇧🇳'},
  {code:'LKR',name:'Sri Lankan Rupee',flag:'🇱🇰'},
  {code:'NPR',name:'Nepalese Rupee',flag:'🇳🇵'},
  {code:'ILS',name:'Israeli Shekel',flag:'🇮🇱'},
  {code:'JOD',name:'Jordanian Dinar',flag:'🇯🇴'},
  {code:'OMR',name:'Omani Rial',flag:'🇴🇲'},
  {code:'KES',name:'Kenyan Shilling',flag:'🇰🇪'},
  {code:'GHS',name:'Ghanaian Cedi',flag:'🇬🇭'},
  {code:'CLP',name:'Chilean Peso',flag:'🇨🇱'},
  {code:'COP',name:'Colombian Peso',flag:'🇨🇴'},
  {code:'PEN',name:'Peruvian Sol',flag:'🇵🇪'},
  {code:'ARS',name:'Argentine Peso',flag:'🇦🇷'},
  {code:'UAH',name:'Ukrainian Hryvnia',flag:'🇺🇦'},
  {code:'CZK',name:'Czech Koruna',flag:'🇨🇿'},
  {code:'HUF',name:'Hungarian Forint',flag:'🇭🇺'},
  {code:'RON',name:'Romanian Leu',flag:'🇷🇴'},
  {code:'ISK',name:'Icelandic Krona',flag:'🇮🇸'},
  {code:'MUR',name:'Mauritian Rupee',flag:'🇲🇺'},
  {code:'FJD',name:'Fijian Dollar',flag:'🇫🇯'},
  {code:'XOF',name:'West African CFA Franc',flag:'🌍'},
  {code:'MAD',name:'Moroccan Dirham',flag:'🇲🇦'},
  {code:'DZD',name:'Algerian Dinar',flag:'🇩🇿'},
  {code:'UGX',name:'Ugandan Shilling',flag:'🇺🇬'},
  {code:'TZS',name:'Tanzanian Shilling',flag:'🇹🇿'},
];

const COUNTRIES_MY_TAX = [
  {value:'MY', label:'🇲🇾 Malaysia (MYR)', currency:'MYR', epf:true},
  {value:'SG', label:'🇸🇬 Singapore (SGD)', currency:'SGD'},
  {value:'US', label:'🇺🇸 United States (USD)', currency:'USD'},
  {value:'GB', label:'🇬🇧 United Kingdom (GBP)', currency:'GBP'},
  {value:'AU', label:'🇦🇺 Australia (AUD)', currency:'AUD'},
  {value:'CA', label:'🇨🇦 Canada (CAD)', currency:'CAD'},
  {value:'IN', label:'🇮🇳 India (INR)', currency:'INR'},
  {value:'JP', label:'🇯🇵 Japan (JPY)', currency:'JPY'},
  {value:'NZ', label:'🇳🇿 New Zealand (NZD)', currency:'NZD'},
  {value:'AE', label:'🇦🇪 UAE (AED)', currency:'AED'},
  {value:'OTHER', label:'🌍 Other Country', currency:'USD'},
];

const MY_TAX_BRACKETS_2024 = [
  {min:0, max:5000, rate:0},
  {min:5001, max:20000, rate:0.01},
  {min:20001, max:35000, rate:0.03},
  {min:35001, max:50000, rate:0.08},
  {min:50001, max:70000, rate:0.13},
  {min:70001, max:100000, rate:0.21},
  {min:100001, max:250000, rate:0.24},
  {min:250001, max:400000, rate:0.24},
  {min:400001, max:600000, rate:0.25},
  {min:600001, max:1000000, rate:0.26},
  {min:1000001, max:Infinity, rate:0.28},
];

const ALL_TOOLS = [
  {id:'salary-calculator', name:'Salary Calculator', cluster:'finance', icon:'💵', desc:'Net pay after deductions'},
  {id:'income-tax-calculator', name:'Income Tax Calculator', cluster:'finance', icon:'🧾', desc:'Calculate your tax liability'},
  {id:'epf-calculator', name:'EPF Calculator', cluster:'finance', icon:'🏦', desc:'Retirement savings projection'},
  {id:'loan-calculator', name:'Loan Calculator', cluster:'finance', icon:'💳', desc:'Monthly payment & interest'},
  {id:'mortgage-calculator', name:'Mortgage Calculator', cluster:'finance', icon:'🏠', desc:'Home loan calculator'},
  {id:'car-loan-calculator', name:'Car Loan Calculator', cluster:'finance', icon:'🚗', desc:'Vehicle financing calculator'},
  {id:'credit-card-interest', name:'Credit Card Interest', cluster:'finance', icon:'💳', desc:'Interest & payoff calculator'},
  {id:'compound-interest', name:'Compound Interest', cluster:'finance', icon:'📈', desc:'Grow your investments'},
  {id:'investment-returns', name:'Investment Returns', cluster:'finance', icon:'📊', desc:'Portfolio growth calculator'},
  {id:'inflation-calculator', name:'Inflation Calculator', cluster:'finance', icon:'💹', desc:'Purchasing power over time'},
  {id:'age-calculator', name:'Age Calculator', cluster:'datetime', icon:'🎂', desc:'Exact age in years/months/days'},
  {id:'date-difference', name:'Date Difference', cluster:'datetime', icon:'📆', desc:'Days between two dates'},
  {id:'working-days', name:'Working Days Calculator', cluster:'datetime', icon:'📅', desc:'Business days between dates'},
  {id:'public-holidays', name:'Public Holiday Calendar', cluster:'datetime', icon:'🗓️', desc:'Holidays by country'},
  {id:'long-weekend-planner', name:'Long Weekend Planner', cluster:'datetime', icon:'🏖️', desc:'Find all long weekends'},
  {id:'annual-leave-optimizer', name:'Annual Leave Optimizer', cluster:'datetime', icon:'🔥', desc:'Maximize your days off'},
  {id:'school-holidays', name:'School Holiday Calendar', cluster:'datetime', icon:'🎒', desc:'School terms & holidays'},
  {id:'countdown-timer', name:'Countdown Timer', cluster:'datetime', icon:'⏳', desc:'Count down to any event'},
  {id:'currency-converter', name:'Currency Converter', cluster:'converters', icon:'💱', desc:'170+ world currencies'},
  {id:'length-converter', name:'Length Converter', cluster:'converters', icon:'📏', desc:'mm, cm, m, km, inches, feet'},
  {id:'weight-converter', name:'Weight Converter', cluster:'converters', icon:'⚖️', desc:'kg, lb, oz, stone and more'},
  {id:'temperature-converter', name:'Temperature Converter', cluster:'converters', icon:'🌡️', desc:'Celsius, Fahrenheit, Kelvin'},
  {id:'timezone-converter', name:'Time Zone Converter', cluster:'converters', icon:'🕐', desc:'Convert between timezones'},
  {id:'data-storage-converter', name:'Data Storage Converter', cluster:'converters', icon:'💾', desc:'MB, GB, TB and more'},
  {id:'speed-converter', name:'Speed Converter', cluster:'converters', icon:'🚀', desc:'km/h, mph, knots, Mach'},
  {id:'cooking-converter', name:'Cooking Converter', cluster:'converters', icon:'🍳', desc:'Cups, ml, tbsp, tsp'},
  {id:'discount-calculator', name:'Discount Calculator', cluster:'daily', icon:'🏷️', desc:'Sale price & savings'},
  {id:'percentage-calculator', name:'Percentage Calculator', cluster:'daily', icon:'%', desc:'3 percentage modes'},
  {id:'tip-calculator', name:'Tip Calculator', cluster:'daily', icon:'🍽️', desc:'Split bills with tip'},
  {id:'split-bill', name:'Split Bill Calculator', cluster:'daily', icon:'👥', desc:'Divide bills fairly'},
  {id:'fuel-cost', name:'Fuel Cost Calculator', cluster:'daily', icon:'⛽', desc:'Trip fuel cost estimate'},
  {id:'electricity-bill', name:'Electricity Bill Estimator', cluster:'daily', icon:'⚡', desc:'Monthly electricity cost'},
  {id:'internet-speed', name:'Internet Speed Tool', cluster:'daily', icon:'🌐', desc:'Speed test & converter'},
  {id:'password-generator', name:'Password Generator', cluster:'daily', icon:'🔐', desc:'Strong secure passwords'},
  {id:'bmi-calculator', name:'BMI Calculator', cluster:'health', icon:'⚖️', desc:'Body mass index checker'},
  {id:'calorie-calculator', name:'Calorie Calculator', cluster:'health', icon:'🥗', desc:'Daily calorie needs (TDEE)'},
  {id:'body-fat', name:'Body Fat Calculator', cluster:'health', icon:'💪', desc:'Estimate body fat %'},
  {id:'ideal-weight', name:'Ideal Weight Calculator', cluster:'health', icon:'🎯', desc:'Healthy weight range'},
  {id:'water-intake', name:'Water Intake Calculator', cluster:'health', icon:'💧', desc:'Daily hydration guide'},
  {id:'step-counter', name:'Step Counter', cluster:'health', icon:'👟', desc:'Steps to distance converter'},
  {id:'rent-vs-buy', name:'Rent vs Buy Calculator', cluster:'home', icon:'🏡', desc:'Buy or rent analysis'},
  {id:'cost-of-living', name:'Cost of Living Calculator', cluster:'home', icon:'🌆', desc:'City cost comparison'},
  {id:'moving-cost', name:'Moving Cost Calculator', cluster:'home', icon:'📦', desc:'Relocation cost estimate'},
  {id:'renovation-budget', name:'Renovation Budget', cluster:'home', icon:'🔨', desc:'Home reno cost planner'},
  {id:'zakat-calculator', name:'Zakat Calculator', cluster:'malaysia', icon:'🕌', desc:'Zakat on income & savings'},
  {id:'sst-calculator', name:'SST Calculator', cluster:'malaysia', icon:'🧾', desc:'Malaysia service & sales tax'},
  {id:'ptptn-calculator', name:'PTPTN Calculator', cluster:'malaysia', icon:'🎓', desc:'Student loan repayment'},
  {id:'road-tax-calculator', name:'Road Tax Calculator', cluster:'malaysia', icon:'🚗', desc:'Malaysia road tax estimate'},
  {id:'insurance-estimator', name:'Insurance Premium Estimator', cluster:'malaysia', icon:'🛡️', desc:'Life & health insurance'},
  {id:'profit-margin', name:'Profit Margin Calculator', cluster:'malaysia', icon:'📊', desc:'Business profitability'},
];

// ============================================================
// UTILITIES
// ============================================================
const CURRENT_YEAR = new Date().getFullYear();
const NEXT_YEAR = CURRENT_YEAR + 1;
const PREV_YEAR = CURRENT_YEAR - 1;
function dynamicYears(start, end) {
  const arr = [];
  for(let y = start; y <= end; y++) arr.push(y);
  return arr;
}
function todayISO() { return new Date().toISOString().split('T')[0]; }
function yearsAgoISO(years) {
  const d = new Date();
  d.setFullYear(d.getFullYear() - years);
  return d.toISOString().split('T')[0];
}

function detectUserCountry() {
  try {
    const locale = navigator.language || 'en-US';
    const region = locale.split('-')[1] || 'US';
    const map = {
      'MY':'MY','SG':'SG','GB':'GB','UK':'GB','US':'US','CA':'CA',
      'AU':'AU','NZ':'NZ','IN':'IN','JP':'JP','AE':'AE'
    };
    return map[region] || 'OTHER';
  } catch(e) { return 'OTHER'; }
}
const USER_COUNTRY = detectUserCountry();


const fmt = (n, cur='', dec=2) => {
  if (isNaN(n)) return '—';
  const formatted = Math.abs(n).toLocaleString('en-MY', {minimumFractionDigits:dec, maximumFractionDigits:dec});
  return (cur ? cur + ' ' : '') + (n < 0 ? '-' : '') + formatted;
};
const fmtRM = (n) => fmt(n, 'RM');
const pct = (n) => (n*100).toFixed(1) + '%';

function currencySelect(id, defaultCur='MYR', label='Currency') {
  const opts = CURRENCIES.map(c => `<option value="${c.code}" ${c.code===defaultCur?'selected':''}>${c.flag} ${c.code} — ${c.name}</option>`).join('');
  return `<div class="field"><label for="${id}">${label}</label><select id="${id}">${opts}</select></div>`;
}
function getSymbol(code) {
  const map = {MYR:'RM',USD:'$',GBP:'£',EUR:'€',SGD:'S$',AUD:'A$',JPY:'¥',CNY:'¥',INR:'₹',HKD:'HK$',CAD:'C$',CHF:'CHF',NZD:'NZ$',KRW:'₩',THB:'฿',IDR:'Rp',PHP:'₱',AED:'AED',SAR:'SAR',BRL:'R$',ZAR:'R',TRY:'₺',SEK:'kr',NOK:'kr',DKK:'kr'};
  return map[code] || code + ' ';
}
function calcMYTax(annualIncome) {
  let tax = 0, remaining = annualIncome;
  for (const b of MY_TAX_BRACKETS_2024) {
    if (remaining <= 0) break;
    const taxable = Math.min(remaining, b.max - b.min);
    if (annualIncome > b.min) tax += Math.max(0, taxable) * b.rate;
    remaining -= (b.max - b.min);
  }
  return Math.max(0, tax);
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => showToast('✓ Copied to clipboard!'));
}
function faqHTML(faqs) {
  return faqs.map((f,i) => `
    <div class="faq-item" id="faq${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span><span class="faq-q-arrow">▾</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}
function toggleFaq(i) {
  const el = document.getElementById('faq'+i);
  el.classList.toggle('open');
}
function relatedHTML(ids) {
  const tools = ids.map(id => ALL_TOOLS.find(t=>t.id===id)).filter(Boolean);
  return `<div class="related-grid">${tools.map(t=>`
    <div class="related-card" onclick="navigate('${t.id}')">
      <div class="related-card-icon">${t.icon}</div>
      <div class="related-card-name">${t.name}</div>
    </div>`).join('')}</div>`;
}
function seoBlock(title, desc, steps, faqs, related) {
  // Inject JSON-LD structured data
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": title + " — PeakToolsHub",
        "url": "https://peaktoolshub.com/" + window.location.hash,
        "description": desc,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {"@type": "Answer", "text": f.a}
        }))
      },
      {
        "@type": "HowTo",
        "name": "How to use the " + title,
        "step": steps.map((s, i) => ({"@type": "HowToStep", "position": i+1, "text": s}))
      }
    ]
  };
  injectSchema(schema);
  return `
    <div class="seo-section">
      <h2>About This Calculator</h2>
      <p>${desc}</p>
      <h2>How to Use the ${title}</h2>
      <ol>${steps.map(s=>`<li>${s}</li>`).join('')}</ol>
      <div style="margin-top:24px">
        <h2>Frequently Asked Questions</h2>
        ${faqHTML(faqs)}
      </div>
      <div style="margin-top:24px">
        <h2>Related Tools</h2>
        ${relatedHTML(related)}
      </div>
    </div>`;
}
function setMeta(title, desc, path) {
  document.title = title + ' | PeakToolsHub';
  document.querySelector('meta[name="description"]').setAttribute('content', desc);
  const canon = document.querySelector('link[rel="canonical"]') || document.createElement('link');
  canon.rel='canonical'; canon.href='https://peaktoolshub.com/'+path;
  if(!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canon);
}

// ============================================================
// ROUTING
// ============================================================
function navigate(page) {
  window.location.hash = page;
  closeSidebar();
}
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}
function closeSidebar() {
  if(window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
}
window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);

function renderPage() {
  const hash = window.location.hash.replace('#','') || 'home';
  document.querySelectorAll('.aside-link').forEach(l=>l.classList.remove('active'));
  const app = document.getElementById('app');

  if(hash === 'home') {
    setActive('nav-home'); renderHome(); return;
  }
  const clusters = ['finance','datetime','converters','daily','health','home-planning','malaysia'];
  if(clusters.includes(hash)) { setActive('nav-'+hash.replace('-','_').replace('home-planning','home-plan')); renderCluster(hash); return; }
  const tool = ALL_TOOLS.find(t=>t.id===hash);
  if(tool) { setActive('nav-'+tool.cluster.replace('-planning','-plan')); renderTool(hash); return; }
  renderHome();
}
function setActive(id) {
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}

// ============================================================
// HOME PAGE
// ============================================================
function renderHome() {
  setMeta('PeakToolsHub — Every Calculator. Every Country.','47 free calculators for Malaysia and the world. Finance, health, converters, and more. No signup.','');
  const clusters = [
    {id:'finance', icon:'💰', name:'Finance & Calculators', count:10, star:'Salary Calculator'},
    {id:'datetime', icon:'📅', name:'Date, Time & Holidays', count:8, star:'Annual Leave Optimizer 🔥'},
    {id:'converters', icon:'💱', name:'Converters', count:8, star:'Currency Converter'},
    {id:'daily', icon:'🧮', name:'Daily Life Tools', count:8, star:'Discount Calculator'},
    {id:'health', icon:'⚖️', name:'Health & Body', count:6, star:'BMI Calculator'},
    {id:'home-planning', icon:'🏠', name:'Home & Life Planning', count:4, star:'Rent vs Buy'},
    {id:'malaysia', icon:'🇲🇾', name:'Malaysia Specific', count:7, star:'Zakat Calculator 🔥'},
  ];
  document.getElementById('app').innerHTML = `
    <div class="hero">
      <div class="hero-title">Every Calculator.<br><span>Every Country.</span></div>
      <p class="hero-sub">Free tools for finance, health, conversions, and daily life. Used worldwide in 195+ countries.</p>
      <div class="stats-bar">
        <span class="stat-pill">47 free tools</span>
        <span class="stat-pill">170+ currencies</span>
        <span class="stat-pill">195 countries</span>
        <span class="stat-pill">100% free forever</span>
      </div>
    </div>
    <div class="section-title">Tool Clusters</div>
    <div class="cluster-grid">
      ${clusters.map(c=>`
        <div class="cluster-card" onclick="navigate('${c.id}')">
          <div class="cluster-icon">${c.icon}</div>
          <div class="cluster-name">${c.name}</div>
          <div class="cluster-count">${c.count} tools · Popular: ${c.star}</div>
        </div>`).join('')}
    </div>
    <div class="section-title">🔥 Popular Tools</div>
    <div class="tools-grid">
      ${['salary-calculator','currency-converter','bmi-calculator','zakat-calculator','annual-leave-optimizer','loan-calculator','income-tax-calculator','compound-interest'].map(id => {
        const t = ALL_TOOLS.find(x=>x.id===id);
        return t ? `<div class="tool-tile" onclick="navigate('${t.id}')"><div class="tool-tile-icon">${t.icon}</div><div class="tool-tile-name">${t.name}</div></div>` : '';
      }).join('')}
    </div>
    <div class="section-title">🌍 Country-Specific Tools</div>
    <div class="tools-grid">
      ${ALL_TOOLS.filter(t=>t.cluster==='malaysia').map(t=>`
        <div class="tool-tile" onclick="navigate('${t.id}')">
          <div class="tool-tile-icon">${t.icon}</div>
          <div class="tool-tile-name">${t.name}</div>
        </div>`).join('')}
    </div>`;
}

// ============================================================
// CLUSTER PAGE
// ============================================================
function renderCluster(cluster) {
  const clusterNames = {finance:'💰 Finance & Calculators',datetime:'📅 Date, Time & Holidays',converters:'💱 Converters',daily:'🧮 Daily Life Tools',health:'⚖️ Health & Body','home-planning':'🏠 Home & Life Planning',malaysia:'🇲🇾 Malaysia Specific'};
  const tools = ALL_TOOLS.filter(t=>t.cluster===cluster);
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span>${clusterNames[cluster]||cluster}</span></div>
      <h1 class="tool-h1">${clusterNames[cluster]||cluster}</h1>
    </div>
    <div class="tools-grid">
      ${tools.map(t=>`
        <div class="tool-tile" onclick="navigate('${t.id}')">
          <div class="tool-tile-icon">${t.icon}</div>
          <div class="tool-tile-name">${t.name}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:3px">${t.desc}</div>
        </div>`).join('')}
    </div>`;
}

// ============================================================
// TOOL RENDERER
// ============================================================
function renderTool(id) {
  const tools = {
    'salary-calculator': renderSalary,
    'income-tax-calculator': renderIncomeTax,
    'epf-calculator': renderEPF,
    'loan-calculator': renderLoan,
    'mortgage-calculator': renderMortgage,
    'car-loan-calculator': renderCarLoan,
    'credit-card-interest': renderCreditCard,
    'compound-interest': renderCompound,
    'investment-returns': renderInvestment,
    'inflation-calculator': renderInflation,
    'zakat-calculator': renderZakat,
    'sst-calculator': renderSST,
    'ptptn-calculator': renderPTPTN,
    'road-tax-calculator': renderRoadTax,
    'insurance-estimator': renderInsurance,
    'profit-margin': renderProfitMargin,
  };
  const fn = tools[id];
  if(fn) { fn(); return; }
  // Placeholder for tools not yet built
  const tool = ALL_TOOLS.find(t=>t.id===id);
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span>${tool?tool.icon+' '+tool.name:id}</span></div>
      <h1 class="tool-h1">${tool?tool.name:id}</h1>
    </div>
    <div class="tool-card" style="text-align:center;padding:48px">
      <div style="font-size:48px;margin-bottom:16px">${tool?tool.icon:'🔧'}</div>
      <div style="font-size:18px;font-weight:600;margin-bottom:8px">Coming in Part 2</div>
      <p style="color:var(--text-muted)">This tool is included in the next build iteration. Finance and Malaysia tools are available now.</p>
    </div>`;
}

// ============================================================
// TOOL: SALARY CALCULATOR
// ============================================================
function renderSalary() {
  setMeta('Salary Calculator — Net Pay Calculator Malaysia','Calculate your net take-home salary after EPF, SOCSO, EIS and income tax deductions. Supports Malaysia and all countries.','#salary-calculator');
  const countryOpts = COUNTRIES_MY_TAX.map(c=>`<option value="${c.value}">${c.label}</option>`).join('');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Salary Calculator</div>
      <h1 class="tool-h1">💵 Salary Calculator</h1>
      <p class="tool-desc-short">Calculate your exact net take-home pay after all deductions. Supports Malaysia EPF, SOCSO, EIS and PCB tax, plus custom rates for all other countries.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="salarySetFreq('monthly',this)">Monthly</button>
        <button class="tab-btn" onclick="salarySetFreq('annual',this)">Annual</button>
      </div>
      <div class="form-grid">
        <div class="field">
          <label>Gross Salary</label>
          <div class="field-prefix-wrap">
            <span class="field-prefix" id="salarySymbol">RM</span>
            <input type="number" id="grossSalary" placeholder="5000" value="5000" min="0">
          </div>
        </div>
        <div class="field">
          <label>Country</label>
          <select id="salaryCountry" onchange="salaryCountryChange()">${countryOpts}</select>
        </div>
        <div class="field" id="epfField">
          <label>EPF Employee Rate</label>
          <select id="epfRate" onchange="window._epfRateChanged=true">
            <option value="0.11" selected>11% — Malaysian (Age below 60)</option>
            <option value="0.055">5.5% — Malaysian (Age 60–75)</option>
            <option value="0.02">2% — Foreigner</option>
            <option value="0">0% — Voluntary opt-out (employer also contributes 0%)</option>
          </select>
        </div>
        <div class="field" id="customDeductField" style="display:none">
          <label>Est. Total Deductions %</label>
          <input type="number" id="customDeduct" placeholder="20" value="20" min="0" max="60">
          <span class="field-hint">Approx % for tax + social contributions in your country</span>
        </div>
        <div class="field form-full">
          <label>Additional Monthly Deductions (optional)</label>
          <input type="number" id="additionalDeduct" placeholder="0" value="0" min="0">
          <span class="field-hint">Loan repayments, union fees, etc.</span>
        </div>
      </div>
      <div class="btn-row">
        <button class="btn-calc" onclick="calcSalary()">⚡ Calculate Net Pay</button>
        <button class="btn-secondary" onclick="resetSalary()">Reset</button>
      </div>
      <div class="result-box" id="salaryResult">
        <div class="result-label">Monthly Take-Home Pay</div>
        <div class="result-main" id="salaryNetMonthly">—</div>
        <button class="copy-btn" onclick="copyToClipboard(document.getElementById('salaryNetMonthly').textContent)">📋 Copy</button>
        <div class="result-grid" id="salaryBreakdown"></div>
        <div id="salaryTable" style="margin-top:16px;overflow-x:auto"></div>
      </div>
    </div>
    ${seoBlock('Salary Calculator',
      'The PeakToolsHub Salary Calculator helps you calculate your exact net take-home pay after all statutory deductions. For Malaysian employees, it automatically applies the correct EPF (Kumpulan Wang Simpanan Pekerja) employee contribution of 11%, SOCSO at 0.5%, EIS at 0.2%, and PCB (Potongan Cukai Bulanan) income tax deduction based on the latest 2024 Malaysia tax brackets. Whether you are earning RM3,000 or RM30,000 per month, this tool gives you an accurate breakdown of every deduction so you know exactly what to expect in your bank account. For users outside Malaysia, select your country and enter an approximate deduction percentage to get a quick net pay estimate. The tool supports all 195 countries and 60+ currencies.',
      ['Enter your gross monthly or annual salary in the salary field.','Select your country — Malaysia is pre-selected with all statutory rates applied automatically.','For Malaysia: adjust EPF rate if you are over 60 or have a different contribution arrangement.','Click Calculate Net Pay to see your full breakdown.','View the deduction table to see exactly where each ringgit goes.'],
      [{q:'What is the EPF contribution rate in Malaysia 2024?',a:'The standard EPF employee contribution rate in Malaysia is 11% of gross salary for employees under age 60. The employer contributes an additional 13% (for salary below RM5,000) or 12% (for RM5,000 and above). For employees aged 60–75, the employee rate drops to 5.5%. Voluntary contributions above the mandatory rate are also allowed.'},
       {q:'How is PCB (income tax) calculated from salary?',a:'PCB (Potongan Cukai Bulanan) is a monthly income tax deduction in Malaysia. It is calculated based on your annual taxable income using progressive tax brackets starting from 0% on the first RM5,000 and going up to 28% for income above RM1 million. This calculator uses the latest 2024 Malaysia tax brackets. The exact amount also depends on your filing status and tax reliefs claimed.'},
       {q:'What is the difference between gross and net salary?',a:'Gross salary is your total salary before any deductions. Net salary (take-home pay) is what you receive after all mandatory deductions including EPF (11%), SOCSO (0.5%), EIS (0.2%), and PCB income tax. In Malaysia, for a RM5,000 gross salary, expect net pay of approximately RM4,200–4,400 depending on your tax bracket and reliefs.'}],
      ['income-tax-calculator','epf-calculator','loan-calculator','compound-interest'])}`;

  window._salaryFreq = 'monthly';
}
function salarySetFreq(freq, btn) {
  window._salaryFreq = freq;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const ph = freq === 'monthly' ? '5000' : '60000';
  document.getElementById('grossSalary').placeholder = ph;
}
function salaryCountryChange() {
  const v = document.getElementById('salaryCountry').value;
  const c = COUNTRIES_MY_TAX.find(x=>x.value===v);
  document.getElementById('salarySymbol').textContent = getSymbol(c.currency);
  const isMY = v === 'MY';
  document.getElementById('epfField').style.display = isMY ? '' : 'none';
  document.getElementById('customDeductField').style.display = isMY ? 'none' : '';
}
function resetSalary() {
  document.getElementById('grossSalary').value = '5000';
  document.getElementById('salaryCountry').value = 'MY';
  document.getElementById('additionalDeduct').value = '0';
  document.getElementById('salaryResult').classList.remove('show');
  salaryCountryChange();
}
function calcSalary() {
  const freq = window._salaryFreq;
  let gross = parseFloat(document.getElementById('grossSalary').value) || 0;
  const country = document.getElementById('salaryCountry').value;
  const addDeduct = parseFloat(document.getElementById('additionalDeduct').value) || 0;
  const c = COUNTRIES_MY_TAX.find(x=>x.value===country);
  const sym = getSymbol(c.currency);

  let monthly = freq === 'monthly' ? gross : gross / 12;
  let annual = freq === 'annual' ? gross : gross * 12;
  let deductions = {};
  let totalDeduct = 0;

  if(country === 'MY') {
    const epfRate = parseFloat(document.getElementById('epfRate').value);
    const epf = monthly * epfRate;
    let erRate;
    if (epfRate === 0) erRate = 0;
    else if (epfRate === 0.02) erRate = 0.02;
    else if (epfRate === 0.055) erRate = monthly >= 5000 ? 0.065 : 0.075;
    else erRate = monthly >= 5000 ? 0.12 : 0.13;
    const epfEmployer = monthly * erRate;
    const socso = Math.min(monthly * 0.005, 86.65);
    const eis = Math.min(monthly * 0.002, 7.90);
    const pcb = calcMYTax(annual) / 12;
    deductions = {
      'EPF (Employee 11%)': epf,
      'EPF (Employer 12–13%)': epfEmployer,
      'SOCSO (0.5%)': socso,
      'EIS (0.2%)': eis,
      'PCB (Income Tax)': pcb,
    };
    totalDeduct = epf + socso + eis + pcb;
  } else {
    const rate = (parseFloat(document.getElementById('customDeduct').value)||20)/100;
    const d = monthly * rate;
    deductions = {[`Est. Tax & Contributions (${(rate*100).toFixed(0)}%)`]: d};
    totalDeduct = d;
  }
  totalDeduct += addDeduct;
  if(addDeduct > 0) deductions['Other Deductions'] = addDeduct;

  const netMonthly = monthly - totalDeduct;
  const netAnnual = netMonthly * 12;
  const effectiveRate = monthly > 0 ? (totalDeduct / monthly * 100).toFixed(1) : 0;

  document.getElementById('salaryNetMonthly').textContent = sym + ' ' + fmt(netMonthly);
  document.getElementById('salaryBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(monthly)}</div><div class="result-item-label">Gross Monthly</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalDeduct)}</div><div class="result-item-label">Total Deductions</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(netMonthly)}</div><div class="result-item-label">Net Monthly</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(netAnnual)}</div><div class="result-item-label">Net Annual</div></div>
    <div class="result-item"><div class="result-item-val">${effectiveRate}%</div><div class="result-item-label">Effective Deduction Rate</div></div>`;

  let tableRows = Object.entries(deductions).map(([k,v])=>`
    <tr><td>${k}</td><td class="mono">${sym} ${fmt(v)}</td>
    <td class="mono">${monthly>0?((v/monthly)*100).toFixed(2):'0.00'}%</td></tr>`).join('');
  document.getElementById('salaryTable').innerHTML = `
    <table class="data-table">
      <thead><tr><th>Deduction</th><th>Amount</th><th>% of Gross</th></tr></thead>
      <tbody>${tableRows}
      <tr style="font-weight:600"><td>Net Take-Home Pay</td><td class="mono">${sym} ${fmt(netMonthly)}</td><td class="mono">${(100-parseFloat(effectiveRate)).toFixed(2)}%</td></tr>
      </tbody>
    </table>`;
  document.getElementById('salaryResult').classList.add('show');
}

// ============================================================
// TOOL: INCOME TAX CALCULATOR
// ============================================================
function renderIncomeTax() {
  setMeta('Income Tax Calculator Malaysia 2024 — Free Tax Calculator','Calculate your exact Malaysia income tax for 2024 with all tax brackets, effective rate, and take-home income.','#income-tax-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Income Tax Calculator</div>
      <h1 class="tool-h1">🧾 Income Tax Calculator</h1>
      <p class="tool-desc-short">Calculate your exact Malaysia income tax (2024 tax year) with full bracket breakdown, effective rate, and net income.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field">
          <label>Annual Income (RM)</label>
          <div class="field-prefix-wrap">
            <span class="field-prefix">RM</span>
            <input type="number" id="taxIncome" placeholder="60000" value="60000">
          </div>
        </div>
        <div class="field">
          <label>Tax Year</label>
          <select id="taxYear">
            ${dynamicYears(CURRENT_YEAR-2, CURRENT_YEAR).reverse().map(y => `<option value="${y}" ${y===CURRENT_YEAR?'selected':''}>${y}${y===CURRENT_YEAR?' (current)':''}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>Personal Relief</label>
          <div class="field-prefix-wrap">
            <span class="field-prefix">RM</span>
            <input type="number" id="taxRelief" placeholder="9000" value="9000">
          </div>
          <span class="field-hint">Standard: RM9,000 individual + RM4,000 EPF/insurance</span>
        </div>
        <div class="field">
          <label>Resident Status</label>
          <select id="taxResident">
            <option value="resident" selected>Tax Resident (183+ days)</option>
            <option value="nonresident">Non-Resident (Flat 30%)</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcTax()">⚡ Calculate Tax</button>
      <div class="result-box" id="taxResult">
        <div class="result-label">Total Income Tax Payable</div>
        <div class="result-main" id="taxAmount">—</div>
        <div class="result-grid" id="taxBreakdown"></div>
        <div id="taxTable" style="margin-top:16px;overflow-x:auto"></div>
        <div id="taxBar" style="margin-top:16px"></div>
      </div>
    </div>
    ${seoBlock('Income Tax Calculator',
      'The PeakToolsHub Malaysia Income Tax Calculator uses the official 2024 tax brackets to give you an accurate picture of your tax liability. Malaysia uses a progressive tax system where rates range from 0% on the first RM5,000 of chargeable income up to 28% for income exceeding RM1 million. This calculator takes your annual income, deducts personal reliefs, and applies the correct tax brackets to give you your chargeable income, total tax payable, effective tax rate, and net take-home income. It is ideal for salary negotiations, financial planning, and understanding your tax obligations as a Malaysian resident or non-resident.',
      ['Enter your total annual income in RM.','Enter your total personal tax reliefs (default is RM9,000 basic individual relief).','Select your resident status (most employees are tax residents).','Click Calculate Tax to see your full tax breakdown.','Review the bracket table to understand which portions of your income are taxed at each rate.'],
      [{q:'What are the Malaysia income tax rates for 2024?',a:'Malaysia uses progressive tax rates for 2024: 0% on the first RM5,000 of chargeable income, 1% on RM5,001–RM20,000, 3% on RM20,001–RM35,000, 8% on RM35,001–RM50,000, 13% on RM50,001–RM70,000, 21% on RM70,001–RM100,000, 24% on RM100,001–RM400,000, 25% on RM400,001–RM600,000, 26% on RM600,001–RM1,000,000, and 28% above RM1,000,000.'},
       {q:'What is chargeable income in Malaysia?',a:'Chargeable income is your total annual income minus all eligible tax reliefs. For example, if your annual income is RM72,000 and you claim RM13,000 in reliefs (basic RM9,000 + EPF RM4,000), your chargeable income is RM59,000. Tax brackets are applied to this chargeable income amount.'},
       {q:'How do I reduce my income tax in Malaysia?',a:'You can reduce your Malaysia income tax by claiming eligible reliefs including: individual relief (RM9,000), EPF and life insurance (up to RM7,000), education fees (RM7,000), medical expenses (RM10,000), lifestyle purchases (RM2,500), SSPN savings (RM8,000), and spouse and child reliefs. Always consult LHDN or a tax agent for personalised advice.'}],
      ['salary-calculator','epf-calculator','compound-interest','zakat-calculator'])}`;
}
function calcTax() {
  const income = parseFloat(document.getElementById('taxIncome').value)||0;
  const relief = parseFloat(document.getElementById('taxRelief').value)||0;
  const resident = document.getElementById('taxResident').value;
  const chargeable = Math.max(0, income - relief);
  let tax = 0, brackets = [];

  if(resident === 'nonresident') {
    tax = chargeable * 0.30;
    brackets = [{label:'Non-Resident Flat Rate (30%)', taxable: chargeable, rate:'30%', tax}];
  } else {
    let remaining = chargeable;
    for(const b of MY_TAX_BRACKETS_2024) {
      if(remaining <= 0 || b.min >= chargeable) break;
      const bandMax = b.max === Infinity ? chargeable : Math.min(b.max, chargeable);
      const bandMin = b.min;
      const taxable = Math.max(0, bandMax - bandMin);
      const bandTax = taxable * b.rate;
      if(taxable > 0) brackets.push({label:`RM${b.min.toLocaleString()} – ${b.max===Infinity?'above':('RM'+b.max.toLocaleString())}`, rate:(b.rate*100).toFixed(0)+'%', taxable, tax:bandTax});
      tax += bandTax;
    }
  }
  const effective = income > 0 ? (tax/income*100).toFixed(2) : 0;
  const marginal = brackets.length > 0 ? brackets[brackets.length-1].rate : '0%';
  const netIncome = income - tax;

  document.getElementById('taxAmount').textContent = 'RM ' + fmt(tax);
  document.getElementById('taxBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">RM ${fmt(income)}</div><div class="result-item-label">Gross Annual Income</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(chargeable)}</div><div class="result-item-label">Chargeable Income</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(tax)}</div><div class="result-item-label">Tax Payable</div></div>
    <div class="result-item"><div class="result-item-val">${effective}%</div><div class="result-item-label">Effective Rate</div></div>
    <div class="result-item"><div class="result-item-val">${marginal}</div><div class="result-item-label">Marginal Rate</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(netIncome)}</div><div class="result-item-label">Net After Tax</div></div>`;

  document.getElementById('taxTable').innerHTML = `
    <table class="data-table">
      <thead><tr><th>Income Band</th><th>Rate</th><th>Taxable Amount</th><th>Tax</th></tr></thead>
      <tbody>${brackets.map(b=>`<tr><td>${b.label}</td><td class="mono">${b.rate}</td><td class="mono">RM ${fmt(b.taxable)}</td><td class="mono">RM ${fmt(b.tax)}</td></tr>`).join('')}
      <tr style="font-weight:600"><td colspan="3">Total Tax</td><td class="mono">RM ${fmt(tax)}</td></tr></tbody>
    </table>`;

  const taxPct = income > 0 ? (tax/income)*100 : 0;
  document.getElementById('taxBar').innerHTML = `
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">Income breakdown</div>
    <div style="display:flex;gap:4px;align-items:center;font-size:12px">
      <div style="width:${(100-taxPct).toFixed(1)}%;height:12px;background:var(--accent);border-radius:4px;min-width:4px"></div>
      <div style="width:${taxPct.toFixed(1)}%;height:12px;background:var(--primary);border-radius:4px;min-width:4px"></div>
    </div>
    <div style="display:flex;gap:16px;margin-top:6px;font-size:12px;color:var(--text-muted)">
      <span>🟢 Take-home: ${(100-parseFloat(effective)).toFixed(1)}%</span>
      <span>🔵 Tax: ${effective}%</span>
    </div>`;
  document.getElementById('taxResult').classList.add('show');
}

// ============================================================
// TOOL: EPF CALCULATOR
// ============================================================
function renderEPF() {
  setMeta('EPF Calculator Malaysia — KWSP Retirement Savings','Calculate your EPF/KWSP balance at retirement with employer and employee contributions and projected growth.','#epf-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › EPF Calculator</div>
      <h1 class="tool-h1">🏦 EPF / KWSP Calculator</h1>
      <p class="tool-desc-short">Project your EPF (Employees Provident Fund) balance at retirement. Includes employee and employer contributions with annual dividend growth.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field">
          <label>Monthly Gross Salary (RM)</label>
          <div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="epfSalary" value="5000"></div>
        </div>
        <div class="field">
          <label>Current Age</label>
          <input type="number" id="epfAge" value="28" min="18" max="60">
        </div>
        <div class="field">
          <label>Retirement Age</label>
          <select id="epfRetireAge">
            <option value="55">55 (Early withdrawal eligible)</option>
            <option value="60" selected>60 (Standard)</option>
            <option value="65">65</option>
          </select>
        </div>
        <div class="field">
          <label>Current EPF Balance (RM)</label>
          <div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="epfCurrentBal" value="0" placeholder="0"></div>
        </div>
        <div class="field">
          <label>Employee Contribution</label>
          <select id="epfEmpRate" onchange="epfHandleRateChange()">
            <option value="0.11" selected>11% — Malaysian (Age below 60)</option>
            <option value="0.055">5.5% — Malaysian (Age 60–75)</option>
            <option value="0.02">2% — Foreigner (Standard)</option>
            <option value="0">0% — Voluntary opt-out (no employer EPF)</option>
            <option value="0.13">13% — Voluntary higher rate</option>
            <option value="0.15">15% — Voluntary higher rate</option>
            <option value="0.20">20% — Voluntary maximum</option>
          </select>
        </div>
        <div class="field">
          <label>Expected Annual Dividend</label>
          <select id="epfDividend">
            <option value="0.05">5.0%</option>
            <option value="0.055">5.5%</option>
            <option value="0.06" selected>6.0% (Historical avg)</option>
            <option value="0.065">6.5%</option>
          </select>
        </div>
        <div class="field">
          <label>Annual Salary Increment</label>
          <select id="epfIncrement">
            <option value="0">0% (No increment)</option>
            <option value="0.03" selected>3% per year</option>
            <option value="0.05">5% per year</option>
            <option value="0.08">8% per year</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcEPF()">⚡ Calculate EPF Balance</button>
      <div class="result-box" id="epfResult">
        <div class="result-label">Projected EPF Balance at Retirement</div>
        <div class="result-main" id="epfTotal">—</div>
        <div class="result-grid" id="epfBreakdown"></div>
        <div id="epfTable" style="margin-top:16px;overflow-x:auto"></div>
      </div>
    </div>
    ${seoBlock('EPF Calculator',
      'The PeakToolsHub EPF Calculator (KWSP Kalkulator) helps Malaysian employees project their Employees Provident Fund balance at retirement. It factors in both employee contributions (standard 11%) and employer contributions (12–13%), plus EPF\'s historically strong dividend rates which have averaged around 6% annually over the past decade. The calculator also accounts for annual salary increments and your existing EPF balance, giving you a realistic picture of your retirement savings. This tool is essential for retirement planning, helping you determine whether your EPF savings will be sufficient or whether you need additional private retirement schemes (PRS) or other investments.',
      ['Enter your current monthly gross salary.','Input your current age and desired retirement age.','Enter your existing EPF balance (from your EPF i-Akaun statement).','Select your expected annual dividend rate — historical average is around 6%.','Click Calculate to see your projected retirement balance.'],
      [{q:'What is the EPF dividend rate in Malaysia?',a:'EPF declared dividends of 5.50% for Simpanan Konvensional (conventional savings) and 4.75% for Simpanan Shariah in 2023. Historically, EPF conventional dividend rates have averaged around 5.5–6.5% over the past 10 years, making it one of the best-performing mandatory retirement funds in Asia. Rates are declared annually in early March.'},
       {q:'Can I withdraw my EPF before retirement?',a:'Yes. EPF allows several types of pre-retirement withdrawals: Account 1 (70% of savings) can be used at age 50 for partial withdrawal, and for investments through approved unit trust funds (i-Invest). Account 2 (30% of savings) can be withdrawn for house purchase, education, medical expenses, and certain other purposes. Full withdrawal is available at age 55.'},
       {q:'What is the difference between EPF Account 1 and Account 2?',a:'From January 2024, EPF moved to a three-account structure: Account Persaraan (Retirement Account, 75%), Account Sejahtera (Wellbeing Account, 15%), and Account Fleksibel (Flexible Account, 10%). Monthly contributions are split among these accounts. The Flexible Account allows partial withdrawals at any time from age 18.'}],
      ['salary-calculator','compound-interest','investment-returns','income-tax-calculator'])}`;
}
function calcEPF() {
  const salary = parseFloat(document.getElementById('epfSalary').value)||0;
  const age = parseInt(document.getElementById('epfAge').value)||28;
  const retireAge = parseInt(document.getElementById('epfRetireAge').value)||60;
  const currentBal = parseFloat(document.getElementById('epfCurrentBal').value)||0;
  const empRate = parseFloat(document.getElementById('epfEmpRate').value)||0.11;
  const dividend = parseFloat(document.getElementById('epfDividend').value)||0.06;
  const increment = parseFloat(document.getElementById('epfIncrement').value)||0.03;
  const years = Math.max(0, retireAge - age);

  let balance = currentBal;
  let totalEmployee = 0, totalEmployer = 0, totalDividend = 0;
  let currentSalary = salary;
  let tableRows = '';

  for(let y = 1; y <= years; y++) {
    const empContrib = currentSalary * empRate * 12;
    // Employer contribution rules:
    // - If employee opts out (empRate=0) → employer also contributes 0%
    // - For foreigner (empRate=2%) → employer contributes 2% as well (or RM5/month flat for some categories)
    // - For Malaysians: 13% if salary < RM5,000, 12% if >= RM5,000
    let erRate;
    if (empRate === 0) erRate = 0; // Voluntary opt-out
    else if (empRate === 0.02) erRate = 0.02; // Foreigner (matched at 2%)
    else if (empRate === 0.055) erRate = currentSalary >= 5000 ? 0.065 : 0.075; // Age 60-75
    else erRate = currentSalary >= 5000 ? 0.12 : 0.13; // Standard Malaysian
    const erContrib = currentSalary * erRate * 12;
    const yearContrib = empContrib + erContrib;
    const div = (balance + yearContrib/2) * dividend;
    balance += yearContrib + div;
    totalEmployee += empContrib;
    totalEmployer += erContrib;
    totalDividend += div;
    if(y <= 10 || y === years) {
      tableRows += `<tr><td>${age+y}</td><td class="mono">RM ${fmt(currentSalary)}</td><td class="mono">RM ${fmt(empContrib+erContrib)}</td><td class="mono">RM ${fmt(div)}</td><td class="mono">RM ${fmt(balance)}</td></tr>`;
    } else if(y === 11) tableRows += `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);font-size:12px">... ${years-11} more years ...</td></tr>`;
    currentSalary *= (1 + increment);
  }

  const monthlyPayout = balance / (20 * 12);
  document.getElementById('epfTotal').textContent = 'RM ' + fmt(balance);
  document.getElementById('epfBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${years} yrs</div><div class="result-item-label">Years to Retirement</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(totalEmployee)}</div><div class="result-item-label">Your Contributions</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(totalEmployer)}</div><div class="result-item-label">Employer Contributions</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(totalDividend)}</div><div class="result-item-label">Total Dividends Earned</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(monthlyPayout)}</div><div class="result-item-label">Est. Monthly Payout (20yrs)</div></div>`;
  document.getElementById('epfTable').innerHTML = `
    <table class="data-table">
      <thead><tr><th>Age</th><th>Monthly Salary</th><th>Annual Contrib.</th><th>Dividend</th><th>Balance</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>`;
  document.getElementById('epfResult').classList.add('show');
}

function epfHandleRateChange() {
  const rate = parseFloat(document.getElementById('epfEmpRate').value);
  const note = document.getElementById('epfNote');
  if (note) note.remove();
  let msg = '';
  if (rate === 0) msg = '⚠️ Voluntary opt-out: Both you AND your employer will contribute 0%. You lose all retirement matching.';
  else if (rate === 0.02) msg = 'ℹ️ Foreigner rate: Both you and employer contribute 2% (RM5 flat for some categories — check official EPF rules).';
  else if (rate >= 0.13) msg = '💡 Voluntary higher rate: You contribute more. Employer rate stays at standard 12-13%.';
  if (msg) {
    const el = document.querySelector('#epfRetireAge')?.closest('.tool-card');
    if (el) {
      const div = document.createElement('div');
      div.id = 'epfNote';
      div.style.cssText = 'background:var(--primary-faint);border:1px solid var(--result-border);border-radius:var(--radius-sm);padding:10px 14px;font-size:12px;color:var(--text-muted);margin-top:14px';
      div.innerHTML = msg;
      el.querySelector('.btn-calc').before(div);
    }
  }
}


// ============================================================
// TOOL: LOAN CALCULATOR
// ============================================================
function renderLoan() {
  setMeta('Loan Calculator — Monthly Payment & Amortisation','Calculate monthly loan payments, total interest, and full amortisation schedule for any loan amount and term.','#loan-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Loan Calculator</div>
      <h1 class="tool-h1">💳 Loan Calculator</h1>
      <p class="tool-desc-short">Calculate your monthly repayment, total interest paid, and view a full amortisation table for any personal or business loan.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('loanCur','MYR','Currency')}
        <div class="field">
          <label>Loan Amount</label>
          <input type="number" id="loanAmount" value="50000">
        </div>
        <div class="field">
          <label>Annual Interest Rate (%)</label>
          <input type="number" id="loanRate" value="5.5" step="0.1">
        </div>
        <div class="field">
          <label>Loan Term</label>
          <input type="number" id="loanTerm" value="5" min="1">
        </div>
        <div class="field">
          <label>Term Unit</label>
          <select id="loanTermUnit">
            <option value="years" selected>Years</option>
            <option value="months">Months</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcLoan()">⚡ Calculate Loan</button>
      <div class="result-box" id="loanResult">
        <div class="result-label">Monthly Payment</div>
        <div class="result-main" id="loanMonthly">—</div>
        <div class="result-grid" id="loanBreakdown"></div>
        <div style="margin-top:16px">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">Principal vs Interest split</div>
          <div style="display:flex;gap:2px" id="loanBar"></div>
        </div>
        <div id="loanTable" style="margin-top:16px;overflow-x:auto"></div>
      </div>
    </div>
    ${seoBlock('Loan Calculator',
      'Use the PeakToolsHub Loan Calculator to determine your exact monthly repayment for any personal loan, business loan, or financing arrangement. Enter your loan amount, annual interest rate, and term, and the calculator instantly computes your monthly payment using the standard amortisation formula. You can also see a full amortisation table showing the principal and interest split for each payment, helping you understand exactly how your loan balance reduces over time. This tool supports all currencies and is ideal for comparing loan offers from different banks before committing.',
      ['Select your currency.','Enter the total loan amount.','Enter the annual interest rate (APR) from your loan agreement.','Enter the loan term in years or months.','Click Calculate to see your monthly payment and full amortisation.'],
      [{q:'How is the monthly loan payment calculated?',a:'Monthly payment uses the standard amortisation formula: M = P × (r(1+r)^n) / ((1+r)^n - 1), where P is the principal, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of months. For example, a RM50,000 loan at 5.5% for 5 years gives a monthly payment of approximately RM957.'},
       {q:'What is the difference between flat rate and reducing balance interest?',a:'Flat rate interest is calculated on the original loan amount throughout the term, making the effective interest rate much higher than stated. Reducing balance (also called diminishing balance) interest is calculated on the outstanding balance each month, so as you pay down principal, you pay less interest. Most bank loans in Malaysia use the reducing balance method. This calculator uses reducing balance.'},
       {q:'Can I pay off my loan early in Malaysia?',a:'Yes, most Malaysian banks allow early settlement of loans. However, some charge an early settlement penalty (typically 1–3% of the outstanding balance). Under Bank Negara Malaysia guidelines, lenders must clearly disclose any early settlement fees. It\'s worth calculating whether the interest savings outweigh the penalty before making an early settlement.'}],
      ['mortgage-calculator','car-loan-calculator','compound-interest','salary-calculator'])}`;
}
function calcLoan() {
  const sym = getSymbol(document.getElementById('loanCur').value);
  const P = parseFloat(document.getElementById('loanAmount').value)||0;
  const annualRate = parseFloat(document.getElementById('loanRate').value)||0;
  let n = parseInt(document.getElementById('loanTerm').value)||12;
  if(document.getElementById('loanTermUnit').value === 'years') n *= 12;
  const r = annualRate / 100 / 12;
  const M = r === 0 ? P/n : P * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
  const totalPayment = M * n;
  const totalInterest = totalPayment - P;

  document.getElementById('loanMonthly').textContent = sym + ' ' + fmt(M);
  document.getElementById('loanBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(P)}</div><div class="result-item-label">Principal</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalInterest)}</div><div class="result-item-label">Total Interest</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalPayment)}</div><div class="result-item-label">Total Payment</div></div>
    <div class="result-item"><div class="result-item-val">${(totalInterest/P*100).toFixed(1)}%</div><div class="result-item-label">Interest / Principal</div></div>`;

  const pPct = (P/totalPayment*100).toFixed(1);
  const iPct = (totalInterest/totalPayment*100).toFixed(1);
  document.getElementById('loanBar').innerHTML = `
    <div style="width:${pPct}%;height:12px;background:var(--accent);border-radius:4px 0 0 4px;min-width:4px"></div>
    <div style="width:${iPct}%;height:12px;background:var(--primary);border-radius:0 4px 4px 0;min-width:4px"></div>
  `;

  let rows='', bal=P;
  for(let i=1;i<=Math.min(n,24);i++) {
    const intPmt = bal*r;
    const prinPmt = M - intPmt;
    bal = Math.max(0, bal - prinPmt);
    rows += `<tr><td>${i}</td><td class="mono">${sym} ${fmt(M)}</td><td class="mono">${sym} ${fmt(prinPmt)}</td><td class="mono">${sym} ${fmt(intPmt)}</td><td class="mono">${sym} ${fmt(bal)}</td></tr>`;
  }
  if(n>24) rows += `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);font-size:12px">Showing first 24 of ${n} payments</td></tr>`;
  document.getElementById('loanTable').innerHTML = `
    <table class="data-table">
      <thead><tr><th>#</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
  document.getElementById('loanResult').classList.add('show');
}

// ============================================================
// TOOL: MORTGAGE CALCULATOR
// ============================================================
function renderMortgage() {
  setMeta('Mortgage Calculator Malaysia — Home Loan Calculator','Calculate monthly mortgage payments, total cost, and stamp duty for Malaysia home loans.','#mortgage-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Mortgage Calculator</div>
      <h1 class="tool-h1">🏠 Mortgage Calculator</h1>
      <p class="tool-desc-short">Calculate your monthly home loan instalment, total cost of ownership, and Malaysia stamp duty. Supports all countries and currencies.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('mortgageCur','MYR','Currency')}
        <div class="field">
          <label>Property Price</label>
          <input type="number" id="propPrice" value="500000">
        </div>
        <div class="field">
          <label>Down Payment (%)</label>
          <input type="number" id="downPct" value="10" min="0" max="100" oninput="updateMortgageAmt()">
        </div>
        <div class="field">
          <label>Loan Amount (auto-calculated)</label>
          <input type="number" id="loanAmtM" value="450000" readonly style="background:var(--bg-input);opacity:0.8">
        </div>
        <div class="field">
          <label>Annual Interest Rate (%)</label>
          <input type="number" id="mortgageRate" value="4.25" step="0.05">
        </div>
        <div class="field">
          <label>Loan Term (Years)</label>
          <input type="number" id="mortgageTerm" value="35" min="1" max="40">
        </div>
        <div class="field">
          <label>Country (for stamp duty)</label>
          <select id="mortgageCountry">
            <option value="MY" selected>🇲🇾 Malaysia</option>
            <option value="OTHER">🌍 Other</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcMortgage()">⚡ Calculate Mortgage</button>
      <div class="result-box" id="mortgageResult">
        <div class="result-label">Monthly Instalment</div>
        <div class="result-main" id="mortgageMonthly">—</div>
        <div class="result-grid" id="mortgageBreakdown"></div>
        <div id="mortgageStamp" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('Mortgage Calculator',
      'The PeakToolsHub Mortgage Calculator helps you determine your monthly home loan instalment and total cost of property ownership in Malaysia. Enter the property price, down payment percentage, interest rate, and loan term to instantly calculate your monthly repayment using the standard reducing balance method. For Malaysia, the calculator also shows the stamp duty payable on the Memorandum of Transfer (MOT) using the tiered structure: 1% on the first RM100,000, 2% on RM100,001–RM500,000, and 3% above RM500,000. This is a must-use tool before committing to any property purchase.',
      ['Enter the property purchase price.','Set the down payment percentage (minimum 10% for most Malaysian home loans).','Enter the bank\'s offered interest rate (BLR/OPR-based rates are typically 3.5–4.5% in 2024).','Set your preferred loan tenure (maximum 35 years for residential in Malaysia).','Click Calculate to see your monthly instalment and total cost.'],
      [{q:'What is the minimum down payment for a home loan in Malaysia?',a:'The minimum down payment for a residential property in Malaysia is 10% of the purchase price for the first two properties. For a third property, the minimum down payment is 30%. For properties priced above RM1 million, some banks may require 20% down. The Overnight Policy Rate (OPR) affects home loan rates — current BLR is typically around 6.85% with effective rates at BLR minus 1.5–2.1%.'},
       {q:'How is stamp duty calculated for property in Malaysia?',a:'Malaysia stamp duty (MSDP) on the Memorandum of Transfer (MOT) is calculated on a tiered basis: 1% on the first RM100,000, 2% on RM100,001–RM500,000, 3% on RM500,001–RM1,000,000, and 4% above RM1,000,000. For example, a RM600,000 property: 1% × RM100,000 = RM1,000 + 2% × RM400,000 = RM8,000 + 3% × RM100,000 = RM3,000 = RM12,000 total stamp duty.'},
       {q:'What is the maximum loan tenure for a home loan in Malaysia?',a:'The maximum loan tenure for residential property in Malaysia is 35 years, or until the borrower turns 70, whichever is shorter. For commercial property, the maximum is typically 30 years. The total monthly debt obligation (DSR) should not exceed 70% of net income for most bank approvals. Always check the latest Bank Negara Malaysia guidelines.'}],
      ['loan-calculator','car-loan-calculator','rent-vs-buy','salary-calculator'])}`;

  document.getElementById('propPrice').addEventListener('input', updateMortgageAmt);
}
function updateMortgageAmt() {
  const price = parseFloat(document.getElementById('propPrice').value)||0;
  const dpct = parseFloat(document.getElementById('downPct').value)||10;
  document.getElementById('loanAmtM').value = Math.round(price * (1 - dpct/100));
}
function calcMortgage() {
  const sym = getSymbol(document.getElementById('mortgageCur').value);
  const price = parseFloat(document.getElementById('propPrice').value)||0;
  const downPct = parseFloat(document.getElementById('downPct').value)||10;
  const P = price * (1 - downPct/100);
  const annualRate = parseFloat(document.getElementById('mortgageRate').value)||4.25;
  const years = parseInt(document.getElementById('mortgageTerm').value)||35;
  const n = years * 12;
  const r = annualRate / 100 / 12;
  const M = r===0 ? P/n : P * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1);
  const total = M * n;
  const totalInterest = total - P;
  const downAmt = price * downPct / 100;

  // Stamp duty (Malaysia)
  let stamp = 0;
  if(document.getElementById('mortgageCountry').value === 'MY') {
    if(price > 1000000) stamp = 1000 + 8000 + 15000 + (price-1000000)*0.04;
    else if(price > 500000) stamp = 1000 + 8000 + (price-500000)*0.03;
    else if(price > 100000) stamp = 1000 + (price-100000)*0.02;
    else stamp = price * 0.01;
  }

  document.getElementById('mortgageMonthly').textContent = sym + ' ' + fmt(M);
  document.getElementById('mortgageBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(downAmt)}</div><div class="result-item-label">Down Payment</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(P)}</div><div class="result-item-label">Loan Amount</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalInterest)}</div><div class="result-item-label">Total Interest</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(total)}</div><div class="result-item-label">Total Repayment</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(total + downAmt)}</div><div class="result-item-label">Total Cost of Property</div></div>`;

  if(stamp > 0) {
    document.getElementById('mortgageStamp').innerHTML = `
      <div style="background:var(--primary-faint);border:1px solid var(--result-border);border-radius:var(--radius-sm);padding:14px 18px">
        <div style="font-size:12px;font-weight:600;color:var(--primary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px">🇲🇾 Malaysia Stamp Duty (MOT)</div>
        <div style="font-size:22px;font-weight:500;font-family:var(--font-mono);color:var(--result-text)">RM ${fmt(stamp)}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Based on 1%/2%/3%/4% tiered structure</div>
      </div>`;
  }
  document.getElementById('mortgageResult').classList.add('show');
}

// ============================================================
// TOOL: CAR LOAN
// ============================================================
function renderCarLoan() {
  setMeta('Car Loan Calculator Malaysia — Monthly Payment & Total Cost','Calculate your monthly car loan repayment, total interest, and cost of ownership for any vehicle.','#car-loan-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Car Loan Calculator</div>
      <h1 class="tool-h1">🚗 Car Loan Calculator</h1>
      <p class="tool-desc-short">Calculate monthly car loan repayments, total interest paid, and total cost of ownership including trade-in value.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('carCur','MYR','Currency')}
        <div class="field"><label>Car Price</label><input type="number" id="carPrice" value="80000"></div>
        <div class="field"><label>Down Payment</label><input type="number" id="carDown" value="8000"></div>
        <div class="field"><label>Trade-in Value</label><input type="number" id="carTradeIn" value="0"></div>
        <div class="field"><label>Annual Interest Rate (%)</label><input type="number" id="carRate" value="3.5" step="0.1"></div>
        <div class="field"><label>Loan Term (Years)</label><input type="number" id="carTerm" value="7" min="1" max="9"></div>
      </div>
      <button class="btn-calc" onclick="calcCarLoan()">⚡ Calculate Car Loan</button>
      <div class="result-box" id="carResult">
        <div class="result-label">Monthly Payment</div>
        <div class="result-main" id="carMonthly">—</div>
        <div class="result-grid" id="carBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Car Loan Calculator',
      'The PeakToolsHub Car Loan Calculator helps you determine your monthly car installment and total cost of ownership for any vehicle. In Malaysia, car loans use a flat interest rate system rather than reducing balance, which means the effective interest rate is almost double the stated flat rate. Enter your car price, down payment, trade-in value, flat interest rate, and loan tenure to get an accurate monthly payment. The calculator also shows you the total amount payable over the life of the loan, helping you make informed decisions when comparing loan offers from banks or car dealers.',
      ['Enter the On-the-Road (OTR) price of the car.','Enter your down payment amount.','Enter any trade-in value from your existing vehicle.','Enter the flat interest rate (typically 2.4–3.5% for Perodua/Proton, higher for foreign cars).','Select loan tenure (maximum 9 years in Malaysia).'],
      [{q:'How is car loan interest calculated in Malaysia?',a:'Malaysian car loans typically use flat rate interest (also called add-on rate), not reducing balance. This means interest is calculated on the original loan amount throughout the entire tenure. For example, a RM80,000 loan at 3.5% flat rate for 7 years: total interest = RM80,000 × 3.5% × 7 = RM19,600. Monthly payment = (RM80,000 + RM19,600) / 84 = RM1,185.71. The effective annual rate (EAR) is approximately double the flat rate.'},
       {q:'What is the maximum car loan tenure in Malaysia?',a:'Bank Negara Malaysia guidelines cap car loan tenure at a maximum of 9 years for new vehicles. For used vehicles, the maximum tenure is 7 years. Most banks offer tenures of 5, 7, or 9 years. Longer tenures reduce monthly payments but significantly increase total interest paid.'},
       {q:'What down payment do I need for a car loan in Malaysia?',a:'Most banks in Malaysia require a minimum down payment of 10% of the vehicle\'s on-the-road price. For used cars, some lenders require 10–20%. Hire purchase loans (the standard car loan structure in Malaysia) are governed by the Hire Purchase Act 1967. A higher down payment reduces your monthly installment and total interest significantly.'}],
      ['loan-calculator','mortgage-calculator','road-tax-calculator','insurance-estimator'])}`;
}
function calcCarLoan() {
  const sym = getSymbol(document.getElementById('carCur').value);
  const price = parseFloat(document.getElementById('carPrice').value)||0;
  const down = parseFloat(document.getElementById('carDown').value)||0;
  const tradeIn = parseFloat(document.getElementById('carTradeIn').value)||0;
  const rate = parseFloat(document.getElementById('carRate').value)||3.5;
  const years = parseInt(document.getElementById('carTerm').value)||7;
  const P = price - down - tradeIn;
  const totalInterest = P * (rate/100) * years;
  const total = P + totalInterest;
  const monthly = total / (years * 12);

  document.getElementById('carMonthly').textContent = sym + ' ' + fmt(monthly);
  document.getElementById('carBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(P)}</div><div class="result-item-label">Loan Amount</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalInterest)}</div><div class="result-item-label">Total Interest (Flat)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(total)}</div><div class="result-item-label">Total Payment</div></div>
    <div class="result-item"><div class="result-item-val">${(rate*1.85).toFixed(2)}%</div><div class="result-item-label">Effective Rate (approx)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(price+totalInterest)}</div><div class="result-item-label">Total Car Cost</div></div>`;
  document.getElementById('carResult').classList.add('show');
}

// ============================================================
// TOOL: CREDIT CARD INTEREST
// ============================================================
function renderCreditCard() {
  setMeta('Credit Card Interest Calculator — Payoff Calculator','Calculate how long to pay off your credit card balance and total interest paid.','#credit-card-interest');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Credit Card Interest</div>
      <h1 class="tool-h1">💳 Credit Card Interest Calculator</h1>
      <p class="tool-desc-short">Find out how long it will take to pay off your credit card balance and how much interest you'll pay in total.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('ccCur','MYR','Currency')}
        <div class="field"><label>Outstanding Balance</label><input type="number" id="ccBalance" value="5000"></div>
        <div class="field"><label>Annual Interest Rate / APR (%)</label><input type="number" id="ccAPR" value="18" step="0.5"></div>
        <div class="field">
          <label>Monthly Payment</label>
          <select id="ccPayType" onchange="toggleCCPay()">
            <option value="minimum">Minimum Payment Only</option>
            <option value="fixed" selected>Fixed Monthly Amount</option>
          </select>
        </div>
        <div class="field" id="ccFixedField">
          <label>Monthly Payment Amount</label>
          <input type="number" id="ccPayment" value="500">
        </div>
      </div>
      <button class="btn-calc" onclick="calcCC()">⚡ Calculate Payoff</button>
      <div class="result-box" id="ccResult">
        <div class="result-label">Time to Pay Off</div>
        <div class="result-main" id="ccTime">—</div>
        <div class="result-grid" id="ccBreakdown"></div>
        <div id="ccWarning"></div>
      </div>
    </div>
    ${seoBlock('Credit Card Interest Calculator',
      'Understanding the true cost of credit card debt is essential for financial health. This calculator shows you exactly how long it will take to pay off your outstanding balance and how much total interest you will pay at different monthly payment levels. In Malaysia, credit card interest rates are capped at 18% per annum by Bank Negara Malaysia for conventional cards. Paying only the minimum (typically 5% of balance or RM50, whichever is higher) can result in paying back several times the original balance over many years. Use this tool to find the monthly payment needed to clear your debt in your desired timeframe.',
      ['Enter your current total outstanding credit card balance.','Enter the annual interest rate (APR) — typically 18% in Malaysia.','Choose minimum payment or enter a fixed monthly payment amount.','Click Calculate to see your payoff timeline and total interest.','Compare different monthly payment amounts to see how much interest you can save.'],
      [{q:'What is the maximum credit card interest rate in Malaysia?',a:'Bank Negara Malaysia caps credit card interest rates at 18% per annum for conventional credit cards and 15% for low-income earners (those earning less than RM2,000/month). In practice, most credit cards charge 15–18% APR. Interest is calculated on the daily outstanding balance. If you pay your full statement balance by the due date, no interest is charged.'},
       {q:'How is the minimum payment on a credit card calculated?',a:'In Malaysia, the minimum payment on a credit card is typically 5% of the outstanding balance or RM50, whichever is higher. If you have late charges or over-limit fees, those must also be included. Paying only the minimum is extremely costly — a RM5,000 balance at 18% APR paying only the minimum each month would take over 30 years to clear.'},
       {q:'How can I reduce my credit card interest in Malaysia?',a:'Several strategies can help: pay more than the minimum each month, consolidate credit card debt with a personal loan (typically 5–12% APR), use a balance transfer facility offered by banks (0% for 6–24 months, then standard rate), or pay the full statement balance each month to avoid interest entirely. BNM also allows you to restructure unsustainable debt through AKPK (Agensi Kaunseling dan Pengurusan Kredit) for free.'}],
      ['loan-calculator','compound-interest','salary-calculator','inflation-calculator'])}`;
}
function toggleCCPay() {
  const isFixed = document.getElementById('ccPayType').value === 'fixed';
  document.getElementById('ccFixedField').style.display = isFixed ? '' : 'none';
}
function calcCC() {
  const sym = getSymbol(document.getElementById('ccCur').value);
  const balance = parseFloat(document.getElementById('ccBalance').value)||0;
  const apr = parseFloat(document.getElementById('ccAPR').value)||18;
  const monthly_rate = apr / 100 / 12;
  const payType = document.getElementById('ccPayType').value;
  let totalInterest = 0, months = 0, bal = balance;

  if(payType === 'minimum') {
    const maxMonths = 360 * 10;
    while(bal > 0.01 && months < maxMonths) {
      const interest = bal * monthly_rate;
      const payment = Math.max(bal * 0.05, 50, interest + 0.01);
      bal = bal + interest - payment;
      totalInterest += interest;
      months++;
    }
  } else {
    const payment = parseFloat(document.getElementById('ccPayment').value)||500;
    if(payment <= balance * monthly_rate) {
      document.getElementById('ccTime').textContent = 'Never';
      document.getElementById('ccBreakdown').innerHTML = '';
      document.getElementById('ccWarning').innerHTML = `<div class="warn-box">⚠️ Your monthly payment of ${sym} ${fmt(payment)} is less than or equal to the monthly interest of ${sym} ${fmt(balance*monthly_rate)}. You will never pay off this balance. Increase your payment.</div>`;
      document.getElementById('ccResult').classList.add('show');
      return;
    }
    while(bal > 0.01 && months < 600) {
      const interest = bal * monthly_rate;
      bal = Math.max(0, bal + interest - payment);
      totalInterest += interest;
      months++;
    }
  }

  const yrs = Math.floor(months/12), mos = months%12;
  const timeStr = yrs > 0 ? `${yrs} yr${yrs>1?'s':''} ${mos} mo` : `${months} months`;
  document.getElementById('ccTime').textContent = timeStr;
  document.getElementById('ccBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(balance)}</div><div class="result-item-label">Original Balance</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalInterest)}</div><div class="result-item-label">Total Interest Paid</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(balance+totalInterest)}</div><div class="result-item-label">Total Amount Paid</div></div>
    <div class="result-item"><div class="result-item-val">${(totalInterest/balance*100).toFixed(0)}%</div><div class="result-item-label">Interest / Principal</div></div>`;
  const warn = payType==='minimum' ? `<div class="warn-box">⚠️ Paying only the minimum is very costly! You will pay <strong>${sym} ${fmt(totalInterest)}</strong> in interest over ${timeStr}. Increasing your payment even slightly dramatically cuts your payoff time.</div>` : '';
  document.getElementById('ccWarning').innerHTML = warn;
  document.getElementById('ccResult').classList.add('show');
}

// ============================================================
// TOOL: COMPOUND INTEREST
// ============================================================
function renderCompound() {
  setMeta('Compound Interest Calculator — Investment Growth Calculator','Calculate compound interest growth with monthly contributions. See year-by-year projections.','#compound-interest');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Compound Interest</div>
      <h1 class="tool-h1">📈 Compound Interest Calculator</h1>
      <p class="tool-desc-short">See the power of compound interest. Calculate how your investments grow over time with regular contributions.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('ciCur','MYR','Currency')}
        <div class="field"><label>Initial Investment</label><input type="number" id="ciPrincipal" value="10000"></div>
        <div class="field"><label>Annual Interest Rate (%)</label><input type="number" id="ciRate" value="7" step="0.1"></div>
        <div class="field"><label>Time Period (Years)</label><input type="number" id="ciYears" value="20" min="1" max="50"></div>
        <div class="field">
          <label>Compound Frequency</label>
          <select id="ciFreq">
            <option value="1">Annually</option>
            <option value="4">Quarterly</option>
            <option value="12" selected>Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>
        <div class="field"><label>Monthly Contribution</label><input type="number" id="ciMonthly" value="500"></div>
      </div>
      <button class="btn-calc" onclick="calcCI()">⚡ Calculate Growth</button>
      <div class="result-box" id="ciResult">
        <div class="result-label">Final Balance</div>
        <div class="result-main" id="ciTotal">—</div>
        <div class="result-grid" id="ciBreakdown"></div>
        <div id="ciTable" style="margin-top:16px;overflow-x:auto"></div>
      </div>
    </div>
    ${seoBlock('Compound Interest Calculator',
      'Compound interest is often called the eighth wonder of the world because of its incredible power to grow wealth over time. The PeakToolsHub Compound Interest Calculator lets you see exactly how your initial investment and regular monthly contributions grow through the compounding effect. Whether you are planning your EPF supplementation through a Private Retirement Scheme (PRS), investing in unit trusts, or simply putting money in a fixed deposit, understanding compound growth is essential. This calculator shows a year-by-year breakdown of your balance, total contributions, and interest earned, helping you visualise the long-term impact of starting early and contributing consistently.',
      ['Enter your initial lump-sum investment amount.','Set your expected annual interest or return rate.','Enter the investment period in years.','Select compounding frequency (monthly is most common for unit trusts).','Enter your regular monthly contribution (can be RM0 for lump-sum only).'],
      [{q:'What is compound interest and how does it work?',a:'Compound interest means you earn interest not just on your original principal, but also on the interest you have already earned. For example, RM10,000 at 7% annual interest compounded monthly: after year 1 you earn RM724 interest (balance RM10,724), then in year 2 you earn 7% on RM10,724 — more than the first year. Over 20 years, this RM10,000 grows to RM40,063 without any additional contributions.'},
       {q:'How does monthly contribution affect compound interest?',a:'Regular monthly contributions dramatically accelerate compound growth through dollar-cost averaging and increased principal. Adding RM500/month to a RM10,000 initial investment at 7% for 20 years results in a final balance of approximately RM290,000 — compared to only RM40,000 without contributions. The total contributions would be RM130,000 but the account is worth RM290,000, meaning RM160,000 is pure compound interest.'},
       {q:'What is a realistic return rate for Malaysian investments?',a:'Historical return rates in Malaysia: EPF conventional savings: 5–6.5% annually; Amanah Saham Nasional (ASB): 4–7% (variable dividends); Malaysian unit trusts (equity): 6–10% over 10+ years; Fixed deposits: 2.5–4%; Private Retirement Scheme (PRS): 5–8% depending on fund. Higher returns come with higher risk. Always consult a licensed financial adviser before investing.'}],
      ['investment-returns','epf-calculator','inflation-calculator','loan-calculator'])}`;
}
function calcCI() {
  const sym = getSymbol(document.getElementById('ciCur').value);
  const P = parseFloat(document.getElementById('ciPrincipal').value)||0;
  const r = parseFloat(document.getElementById('ciRate').value)/100;
  const years = parseInt(document.getElementById('ciYears').value)||20;
  const n = parseInt(document.getElementById('ciFreq').value)||12;
  const monthly = parseFloat(document.getElementById('ciMonthly').value)||0;
  const rn = r/n;
  let balance = P;
  let totalContribs = P;
  let rows = '';

  for(let y=1;y<=years;y++){
    for(let m=0;m<12;m++) {
      balance = balance * (1 + rn) + monthly;
    }
    totalContribs += monthly * 12;
    if(y<=10||y===years) rows += `<tr><td>${y}</td><td class="mono">${sym} ${fmt(totalContribs)}</td><td class="mono">${sym} ${fmt(balance - totalContribs)}</td><td class="mono">${sym} ${fmt(balance)}</td></tr>`;
    else if(y===11) rows+=`<tr><td colspan="4" style="text-align:center;color:var(--text-muted);font-size:12px">...</td></tr>`;
  }
  const totalInterest = balance - totalContribs;

  document.getElementById('ciTotal').textContent = sym + ' ' + fmt(balance);
  document.getElementById('ciBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(P)}</div><div class="result-item-label">Initial Investment</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalContribs - P)}</div><div class="result-item-label">Total Contributions</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalInterest)}</div><div class="result-item-label">Total Interest Earned</div></div>
    <div class="result-item"><div class="result-item-val">${(totalInterest/totalContribs*100).toFixed(1)}%</div><div class="result-item-label">Return on Investment</div></div>`;
  document.getElementById('ciTable').innerHTML = `
    <table class="data-table">
      <thead><tr><th>Year</th><th>Total Invested</th><th>Interest Earned</th><th>Balance</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
  document.getElementById('ciResult').classList.add('show');
}

// ============================================================
// TOOL: INVESTMENT RETURNS
// ============================================================
function renderInvestment() {
  setMeta('Investment Returns Calculator — Portfolio Growth Projector','Calculate nominal and inflation-adjusted investment returns with lump sum and monthly DCA contributions.','#investment-returns');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Investment Returns</div>
      <h1 class="tool-h1">📊 Investment Returns Calculator</h1>
      <p class="tool-desc-short">Project your investment portfolio value in nominal and real (inflation-adjusted) terms. Compare lump sum vs dollar-cost averaging.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('invCur','MYR','Currency')}
        <div class="field"><label>Initial Investment</label><input type="number" id="invInitial" value="50000"></div>
        <div class="field"><label>Monthly Contribution</label><input type="number" id="invMonthly" value="1000"></div>
        <div class="field"><label>Expected Annual Return (%)</label><input type="number" id="invReturn" value="8" step="0.5"></div>
        <div class="field"><label>Inflation Rate (%)</label><input type="number" id="invInflation" value="3" step="0.5"></div>
        <div class="field"><label>Investment Period (Years)</label><input type="number" id="invYears" value="20" min="1"></div>
      </div>
      <button class="btn-calc" onclick="calcInvestment()">⚡ Project Returns</button>
      <div class="result-box" id="invResult">
        <div class="result-label">Nominal Portfolio Value</div>
        <div class="result-main" id="invNominal">—</div>
        <div class="result-grid" id="invBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Investment Returns Calculator',
      'The Investment Returns Calculator helps you project the future value of your investments accounting for both growth and inflation. The nominal value shows your portfolio in future ringgit terms, while the real (inflation-adjusted) value shows what that money would actually buy in today\'s purchasing power. Understanding the difference between nominal and real returns is critical for long-term financial planning — a 8% nominal return with 3% inflation gives a real return of only about 5%. This calculator also shows the impact of regular monthly contributions using the dollar-cost averaging (DCA) strategy.',
      ['Enter your initial lump sum investment.','Set your expected monthly contribution (regular investing).','Enter your expected annual return rate.','Enter the expected annual inflation rate (Malaysia historical average: 2.5–3.5%).','Set your investment period and click Project Returns.'],
      [{q:'What is the difference between nominal and real investment returns?',a:'Nominal return is the percentage gain on your investment before accounting for inflation. Real return is the inflation-adjusted return — what your money actually buys. Formula: Real Return ≈ Nominal Return − Inflation Rate. For example, if your investment grows at 8% per year but inflation is 3%, your real return is approximately 5%. This is why beating inflation is a key investment goal.'},
       {q:'What is dollar-cost averaging (DCA)?',a:'Dollar-cost averaging (DCA) means investing a fixed amount at regular intervals (e.g., RM1,000/month) regardless of market conditions. When prices are high, you buy fewer units; when prices are low, you buy more. Over time, this averages out your cost per unit and reduces the impact of market volatility. DCA is the strategy behind monthly EPF contributions and regular unit trust investment plans.'},
       {q:'What return rate should I use for Malaysian investments?',a:'Conservative estimates for Malaysian long-term investments: Fixed deposit (2.5–4%), EPF conventional (5–6.5%), ASB/ASN (4.5–7%), balanced unit trusts (6–8%), equity unit trusts (7–12%). For retirement planning spanning 20+ years, an 8% nominal return assumption is commonly used for equity-heavy portfolios, but past performance does not guarantee future results.'}],
      ['compound-interest','epf-calculator','inflation-calculator','salary-calculator'])}`;
}
function calcInvestment() {
  const sym = getSymbol(document.getElementById('invCur').value);
  const initial = parseFloat(document.getElementById('invInitial').value)||0;
  const monthly = parseFloat(document.getElementById('invMonthly').value)||0;
  const retRate = parseFloat(document.getElementById('invReturn').value)/100;
  const infRate = parseFloat(document.getElementById('invInflation').value)/100;
  const years = parseInt(document.getElementById('invYears').value)||20;
  const rMo = retRate/12;
  let balance = initial, totalContribs = initial;
  for(let i=0;i<years*12;i++){balance=balance*(1+rMo)+monthly;totalContribs+=monthly;}
  const realVal = balance / Math.pow(1+infRate, years);
  const totalInterest = balance - totalContribs;
  const realReturn = ((retRate - infRate)/(1+infRate)*100).toFixed(2);

  document.getElementById('invNominal').textContent = sym + ' ' + fmt(balance);
  document.getElementById('invBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalContribs)}</div><div class="result-item-label">Total Invested</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalInterest)}</div><div class="result-item-label">Gains (Nominal)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(realVal)}</div><div class="result-item-label">Real Value (Inflation-Adj.)</div></div>
    <div class="result-item"><div class="result-item-val">${realReturn}%</div><div class="result-item-label">Real Annual Return</div></div>
    <div class="result-item"><div class="result-item-val">${(totalInterest/totalContribs*100).toFixed(1)}%</div><div class="result-item-label">Nominal ROI</div></div>`;
  document.getElementById('invResult').classList.add('show');
}

// ============================================================
// TOOL: INFLATION CALCULATOR
// ============================================================
function renderInflation() {
  setMeta('Inflation Calculator — Purchasing Power Calculator','Calculate how inflation affects purchasing power over time for Malaysia and major world economies.','#inflation-calculator');
  const inflationData = {
    MY:{name:'Malaysia',data:{1980:9.7,1990:2.6,2000:1.6,2005:3.1,2010:1.7,2015:2.1,2020:(-1.1),2021:2.5,2022:3.3,2023:2.5,avg:3.0}},
    US:{name:'United States',data:{avg:3.5}},
    GB:{name:'United Kingdom',data:{avg:4.0}},
    SG:{name:'Singapore',data:{avg:2.5}},
    AU:{name:'Australia',data:{avg:3.5}},
    IN:{name:'India',data:{avg:6.5}},
    JP:{name:'Japan',data:{avg:1.0}},
    CN:{name:'China',data:{avg:3.5}},
    CA:{name:'Canada',data:{avg:3.2}},
    BR:{name:'Brazil',data:{avg:8.0}},
  };
  const countryOpts = Object.entries(inflationData).map(([k,v])=>`<option value="${k}" ${k==='MY'?'selected':''}>${v.name}</option>`).join('');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('finance')">💰 Finance</span> › Inflation Calculator</div>
      <h1 class="tool-h1">💹 Inflation Calculator</h1>
      <p class="tool-desc-short">Calculate the real purchasing power of money over time. See how inflation erodes the value of your savings.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Amount</label><input type="number" id="inflAmt" value="10000"></div>
        <div class="field"><label>Country</label><select id="inflCountry">${countryOpts}</select></div>
        <div class="field"><label>From Year</label><input type="number" id="inflFrom" value="${CURRENT_YEAR-25}" min="1900" max="${CURRENT_YEAR}"></div>
        <div class="field"><label>To Year</label><input type="number" id="inflTo" value="${CURRENT_YEAR}" min="1901" max="${CURRENT_YEAR+1}"></div>
        <div class="field">
          <label>Custom Annual Inflation Rate (%) — override</label>
          <input type="number" id="inflCustom" placeholder="Leave empty to use country average" step="0.1">
          <span class="field-hint">Optional: enter a custom rate to override country data</span>
        </div>
      </div>
      <button class="btn-calc" onclick="calcInflation()">⚡ Calculate Purchasing Power</button>
      <div class="result-box" id="inflResult">
        <div class="result-label">Equivalent Value Today</div>
        <div class="result-main" id="inflEquiv">—</div>
        <div class="result-grid" id="inflBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Inflation Calculator',
      'Inflation erodes the purchasing power of money over time. RM10,000 in the year 2000 is not the same as RM10,000 in 2024 — inflation means you need significantly more money today to buy the same goods and services. The PeakToolsHub Inflation Calculator uses historical average inflation rates for Malaysia and major world economies to show you the equivalent value of any amount across different years. This tool is essential for salary negotiations, retirement planning, and understanding the real cost of living changes over time.',
      ['Enter the amount you want to compare.','Select the country for its historical inflation data.','Enter the starting year for your comparison.','Enter the target year.','Click Calculate to see how much purchasing power has changed.'],
      [{q:'What is the inflation rate in Malaysia?',a:'Malaysia\'s annual inflation rate has varied from under 1% in some years to nearly 10% in others (notably 1980 and during oil shocks). The average inflation rate in Malaysia over the past 20 years has been approximately 2.5–3.5% per year. The Consumer Price Index (CPI) is tracked by the Department of Statistics Malaysia (DOSM). Recent inflation: 2022: 3.3%, 2023: 2.5%.'},
       {q:'How does inflation affect savings?',a:'If your savings account earns 2.5% per year but inflation is 3%, your money is losing purchasing power at a rate of 0.5% per year. Over 10 years, RM100,000 in a 2.5% savings account would be nominally worth RM128,000 — but in real terms (purchasing power), it would only be worth about RM111,000 in today\'s money. This is why investments that outpace inflation are crucial for long-term wealth preservation.'},
       {q:'What items have been most affected by inflation in Malaysia?',a:'In Malaysia, the categories with highest cumulative inflation include: healthcare costs (5–7% annually), education fees (private: 6–10% annually), property prices (especially in KL, Penang, and Johor Bahru), and food away from home. Government-controlled prices for essential items like RON95 petrol, sugar, and rice have been partially insulated through subsidies, though subsidy rationalisation is changing this.'}],
      ['compound-interest','investment-returns','salary-calculator','cost-of-living'])}`;
}
function calcInflation() {
  const amt = parseFloat(document.getElementById('inflAmt').value)||0;
  const fromYear = parseInt(document.getElementById('inflFrom').value)||2000;
  const toYear = parseInt(document.getElementById('inflTo').value)||2024;
  const custom = parseFloat(document.getElementById('inflCustom').value);
  const countryRates = {MY:3.0,US:3.5,GB:4.0,SG:2.5,AU:3.5,IN:6.5,JP:1.0,CN:3.5,CA:3.2,BR:8.0};
  const country = document.getElementById('inflCountry').value;
  const rate = (!isNaN(custom) && custom > 0) ? custom/100 : (countryRates[country]||3)/100;
  const years = toYear - fromYear;
  const equiv = amt * Math.pow(1+rate, years);
  const pctChange = ((equiv-amt)/amt*100).toFixed(1);
  const direction = years >= 0 ? 'grew' : 'reduced';

  document.getElementById('inflEquiv').textContent = 'RM ' + fmt(equiv);
  document.getElementById('inflBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">RM ${fmt(amt)}</div><div class="result-item-label">Original Amount (${fromYear})</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(equiv)}</div><div class="result-item-label">Equivalent (${toYear})</div></div>
    <div class="result-item"><div class="result-item-val">${pctChange}%</div><div class="result-item-label">Total Inflation</div></div>
    <div class="result-item"><div class="result-item-val">${(rate*100).toFixed(1)}%</div><div class="result-item-label">Avg Annual Rate Used</div></div>
    <div class="result-item"><div class="result-item-val">${Math.abs(years)} yrs</div><div class="result-item-label">Period</div></div>`;
  document.getElementById('inflResult').classList.add('show');
}

// ============================================================
// CLUSTER 7: MALAYSIA TOOLS
// ============================================================
function renderZakat() {
  setMeta('Zakat Calculator Malaysia — Zakat Pendapatan & Simpanan','Calculate your Zakat on income, savings, gold and business. Supports all 14 Malaysian states.','#zakat-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('malaysia')">🇲🇾 Malaysia</span> › Zakat Calculator</div>
      <h1 class="tool-h1">🕌 Zakat Calculator</h1>
      <p class="tool-desc-short">Calculate your Zakat obligation on income, savings, gold, and business assets. Uses the Nisab threshold based on current gold price.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="zakatSetTab('income',this)">💵 Income</button>
        <button class="tab-btn" onclick="zakatSetTab('savings',this)">🏦 Savings</button>
        <button class="tab-btn" onclick="zakatSetTab('gold',this)">🪙 Gold</button>
        <button class="tab-btn" onclick="zakatSetTab('business',this)">🏢 Business</button>
      </div>
      <div id="zakatForm"></div>
      <button class="btn-calc" onclick="calcZakat()">⚡ Kira Zakat</button>
      <div class="result-box" id="zakatResult">
        <div class="result-label">Zakat Payable</div>
        <div class="result-main" id="zakatAmount">—</div>
        <div class="result-grid" id="zakatBreakdown"></div>
        <div id="zakatStatus" style="margin-top:14px"></div>
        <div style="margin-top:16px;padding:12px 16px;background:var(--primary-faint);border-radius:var(--radius-sm)">
          <div style="font-size:12px;color:var(--primary);font-weight:600">🔗 Pay Your Zakat Online</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Visit <a href="https://www.ezakat.com.my" target="_blank" rel="noopener" style="color:var(--primary)">e-Zakat.com.my</a> or your state's Islamic Religious Council (MAIS, JAIS, JAKIM, etc.) to pay your Zakat online.</div>
        </div>
      </div>
    </div>
    ${seoBlock('Zakat Calculator',
      'Zakat is the third pillar of Islam and an obligatory annual payment for Muslims who meet the nisab threshold. The PeakToolsHub Zakat Calculator helps Malaysian Muslims accurately calculate their Zakat obligation on four main categories: income (Zakat on employment earnings), savings (Zakat on cash and deposits), gold (Zakat on gold jewellery and investments), and business assets (Zakat on business wealth). The Nisab threshold is based on the value of 85 grams of gold, approximately RM22,000–25,000 in 2024 depending on gold prices. Zakat is calculated at 2.5% of the zakatable wealth above the Nisab.',
      ['Select the type of Zakat you want to calculate (Income, Savings, Gold, or Business).','Enter the required values for that Zakat type.','The Nisab threshold is pre-set — update it if needed based on current gold prices.','Click Kira Zakat to see your Zakat amount.','Visit the e-Zakat link to pay your Zakat to your state\'s Islamic Religious Council.'],
      [{q:'What is Nisab and how is it calculated in Malaysia?',a:'Nisab is the minimum wealth threshold above which Zakat becomes obligatory. It is equivalent to the value of 85 grams of gold. In Malaysia, the Nisab for 2024 is approximately RM22,000–25,000 depending on current gold prices (around RM270–300 per gram). If your zakatable wealth exceeds the Nisab and you have held it for one Haul (lunar year), you are obligated to pay Zakat at 2.5%.'},
       {q:'How is Zakat on income (Zakat Pendapatan) calculated?',a:'Zakat on income (also called Zakat Gaji) is calculated as 2.5% of your annual income after deducting basic living necessities. The formula used by most Malaysian Islamic authorities is: (Annual Income − Nisab) × 2.5%. Some scholars calculate it on the full income above Nisab, while others allow deductions for basic necessities (housing, food, transport). Check with your state\'s Zakat authority for their specific methodology.'},
       {q:'Which Malaysian states have online Zakat payment systems?',a:'All 14 Malaysian states have Zakat collection authorities. Major online platforms: MAIS (Selangor) at zakat.com.my, LZS (KL/Federal Territory), Majlis Agama Islam Pulau Pinang (MAIPP), JAKIM for federal areas, and Pusat Zakat Sabah and Sarawak. You can also pay Zakat through major Malaysian banks (Maybank, CIMB, Public Bank), PayZakat app, and e-Zakat.com.my.'}],
      ['income-tax-calculator','sst-calculator','ptptn-calculator','salary-calculator'])}`;

  window._zakatTab = 'income';
  zakatSetTab('income', document.querySelector('.tabs-row .tab-btn'));
}
function zakatSetTab(tab, btn) {
  window._zakatTab = tab;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const forms = {
    income:`<div class="form-grid">
      <div class="field"><label>Annual Income (RM)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatIncome" value="60000"></div></div>
      <div class="field"><label>Nisab Threshold (RM)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatNisab" value="23000"></div><span class="field-hint">≈ 85g gold × current gold price</span></div>
      <div class="field"><label>Other Annual Income (Rental, etc.)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatOther" value="0"></div></div>
    </div>`,
    savings:`<div class="form-grid">
      <div class="field"><label>Total Savings (RM)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatSavings" value="50000"></div><span class="field-hint">All bank accounts, FD, cash</span></div>
      <div class="field"><label>Nisab Threshold (RM)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatNisabS" value="23000"></div></div>
    </div>`,
    gold:`<div class="form-grid">
      <div class="field"><label>Gold Weight (grams)</label><input type="number" id="zakatGoldGrams" value="100"></div>
      <div class="field"><label>Gold Price (RM per gram)</label><input type="number" id="zakatGoldPrice" value="290"></div>
    </div><div class="field-hint" style="margin-top:8px">Nisab for gold zakat = 85g. You are obligated to pay Zakat if you hold ≥ 85g gold for one Haul (lunar year).</div>`,
    business:`<div class="form-grid">
      <div class="field"><label>Current Assets (Cash, Stock, Receivables)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatAssets" value="100000"></div></div>
      <div class="field"><label>Current Liabilities (Payables, Short-term debts)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatLiab" value="20000"></div></div>
      <div class="field"><label>Nisab (RM)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="zakatNisabB" value="23000"></div></div>
    </div>`,
  };
  document.getElementById('zakatForm').innerHTML = forms[tab] || forms.income;
}
function calcZakat() {
  const tab = window._zakatTab;
  let zakatAmt = 0, netWealth = 0, nisab = 0, eligible = false;
  let breakdownHTML = '';

  if(tab==='income') {
    const income = parseFloat(document.getElementById('zakatIncome').value)||0;
    const other = parseFloat(document.getElementById('zakatOther').value)||0;
    nisab = parseFloat(document.getElementById('zakatNisab').value)||23000;
    netWealth = income + other;
    eligible = netWealth >= nisab;
    zakatAmt = eligible ? (netWealth - nisab) * 0.025 : 0;
    breakdownHTML = `
      <div class="result-item"><div class="result-item-val">RM ${fmt(netWealth)}</div><div class="result-item-label">Total Annual Income</div></div>
      <div class="result-item"><div class="result-item-val">RM ${fmt(nisab)}</div><div class="result-item-label">Nisab Threshold</div></div>
      <div class="result-item"><div class="result-item-val">RM ${fmt(Math.max(0,netWealth-nisab))}</div><div class="result-item-label">Zakatable Amount</div></div>
      <div class="result-item"><div class="result-item-val">2.5%</div><div class="result-item-label">Zakat Rate</div></div>`;
  } else if(tab==='savings') {
    const savings = parseFloat(document.getElementById('zakatSavings').value)||0;
    nisab = parseFloat(document.getElementById('zakatNisabS').value)||23000;
    netWealth = savings;
    eligible = savings >= nisab;
    zakatAmt = eligible ? savings * 0.025 : 0;
    breakdownHTML = `
      <div class="result-item"><div class="result-item-val">RM ${fmt(savings)}</div><div class="result-item-label">Total Savings</div></div>
      <div class="result-item"><div class="result-item-val">RM ${fmt(nisab)}</div><div class="result-item-label">Nisab Threshold</div></div>
      <div class="result-item"><div class="result-item-val">2.5%</div><div class="result-item-label">Zakat Rate</div></div>`;
  } else if(tab==='gold') {
    const grams = parseFloat(document.getElementById('zakatGoldGrams').value)||0;
    const pricePerGram = parseFloat(document.getElementById('zakatGoldPrice').value)||290;
    const goldValue = grams * pricePerGram;
    nisab = 85 * pricePerGram;
    eligible = grams >= 85;
    zakatAmt = eligible ? goldValue * 0.025 : 0;
    breakdownHTML = `
      <div class="result-item"><div class="result-item-val">${grams}g</div><div class="result-item-label">Gold Held</div></div>
      <div class="result-item"><div class="result-item-val">RM ${fmt(goldValue)}</div><div class="result-item-label">Gold Value</div></div>
      <div class="result-item"><div class="result-item-val">85g</div><div class="result-item-label">Nisab (85 grams)</div></div>`;
  } else if(tab==='business') {
    const assets = parseFloat(document.getElementById('zakatAssets').value)||0;
    const liab = parseFloat(document.getElementById('zakatLiab').value)||0;
    nisab = parseFloat(document.getElementById('zakatNisabB').value)||23000;
    netWealth = assets - liab;
    eligible = netWealth >= nisab;
    zakatAmt = eligible ? netWealth * 0.025 : 0;
    breakdownHTML = `
      <div class="result-item"><div class="result-item-val">RM ${fmt(assets)}</div><div class="result-item-label">Total Assets</div></div>
      <div class="result-item"><div class="result-item-val">RM ${fmt(liab)}</div><div class="result-item-label">Total Liabilities</div></div>
      <div class="result-item"><div class="result-item-val">RM ${fmt(netWealth)}</div><div class="result-item-label">Net Business Wealth</div></div>`;
  }

  document.getElementById('zakatAmount').textContent = eligible ? 'RM ' + fmt(zakatAmt) : 'RM 0.00';
  document.getElementById('zakatBreakdown').innerHTML = breakdownHTML;
  document.getElementById('zakatStatus').innerHTML = eligible
    ? `<div style="background:rgba(0,200,150,0.1);border:1px solid rgba(0,200,150,0.3);border-radius:var(--radius-sm);padding:12px 16px;font-size:13px;color:#047857">✅ Nisab threshold met. Zakat of <strong>RM ${fmt(zakatAmt)}</strong> is payable.</div>`
    : `<div style="background:var(--primary-faint);border:1px solid var(--result-border);border-radius:var(--radius-sm);padding:12px 16px;font-size:13px;color:var(--text-muted)">ℹ️ Your wealth is below the Nisab threshold. Zakat is not obligatory at this time.</div>`;
  document.getElementById('zakatResult').classList.add('show');
}

// ============================================================
// TOOL: SST CALCULATOR
// ============================================================
function renderSST() {
  setMeta('SST Calculator Malaysia — Service & Sales Tax','Calculate Malaysia SST (Service Tax 8%, Sales Tax 10%) — add to price or extract from inclusive amount.','#sst-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('malaysia')">🇲🇾 Malaysia</span> › SST Calculator</div>
      <h1 class="tool-h1">🧾 SST Calculator</h1>
      <p class="tool-desc-short">Calculate Malaysia's Sales and Service Tax (SST). Add SST to a price, or extract SST from a tax-inclusive amount.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="sstSetDir('add',this)">Add SST to Price</button>
        <button class="tab-btn" onclick="sstSetDir('extract',this)">Extract SST from Total</button>
      </div>
      <div class="form-grid">
        <div class="field"><label id="sstAmtLabel">Price Before SST (RM)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="sstAmount" value="100"></div></div>
        <div class="field">
          <label>SST Type</label>
          <select id="sstType">
            <option value="0.06">Service Tax — 6% (pre-March 2024)</option>
            <option value="0.08" selected>Service Tax — 8% (from March 2024)</option>
            <option value="0.10">Sales Tax — 10%</option>
            <option value="0.05">Sales Tax — 5% (certain goods)</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcSST()">⚡ Calculate SST</button>
      <div class="result-box" id="sstResult">
        <div class="result-label">SST Amount</div>
        <div class="result-main" id="sstTaxAmt">—</div>
        <div class="result-grid" id="sstBreakdown"></div>
      </div>
    </div>
    ${seoBlock('SST Calculator',
      'Malaysia\'s Sales and Service Tax (SST) replaced GST in September 2018. The service tax rate was increased from 6% to 8% effective 1 March 2024, applying to most services including restaurants, hotels, professional services, and telecommunications. Sales tax at 10% applies to imported and locally manufactured goods. The PeakToolsHub SST Calculator lets you quickly add SST to any amount, or extract the pre-SST price from a tax-inclusive total — essential for business owners, accountants, and consumers in Malaysia.',
      ['Enter the amount you want to calculate SST on.','Select the SST type and rate (Service Tax 8% or Sales Tax 10%).','Choose whether to add SST to a price or extract it from a total.','Click Calculate to see the SST breakdown.','Copy the results for your invoicing or expense tracking.'],
      [{q:'What is the current SST rate in Malaysia?',a:'As of 1 March 2024, the Service Tax rate in Malaysia increased from 6% to 8%. This applies to taxable services including restaurants, hotels, car parks, telecommunications, financial services (non-Islamic), and professional services. Sales Tax remains at 10% for most taxable manufactured/imported goods, and 5% for certain goods. Exported goods and services are exempt from SST.'},
       {q:'What is the difference between SST and GST in Malaysia?',a:'GST (Goods and Services Tax) was a comprehensive 6% tax on all supplies in Malaysia, in effect from April 2015 to August 2018. SST (Sales and Service Tax) replaced it as a simpler dual-tax system with narrower coverage. Key difference: SST is not recoverable (no input tax credit), and it does not cascade across the supply chain like GST could. SST results in lower prices for many B2B transactions.'},
       {q:'Which businesses must register for SST in Malaysia?',a:'Businesses providing taxable services with annual taxable turnover exceeding RM500,000 must register for Service Tax. Manufacturers of taxable goods with annual sales value exceeding RM500,000 must register for Sales Tax. Registration is done through the Royal Malaysian Customs Department (RMCD) SST portal. Failure to register when required is an offence under the Service Tax Act 2018.'}],
      ['income-tax-calculator','zakat-calculator','salary-calculator','profit-margin'])}`;

  window._sstDir = 'add';
}
function sstSetDir(dir, btn) {
  window._sstDir = dir;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sstAmtLabel').textContent = dir==='add' ? 'Price Before SST (RM)' : 'SST-Inclusive Total (RM)';
}
function calcSST() {
  const amt = parseFloat(document.getElementById('sstAmount').value)||0;
  const rate = parseFloat(document.getElementById('sstType').value)||0.08;
  const dir = window._sstDir;
  let preTax, taxAmt, total;
  if(dir==='add') {
    preTax=amt; taxAmt=amt*rate; total=amt+taxAmt;
  } else {
    total=amt; preTax=amt/(1+rate); taxAmt=total-preTax;
  }
  document.getElementById('sstTaxAmt').textContent = 'RM ' + fmt(taxAmt);
  document.getElementById('sstBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">RM ${fmt(preTax)}</div><div class="result-item-label">Pre-SST Amount</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(taxAmt)}</div><div class="result-item-label">SST (${(rate*100).toFixed(0)}%)</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(total)}</div><div class="result-item-label">Total (SST Inclusive)</div></div>`;
  document.getElementById('sstResult').classList.add('show');
}

// ============================================================
// TOOL: PTPTN CALCULATOR
// ============================================================
function renderPTPTN() {
  setMeta('PTPTN Loan Repayment Calculator Malaysia','Calculate your PTPTN student loan monthly repayment, total interest, and years to clear your debt.','#ptptn-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('malaysia')">🇲🇾 Malaysia</span> › PTPTN Calculator</div>
      <h1 class="tool-h1">🎓 PTPTN Repayment Calculator</h1>
      <p class="tool-desc-short">Calculate your PTPTN student loan monthly repayment, total interest payable, and time to fully settle your loan.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>PTPTN Outstanding Balance (RM)</label><div class="field-prefix-wrap"><span class="field-prefix">RM</span><input type="number" id="ptptnBal" value="30000"></div></div>
        <div class="field">
          <label>Repayment Scheme</label>
          <select id="ptptnScheme" onchange="togglePTPTN()">
            <option value="fixed" selected>Fixed Monthly Payment</option>
            <option value="income">Income-Contingent (% of salary)</option>
          </select>
        </div>
        <div class="field" id="ptptnFixedField">
          <label>Monthly Payment Amount (RM)</label>
          <input type="number" id="ptptnPayment" value="300">
        </div>
        <div class="field" id="ptptnIncomeField" style="display:none">
          <label>Monthly Gross Salary (RM)</label>
          <input type="number" id="ptptnSalary" value="4000">
        </div>
        <div class="field" id="ptptnPctField" style="display:none">
          <label>Repayment Rate (% of salary)</label>
          <select id="ptptnPct">
            <option value="0.02">2% (Income RM1,000–RM1,999)</option>
            <option value="0.03">3% (Income RM2,000–RM2,999)</option>
            <option value="0.04">4% (Income RM3,000–RM3,999)</option>
            <option value="0.05" selected>5% (Income RM4,000–RM4,999)</option>
            <option value="0.06">6% (Income RM5,000–RM5,999)</option>
            <option value="0.08">8% (Income RM6,000–RM7,999)</option>
            <option value="0.10">10% (Income RM8,000–RM9,999)</option>
            <option value="0.15">15% (Income RM10,000+)</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcPTPTN()">⚡ Calculate Repayment</button>
      <div class="result-box" id="ptptnResult">
        <div class="result-label">Monthly Repayment</div>
        <div class="result-main" id="ptptnMonthly">—</div>
        <div class="result-grid" id="ptptnBreakdown"></div>
        <div style="margin-top:14px;padding:12px 16px;background:var(--primary-faint);border-radius:var(--radius-sm)">
          <div style="font-size:12px;color:var(--primary);font-weight:600">💡 PTPTN Early Settlement Discount</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Full settlement: <strong>20% discount</strong> (limited time promotions available). Partial lump-sum: <strong>10% discount</strong> on lump-sum amount. Check <a href="https://www.ptptn.gov.my" target="_blank" rel="noopener" style="color:var(--primary)">ptptn.gov.my</a> for current promotions.</div>
        </div>
      </div>
    </div>
    ${seoBlock('PTPTN Repayment Calculator',
      'PTPTN (Perbadanan Tabung Pendidikan Tinggi Nasional) is Malaysia\'s national higher education loan fund. As of 2024, outstanding PTPTN loans carry a service charge of 1% per annum (much lower than bank interest rates). This calculator helps you understand your repayment options — whether you choose a fixed monthly payment or the income-contingent repayment (ICR) scheme where payments are calculated as a percentage of your monthly salary. The ICR scheme protects lower-income earners by linking repayments to salary level. This tool also shows you the early settlement discounts available, which can save you significant amounts.',
      ['Enter your current outstanding PTPTN balance from your PTPTN account statement.','Choose between fixed monthly payment or income-contingent repayment.','For fixed: enter your desired monthly payment amount.','For income-contingent: enter your salary and select the applicable repayment percentage.','Click Calculate to see your payoff timeline and total cost.'],
      [{q:'What is the interest rate on PTPTN loans?',a:'PTPTN charges a service charge (bukan faedah/interest) of 1% per annum on the outstanding balance, calculated on a daily rest basis. This is significantly lower than commercial loan rates. For Islamic financing borrowers, the rate is 0%. The 1% rate makes PTPTN one of the most affordable education financing options available in Malaysia.'},
       {q:'What is the income-contingent repayment scheme for PTPTN?',a:'The PTPTN income-contingent repayment (ICR) scheme links your monthly repayment to your salary. Borrowers earning below RM1,000/month are temporarily exempted. Rates range from 2% (RM1,000–RM1,999) up to 15% (RM10,000+). This automatic deduction system was implemented for civil servants through PCB salary deduction. Private sector employees can set up voluntary standing instructions through their banks.'},
       {q:'Can PTPTN be converted to a scholarship?',a:'PTPTN loan conversion to scholarship (penukaran pinjaman kepada biasiswa) is available for graduates who score First Class Honours (Kelas Pertama) at university. Upon verification of results, PTPTN converts the outstanding loan to a scholarship, meaning it no longer needs to be repaid. Graduates with CGPA above 3.5 may qualify for partial conversion. This incentive encourages academic excellence among PTPTN borrowers.'}],
      ['salary-calculator','income-tax-calculator','loan-calculator','epf-calculator'])}`;
}
function togglePTPTN() {
  const scheme = document.getElementById('ptptnScheme').value;
  document.getElementById('ptptnFixedField').style.display = scheme==='fixed'?'':'none';
  document.getElementById('ptptnIncomeField').style.display = scheme==='income'?'':'none';
  document.getElementById('ptptnPctField').style.display = scheme==='income'?'':'none';
}
function calcPTPTN() {
  const bal = parseFloat(document.getElementById('ptptnBal').value)||0;
  const scheme = document.getElementById('ptptnScheme').value;
  const monthlyRate = 0.01/12;
  let payment;
  if(scheme==='fixed') {
    payment = parseFloat(document.getElementById('ptptnPayment').value)||300;
  } else {
    const salary = parseFloat(document.getElementById('ptptnSalary').value)||4000;
    const pct = parseFloat(document.getElementById('ptptnPct').value)||0.05;
    payment = salary * pct;
  }
  let remaining = bal, months = 0, totalInterest = 0;
  const minInterest = bal * monthlyRate;
  if(payment <= minInterest) {
    document.getElementById('ptptnMonthly').textContent = 'RM ' + fmt(payment);
    document.getElementById('ptptnBreakdown').innerHTML = `<div class="result-item" style="grid-column:1/-1"><div class="result-item-label" style="color:#DC2626">⚠️ Payment too low — below monthly service charge. Increase payment.</div></div>`;
    document.getElementById('ptptnResult').classList.add('show');
    return;
  }
  while(remaining > 0.01 && months < 600) {
    const interest = remaining * monthlyRate;
    remaining = Math.max(0, remaining + interest - payment);
    totalInterest += interest;
    months++;
  }
  const yrs = Math.floor(months/12), mos = months%12;
  document.getElementById('ptptnMonthly').textContent = 'RM ' + fmt(payment);
  document.getElementById('ptptnBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">RM ${fmt(bal)}</div><div class="result-item-label">Outstanding Balance</div></div>
    <div class="result-item"><div class="result-item-val">${yrs > 0 ? yrs+'yr '+mos+'mo' : mos+' months'}</div><div class="result-item-label">Time to Clear</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(totalInterest)}</div><div class="result-item-label">Total Service Charge (1%)</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(bal+totalInterest)}</div><div class="result-item-label">Total Amount Paid</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(bal*0.80)}</div><div class="result-item-label">20% Discount Settlement</div></div>`;
  document.getElementById('ptptnResult').classList.add('show');
}

// ============================================================
// TOOL: ROAD TAX CALCULATOR
// ============================================================
function renderRoadTax() {
  setMeta('Road Tax Calculator Malaysia — Cukai Jalan 2024','Calculate Malaysia road tax for private cars, motorcycles, and commercial vehicles based on engine CC.','#road-tax-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('malaysia')">🇲🇾 Malaysia</span> › Road Tax Calculator</div>
      <h1 class="tool-h1">🚗 Road Tax Calculator</h1>
      <p class="tool-desc-short">Calculate your Malaysia road tax (Cukai Jalan) based on engine displacement (cc), vehicle type, and registration state.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field">
          <label>Vehicle Type</label>
          <select id="rtVehicleType" onchange="renderRTForm()">
            <option value="private">Private Car (Saloon)</option>
            <option value="suv">4WD / SUV / MPV</option>
            <option value="moto">Motorcycle</option>
          </select>
        </div>
        <div class="field">
          <label>Engine Displacement (CC)</label>
          <input type="number" id="rtCC" value="1500" min="50" max="6000">
        </div>
        <div class="field">
          <label>Registration State</label>
          <select id="rtState">
            <option value="peninsular" selected>Peninsular Malaysia</option>
            <option value="sabah">Sabah</option>
            <option value="sarawak">Sarawak</option>
          </select>
        </div>
        <div class="field">
          <label>Duration</label>
          <select id="rtDuration">
            <option value="1" selected>1 Year</option>
            <option value="0.5">6 Months</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcRoadTax()">⚡ Calculate Road Tax</button>
      <div class="result-box" id="rtResult">
        <div class="result-label">Road Tax Amount</div>
        <div class="result-main" id="rtAmount">—</div>
        <div class="result-grid" id="rtBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Road Tax Calculator',
      'Road tax (Cukai Jalan) in Malaysia is a mandatory annual fee for all motorised vehicles. It is collected by Jabatan Pengangkutan Jalan (JPJ) and can be renewed online via MyEG, Pos Malaysia, banks, or JPJ offices. Road tax rates are based on engine displacement in cubic centimetres (cc) and vehicle type. Private saloon cars have lower rates than 4WDs and SUVs for the same engine size. This calculator uses the latest official road tax table to give you an accurate estimate before you renew your Cukai Jalan.',
      ['Select your vehicle type (private car, 4WD/SUV, or motorcycle).','Enter your engine displacement in CC (found in your vehicle\'s registration card / grant).','Select your state of registration — Sabah and Sarawak have different rates.','Choose 1-year or 6-month renewal duration.','Click Calculate to see your road tax amount.'],
      [{q:'Where can I renew my road tax in Malaysia?',a:'Road tax in Malaysia can be renewed through: MyEG portal (myeg.com.my) — online with delivery; Pos Malaysia branches; JPJ offices nationwide; Authorised insurance agents (bundled with motor insurance); and major bank branches. You must have a valid motor insurance policy before renewing road tax. MyEG and Pos Malaysia charge a small convenience fee.'},
       {q:'What happens if I drive without a valid road tax?',a:'Driving without a valid road tax in Malaysia is an offence under Section 14 of the Road Transport Act 1987. The fine is RM300 for a first offence. Summons can be issued by JPJ officers and police. You can check your road tax status online via JPJ\'s e-Semak or MyJPJ portal. From 2024, digital road tax is accepted — you no longer need to display the physical sticker on your windscreen.'},
       {q:'Do electric vehicles (EVs) pay road tax in Malaysia?',a:'Electric vehicles registered in Malaysia are currently exempt from road tax until December 2025 under the government\'s EV incentive programme. This applies to fully electric (BEV) vehicles. Hybrid vehicles are not fully exempt but may benefit from reduced rates based on their engine displacement for non-EV components. The exemption is part of Malaysia\'s push to achieve 15% EV adoption by 2030.'}],
      ['car-loan-calculator','insurance-estimator','sst-calculator','mortgage-calculator'])}`;
}
function calcRoadTax() {
  const cc = parseInt(document.getElementById('rtCC').value)||1500;
  const type = document.getElementById('rtVehicleType').value;
  const state = document.getElementById('rtState').value;
  const dur = parseFloat(document.getElementById('rtDuration').value)||1;

  let base = 0;
  if(type === 'moto') {
    if(cc<=150) base=2; else if(cc<=200) base=30; else if(cc<=250) base=50;
    else if(cc<=500) base=180; else if(cc<=800) base=250; else base=350;
  } else if(type === 'private') {
    if(cc<=1000) base=20; else if(cc<=1200) base=55; else if(cc<=1400) base=70;
    else if(cc<=1600) base=90; else if(cc<=1800) base=200+(cc-1600)*0.40;
    else if(cc<=2000) base=280+(cc-1800)*0.50; else if(cc<=2500) base=380+(cc-2000)*0.90;
    else if(cc<=3000) base=830+(cc-2500)*1.30; else base=1480+(cc-3000)*2.00;
  } else { // SUV/4WD — higher rate
    if(cc<=1000) base=25; else if(cc<=1200) base=65; else if(cc<=1400) base=90;
    else if(cc<=1600) base=130; else if(cc<=1800) base=250+(cc-1600)*0.50;
    else if(cc<=2000) base=350+(cc-1800)*0.65; else if(cc<=2500) base=480+(cc-2000)*1.10;
    else if(cc<=3000) base=1030+(cc-2500)*1.60; else base=1830+(cc-3000)*2.50;
  }
  // State multiplier
  let multiplier = 1.0;
  if(state==='sabah') multiplier = 0.50;
  if(state==='sarawak') multiplier = 0.50;
  const annual = base * multiplier;
  const total = dur === 1 ? annual : annual * 0.55;

  document.getElementById('rtAmount').textContent = 'RM ' + fmt(total);
  document.getElementById('rtBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${cc} CC</div><div class="result-item-label">Engine Size</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(annual)}</div><div class="result-item-label">Annual Road Tax</div></div>
    <div class="result-item"><div class="result-item-val">${state.charAt(0).toUpperCase()+state.slice(1)}</div><div class="result-item-label">Registration State</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(total)}</div><div class="result-item-label">Amount to Pay (${dur===1?'1 year':'6 months'})</div></div>`;
  document.getElementById('rtResult').classList.add('show');
}

// ============================================================
// TOOL: INSURANCE ESTIMATOR
// ============================================================
function renderInsurance() {
  setMeta('Insurance Premium Estimator Malaysia — Life & Health Insurance','Estimate your life insurance and medical card premium in Malaysia based on age, coverage type, and sum insured.','#insurance-estimator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('malaysia')">🇲🇾 Malaysia</span> › Insurance Estimator</div>
      <h1 class="tool-h1">🛡️ Insurance Premium Estimator</h1>
      <p class="tool-desc-short">Get a rough estimate of your life insurance or medical card premium in Malaysia based on your age, coverage needs, and health status.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="insSetTab('life',this)">Life Insurance</button>
        <button class="tab-btn" onclick="insSetTab('medical',this)">Medical Card</button>
      </div>
      <div class="form-grid">
        <div class="field"><label>Age</label><input type="number" id="insAge" value="30" min="18" max="70"></div>
        <div class="field"><label>Gender</label><select id="insGender"><option value="M">Male</option><option value="F">Female</option></select></div>
        <div class="field" id="insSumField">
          <label>Sum Insured (RM)</label>
          <select id="insSum">
            <option value="250000">RM 250,000</option>
            <option value="500000" selected>RM 500,000</option>
            <option value="750000">RM 750,000</option>
            <option value="1000000">RM 1,000,000</option>
          </select>
        </div>
        <div class="field"><label>Smoker Status</label><select id="insSmoker"><option value="N" selected>Non-Smoker</option><option value="Y">Smoker (+25–50%)</option></select></div>
        <div class="field"><label>Health Status</label><select id="insHealth"><option value="std" selected>Standard (Healthy)</option><option value="loading">Substandard (Pre-existing conditions)</option></select></div>
      </div>
      <button class="btn-calc" onclick="calcInsurance()">⚡ Estimate Premium</button>
      <div class="result-box" id="insResult">
        <div class="result-label">Estimated Annual Premium</div>
        <div class="result-main" id="insPremium">—</div>
        <div class="result-grid" id="insBreakdown"></div>
        <div style="margin-top:12px;padding:10px 14px;background:var(--bg-input);border-radius:var(--radius-sm);font-size:12px;color:var(--text-muted)">⚠️ This is an estimate only. Actual premiums vary significantly by insurer, product, and individual underwriting. Always get a formal quote from a licensed insurance agent or compare at PolicyStreet.my or insurancemarket.com.my</div>
      </div>
    </div>
    ${seoBlock('Insurance Premium Estimator',
      'Life insurance and medical cards are essential financial tools for Malaysians. This premium estimator helps you understand the rough cost of life insurance (term or whole life) and medical card (health insurance) based on your age, gender, sum insured, and health status. Premiums increase significantly with age and for smokers. In Malaysia, life insurance premiums are regulated by Bank Negara Malaysia and provided by companies like Prudential, AIA, Great Eastern, Sun Life, Zurich, and Etiqa Takaful. Medical card premiums have been rising annually due to medical inflation (5–10% per year in Malaysia). This tool gives you a budgeting estimate before seeking a full quotation.',
      ['Select the insurance type: Life Insurance or Medical Card.','Enter your age — premiums increase significantly each decade.','Select your gender (females typically have lower life insurance premiums but higher medical card premiums for reproductive health).','Choose your desired coverage amount.','Indicate smoker status and health status, then click Estimate.'],
      [{q:'How much life insurance coverage do I need in Malaysia?',a:'A common rule of thumb is 10–15× your annual income for life insurance coverage. For example, if you earn RM60,000 per year, a coverage of RM600,000–900,000 is recommended. This ensures your dependents can cover living expenses, mortgage, education costs, and other liabilities. Consider also your number of dependants, outstanding debts (mortgage, car loan), and whether your employer provides group insurance.'},
       {q:'What is a medical card and why do I need one?',a:'A medical card (or hospital and surgical insurance) covers your medical bills if you are hospitalised or need surgery. Without a medical card, a single hospitalisation can cost RM20,000–200,000+ at private hospitals in Malaysia. Government hospitals are cheaper but crowded. Most medical cards have an annual limit (RM100,000–unlimited) and lifetime limit (RM1–5 million). Medical card premiums increase with age and must be renewed annually.'},
       {q:'What is the difference between conventional insurance and takaful in Malaysia?',a:'Conventional insurance is a risk transfer contract where the insurer provides coverage in exchange for premiums. Takaful is a Shariah-compliant alternative based on mutual contribution (tabarru) principles — participants contribute to a pool that covers claims. Both provide similar coverage levels. Takaful operators in Malaysia include Prudential BSN Takaful, AIA Public Takaful, Etiqa Takaful, Sun Life Malaysia Takaful, and Great Eastern Takaful.'}],
      ['road-tax-calculator','salary-calculator','epf-calculator','zakat-calculator'])}`;
  window._insTab = 'life';
}
function insSetTab(tab, btn) {
  window._insTab = tab;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function calcInsurance() {
  const age = parseInt(document.getElementById('insAge').value)||30;
  const gender = document.getElementById('insGender').value;
  const sum = parseInt(document.getElementById('insSum').value)||500000;
  const smoker = document.getElementById('insSmoker').value;
  const health = document.getElementById('insHealth').value;
  const tab = window._insTab;
  let basePremium = 0;

  if(tab === 'life') {
    const baseRates = {M:[200,280,420,680,1100,1800],F:[170,240,360,580,950,1500]};
    const ageIdx = age<25?0:age<35?1:age<45?2:age<55?3:age<65?4:5;
    basePremium = (baseRates[gender][ageIdx] / 100000) * sum;
    if(smoker==='Y') basePremium *= 1.40;
    if(health==='loading') basePremium *= 1.50;
  } else {
    const medBase = {M:[1200,1800,2800,4500,7500],F:[1400,2100,3200,5000,8500]};
    const ageIdx = age<30?0:age<40?1:age<50?2:age<60?3:4;
    basePremium = medBase[gender][ageIdx];
    if(smoker==='Y') basePremium *= 1.30;
    if(health==='loading') basePremium *= 1.75;
  }
  const lo = basePremium * 0.75, hi = basePremium * 1.35;

  document.getElementById('insPremium').textContent = 'RM ' + fmt(lo) + ' – ' + fmt(hi);
  document.getElementById('insBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">Age ${age}</div><div class="result-item-label">Entry Age</div></div>
    <div class="result-item"><div class="result-item-val">${tab==='life'?'RM '+fmt(sum):'Annual'}</div><div class="result-item-label">${tab==='life'?'Coverage':'Medical Card'}</div></div>
    <div class="result-item"><div class="result-item-val">RM ${fmt(basePremium/12)} – ${fmt(hi/12)}</div><div class="result-item-label">Est. Monthly Premium</div></div>
    <div class="result-item"><div class="result-item-val">${smoker==='Y'?'+40%/30%':'+0%'}</div><div class="result-item-label">Smoker Loading</div></div>`;
  document.getElementById('insResult').classList.add('show');
}

// ============================================================
// TOOL: PROFIT MARGIN CALCULATOR
// ============================================================
function renderProfitMargin() {
  setMeta('Profit Margin Calculator — Gross & Net Margin','Calculate gross profit margin, net profit margin, markup, and break-even for any business.','#profit-margin');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('malaysia')">🇲🇾 Malaysia</span> › Profit Margin</div>
      <h1 class="tool-h1">📊 Profit Margin Calculator</h1>
      <p class="tool-desc-short">Calculate gross margin, net profit margin, markup percentage, and break-even revenue for your business.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('pmCur','MYR','Currency')}
        <div class="field"><label>Revenue / Sales</label><input type="number" id="pmRevenue" value="100000"></div>
        <div class="field"><label>Cost of Goods Sold (COGS)</label><input type="number" id="pmCOGS" value="60000"></div>
        <div class="field"><label>Operating Expenses</label><input type="number" id="pmOpex" value="15000"></div>
        <div class="field"><label>Tax Rate (%)</label><input type="number" id="pmTax" value="24"></div>
      </div>
      <button class="btn-calc" onclick="calcPM()">⚡ Calculate Margins</button>
      <div class="result-box" id="pmResult">
        <div class="result-label">Net Profit Margin</div>
        <div class="result-main" id="pmNetPct">—</div>
        <div class="result-grid" id="pmBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Profit Margin Calculator',
      'Understanding your profit margins is fundamental to running a successful business in Malaysia. The gross profit margin shows how efficiently you produce or source your products, while the net profit margin shows the actual profitability after all costs including operating expenses and tax. This calculator also computes markup percentage (useful for pricing), EBITDA proxy, and the corporate tax impact. For Malaysian Sdn Bhd companies, the corporate tax rate is 24% (17% for SMEs on the first RM600,000 of chargeable income under the small company rate).',
      ['Enter your total revenue or sales figure for the period.','Enter your Cost of Goods Sold (COGS) — direct costs of producing your product or service.','Enter operating expenses — rent, salaries, utilities, marketing, etc.','Enter the applicable tax rate (Malaysia Sdn Bhd: 24% standard, 17% SME rate on first RM600K).','Click Calculate to see all margins and profitability metrics.'],
      [{q:'What is a good profit margin for a Malaysian business?',a:'Profit margins vary significantly by industry. In Malaysia, typical net profit margins: retail (2–5%), F&B restaurants (5–10%), technology/SaaS (15–30%), professional services (20–40%), manufacturing (5–15%), property development (15–25%). Compare your margin to industry benchmarks. A gross margin above 40% generally indicates a strong competitive position.'},
       {q:'What is the corporate tax rate for Malaysian SMEs?',a:'Malaysian companies pay corporate income tax at 24% on chargeable income. However, SME companies (Sdn Bhd with paid-up capital ≤ RM2.5 million) pay a reduced rate of 17% on the first RM600,000 of chargeable income, and 24% on the remainder. This makes the effective tax rate much lower for small profitable businesses. Always engage a Malaysian chartered accountant or tax consultant for actual tax planning.'},
       {q:'What is the difference between gross margin and markup?',a:'Gross margin is profit expressed as a percentage of selling price (Revenue − COGS) / Revenue × 100. Markup is profit expressed as a percentage of cost: (Revenue − COGS) / COGS × 100. For example, if you buy at RM60 and sell at RM100: Gross margin = 40%, Markup = 66.7%. Retailers often think in markup (from cost), while investors and analysts prefer gross margin (from revenue).'}],
      ['sst-calculator','income-tax-calculator','salary-calculator','loan-calculator'])}`;
}
function calcPM() {
  const sym = getSymbol(document.getElementById('pmCur').value);
  const rev = parseFloat(document.getElementById('pmRevenue').value)||0;
  const cogs = parseFloat(document.getElementById('pmCOGS').value)||0;
  const opex = parseFloat(document.getElementById('pmOpex').value)||0;
  const taxRate = parseFloat(document.getElementById('pmTax').value)/100;
  const grossProfit = rev - cogs;
  const ebit = grossProfit - opex;
  const tax = Math.max(0, ebit * taxRate);
  const netProfit = ebit - tax;
  const grossMargin = rev>0 ? (grossProfit/rev*100).toFixed(1) : 0;
  const netMargin = rev>0 ? (netProfit/rev*100).toFixed(1) : 0;
  const markup = cogs>0 ? (grossProfit/cogs*100).toFixed(1) : 0;
  const breakEven = cogs>0 ? (cogs/(1-cogs/rev)).toFixed(0) : 0;

  document.getElementById('pmNetPct').textContent = netMargin + '%';
  document.getElementById('pmBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(grossProfit)}</div><div class="result-item-label">Gross Profit</div></div>
    <div class="result-item"><div class="result-item-val">${grossMargin}%</div><div class="result-item-label">Gross Margin</div></div>
    <div class="result-item"><div class="result-item-val">${markup}%</div><div class="result-item-label">Markup (on cost)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(ebit)}</div><div class="result-item-label">EBIT (Operating Profit)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(tax)}</div><div class="result-item-label">Tax Payable</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(netProfit)}</div><div class="result-item-label">Net Profit</div></div>
    <div class="result-item"><div class="result-item-val">${netMargin}%</div><div class="result-item-label">Net Margin</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(breakEven)}</div><div class="result-item-label">Break-Even Revenue</div></div>`;
  document.getElementById('pmResult').classList.add('show');
}

// ============================================================
// SEARCH
// ============================================================
function searchTools(q) {
  const results = document.getElementById('searchResults');
  if(!q.trim()) { results.innerHTML=''; results.classList.remove('open'); return; }
  const matches = ALL_TOOLS.filter(t => t.name.toLowerCase().includes(q.toLowerCase()) || t.desc.toLowerCase().includes(q.toLowerCase())).slice(0,8);
  if(!matches.length) { results.innerHTML='<div style="padding:12px 14px;font-size:13px;color:var(--text-muted)">No tools found</div>'; results.classList.add('open'); return; }
  results.innerHTML = matches.map(t=>`
    <div class="search-item" onmousedown="navigate('${t.id}');document.getElementById('searchInput').blur()">
      <span class="search-item-icon">${t.icon}</span>
      <span class="search-item-name">${t.name}</span>
      <span class="search-item-cluster">${t.cluster}</span>
    </div>`).join('');
  results.classList.add('open');
}
function showSearch() { const v=document.getElementById('searchInput').value; if(v) searchTools(v); }
function hideSearch() { setTimeout(()=>document.getElementById('searchResults').classList.remove('open'),200); }
document.addEventListener('keydown', e=>{if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();document.getElementById('searchInput').focus();}});

// ============================================================
// THEME
// ============================================================
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme', isDark?'light':'dark');
  document.getElementById('themeBtn').textContent = isDark?'🌙':'☀️';
  localStorage.setItem('peaktoolshub-theme', isDark?'light':'dark');
}
(function initTheme(){
  const saved = localStorage.getItem('peaktoolshub-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark?'dark':'light');
  document.documentElement.setAttribute('data-theme',theme);
  const btn = document.getElementById('themeBtn');
  if(btn) btn.textContent = theme==='dark'?'☀️':'🌙';
})();

// JSON-LD Schema
function injectSchema(data) {
  let s = document.getElementById('page-schema');
  if(!s) { s=document.createElement('script'); s.type='application/ld+json'; s.id='page-schema'; document.head.appendChild(s); }
  s.textContent = JSON.stringify(data);
}

// ============================================================
// PART 2 — Clusters 2,3,4,5,6 (31 tools)

// ============================================================
// CLUSTER 2: DATE & TIME TOOLS
// ============================================================

// TOOL: AGE CALCULATOR
function renderAge() {
  setMeta('Age Calculator — Exact Age in Years Months Days','Calculate your exact age in years, months, days, hours, and seconds. Find days until your next birthday.','#age-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › Age Calculator</div>
      <h1 class="tool-h1">🎂 Age Calculator</h1>
      <p class="tool-desc-short">Find your exact age in years, months, days, hours, and seconds. Includes live counter, days until next birthday, and fun age facts.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Date of Birth</label><input type="date" id="ageDoB" value="1995-01-15"></div>
        <div class="field"><label>Calculate Age As Of</label><input type="date" id="ageTarget"></div>
      </div>
      <button class="btn-calc" onclick="calcAge()">⚡ Calculate Age</button>
      <div class="result-box" id="ageResult">
        <div class="result-label">Your Age</div>
        <div class="result-main" id="ageMain">—</div>
        <div class="result-grid" id="ageBreakdown"></div>
        <div id="ageLive" style="margin-top:16px;font-size:13px;color:var(--text-muted)"></div>
      </div>
    </div>
    ${seoBlock('Age Calculator',
      'The PeakToolsHub Age Calculator gives you your exact age down to the second. Enter your date of birth and the calculator instantly shows your age in years, months, days, hours, minutes, and seconds — with a live counter that ticks every second. It also shows the day of the week you were born, how many days until your next birthday, your age in dog years, and total days lived. This tool is useful for filling in forms requiring exact age, calculating the age of a business or project, or just satisfying your curiosity about exactly how long you have been alive.',
      ['Enter your date of birth using the date picker.','Leave the "Calculate As Of" field as today, or change it for a custom date.','Click Calculate Age to see your full age breakdown.','Watch the live seconds counter update in real time.','Share your results with friends using the share button.'],
      [{q:'How do I calculate my exact age in days?',a:'To calculate your exact age in days, subtract your birth date from today\'s date. For example, if you were born on 15 January 1995 and today is 28 April 2026, that is 11,427 days. This calculator handles leap years automatically and gives you the precise day count.'},
       {q:'What day of the week was I born?',a:'The day of the week for any date can be calculated using Zeller\'s formula or by simply checking a perpetual calendar. This calculator automatically shows you the day of the week you were born when you enter your date of birth. Fun fact: most births in Malaysia occur on Tuesdays and Wednesdays based on hospital statistics.'},
       {q:'What is my age in dog years?',a:'The traditional formula for dog years is: multiply human years by 7. So a 30-year-old human is 210 in dog years. However, modern veterinary science suggests a more accurate formula: dogs age faster when young (the first year equals about 15 human years, the second equals about 9). This calculator shows both the traditional and updated dog year calculations.'}],
      ['date-difference','working-days','countdown-timer','annual-leave-optimizer'])
    }`;

  const today = new Date();
  document.getElementById('ageTarget').value = today.toISOString().split('T')[0];
  window._ageInterval = null;
}

function calcAge() {
  const dob = new Date(document.getElementById('ageDoB').value);
  const target = new Date(document.getElementById('ageTarget').value);
  if (isNaN(dob.getTime())) return;

  if (window._ageInterval) clearInterval(window._ageInterval);

  function update() {
    const now = new Date(document.getElementById('ageTarget').value);
    const useTarget = now;
    let years = useTarget.getFullYear() - dob.getFullYear();
    let months = useTarget.getMonth() - dob.getMonth();
    let days = useTarget.getDate() - dob.getDate();
    if (days < 0) { months--; const pm = new Date(useTarget.getFullYear(), useTarget.getMonth(), 0); days += pm.getDate(); }
    if (months < 0) { years--; months += 12; }
    const totalDays = Math.floor((useTarget - dob) / 86400000);
    const totalHours = Math.floor((useTarget - dob) / 3600000);
    const totalMins = Math.floor((useTarget - dob) / 60000);
    const nextBday = new Date(useTarget.getFullYear(), dob.getMonth(), dob.getDate());
    if (nextBday <= useTarget) nextBday.setFullYear(nextBday.getFullYear() + 1);
    const daysToB = Math.ceil((nextBday - useTarget) / 86400000);
    const days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dobDay = days_of_week[dob.getDay()];
    const dogYears = (years * 7).toFixed(0);

    document.getElementById('ageMain').textContent = `${years} years, ${months} months, ${days} days`;
    document.getElementById('ageBreakdown').innerHTML = `
      <div class="result-item"><div class="result-item-val">${years}</div><div class="result-item-label">Years</div></div>
      <div class="result-item"><div class="result-item-val">${months}</div><div class="result-item-label">Months (remainder)</div></div>
      <div class="result-item"><div class="result-item-val">${days}</div><div class="result-item-label">Days (remainder)</div></div>
      <div class="result-item"><div class="result-item-val">${totalDays.toLocaleString()}</div><div class="result-item-label">Total Days Lived</div></div>
      <div class="result-item"><div class="result-item-val">${daysToB}</div><div class="result-item-label">Days to Next Birthday</div></div>
      <div class="result-item"><div class="result-item-val">${dobDay}</div><div class="result-item-label">Born On (Day)</div></div>
      <div class="result-item"><div class="result-item-val">${dogYears}</div><div class="result-item-label">Age in Dog Years</div></div>
      <div class="result-item"><div class="result-item-val">${(years * 12 + months).toLocaleString()}</div><div class="result-item-label">Total Months</div></div>`;

    const secs = Math.floor((new Date() - dob) / 1000);
    document.getElementById('ageLive').innerHTML = `⏱️ <strong>${secs.toLocaleString()}</strong> seconds old (updating live)`;
  }

  update();
  window._ageInterval = setInterval(() => {
    const secs = Math.floor((new Date() - dob) / 1000);
    const el = document.getElementById('ageLive');
    if (el) el.innerHTML = `⏱️ <strong>${secs.toLocaleString()}</strong> seconds old (updating live)`;
    else clearInterval(window._ageInterval);
  }, 1000);
  document.getElementById('ageResult').classList.add('show');
}

// TOOL: DATE DIFFERENCE
function renderDateDiff() {
  setMeta('Date Difference Calculator — Days Between Two Dates','Calculate the exact difference between two dates in years, months, weeks, days, hours and minutes.','#date-difference');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › Date Difference</div>
      <h1 class="tool-h1">📆 Date Difference Calculator</h1>
      <p class="tool-desc-short">Calculate the exact difference between any two dates in years, months, weeks, days, hours, and minutes.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Start Date</label><input type="date" id="ddStart" value="${CURRENT_YEAR-1}-01-01"></div>
        <div class="field"><label>End Date</label><input type="date" id="ddEnd"></div>
        <div class="field form-full">
          <label>Count business days only?</label>
          <select id="ddBiz"><option value="no">No — all calendar days</option><option value="yes">Yes — exclude weekends</option></select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcDateDiff()">⚡ Calculate Difference</button>
      <div class="result-box" id="ddResult">
        <div class="result-label">Total Days Between Dates</div>
        <div class="result-main" id="ddDays">—</div>
        <div class="result-grid" id="ddBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Date Difference Calculator','Calculate the exact number of days, weeks, months, and years between any two dates. Useful for project timelines, contract durations, age calculations, and planning purposes.',
      ['Enter your start date.','Enter your end date.','Choose whether to count all calendar days or business days only.','Click Calculate to see the full date difference breakdown.'],
      [{q:'How many days between two dates?',a:'To find days between dates, subtract the earlier date from the later date. For example, from 1 January 2024 to 28 April 2026 is 848 days. This calculator handles leap years automatically.'},
       {q:'How do I calculate working days between two dates?',a:'Working days exclude weekends (Saturday and Sunday). To calculate, count total days then subtract all Saturdays and Sundays in that period. For public holiday exclusions, use our Working Days Calculator which has built-in holiday data for Malaysia, Singapore, USA, UK, and Australia.'},
       {q:'How many weeks between two dates?',a:'Divide the total number of days by 7 to get the number of complete weeks. The remainder gives you the extra days. For example, 848 days = 121 weeks and 1 day.'}],
      ['age-calculator','working-days','countdown-timer','annual-leave-optimizer'])}`;
  document.getElementById('ddEnd').value = new Date().toISOString().split('T')[0];
}

function calcDateDiff() {
  const s = new Date(document.getElementById('ddStart').value);
  const e = new Date(document.getElementById('ddEnd').value);
  if (isNaN(s) || isNaN(e)) return;
  const swap = e < s;
  const start = swap ? e : s, end = swap ? s : e;
  const totalMs = end - start;
  const totalDays = Math.floor(totalMs / 86400000);
  const totalHours = Math.floor(totalMs / 3600000);
  const totalWeeks = Math.floor(totalDays / 7);
  const remDays = totalDays % 7;

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (months < 0) { years--; months += 12; }
  let bizDays = 0;
  if (document.getElementById('ddBiz').value === 'yes') {
    let d = new Date(start);
    while (d < end) { const day = d.getDay(); if (day !== 0 && day !== 6) bizDays++; d.setDate(d.getDate()+1); }
  }

  document.getElementById('ddDays').textContent = totalDays.toLocaleString() + ' days' + (swap ? ' (swapped)' : '');
  document.getElementById('ddBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${years} yrs ${months} mo</div><div class="result-item-label">Years & Months</div></div>
    <div class="result-item"><div class="result-item-val">${totalWeeks} wks ${remDays} days</div><div class="result-item-label">Weeks & Days</div></div>
    <div class="result-item"><div class="result-item-val">${totalDays.toLocaleString()}</div><div class="result-item-label">Total Days</div></div>
    <div class="result-item"><div class="result-item-val">${totalHours.toLocaleString()}</div><div class="result-item-label">Total Hours</div></div>
    ${bizDays ? `<div class="result-item"><div class="result-item-val">${bizDays}</div><div class="result-item-label">Business Days</div></div>` : ''}
    <div class="result-item"><div class="result-item-val">${(totalDays * 24 * 60).toLocaleString()}</div><div class="result-item-label">Total Minutes</div></div>`;
  document.getElementById('ddResult').classList.add('show');
}

// TOOL: WORKING DAYS CALCULATOR
const PH_DATA = {
  MY: {
    2024: ['2024-01-01','2024-01-18','2024-02-10','2024-02-11','2024-03-28','2024-04-10','2024-04-11','2024-05-01','2024-05-22','2024-06-03','2024-06-17','2024-07-07','2024-08-31','2024-09-16','2024-10-31','2024-12-25'],
    2025: ['2025-01-01','2025-01-29','2025-01-30','2025-02-11','2025-03-31','2025-04-01','2025-05-01','2025-05-12','2025-06-02','2025-06-07','2025-06-27','2025-08-31','2025-09-05','2025-09-16','2025-10-20','2025-12-25'],
    2026: ['2026-01-01','2026-01-17','2026-02-17','2026-02-19','2026-02-20','2026-03-20','2026-04-20','2026-04-21','2026-05-01','2026-06-01','2026-06-16','2026-07-16','2026-08-31','2026-09-16','2026-11-07','2026-12-25'],
    2027: ['2027-01-01','2027-01-06','2027-02-07','2027-02-08','2027-03-09','2027-03-19','2027-03-20','2027-05-01','2027-05-20','2027-05-26','2027-06-05','2027-06-07','2027-07-06','2027-08-31','2027-09-16','2027-10-27','2027-12-25']
  },
  SG: {
    2024: ['2024-01-01','2024-02-10','2024-02-12','2024-03-29','2024-04-10','2024-05-01','2024-05-22','2024-06-17','2024-08-09','2024-10-31','2024-12-25'],
    2025: ['2025-01-01','2025-01-29','2025-01-30','2025-03-31','2025-04-18','2025-05-01','2025-05-12','2025-06-07','2025-08-09','2025-10-20','2025-10-23','2025-12-25'],
    2026: ['2026-01-01','2026-02-17','2026-02-18','2026-03-20','2026-04-03','2026-05-01','2026-05-31','2026-05-27','2026-08-09','2026-11-08','2026-12-25'],
    2027: ['2027-01-01','2027-02-07','2027-02-08','2027-03-09','2027-03-26','2027-05-01','2027-05-20','2027-05-17','2027-08-09','2027-10-28','2027-12-25']
  },
  US: {
    2024: ['2024-01-01','2024-01-15','2024-02-19','2024-05-27','2024-06-19','2024-07-04','2024-09-02','2024-10-14','2024-11-11','2024-11-28','2024-12-25'],
    2025: ['2025-01-01','2025-01-20','2025-02-17','2025-05-26','2025-06-19','2025-07-04','2025-09-01','2025-10-13','2025-11-11','2025-11-27','2025-12-25'],
    2026: ['2026-01-01','2026-01-19','2026-02-16','2026-05-25','2026-06-19','2026-07-03','2026-09-07','2026-10-12','2026-11-11','2026-11-26','2026-12-25'],
    2027: ['2027-01-01','2027-01-18','2027-02-15','2027-05-31','2027-06-18','2027-07-05','2027-09-06','2027-10-11','2027-11-11','2027-11-25','2027-12-24']
  },
  GB: {
    2024: ['2024-01-01','2024-03-29','2024-04-01','2024-05-06','2024-05-27','2024-08-26','2024-12-25','2024-12-26'],
    2025: ['2025-01-01','2025-04-18','2025-04-21','2025-05-05','2025-05-26','2025-08-25','2025-12-25','2025-12-26'],
    2026: ['2026-01-01','2026-04-03','2026-04-06','2026-05-04','2026-05-25','2026-08-31','2026-12-25','2026-12-28'],
    2027: ['2027-01-01','2027-03-26','2027-03-29','2027-05-03','2027-05-31','2027-08-30','2027-12-27','2027-12-28']
  },
  AU: {
    2024: ['2024-01-01','2024-01-26','2024-03-29','2024-03-30','2024-04-01','2024-04-25','2024-06-10','2024-12-25','2024-12-26'],
    2025: ['2025-01-01','2025-01-27','2025-04-18','2025-04-19','2025-04-21','2025-04-25','2025-06-09','2025-12-25','2025-12-26'],
    2026: ['2026-01-01','2026-01-26','2026-04-03','2026-04-04','2026-04-06','2026-04-25','2026-06-08','2026-12-25','2026-12-28'],
    2027: ['2027-01-01','2027-01-26','2027-03-26','2027-03-27','2027-03-29','2027-04-25','2027-06-14','2027-12-27','2027-12-28']
  },
  IN: {
    2024: ['2024-01-26','2024-03-08','2024-03-25','2024-03-29','2024-04-09','2024-04-10','2024-04-11','2024-04-17','2024-04-21','2024-05-23','2024-06-17','2024-07-17','2024-08-15','2024-08-26','2024-10-02','2024-10-12','2024-10-31','2024-11-15','2024-12-25'],
    2025: ['2025-01-26','2025-02-26','2025-03-14','2025-03-31','2025-04-10','2025-04-14','2025-04-18','2025-05-12','2025-06-07','2025-07-06','2025-08-15','2025-08-16','2025-08-27','2025-10-02','2025-10-20','2025-10-22','2025-11-05','2025-12-25'],
    2026: ['2026-01-26','2026-02-15','2026-03-04','2026-03-19','2026-03-20','2026-03-31','2026-04-03','2026-05-01','2026-05-27','2026-08-15','2026-08-26','2026-09-25','2026-10-02','2026-11-08','2026-11-25','2026-12-25'],
    2027: ['2027-01-26','2027-03-08','2027-03-22','2027-03-26','2027-03-29','2027-04-09','2027-04-23','2027-05-20','2027-05-31','2027-08-15','2027-09-04','2027-09-15','2027-10-02','2027-10-29','2027-11-14','2027-12-25']
  },
  CA: {
    2024: ['2024-01-01','2024-02-19','2024-03-29','2024-05-20','2024-07-01','2024-08-05','2024-09-02','2024-09-30','2024-10-14','2024-11-11','2024-12-25','2024-12-26'],
    2025: ['2025-01-01','2025-02-17','2025-04-18','2025-05-19','2025-07-01','2025-08-04','2025-09-01','2025-09-30','2025-10-13','2025-11-11','2025-12-25','2025-12-26'],
    2026: ['2026-01-01','2026-02-16','2026-04-03','2026-05-18','2026-07-01','2026-08-03','2026-09-07','2026-09-30','2026-10-12','2026-11-11','2026-12-25','2026-12-28'],
    2027: ['2027-01-01','2027-02-15','2027-03-26','2027-05-24','2027-07-01','2027-08-02','2027-09-06','2027-09-30','2027-10-11','2027-11-11','2027-12-27','2027-12-28']
  },
  NZ: {
    2024: ['2024-01-01','2024-01-02','2024-02-06','2024-03-29','2024-04-01','2024-04-25','2024-06-03','2024-06-28','2024-10-28','2024-12-25','2024-12-26'],
    2025: ['2025-01-01','2025-01-02','2025-02-06','2025-04-18','2025-04-21','2025-04-25','2025-06-02','2025-06-20','2025-10-27','2025-12-25','2025-12-26'],
    2026: ['2026-01-01','2026-01-02','2026-02-06','2026-04-03','2026-04-06','2026-04-25','2026-06-01','2026-07-10','2026-10-26','2026-12-25','2026-12-28'],
    2027: ['2027-01-01','2027-01-04','2027-02-08','2027-03-26','2027-03-29','2027-04-26','2027-06-07','2027-06-25','2027-10-25','2027-12-27','2027-12-28']
  },
  PH: {
    2024: ['2024-01-01','2024-02-10','2024-03-28','2024-03-29','2024-03-30','2024-04-09','2024-04-10','2024-05-01','2024-06-12','2024-08-26','2024-11-01','2024-11-30','2024-12-08','2024-12-25','2024-12-30','2024-12-31'],
    2025: ['2025-01-01','2025-01-29','2025-04-01','2025-04-09','2025-04-17','2025-04-18','2025-04-19','2025-05-01','2025-06-06','2025-06-12','2025-08-25','2025-11-01','2025-11-30','2025-12-08','2025-12-25','2025-12-30','2025-12-31'],
    2026: ['2026-01-01','2026-02-17','2026-04-02','2026-04-03','2026-04-04','2026-04-09','2026-05-01','2026-05-26','2026-06-12','2026-08-31','2026-11-01','2026-11-30','2026-12-08','2026-12-25','2026-12-30','2026-12-31'],
    2027: ['2027-01-01','2027-02-07','2027-03-25','2027-03-26','2027-03-27','2027-04-09','2027-05-01','2027-05-16','2027-06-12','2027-08-30','2027-11-01','2027-11-30','2027-12-08','2027-12-25','2027-12-30','2027-12-31']
  },
  AE: {
    2024: ['2024-01-01','2024-04-09','2024-04-10','2024-04-11','2024-04-12','2024-06-15','2024-06-16','2024-06-17','2024-06-18','2024-07-07','2024-09-15','2024-12-01','2024-12-02','2024-12-03'],
    2025: ['2025-01-01','2025-03-30','2025-03-31','2025-04-01','2025-04-02','2025-06-05','2025-06-06','2025-06-07','2025-06-08','2025-06-26','2025-09-04','2025-12-01','2025-12-02','2025-12-03'],
    2026: ['2026-01-01','2026-03-19','2026-03-20','2026-03-21','2026-03-22','2026-05-26','2026-05-27','2026-05-28','2026-05-29','2026-06-16','2026-08-25','2026-12-01','2026-12-02','2026-12-03'],
    2027: ['2027-01-01','2027-03-09','2027-03-10','2027-03-11','2027-03-12','2027-05-15','2027-05-16','2027-05-17','2027-05-18','2027-06-05','2027-08-14','2027-12-01','2027-12-02','2027-12-03']
  }
};

function renderWorkingDays() {
  setMeta('Working Days Calculator — Business Days Between Dates','Calculate working days between two dates with public holidays for Malaysia, Singapore, USA, UK, and Australia.','#working-days');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › Working Days</div>
      <h1 class="tool-h1">📅 Working Days Calculator</h1>
      <p class="tool-desc-short">Count business days between two dates, excluding weekends and public holidays. Built-in holiday data for Malaysia, Singapore, USA, UK, and Australia.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Start Date</label><input type="date" id="wdStart" value="${CURRENT_YEAR}-01-01"></div>
        <div class="field"><label>End Date</label><input type="date" id="wdEnd" value="${CURRENT_YEAR}-12-31"></div>
        <div class="field"><label>Country</label>
          <select id="wdCountry">
            <option value="MY">🇲🇾 Malaysia</option>
            <option value="SG">🇸🇬 Singapore</option>
            <option value="US">🇺🇸 United States</option>
            <option value="GB">🇬🇧 United Kingdom</option>
            <option value="AU">🇦🇺 Australia</option>
            <option value="IN">🇮🇳 India</option>
            <option value="CA">🇨🇦 Canada</option>
            <option value="NZ">🇳🇿 New Zealand</option>
            <option value="PH">🇵🇭 Philippines</option>
            <option value="AE">🇦🇪 UAE</option>
          </select>
        </div>
        <div class="field"><label>Include Public Holidays?</label>
          <select id="wdPH"><option value="yes" selected>Yes — exclude public holidays</option><option value="no">No — weekends only</option></select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcWorkingDays()">⚡ Calculate Working Days</button>
      <div class="result-box" id="wdResult">
        <div class="result-label">Working Days</div>
        <div class="result-main" id="wdMain">—</div>
        <div class="result-grid" id="wdBreakdown"></div>
        <div id="wdHolidayList" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('Working Days Calculator','Calculate the number of working days between two dates with accurate public holiday data for Malaysia and major countries. Essential for project planning, leave calculations, and contract timelines.',
      ['Select your start and end dates.','Choose your country to load the correct public holidays.','Select whether to exclude public holidays.','Click Calculate to see working days, weekends, and holidays in the period.'],
      [{q:'How many working days are in a year in Malaysia?',a:'Malaysia has approximately 260–261 working days per year (52 weeks × 5 days). After deducting national public holidays (approximately 12–16 days depending on the year), there are approximately 245–248 working days in a typical year. State-specific holidays add 1–2 more non-working days depending on where you work.'},
       {q:'What counts as a public holiday in Malaysia?',a:'Malaysia has national public holidays applicable to all states (e.g., Hari Merdeka, Malaysia Day, Labour Day, Hari Raya Aidilfitri) and state-specific holidays (e.g., Sultan\'s birthday, Thaipusam varies by state). Federal Territory Day applies only to KL, Putrajaya, and Labuan. The total varies from 12 to 16+ days per year depending on your state.'},
       {q:'What happens if a public holiday falls on a Sunday in Malaysia?',a:'Under Malaysian Employment Act provisions, if a public holiday falls on a Sunday, the following Monday becomes the gazetted substitute holiday. If it falls on a Saturday, the employer is not automatically required to give an alternate day off, but many follow the practice of granting a substitute day. Always check with your employer or the latest gazette.'}],
      ['date-difference','annual-leave-optimizer','long-weekend-planner','public-holidays'])}`;
}

function calcWorkingDays() {
  const start = new Date(document.getElementById('wdStart').value);
  const end = new Date(document.getElementById('wdEnd').value);
  const country = document.getElementById('wdCountry').value;
  const usePH = document.getElementById('wdPH').value === 'yes';
  const year = start.getFullYear();
  const holidays = usePH ? ((PH_DATA[country]||{})[year]||[]).concat(((PH_DATA[country]||{})[(year+1)])||[]) : [];
  const phSet = new Set(holidays);

  let d = new Date(start), working = 0, weekends = 0, phDays = 0, phInRange = [];
  const total = Math.floor((end - start)/86400000) + 1;
  while (d <= end) {
    const ds = d.toISOString().split('T')[0];
    const dow = d.getDay();
    if (dow === 0 || dow === 6) weekends++;
    else if (phSet.has(ds)) { phDays++; phInRange.push(ds); }
    else working++;
    d.setDate(d.getDate() + 1);
  }

  document.getElementById('wdMain').textContent = working.toLocaleString();
  document.getElementById('wdBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${total}</div><div class="result-item-label">Total Calendar Days</div></div>
    <div class="result-item"><div class="result-item-val">${working}</div><div class="result-item-label">Working Days</div></div>
    <div class="result-item"><div class="result-item-val">${weekends}</div><div class="result-item-label">Weekend Days</div></div>
    <div class="result-item"><div class="result-item-val">${phDays}</div><div class="result-item-label">Public Holidays</div></div>`;
  if (phInRange.length) {
    document.getElementById('wdHolidayList').innerHTML = `<div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">Public holidays in range:</div><div style="font-size:12px;color:var(--text-muted)">${phInRange.join(', ')}</div>`;
  }
  document.getElementById('wdResult').classList.add('show');
}

// TOOL: LONG WEEKEND PLANNER
function renderLongWeekend() {
  setMeta('Long Weekend Planner Malaysia 2025 — Find All Long Weekends','Find all long weekends in Malaysia 2025 and 2026. See which public holidays create 3+ day breaks.','#long-weekend-planner');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › Long Weekend Planner</div>
      <h1 class="tool-h1">🏖️ Long Weekend Planner</h1>
      <p class="tool-desc-short">Discover all long weekends for the year. See which public holidays create 3-day, 4-day, or longer breaks.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Country</label>
          <select id="lwCountry">
            <option value="MY" selected>🇲🇾 Malaysia</option>
            <option value="SG">🇸🇬 Singapore</option>
            <option value="US">🇺🇸 United States</option>
            <option value="GB">🇬🇧 United Kingdom</option>
            <option value="AU">🇦🇺 Australia</option>
            <option value="IN">🇮🇳 India</option>
            <option value="CA">🇨🇦 Canada</option>
            <option value="NZ">🇳🇿 New Zealand</option>
            <option value="PH">🇵🇭 Philippines</option>
            <option value="AE">🇦🇪 UAE</option>
          </select>
        </div>
        <div class="field"><label>Year</label><select id="lwYear">${dynamicYears(CURRENT_YEAR, CURRENT_YEAR+2).map(y => `<option value="${y}" ${y===CURRENT_YEAR?'selected':''}>${y}</option>`).join('')}</select></div>
      </div>
      <button class="btn-calc" onclick="calcLongWeekend()">⚡ Find Long Weekends</button>
      <div class="result-box" id="lwResult">
        <div class="result-label">Long Weekends Found</div>
        <div class="result-main" id="lwCount">—</div>
        <div id="lwList" style="margin-top:16px"></div>
      </div>
    </div>
    ${seoBlock('Long Weekend Planner','Find all long weekends in Malaysia for 2025 and 2026. Perfect for advance travel planning, booking flights early, and maximising your time off work.',
      ['Select your country.','Select the year.','Click Find Long Weekends to see all 3+ day breaks.','Each result shows the holiday name and how many days off you get.'],
      [{q:'Which months have long weekends in Malaysia 2025?',a:'In 2025, Malaysia has long weekends around: Chinese New Year (Jan 29–30, Wed–Thu, creating a possible 5-day break), Hari Raya Aidilfitri (Mar 31–Apr 1, Mon–Tue), and Malaysia Day (Sep 16, Tue). Using strategic annual leave around these holidays can create very long breaks.'},
       {q:'How do I use annual leave to extend long weekends?',a:'The key is to take leave on "bridge" days. If a public holiday falls on Tuesday, take Monday off — you get 4 days off using 1 day of leave. If it falls on Thursday, take Friday — same result. Use our Annual Leave Optimizer tool for the full ranked list of best leave combinations for the year.'},
       {q:'Are gazetted public holidays automatic non-working days?',a:'Yes, all gazetted public holidays (Hari Kelepasan Am) under the Holidays Act 1951 are mandatory non-working days in Malaysia. Employees who are required to work on these days are entitled to triple pay or a substitute day off under the Employment Act 1955.'}],
      ['annual-leave-optimizer','public-holidays','working-days','countdown-timer'])}`;
}

function calcLongWeekend() {
  const country = document.getElementById('lwCountry').value;
  const year = parseInt(document.getElementById('lwYear').value);
  const holidays = (PH_DATA[country]||{})[year] || [];
  const phSet = new Set(holidays);
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let longWeekends = [];

  // Find all non-working stretches of 3+ days
  let d = new Date(year, 0, 1);
  while (d.getFullYear() === year) {
    const dow = d.getDay();
    if (dow === 5) { // Friday
      let len = 2; // Sat + Sun
      let notes = [];
      // Check Thu
      const thu = new Date(d); thu.setDate(thu.getDate() - 1);
      if (phSet.has(thu.toISOString().split('T')[0])) { len++; notes.push(thu.toISOString().split('T')[0]); }
      // Check Mon
      const mon = new Date(d); mon.setDate(mon.getDate() + 3);
      if (phSet.has(mon.toISOString().split('T')[0])) { len++; notes.push(mon.toISOString().split('T')[0]); }
      // Check Fri itself
      if (phSet.has(d.toISOString().split('T')[0])) { len++; notes.push(d.toISOString().split('T')[0]); }
      if (len >= 3) {
        const startDay = notes.length ? new Date(notes.sort()[0]) : d;
        longWeekends.push({ start: new Date(startDay), days: len, phs: notes });
      }
    }
    d.setDate(d.getDate() + 1);
  }

  longWeekends.sort((a, b) => b.days - a.days);
  document.getElementById('lwCount').textContent = longWeekends.length + ' long weekends';
  if (!longWeekends.length) {
    document.getElementById('lwList').innerHTML = '<p style="color:var(--text-muted);font-size:13px">No long weekends found with current holiday data.</p>';
  } else {
    document.getElementById('lwList').innerHTML = longWeekends.map(lw => `
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
        <div style="width:48px;height:48px;border-radius:var(--radius);background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0">${lw.days}</div>
        <div>
          <div style="font-size:14px;font-weight:500">${lw.start.getDate()} ${monthNames[lw.start.getMonth()]} — ${lw.days}-day break</div>
          <div style="font-size:12px;color:var(--text-muted)">${lw.phs.length} public holiday(s) involved</div>
        </div>
        <span class="badge" style="margin-left:auto">${lw.days >= 4 ? '🔥 Great' : '👍 Good'}</span>
      </div>`).join('');
  }
  document.getElementById('lwResult').classList.add('show');
}

// TOOL: ANNUAL LEAVE OPTIMIZER
function renderAnnualLeave() {
  setMeta('Annual Leave Optimizer Malaysia 2025 — Maximize Days Off','Find the best days to take annual leave in Malaysia 2025. Maximize consecutive days off with minimal leave.','#annual-leave-optimizer');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › Leave Optimizer</div>
      <h1 class="tool-h1">🔥 Annual Leave Optimizer</h1>
      <p class="tool-desc-short">Find the smartest days to take your annual leave. Get the maximum consecutive days off using the minimum leave days.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Country</label>
          <select id="alCountry">
            <option value="MY" selected>🇲🇾 Malaysia</option>
            <option value="SG">🇸🇬 Singapore</option>
            <option value="US">🇺🇸 United States</option>
            <option value="GB">🇬🇧 United Kingdom</option>
            <option value="AU">🇦🇺 Australia</option>
            <option value="IN">🇮🇳 India</option>
            <option value="CA">🇨🇦 Canada</option>
            <option value="NZ">🇳🇿 New Zealand</option>
            <option value="PH">🇵🇭 Philippines</option>
            <option value="AE">🇦🇪 UAE</option>
          </select>
        </div>
        <div class="field"><label>Year</label><select id="alYear">${dynamicYears(CURRENT_YEAR, CURRENT_YEAR+2).map(y => `<option value="${y}" ${y===CURRENT_YEAR?'selected':''}>${y}</option>`).join('')}</select></div>
        <div class="field"><label>Annual Leave Days Available</label><input type="number" id="alLeave" value="14" min="1" max="30"></div>
        <div class="field"><label>Max Leave Days Per Combo</label><input type="number" id="alMax" value="5" min="1" max="14"></div>
      </div>
      <button class="btn-calc" onclick="calcAnnualLeave()">⚡ Optimize My Leave</button>
      <div class="result-box" id="alResult">
        <div class="result-label">Best Leave Combinations</div>
        <div class="result-main" id="alSummary">—</div>
        <div id="alList" style="margin-top:16px"></div>
      </div>
    </div>
    ${seoBlock('Annual Leave Optimizer','Strategically plan your annual leave in Malaysia for maximum consecutive days off. This viral tool finds every opportunity to extend public holidays and weekends using the fewest leave days possible.',
      ['Select your country and year.','Enter how many annual leave days you have.','Set the maximum leave days you want to use in a single stretch.','Click Optimize to see ranked combinations from best to least efficient.','Each combo shows which leave days to take, which holidays they bridge, and total days off.'],
      [{q:'How do I get 10 days off using only 3 days of annual leave?',a:'This is the classic leave hacking strategy. Find a week where public holidays fall on Monday and Friday — you only need to take 3 days (Tue/Wed/Thu) to get 9 consecutive days off. In 2025 Malaysia, Hari Raya Aidilfitri falls on Mon–Tue (Mar 31–Apr 1), so taking Wed–Thu (Apr 2–3) gives you 9 days off using only 2 leave days.'},
       {q:'Which month is best for annual leave in Malaysia?',a:'The best months in Malaysia depend on the year\'s holiday calendar. Typically: February (Chinese New Year) and March/April (Hari Raya if early in year) offer the best leave multiplication opportunities. September is also good with Merdeka Day (Aug 31) and Malaysia Day (Sep 16) sometimes creating bridge opportunities.'},
       {q:'Can my employer refuse my annual leave request?',a:'Under the Malaysian Employment Act 1955, employers can approve or defer annual leave but cannot deny employees from taking their entitled leave. The timing of leave is subject to mutual agreement. Employees are entitled to 8 days (1st/2nd year), 12 days (3rd–5th year), or 16 days (6th year onwards) of paid annual leave. Unused leave can be carried forward or encashed depending on company policy.'}],
      ['long-weekend-planner','working-days','public-holidays','countdown-timer'])}`;
}

function calcAnnualLeave() {
  const country = document.getElementById('alCountry').value;
  const year = parseInt(document.getElementById('alYear').value);
  const totalLeave = parseInt(document.getElementById('alLeave').value) || 14;
  const maxLeave = parseInt(document.getElementById('alMax').value) || 5;
  const holidays = new Set((PH_DATA[country]||{})[year] || []);
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let combos = [];

  // Scan every possible leave block of 1..maxLeave consecutive working days
  let d = new Date(year, 0, 1);
  while (d.getFullYear() === year) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6 && !holidays.has(d.toISOString().split('T')[0])) {
      // Try blocks starting from this working day
      for (let leaveLen = 1; leaveLen <= maxLeave; leaveLen++) {
        let leaveStart = new Date(d);
        let leaveDays = [], leaveTaken = 0, cur = new Date(d);
        let valid = true;
        while (leaveTaken < leaveLen) {
          const ds = cur.toISOString().split('T')[0];
          const cdow = cur.getDay();
          if (cdow === 0 || cdow === 6 || holidays.has(ds)) { cur.setDate(cur.getDate()+1); continue; }
          leaveDays.push(ds); leaveTaken++;
          cur.setDate(cur.getDate()+1);
          if (cur.getFullYear() > year) { valid = false; break; }
        }
        if (!valid || leaveDays.length === 0) break;
        const blockEnd = new Date(cur); blockEnd.setDate(blockEnd.getDate()-1);
        // Extend backward over weekends/holidays
        let extStart = new Date(leaveStart);
        while (true) {
          const prev = new Date(extStart); prev.setDate(prev.getDate()-1);
          const pdow = prev.getDay(), pds = prev.toISOString().split('T')[0];
          if (pdow === 0 || pdow === 6 || holidays.has(pds)) extStart = prev;
          else break;
        }
        // Extend forward over weekends/holidays
        let extEnd = new Date(blockEnd);
        while (true) {
          const next = new Date(extEnd); next.setDate(next.getDate()+1);
          const ndow = next.getDay(), nds = next.toISOString().split('T')[0];
          if (ndow === 0 || ndow === 6 || holidays.has(nds)) extEnd = next;
          else break;
        }
        const totalDaysOff = Math.floor((extEnd - extStart) / 86400000) + 1;
        const efficiency = (totalDaysOff / leaveLen).toFixed(1);
        if (totalDaysOff > leaveLen && parseFloat(efficiency) >= 2.0) {
          combos.push({ leaveLen, totalDaysOff, efficiency: parseFloat(efficiency), start: extStart, end: extEnd, leaveDays, month: extStart.getMonth() });
        }
      }
    }
    d.setDate(d.getDate() + 7); // Jump week for performance
  }

  // Deduplicate by start month + leaveLen, keep best
  const seen = new Map();
  combos.forEach(c => {
    const key = `${c.month}-${c.leaveLen}`;
    if (!seen.has(key) || c.efficiency > seen.get(key).efficiency) seen.set(key, c);
  });
  const final = Array.from(seen.values()).sort((a,b) => b.efficiency - a.efficiency).slice(0, 10);

  document.getElementById('alSummary').textContent = final.length + ' combos found';
  document.getElementById('alList').innerHTML = final.map((c,i) => `
    <div style="border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:10px;${i===0?'border-color:var(--accent);background:rgba(0,200,150,0.05)':''}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <span style="font-size:22px;font-weight:700;font-family:var(--font-mono);color:${i===0?'var(--accent)':'var(--primary)'}">×${c.efficiency}</span>
        <div>
          <div style="font-size:13px;font-weight:600">${c.start.getDate()} ${monthNames[c.start.getMonth()]} – ${c.end.getDate()} ${monthNames[c.end.getMonth()]}</div>
          <div style="font-size:12px;color:var(--text-muted)">Use ${c.leaveLen} leave day${c.leaveLen>1?'s':''} → get ${c.totalDaysOff} days off</div>
        </div>
        ${i===0?'<span class="badge badge-accent" style="margin-left:auto">🏆 Best</span>':''}
      </div>
      <div style="font-size:11.5px;color:var(--text-muted)">Take leave: ${c.leaveDays.join(', ')}</div>
    </div>`).join('');
  document.getElementById('alResult').classList.add('show');
}

// TOOL: COUNTDOWN TIMER
function renderCountdown() {
  setMeta('Countdown Timer — Count Down to Any Event','Live countdown timer for birthdays, holidays, events, and deadlines. Add multiple countdowns.','#countdown-timer');
  if (window._countdownInterval) clearInterval(window._countdownInterval);
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › Countdown Timer</div>
      <h1 class="tool-h1">⏳ Countdown Timer</h1>
      <p class="tool-desc-short">Live countdown to any event — birthday, holiday, deadline, or special occasion. Add up to 5 countdowns at once.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Event Name</label><input type="text" id="ctName" placeholder="e.g. Hari Raya 2026" style="height:44px;padding:0 14px"></div>
        <div class="field"><label>Target Date & Time</label><input type="datetime-local" id="ctDate"></div>
      </div>
      <button class="btn-calc" onclick="addCountdown()">+ Add Countdown</button>
      <div id="ctList" style="margin-top:20px"></div>
    </div>
    ${seoBlock('Countdown Timer','Count down to any special event — Hari Raya, Christmas, a birthday, exam day, or a project deadline. Add multiple timers and watch them tick live.',
      ['Enter a name for your event.','Set the target date and time.','Click Add Countdown to start the live timer.','Add up to 5 different countdowns simultaneously.','Timers update every second automatically.'],
      [{q:'How do I count down to Hari Raya 2026?',a:'Enter "Hari Raya Aidilfitri 2026" as the event name and set the date to 20 March 2026. The timer will show you the exact days, hours, minutes and seconds remaining. Note: Islamic calendar dates are subject to moon sighting and may differ by 1 day.'},
       {q:'Can I use this as a study timer or deadline reminder?',a:'Yes! This countdown timer is perfect for exam countdowns, project deadlines, and study sessions. Enter your exam date and watch the days tick down — it creates a great sense of urgency for exam preparation.'},
       {q:'How accurate is the countdown timer?',a:'The countdown timer is accurate to the second and updates every second using your device\'s local clock. For events in different time zones, set the target time to the local time in your timezone. The timer accounts for daylight saving time changes.'}],
      ['age-calculator','date-difference','annual-leave-optimizer','working-days'])}`;

  const now = new Date();
  now.setDate(now.getDate() + 30);
  document.getElementById('ctDate').value = now.toISOString().slice(0,16);
  window._countdowns = JSON.parse(localStorage.getItem('peaktoolshub-countdowns') || '[]');
  renderCountdowns();
  window._countdownInterval = setInterval(renderCountdowns, 1000);
}

function addCountdown() {
  const name = document.getElementById('ctName').value || 'My Event';
  const date = document.getElementById('ctDate').value;
  if (!date) return;
  if (!window._countdowns) window._countdowns = [];
  if (window._countdowns.length >= 5) { showToast('Max 5 countdowns'); return; }
  window._countdowns.push({ name, target: new Date(date).getTime(), id: Date.now() });
  localStorage.setItem('peaktoolshub-countdowns', JSON.stringify(window._countdowns));
  document.getElementById('ctName').value = '';
  renderCountdowns();
}

function removeCountdown(id) {
  window._countdowns = (window._countdowns||[]).filter(c => c.id !== id);
  localStorage.setItem('peaktoolshub-countdowns', JSON.stringify(window._countdowns));
  renderCountdowns();
}

function renderCountdowns() {
  const list = document.getElementById('ctList');
  if (!list) { clearInterval(window._countdownInterval); return; }
  const countdowns = window._countdowns || [];
  if (!countdowns.length) {
    list.innerHTML = '<p style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">No countdowns yet. Add one above!</p>';
    return;
  }
  list.innerHTML = countdowns.map(c => {
    const diff = c.target - Date.now();
    const past = diff < 0;
    const abs = Math.abs(diff);
    const d = Math.floor(abs / 86400000);
    const h = Math.floor((abs % 86400000) / 3600000);
    const m = Math.floor((abs % 3600000) / 60000);
    const s = Math.floor((abs % 60000) / 1000);
    return `<div style="border:1px solid var(--border);border-radius:var(--radius);padding:16px 20px;margin-bottom:10px;position:relative">
      <button onclick="removeCountdown(${c.id})" style="position:absolute;top:10px;right:10px;background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:16px">×</button>
      <div style="font-size:13px;font-weight:600;color:var(--text-muted);margin-bottom:10px">${c.name} ${past?'(passed)':''}</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;text-align:center">
        ${[['DAYS',d],['HRS',h],['MIN',m],['SEC',s]].map(([label,val])=>`
          <div style="background:var(--${past?'result':'primary-faint'});border-radius:var(--radius-sm);padding:10px 4px">
            <div style="font-family:var(--font-mono);font-size:26px;font-weight:500;color:var(--${past?'text-muted':'primary'})">${String(val).padStart(2,'0')}</div>
            <div style="font-size:10px;color:var(--text-hint);letter-spacing:0.1em;margin-top:2px">${label}</div>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');
}

// ============================================================
// CLUSTER 3: CONVERTERS
// ============================================================

// TOOL: CURRENCY CONVERTER
let _ratesCache = {}, _ratesFetchTime = null, _usingFallback = false, _rateSource = '';

// Fallback rates only used if ALL APIs fail (rare).
// These are static USD-based mid-market reference points.
// Updated periodically — but the live APIs below are tried first.
const _FALLBACK_USD_RATES = {USD:1, EUR:0.921, GBP:0.786, JPY:149.5, CAD:1.382, AUD:1.522, CHF:0.882, CNY:7.218, INR:84.2, MYR:4.42, SGD:1.336, HKD:7.785, NZD:1.658, KRW:1378, THB:34.5, IDR:15820, PHP:56.8, BDT:110.5, PKR:278.5, AED:3.673, SAR:3.751, QAR:3.641, KWD:0.307, BHD:0.377, EGP:48.7, ZAR:18.35, NGN:1595, BRL:5.04, MXN:17.18, TRY:34.4, RUB:91.5, SEK:10.85, NOK:10.92, DKK:6.884, PLN:3.97, VND:25390, TWD:32.1, BND:1.336, LKR:298, NPR:135.5, ILS:3.72, JOD:0.709, OMR:0.385, KES:129.5, GHS:15.2, CLP:961, COP:4287, PEN:3.73, ARS:1018, UAH:41.2, CZK:23.3, HUF:387, RON:4.59, ISK:139, MUR:46.8, FJD:2.268, XOF:614, MAD:9.98, DZD:134, UGX:3680, TZS:2615};

function _getFallbackRates(base) {
  const usdToBase = _FALLBACK_USD_RATES[base] || 1;
  const rates = {};
  for (const [k,v] of Object.entries(_FALLBACK_USD_RATES)) {
    rates[k] = parseFloat((v / usdToBase).toFixed(6));
  }
  rates[base] = 1;
  return rates;
}

async function fetchRates(base) {
  const now = Date.now();
  // Cache 10 minutes (rates don't change that fast for personal use)
  if (_ratesCache[base] && _ratesFetchTime && (now - _ratesFetchTime) < 600000) {
    return _ratesCache[base];
  }

  const baseLower = base.toLowerCase();
  const today = new Date().toISOString().split('T')[0];

  // Source 1: fawazahmed0/currency-api via jsDelivr CDN
  // Used by 1M+ projects, no CORS issues, aggregates multiple banks (like XE.com)
  // Updates daily via GitHub Actions
  try {
    const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseLower}.json`);
    if (res.ok) {
      const data = await res.json();
      const ratesLower = data[baseLower];
      if (ratesLower && Object.keys(ratesLower).length > 100) {
        // Convert keys to uppercase to match our currency codes
        const rates = {};
        for (const [k,v] of Object.entries(ratesLower)) {
          rates[k.toUpperCase()] = v;
        }
        _ratesCache[base] = rates;
        _ratesFetchTime = now;
        _usingFallback = false;
        _rateSource = 'Currency-API (mid-market) · daily update';
        return rates;
      }
    }
  } catch(e) { /* try next */ }

  // Source 2: Cloudflare-backed mirror of same data
  try {
    const res = await fetch(`https://${today}.currency-api.pages.dev/v1/currencies/${baseLower}.json`);
    if (res.ok) {
      const data = await res.json();
      const ratesLower = data[baseLower];
      if (ratesLower && Object.keys(ratesLower).length > 100) {
        const rates = {};
        for (const [k,v] of Object.entries(ratesLower)) {
          rates[k.toUpperCase()] = v;
        }
        _ratesCache[base] = rates;
        _ratesFetchTime = now;
        _usingFallback = false;
        _rateSource = 'Currency-API CDN mirror';
        return rates;
      }
    }
  } catch(e) { /* try next */ }

  // Source 3: Frankfurter (ECB reference rates — daily, 30 currencies)
  // Excellent accuracy for major pairs (USD/EUR/GBP/JPY/etc), free forever
  try {
    const res = await fetch(`https://api.frankfurter.app/latest?from=${base}`);
    if (res.ok) {
      const data = await res.json();
      if (data.rates && Object.keys(data.rates).length > 5) {
        const rates = {...data.rates, [base]: 1};
        _ratesCache[base] = rates;
        _ratesFetchTime = now;
        _usingFallback = false;
        _rateSource = 'Frankfurter (ECB rates) · ' + (data.date || 'daily');
        return rates;
      }
    }
  } catch(e) { /* try next */ }

  // Source 4: open.er-api.com (last live API)
  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
    if (res.ok) {
      const data = await res.json();
      if (data.rates && Object.keys(data.rates).length > 10) {
        _ratesCache[base] = data.rates;
        _ratesFetchTime = now;
        _usingFallback = false;
        _rateSource = 'open.er-api.com';
        return data.rates;
      }
    }
  } catch(e) { /* try next */ }

  // All live sources failed — use hardcoded fallback (rare)
  _usingFallback = true;
  _rateSource = 'Estimated rates (offline) — please check connection';
  return _getFallbackRates(base);
}

function renderCurrency() {
  setMeta('Currency Converter — 170+ World Currencies Live Rates','Convert between 170+ world currencies with live exchange rates. MYR, USD, GBP, EUR, SGD and more.','#currency-converter');
  const opts = CURRENCIES.map(c=>`<option value="${c.code}">${c.flag} ${c.code} — ${c.name}</option>`).join('');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('converters')">💱 Converters</span> › Currency Converter</div>
      <h1 class="tool-h1">💱 Currency Converter</h1>
      <p class="tool-desc-short">Convert between 170+ world currencies with live exchange rates updated hourly. MYR, USD, GBP, EUR, SGD, AUD, JPY and more.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Amount</label><input type="number" id="ccyAmount" value="100" oninput="convertCurrency()"></div>
        <div class="field"><label>From Currency</label><select id="ccyFrom" onchange="convertCurrency()">${opts}</select></div>
        <div class="field"><label>To Currency</label><select id="ccyTo" onchange="convertCurrency()">${opts.replace('value="MYR"','value="MYR" ').replace('value="USD"','value="USD" selected')}</select></div>
        <div class="field" style="display:flex;align-items:flex-end">
          <button class="btn-secondary" style="width:100%;height:44px" onclick="swapCurrencies()">⇅ Swap</button>
        </div>
      </div>
      <div class="result-box show" id="ccyResult" style="display:block">
        <div class="result-label" id="ccyLabel">Converting...</div>
        <div class="result-main" id="ccyMain" style="font-size:28px">—</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px" id="ccyRate"></div>
        <div class="result-grid" id="ccyGrid" style="margin-top:16px"></div>
        <div style="font-size:11px;color:var(--text-hint);margin-top:12px" id="ccyTime"></div>
      </div>
      <div style="margin-top:16px">
        <div style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">Popular Pairs</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap" id="ccyPairs"></div>
      </div>
      <div style="margin-top:16px;padding:10px 14px;background:var(--bg-input);border-radius:var(--radius-sm);font-size:11.5px;color:var(--text-muted);line-height:1.5">
        <strong>About the rates:</strong> We show <strong>mid-market rates</strong> — the same midpoint used by XE.com and Wise. These are reference rates for informational use. Banks and money changers add their margin (typically 0.5–4%) when you actually exchange, so the rate you receive may differ.
      </div>
    </div>
    ${seoBlock('Currency Converter','Convert between 170+ world currencies with live exchange rates updated every hour. Whether you need MYR to USD, GBP to EUR, or any other pair, PeakToolsHub\'s currency converter shows you the most accurate current rate along with the conversion for the top 10 major currencies simultaneously.',
      ['Enter the amount you want to convert.','Select the source currency from the dropdown (supports 170+ currencies with flag icons).','Select the target currency.','Rates update automatically — no need to click Calculate.','Use the Swap button to instantly reverse the conversion.'],
      [{q:'What is the current MYR to USD exchange rate?',a:'The MYR to USD exchange rate changes daily. As of 2024-2025, 1 USD has been trading between RM4.35 and RM4.75. This calculator fetches live rates from ExchangeRate-API updated every hour. Always check the latest rate before making any currency exchange transactions.'},
       {q:'Where can I exchange currency in Malaysia?',a:'In Malaysia, you can exchange currency at: licensed money changers (best rates, especially Berjaya Times Square, Low Yat, Suria KLCC), bank branches (convenient but slightly worse rates), airport counters (worst rates — avoid if possible), and ATMs abroad (often offer competitive rates but check your bank\'s foreign transaction fee). Licensed money changers must be registered with Bank Negara Malaysia (BNM).'},
       {q:'How do I avoid bad exchange rates when travelling?',a:'To get the best rates: compare money changers before exchanging, avoid airport and hotel counters, use a multi-currency card like Wise or Revolut (interbank rates with low fees), notify your bank before travel, and withdraw local currency from ATMs using a card with no foreign transaction fee. Avoid dynamic currency conversion (DCC) offered by overseas ATMs — always choose local currency.'}],
      ['inflation-calculator','salary-calculator','tip-calculator','fuel-cost'])}`;

  document.getElementById('ccyFrom').value = 'MYR';
  document.getElementById('ccyTo').value = 'USD';
  const popularPairs = [['MYR','USD'],['MYR','SGD'],['MYR','GBP'],['USD','EUR'],['USD','GBP'],['GBP','EUR'],['AUD','USD'],['USD','JPY']];
  document.getElementById('ccyPairs').innerHTML = popularPairs.map(([f,t])=>`
    <button class="tab-btn" style="font-size:12px;padding:5px 12px" onclick="document.getElementById('ccyFrom').value='${f}';document.getElementById('ccyTo').value='${t}';convertCurrency()">${f}/${t}</button>`).join('');
  convertCurrency();
}

async function convertCurrency() {
  const amount = parseFloat(document.getElementById('ccyAmount').value)||1;
  const from = document.getElementById('ccyFrom').value;
  const to = document.getElementById('ccyTo').value;
  document.getElementById('ccyMain').textContent = 'Loading...';
  const rates = await fetchRates(from);
  if (!rates) {
    document.getElementById('ccyMain').textContent = '—';
    document.getElementById('ccyRate').textContent = 'Could not load rates. Please check your internet connection.';
    return;
  }
  const rate = rates[to];
  const result = amount * rate;
  const fromCur = CURRENCIES.find(c=>c.code===from)||{flag:'',name:from};
  const toCur = CURRENCIES.find(c=>c.code===to)||{flag:'',name:to};
  document.getElementById('ccyLabel').textContent = `${fromCur.flag} ${from} → ${toCur.flag} ${to}`;
  document.getElementById('ccyMain').textContent = `${getSymbol(to)}${fmt(result)}`;
  document.getElementById('ccyRate').textContent = `1 ${from} = ${rate?.toFixed(4)} ${to}  |  1 ${to} = ${(1/rate)?.toFixed(4)} ${from}`;
  document.getElementById('ccyTime').textContent = `${_rateSource} · Fetched ${new Date().toLocaleTimeString()}`;
  // Multi-currency grid
  const topCurrencies = ['USD','EUR','GBP','SGD','AUD','JPY','CNY','INR','SAR','AED'];
  const gridItems = topCurrencies.filter(c=>c!==from).map(c=>{
    const r = rates[c]; if(!r) return '';
    const cur = CURRENCIES.find(x=>x.code===c)||{flag:'',code:c};
    return `<div class="result-item"><div class="result-item-val">${cur.flag} ${fmt(amount*r,2)}</div><div class="result-item-label">${c}</div></div>`;
  }).join('');
  document.getElementById('ccyGrid').innerHTML = gridItems;
}

function swapCurrencies() {
  const from = document.getElementById('ccyFrom').value;
  const to = document.getElementById('ccyTo').value;
  document.getElementById('ccyFrom').value = to;
  document.getElementById('ccyTo').value = from;
  convertCurrency();
}

// TOOL: GENERIC UNIT CONVERTER (reusable)
function makeUnitConverter(id, title, icon, cluster, units, baseUnit, desc, seoDesc, faqs, related) {
  return function() {
    setMeta(`${title} — Free Online Converter`, desc, `#${id}`);
    const fields = units.map(u=>`
      <div class="field">
        <label>${u.label}</label>
        <input type="number" id="${id}_${u.id}" placeholder="0" oninput="convertUnits('${id}','${u.id}',${JSON.stringify(units).replace(/"/g,'&quot;')},${u.toBase})">
      </div>`).join('');
    document.getElementById('app').innerHTML = `
      <div class="tool-header">
        <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('${cluster}')">💱 Converters</span> › ${title}</div>
        <h1 class="tool-h1">${icon} ${title}</h1>
        <p class="tool-desc-short">${desc}</p>
      </div>
      <div class="tool-card"><div class="form-grid">${fields}</div>
        <button class="btn-secondary" style="margin-top:12px" onclick="clearUnits('${id}',${JSON.stringify(units).replace(/"/g,'&quot;')})">Clear All</button>
      </div>
      ${seoBlock(title, seoDesc, ['Enter a value in any field.','All other units update simultaneously.','Clear all fields using the Clear button.','Results are accurate to 6 decimal places.'], faqs, related)}`;
  };
}

function convertUnits(toolId, changedUnit, units, toBase) {
  const val = parseFloat(document.getElementById(`${toolId}_${changedUnit}`).value);
  if (isNaN(val)) return;
  const inBase = val * toBase;
  units.forEach(u => {
    if (u.id === changedUnit) return;
    const el = document.getElementById(`${toolId}_${u.id}`);
    if (el) el.value = parseFloat((inBase / u.toBase).toFixed(8));
  });
}
function clearUnits(toolId, units) {
  units.forEach(u => { const el = document.getElementById(`${toolId}_${u.id}`); if(el) el.value=''; });
}

// LENGTH CONVERTER
const renderLength = makeUnitConverter(
  'length','Length / Distance Converter','📏','converters',
  [{id:'mm',label:'Millimetres (mm)',toBase:0.001},{id:'cm',label:'Centimetres (cm)',toBase:0.01},{id:'m',label:'Metres (m)',toBase:1},{id:'km',label:'Kilometres (km)',toBase:1000},{id:'in',label:'Inches (in)',toBase:0.0254},{id:'ft',label:'Feet (ft)',toBase:0.3048},{id:'yd',label:'Yards (yd)',toBase:0.9144},{id:'mi',label:'Miles (mi)',toBase:1609.344},{id:'nm',label:'Nautical Miles',toBase:1852}],
  'm','Convert between millimetres, centimetres, metres, kilometres, inches, feet, yards, and miles.',
  'Convert any length or distance measurement instantly. Enter a value in any field and all other units update simultaneously. Supports metric (mm, cm, m, km) and imperial (inches, feet, yards, miles) units plus nautical miles.',
  [{q:'How many centimetres in an inch?',a:'1 inch = 2.54 centimetres exactly. This is an exact definition. So 12 inches (1 foot) = 30.48 cm, and 1 metre = 39.3701 inches.'},{q:'How many kilometres in a mile?',a:'1 mile = 1.60934 kilometres. Conversely, 1 km = 0.62137 miles. A quick approximation: multiply km by 0.6 to get miles, or multiply miles by 1.6 to get km.'},{q:'What is the difference between a nautical mile and a regular mile?',a:'A nautical mile is defined as 1,852 metres (1.852 km), based on one arc-minute of latitude. A regular (statute) mile is 1,609.34 metres. Nautical miles are used in aviation and maritime navigation because they relate directly to degrees of latitude on the Earth\'s surface.'}],
  ['weight-converter','temperature-converter','speed-converter','cooking-converter']
);

// WEIGHT CONVERTER
const renderWeight = makeUnitConverter(
  'weight','Weight / Mass Converter','⚖️','converters',
  [{id:'mg',label:'Milligrams (mg)',toBase:0.000001},{id:'g',label:'Grams (g)',toBase:0.001},{id:'kg',label:'Kilograms (kg)',toBase:1},{id:'t',label:'Metric Tonnes (t)',toBase:1000},{id:'oz',label:'Ounces (oz)',toBase:0.028349523},{id:'lb',label:'Pounds (lb)',toBase:0.45359237},{id:'st',label:'Stone (st)',toBase:6.35029318},{id:'ct',label:'Carats (ct)',toBase:0.0002}],
  'kg','Convert between grams, kilograms, pounds, ounces, stone, metric tonnes and more.',
  'Convert weight and mass measurements instantly between metric and imperial units. Supports milligrams, grams, kilograms, metric tonnes, ounces, pounds, stone, and carats.',
  [{q:'How many pounds in a kilogram?',a:'1 kilogram = 2.20462 pounds. So 70 kg = 154.3 lbs. To convert kg to lbs, multiply by 2.205. To convert lbs to kg, multiply by 0.4536.'},{q:'How many grams in an ounce?',a:'1 ounce (oz) = 28.3495 grams. 1 troy ounce (used for gold and precious metals) = 31.1035 grams. When buying gold, always check whether the price is per troy ounce or regular ounce.'},{q:'What is a stone in kg?',a:'1 stone = 14 pounds = 6.35029 kg. Stone is commonly used for body weight in the UK and Ireland. For example, 11 stone = 69.85 kg (roughly 70 kg). Most other countries use kilograms for body weight measurement.'}],
  ['length-converter','bmi-calculator','ideal-weight','body-fat']
);

// TEMPERATURE CONVERTER
function renderTemperature() {
  setMeta('Temperature Converter — Celsius, Fahrenheit, Kelvin','Convert temperatures between Celsius, Fahrenheit, Kelvin, and Rankine instantly.','#temperature-converter');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('converters')">💱 Converters</span> › Temperature</div>
      <h1 class="tool-h1">🌡️ Temperature Converter</h1>
      <p class="tool-desc-short">Convert between Celsius, Fahrenheit, Kelvin, and Rankine. All fields update simultaneously.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Celsius (°C)</label><input type="number" id="tc" placeholder="0" oninput="convertTemp('c',this.value)" step="0.1"></div>
        <div class="field"><label>Fahrenheit (°F)</label><input type="number" id="tf" placeholder="32" oninput="convertTemp('f',this.value)" step="0.1"></div>
        <div class="field"><label>Kelvin (K)</label><input type="number" id="tk" placeholder="273.15" oninput="convertTemp('k',this.value)" step="0.1"></div>
        <div class="field"><label>Rankine (°R)</label><input type="number" id="tr" placeholder="491.67" oninput="convertTemp('r',this.value)" step="0.1"></div>
      </div>
      <div style="margin-top:16px;padding:14px 18px;background:var(--primary-faint);border-radius:var(--radius);font-size:13px">
        <div style="font-weight:600;margin-bottom:8px;color:var(--primary)">📌 Common Reference Points</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px">
          ${[['Water freezes','0°C','32°F','273.15K'],['Body temperature','37°C','98.6°F','310.15K'],['Water boils','100°C','212°F','373.15K'],['Absolute zero','−273.15°C','−459.67°F','0K'],['Malaysia avg temp','28°C','82.4°F','301.15K'],['Oven (180°C)','180°C','356°F','453.15K']].map(([label,...vals])=>`
            <div style="background:var(--bg-card);border-radius:var(--radius-sm);padding:8px 12px;cursor:pointer" onclick="convertTemp('c',${vals[0].replace('°C','').replace('−','-')})">
              <div style="font-size:11px;color:var(--text-muted)">${label}</div>
              <div style="font-size:13px;font-weight:500">${vals[0]} / ${vals[1]}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
    ${seoBlock('Temperature Converter','Convert temperatures between Celsius, Fahrenheit, Kelvin, and Rankine with all fields updating simultaneously. Includes common reference points like body temperature, water boiling and freezing points, and Malaysia\'s typical weather temperature.',
      ['Enter a temperature in any field — Celsius, Fahrenheit, Kelvin, or Rankine.','All other fields update instantly.','Click any reference point card to pre-fill the converter.'],
      [{q:'How do I convert Celsius to Fahrenheit?',a:'Formula: °F = (°C × 9/5) + 32. Example: 37°C (body temperature) = (37 × 1.8) + 32 = 66.6 + 32 = 98.6°F. Quick approximation: double the Celsius, subtract 10%, then add 32.'},
       {q:'What temperature is Kelvin 0 in Celsius?',a:'Kelvin 0 (absolute zero) = −273.15°C = −459.67°F. This is the theoretically coldest possible temperature where all molecular motion stops. The Kelvin scale is used in science and engineering because it has no negative values.'},
       {q:'What is normal room temperature in Celsius?',a:'Standard room temperature is defined as 20°C (68°F) for scientific purposes. In Malaysia, indoor temperatures typically range from 23–28°C due to air conditioning. Outdoor temperatures in peninsular Malaysia average 28–33°C throughout the year, with humidity making it feel 4–6°C warmer.'}],
      ['length-converter','cooking-converter','fuel-cost','weight-converter'])}`;
}
function convertTemp(from, val) {
  const v = parseFloat(val); if (isNaN(v)) return;
  let c;
  if (from==='c') c=v; else if (from==='f') c=(v-32)*5/9; else if (from==='k') c=v-273.15; else c=(v-491.67)*5/9;
  const set = (id, fn) => { const el = document.getElementById(id); if(el) el.value = parseFloat(fn(c).toFixed(4)); };
  if (from!=='c') set('tc', c=>c);
  if (from!=='f') set('tf', c=>c*9/5+32);
  if (from!=='k') set('tk', c=>c+273.15);
  if (from!=='r') set('tr', c=>(c+273.15)*9/5);
}

// DATA STORAGE CONVERTER
function renderDataStorage() {
  setMeta('Data Storage Converter — MB GB TB Converter','Convert between bits, bytes, KB, MB, GB, TB, PB in both decimal (SI) and binary (IEC) systems.','#data-storage-converter');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('converters')">💱 Converters</span> › Data Storage</div>
      <h1 class="tool-h1">💾 Data Storage Converter</h1>
      <p class="tool-desc-short">Convert between bits, bytes, KB, MB, GB, TB, and PB in both decimal (SI) and binary (IEC) systems.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="setStorageMode('si',this)">Decimal (SI): 1KB = 1,000B</button>
        <button class="tab-btn" onclick="setStorageMode('iec',this)">Binary (IEC): 1KiB = 1,024B</button>
      </div>
      <div class="form-grid" id="dsGrid"></div>
    </div>
    ${seoBlock('Data Storage Converter','Convert data storage units between bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes. Supports both decimal (SI) and binary (IEC) systems.',
      ['Enter a value in any storage unit field.','All other units update instantly.','Switch between SI (1KB=1000B) and IEC (1KiB=1024B) using the tabs.'],
      [{q:'What is the difference between GB and GiB?',a:'GB (gigabyte) in SI = 1,000,000,000 bytes (10^9). GiB (gibibyte) in IEC = 1,073,741,824 bytes (2^30). Hard drive manufacturers use SI (so a "1TB" drive = 931 GiB). Operating systems traditionally show IEC values. This is why a 1TB drive shows as ~931GB in Windows/macOS.'},
       {q:'How many MB in a GB?',a:'In SI (decimal): 1 GB = 1,000 MB. In IEC (binary): 1 GiB = 1,024 MiB. For practical purposes, internet data plans and file sizes typically use SI, while RAM specifications sometimes use IEC.'},
       {q:'How many hours of video fit in 1GB?',a:'Video storage depends on quality: 480p video ≈ 700MB/hour, 720p ≈ 1.5–2GB/hour, 1080p ≈ 3–4GB/hour, 4K ≈ 10–20GB/hour. So 1GB holds roughly 1.5 hours of 480p or 15–30 minutes of 1080p video. Streaming services compress more aggressively — Netflix 1080p uses about 3GB/hour.'}],
      ['internet-speed','length-converter','speed-converter','password-generator'])}`;
  window._storageMode = 'si';
  renderStorageFields();
}
function setStorageMode(mode, btn) {
  window._storageMode = mode;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderStorageFields();
}
function renderStorageFields() {
  const base = window._storageMode === 'si' ? 1000 : 1024;
  const units = [
    {id:'bit',label:'Bits (bit)',bytes:1/8},{id:'byte',label:'Bytes (B)',bytes:1},
    {id:'kb',label:`Kilo${base===1000?'b':'b'}ytes (KB/KiB)`,bytes:base},
    {id:'mb',label:`Mega${base===1000?'b':'b'}ytes (MB/MiB)`,bytes:Math.pow(base,2)},
    {id:'gb',label:`Giga${base===1000?'b':'b'}ytes (GB/GiB)`,bytes:Math.pow(base,3)},
    {id:'tb',label:`Tera${base===1000?'b':'b'}ytes (TB/TiB)`,bytes:Math.pow(base,4)},
    {id:'pb',label:`Peta${base===1000?'b':'b'}ytes (PB/PiB)`,bytes:Math.pow(base,5)},
  ];
  document.getElementById('dsGrid').innerHTML = units.map(u=>`
    <div class="field"><label>${u.label}</label>
    <input type="number" id="ds_${u.id}" placeholder="0" oninput="convertStorage('${u.id}',this.value,${u.bytes})"></div>`).join('');
}
function convertStorage(changedId, val, bytesPerUnit) {
  const v = parseFloat(val); if (isNaN(v)) return;
  const bytes = v * bytesPerUnit;
  const base = window._storageMode === 'si' ? 1000 : 1024;
  const units = [{id:'bit',bytes:1/8},{id:'byte',bytes:1},{id:'kb',bytes:base},{id:'mb',bytes:Math.pow(base,2)},{id:'gb',bytes:Math.pow(base,3)},{id:'tb',bytes:Math.pow(base,4)},{id:'pb',bytes:Math.pow(base,5)}];
  units.forEach(u=>{ if(u.id===changedId) return; const el=document.getElementById(`ds_${u.id}`); if(el) el.value=parseFloat((bytes/u.bytes).toFixed(10)); });
}

// SPEED CONVERTER
const renderSpeed = makeUnitConverter(
  'speed','Speed Converter','🚀','converters',
  [{id:'ms',label:'Metres/second (m/s)',toBase:1},{id:'kmh',label:'Kilometres/hour (km/h)',toBase:1/3.6},{id:'mph',label:'Miles/hour (mph)',toBase:0.44704},{id:'kn',label:'Knots (kn)',toBase:0.514444},{id:'fts',label:'Feet/second (ft/s)',toBase:0.3048},{id:'mach',label:'Mach (at sea level)',toBase:340.29}],
  'ms','Convert between metres per second, km/h, mph, knots, and Mach.',
  'Convert speed measurements between metres per second, kilometres per hour, miles per hour, knots, feet per second, and Mach number. Includes fun reference values.',
  [{q:'How fast is Mach 1 in km/h?',a:'Mach 1 (speed of sound at sea level, 15°C) = 340.29 m/s = 1,225 km/h = 761 mph. At higher altitudes where temperature is lower, the speed of sound decreases — at 35,000 feet (cruising altitude) Mach 1 ≈ 1,062 km/h.'},
   {q:'What is the speed limit in Malaysia in km/h?',a:'Malaysia speed limits: expressways (plus/highway) 110 km/h, federal roads 90 km/h, urban roads 60 km/h, school zones and residential areas 30–50 km/h. Speed cameras (AES) operate on major highways. Fines range from RM300–RM1,000 for speeding offences.'},
   {q:'How fast can a Formula 1 car go in km/h?',a:'Formula 1 cars reach top speeds of 350–370 km/h (217–230 mph) on long straights. The fastest recorded F1 speed was 372.6 km/h by Valtteri Bottas in 2016. However, average race speeds are much lower (typically 200–240 km/h including corners and chicanes).'}],
  ['fuel-cost','length-converter','temperature-converter','data-storage-converter']
);

// COOKING CONVERTER
function renderCooking() {
  setMeta('Cooking Measurement Converter — Cups ml tbsp tsp','Convert cooking measurements between cups, millilitres, tablespoons, teaspoons, pints, and more.','#cooking-converter');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('converters')">💱 Converters</span> › Cooking Converter</div>
      <h1 class="tool-h1">🍳 Cooking Measurement Converter</h1>
      <p class="tool-desc-short">Convert between cups, ml, tablespoons, teaspoons, fluid ounces, pints, and gallons. Includes dry ingredient weight converter.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="cookingSetTab('liquid',this)">Liquid</button>
        <button class="tab-btn" onclick="cookingSetTab('dry',this)">Dry Ingredients</button>
      </div>
      <div id="cookingForm"></div>
    </div>
    ${seoBlock('Cooking Converter','Convert cooking measurements for both liquid and dry ingredients. Perfect for scaling recipes up or down, converting American cup measurements to metric ml, or converting tablespoons to teaspoons.',
      ['Select Liquid or Dry ingredients tab.','For liquid: enter a value in any field and all others update.','For dry: select the ingredient and enter cups or grams to convert.'],
      [{q:'How many ml in a cup?',a:'1 US cup = 236.588 ml (approximately 240ml for cooking purposes). 1 metric cup (used in Australia) = 250ml. Always check which cup system a recipe uses — US and Australian cups differ by about 10ml.'},
       {q:'How many tablespoons in a cup?',a:'1 US cup = 16 tablespoons = 48 teaspoons. 1 tablespoon = 3 teaspoons = 15ml. 1 teaspoon = 5ml. These conversions are consistent across US and metric systems.'},
       {q:'How do I convert cups of flour to grams?',a:'1 cup of all-purpose flour ≈ 120–130g (varies with sifting — sifted flour is lighter). 1 cup of sugar ≈ 200g. 1 cup of butter ≈ 225g (2 sticks). 1 cup of milk ≈ 240g. Dry ingredient conversions vary by density, which is why weighing is more accurate for baking.'}],
      ['weight-converter','temperature-converter','calorie-calculator','tip-calculator'])}`;
  window._cookingTab = 'liquid';
  cookingSetTab('liquid', document.querySelector('.tabs-row .tab-btn'));
}
function cookingSetTab(tab, btn) {
  window._cookingTab = tab;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const liquidUnits = [{id:'ml',label:'Millilitres (ml)',toBase:1},{id:'l',label:'Litres (l)',toBase:1000},{id:'tsp',label:'Teaspoon (tsp)',toBase:4.92892},{id:'tbsp',label:'Tablespoon (tbsp)',toBase:14.7868},{id:'floz',label:'Fluid Ounce (fl oz)',toBase:29.5735},{id:'cup',label:'Cup US (cup)',toBase:236.588},{id:'cupm',label:'Cup Metric (250ml)',toBase:250},{id:'pint',label:'Pint US (pt)',toBase:473.176},{id:'qt',label:'Quart US (qt)',toBase:946.353},{id:'gal',label:'Gallon US (gal)',toBase:3785.41}];
  const dryIngredients = [{name:'All-purpose flour',gPerCup:125},{name:'Sugar (white)',gPerCup:200},{name:'Brown sugar (packed)',gPerCup:220},{name:'Butter',gPerCup:227},{name:'Rice (uncooked)',gPerCup:185},{name:'Oats (rolled)',gPerCup:90},{name:'Honey',gPerCup:340},{name:'Milk powder',gPerCup:120},{name:'Cocoa powder',gPerCup:85},{name:'Breadcrumbs',gPerCup:108}];
  if (tab === 'liquid') {
    document.getElementById('cookingForm').innerHTML = `<div class="form-grid">${liquidUnits.map(u=>`
      <div class="field"><label>${u.label}</label>
      <input type="number" id="ck_${u.id}" placeholder="0" oninput="convertCooking('${u.id}',this.value,${u.toBase},${JSON.stringify(liquidUnits).replace(/"/g,'&quot;')})"></div>`).join('')}</div>`;
  } else {
    const ingOpts = dryIngredients.map(i=>`<option value="${i.gPerCup}">${i.name} (${i.gPerCup}g/cup)</option>`).join('');
    document.getElementById('cookingForm').innerHTML = `
      <div class="form-grid">
        <div class="field form-full"><label>Ingredient</label><select id="dryIngr">${ingOpts}</select></div>
        <div class="field"><label>Cups</label><input type="number" id="dryCups" placeholder="1" oninput="convertDry('cups',this.value)"></div>
        <div class="field"><label>Grams (g)</label><input type="number" id="dryGrams" placeholder="" oninput="convertDry('grams',this.value)"></div>
        <div class="field"><label>Tablespoons (tbsp)</label><input type="number" id="dryTbsp" placeholder="" oninput="convertDry('tbsp',this.value)"></div>
        <div class="field"><label>Teaspoons (tsp)</label><input type="number" id="dryTsp" placeholder="" oninput="convertDry('tsp',this.value)"></div>
      </div>`;
  }
}
function convertCooking(changedId, val, toBase, units) {
  const v = parseFloat(val); if (isNaN(v)) return;
  const inBase = v * toBase;
  units.forEach(u=>{
    if(u.id===changedId) return;
    const el = document.getElementById(`ck_${u.id}`);
    if(el) el.value = parseFloat((inBase/u.toBase).toFixed(6));
  });
}
function convertDry(from, val) {
  const v = parseFloat(val); if (isNaN(v)) return;
  const gpc = parseFloat(document.getElementById('dryIngr').value)||125;
  let grams;
  if(from==='cups') grams=v*gpc; else if(from==='grams') grams=v; else if(from==='tbsp') grams=v*(gpc/16); else grams=v*(gpc/48);
  if(from!=='cups') document.getElementById('dryCups').value=(grams/gpc).toFixed(3);
  if(from!=='grams') document.getElementById('dryGrams').value=grams.toFixed(1);
  if(from!=='tbsp') document.getElementById('dryTbsp').value=(grams/(gpc/16)).toFixed(2);
  if(from!=='tsp') document.getElementById('dryTsp').value=(grams/(gpc/48)).toFixed(2);
}

// ============================================================
// CLUSTER 4: DAILY LIFE TOOLS
// ============================================================

function renderDiscount() {
  setMeta('Discount Calculator — Sale Price & Savings','Calculate sale price, amount saved, and effective discount percentage for any original price.','#discount-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Discount Calculator</div>
      <h1 class="tool-h1">🏷️ Discount Calculator</h1>
      <p class="tool-desc-short">Calculate sale price and savings from a discount. Reverse mode: find what % off something is.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="discSetMode('apply',this)">Apply Discount</button>
        <button class="tab-btn" onclick="discSetMode('find',this)">Find % Off</button>
        <button class="tab-btn" onclick="discSetMode('stack',this)">Stacked Discounts</button>
      </div>
      <div id="discForm"></div>
      <button class="btn-calc" onclick="calcDiscount()">⚡ Calculate</button>
      <div class="result-box" id="discResult">
        <div class="result-label">Sale Price</div>
        <div class="result-main" id="discMain">—</div>
        <div class="result-grid" id="discBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Discount Calculator','Calculate the final sale price, total savings, and effective discount percentage for any retail price. Supports single discounts, reversed "find the percentage" mode, and stacked/layered discounts.',
      ['Choose your mode: Apply Discount, Find % Off, or Stacked Discounts.','Enter the required values.','Click Calculate to see the sale price and savings.'],
      [{q:'How do I calculate a percentage discount?',a:'Sale price = Original price × (1 − discount/100). For example, RM200 with 30% off: RM200 × 0.7 = RM140. Savings = RM60.'},
       {q:'How do stacked discounts work?',a:'Stacked discounts are applied sequentially, not added together. A 20% discount followed by an additional 10% discount is NOT 30% off. It is: 100% × 0.80 × 0.90 = 72%, meaning the effective discount is 28%, not 30%.'},
       {q:'How do I find what percentage discount was applied?',a:'Percentage off = (Original − Sale) / Original × 100. For example, original RM250, sale price RM175: (250-175)/250 × 100 = 30% off.'}],
      ['percentage-calculator','tip-calculator','sst-calculator','split-bill'])}`;
  window._discMode = 'apply';
  discSetMode('apply', document.querySelector('.tabs-row .tab-btn'));
}
function discSetMode(mode, btn) {
  window._discMode = mode;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const forms = {
    apply:`<div class="form-grid">${currencySelect('discCur','MYR','Currency')}<div class="field"><label>Original Price</label><input type="number" id="discOrig" value="100"></div><div class="field"><label>Discount (%)</label><input type="number" id="discPct" value="20" step="0.5"></div></div>`,
    find:`<div class="form-grid">${currencySelect('discCur','MYR','Currency')}<div class="field"><label>Original Price</label><input type="number" id="discOrig" value="200"></div><div class="field"><label>Sale Price</label><input type="number" id="discSale" value="150"></div></div>`,
    stack:`<div class="form-grid">${currencySelect('discCur','MYR','Currency')}<div class="field"><label>Original Price</label><input type="number" id="discOrig" value="500"></div><div class="field"><label>First Discount (%)</label><input type="number" id="disc1" value="20"></div><div class="field"><label>Second Discount (%)</label><input type="number" id="disc2" value="10"></div></div>`,
  };
  document.getElementById('discForm').innerHTML = forms[mode];
}
function calcDiscount() {
  const mode = window._discMode;
  const sym = getSymbol(document.getElementById('discCur')?.value || 'MYR');
  const orig = parseFloat(document.getElementById('discOrig')?.value)||0;
  let sale, saved, pctOff;
  if(mode==='apply') {
    pctOff = parseFloat(document.getElementById('discPct')?.value)||0;
    sale = orig * (1 - pctOff/100); saved = orig - sale;
  } else if(mode==='find') {
    sale = parseFloat(document.getElementById('discSale')?.value)||0;
    saved = orig - sale; pctOff = orig > 0 ? (saved/orig*100) : 0;
  } else {
    const d1 = parseFloat(document.getElementById('disc1')?.value)||0;
    const d2 = parseFloat(document.getElementById('disc2')?.value)||0;
    sale = orig * (1-d1/100) * (1-d2/100);
    saved = orig - sale; pctOff = saved/orig*100;
  }
  document.getElementById('discMain').textContent = sym + ' ' + fmt(sale);
  document.getElementById('discBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(orig)}</div><div class="result-item-label">Original Price</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(saved)}</div><div class="result-item-label">You Save</div></div>
    <div class="result-item"><div class="result-item-val">${pctOff.toFixed(2)}%</div><div class="result-item-label">Effective Discount</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(sale)}</div><div class="result-item-label">Final Price</div></div>`;
  document.getElementById('discResult').classList.add('show');
}

function renderPercentage() {
  setMeta('Percentage Calculator — 3 Modes','Calculate percentages: X% of Y, X is what % of Y, and percentage change between values.','#percentage-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Percentage Calculator</div>
      <h1 class="tool-h1">% Percentage Calculator</h1>
      <p class="tool-desc-short">Three modes: find X% of Y, find what % X is of Y, and calculate percentage change.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="pctSetMode(1,this)">X% of Y</button>
        <button class="tab-btn" onclick="pctSetMode(2,this)">X is ?% of Y</button>
        <button class="tab-btn" onclick="pctSetMode(3,this)">% Change</button>
      </div>
      <div id="pctForm"></div>
      <button class="btn-calc" onclick="calcPct()">⚡ Calculate</button>
      <div class="result-box" id="pctResult"><div class="result-label" id="pctLabel">Result</div><div class="result-main" id="pctMain">—</div></div>
    </div>
    ${seoBlock('Percentage Calculator','Calculate any percentage in three modes: find a percentage of a number, find what percentage one number is of another, or calculate the percentage change between two values.',
      ['Select the calculation mode using the tabs.','Enter the values in the fields.','Click Calculate to see the result.'],
      [{q:'What is 15% of 200?',a:'15% of 200 = 200 × 0.15 = 30. To find X% of Y: multiply Y by X/100.'},
       {q:'What percentage is 45 of 180?',a:'45 is 25% of 180. Formula: (45/180) × 100 = 25%.'},
       {q:'What is the percentage increase from 80 to 100?',a:'Percentage increase = (100-80)/80 × 100 = 25%. There is a 25% increase from 80 to 100.'}],
      ['discount-calculator','tip-calculator','sst-calculator','salary-calculator'])}`;
  window._pctMode = 1;
  pctSetMode(1, document.querySelector('.tabs-row .tab-btn'));
}
function pctSetMode(mode, btn) {
  window._pctMode = mode;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const forms = {
    1:'<div class="form-grid"><div class="field"><label>Percentage (%)</label><input type="number" id="pctX" value="15"></div><div class="field"><label>Of Number</label><input type="number" id="pctY" value="200"></div></div>',
    2:'<div class="form-grid"><div class="field"><label>Number (X)</label><input type="number" id="pctX" value="45"></div><div class="field"><label>Of Number (Y)</label><input type="number" id="pctY" value="180"></div></div>',
    3:'<div class="form-grid"><div class="field"><label>From Value</label><input type="number" id="pctX" value="80"></div><div class="field"><label>To Value</label><input type="number" id="pctY" value="100"></div></div>',
  };
  document.getElementById('pctForm').innerHTML = forms[mode];
}
function calcPct() {
  const mode = window._pctMode;
  const x = parseFloat(document.getElementById('pctX').value)||0;
  const y = parseFloat(document.getElementById('pctY').value)||0;
  let result, label;
  if(mode===1) { result=x/100*y; label=`${x}% of ${y} =`; }
  else if(mode===2) { result=y!==0?(x/y*100):0; label=`${x} is ${result.toFixed(4)}% of ${y}`; }
  else { result=x!==0?((y-x)/x*100):0; label=`${result>=0?'+':''}${result.toFixed(2)}% change from ${x} to ${y}`; }
  document.getElementById('pctLabel').textContent = label;
  document.getElementById('pctMain').textContent = mode===2 ? result.toFixed(4)+'%' : mode===3 ? result.toFixed(2)+'%' : result.toLocaleString('en',{maximumFractionDigits:4});
  document.getElementById('pctResult').classList.add('show');
}

function renderTip() {
  setMeta('Tip Calculator — Split Bill with Tip','Calculate tip amount and split the bill evenly among any number of people.','#tip-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Tip Calculator</div>
      <h1 class="tool-h1">🍽️ Tip Calculator</h1>
      <p class="tool-desc-short">Calculate tip and split the bill. Quick tip presets for Malaysia and international dining.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('tipCur','MYR','Currency')}
        <div class="field"><label>Bill Amount</label><input type="number" id="tipBill" value="120" oninput="calcTip()"></div>
        <div class="field form-full">
          <label>Tip Percentage</label>
          <div class="tabs-row" style="flex-wrap:wrap">
            ${[0,5,10,12,15,18,20].map(p=>`<button class="tab-btn ${p===10?'active':''}" onclick="setTipPct(${p},this)">${p===0?'No tip':p+'%'}</button>`).join('')}
          </div>
          <input type="number" id="tipPct" value="10" step="1" min="0" max="100" oninput="calcTip()" style="margin-top:8px">
        </div>
        <div class="field"><label>Split Between (people)</label><input type="number" id="tipPeople" value="2" min="1" oninput="calcTip()"></div>
      </div>
      <div class="result-box show" id="tipResult" style="display:block">
        <div class="result-label">Per Person</div>
        <div class="result-main" id="tipPerPerson">—</div>
        <div class="result-grid" id="tipBreakdown"></div>
        <div style="margin-top:12px;font-size:12px;color:var(--text-muted);padding:10px;background:var(--bg-input);border-radius:var(--radius-sm)" id="tipNote"></div>
      </div>
    </div>
    ${seoBlock('Tip Calculator','Calculate tip amounts for any restaurant bill and split it evenly. Includes country-specific tipping customs and suggested percentages for Malaysia, USA, UK, and other countries.',
      ['Enter your total bill amount.','Select a tip percentage preset or enter a custom amount.','Enter the number of people splitting the bill.','Results update automatically.'],
      [{q:'Should I tip in Malaysia?',a:'Tipping is not a strong cultural practice in Malaysia. Most restaurants already include a 10% service charge in the bill, so additional tipping is optional. If there is no service charge and you received good service, a small tip of 5–10% is appreciated but not expected. At kopitiams, mamak stalls, and hawker centres, tipping is generally not practised.'},
       {q:'How much should I tip in the USA?',a:'In the USA, tipping is a social obligation. Standard rates: restaurants 15–20% of pre-tax bill, bars RM1-2 per drink, hotel housekeeping USD$2–5/night, taxis 10–15%, food delivery 10–15%. Not tipping in the USA is considered rude as servers often earn below minimum wage and depend on tips for income.'},
       {q:'Is service charge the same as a tip?',a:'No. A service charge is a mandatory fee added to your bill by the restaurant (typically 10% in Malaysia and Singapore). It is collected by the business and may or may not be passed to staff. A tip is a voluntary additional amount you give directly to the server. When a bill shows a 10% service charge + 8% SST in Malaysia, tipping on top is discretionary.'}],
      ['split-bill','discount-calculator','percentage-calculator','fuel-cost'])}`;
  calcTip();
}
function setTipPct(pct, btn) {
  document.getElementById('tipPct').value = pct;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  calcTip();
}
function calcTip() {
  const sym = getSymbol(document.getElementById('tipCur')?.value||'MYR');
  const bill = parseFloat(document.getElementById('tipBill')?.value)||0;
  const tipPct = parseFloat(document.getElementById('tipPct')?.value)||0;
  const people = parseInt(document.getElementById('tipPeople')?.value)||1;
  const tipAmt = bill * tipPct/100;
  const total = bill + tipAmt;
  const perPerson = total/people;
  document.getElementById('tipPerPerson').textContent = sym+' '+fmt(perPerson);
  document.getElementById('tipBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(bill)}</div><div class="result-item-label">Bill</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(tipAmt)}</div><div class="result-item-label">Tip (${tipPct}%)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(total)}</div><div class="result-item-label">Total</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(perPerson)}</div><div class="result-item-label">Per Person (${people})</div></div>`;
  const cur = document.getElementById('tipCur')?.value||'MYR';
  const notes = {MYR:'🇲🇾 In Malaysia, tipping is optional. Many restaurants add 10% service charge automatically.',USD:'🇺🇸 In USA, 15–20% tip is expected at restaurants.',GBP:'🇬🇧 In UK, 10–12.5% is typical if service charge not included.',AUD:'🇦🇺 In Australia, tipping is appreciated but not mandatory (0–10%).'};
  document.getElementById('tipNote').textContent = notes[cur] || '💡 Tipping customs vary by country. Check local practices.';
}

function renderFuel() {
  setMeta('Fuel Cost Calculator Malaysia — Trip Cost Estimator','Calculate fuel cost for any trip. Supports Malaysian petrol prices (RON95, RON97, Diesel) and all countries.','#fuel-cost');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Fuel Cost</div>
      <h1 class="tool-h1">⛽ Fuel Cost Calculator</h1>
      <p class="tool-desc-short">Calculate fuel cost for any trip. Pre-loaded with Malaysian petrol prices. Supports km/L, L/100km, and MPG.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Distance</label><input type="number" id="fuelDist" value="300"></div>
        <div class="field"><label>Distance Unit</label><select id="fuelDistUnit"><option value="km" selected>Kilometres (km)</option><option value="mi">Miles (mi)</option></select></div>
        <div class="field">
          <label>Fuel Efficiency</label>
          <input type="number" id="fuelEff" value="12" step="0.1">
        </div>
        <div class="field">
          <label>Efficiency Unit</label>
          <select id="fuelEffUnit">
            <option value="l100" selected>Litres per 100km (L/100km)</option>
            <option value="kml">Kilometres per Litre (km/L)</option>
            <option value="mpg">Miles per Gallon (mpg)</option>
          </select>
        </div>
        <div class="field">
          <label>Fuel Price</label>
          <div class="field-prefix-wrap"><span class="field-prefix" id="fuelPricePrefix">RM</span><input type="number" id="fuelPrice" value="2.05" step="0.01"></div>
        </div>
        <div class="field">
          <label>Fuel Type / Preset</label>
          <select id="fuelPreset" onchange="setFuelPreset()">
            <option value="">Custom</option>
            <optgroup label="🇲🇾 Malaysia">
              <option value="MY_RON95_2.05">RON95 — RM2.05/L</option>
              <option value="MY_RON97_3.48">RON97 — RM3.48/L</option>
              <option value="MY_DIESEL_2.15">Diesel — RM2.15/L</option>
            </optgroup>
            <optgroup label="🇸🇬 Singapore">
              <option value="SG_95_2.65">Petrol 95 — S$2.65/L</option>
            </optgroup>
            <optgroup label="🇺🇸 USA">
              <option value="US_GAS_3.80">Regular Gas — $3.80/gal</option>
            </optgroup>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcFuel()">⚡ Calculate Cost</button>
      <div class="result-box" id="fuelResult">
        <div class="result-label">Total Fuel Cost</div>
        <div class="result-main" id="fuelCost">—</div>
        <div class="result-grid" id="fuelBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Fuel Cost Calculator','Calculate your fuel cost for any road trip in Malaysia or internationally. Enter your distance, fuel efficiency, and petrol price to get the total cost instantly. Pre-loaded with the latest Malaysian RON95 (RM2.05), RON97, and diesel prices.',
      ['Enter your trip distance in km or miles.','Enter your car\'s fuel efficiency (L/100km, km/L, or MPG).','Select a fuel price preset or enter a custom price.','Click Calculate to see total fuel cost and litres needed.'],
      [{q:'What is the current petrol price in Malaysia?',a:'As of 2024, the subsidised RON95 petrol price in Malaysia is RM2.05 per litre. RON97 is market-priced at approximately RM3.47–3.53 per litre. Diesel B10 is RM2.15 per litre. Prices are controlled by the government under the Automatic Pricing Mechanism (APM). RON95 subsidy is being targeted — check the latest MyPertamina or KPDNHEP announcements for current prices.'},
       {q:'What is the average fuel consumption for Malaysian cars?',a:'Average fuel consumption in Malaysia: Perodua Myvi (1.3L) ≈ 15–17 km/L (5.9–6.7 L/100km), Honda City/Toyota Vios (1.5L) ≈ 13–16 km/L, Honda HR-V/Toyota RAV4 (SUV) ≈ 10–13 km/L, Proton Perdana/Mercedes (2.0L+) ≈ 8–11 km/L, hybrid vehicles (Toyota Yaris Cross hybrid) ≈ 20–25 km/L.'},
       {q:'How do I convert L/100km to km/L?',a:'Simply divide 100 by the L/100km figure. For example, 12 L/100km = 100/12 = 8.33 km/L. To convert km/L to L/100km: divide 100 by km/L figure. For MPG conversion: 1 MPG = 0.354 km/L, or km/L × 2.825 = MPG (US gallon).'}],
      ['car-loan-calculator','road-tax-calculator','distance-converter','speed-converter'])}`;
}
function setFuelPreset() {
  const v = document.getElementById('fuelPreset').value;
  if(!v) return;
  const parts = v.split('_');
  const price = parseFloat(parts[parts.length-1]);
  document.getElementById('fuelPrice').value = price;
  const sym = v.startsWith('MY') ? 'RM' : v.startsWith('SG') ? 'S$' : '$';
  document.getElementById('fuelPricePrefix').textContent = sym;
}
function calcFuel() {
  const dist = parseFloat(document.getElementById('fuelDist').value)||0;
  const distUnit = document.getElementById('fuelDistUnit').value;
  const eff = parseFloat(document.getElementById('fuelEff').value)||12;
  const effUnit = document.getElementById('fuelEffUnit').value;
  const price = parseFloat(document.getElementById('fuelPrice').value)||2.05;
  const sym = document.getElementById('fuelPricePrefix').textContent||'RM';

  let distKm = distUnit==='mi' ? dist*1.60934 : dist;
  let litres;
  if(effUnit==='l100') litres=distKm/100*eff;
  else if(effUnit==='kml') litres=distKm/eff;
  else litres=distKm*0.264172/eff; // mpg
  const cost = litres * price;

  document.getElementById('fuelCost').textContent = sym+' '+fmt(cost);
  document.getElementById('fuelBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${dist} ${distUnit}</div><div class="result-item-label">Distance</div></div>
    <div class="result-item"><div class="result-item-val">${fmt(litres,1)}L</div><div class="result-item-label">Fuel Needed</div></div>
    <div class="result-item"><div class="result-item-val">${sym}${fmt(price)}/L</div><div class="result-item-label">Price per Litre</div></div>
    <div class="result-item"><div class="result-item-val">${sym}${fmt(cost/distKm*100,2)}</div><div class="result-item-label">Cost per 100km</div></div>`;
  document.getElementById('fuelResult').classList.add('show');
}

function renderPassword() {
  setMeta('Password Generator — Strong Secure Passwords','Generate strong, random passwords with custom length and character sets. Free password generator.','#password-generator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Password Generator</div>
      <h1 class="tool-h1">🔐 Password Generator</h1>
      <p class="tool-desc-short">Generate strong, cryptographically random passwords. Customise length and character sets.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field form-full">
          <label>Password Length: <span id="pwLenLabel">16</span></label>
          <input type="range" id="pwLen" min="8" max="64" value="16" oninput="document.getElementById('pwLenLabel').textContent=this.value;genPassword()" style="width:100%">
        </div>
        <div class="field"><label><input type="checkbox" id="pwUpper" checked onchange="genPassword()"> Uppercase (A–Z)</label></div>
        <div class="field"><label><input type="checkbox" id="pwLower" checked onchange="genPassword()"> Lowercase (a–z)</label></div>
        <div class="field"><label><input type="checkbox" id="pwNum" checked onchange="genPassword()"> Numbers (0–9)</label></div>
        <div class="field"><label><input type="checkbox" id="pwSym" checked onchange="genPassword()"> Symbols (!@#$...)</label></div>
        <div class="field"><label><input type="checkbox" id="pwAmb" onchange="genPassword()"> Exclude ambiguous (0,O,l,I,1)</label></div>
      </div>
      <button class="btn-calc" onclick="genPassword()">⚡ Generate Password</button>
      <div class="result-box show" id="pwResult" style="display:block;margin-top:14px">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <div id="pwOutput" style="font-family:var(--font-mono);font-size:18px;font-weight:500;word-break:break-all;flex:1">—</div>
          <button class="copy-btn" onclick="copyToClipboard(document.getElementById('pwOutput').textContent)">📋 Copy</button>
        </div>
        <div id="pwStrength" style="margin-top:12px"></div>
        <div style="margin-top:16px">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">Bulk Generate (10 passwords)</div>
          <button class="btn-secondary" onclick="genBulk()">Generate 10</button>
          <div id="pwBulk" style="margin-top:10px;font-family:var(--font-mono);font-size:13px"></div>
        </div>
      </div>
    </div>
    ${seoBlock('Password Generator','Generate cryptographically secure random passwords with customisable length and character sets. Use strong, unique passwords for every account to protect yourself from data breaches.',
      ['Set the desired password length using the slider (8–64 characters).','Check/uncheck the character sets to include.','Click Generate Password to create a new random password.','Use the Copy button to copy to clipboard.','For maximum security, use 16+ characters with all character sets enabled.'],
      [{q:'How long should a password be?',a:'Security experts recommend at least 12–16 characters for standard accounts and 20+ for critical accounts (banking, email, primary accounts). Longer passwords are exponentially harder to crack. A 16-character password with mixed characters has more possible combinations than there are atoms on Earth.'},
       {q:'What makes a password strong?',a:'A strong password has: length (12+ characters), complexity (uppercase, lowercase, numbers, symbols), randomness (not based on personal info), and uniqueness (different for every site). Never use the same password twice. Use a password manager (Bitwarden, 1Password, KeePass) to remember unique strong passwords for every account.'},
       {q:'Is it safe to use an online password generator?',a:'This generator runs entirely in your browser — no passwords are sent to any server. The passwords are generated using the Web Crypto API (crypto.getRandomValues()) which is a cryptographically secure random number generator. Always verify the site\'s URL before using any online tool for sensitive operations.'}],
      ['internet-speed','data-storage-converter','percentage-calculator','bmi-calculator'])}`;
  genPassword();
}
function genPassword() {
  const len = parseInt(document.getElementById('pwLen').value)||16;
  const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ', lower='abcdefghijklmnopqrstuvwxyz', nums='0123456789', syms='!@#$%^&*()-_=+[]{}|;:,.<>?';
  const ambig=new Set(['0','O','l','I','1']);
  let chars='';
  if(document.getElementById('pwUpper').checked) chars+=upper;
  if(document.getElementById('pwLower').checked) chars+=lower;
  if(document.getElementById('pwNum').checked) chars+=nums;
  if(document.getElementById('pwSym').checked) chars+=syms;
  if(document.getElementById('pwAmb').checked) chars=[...chars].filter(c=>!ambig.has(c)).join('');
  if(!chars) { document.getElementById('pwOutput').textContent='Select at least one character set'; return; }
  const arr=new Uint32Array(len);
  crypto.getRandomValues(arr);
  const pw=[...arr].map(n=>chars[n%chars.length]).join('');
  document.getElementById('pwOutput').textContent=pw;
  // Strength
  const entropy=Math.log2(Math.pow(chars.length,len));
  const strength=entropy<40?['Weak','#EF4444']:entropy<60?['Fair','#F59E0B']:entropy<80?['Strong','#3B82F6']:['Very Strong','#10B981'];
  document.getElementById('pwStrength').innerHTML=`
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px">Strength: <strong style="color:${strength[1]}">${strength[0]}</strong> (${entropy.toFixed(0)} bits of entropy)</div>
    <div class="progress-bar"><div class="progress-fill" style="width:${Math.min(100,entropy/128*100)}%;background:${strength[1]}"></div></div>`;
}
function genBulk() {
  const passwords=[];
  for(let i=0;i<10;i++){genPassword();passwords.push(document.getElementById('pwOutput').textContent);}
  document.getElementById('pwBulk').innerHTML=passwords.map((p,i)=>`
    <div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--border)">
      <span style="color:var(--text-hint);width:20px">${i+1}.</span>
      <span style="flex:1">${p}</span>
      <button class="copy-btn" onclick="copyToClipboard('${p.replace(/'/g,"\\'")}')">📋</button>
    </div>`).join('');
}

// ============================================================
// CLUSTER 5: HEALTH TOOLS
// ============================================================

function renderBMI() {
  setMeta('BMI Calculator Malaysia — Body Mass Index','Calculate your BMI with both WHO and Asia-Pacific thresholds. Get your health category instantly.','#bmi-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('health')">⚖️ Health</span> › BMI Calculator</div>
      <h1 class="tool-h1">⚖️ BMI Calculator</h1>
      <p class="tool-desc-short">Calculate your Body Mass Index (BMI) using WHO and Asia-Pacific thresholds. Supports metric and imperial.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="bmiSetUnit('metric',this)">Metric (cm/kg)</button>
        <button class="tab-btn" onclick="bmiSetUnit('imperial',this)">Imperial (ft/lb)</button>
      </div>
      <div class="form-grid" id="bmiForm"></div>
      <button class="btn-calc" onclick="calcBMI()">⚡ Calculate BMI</button>
      <div class="result-box" id="bmiResult">
        <div class="result-label">Your BMI</div>
        <div class="result-main" id="bmiVal">—</div>
        <div id="bmiCategory" style="font-size:16px;margin-top:4px"></div>
        <div id="bmiScale" style="margin-top:16px"></div>
        <div class="result-grid" id="bmiBreakdown" style="margin-top:14px"></div>
        <div id="bmiAsian" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('BMI Calculator',
      'BMI (Body Mass Index) is a simple measure of body weight relative to height. This calculator supports both WHO international thresholds and Asia-Pacific (including Malaysia) specific thresholds recommended by health authorities in Singapore and Malaysia. The Asia-Pacific thresholds are lower because research shows that Asian populations carry higher body fat percentages at the same BMI as Caucasians, and face increased health risks at lower BMI values. For Malaysians and Southeast Asians, the relevant cutoff for overweight is BMI ≥ 23 (vs ≥ 25 in WHO global standards).',
      ['Select metric (cm/kg) or imperial (ft/lb) units.','Enter your height and weight.','Click Calculate BMI to see your result.','Review both WHO and Asia-Pacific categories.','Note: BMI is a screening tool, not a diagnostic measure.'],
      [{q:'What is a healthy BMI for Malaysians?',a:'For Malaysians and most Asians, health authorities including the Ministry of Health Malaysia recommend using Asia-Pacific BMI thresholds: Underweight: BMI < 18.5, Normal: 18.5–22.9, Overweight: 23.0–27.4, Obese: ≥ 27.5. These are lower than WHO global thresholds (overweight ≥ 25, obese ≥ 30) because studies show Asians have higher body fat percentage and cardiovascular risk at lower BMI levels.'},
       {q:'Does BMI apply to children?',a:'Standard BMI calculations are for adults (18+). For children and adolescents (2–18 years), BMI-for-age percentiles are used instead, as healthy BMI ranges change with age and sex during childhood development. The same BMI number can mean different things for a 10-year-old vs a 40-year-old. For children, consult a paediatrician for BMI assessment.'},
       {q:'What are the limitations of BMI?',a:'BMI has several known limitations: it does not distinguish between muscle and fat (athletes may be "overweight" by BMI despite being very lean), it does not indicate fat distribution (central obesity/waist circumference is a better predictor of diabetes risk), and it is less accurate for the elderly. For a comprehensive health assessment, combine BMI with waist circumference, blood pressure, blood glucose, and cholesterol.'}],
      ['calorie-calculator','ideal-weight','body-fat','water-intake'])}`;
  window._bmiUnit = 'metric';
  bmiSetUnit('metric', document.querySelector('.tabs-row .tab-btn'));
}
function bmiSetUnit(unit, btn) {
  window._bmiUnit = unit;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.getElementById('bmiForm').innerHTML = unit==='metric' ? `
    <div class="field"><label>Height (cm)</label><input type="number" id="bmiH" value="170" step="0.1"></div>
    <div class="field"><label>Weight (kg)</label><input type="number" id="bmiW" value="70" step="0.1"></div>` : `
    <div class="field"><label>Height (feet)</label><input type="number" id="bmiHft" value="5" min="1" max="8"></div>
    <div class="field"><label>Height (inches)</label><input type="number" id="bmiHin" value="7" min="0" max="11"></div>
    <div class="field"><label>Weight (lbs)</label><input type="number" id="bmiWlb" value="154"></div>`;
}
function calcBMI() {
  let heightM, weightKg;
  if(window._bmiUnit==='metric') {
    heightM = (parseFloat(document.getElementById('bmiH').value)||170)/100;
    weightKg = parseFloat(document.getElementById('bmiW').value)||70;
  } else {
    const ft = parseFloat(document.getElementById('bmiHft').value)||5;
    const inch = parseFloat(document.getElementById('bmiHin').value)||7;
    heightM = ((ft*12)+inch)*0.0254;
    weightKg = (parseFloat(document.getElementById('bmiWlb').value)||154)*0.453592;
  }
  const bmi = weightKg/(heightM*heightM);
  const whoCategories = [{max:18.5,label:'Underweight',color:'#3B82F6'},{max:25,label:'Normal weight',color:'#10B981'},{max:30,label:'Overweight',color:'#F59E0B'},{max:999,label:'Obese',color:'#EF4444'}];
  const asiaCategories = [{max:18.5,label:'Underweight',color:'#3B82F6'},{max:23,label:'Normal weight',color:'#10B981'},{max:27.5,label:'Overweight',color:'#F59E0B'},{max:999,label:'Obese',color:'#EF4444'}];
  const whocat = whoCategories.find(c=>bmi<c.max);
  const asiacat = asiaCategories.find(c=>bmi<c.max);
  const normalMin = 18.5*heightM*heightM, normalMax = 25*heightM*heightM;

  document.getElementById('bmiVal').textContent = bmi.toFixed(1);
  document.getElementById('bmiCategory').innerHTML = `<span style="color:${whocat.color};font-weight:500">${whocat.label}</span> (WHO)`;
  const pct = Math.min(100, Math.max(0,(bmi-10)/(45-10)*100));
  document.getElementById('bmiScale').innerHTML = `
    <div style="position:relative;height:28px;border-radius:4px;overflow:hidden;background:linear-gradient(to right,#3B82F6 0%,#10B981 30%,#F59E0B 60%,#EF4444 100%)">
      <div style="position:absolute;left:${pct}%;top:0;bottom:0;width:3px;background:#fff;border-radius:2px;transform:translateX(-50%)"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-top:3px">
      <span>10</span><span>18.5</span><span>25</span><span>30</span><span>45</span>
    </div>`;
  document.getElementById('bmiBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${bmi.toFixed(1)}</div><div class="result-item-label">BMI</div></div>
    <div class="result-item"><div class="result-item-val">${weightKg.toFixed(1)} kg</div><div class="result-item-label">Your Weight</div></div>
    <div class="result-item"><div class="result-item-val">${normalMin.toFixed(1)}–${normalMax.toFixed(1)} kg</div><div class="result-item-label">Normal Weight Range (WHO)</div></div>`;
  document.getElementById('bmiAsian').innerHTML = `
    <div style="background:var(--primary-faint);border:1px solid var(--result-border);border-radius:var(--radius-sm);padding:12px 16px">
      <div style="font-size:12px;font-weight:600;color:var(--primary);margin-bottom:4px">🇲🇾 Asia-Pacific Threshold</div>
      <div style="font-size:14px;font-weight:500;color:${asiacat.color}">${asiacat.label}</div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:2px">Normal BMI for Asians: 18.5–22.9 | Overweight: 23–27.4 | Obese: ≥27.5</div>
    </div>`;
  document.getElementById('bmiResult').classList.add('show');
}

function renderCalorie() {
  setMeta('Calorie Calculator — TDEE Daily Calorie Needs','Calculate your daily calorie needs (TDEE) and macros based on your goals: lose, maintain, or gain weight.','#calorie-calculator');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('health')">⚖️ Health</span> › Calorie Calculator</div>
      <h1 class="tool-h1">🥗 Calorie Calculator (TDEE)</h1>
      <p class="tool-desc-short">Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) based on your goals.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Age</label><input type="number" id="calAge" value="28" min="15" max="80"></div>
        <div class="field"><label>Sex</label><select id="calSex"><option value="M">Male</option><option value="F">Female</option></select></div>
        <div class="field"><label>Height (cm)</label><input type="number" id="calH" value="170"></div>
        <div class="field"><label>Weight (kg)</label><input type="number" id="calW" value="70"></div>
        <div class="field form-full">
          <label>Activity Level</label>
          <select id="calActivity">
            <option value="1.2">Sedentary (desk job, no exercise)</option>
            <option value="1.375" selected>Light (exercise 1–3 days/week)</option>
            <option value="1.55">Moderate (exercise 3–5 days/week)</option>
            <option value="1.725">Active (exercise 6–7 days/week)</option>
            <option value="1.9">Very Active (physical job + exercise)</option>
          </select>
        </div>
        <div class="field form-full">
          <label>Goal</label>
          <select id="calGoal">
            <option value="-500">Lose weight (−500 cal/day)</option>
            <option value="-250">Lose slowly (−250 cal/day)</option>
            <option value="0" selected>Maintain weight</option>
            <option value="250">Gain slowly (+250 cal/day)</option>
            <option value="500">Gain weight (+500 cal/day)</option>
          </select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcCalorie()">⚡ Calculate Calories</button>
      <div class="result-box" id="calResult">
        <div class="result-label">Daily Calorie Target</div>
        <div class="result-main" id="calTarget">—</div>
        <div class="result-grid" id="calBreakdown"></div>
        <div id="calMacros" style="margin-top:16px"></div>
      </div>
    </div>
    ${seoBlock('Calorie Calculator','Calculate your daily calorie needs using the Mifflin-St Jeor formula — the most accurate BMR equation available. Enter your age, sex, height, weight, and activity level to find your TDEE (Total Daily Energy Expenditure) and recommended calories for your goal.',
      ['Enter your age, sex, height, and weight.','Select your activity level honestly — most people are sedentary or lightly active.','Choose your goal: lose weight, maintain, or gain weight.','Click Calculate to see your BMR, TDEE, and target calories.','Review the macronutrient breakdown for your target.'],
      [{q:'What is BMR and how is it calculated?',a:'BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic functions. This calculator uses the Mifflin-St Jeor formula: Men: BMR = 10×weight(kg) + 6.25×height(cm) − 5×age + 5. Women: BMR = 10×weight(kg) + 6.25×height(cm) − 5×age − 161. This formula is considered the most accurate for most people.'},
       {q:'How many calories should I eat to lose 1kg per week?',a:'1 kg of body fat contains approximately 7,700 calories. To lose 1kg per week, you need a deficit of 7,700 ÷ 7 = 1,100 calories per day — which is very aggressive and not recommended for most people. A more sustainable goal is 0.5kg per week (550 calorie deficit/day) through a combination of diet and exercise. Crash dieting below 1,200 calories (women) or 1,500 calories (men) is not recommended without medical supervision.'},
       {q:'How many calories do Malaysians typically eat?',a:'Based on the Malaysian Adult Nutrition Survey (MANS), Malaysian adults consume an average of 1,900–2,500 calories per day. Men average about 2,400 kcal and women about 1,900 kcal. Malaysians\' diets tend to be high in carbohydrates (rice, noodles, bread) which account for about 60% of total energy intake, with fat at ~30% and protein at ~15%.'}],
      ['bmi-calculator','water-intake','ideal-weight','body-fat'])}`;
}
function calcCalorie() {
  const age = parseInt(document.getElementById('calAge').value)||28;
  const sex = document.getElementById('calSex').value;
  const h = parseFloat(document.getElementById('calH').value)||170;
  const w = parseFloat(document.getElementById('calW').value)||70;
  const activity = parseFloat(document.getElementById('calActivity').value)||1.375;
  const goalAdj = parseInt(document.getElementById('calGoal').value)||0;
  const bmr = sex==='M' ? 10*w+6.25*h-5*age+5 : 10*w+6.25*h-5*age-161;
  const tdee = bmr * activity;
  const target = tdee + goalAdj;
  const protein = w * 2.2; // 2.2g per kg for moderate activity
  const fat = target * 0.25 / 9;
  const carbs = (target - protein*4 - fat*9) / 4;

  document.getElementById('calTarget').textContent = Math.round(target).toLocaleString() + ' kcal';
  document.getElementById('calBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${Math.round(bmr)}</div><div class="result-item-label">BMR (kcal/day)</div></div>
    <div class="result-item"><div class="result-item-val">${Math.round(tdee)}</div><div class="result-item-label">TDEE (kcal/day)</div></div>
    <div class="result-item"><div class="result-item-val">${Math.round(target)}</div><div class="result-item-label">Target Calories</div></div>
    <div class="result-item"><div class="result-item-val">${goalAdj===0?'Maintain':goalAdj>0?'Gain':'Lose'}</div><div class="result-item-label">Goal</div></div>`;
  document.getElementById('calMacros').innerHTML = `
    <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.05em">Suggested Macros</div>
    <div class="result-grid">
      <div class="result-item"><div class="result-item-val">${Math.round(protein)}g</div><div class="result-item-label">Protein (4 kcal/g)</div></div>
      <div class="result-item"><div class="result-item-val">${Math.round(fat)}g</div><div class="result-item-label">Fat (9 kcal/g)</div></div>
      <div class="result-item"><div class="result-item-val">${Math.round(carbs)}g</div><div class="result-item-label">Carbs (4 kcal/g)</div></div>
    </div>`;
  document.getElementById('calResult').classList.add('show');
}

function renderWater() {
  setMeta('Water Intake Calculator — Daily Hydration Guide','Calculate your recommended daily water intake based on weight, activity, and climate.','#water-intake');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('health')">⚖️ Health</span> › Water Intake</div>
      <h1 class="tool-h1">💧 Water Intake Calculator</h1>
      <p class="tool-desc-short">Calculate your recommended daily water intake based on your weight, activity level, and climate.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Body Weight (kg)</label><input type="number" id="waterW" value="70" step="0.5"></div>
        <div class="field"><label>Activity Level</label><select id="waterActivity"><option value="0">Sedentary (office work)</option><option value="350" selected>Light (30 min exercise)</option><option value="700">Moderate (1 hr exercise)</option><option value="1000">Active (2+ hr exercise)</option></select></div>
        <div class="field"><label>Climate</label><select id="waterClimate"><option value="0">Temperate / Air-conditioned</option><option value="350" selected>Tropical / Hot (Malaysia)</option><option value="700">Very Hot / Humid</option></select></div>
        <div class="field"><label>Special Conditions</label><select id="waterSpecial"><option value="0">None</option><option value="300">Pregnant</option><option value="500">Breastfeeding</option></select></div>
      </div>
      <button class="btn-calc" onclick="calcWater()">⚡ Calculate Water Intake</button>
      <div class="result-box" id="waterResult">
        <div class="result-label">Daily Water Intake</div>
        <div class="result-main" id="waterMain">—</div>
        <div class="result-grid" id="waterBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Water Intake Calculator','Calculate your personalised daily water intake recommendation based on your body weight, exercise level, and climate. In Malaysia\'s tropical heat and humidity, adequate hydration is especially important.',
      ['Enter your body weight in kg.','Select your daily activity level.','Choose your climate (select Tropical for Malaysia).','Click Calculate to see your daily water recommendation.'],
      [{q:'How much water should I drink per day in Malaysia?',a:'In Malaysia\'s tropical climate, the general recommendation is 35–45ml per kg of body weight per day. For a 70kg person: 70 × 35ml = 2,450ml to 70 × 45ml = 3,150ml (approximately 10–13 glasses/day). This is higher than the standard 8 glasses/day because Malaysia\'s heat and humidity significantly increase sweat loss.'},
       {q:'What counts as water intake?',a:'All beverages contribute to daily fluid intake including plain water, coffee, tea, juice, and soup. However, caffeinated drinks like coffee and teh tarik have a mild diuretic effect. About 20% of daily water comes from food (especially fruits and vegetables like watermelon, cucumber, and soup). Plain water is best — avoid sugary drinks as a primary hydration source.'},
       {q:'What are signs of dehydration in hot weather?',a:'Signs of dehydration: dark yellow or orange urine (healthy urine is pale yellow), thirst (already mildly dehydrated when you feel thirsty), fatigue, headache, reduced concentration, dizziness. In Malaysia\'s heat, dehydration can occur rapidly during outdoor activities. Athletes and outdoor workers should drink 500–750ml of water per hour of exercise in hot, humid conditions.'}],
      ['bmi-calculator','calorie-calculator','step-counter','ideal-weight'])}`;
}
function calcWater() {
  const w = parseFloat(document.getElementById('waterW').value)||70;
  const activity = parseInt(document.getElementById('waterActivity').value)||350;
  const climate = parseInt(document.getElementById('waterClimate').value)||350;
  const special = parseInt(document.getElementById('waterSpecial').value)||0;
  const base = w * 35;
  const total = base + activity + climate + special;
  const glasses = Math.ceil(total / 250);
  const bottles500 = (total/500).toFixed(1);

  document.getElementById('waterMain').textContent = (total/1000).toFixed(1) + ' litres';
  document.getElementById('waterBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${Math.round(base)} ml</div><div class="result-item-label">Base (35ml × kg)</div></div>
    <div class="result-item"><div class="result-item-val">+${activity} ml</div><div class="result-item-label">Activity Adjustment</div></div>
    <div class="result-item"><div class="result-item-val">+${climate} ml</div><div class="result-item-label">Climate Adjustment</div></div>
    <div class="result-item"><div class="result-item-val">${total} ml</div><div class="result-item-label">Total Daily Target</div></div>
    <div class="result-item"><div class="result-item-val">${glasses} glasses</div><div class="result-item-label">In 250ml Glasses</div></div>
    <div class="result-item"><div class="result-item-val">${bottles500} bottles</div><div class="result-item-label">In 500ml Bottles</div></div>`;
  document.getElementById('waterResult').classList.add('show');
}

// ============================================================
// CLUSTER 6: HOME & LIFE PLANNING
// ============================================================

function renderRentVsBuy() {
  setMeta('Rent vs Buy Calculator Malaysia — Should I Buy a House?','Compare the total cost of renting vs buying a home in Malaysia over any time period.','#rent-vs-buy');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('home-planning')">🏠 Home</span> › Rent vs Buy</div>
      <h1 class="tool-h1">🏡 Rent vs Buy Calculator</h1>
      <p class="tool-desc-short">Compare the true long-term cost of renting vs buying a home. Find your break-even point.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('rvbCur','MYR','Currency')}
        <div class="field"><label>Property Price</label><input type="number" id="rvbPrice" value="600000"></div>
        <div class="field"><label>Down Payment (%)</label><input type="number" id="rvbDown" value="10" min="5" max="50"></div>
        <div class="field"><label>Mortgage Rate (%)</label><input type="number" id="rvbMortRate" value="4.25" step="0.05"></div>
        <div class="field"><label>Loan Term (Years)</label><input type="number" id="rvbMortTerm" value="35"></div>
        <div class="field"><label>Monthly Rent (Alternative)</label><input type="number" id="rvbRent" value="2200"></div>
        <div class="field"><label>Annual Property Appreciation (%)</label><input type="number" id="rvbAppreciation" value="3" step="0.5"></div>
        <div class="field"><label>Investment Return (if renting) (%)</label><input type="number" id="rvbInvReturn" value="7" step="0.5"></div>
        <div class="field"><label>Years to Compare</label><input type="number" id="rvbYears" value="20" min="1" max="40"></div>
      </div>
      <button class="btn-calc" onclick="calcRentVsBuy()">⚡ Compare</button>
      <div class="result-box" id="rvbResult">
        <div class="result-label" id="rvbVerdict">Verdict</div>
        <div class="result-main" id="rvbMain">—</div>
        <div class="result-grid" id="rvbBreakdown"></div>
        <div id="rvbDetail" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('Rent vs Buy Calculator','The age-old question: should you rent or buy a home in Malaysia? This calculator compares the total cost of buying (mortgage payments, down payment, maintenance, property taxes) vs renting (monthly rent with investment of the down payment) over a chosen period. It finds the break-even point where buying becomes cheaper than renting.',
      ['Enter the property price and down payment percentage.','Enter the mortgage rate and term.','Enter the monthly rent for a comparable property.','Enter expected property appreciation and investment return rates.','Click Compare to see the verdict and year-by-year cost comparison.'],
      [{q:'Is it better to buy or rent in Malaysia in 2024?',a:'This depends on location, property type, and your financial situation. In general, buying makes more sense if you plan to stay 5–10+ years, have stable income, and the property price-to-rent ratio is below 20 (meaning the property price is less than 20× annual rent). In Kuala Lumpur, the price-to-rent ratio for condos is often 25–35×, meaning renting may be more economical short-term, but buying builds equity over 15–20 years.'},
       {q:'What is the break-even point for buying vs renting?',a:'The break-even point is the number of years after which buying becomes cheaper than renting (accounting for opportunity cost of down payment). Factors that reduce break-even time: higher rent, lower property prices, lower mortgage rates, higher property appreciation. In Malaysia, the break-even for most properties is typically 7–15 years, depending on location and market conditions.'},
       {q:'What extra costs should I budget for when buying property in Malaysia?',a:'Beyond the purchase price, budget for: stamp duty (1–4% on MOT), legal fees (0.5–1%), valuation fee (0.25%), real property gains tax (RPGT) if you sell within 5 years, annual maintenance fees (RM200–800/month for condos), property assessment tax (cukai pintu), home insurance, and mortgage insurance (MRTA/MLTA). Total transaction costs can add 5–8% to the property price.'}],
      ['mortgage-calculator','loan-calculator','cost-of-living','renovation-budget'])}`;
}
function calcRentVsBuy() {
  const sym = getSymbol(document.getElementById('rvbCur').value);
  const price = parseFloat(document.getElementById('rvbPrice').value)||600000;
  const downPct = parseFloat(document.getElementById('rvbDown').value)/100;
  const mortRate = parseFloat(document.getElementById('rvbMortRate').value)/100;
  const mortTerm = parseInt(document.getElementById('rvbMortTerm').value)||35;
  const rent = parseFloat(document.getElementById('rvbRent').value)||2200;
  const appreciation = parseFloat(document.getElementById('rvbAppreciation').value)/100;
  const invReturn = parseFloat(document.getElementById('rvbInvReturn').value)/100;
  const years = parseInt(document.getElementById('rvbYears').value)||20;

  const downAmt = price * downPct;
  const loanAmt = price - downAmt;
  const r = mortRate/12, n = mortTerm*12;
  const monthly = r===0 ? loanAmt/n : loanAmt*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  const maintenance = price * 0.01 / 12;

  // Buy costs
  let buyTotal = downAmt, rentTotal = 0;
  let propVal = price, invBalance = downAmt;
  for(let y=1;y<=years;y++) {
    const yearlyMort = monthly*12 + maintenance*12;
    buyTotal += yearlyMort;
    propVal *= (1+appreciation);
    const yearlyRent = rent*12;
    rentTotal += yearlyRent;
    invBalance = invBalance*(1+invReturn) + (monthly-rent)*12*(monthly>rent?1:0);
  }
  const buyNetCost = buyTotal - propVal + price;
  const rentNetCost = rentTotal - (invBalance - downAmt);
  const buying = buyNetCost < rentNetCost;

  document.getElementById('rvbVerdict').textContent = buying ? '🏠 Buying is better' : '🏢 Renting is better';
  document.getElementById('rvbMain').textContent = `after ${years} years`;
  document.getElementById('rvbBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(monthly)}</div><div class="result-item-label">Monthly Mortgage</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(rent)}</div><div class="result-item-label">Monthly Rent</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(propVal)}</div><div class="result-item-label">Property Value (${years}yr)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(buyTotal)}</div><div class="result-item-label">Total Buy Cost</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(rentTotal)}</div><div class="result-item-label">Total Rent Cost</div></div>`;
  document.getElementById('rvbDetail').innerHTML = `<div style="padding:12px 14px;background:var(--primary-faint);border-radius:var(--radius-sm);font-size:13px;color:var(--text-muted)">
    💡 <strong>Note:</strong> If renting, investing the ${sym}${fmt(downAmt)} down payment at ${(invReturn*100).toFixed(0)}% return for ${years} years = ${sym}${fmt(downAmt*Math.pow(1+invReturn,years))}. This opportunity cost is factored into the comparison.
  </div>`;
  document.getElementById('rvbResult').classList.add('show');
}

// ============================================================
// REGISTER ALL NEW TOOLS IN ROUTER
// ============================================================
// This extends the existing tools object in renderTool()
const PART2_TOOLS = {
  'age-calculator': renderAge,
  'date-difference': renderDateDiff,
  'working-days': renderWorkingDays,
  'long-weekend-planner': renderLongWeekend,
  'annual-leave-optimizer': renderAnnualLeave,
  'countdown-timer': renderCountdown,
  'currency-converter': renderCurrency,
  'length-converter': renderLength,
  'weight-converter': renderWeight,
  'temperature-converter': renderTemperature,
  'data-storage-converter': renderDataStorage,
  'speed-converter': renderSpeed,
  'cooking-converter': renderCooking,
  'discount-calculator': renderDiscount,
  'percentage-calculator': renderPercentage,
  'tip-calculator': renderTip,
  'fuel-cost': renderFuel,
  'password-generator': renderPassword,
  'bmi-calculator': renderBMI,
  'calorie-calculator': renderCalorie,
  'water-intake': renderWater,
  'rent-vs-buy': renderRentVsBuy,
};

// Patch renderTool to include Part 2 tools
const _origRenderTool = renderTool;
window.renderTool = function(id) {
  if (PART2_TOOLS[id]) { PART2_TOOLS[id](); return; }
  _origRenderTool(id);
};


// ============================================================
// PART 3 — Final 12 tools

// ============================================================
// PUBLIC HOLIDAY CALENDAR
// ============================================================

function generateFallbackHolidays(country, year) {
  // Generates dates for fixed-date holidays + approximate dates for known annual events
  // Used when year is beyond our hardcoded database
  const fixed = {
    MY: {
      '01-01':"New Year's Day",
      '05-01':'Labour Day',
      '08-31':'National Day (Merdeka)',
      '09-16':'Malaysia Day',
      '12-25':'Christmas Day'
    },
    SG: {
      '01-01':"New Year's Day",
      '05-01':'Labour Day',
      '08-09':'National Day',
      '12-25':'Christmas Day'
    },
    US: {
      '01-01':"New Year's Day",
      '07-04':'Independence Day',
      '12-25':'Christmas Day'
    },
    GB: {
      '01-01':"New Year's Day",
      '12-25':'Christmas Day',
      '12-26':'Boxing Day'
    },
    AU: {
      '01-01':"New Year's Day",
      '04-25':'ANZAC Day',
      '12-25':'Christmas Day',
      '12-26':'Boxing Day'
    }
  };
  const list = fixed[country];
  if (!list) return null;
  const result = {};
  for (const [md, name] of Object.entries(list)) {
    result[`${year}-${md}`] = name;
  }
  return result;
}

function renderPublicHolidays() {
  setMeta('Public Holiday Calendar 2025 Malaysia — Cuti Umum','Complete Malaysia public holiday calendar 2025 and 2026 with all states. Download as .ics file.','#public-holidays');

  const PH_NAMES = {
    MY: {
      2024: {
        '2024-01-01':'New Year\'s Day','2024-01-18':'Thaipusam','2024-02-10':'Chinese New Year (Day 1)','2024-02-11':'Chinese New Year (Day 2)','2024-03-28':'Nuzul Al-Quran','2024-04-10':'Hari Raya Aidilfitri','2024-04-11':'Hari Raya Aidilfitri (Day 2)','2024-05-01':'Labour Day','2024-05-22':'Wesak Day','2024-06-03':'Yang di-Pertuan Agong\'s Birthday','2024-06-17':'Hari Raya Aidiladha','2024-07-07':'Awal Muharram','2024-08-31':'National Day (Merdeka)','2024-09-16':'Malaysia Day / Maulidur Rasul','2024-10-31':'Deepavali','2024-12-25':'Christmas Day'
      },
      2025: {
        '2025-01-01':'New Year\'s Day','2025-01-29':'Chinese New Year (Day 1)','2025-01-30':'Chinese New Year (Day 2)','2025-02-11':'Thaipusam','2025-03-31':'Hari Raya Aidilfitri','2025-04-01':'Hari Raya Aidilfitri (Day 2)','2025-05-01':'Labour Day','2025-05-12':'Wesak Day','2025-06-02':'Yang di-Pertuan Agong\'s Birthday','2025-06-07':'Hari Raya Aidiladha','2025-06-27':'Awal Muharram','2025-08-31':'National Day (Merdeka)','2025-09-05':'Maulidur Rasul','2025-09-16':'Malaysia Day','2025-10-20':'Deepavali','2025-12-25':'Christmas Day'
      },
      2026: {
        '2026-01-01':'New Year\'s Day','2026-01-17':'Thaipusam','2026-02-17':'Chinese New Year (Day 1)','2026-02-19':'Substitute Holiday (CNY)','2026-02-20':'Chinese New Year (Day 2)','2026-03-20':'Hari Raya Aidilfitri','2026-03-21':'Hari Raya Aidilfitri (Day 2)','2026-05-01':'Labour Day','2026-05-31':'Wesak Day','2026-06-01':'Yang di-Pertuan Agong\'s Birthday','2026-05-27':'Hari Raya Aidiladha','2026-06-16':'Awal Muharram','2026-08-31':'National Day (Merdeka)','2026-09-16':'Malaysia Day','2026-09-25':'Maulidur Rasul','2026-11-07':'Deepavali','2026-12-25':'Christmas Day'
      }
    },
    SG: {
      2025: {
        '2025-01-01':'New Year\'s Day','2025-01-29':'Chinese New Year','2025-01-30':'Chinese New Year (Day 2)','2025-03-31':'Hari Raya Puasa','2025-04-18':'Good Friday','2025-05-01':'Labour Day','2025-05-12':'Vesak Day','2025-06-07':'Hari Raya Haji','2025-08-09':'National Day','2025-10-20':'Deepavali','2025-10-23':'Substitute (Deepavali)','2025-12-25':'Christmas Day'
      }
    },
    US: {
      2025: {
        '2025-01-01':'New Year\'s Day','2025-01-20':'Martin Luther King Jr. Day','2025-02-17':'Presidents\' Day','2025-05-26':'Memorial Day','2025-07-04':'Independence Day','2025-09-01':'Labor Day','2025-11-27':'Thanksgiving Day','2025-12-25':'Christmas Day'
      }
    },
    GB: {
      2025: {
        '2025-01-01':'New Year\'s Day','2025-04-18':'Good Friday','2025-04-21':'Easter Monday','2025-05-05':'Early May Bank Holiday','2025-05-26':'Spring Bank Holiday','2025-08-25':'Summer Bank Holiday','2025-12-25':'Christmas Day','2025-12-26':'Boxing Day'
      }
    },
    IN: {
      2024: {'2024-01-26':'Republic Day','2024-08-15':'Independence Day','2024-10-02':'Gandhi Jayanti','2024-10-31':'Diwali','2024-12-25':'Christmas Day'},
      2025: {'2025-01-26':'Republic Day','2025-03-14':'Holi','2025-08-15':'Independence Day','2025-10-02':'Gandhi Jayanti','2025-10-22':'Diwali','2025-12-25':'Christmas Day'},
      2026: {'2026-01-26':'Republic Day','2026-08-15':'Independence Day','2026-10-02':'Gandhi Jayanti','2026-11-08':'Diwali','2026-12-25':'Christmas Day'},
      2027: {'2027-01-26':'Republic Day','2027-08-15':'Independence Day','2027-10-02':'Gandhi Jayanti','2027-10-29':'Diwali','2027-12-25':'Christmas Day'}
    },
    CA: {
      2024: {'2024-01-01':"New Year's Day",'2024-07-01':'Canada Day','2024-09-02':'Labour Day','2024-10-14':'Thanksgiving','2024-12-25':'Christmas Day','2024-12-26':'Boxing Day'},
      2025: {'2025-01-01':"New Year's Day",'2025-07-01':'Canada Day','2025-09-01':'Labour Day','2025-10-13':'Thanksgiving','2025-12-25':'Christmas Day','2025-12-26':'Boxing Day'},
      2026: {'2026-01-01':"New Year's Day",'2026-07-01':'Canada Day','2026-09-07':'Labour Day','2026-10-12':'Thanksgiving','2026-12-25':'Christmas Day','2026-12-28':'Boxing Day'},
      2027: {'2027-01-01':"New Year's Day",'2027-07-01':'Canada Day','2027-09-06':'Labour Day','2027-10-11':'Thanksgiving','2027-12-27':'Christmas','2027-12-28':'Boxing Day'}
    },
    NZ: {
      2024: {'2024-01-01':"New Year's Day",'2024-02-06':'Waitangi Day','2024-04-25':'ANZAC Day','2024-12-25':'Christmas Day','2024-12-26':'Boxing Day'},
      2025: {'2025-01-01':"New Year's Day",'2025-02-06':'Waitangi Day','2025-04-25':'ANZAC Day','2025-12-25':'Christmas Day','2025-12-26':'Boxing Day'},
      2026: {'2026-01-01':"New Year's Day",'2026-02-06':'Waitangi Day','2026-04-25':'ANZAC Day','2026-12-25':'Christmas Day','2026-12-28':'Boxing Day'},
      2027: {'2027-01-01':"New Year's Day",'2027-02-08':'Waitangi Day','2027-04-26':'ANZAC Day','2027-12-27':'Christmas','2027-12-28':'Boxing Day'}
    },
    PH: {
      2024: {'2024-01-01':"New Year's Day",'2024-04-09':'Day of Valor','2024-05-01':'Labor Day','2024-06-12':'Independence Day','2024-12-25':'Christmas Day','2024-12-30':'Rizal Day'},
      2025: {'2025-01-01':"New Year's Day",'2025-04-09':'Day of Valor','2025-05-01':'Labor Day','2025-06-12':'Independence Day','2025-12-25':'Christmas Day','2025-12-30':'Rizal Day'},
      2026: {'2026-01-01':"New Year's Day",'2026-04-09':'Day of Valor','2026-05-01':'Labor Day','2026-06-12':'Independence Day','2026-12-25':'Christmas Day','2026-12-30':'Rizal Day'},
      2027: {'2027-01-01':"New Year's Day",'2027-04-09':'Day of Valor','2027-05-01':'Labor Day','2027-06-12':'Independence Day','2027-12-25':'Christmas Day','2027-12-30':'Rizal Day'}
    },
    AE: {
      2024: {'2024-01-01':"New Year's Day",'2024-04-10':'Eid al-Fitr','2024-06-16':'Eid al-Adha','2024-12-02':'National Day'},
      2025: {'2025-01-01':"New Year's Day",'2025-03-31':'Eid al-Fitr','2025-06-06':'Eid al-Adha','2025-12-02':'National Day'},
      2026: {'2026-01-01':"New Year's Day",'2026-03-20':'Eid al-Fitr','2026-05-27':'Eid al-Adha','2026-12-02':'National Day'},
      2027: {'2027-01-01':"New Year's Day",'2027-03-10':'Eid al-Fitr','2027-05-16':'Eid al-Adha','2027-12-02':'National Day'}
    },
    AU: {
      2025: {
        '2025-01-01':'New Year\'s Day','2025-01-27':'Australia Day (Observed)','2025-04-18':'Good Friday','2025-04-19':'Easter Saturday','2025-04-21':'Easter Monday','2025-04-25':'ANZAC Day','2025-06-09':'King\'s Birthday','2025-12-25':'Christmas Day','2025-12-26':'Boxing Day'
      }
    }
  };

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dayAbbr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › Public Holidays</div>
      <h1 class="tool-h1">🗓️ Public Holiday Calendar</h1>
      <p class="tool-desc-short">Full public holiday calendar for Malaysia, Singapore, USA, UK, and Australia. View by month or list, and export to your calendar app.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field">
          <label>Country</label>
          <select id="phCountry" onchange="renderPHCalendar()">
            <option value="MY">🇲🇾 Malaysia</option>
            <option value="SG">🇸🇬 Singapore</option>
            <option value="US">🇺🇸 United States</option>
            <option value="GB">🇬🇧 United Kingdom</option>
            <option value="AU">🇦🇺 Australia</option>
            <option value="IN">🇮🇳 India</option>
            <option value="CA">🇨🇦 Canada</option>
            <option value="NZ">🇳🇿 New Zealand</option>
            <option value="PH">🇵🇭 Philippines</option>
            <option value="AE">🇦🇪 UAE</option>
          </select>
        </div>
        <div class="field">
          <label>Year</label>
          <select id="phYear" onchange="renderPHCalendar()">
            ${dynamicYears(CURRENT_YEAR-1, CURRENT_YEAR+2).map(y => `<option value="${y}" ${y===CURRENT_YEAR?'selected':''}>${y}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>View</label>
          <select id="phView" onchange="renderPHCalendar()">
            <option value="list" selected>List View</option>
            <option value="calendar">Calendar Grid</option>
          </select>
        </div>
        <div class="field" style="display:flex;align-items:flex-end">
          <button class="btn-secondary" style="width:100%;height:44px" onclick="exportICS()">📅 Export .ics</button>
        </div>
      </div>
      <div id="phOutput" style="margin-top:16px"></div>
    </div>
    ${seoBlock('Public Holiday Calendar',
      'The PeakToolsHub Public Holiday Calendar provides the complete list of gazetted public holidays for Malaysia (2024, 2025, 2026), Singapore, USA, UK, and Australia. Malaysian national public holidays include Hari Raya Aidilfitri, Hari Raya Aidiladha, Chinese New Year, Thaipusam, Deepavali, Wesak Day, National Day, Malaysia Day, and more. You can view holidays in a monthly calendar grid or a simple list, and export them as a .ics file to import into Google Calendar, Outlook, or Apple Calendar.',
      ['Select your country from the dropdown.','Choose the year (2024, 2025, or 2026 available).','Toggle between List View and Calendar Grid.','Click Export .ics to download the holidays for your calendar app.','Import the .ics file into Google Calendar, Outlook, or Apple Calendar.'],
      [{q:'How many public holidays does Malaysia have in 2025?',a:'Malaysia has 16 national public holidays in 2025: New Year\'s Day (Jan 1), Chinese New Year (Jan 29–30), Thaipusam (Feb 11), Hari Raya Aidilfitri (Mar 31–Apr 1), Labour Day (May 1), Wesak Day (May 12), Yang di-Pertuan Agong\'s Birthday (Jun 2), Hari Raya Aidiladha (Jun 7), Awal Muharram (Jun 27), National Day/Merdeka (Aug 31), Maulidur Rasul (Sep 5), Malaysia Day (Sep 16), Deepavali (Oct 20), and Christmas (Dec 25). State-specific holidays add 1–3 more days.'},
       {q:'How do I import Malaysian holidays into Google Calendar?',a:'Export the .ics file from this page, then in Google Calendar: click the "+" next to "Other calendars" → "Import" → select the downloaded .ics file → choose which calendar to add to → click Import. All public holidays will appear as all-day events. You can also subscribe to Malaysian holiday calendars via Google Calendar\'s "Browse calendars of interest" feature.'},
       {q:'Are Malaysia public holidays the same in every state?',a:'No. National holidays apply everywhere, but each of Malaysia\'s 13 states also has 1–3 state-specific holidays such as the Sultan\'s Birthday, State Day, and some regional religious observances. For example, Thaipusam is a national holiday in Selangor, KL, Penang, and Johor but not all states. Federal Territory Day (Feb 14) applies only to Kuala Lumpur, Putrajaya, and Labuan.'}],
      ['school-holidays','long-weekend-planner','annual-leave-optimizer','working-days'])
    }`;

  window._PH_NAMES = PH_NAMES;
  window._monthNames = monthNames;
  window._dayAbbr = dayAbbr;
  renderPHCalendar();
}

function renderPHCalendar() {
  const country = document.getElementById('phCountry').value;
  const year = parseInt(document.getElementById('phYear').value);
  const view = document.getElementById('phView').value;
  const phData = (window._PH_NAMES[country] || {})[year] || {};
  const entries = Object.entries(phData).sort((a,b)=>a[0].localeCompare(b[0]));
  const monthNames = window._monthNames || ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dayAbbr = window._dayAbbr || ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  if (!entries.length) {
    // Year not in our DB — generate predicted dates using known patterns
    const fallback = generateFallbackHolidays(country, year);
    if (fallback && Object.keys(fallback).length) {
      Object.assign(phData, fallback);
      const newEntries = Object.entries(fallback).sort((a,b)=>a[0].localeCompare(b[0]));
      entries.push(...newEntries);
      document.getElementById('phOutput').innerHTML = `<div style="background:#FEF9C3;border:1px solid #FDE68A;border-radius:var(--radius-sm);padding:10px 14px;font-size:12px;color:#92400E;margin-bottom:14px">⚠️ Showing estimated dates for ${year}. Official dates may differ slightly. Verify with government sources.</div>`;
    } else {
      document.getElementById('phOutput').innerHTML = '<p style="color:var(--text-muted);font-size:13px">Holiday data not available for this country/year combination.</p>';
      return;
    }
  }

  if (view === 'list') {
    const byMonth = {};
    entries.forEach(([date, name]) => {
      const d = new Date(date);
      const mo = d.getMonth();
      if (!byMonth[mo]) byMonth[mo] = [];
      byMonth[mo].push({ date, name, dow: dayAbbr[d.getDay()] });
    });
    let html = `<div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">${entries.length} public holidays in ${year}</div>`;
    Object.entries(byMonth).forEach(([mo, days]) => {
      html += `<div style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin:14px 0 6px">${monthNames[mo]}</div>`;
      days.forEach(h => {
        const d = new Date(h.date);
        const isWeekend = [0,6].includes(d.getDay());
        html += `<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:var(--radius-sm);margin-bottom:4px;background:var(--bg-card);border:1px solid var(--border)">
          <div style="width:44px;text-align:center;flex-shrink:0">
            <div style="font-size:18px;font-weight:700;font-family:var(--font-mono);color:var(--primary)">${String(d.getDate()).padStart(2,'0')}</div>
            <div style="font-size:10px;color:${isWeekend?'var(--accent-hover)':'var(--text-hint)'};font-weight:500">${h.dow}</div>
          </div>
          <div style="flex:1"><div style="font-size:13px;font-weight:500">${h.name}</div></div>
          ${isWeekend ? '<span class="badge badge-accent" style="font-size:10px">Weekend</span>' : ''}
        </div>`;
      });
    });
    document.getElementById('phOutput').innerHTML = html;
  } else {
    // Calendar grid
    const phSet = new Set(Object.keys(phData));
    let html = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">';
    for (let mo = 0; mo < 12; mo++) {
      const firstDay = new Date(year, mo, 1).getDay();
      const daysInMonth = new Date(year, mo+1, 0).getDate();
      let grid = `<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:14px">
        <div style="font-size:13px;font-weight:600;margin-bottom:10px;color:var(--primary)">${monthNames[mo]} ${year}</div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;font-size:11px;text-align:center">
          ${dayAbbr.map(d=>`<div style="color:var(--text-hint);padding:2px;font-weight:500">${d[0]}</div>`).join('')}
          ${Array(firstDay).fill('<div></div>').join('')}
          ${Array.from({length:daysInMonth},(_,i)=>{
            const d = i+1;
            const ds = `${year}-${String(mo+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            const isPH = phSet.has(ds);
            const dow = new Date(year,mo,d).getDay();
            const isWE = dow===0||dow===6;
            return `<div style="padding:3px 1px;border-radius:3px;font-weight:${isPH?600:400};background:${isPH?'var(--primary)':isWE?'var(--primary-faint)':'transparent'};color:${isPH?'#fff':isWE?'var(--primary)':'var(--text)'};title="${isPH?(phData[ds]||''):''}";cursor:${isPH?'pointer':'default'}" ${isPH?`title="${phData[ds]}"`:''}>${d}</div>`;
          }).join('')}
        </div>
      </div>`;
      html += grid;
    }
    html += '</div>';
    document.getElementById('phOutput').innerHTML = html;
  }
}

function exportICS() {
  const country = document.getElementById('phCountry').value;
  const year = parseInt(document.getElementById('phYear').value);
  const phData = (window._PH_NAMES[country] || {})[year] || {};
  const entries = Object.entries(phData);
  if (!entries.length) { showToast('No data to export'); return; }
  let ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//PeakToolsHub//Public Holidays//EN\r\nCALSCALE:GREGORIAN\r\nX-WR-CALNAME:Public Holidays ' + country + ' ' + year + '\r\n';
  entries.forEach(([date, name]) => {
    const d = date.replace(/-/g,'');
    const next = new Date(new Date(date).getTime()+86400000);
    const nd = next.toISOString().split('T')[0].replace(/-/g,'');
    const uid = `${d}-${name.replace(/\s+/g,'-').toLowerCase()}@peaktoolshub.com`;
    ics += `BEGIN:VEVENT\r\nDTSTART;VALUE=DATE:${d}\r\nDTEND;VALUE=DATE:${nd}\r\nSUMMARY:${name}\r\nUID:${uid}\r\nEND:VEVENT\r\n`;
  });
  ics += 'END:VCALENDAR';
  const blob = new Blob([ics], {type:'text/calendar'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = `public-holidays-${country}-${year}.ics`; a.click();
  showToast('✓ Calendar exported!');
}

// ============================================================
// SCHOOL HOLIDAY CALENDAR
// ============================================================
function renderSchoolHolidays() {
  setMeta('School Holiday Calendar — Term Dates','School holiday dates and term schedules for Malaysia, Singapore, UK, USA, and Australia. Updates yearly.','#school-holidays');

  // Approximate term patterns that work for any year (week-based, not exact dates)
  function generateMYSchool(year) {
    // Malaysia school year typically starts early January, 4 terms, mid-year break in May/Jun, year-end break Nov-Dec
    return [
      {type:'term', label:'Term 1', start:`${year}-01-06`, end:`${year}-03-14`},
      {type:'holiday', label:'Mid-Term Break 1', start:`${year}-03-15`, end:`${year}-03-23`},
      {type:'term', label:'Term 2', start:`${year}-03-24`, end:`${year}-05-30`},
      {type:'holiday', label:'Mid-Year Holidays', start:`${year}-05-31`, end:`${year}-06-15`},
      {type:'term', label:'Term 3', start:`${year}-06-16`, end:`${year}-08-22`},
      {type:'holiday', label:'Mid-Term Break 3', start:`${year}-08-23`, end:`${year}-08-31`},
      {type:'term', label:'Term 4', start:`${year}-09-01`, end:`${year}-11-21`},
      {type:'holiday', label:'Year-End Holidays', start:`${year}-11-22`, end:`${year+1}-01-04`},
      {type:'exam', label:'PT3 Examinations (Form 3)', start:`${year}-10-06`, end:`${year}-10-17`},
      {type:'exam', label:'SPM Examinations (Form 5)', start:`${year}-10-20`, end:`${year}-11-20`}
    ];
  }
  function generateSGSchool(year) {
    return [
      {type:'term', label:'Term 1', start:`${year}-01-02`, end:`${year}-03-14`},
      {type:'holiday', label:'March Holidays', start:`${year}-03-15`, end:`${year}-03-23`},
      {type:'term', label:'Term 2', start:`${year}-03-24`, end:`${year}-05-30`},
      {type:'holiday', label:'June Holidays', start:`${year}-05-31`, end:`${year}-06-29`},
      {type:'term', label:'Term 3', start:`${year}-06-30`, end:`${year}-09-05`},
      {type:'holiday', label:'September Holidays', start:`${year}-09-06`, end:`${year}-09-14`},
      {type:'term', label:'Term 4', start:`${year}-09-15`, end:`${year}-10-31`},
      {type:'holiday', label:'Year-End Holidays', start:`${year}-11-01`, end:`${year}-12-31`}
    ];
  }
  function generateUKSchool(year) {
    return [
      {type:'term', label:'Spring Term', start:`${year}-01-06`, end:`${year}-04-04`},
      {type:'holiday', label:'Easter Holiday', start:`${year}-04-05`, end:`${year}-04-21`},
      {type:'term', label:'Summer Term', start:`${year}-04-22`, end:`${year}-07-22`},
      {type:'holiday', label:'Summer Holiday', start:`${year}-07-23`, end:`${year}-09-02`},
      {type:'term', label:'Autumn Term', start:`${year}-09-03`, end:`${year}-12-19`},
      {type:'holiday', label:'Christmas Holiday', start:`${year}-12-20`, end:`${year+1}-01-05`}
    ];
  }
  function generateUSSchool(year) {
    return [
      {type:'term', label:'Spring Semester', start:`${year}-01-15`, end:`${year}-05-25`},
      {type:'holiday', label:'Summer Break', start:`${year}-06-01`, end:`${year}-08-25`},
      {type:'term', label:'Fall Semester', start:`${year}-08-26`, end:`${year}-12-15`},
      {type:'holiday', label:'Winter Break', start:`${year}-12-16`, end:`${year+1}-01-10`},
      {type:'holiday', label:'Spring Break', start:`${year}-03-15`, end:`${year}-03-22`}
    ];
  }
  function generateAUSchool(year) {
    return [
      {type:'term', label:'Term 1', start:`${year}-01-29`, end:`${year}-04-12`},
      {type:'holiday', label:'Autumn Break', start:`${year}-04-13`, end:`${year}-04-28`},
      {type:'term', label:'Term 2', start:`${year}-04-29`, end:`${year}-07-05`},
      {type:'holiday', label:'Winter Break', start:`${year}-07-06`, end:`${year}-07-21`},
      {type:'term', label:'Term 3', start:`${year}-07-22`, end:`${year}-09-27`},
      {type:'holiday', label:'Spring Break', start:`${year}-09-28`, end:`${year}-10-13`},
      {type:'term', label:'Term 4', start:`${year}-10-14`, end:`${year}-12-20`},
      {type:'holiday', label:'Summer Break', start:`${year}-12-21`, end:`${year+1}-01-28`}
    ];
  }

  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('datetime')">📅 Date & Time</span> › School Holidays</div>
      <h1 class="tool-h1">🎒 School Holiday Calendar</h1>
      <p class="tool-desc-short">School term dates and holiday schedules for Malaysia, Singapore, UK, USA, and Australia. Auto-updates each year.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Country</label>
          <select id="shCountry" onchange="renderSHList()">
            <option value="MY">🇲🇾 Malaysia (SK/SMK)</option>
            <option value="SG">🇸🇬 Singapore</option>
            <option value="UK">🇬🇧 United Kingdom</option>
            <option value="US">🇺🇸 United States</option>
            <option value="AU">🇦🇺 Australia</option>
          </select>
        </div>
        <div class="field"><label>Year</label>
          <select id="shYear" onchange="renderSHList()">${dynamicYears(CURRENT_YEAR-1, CURRENT_YEAR+2).map(y => `<option value="${y}" ${y===CURRENT_YEAR?'selected':''}>${y}</option>`).join('')}</select>
        </div>
      </div>
      <div id="shOutput" style="margin-top:16px"></div>
    </div>
    ${seoBlock('School Holiday Calendar',
      'School term dates and holiday schedules for major countries. View school terms, mid-term breaks, year-end holidays, and major examination periods. Plan your family travel around school breaks to avoid peak prices and overcrowding. Data is generated using each country\'s typical academic calendar pattern.',
      ['Select your country (Malaysia, Singapore, UK, USA, or Australia).','Select the year — past, current, or upcoming years available.','Green blocks = school holidays, Blue = term time, Yellow = exam periods.','Use the dates to plan family travel during school breaks.'],
      [{q:'When are the school holidays?',a:'School holidays vary by country. Malaysia has 4 terms with mid-term breaks roughly in March, June, August, and a long year-end break November to early January. Singapore follows a similar 4-term structure. UK has 3 terms (Autumn, Spring, Summer) with longer summer break. US has 2 main semesters with summer break June-August. Australia has 4 terms.'},
       {q:'How accurate are these dates?',a:'These dates use typical academic calendar patterns and are accurate within a few days. Exact dates change yearly and are set by each country\'s education ministry. For exam dates and official confirmation, always check your country\'s ministry of education website. Malaysia: moe.gov.my. Singapore: moe.gov.sg.'},
       {q:'Can I plan family travel using these dates?',a:'Yes — these dates are reliable for general planning, especially booking flights and accommodation 6+ months in advance. For specific dates within 1-2 months of travel, verify with your school directly as some schools adjust dates for local circumstances.'}],
      ['public-holidays','annual-leave-optimizer','long-weekend-planner','countdown-timer'])
    }`;

  window._schoolGen = {MY:generateMYSchool, SG:generateSGSchool, UK:generateUKSchool, US:generateUSSchool, AU:generateAUSchool};
  renderSHList();
}

function renderSHList() {
  const country = document.getElementById('shCountry').value;
  const year = parseInt(document.getElementById('shYear').value) || CURRENT_YEAR;
  const generator = (window._schoolGen || {})[country];
  const data = generator ? generator(year) : [];
  const typeConfig = {
    term: {label:'School Term', bg:'var(--primary-faint)', border:'var(--result-border)', textColor:'var(--primary)'},
    holiday: {label:'School Holiday', bg:'rgba(0,200,150,0.08)', border:'rgba(0,200,150,0.25)', textColor:'var(--accent-hover)'},
    exam: {label:'Examination', bg:'#FEF9C3', border:'#FDE68A', textColor:'#92400E'},
  };
  const fmt2 = (ds) => { const d=new Date(ds); return d.toLocaleDateString('en-MY',{day:'numeric',month:'short',year:'numeric'}); };
  const dur = (s,e) => { const days=Math.round((new Date(e)-new Date(s))/86400000)+1; return `${days} day${days!==1?'s':''}`; };

  document.getElementById('shOutput').innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;font-size:12px">
      ${Object.entries(typeConfig).map(([k,v])=>`<div style="display:flex;align-items:center;gap:5px"><div style="width:12px;height:12px;border-radius:2px;background:${v.bg};border:1px solid ${v.border}"></div><span style="color:var(--text-muted)">${v.label}</span></div>`).join('')}
    </div>
    ${data.map(e => {
      const cfg = typeConfig[e.type] || typeConfig.holiday;
      return `<div style="background:${cfg.bg};border:1px solid ${cfg.border};border-radius:var(--radius);padding:14px 16px;margin-bottom:8px;display:flex;align-items:center;gap:12px">
        <div style="flex:1">
          <div style="font-size:14px;font-weight:600;color:${cfg.textColor}">${e.label}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:3px">${fmt2(e.start)} — ${fmt2(e.end)}</div>
        </div>
        <span style="font-size:12px;font-weight:600;color:${cfg.textColor};white-space:nowrap">${dur(e.start,e.end)}</span>
      </div>`;
    }).join('')}`;
}

// ============================================================
// TIME ZONE CONVERTER
// ============================================================
function renderTimezone() {
  setMeta('Time Zone Converter — World Clock Converter','Convert time between any two time zones. Live world clock for KL, Singapore, London, New York, Dubai, Tokyo.','#timezone-converter');

  const TZ_LIST = [
    {label:'Kuala Lumpur (UTC+8)',tz:'Asia/Kuala_Lumpur'},
    {label:'Singapore (UTC+8)',tz:'Asia/Singapore'},
    {label:'Jakarta (UTC+7)',tz:'Asia/Jakarta'},
    {label:'Bangkok (UTC+7)',tz:'Asia/Bangkok'},
    {label:'Manila (UTC+8)',tz:'Asia/Manila'},
    {label:'Ho Chi Minh (UTC+7)',tz:'Asia/Ho_Chi_Minh'},
    {label:'Tokyo (UTC+9)',tz:'Asia/Tokyo'},
    {label:'Seoul (UTC+9)',tz:'Asia/Seoul'},
    {label:'Shanghai (UTC+8)',tz:'Asia/Shanghai'},
    {label:'Mumbai (UTC+5:30)',tz:'Asia/Kolkata'},
    {label:'Dubai (UTC+4)',tz:'Asia/Dubai'},
    {label:'Riyadh (UTC+3)',tz:'Asia/Riyadh'},
    {label:'Istanbul (UTC+3)',tz:'Europe/Istanbul'},
    {label:'Moscow (UTC+3)',tz:'Europe/Moscow'},
    {label:'London (UTC+0/+1)',tz:'Europe/London'},
    {label:'Paris (UTC+1/+2)',tz:'Europe/Paris'},
    {label:'Berlin (UTC+1/+2)',tz:'Europe/Berlin'},
    {label:'New York (UTC-5/-4)',tz:'America/New_York'},
    {label:'Los Angeles (UTC-8/-7)',tz:'America/Los_Angeles'},
    {label:'Chicago (UTC-6/-5)',tz:'America/Chicago'},
    {label:'Toronto (UTC-5/-4)',tz:'America/Toronto'},
    {label:'São Paulo (UTC-3)',tz:'America/Sao_Paulo'},
    {label:'Sydney (UTC+10/+11)',tz:'Australia/Sydney'},
    {label:'Melbourne (UTC+10/+11)',tz:'Australia/Melbourne'},
    {label:'Auckland (UTC+12/+13)',tz:'Pacific/Auckland'},
    {label:'Honolulu (UTC-10)',tz:'Pacific/Honolulu'},
  ];

  const opts = TZ_LIST.map(t=>`<option value="${t.tz}">${t.label}</option>`).join('');
  const worldClocks = ['Asia/Kuala_Lumpur','Asia/Singapore','Europe/London','America/New_York','Asia/Dubai','Asia/Tokyo','Australia/Sydney','Europe/Paris'];

  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('converters')">💱 Converters</span> › Time Zone</div>
      <h1 class="tool-h1">🕐 Time Zone Converter</h1>
      <p class="tool-desc-short">Convert time between any two time zones. Live world clock shows current time in major cities.</p>
    </div>
    <div class="tool-card">
      <div style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">🌍 Live World Clock</div>
      <div id="tzWorldClock" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin-bottom:20px"></div>
      <hr style="border:none;border-top:1px solid var(--border);margin-bottom:20px">
      <div class="form-grid">
        <div class="field"><label>Date & Time</label><input type="datetime-local" id="tzDateTime"></div>
        <div class="field"><label>From Time Zone</label><select id="tzFrom">${opts}</select></div>
        <div class="field"><label>To Time Zone</label><select id="tzTo">${opts}</select></div>
        <div class="field" style="display:flex;align-items:flex-end">
          <button class="btn-secondary" style="width:100%;height:44px" onclick="swapTZ()">⇅ Swap</button>
        </div>
      </div>
      <button class="btn-calc" onclick="convertTZ()">⚡ Convert Time</button>
      <div class="result-box" id="tzResult">
        <div class="result-label" id="tzResultLabel">Converted Time</div>
        <div class="result-main" id="tzResultMain">—</div>
        <div class="result-grid" id="tzResultGrid"></div>
      </div>
    </div>
    ${seoBlock('Time Zone Converter','Convert time between any two time zones instantly. Perfect for scheduling international meetings, calling overseas family, or planning travel. Includes a live world clock showing current times in Kuala Lumpur, Singapore, London, New York, Dubai, Tokyo, and Sydney.',
      ['View the live world clock to see current times across major cities.','Enter your date and time to convert.','Select the source and destination time zones.','Click Convert to see the exact time in your target timezone.','Use Swap to reverse the conversion direction.'],
      [{q:'What time zone is Malaysia in?',a:'Malaysia Standard Time (MYT) is UTC+8, the same as Singapore, Philippines, Brunei, Indonesia (WIB+1), and China Standard Time. Malaysia does not observe Daylight Saving Time, so the offset from UTC is always +8 hours year-round. Malaysia uses a single time zone across both Peninsular Malaysia and East Malaysia (Sabah and Sarawak), though geographically East Malaysia is in UTC+8 aligned with Philippines/Brunei.'},
       {q:'What is the time difference between Malaysia and the UK?',a:'The time difference between Malaysia (UTC+8) and the UK depends on the season. UK is on GMT (UTC+0) in winter (October–March) making Malaysia 8 hours ahead. UK switches to BST (UTC+1) in summer (March–October), making Malaysia 7 hours ahead. So when it\'s 9am in KL, it\'s 1am in London (winter) or 2am (summer).'},
       {q:'What time is it in Malaysia right now?',a:'Malaysia is always UTC+8, meaning you can find the current Malaysia time by adding 8 hours to UTC/GMT. Use the live world clock above for the current time in Kuala Lumpur and other major cities.'}],
      ['countdown-timer','date-difference','working-days','age-calculator'])
    }`;

  document.getElementById('tzFrom').value = 'Asia/Kuala_Lumpur';
  document.getElementById('tzTo').value = 'America/New_York';
  const now = new Date();
  now.setSeconds(0,0);
  document.getElementById('tzDateTime').value = now.toISOString().slice(0,16);
  window._TZ_LIST = TZ_LIST;

  // World clock
  function updateWorldClock() {
    const el = document.getElementById('tzWorldClock');
    if (!el) { clearInterval(window._tzClockInterval); return; }
    const cities = [
      {label:'Kuala Lumpur',tz:'Asia/Kuala_Lumpur'},
      {label:'Singapore',tz:'Asia/Singapore'},
      {label:'London',tz:'Europe/London'},
      {label:'New York',tz:'America/New_York'},
      {label:'Dubai',tz:'Asia/Dubai'},
      {label:'Tokyo',tz:'Asia/Tokyo'},
      {label:'Sydney',tz:'Australia/Sydney'},
      {label:'Paris',tz:'Europe/Paris'},
    ];
    el.innerHTML = cities.map(c => {
      const t = new Date().toLocaleTimeString('en-MY',{timeZone:c.tz,hour:'2-digit',minute:'2-digit',hour12:true});
      const d = new Date().toLocaleDateString('en-MY',{timeZone:c.tz,weekday:'short',day:'numeric',month:'short'});
      return `<div style="background:var(--bg-input);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px 12px">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:3px">${c.label}</div>
        <div style="font-size:16px;font-weight:500;font-family:var(--font-mono)">${t}</div>
        <div style="font-size:10px;color:var(--text-hint);margin-top:2px">${d}</div>
      </div>`;
    }).join('');
  }
  updateWorldClock();
  if (window._tzClockInterval) clearInterval(window._tzClockInterval);
  window._tzClockInterval = setInterval(updateWorldClock, 1000);
}

function swapTZ() {
  const f = document.getElementById('tzFrom').value;
  document.getElementById('tzFrom').value = document.getElementById('tzTo').value;
  document.getElementById('tzTo').value = f;
}

function convertTZ() {
  const dtVal = document.getElementById('tzDateTime').value;
  const fromTZ = document.getElementById('tzFrom').value;
  const toTZ = document.getElementById('tzTo').value;
  if (!dtVal) return;

  // Parse datetime as from-timezone local time
  const fromLabel = (window._TZ_LIST||[]).find(t=>t.tz===fromTZ)?.label||fromTZ;
  const toLabel = (window._TZ_LIST||[]).find(t=>t.tz===toTZ)?.label||toTZ;

  const inputDt = new Date(dtVal);
  // Format in target timezone
  const opts = {timeZone:toTZ,weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:true};
  const converted = inputDt.toLocaleString('en-MY', opts);
  const timeOnly = inputDt.toLocaleTimeString('en-MY',{timeZone:toTZ,hour:'2-digit',minute:'2-digit',hour12:true});
  const dateOnly = inputDt.toLocaleDateString('en-MY',{timeZone:toTZ,weekday:'short',day:'numeric',month:'short',year:'numeric'});

  document.getElementById('tzResultLabel').textContent = `Time in ${toLabel}`;
  document.getElementById('tzResultMain').textContent = timeOnly;
  document.getElementById('tzResultGrid').innerHTML = `
    <div class="result-item"><div class="result-item-val">${timeOnly}</div><div class="result-item-label">Time (${toTZ.split('/')[1]||toTZ})</div></div>
    <div class="result-item"><div class="result-item-val">${dateOnly}</div><div class="result-item-label">Date</div></div>
    <div class="result-item"><div class="result-item-val">${inputDt.toLocaleTimeString('en-MY',{timeZone:fromTZ,hour:'2-digit',minute:'2-digit',hour12:true})}</div><div class="result-item-label">Original (${fromTZ.split('/')[1]||fromTZ})</div></div>`;
  document.getElementById('tzResult').classList.add('show');
}

// ============================================================
// SPLIT BILL CALCULATOR
// ============================================================
function renderSplitBill() {
  setMeta('Split Bill Calculator — Divide Bill Fairly','Split any bill equally or unequally among friends. Supports custom percentages, names, and tip.','#split-bill');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Split Bill</div>
      <h1 class="tool-h1">👥 Split Bill Calculator</h1>
      <p class="tool-desc-short">Split any bill equally or by custom percentages. Add names, include tip, and see exactly what each person owes.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('sbCur','MYR','Currency')}
        <div class="field"><label>Total Bill Amount</label><input type="number" id="sbBill" value="200" oninput="updateSB()"></div>
        <div class="field"><label>Tip (%)</label><input type="number" id="sbTip" value="0" min="0" step="1" oninput="updateSB()"></div>
        <div class="field"><label>Split Type</label>
          <select id="sbType" onchange="sbToggleType()">
            <option value="equal" selected>Equal Split</option>
            <option value="custom">Custom (by %)</option>
          </select>
        </div>
      </div>
      <div id="sbPeopleSection" style="margin-top:16px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="font-size:13px;font-weight:500">People</div>
          <button class="btn-secondary" onclick="addSBPerson()" style="font-size:12px;padding:5px 12px">+ Add Person</button>
        </div>
        <div id="sbPeopleList"></div>
      </div>
      <div class="result-box" id="sbResult" style="margin-top:16px">
        <div class="result-label">Per Person</div>
        <div class="result-main" id="sbPerPerson">—</div>
        <div class="result-grid" id="sbBreakdown"></div>
        <div id="sbPersonAmounts" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('Split Bill Calculator','Split any restaurant, grocery, or group bill fairly — either equally or by custom percentages. Add each person\'s name for a clear summary of who owes what. Includes optional tip calculation.',
      ['Enter the total bill amount.','Add a tip percentage if applicable.','Add the names of everyone splitting the bill.','For equal split: the app divides automatically.','For custom split: assign each person\'s percentage of the bill.'],
      [{q:'How do I split a bill unequally?',a:'Select "Custom (by %)" split type, then enter the percentage each person owes. For example, 3 people where Person A owes 50% and B and C each owe 25%. The percentages must total 100%. This is useful when different people ordered different amounts.'},
       {q:'What is the easiest way to split a bill in Malaysia?',a:'For casual splitting among friends, the most common apps in Malaysia are DuitNow (via any Malaysian bank app) for payment, and this calculator for the math. Alternatively, use Touch\'n Go eWallet\'s split bill feature. Many Malaysian groups also use WhatsApp to share a screenshot of this calculator\'s result.'},
       {q:'Should tax and service charge be included before splitting?',a:'Yes — always split the final total including SST (8%) and service charge (10% if applicable). Most Malaysian restaurant bills already include these charges in the total. If the service charge is shown separately, add it to the subtotal before splitting. Calculate tip on the pre-tax/pre-service subtotal if tipping on top.'}],
      ['tip-calculator','discount-calculator','percentage-calculator','fuel-cost'])
    }`;

  window._sbPeople = [{name:'Person 1',pct:50},{name:'Person 2',pct:50}];
  renderSBPeople();
  updateSB();
}

function addSBPerson() {
  const n = (window._sbPeople||[]).length;
  if (n >= 10) { showToast('Max 10 people'); return; }
  const equalPct = Math.floor(100/(n+1));
  window._sbPeople = window._sbPeople.map(p=>({...p, pct:equalPct}));
  window._sbPeople.push({name:`Person ${n+1}`, pct: 100 - equalPct*n});
  renderSBPeople(); updateSB();
}

function removeSBPerson(i) {
  window._sbPeople.splice(i,1);
  const total = window._sbPeople.reduce((s,p)=>s+p.pct,0);
  if(window._sbPeople.length && total !== 100) {
    const diff = 100 - total;
    window._sbPeople[0].pct += diff;
  }
  renderSBPeople(); updateSB();
}

function renderSBPeople() {
  const isCustom = document.getElementById('sbType')?.value === 'custom';
  document.getElementById('sbPeopleList').innerHTML = (window._sbPeople||[]).map((p,i)=>`
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <input type="text" value="${p.name}" onchange="window._sbPeople[${i}].name=this.value;updateSB()" style="flex:1;height:38px;padding:0 10px;background:var(--bg-input);border:1px solid var(--border);border-radius:var(--radius-sm);font-family:var(--font);font-size:13px;color:var(--text);outline:none">
      ${isCustom ? `<input type="number" value="${p.pct}" min="0" max="100" onchange="window._sbPeople[${i}].pct=parseFloat(this.value)||0;updateSB()" style="width:70px;height:38px;padding:0 8px;background:var(--bg-input);border:1px solid var(--border);border-radius:var(--radius-sm);font-family:var(--font);font-size:13px;color:var(--text);outline:none"><span style="font-size:13px;color:var(--text-muted)">%</span>` : ''}
      <button onclick="removeSBPerson(${i})" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:18px;padding:0 4px">×</button>
    </div>`).join('');
}

function sbToggleType() { renderSBPeople(); updateSB(); }

function updateSB() {
  const sym = getSymbol(document.getElementById('sbCur')?.value||'MYR');
  const bill = parseFloat(document.getElementById('sbBill')?.value)||0;
  const tip = parseFloat(document.getElementById('sbTip')?.value)||0;
  const tipAmt = bill * tip/100;
  const total = bill + tipAmt;
  const n = (window._sbPeople||[]).length;
  const isCustom = document.getElementById('sbType')?.value === 'custom';
  let amounts;
  if(isCustom) {
    const totalPct = window._sbPeople.reduce((s,p)=>s+p.pct,0);
    amounts = window._sbPeople.map(p=>({name:p.name,amt:total*(p.pct/100),pct:p.pct}));
    if(Math.abs(totalPct-100)>0.1) {
      document.getElementById('sbResult').classList.remove('show');
      document.getElementById('sbPersonAmounts').innerHTML = `<div style="color:#EF4444;font-size:13px">⚠️ Percentages total ${totalPct.toFixed(1)}% — must equal 100%</div>`;
      return;
    }
  } else {
    const perPerson = total/n;
    amounts = (window._sbPeople||[]).map(p=>({name:p.name,amt:perPerson,pct:100/n}));
  }

  document.getElementById('sbPerPerson').textContent = sym+' '+fmt(total/n);
  document.getElementById('sbBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(bill)}</div><div class="result-item-label">Bill</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(tipAmt)}</div><div class="result-item-label">Tip (${tip}%)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(total)}</div><div class="result-item-label">Total</div></div>
    <div class="result-item"><div class="result-item-val">${n} people</div><div class="result-item-label">Splitting</div></div>`;
  document.getElementById('sbPersonAmounts').innerHTML = amounts.map(a=>`
    <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:var(--bg-input);border-radius:var(--radius-sm);margin-bottom:6px">
      <span style="font-size:13px;font-weight:500">${a.name}</span>
      <span style="font-family:var(--font-mono);font-size:15px;font-weight:500;color:var(--result-text)">${sym} ${fmt(a.amt)}</span>
    </div>`).join('');
  document.getElementById('sbResult').classList.add('show');
}

// ============================================================
// ELECTRICITY BILL ESTIMATOR
// ============================================================
function renderElectricityBill() {
  setMeta('Electricity Bill Estimator Malaysia — TNB Calculator','Estimate your monthly electricity bill for Malaysia TNB tiered tariff or any country custom rate.','#electricity-bill');

  const DEVICES = [
    {name:'Air Conditioner (1.5HP)',watts:1100},{name:'Air Conditioner (2.5HP)',watts:1800},
    {name:'Refrigerator',watts:150},{name:'Washing Machine',watts:500},
    {name:'Tumble Dryer',watts:2000},{name:'Electric Water Heater',watts:3000},
    {name:'Microwave Oven',watts:1000},{name:'Electric Kettle',watts:2000},
    {name:'Rice Cooker',watts:700},{name:'Electric Stove',watts:1500},
    {name:'Laptop',watts:65},{name:'Desktop PC',watts:200},
    {name:'LED TV 40"',watts:60},{name:'LED TV 55"',watts:100},
    {name:'LED Bulb',watts:9},{name:'Ceiling Fan',watts:65},
    {name:'Standing Fan',watts:55},{name:'WiFi Router',watts:10},
    {name:'Phone Charger',watts:20},{name:'Iron',watts:2000},
    {name:'Vacuum Cleaner',watts:1400},{name:'Custom Device',watts:0},
  ];

  const TNB_TARIFF = [
    {max:200, rate:0.218, label:'First 200 kWh'},
    {max:300, rate:0.334, label:'Next 100 kWh (201–300)'},
    {max:600, rate:0.516, label:'Next 300 kWh (301–600)'},
    {max:900, rate:0.546, label:'Next 300 kWh (601–900)'},
    {max:Infinity, rate:0.571, label:'Above 900 kWh'},
  ];

  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Electricity Bill</div>
      <h1 class="tool-h1">⚡ Electricity Bill Estimator</h1>
      <p class="tool-desc-short">Estimate your monthly electricity bill. Pre-loaded with Malaysia TNB tiered tariff. Add up to 10 devices.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field">
          <label>Tariff / Rate</label>
          <select id="elTariff" onchange="elUpdateTariff()">
            <option value="tnb">🇲🇾 Malaysia TNB (Tiered)</option>
            <option value="sg">🇸🇬 Singapore SP (~$0.326/kWh)</option>
            <option value="uk">🇬🇧 UK (~£0.29/kWh)</option>
            <option value="us">🇺🇸 USA (~$0.16/kWh)</option>
            <option value="au">🇦🇺 Australia (~A$0.32/kWh)</option>
            <option value="custom">Custom Rate</option>
          </select>
        </div>
        <div class="field" id="elCustomField" style="display:none">
          <label>Custom Rate (per kWh)</label>
          <input type="number" id="elCustomRate" value="0.218" step="0.001">
        </div>
      </div>
      <div style="margin-top:16px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="font-size:13px;font-weight:500">Devices</div>
          <button class="btn-secondary" onclick="addElDevice()" style="font-size:12px;padding:5px 12px">+ Add Device</button>
        </div>
        <div id="elDeviceList"></div>
      </div>
      <button class="btn-calc" onclick="calcElectricity()">⚡ Calculate Bill</button>
      <div class="result-box" id="elResult">
        <div class="result-label">Estimated Monthly Bill</div>
        <div class="result-main" id="elBill">—</div>
        <div class="result-grid" id="elBreakdown"></div>
        <div id="elTNBTable" style="margin-top:14px;overflow-x:auto"></div>
        <div id="elDeviceTable" style="margin-top:14px;overflow-x:auto"></div>
      </div>
    </div>
    ${seoBlock('Electricity Bill Estimator','Estimate your monthly electricity bill using Malaysia\'s TNB tiered tariff structure or custom rates for other countries. Add your home appliances, set daily usage hours, and see an itemised cost breakdown. The TNB tariff uses a progressive structure where you pay more per unit as your consumption increases.',
      ['Select your country tariff (Malaysia TNB is pre-selected).','Click Add Device to add your home appliances.','For each device, select the appliance type and enter daily usage hours.','Click Calculate Bill to see your estimated monthly cost.','The breakdown shows cost per device and TNB tier breakdown for Malaysia.'],
      [{q:'What is the TNB electricity tariff in Malaysia 2024?',a:'TNB (Tenaga Nasional Berhad) uses a tiered tariff for residential customers: First 200 kWh = RM0.218/kWh, Next 100 kWh (201–300) = RM0.334/kWh, Next 300 kWh (301–600) = RM0.516/kWh, Next 300 kWh (601–900) = RM0.546/kWh, Above 900 kWh = RM0.571/kWh. There is also a minimum charge of RM3.00 per month. The tiered structure incentivises energy conservation.'},
       {q:'How can I reduce my TNB electricity bill in Malaysia?',a:'Key strategies: Use inverter air conditioners (30–50% more efficient), set AC to 24–25°C instead of 16°C (saves ~6% per degree), use LED bulbs (80% less than incandescent), unplug appliances on standby, use a solar PV system (net metering allows selling excess to TNB), run high-consumption appliances (washing machine, water heater) during off-peak hours, and insulate your home to reduce AC load.'},
       {q:'How do I read my TNB electricity meter in Malaysia?',a:'Your TNB meter shows kWh consumed since installation. Your monthly bill is calculated based on the difference between this month\'s and last month\'s reading. You can check your usage anytime through the TNB MyTNB app or portal (mytnb.com.my). Smart meters (AMI meters) are being rolled out nationally, allowing real-time monitoring and remote reading without physical meter reading visits.'}],
      ['fuel-cost','tip-calculator','salary-calculator','compound-interest'])
    }`;

  window._DEVICES = DEVICES;
  window._TNB_TARIFF = TNB_TARIFF;
  window._elDevices = [{deviceIdx:0, hours:8, days:30},{deviceIdx:2, hours:24, days:30},{deviceIdx:8, hours:1, days:30}];
  renderElDevices();
}

function elUpdateTariff() {
  const v = document.getElementById('elTariff').value;
  document.getElementById('elCustomField').style.display = v==='custom'?'':'none';
}

function addElDevice() {
  if ((window._elDevices||[]).length >= 10) { showToast('Max 10 devices'); return; }
  window._elDevices.push({deviceIdx:0, hours:4, days:30});
  renderElDevices();
}

function removeElDevice(i) {
  window._elDevices.splice(i,1); renderElDevices();
}

function renderElDevices() {
  const deviceOpts = (window._DEVICES||[]).map((d,i)=>`<option value="${i}">${d.name}${d.watts?' ('+d.watts+'W)':''}</option>`).join('');
  document.getElementById('elDeviceList').innerHTML = (window._elDevices||[]).map((d,i)=>`
    <div style="background:var(--bg-input);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px 12px;margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <select onchange="window._elDevices[${i}].deviceIdx=parseInt(this.value)" style="flex:2;min-width:140px;height:38px;padding:0 10px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);font-family:var(--font);font-size:12px;color:var(--text);outline:none">${deviceOpts.replace(`value="${d.deviceIdx}"`,`value="${d.deviceIdx}" selected`)}</select>
        ${d.deviceIdx === (window._DEVICES||[]).length-1 ? `<input type="number" placeholder="Watts" id="elCustomW${i}" style="width:80px;height:38px;padding:0 8px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:var(--font);color:var(--text);outline:none">` : ''}
        <div style="display:flex;align-items:center;gap:4px"><input type="number" value="${d.hours}" min="0" max="24" step="0.5" onchange="window._elDevices[${i}].hours=parseFloat(this.value)||0" style="width:60px;height:38px;padding:0 8px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:var(--font);color:var(--text);outline:none"><span style="font-size:11px;color:var(--text-muted)">hrs/day</span></div>
        <button onclick="removeElDevice(${i})" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:18px">×</button>
      </div>
    </div>`).join('');
}

function calcElectricity() {
  const tariff = document.getElementById('elTariff').value;
  const rates = {sg:0.326,uk:0.29,us:0.16,au:0.32};
  const customRate = parseFloat(document.getElementById('elCustomRate')?.value)||0.218;
  const isTNB = tariff==='tnb';
  const flatRate = isTNB ? null : (tariff==='custom' ? customRate : rates[tariff]);
  const sym = {tnb:'RM',sg:'S$',uk:'£',us:'$',au:'A$',custom:''}[tariff]||'';

  let totalKWH = 0;
  const deviceBreakdown = [];
  (window._elDevices||[]).forEach((d,i) => {
    const dev = (window._DEVICES||[])[d.deviceIdx] || {name:'Custom',watts:0};
    let watts = dev.watts;
    if (d.deviceIdx === (window._DEVICES||[]).length-1) {
      watts = parseFloat(document.getElementById(`elCustomW${i}`)?.value)||0;
    }
    const kwhMonth = watts/1000 * d.hours * (d.days||30);
    totalKWH += kwhMonth;
    deviceBreakdown.push({name:dev.name, watts, hours:d.hours, kwh:kwhMonth});
  });

  let totalCost = 0;
  let tnbRows = '';
  if (isTNB) {
    let remaining = totalKWH;
    const TNB = window._TNB_TARIFF || [];
    let prev = 0;
    TNB.forEach(band => {
      if (remaining <= 0) return;
      const bandSize = band.max === Infinity ? remaining : Math.min(remaining, band.max - prev);
      const bandKWH = Math.min(remaining, bandSize);
      const bandCost = bandKWH * band.rate;
      totalCost += bandCost;
      if (bandKWH > 0) tnbRows += `<tr><td>${band.label}</td><td class="mono">${bandKWH.toFixed(1)} kWh</td><td class="mono">RM${band.rate}/kWh</td><td class="mono">RM ${fmt(bandCost)}</td></tr>`;
      remaining -= bandKWH;
      prev = band.max;
    });
    totalCost = Math.max(3.00, totalCost); // TNB minimum charge RM3
  } else {
    totalCost = totalKWH * flatRate;
  }

  document.getElementById('elBill').textContent = sym+' '+fmt(totalCost);
  document.getElementById('elBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${totalKWH.toFixed(1)} kWh</div><div class="result-item-label">Monthly Usage</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalCost)}</div><div class="result-item-label">Estimated Bill</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalCost/30,2)}/day</div><div class="result-item-label">Daily Cost</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(totalCost*12)}</div><div class="result-item-label">Annual Est.</div></div>`;
  if (isTNB && tnbRows) {
    document.getElementById('elTNBTable').innerHTML = `
      <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:6px">TNB Tier Breakdown</div>
      <table class="data-table"><thead><tr><th>Band</th><th>Usage</th><th>Rate</th><th>Cost</th></tr></thead><tbody>${tnbRows}</tbody></table>`;
  }
  document.getElementById('elDeviceTable').innerHTML = `
    <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin:12px 0 6px">Device Breakdown</div>
    <table class="data-table"><thead><tr><th>Device</th><th>Watts</th><th>Hrs/Day</th><th>kWh/Mo</th></tr></thead>
    <tbody>${deviceBreakdown.map(d=>`<tr><td>${d.name}</td><td class="mono">${d.watts}W</td><td class="mono">${d.hours}h</td><td class="mono">${d.kwh.toFixed(1)}</td></tr>`).join('')}</tbody></table>`;
  document.getElementById('elResult').classList.add('show');
}

// ============================================================
// INTERNET SPEED TOOL
// ============================================================
function renderInternetSpeed() {
  setMeta('Internet Speed Tool — Speed Unit Converter & Download Time','Convert internet speeds and calculate download times. Test your connection speed.','#internet-speed');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('daily')">🧮 Daily Life</span> › Internet Speed</div>
      <h1 class="tool-h1">🌐 Internet Speed Tool</h1>
      <p class="tool-desc-short">Convert internet speed units and calculate download/upload times for any file size. Test your actual speed via fast.com.</p>
    </div>
    <div class="tool-card">
      <div style="background:var(--primary-faint);border:1px solid var(--result-border);border-radius:var(--radius);padding:16px 20px;margin-bottom:20px;display:flex;align-items:center;gap:14px">
        <div style="font-size:28px">⚡</div>
        <div>
          <div style="font-size:14px;font-weight:600;margin-bottom:3px">Test Your Real Speed</div>
          <div style="font-size:12px;color:var(--text-muted)">Click to test your actual internet connection speed</div>
        </div>
        <a href="https://fast.com" target="_blank" rel="noopener" class="btn-calc" style="text-decoration:none;width:auto;padding:0 20px;margin-top:0;flex-shrink:0">Test Speed →</a>
      </div>
      <div class="tabs-row">
        <button class="tab-btn active" onclick="ispSetTab('units',this)">Speed Converter</button>
        <button class="tab-btn" onclick="ispSetTab('download',this)">Download Time</button>
      </div>
      <div id="ispForm"></div>
    </div>
    ${seoBlock('Internet Speed Tool','Convert between internet speed units (Mbps, MB/s, Kbps, Gbps) and calculate how long it takes to download or upload any file size at a given speed. Also includes a link to test your real internet connection speed.',
      ['Use the speed test link to check your actual internet speed.','Switch to Speed Converter to convert between Mbps, MB/s, Kbps, etc.','Switch to Download Time to find how long a file will take to download.','Enter your speed and file size for an instant estimate.'],
      [{q:'What is the average internet speed in Malaysia?',a:'Based on Ookla Speedtest data, Malaysia\'s average fixed broadband download speed is approximately 100–150 Mbps as of 2024. Unifi (TM) and Maxis Fibre offer plans from 100 Mbps to 2 Gbps. Mobile internet (4G/5G) averages 30–60 Mbps download. Malaysia ranks around 40th globally for fixed broadband speed, ahead of most Southeast Asian countries.'},
       {q:'What is the difference between Mbps and MB/s?',a:'Mbps (Megabits per second) and MB/s (Megabytes per second) are both internet speed measurements, but 1 byte = 8 bits. So 100 Mbps = 100/8 = 12.5 MB/s. Internet service providers advertise speeds in Mbps, while download managers and file transfer progress bars show speeds in MB/s. A 100 Mbps fibre connection downloads files at approximately 12 MB/s.'},
       {q:'How long does it take to download 1GB at 100 Mbps?',a:'At 100 Mbps = 12.5 MB/s: 1,000 MB (1 GB) / 12.5 MB/s = 80 seconds. A 4GB file would take about 5.3 minutes. At 1 Gbps (gigabit fibre): 1 GB downloads in about 8 seconds. At 10 Mbps (slower connection): 1 GB takes about 800 seconds (13 minutes).'}],
      ['data-storage-converter','password-generator','electricity-bill','speed-converter'])
    }`;
  ispSetTab('units', document.querySelector('.tabs-row .tab-btn'));
}

function ispSetTab(tab, btn) {
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  if (tab === 'units') {
    document.getElementById('ispForm').innerHTML = `
      <div class="form-grid" style="margin-top:12px">
        <div class="field"><label>Megabits/sec (Mbps)</label><input type="number" id="ispMbps" placeholder="100" oninput="ispConvert('mbps',this.value)"></div>
        <div class="field"><label>Megabytes/sec (MB/s)</label><input type="number" id="ispMBs" placeholder="" oninput="ispConvert('mbs',this.value)"></div>
        <div class="field"><label>Kilobits/sec (Kbps)</label><input type="number" id="ispKbps" placeholder="" oninput="ispConvert('kbps',this.value)"></div>
        <div class="field"><label>Gigabits/sec (Gbps)</label><input type="number" id="ispGbps" placeholder="" oninput="ispConvert('gbps',this.value)"></div>
        <div class="field"><label>Kilobytes/sec (KB/s)</label><input type="number" id="ispKBs" placeholder="" oninput="ispConvert('kbs',this.value)"></div>
        <div class="field"><label>Gigabytes/sec (GB/s)</label><input type="number" id="ispGBs" placeholder="" oninput="ispConvert('gbs',this.value)"></div>
      </div>`;
  } else {
    document.getElementById('ispForm').innerHTML = `
      <div class="form-grid" style="margin-top:12px">
        <div class="field"><label>Your Internet Speed (Mbps)</label><input type="number" id="dlSpeed" value="100"></div>
        <div class="field"><label>File Size</label><input type="number" id="dlSize" value="4"></div>
        <div class="field"><label>File Size Unit</label>
          <select id="dlUnit">
            <option value="mb">MB (Megabytes)</option>
            <option value="gb" selected>GB (Gigabytes)</option>
            <option value="tb">TB (Terabytes)</option>
          </select>
        </div>
        <div class="field" style="display:flex;align-items:flex-end">
          <button class="btn-calc" style="margin-top:0" onclick="calcDownloadTime()">⚡ Calculate Time</button>
        </div>
      </div>
      <div class="result-box" id="dlResult">
        <div class="result-label">Download Time</div>
        <div class="result-main" id="dlTime">—</div>
        <div class="result-grid" id="dlBreakdown"></div>
      </div>`;
  }
}

function ispConvert(from, val) {
  const v = parseFloat(val); if(isNaN(v)) return;
  let mbps;
  if(from==='mbps') mbps=v; else if(from==='mbs') mbps=v*8; else if(from==='kbps') mbps=v/1000; else if(from==='gbps') mbps=v*1000; else if(from==='kbs') mbps=v*8/1000; else mbps=v*8000;
  const set = (id,val) => { const e=document.getElementById(id); if(e) e.value=parseFloat(val.toFixed(6)); };
  if(from!=='mbps') set('ispMbps',mbps);
  if(from!=='mbs') set('ispMBs',mbps/8);
  if(from!=='kbps') set('ispKbps',mbps*1000);
  if(from!=='gbps') set('ispGbps',mbps/1000);
  if(from!=='kbs') set('ispKBs',mbps*1000/8);
  if(from!=='gbs') set('ispGBs',mbps/8000);
}

function calcDownloadTime() {
  const speedMbps = parseFloat(document.getElementById('dlSpeed').value)||100;
  const size = parseFloat(document.getElementById('dlSize').value)||4;
  const unit = document.getElementById('dlUnit').value;
  const multipliers = {mb:8, gb:8000, tb:8000000};
  const totalMb = size * multipliers[unit];
  const secs = totalMb / speedMbps;
  const h=Math.floor(secs/3600), m=Math.floor((secs%3600)/60), s=Math.floor(secs%60);
  const timeStr = h>0?`${h}h ${m}m ${s}s`:m>0?`${m}m ${s}s`:`${s} seconds`;
  document.getElementById('dlTime').textContent = timeStr;
  document.getElementById('dlBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${size} ${unit.toUpperCase()}</div><div class="result-item-label">File Size</div></div>
    <div class="result-item"><div class="result-item-val">${speedMbps} Mbps</div><div class="result-item-label">Your Speed</div></div>
    <div class="result-item"><div class="result-item-val">${(speedMbps/8).toFixed(1)} MB/s</div><div class="result-item-label">Download Rate</div></div>
    <div class="result-item"><div class="result-item-val">${timeStr}</div><div class="result-item-label">Total Time</div></div>`;
  document.getElementById('dlResult').classList.add('show');
}

// ============================================================
// BODY FAT CALCULATOR
// ============================================================
function renderBodyFat() {
  setMeta('Body Fat Calculator — Navy Method & BMI Method','Estimate your body fat percentage using the US Navy formula or BMI-based method.','#body-fat');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('health')">⚖️ Health</span> › Body Fat</div>
      <h1 class="tool-h1">💪 Body Fat Calculator</h1>
      <p class="tool-desc-short">Estimate your body fat percentage using the US Navy circumference method or BMI-based estimation.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="bfSetMethod('navy',this)">Navy Method</button>
        <button class="tab-btn" onclick="bfSetMethod('bmi',this)">BMI Method</button>
      </div>
      <div id="bfForm"></div>
      <button class="btn-calc" onclick="calcBodyFat()">⚡ Calculate Body Fat</button>
      <div class="result-box" id="bfResult">
        <div class="result-label">Estimated Body Fat</div>
        <div class="result-main" id="bfPct">—</div>
        <div id="bfCategory" style="font-size:15px;margin-top:4px"></div>
        <div class="result-grid" id="bfBreakdown" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('Body Fat Calculator','Estimate your body fat percentage using two methods: the US Navy circumference method (measuring neck, waist, and hip) which is accurate to within 3–4%, and the BMI-based method which provides a rough estimate from your BMI. Body fat percentage is a better indicator of fitness than BMI alone.',
      ['Select your preferred method (Navy Method is more accurate).','Enter your measurements in cm or inches.','Click Calculate to see your estimated body fat percentage.','Compare your result to the healthy range for your sex and age.'],
      [{q:'What is a healthy body fat percentage?',a:'Healthy body fat ranges (American Council on Exercise): Men: Essential fat 2–5%, Athletes 6–13%, Fitness 14–17%, Acceptable 18–24%, Obese 25%+. Women: Essential fat 10–13%, Athletes 14–20%, Fitness 21–24%, Acceptable 25–31%, Obese 32%+. Asian populations (including Malaysians) may have higher body fat at the same weight as Caucasians, so some guidelines suggest lower thresholds for Asians.'},
       {q:'What is the US Navy body fat formula?',a:'The US Navy method uses body circumferences: Men: BF% = 86.010×log10(waist−neck) − 70.041×log10(height) + 36.76. Women: BF% = 163.205×log10(waist+hip−neck) − 97.684×log10(height) − 78.387. Measurements are in centimetres. This method is used by the US military and is considered accurate to within 3–4 percentage points of hydrostatic weighing.'},
       {q:'How do I measure waist and hip correctly for body fat?',a:'Waist: measure at the narrowest point of your torso, usually around the navel level, while relaxed (not sucking in). Hip: measure around the widest part of your hips/buttocks. Neck: measure around the neck just below the larynx (Adam\'s apple). Use a flexible measuring tape, keep it level all the way around, and take measurements in the morning before eating.'}],
      ['bmi-calculator','ideal-weight','calorie-calculator','water-intake'])
    }`;
  window._bfMethod = 'navy';
  bfSetMethod('navy', document.querySelector('.tabs-row .tab-btn'));
}

function bfSetMethod(method, btn) {
  window._bfMethod = method;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const navyForm = `
    <div class="form-grid">
      <div class="field"><label>Sex</label><select id="bfSex" onchange="bfToggleHip()"><option value="M">Male</option><option value="F">Female</option></select></div>
      <div class="field"><label>Height (cm)</label><input type="number" id="bfH" value="170" step="0.5"></div>
      <div class="field"><label>Waist (cm)</label><input type="number" id="bfWaist" value="85" step="0.5"></div>
      <div class="field"><label>Neck (cm)</label><input type="number" id="bfNeck" value="38" step="0.5"></div>
      <div class="field" id="bfHipField"><label>Hip (cm) — females only</label><input type="number" id="bfHip" value="95" step="0.5"></div>
    </div>`;
  const bmiForm = `
    <div class="form-grid">
      <div class="field"><label>Sex</label><select id="bfSex2"><option value="M">Male</option><option value="F">Female</option></select></div>
      <div class="field"><label>Age</label><input type="number" id="bfAge" value="30"></div>
      <div class="field"><label>Height (cm)</label><input type="number" id="bfH2" value="170"></div>
      <div class="field"><label>Weight (kg)</label><input type="number" id="bfW" value="70"></div>
    </div>`;
  document.getElementById('bfForm').innerHTML = method==='navy' ? navyForm : bmiForm;
}

function bfToggleHip() {
  const isMale = document.getElementById('bfSex').value==='M';
  const hipField = document.getElementById('bfHipField');
  if(hipField) hipField.style.display = isMale?'none':'';
}

function calcBodyFat() {
  const method = window._bfMethod;
  let bf = 0, sex;
  const categories = {
    M:[{max:6,label:'Essential Fat',color:'#3B82F6'},{max:14,label:'Athlete',color:'#10B981'},{max:18,label:'Fitness',color:'#22C55E'},{max:25,label:'Acceptable',color:'#F59E0B'},{max:100,label:'Obese',color:'#EF4444'}],
    F:[{max:14,label:'Essential Fat',color:'#3B82F6'},{max:21,label:'Athlete',color:'#10B981'},{max:25,label:'Fitness',color:'#22C55E'},{max:32,label:'Acceptable',color:'#F59E0B'},{max:100,label:'Obese',color:'#EF4444'}],
  };
  let heightCm, weightKg = 0;
  if(method==='navy') {
    sex = document.getElementById('bfSex').value;
    const h = parseFloat(document.getElementById('bfH').value)||170;
    const waist = parseFloat(document.getElementById('bfWaist').value)||85;
    const neck = parseFloat(document.getElementById('bfNeck').value)||38;
    if(sex==='M') {
      bf = 86.010*Math.log10(waist-neck) - 70.041*Math.log10(h) + 36.76;
    } else {
      const hip = parseFloat(document.getElementById('bfHip')?.value)||95;
      bf = 163.205*Math.log10(waist+hip-neck) - 97.684*Math.log10(h) - 78.387;
    }
    heightCm = h;
  } else {
    sex = document.getElementById('bfSex2').value;
    const age = parseFloat(document.getElementById('bfAge').value)||30;
    heightCm = parseFloat(document.getElementById('bfH2').value)||170;
    weightKg = parseFloat(document.getElementById('bfW').value)||70;
    const bmi = weightKg/Math.pow(heightCm/100,2);
    bf = sex==='M' ? (1.20*bmi + 0.23*age - 16.2) : (1.20*bmi + 0.23*age - 5.4);
  }
  bf = Math.max(2, Math.min(60, bf));
  const cat = (categories[sex]||categories.M).find(c=>bf<c.max);
  const fatMass = weightKg>0 ? weightKg*bf/100 : null;
  document.getElementById('bfPct').textContent = bf.toFixed(1)+'%';
  document.getElementById('bfCategory').innerHTML = `<span style="color:${cat.color};font-weight:500">${cat.label}</span>`;
  document.getElementById('bfBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${bf.toFixed(1)}%</div><div class="result-item-label">Body Fat %</div></div>
    <div class="result-item"><div class="result-item-val">${(100-bf).toFixed(1)}%</div><div class="result-item-label">Lean Mass %</div></div>
    ${fatMass?`<div class="result-item"><div class="result-item-val">${fatMass.toFixed(1)} kg</div><div class="result-item-label">Fat Mass</div></div><div class="result-item"><div class="result-item-val">${(weightKg-fatMass).toFixed(1)} kg</div><div class="result-item-label">Lean Mass</div></div>`:''}
    <div class="result-item"><div class="result-item-val">${cat.label}</div><div class="result-item-label">Category</div></div>`;
  document.getElementById('bfResult').classList.add('show');
}

// ============================================================
// IDEAL WEIGHT CALCULATOR
// ============================================================
function renderIdealWeight() {
  setMeta('Ideal Weight Calculator — Healthy Weight Range','Calculate your ideal weight using 4 different formulas: Devine, Robinson, Miller, and Hamwi.','#ideal-weight');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('health')">⚖️ Health</span> › Ideal Weight</div>
      <h1 class="tool-h1">🎯 Ideal Weight Calculator</h1>
      <p class="tool-desc-short">Find your ideal weight range using four established medical formulas and the healthy BMI range.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Height (cm)</label><input type="number" id="iwH" value="170" step="0.5"></div>
        <div class="field"><label>Sex</label><select id="iwSex"><option value="M">Male</option><option value="F">Female</option></select></div>
      </div>
      <button class="btn-calc" onclick="calcIdealWeight()">⚡ Calculate Ideal Weight</button>
      <div class="result-box" id="iwResult">
        <div class="result-label">Healthy BMI Weight Range</div>
        <div class="result-main" id="iwRange">—</div>
        <div class="result-grid" id="iwBreakdown"></div>
        <div id="iwFormulas" style="margin-top:14px;overflow-x:auto"></div>
      </div>
    </div>
    ${seoBlock('Ideal Weight Calculator','Calculate your ideal body weight using four well-established medical formulas. The BMI healthy range (18.5–24.9) gives a weight band, while the Devine, Robinson, Miller, and Hamwi formulas each give a single target weight based on your height and sex.',
      ['Enter your height in centimetres.','Select your sex.','Click Calculate to see your ideal weight from multiple formulas.','The healthy BMI range shows the full acceptable weight band for your height.'],
      [{q:'What is my ideal weight for my height in Malaysia?',a:'For a Malaysian adult of 170cm: Healthy BMI range (18.5–24.9) = 53.5–72.0 kg. For Asian Pacific standards (18.5–22.9): 53.5–66.1 kg. Different formulas give slightly different single target weights — the Devine formula gives 69.9 kg for a 170cm male, for example. The BMI range is more useful than a single number as healthy weight varies by body composition.'},
       {q:'Which ideal weight formula is most accurate?',a:'No single formula is definitively most accurate for all people. The healthy BMI range (18.5–24.9 globally, 18.5–22.9 for Asians) is the most clinically validated benchmark. The Devine formula (1974) is widely used in medical dosing calculations. For practical purposes, use the BMI range as your primary target and the formula results as reference points.'},
       {q:'Can I be healthy outside my "ideal weight" range?',a:'Yes. Ideal weight formulas are statistical averages and do not account for body composition. A person with high muscle mass (athletes, bodybuilders) may be "overweight" by BMI or formula but have very low body fat and excellent health. Conversely, "normal weight obesity" (normal BMI but high body fat) exists. Always consider body fat percentage, waist circumference, and metabolic health markers alongside weight.'}],
      ['bmi-calculator','body-fat','calorie-calculator','water-intake'])
    }`;
}

function calcIdealWeight() {
  const h = parseFloat(document.getElementById('iwH').value)||170;
  const sex = document.getElementById('iwSex').value;
  const hIn = h / 2.54; // height in inches
  const hOver5ft = Math.max(0, hIn - 60); // inches over 5ft
  // Formulas (kg)
  const devine = sex==='M' ? 50 + 2.3*hOver5ft : 45.5 + 2.3*hOver5ft;
  const robinson = sex==='M' ? 52 + 1.9*hOver5ft : 49 + 1.7*hOver5ft;
  const miller = sex==='M' ? 56.2 + 1.41*hOver5ft : 53.1 + 1.36*hOver5ft;
  const hamwi = sex==='M' ? 48 + 2.7*hOver5ft : 45.5 + 2.2*hOver5ft;
  const bmiLo = 18.5 * Math.pow(h/100,2);
  const bmiHi = 24.9 * Math.pow(h/100,2);
  const asiaLo = 18.5 * Math.pow(h/100,2);
  const asiaHi = 22.9 * Math.pow(h/100,2);
  const avg = (devine+robinson+miller+hamwi)/4;

  document.getElementById('iwRange').textContent = `${bmiLo.toFixed(1)} – ${bmiHi.toFixed(1)} kg`;
  document.getElementById('iwBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${bmiLo.toFixed(1)}–${bmiHi.toFixed(1)} kg</div><div class="result-item-label">Healthy BMI Range (WHO)</div></div>
    <div class="result-item"><div class="result-item-val">${asiaLo.toFixed(1)}–${asiaHi.toFixed(1)} kg</div><div class="result-item-label">Asian BMI Range (≤22.9)</div></div>
    <div class="result-item"><div class="result-item-val">${avg.toFixed(1)} kg</div><div class="result-item-label">Formula Average</div></div>`;
  document.getElementById('iwFormulas').innerHTML = `
    <table class="data-table">
      <thead><tr><th>Formula</th><th>Year</th><th>Ideal Weight</th></tr></thead>
      <tbody>
        <tr><td>Devine</td><td>1974</td><td class="mono">${devine.toFixed(1)} kg (${(devine*2.205).toFixed(1)} lbs)</td></tr>
        <tr><td>Robinson</td><td>1983</td><td class="mono">${robinson.toFixed(1)} kg (${(robinson*2.205).toFixed(1)} lbs)</td></tr>
        <tr><td>Miller</td><td>1983</td><td class="mono">${miller.toFixed(1)} kg (${(miller*2.205).toFixed(1)} lbs)</td></tr>
        <tr><td>Hamwi</td><td>1964</td><td class="mono">${hamwi.toFixed(1)} kg (${(hamwi*2.205).toFixed(1)} lbs)</td></tr>
      </tbody>
    </table>`;
  document.getElementById('iwResult').classList.add('show');
}

// ============================================================
// STEP COUNTER / DISTANCE CONVERTER
// ============================================================
function renderStepCounter() {
  setMeta('Step Counter — Steps to Distance Converter','Convert steps to distance (km/miles) and calories. Find steps needed for any distance.','#step-counter');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('health')">⚖️ Health</span> › Step Counter</div>
      <h1 class="tool-h1">👟 Step Counter & Distance Converter</h1>
      <p class="tool-desc-short">Convert steps to distance and calories burned, or find how many steps you need to walk any distance.</p>
    </div>
    <div class="tool-card">
      <div class="tabs-row">
        <button class="tab-btn active" onclick="scSetTab('steps',this)">Steps → Distance</button>
        <button class="tab-btn" onclick="scSetTab('distance',this)">Distance → Steps</button>
      </div>
      <div class="form-grid" id="scForm"></div>
      <button class="btn-calc" onclick="calcSteps()">⚡ Calculate</button>
      <div class="result-box" id="scResult">
        <div class="result-label" id="scLabel">Result</div>
        <div class="result-main" id="scMain">—</div>
        <div class="result-grid" id="scBreakdown"></div>
      </div>
    </div>
    ${seoBlock('Step Counter','Convert your daily step count to distance in km and miles, estimate calories burned, and find how many steps you need to walk any distance. Based on your height for accurate stride length calculation.',
      ['Select Steps to Distance or Distance to Steps mode.','Enter your height for accurate stride length (or use the default).','Enter your steps or distance.','Enter your weight for calorie estimation.','Click Calculate to see all results.'],
      [{q:'How many steps are in 1km?',a:'The number of steps in 1km depends on your height and stride length. Average values: for a 160cm person ≈ 1,350 steps/km, for 170cm ≈ 1,265 steps/km, for 180cm ≈ 1,190 steps/km. The commonly cited "1,000 steps = approximately 800 metres" is a rough average. This calculator computes your personal stride length from your height.'},
       {q:'How many steps should I walk per day?',a:'The popular "10,000 steps per day" target equates to roughly 7–8 km for most adults. Research from Harvard Medical School suggests significant health benefits start at 7,000 steps/day, with diminishing returns above 10,000. For sedentary Malaysians, even increasing from 3,000 to 6,000 steps/day provides measurable cardiovascular benefits. Malaysian adults average approximately 5,500 steps/day.'},
       {q:'How many calories do I burn per step?',a:'On average, a person burns approximately 0.03–0.04 calories per step at walking pace. At 10,000 steps, that\'s roughly 300–400 calories depending on your weight and pace. Heavier people and faster walkers burn more. Climbing stairs burns about 3× more calories than walking on flat ground. This calculator estimates calorie burn based on your body weight.'}],
      ['calorie-calculator','bmi-calculator','water-intake','ideal-weight'])
    }`;
  window._scTab = 'steps';
  scSetTab('steps', document.querySelector('.tabs-row .tab-btn'));
}

function scSetTab(tab, btn) {
  window._scTab = tab;
  document.querySelectorAll('.tabs-row .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const commonFields = `
    <div class="field"><label>Your Height (cm)</label><input type="number" id="scH" value="170"></div>
    <div class="field"><label>Your Weight (kg) — for calories</label><input type="number" id="scW" value="70"></div>`;
  if(tab==='steps') {
    document.getElementById('scForm').innerHTML = `
      ${commonFields}
      <div class="field"><label>Number of Steps</label><input type="number" id="scSteps" value="10000"></div>
      <div class="field"><label>Walking Pace</label>
        <select id="scPace"><option value="3.2">Slow (3.2 km/h)</option><option value="4.8" selected>Normal (4.8 km/h)</option><option value="6.4">Brisk (6.4 km/h)</option></select>
      </div>`;
  } else {
    document.getElementById('scForm').innerHTML = `
      ${commonFields}
      <div class="field"><label>Distance</label><input type="number" id="scDist" value="5"></div>
      <div class="field"><label>Distance Unit</label>
        <select id="scDistUnit"><option value="km" selected>Kilometres (km)</option><option value="mi">Miles (mi)</option></select>
      </div>`;
  }
}

function calcSteps() {
  const h = parseFloat(document.getElementById('scH').value)||170;
  const w = parseFloat(document.getElementById('scW').value)||70;
  const strideM = h * 0.413 / 100; // stride length in metres
  const tab = window._scTab;
  let steps, distKm, calories, timeMin;

  if(tab==='steps') {
    steps = parseInt(document.getElementById('scSteps').value)||10000;
    distKm = (steps * strideM) / 1000;
    const pace = parseFloat(document.getElementById('scPace').value)||4.8;
    timeMin = (distKm/pace)*60;
    const MET = pace < 4.0 ? 2.5 : pace < 5.5 ? 3.5 : 4.5;
    calories = MET * w * (timeMin/60);
  } else {
    const dist = parseFloat(document.getElementById('scDist').value)||5;
    const unit = document.getElementById('scDistUnit').value;
    distKm = unit==='mi' ? dist*1.60934 : dist;
    steps = Math.round(distKm*1000/strideM);
    timeMin = (distKm/4.8)*60;
    calories = 3.5 * w * (timeMin/60);
  }

  const label = tab==='steps' ? 'Distance' : 'Steps Needed';
  const main = tab==='steps' ? `${distKm.toFixed(2)} km` : `${steps.toLocaleString()} steps`;
  document.getElementById('scLabel').textContent = label;
  document.getElementById('scMain').textContent = main;
  document.getElementById('scBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${steps.toLocaleString()}</div><div class="result-item-label">Steps</div></div>
    <div class="result-item"><div class="result-item-val">${distKm.toFixed(2)} km</div><div class="result-item-label">Distance (km)</div></div>
    <div class="result-item"><div class="result-item-val">${(distKm*0.621371).toFixed(2)} mi</div><div class="result-item-label">Distance (miles)</div></div>
    <div class="result-item"><div class="result-item-val">${Math.round(calories)} kcal</div><div class="result-item-label">Calories Burned (est.)</div></div>
    <div class="result-item"><div class="result-item-val">${Math.floor(timeMin)}m ${Math.round(timeMin%60)}s</div><div class="result-item-label">Est. Time (normal pace)</div></div>
    <div class="result-item"><div class="result-item-val">${(strideM*100).toFixed(0)} cm</div><div class="result-item-label">Your Stride Length</div></div>`;
  document.getElementById('scResult').classList.add('show');
}

// ============================================================
// COST OF LIVING CALCULATOR
// ============================================================
function renderCostOfLiving() {
  setMeta('Cost of Living Calculator — City Comparison','Compare cost of living between cities worldwide. Find your equivalent salary in another city.','#cost-of-living');

  // Indexed to New York = 100
  const CITIES = {
    'Kuala Lumpur, Malaysia': {idx:38, rent:25, food:35, transport:30, misc:40},
    'Penang, Malaysia': {idx:33, rent:22, food:32, transport:28, misc:35},
    'Johor Bahru, Malaysia': {idx:31, rent:20, food:30, transport:28, misc:33},
    'Singapore': {idx:85, rent:95, food:65, transport:60, misc:80},
    'Bangkok, Thailand': {idx:40, rent:35, food:32, transport:28, misc:42},
    'Jakarta, Indonesia': {idx:32, rent:28, food:28, transport:22, misc:35},
    'Manila, Philippines': {idx:37, rent:30, food:33, transport:25, misc:40},
    'Ho Chi Minh City, Vietnam': {idx:35, rent:28, food:30, transport:22, misc:38},
    'Tokyo, Japan': {idx:75, rent:80, food:65, transport:70, misc:72},
    'Seoul, South Korea': {idx:68, rent:72, food:58, transport:60, misc:65},
    'Shanghai, China': {idx:65, rent:70, food:52, transport:45, misc:62},
    'Hong Kong': {idx:90, rent:120, food:68, transport:55, misc:82},
    'Mumbai, India': {idx:30, rent:25, food:22, transport:18, misc:32},
    'Delhi, India': {idx:27, rent:20, food:20, transport:16, misc:28},
    'Dubai, UAE': {idx:72, rent:85, food:58, transport:50, misc:68},
    'London, UK': {idx:88, rent:95, food:72, transport:85, misc:88},
    'Paris, France': {idx:82, rent:90, food:70, transport:75, misc:80},
    'Amsterdam, Netherlands': {idx:80, rent:90, food:68, transport:70, misc:78},
    'Berlin, Germany': {idx:72, rent:78, food:62, transport:65, misc:70},
    'Sydney, Australia': {idx:85, rent:95, food:72, transport:78, misc:82},
    'Melbourne, Australia': {idx:80, rent:88, food:68, transport:72, misc:78},
    'Toronto, Canada': {idx:78, rent:85, food:65, transport:70, misc:76},
    'New York, USA': {idx:100, rent:100, food:100, transport:100, misc:100},
    'Los Angeles, USA': {idx:92, rent:100, food:90, transport:88, misc:90},
    'Auckland, New Zealand': {idx:75, rent:82, food:65, transport:68, misc:72},
  };

  const cityOpts = Object.keys(CITIES).map(c=>`<option value="${c}">${c}</option>`).join('');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('home-planning')">🏠 Home</span> › Cost of Living</div>
      <h1 class="tool-h1">🌆 Cost of Living Calculator</h1>
      <p class="tool-desc-short">Compare the cost of living between any two cities and find your equivalent salary when relocating.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Your Current City</label><select id="colFrom">${cityOpts}</select></div>
        <div class="field"><label>Destination City</label><select id="colTo">${cityOpts}</select></div>
        <div class="field"><label>Your Current Monthly Salary</label><input type="number" id="colSalary" value="5000"></div>
        <div class="field">${currencySelect('colCur','MYR','Currency').replace('<div class="field">','').replace('</div>','')}</div>
      </div>
      <button class="btn-calc" onclick="calcCOL()">⚡ Compare Cities</button>
      <div class="result-box" id="colResult">
        <div class="result-label">Equivalent Salary Needed</div>
        <div class="result-main" id="colEquiv">—</div>
        <div class="result-grid" id="colBreakdown"></div>
        <div id="colComparison" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('Cost of Living Calculator','Compare the cost of living between major cities worldwide and calculate what salary you would need in your destination city to maintain your current lifestyle. Covers 25 cities including Kuala Lumpur, Singapore, Tokyo, London, New York, Sydney, and more.',
      ['Select your current city.','Select the city you want to compare or move to.','Enter your current monthly salary.','Click Compare to see the equivalent salary and cost breakdown.','The comparison shows housing, food, transport, and other expense differences.'],
      [{q:'Is KL cheaper than Singapore to live in?',a:'Yes, significantly. Kuala Lumpur has a cost of living index approximately 45–55% lower than Singapore. Rent in KL is 70–75% cheaper than Singapore for comparable accommodation. Food is about 50% cheaper. Transport is also considerably cheaper — KL public transport fares are much lower and petrol is subsidised. A RM5,000/month lifestyle in KL would require approximately S$5,000–6,000/month in Singapore.'},
       {q:'How is cost of living calculated?',a:'Cost of living indices compare the relative cost of goods, services, and housing in different cities, usually indexed to a base city (often New York = 100). They typically cover: housing/rent, groceries, eating out, transportation, utilities, and healthcare. This calculator uses composite indices based on Numbeo and Expatistan data. Actual costs vary significantly by neighbourhood and lifestyle.'},
       {q:'What is the average monthly salary in Malaysia?',a:'The median monthly salary in Malaysia was approximately RM2,800 in 2023 based on DOSM data. Average monthly salary was around RM3,500. In KL and Selangor, average salaries are higher — approximately RM4,000–5,000. Minimum wage is RM1,500/month nationwide (since 2023). Highly skilled professionals in KL can earn RM8,000–20,000+ per month.'}],
      ['salary-calculator','rent-vs-buy','inflation-calculator','moving-cost'])
    }`;
  document.getElementById('colFrom').value = 'Kuala Lumpur, Malaysia';
  document.getElementById('colTo').value = 'Singapore';
  window._CITIES = CITIES;
}

function calcCOL() {
  const fromCity = document.getElementById('colFrom').value;
  const toCity = document.getElementById('colTo').value;
  const salary = parseFloat(document.getElementById('colSalary').value)||5000;
  const sym = getSymbol(document.getElementById('colCur').value);
  const cities = window._CITIES||{};
  const from = cities[fromCity], to = cities[toCity];
  if(!from||!to) return;

  const ratio = to.idx / from.idx;
  const equiv = salary * ratio;
  const diff = ((ratio-1)*100).toFixed(1);
  const cheaper = ratio < 1;

  document.getElementById('colEquiv').textContent = sym+' '+fmt(equiv);
  document.getElementById('colBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(salary)}</div><div class="result-item-label">Your Current Salary</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(equiv)}</div><div class="result-item-label">Needed in ${toCity.split(',')[0]}</div></div>
    <div class="result-item"><div class="result-item-val">${cheaper?'-':'+'} ${Math.abs(parseFloat(diff))}%</div><div class="result-item-label">${cheaper?'Cheaper':'More Expensive'}</div></div>
    <div class="result-item"><div class="result-item-val">${from.idx} vs ${to.idx}</div><div class="result-item-label">Cost Index (NYC=100)</div></div>`;

  const categories = [{k:'rent',label:'🏠 Housing/Rent'},{k:'food',label:'🍜 Food & Dining'},{k:'transport',label:'🚌 Transport'},{k:'misc',label:'🛍️ Other Expenses'}];
  document.getElementById('colComparison').innerHTML = `
    <div style="font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px">Category Comparison</div>
    ${categories.map(cat=>{
      const fromVal = from[cat.k], toVal = to[cat.k];
      const catRatio = toVal/fromVal;
      const pct = ((catRatio-1)*100).toFixed(0);
      const w = Math.min(100,Math.max(10,toVal));
      return `<div style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px">
          <span>${cat.label}</span>
          <span style="color:${catRatio<1?'var(--accent-hover)':'#EF4444'};font-weight:500">${catRatio<1?'':'+'}${pct}%</span>
        </div>
        <div style="display:flex;gap:4px;align-items:center">
          <span style="font-size:11px;color:var(--text-hint);width:40px">${fromCity.split(',')[0].slice(0,5)}</span>
          <div style="flex:1;background:var(--border);border-radius:4px;height:8px;overflow:hidden">
            <div style="height:100%;border-radius:4px;background:var(--primary);width:${fromVal}%"></div>
          </div>
        </div>
        <div style="display:flex;gap:4px;align-items:center;margin-top:3px">
          <span style="font-size:11px;color:var(--text-hint);width:40px">${toCity.split(',')[0].slice(0,5)}</span>
          <div style="flex:1;background:var(--border);border-radius:4px;height:8px;overflow:hidden">
            <div style="height:100%;border-radius:4px;background:${catRatio<1?'var(--accent)':'#EF4444'};width:${toVal}%"></div>
          </div>
        </div>
      </div>`;
    }).join('')}`;
  document.getElementById('colResult').classList.add('show');
}

// ============================================================
// MOVING COST CALCULATOR
// ============================================================
function renderMovingCost() {
  setMeta('Moving Cost Calculator Malaysia — Relocation Cost Estimate','Estimate your moving cost within Malaysia or internationally. DIY vs professional movers.','#moving-cost');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('home-planning')">🏠 Home</span> › Moving Cost</div>
      <h1 class="tool-h1">📦 Moving Cost Calculator</h1>
      <p class="tool-desc-short">Estimate your moving and relocation costs for within Malaysia or internationally. DIY vs professional mover comparison.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        ${currencySelect('movCur','MYR','Currency')}
        <div class="field"><label>Move Type</label>
          <select id="movType" onchange="renderMovForm()">
            <option value="local">Local (within same city)</option>
            <option value="interstate" selected>Interstate (Malaysia)</option>
            <option value="international">International</option>
          </select>
        </div>
        <div class="field"><label>Home Size</label>
          <select id="movSize">
            <option value="studio">Studio / 1 Room</option>
            <option value="1br">1 Bedroom</option>
            <option value="2br" selected>2 Bedrooms</option>
            <option value="3br">3 Bedrooms</option>
            <option value="4br">4+ Bedrooms / Landed</option>
          </select>
        </div>
        <div class="field"><label>Moving Service</label>
          <select id="movService">
            <option value="diy">DIY (Rent van + self pack)</option>
            <option value="partial">Partial (Transport only)</option>
            <option value="full" selected>Full Service (Pack + move)</option>
          </select>
        </div>
        <div class="field"><label>Floor Level (Current)</label>
          <select id="movFloor">
            <option value="0">Ground floor / landed</option>
            <option value="1">Low rise (1–5F)</option>
            <option value="2">Mid rise (6–15F)</option>
            <option value="3" selected>High rise (16F+)</option>
          </select>
        </div>
        <div class="field"><label>Elevator Available?</label>
          <select id="movLift"><option value="yes" selected>Yes — elevator available</option><option value="no">No — stairs only</option></select>
        </div>
      </div>
      <button class="btn-calc" onclick="calcMoving()">⚡ Estimate Moving Cost</button>
      <div class="result-box" id="movResult">
        <div class="result-label">Estimated Moving Cost</div>
        <div class="result-main" id="movMain">—</div>
        <div class="result-grid" id="movBreakdown"></div>
        <div id="movChecklist" style="margin-top:14px"></div>
      </div>
    </div>
    ${seoBlock('Moving Cost Calculator','Estimate your moving and relocation costs in Malaysia. Whether you\'re moving within the same city, interstate from KL to Penang, or internationally, this calculator gives you a realistic cost range based on home size, service level, and floor accessibility.',
      ['Select your move type (local, interstate, or international).','Choose your home size.','Select the service level (DIY, transport only, or full service).','Indicate your floor level and elevator availability.','Click Estimate to see low, mid, and high cost estimates.'],
      [{q:'How much does it cost to move house in Malaysia?',a:'Moving costs in Malaysia vary widely by size and service level. Approximate ranges: Studio/1BR local move (RM300–800 DIY, RM500–1,500 full service), 2BR interstate (RM800–1,800 transport only, RM1,500–4,000 full service), 3–4BR interstate (RM2,000–6,000+ full service). High-rise apartments without elevator access add 20–40% to the cost. International moves to Singapore start from RM3,000–8,000 for a standard apartment.'},
       {q:'How do I find a reliable moving company in Malaysia?',a:'To find reliable movers in Malaysia: get at least 3 quotes, check reviews on Google Maps and Facebook, verify company registration (SSM), ask for a written quotation listing all services included, check if insurance is included (or purchase separate transit insurance). Major cities have many licensed movers. Beware of extremely low quotes as they may lead to hidden charges or damaged goods.'},
       {q:'What should I pack first when moving house?',a:'Recommended packing order: (1) Out-of-season items and rarely used items, (2) Books, decorations, and non-essentials, (3) Most clothes and linens, (4) Kitchen items except daily essentials, (5) Electronics (photograph cable setups before disconnecting), (6) Daily essentials last (pack in a clearly labelled "first-night box"). Label all boxes with room destination and contents. Use original boxes for electronics if available.'}],
      ['renovation-budget','rent-vs-buy','cost-of-living','mortgage-calculator'])
    }`;
}

function calcMoving() {
  const sym = getSymbol(document.getElementById('movCur').value);
  const type = document.getElementById('movType').value;
  const size = document.getElementById('movSize').value;
  const service = document.getElementById('movService').value;
  const floor = parseInt(document.getElementById('movFloor').value)||0;
  const noLift = document.getElementById('movLift').value==='no';

  const baseCosts = {
    local: {studio:400,'1br':600,'2br':1000,'3br':1600,'4br':2400},
    interstate: {studio:800,'1br':1200,'2br':2000,'3br':3200,'4br':4800},
    international: {studio:3000,'1br':4500,'2br':7000,'3br':11000,'4br':16000},
  };
  const serviceMultipliers = {diy:0.4, partial:0.7, full:1.0};
  const floorAdd = [0,0.05,0.12,0.20][floor]||0;
  const liftAdd = noLift ? 0.15 : 0;

  const base = (baseCosts[type]||baseCosts.interstate)[size]||2000;
  const mid = base * serviceMultipliers[service] * (1+floorAdd+liftAdd);
  const lo = mid * 0.7, hi = mid * 1.4;

  document.getElementById('movMain').textContent = `${sym} ${fmt(lo)} – ${fmt(hi)}`;
  document.getElementById('movBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(lo)}</div><div class="result-item-label">Low Estimate</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(mid)}</div><div class="result-item-label">Mid Estimate</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(hi)}</div><div class="result-item-label">High Estimate</div></div>
    ${noLift?`<div class="result-item"><div class="result-item-val">+15%</div><div class="result-item-label">No Elevator Surcharge</div></div>`:''}`;
  document.getElementById('movChecklist').innerHTML = `
    <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">💡 Hidden Costs to Budget For</div>
    <div style="font-size:12px;color:var(--text-muted);line-height:1.8">
      • Packing materials (boxes, bubble wrap, tape): ${sym} ${fmt(lo*0.05)}–${fmt(lo*0.1)}<br>
      • Transit insurance (1–2% of goods value): recommended<br>
      • Storage if keys don't align: ${sym}300–800/month<br>
      • Cleaning old/new property: ${sym}200–600<br>
      • Utility setup deposits (water, electricity): ${sym}200–500<br>
      • Internet installation or transfer fee: ${sym}100–300
    </div>`;
  document.getElementById('movResult').classList.add('show');
}

// ============================================================
// RENOVATION BUDGET CALCULATOR
// ============================================================
function renderRenovationBudget() {
  setMeta('Renovation Budget Calculator Malaysia — Home Reno Cost','Estimate home renovation costs in Malaysia, Singapore, and Australia by scope and property size.','#renovation-budget');
  document.getElementById('app').innerHTML = `
    <div class="tool-header">
      <div class="tool-breadcrumb"><span onclick="navigate('home')">Home</span> › <span onclick="navigate('home-planning')">🏠 Home</span> › Renovation Budget</div>
      <h1 class="tool-h1">🔨 Renovation Budget Calculator</h1>
      <p class="tool-desc-short">Estimate your home renovation cost by scope. Pre-loaded with Malaysia, Singapore, and Australia rates.</p>
    </div>
    <div class="tool-card">
      <div class="form-grid">
        <div class="field"><label>Country / Market</label>
          <select id="renCountry" onchange="updateRenRates()">
            <option value="MY" selected>🇲🇾 Malaysia</option>
            <option value="SG">🇸🇬 Singapore</option>
            <option value="AU">🇦🇺 Australia</option>
          </select>
        </div>
        <div class="field"><label>Property Type</label>
          <select id="renType"><option value="condo" selected>Condo / Apartment</option><option value="landed">Landed (Terrace / Semi-D / Bungalow)</option></select>
        </div>
        <div class="field"><label>Floor Area (sq ft)</label><input type="number" id="renSqft" value="1000"></div>
        <div class="field"><label>Renovation Quality</label>
          <select id="renQuality">
            <option value="basic">Basic / Budget</option>
            <option value="mid" selected>Mid-range</option>
            <option value="premium">Premium / High-end</option>
          </select>
        </div>
      </div>
      <div style="margin-top:16px">
        <div style="font-size:13px;font-weight:500;margin-bottom:10px">Select Renovation Scope</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px" id="renScopes"></div>
      </div>
      <button class="btn-calc" onclick="calcRenovation()" style="margin-top:16px">⚡ Estimate Budget</button>
      <div class="result-box" id="renResult">
        <div class="result-label">Estimated Renovation Budget</div>
        <div class="result-main" id="renTotal">—</div>
        <div class="result-grid" id="renBreakdown"></div>
        <div id="renItemTable" style="margin-top:14px;overflow-x:auto"></div>
      </div>
    </div>
    ${seoBlock('Renovation Budget Calculator','Estimate your home renovation costs in Malaysia with this detailed calculator. Select which renovation scopes you need (flooring, painting, kitchen, bathroom, electrical, plumbing, ceiling, carpentry) and get an estimated budget based on your property size and quality level.',
      ['Select your country for localised pricing.','Enter your floor area in square feet.','Select quality level (Basic, Mid-range, or Premium).','Check the renovation scopes you plan to do.','Click Estimate Budget to see itemised costs and totals.'],
      [{q:'How much does a renovation cost in Malaysia?',a:'Malaysia renovation costs vary widely by scope and quality: Basic full condo renovation (1,000 sqft): RM30,000–60,000. Mid-range: RM60,000–100,000. Premium: RM100,000–200,000+. Specific items: painting (RM2–5/sqft), flooring tiles (RM8–30/sqft installed), kitchen cabinet (RM8,000–30,000+), bathroom renovation (RM5,000–20,000 per bathroom). Labour costs have risen 20–30% since COVID due to shortage of skilled workers.'},
       {q:'Should I get multiple renovation quotes in Malaysia?',a:'Yes, always get at least 3 quotes from different contractors. Prices can vary 30–50% for the same scope. Ask each contractor to provide itemised quotations (not lump sum) so you can compare like-for-like. Check contractor credentials, view past work (photos/site visits if possible), and verify they are registered with CIDB (Construction Industry Development Board) Malaysia. Avoid contractors who ask for more than 30% upfront.'},
       {q:'How long does a renovation take in Malaysia?',a:'Typical renovation timelines in Malaysia: Painting only: 1–2 weeks. Full condo renovation (1,000 sqft): 6–12 weeks. Landed house full renovation: 3–6 months. Kitchen only: 3–6 weeks. Bathrooms (2 units): 3–5 weeks. Delays are common due to material delivery, contractor scheduling, and permit approvals. Build a 20–30% time buffer into your planning.'}],
      ['moving-cost','mortgage-calculator','electricity-bill','loan-calculator'])
    }`;

  const SCOPES = [
    {id:'flooring',label:'🪨 Flooring & Tiles'},
    {id:'painting',label:'🎨 Painting & Wall'},
    {id:'kitchen',label:'🍳 Kitchen Cabinet'},
    {id:'bathroom',label:'🚿 Bathroom'},
    {id:'electrical',label:'⚡ Electrical'},
    {id:'plumbing',label:'🔧 Plumbing'},
    {id:'ceiling',label:'🏗️ False Ceiling'},
    {id:'carpentry',label:'🪵 Carpentry / ID'},
    {id:'aircon',label:'❄️ Air Conditioning'},
    {id:'grille',label:'🔒 Grille & Doors'},
  ];
  window._SCOPES = SCOPES;
  window._renRates = {
    MY:{basic:{flooring:6,painting:2,kitchen:8000,bathroom:6000,electrical:3000,plumbing:2000,ceiling:5,carpentry:4,aircon:2500,grille:2000},mid:{flooring:14,painting:3.5,kitchen:18000,bathroom:12000,electrical:6000,plumbing:4000,ceiling:10,carpentry:10,aircon:5000,grille:4000},premium:{flooring:28,painting:6,kitchen:35000,bathroom:25000,electrical:12000,plumbing:8000,ceiling:18,carpentry:22,aircon:9000,grille:8000}},
    SG:{basic:{flooring:15,painting:5,kitchen:20000,bathroom:15000,electrical:8000,plumbing:5000,ceiling:12,carpentry:15,aircon:6000,grille:5000},mid:{flooring:30,painting:10,kitchen:40000,bathroom:28000,electrical:15000,plumbing:10000,ceiling:22,carpentry:30,aircon:12000,grille:10000},premium:{flooring:60,painting:18,kitchen:80000,bathroom:55000,electrical:28000,plumbing:20000,ceiling:40,carpentry:55,aircon:22000,grille:20000}},
    AU:{basic:{flooring:45,painting:15,kitchen:15000,bathroom:12000,electrical:8000,plumbing:6000,ceiling:20,carpentry:20,aircon:5000,grille:3000},mid:{flooring:80,painting:25,kitchen:30000,bathroom:22000,electrical:15000,plumbing:12000,ceiling:35,carpentry:40,aircon:10000,grille:6000},premium:{flooring:150,painting:45,kitchen:60000,bathroom:45000,electrical:30000,plumbing:25000,ceiling:60,carpentry:80,aircon:20000,grille:12000}},
  };

  document.getElementById('renScopes').innerHTML = SCOPES.map(s=>`
    <label style="display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--bg-input);border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;font-size:13px;transition:all var(--transition)" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'">
      <input type="checkbox" id="ren_${s.id}" checked style="accent-color:var(--primary)">
      ${s.label}
    </label>`).join('');
}

function updateRenRates() { /* rates auto-update on calc */ }

function calcRenovation() {
  const country = document.getElementById('renCountry').value;
  const sqft = parseFloat(document.getElementById('renSqft').value)||1000;
  const quality = document.getElementById('renQuality').value;
  const sym = {MY:'RM',SG:'S$',AU:'A$'}[country]||'RM';
  const rates = (window._renRates||{})[country]?.[quality]||{};
  const SCOPES = window._SCOPES||[];
  const sqm = sqft * 0.0929;
  const perScopeUnits = {flooring:sqft,painting:sqft,ceiling:sqft,carpentry:sqm};

  let items = [], total = 0;
  SCOPES.forEach(s => {
    if(!document.getElementById(`ren_${s.id}`)?.checked) return;
    const rate = rates[s.id]||0;
    const isArea = ['flooring','painting','ceiling','carpentry'].includes(s.id);
    const unit = isArea ? (s.id==='carpentry'?sqm:sqft) : 1;
    const cost = rate * unit;
    items.push({label:s.label, cost, unit: isArea?(s.id==='carpentry'?`${sqm.toFixed(0)} sqm`:`${sqft} sqft`):'fixed'});
    total += cost;
  });

  const contingency = total * 0.15;
  const grandTotal = total + contingency;

  document.getElementById('renTotal').textContent = sym+' '+fmt(total);
  document.getElementById('renBreakdown').innerHTML = `
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(total)}</div><div class="result-item-label">Subtotal</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(contingency)}</div><div class="result-item-label">Contingency (15%)</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(grandTotal)}</div><div class="result-item-label">Grand Total</div></div>
    <div class="result-item"><div class="result-item-val">${sym} ${fmt(total/sqft,0)}/sqft</div><div class="result-item-label">Cost per sq ft</div></div>`;
  document.getElementById('renItemTable').innerHTML = `
    <table class="data-table">
      <thead><tr><th>Scope</th><th>Unit</th><th>Cost</th></tr></thead>
      <tbody>${items.map(i=>`<tr><td>${i.label}</td><td style="color:var(--text-muted);font-size:12px">${i.unit}</td><td class="mono">${sym} ${fmt(i.cost)}</td></tr>`).join('')}
      <tr style="font-weight:600"><td>Contingency (15%)</td><td></td><td class="mono">${sym} ${fmt(contingency)}</td></tr>
      <tr style="font-weight:600;color:var(--result-text)"><td>Grand Total</td><td></td><td class="mono">${sym} ${fmt(grandTotal)}</td></tr>
      </tbody>
    </table>`;
  document.getElementById('renResult').classList.add('show');
}

// ============================================================
// REGISTER ALL PART 3 TOOLS IN ROUTER
// ============================================================
const PART3_TOOLS = {
  'public-holidays': renderPublicHolidays,
  'school-holidays': renderSchoolHolidays,
  'timezone-converter': renderTimezone,
  'split-bill': renderSplitBill,
  'electricity-bill': renderElectricityBill,
  'internet-speed': renderInternetSpeed,
  'body-fat': renderBodyFat,
  'ideal-weight': renderIdealWeight,
  'step-counter': renderStepCounter,
  'cost-of-living': renderCostOfLiving,
  'moving-cost': renderMovingCost,
  'renovation-budget': renderRenovationBudget,
};

// Patch renderTool to include Part 3 tools
const _origRenderTool_p3 = window.renderTool;
window.renderTool = function(id) {
  if (PART3_TOOLS[id]) { PART3_TOOLS[id](); return; }
  if (_origRenderTool_p3) _origRenderTool_p3(id);
};

// ============================================================
// SITEMAP GENERATOR (accessible from footer)
// ============================================================
window.generateSitemap = function() {
  const base = window.location.origin + window.location.pathname.replace('index.html','');
  const tools = typeof ALL_TOOLS !== 'undefined' ? ALL_TOOLS : [];
  const clusterPriority = {finance:0.9, datetime:0.8, converters:0.8, daily:0.7, health:0.7, 'home-planning':0.7, malaysia:0.9};
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <url><loc>${base}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n`;
  tools.forEach(t => {
    const p = clusterPriority[t.cluster]||0.7;
    xml += `  <url><loc>${base}#${t.id}</loc><changefreq>monthly</changefreq><priority>${p}</priority></url>\n`;
  });
  xml += `</urlset>`;
  const blob = new Blob([xml],{type:'application/xml'});
  const a = document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download='sitemap.xml'; a.click();
  showToast('✓ sitemap.xml downloaded!');
};

// ============================================================
// FOOTER — inject into page after DOM loads
// ============================================================
(function addFooter() {
  const footer = document.createElement('footer');
  footer.style.cssText = 'margin-top:48px;padding:24px 40px;border-top:1px solid var(--border);display:flex;flex-wrap:wrap;gap:16px;align-items:center;font-size:12px;color:var(--text-muted)';
  footer.innerHTML = `
    <span style="font-weight:600;color:var(--text)">PeakToolsHub</span>
    <span>47 free tools · Built for global users</span>
    <span style="margin-left:auto;display:flex;gap:14px;flex-wrap:wrap">
      <a onclick="navigate('home')" style="color:var(--text-muted);cursor:pointer;text-decoration:none;hover:color:var(--primary)">Home</a>
      <a onclick="window.generateSitemap()" style="color:var(--text-muted);cursor:pointer;text-decoration:none">Download Sitemap</a>
      <span>Made with PeakToolsHub 2025</span>
    </span>`;
  document.querySelector('main')?.appendChild(footer);
})();

