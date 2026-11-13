import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const ORIGIN = 'https://ari-builds.github.io/fresh-lines-painting-site';
const REPO = 'fresh-lines-painting-site';

const M = JSON.parse(fs.readFileSync('C:/Users/Arian/AppData/Local/Temp/opencode/asset-manifest.json', 'utf8'))['fresh-lines'];

const S = {
  name: 'Fresh Lines Painting LLC',
  short: 'Fresh Lines',
  city: 'Irmo',
  state: 'SC',
  area: 'Irmo, Columbia, Lexington, Chapin, Ballentine, Blythewood and the Midlands',
  years: '8',
  crews: '2',
  radius: '40',
};

const NAV = [
  ['Services', 'services/', 'services'],
  ['Work', 'work/', 'work'],
  ['Process', 'process/', 'process'],
  ['About', 'about/', 'about'],
];

const SERVICES = [
  {
    slug: 'interior-painting',
    n: '01',
    title: 'Interior painting',
    short: 'Walls, ceilings, trim, doors and everything you would rather not move twice.',
    img: 'work-01',
    lede: 'Clean cut lines, even coverage and a room you can sleep in the same night.',
    body: [
      'We move and cover the furniture, fill and sand the imperfections, and cut a line you can see from across the room. Low-VOC paint is standard, and we leave the space vacuumed and back in order.',
      'Walls, ceilings, trim, doors, stairwells and built-ins. One room or the whole house, with a written schedule so you know which days are loud and which are done.',
    ],
    includes: ['Furniture moved and covered', 'Fill, sand and spot-prime', 'Low-VOC paint', 'Daily clean-up', 'Cut lines by hand, not by tape alone', 'Final walkthrough with touch-ups'],
    imgAlt: 'Interior painting project in the Midlands',
  },
  {
    slug: 'exterior-painting',
    n: '02',
    title: 'Exterior painting',
    short: 'Siding, soffits, fascia, doors and shutters — prepped properly before the first coat.',
    img: 'work-04',
    lede: 'The prep is why the paint stays. We wash, scrape, caulk and prime before we spray.',
    body: [
      'Exterior paint fails at the edges: dirt, chalk, loose caulk and bare wood. We wash the surface, scrape and sand loose paint, replace failed caulk and spot-prime bare areas before any finish coat goes on.',
      'Siding, soffits, fascia, trim, doors and shutters. We protect the landscaping and walk the house at the end, because a clean job includes the ground around it.',
    ],
    includes: ['Pressure wash and dry time', 'Scrape, sand and spot-prime', 'Caulk joints and gaps', 'Trim, doors and shutters', 'Landscaping protected', 'Final walkaround'],
    imgAlt: 'Exterior painting project in South Carolina',
  },
  {
    slug: 'cabinets-and-trim',
    n: '03',
    title: 'Cabinets & trim',
    short: 'Kitchen cabinets, vanities, built-ins and millwork with a sprayed, furniture-grade finish.',
    img: 'work-02',
    lede: 'A sprayed finish is the difference between a refresh and a remodel.',
    body: [
      'Cabinet painting is a prep job disguised as a paint job. Doors and drawers come off, hardware comes off, and every surface is degreased, sanded and bonded before finish.',
      'We spray in a controlled sequence, let coats cure, then reinstall doors, drawers and hardware. The result is a hard, even finish without brush marks or roller texture.',
    ],
    includes: ['Doors and drawers removed', 'Degrease, sand and bond', 'Sprayed finish, not rolled', 'Hardware removed and reinstalled', 'Cure time scheduled', 'Touch-up kit left behind'],
    imgAlt: 'Painted cabinetry and trim detail',
  },
  {
    slug: 'commercial-painting',
    n: '04',
    title: 'Commercial & multi-unit',
    short: 'Offices, rentals, apartment turns and common areas, scheduled around your business.',
    img: 'work-03',
    lede: 'After-hours crews, volume pricing and a finish that survives tenants.',
    body: [
      'We work with property managers, realtors and small businesses on turns, common areas and full repaints. Nights and weekends are normal for us, not an exception.',
      'One point of contact, a written scope per unit, and a schedule that tells you which units are ready when. We carry the insurance and keep the site clean.',
    ],
    includes: ['After-hours scheduling', 'Per-unit written scope', 'Volume pricing', 'Low-odour products', 'Site protection and cleanup', 'Single point of contact'],
    imgAlt: 'Commercial painting project',
  },
  {
    slug: 'color-and-prep',
    n: '05',
    title: 'Colour & prep',
    short: 'Colour help, drywall repair, sanding and priming before a single finish coat.',
    img: 'work-05',
    lede: 'The right colour, on a surface that is actually ready for it.',
    body: [
      'Bring us the sofa, the floor sample or the Pinterest board. We narrow the fan deck to three colours that work in your light, then test them on the wall before you commit.',
      'Drywall patches, nail pops, hairline cracks and sanding are handled in the prep phase, because paint does not hide a bad surface — it highlights it.',
    ],
    includes: ['Three-colour shortlist', 'On-wall test patches', 'Drywall and crack repair', 'Sanding and dust control', 'Primer matched to the surface', 'Written prep list'],
    imgAlt: 'Paint colour samples and wall preparation',
  },
];

const WORK = [
  ['work-01', 'Interior repaint'], ['work-02', 'Cabinet refresh'], ['work-03', 'Trim and doors'],
  ['work-04', 'Exterior repaint'], ['work-05', 'Colour and prep'], ['work-06', 'Whole-home repaint'],
  ['work-07', 'Bedroom refresh'], ['work-08', 'Living space'], ['work-09', 'Kitchen walls'],
  ['work-10', 'Hallway and stairs'], ['work-11', 'Exterior detail'], ['work-12', 'Commercial interior'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = (d, p) => '../'.repeat(d) + p;
const asset = (d, f) => '../'.repeat(d) + 'assets/opt/' + f;

const icons = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h15M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0113 0c0 4.8-6.5 11-6.5 11z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3.5 7l8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
<symbol id="i-brush" viewBox="0 0 24 24"><path d="M14 3l7 7-6 6-4-4zM11 12l-6 6 1 3 3 1 6-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
</defs></svg>`;

const head = ({ d, title, desc, canonical, og, jsonld, active = '', base = '' }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${base ? `<base href="${base}">` : ''}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${ORIGIN}/${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${ORIGIN}/${canonical}">
<meta property="og:image" content="${ORIGIN}/assets/opt/${og}">
<meta name="theme-color" content="#F7F2E8">
<link rel="icon" href="${asset(d, 'work-05.webp')}" type="image/webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700&family=Figtree:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${url(d, 'styles.css')}">
<script type="application/ld+json">${jsonld}</script>
</head>
<body>
${icons()}
<a class="skip" href="#main">Skip to content</a>
<header class="head" id="top">
  <div class="shell head__in">
    <a class="brand" href="${d === 0 ? '#top' : url(d, '')}" aria-label="${S.name}, home">
      <span class="brand__mark" aria-hidden="true"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 26L13 5l4 8 3-5 9 18z" fill="currentColor"/></svg></span>
      <span class="brand__txt"><span class="brand__name">Fresh Lines</span><span class="brand__sub mono">Painting LLC · Irmo SC</span></span>
    </a>
    <nav class="nav" aria-label="Main">
      ${NAV.map(([label, p, key]) => `<a href="${url(d, p)}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('\n      ')}
    </nav>
    <a class="btn btn--solid head__cta" href="${url(d, 'contact/')}">Free estimate</a>
    <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="mnav"><span></span><span></span></button>
  </div>
  <div class="mnav" id="mnav" hidden>
    ${NAV.map(([label, p]) => `<a href="${url(d, p)}">${label}</a>`).join('\n    ')}
    <a class="btn btn--solid" href="${url(d, 'contact/')}">Free estimate</a>
  </div>
</header>`;

const foot = (d) => `<footer class="foot">
  <div class="shell foot__top">
    <div class="foot__brand">
      <a class="brand brand--foot" href="${d === 0 ? '#top' : url(d, '')}">
        <span class="brand__mark" aria-hidden="true"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 26L13 5l4 8 3-5 9 18z" fill="currentColor"/></svg></span>
        <span class="brand__txt"><span class="brand__name">Fresh Lines</span><span class="brand__sub mono">Painting LLC</span></span>
      </a>
      <p>Interior and exterior painting for Irmo, Columbia and the Midlands. Two crews, eight years, one standard.</p>
      <a class="btn btn--line" href="${url(d, 'contact/')}">Get a free estimate</a>
    </div>
    <div class="foot__col">
      <h4 class="mono">Services</h4>
      ${SERVICES.map((s) => `<a href="${url(d, `services/#${s.slug}`)}">${s.title}</a>`).join('\n      ')}
    </div>
    <div class="foot__col">
      <h4 class="mono">Company</h4>
      <a href="${url(d, 'about/')}">About</a>
      <a href="${url(d, 'work/')}">Recent work</a>
      <a href="${url(d, 'process/')}">Process</a>
      <a href="${url(d, 'contact/')}">Contact</a>
    </div>
    <div class="foot__col">
      <h4 class="mono">Service area</h4>
      <p class="foot__area">Irmo · Columbia · Lexington · Chapin · Ballentine · Blythewood · West Columbia · Cayce</p>
      <p class="foot__fine">Working a 40-mile radius from Irmo, SC.</p>
    </div>
  </div>
  <div class="shell foot__bottom">
    <span class="mono">© <span data-year>2026</span> ${S.name}</span>
    <span class="mono">Irmo, South Carolina</span>
  </div>
</footer>`;

const ctaBand = (d) => `<section class="band">
  <div class="shell band__in">
    <div>
      <span class="eyebrow mono">Free estimate</span>
      <h2>Tell us about<br>the room.</h2>
      <p>Send the space, the timeline and a photo if you have one. We will come back with a written number, not a range.</p>
    </div>
    <div class="band__acts">
      <a class="btn btn--light btn--lg" href="${url(d, 'contact/')}">Request my estimate <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <span class="mono band__note">No deposit · no obligation</span>
    </div>
  </div>
</section>`;

const crumbs = (trail) => {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' }];
  trail.forEach((t, i) => items.push({ '@type': 'ListItem', position: i + 2, name: t[0], item: `${ORIGIN}/${t[1]}` }));
  return { '@type': 'BreadcrumbList', itemListElement: items };
};

const biz = () => ({
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${ORIGIN}/#business`,
  name: S.name,
  description: 'Interior and exterior painting, cabinet refinishing and commercial repainting in Irmo, Columbia and the South Carolina Midlands.',
  url: ORIGIN + '/',
  image: `${ORIGIN}/assets/opt/hero.webp`,
  areaServed: ['Irmo SC', 'Columbia SC', 'Lexington SC', 'Chapin SC', 'Ballentine SC', 'Blythewood SC', 'West Columbia SC', 'Cayce SC'],
  priceRange: '$$',
  founder: { '@type': 'Person', name: 'Kristina Marie' },
});

function page(opts, body) {
  const jsonld = JSON.stringify(opts.jsonld);
  const html = `${head({ ...opts, jsonld })}
<main id="main">
${body}
</main>
${foot(opts.d)}
<script src="${url(opts.d, 'script.js')}" defer></script>
</body>
</html>
`.replace(/(src|href|data-full)="assets\/opt\//g, (m, attr) => `${attr}="${'../'.repeat(opts.d)}assets/opt/`);
  const out = opts.canonical === '' || opts.canonical.endsWith('/')
    ? path.join(ROOT, opts.canonical, 'index.html')
    : path.join(ROOT, opts.canonical);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('wrote', path.relative(ROOT, out));
}

/* ------------------------------------------------------------------ */
/* home                                                               */
/* ------------------------------------------------------------------ */

const home = `
<section class="hero">
  <div class="shell hero__grid">
    <div class="hero__copy">
      <span class="eyebrow mono">Irmo · Columbia · the Midlands</span>
      <h1>Fresh paint.<br>Clean lines.<br><em>No runaround.</em></h1>
      <p class="hero__p">Interior and exterior painting with the prep done properly — two crews, eight years, and a finish you can run your hand along.</p>
      <div class="hero__acts">
        <a class="btn btn--solid btn--lg" href="contact/">Get a free estimate <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
        <a class="btn btn--line btn--lg" href="work/">See recent work</a>
      </div>
      <dl class="hero__stats">
        <div><dt class="mono">Years painting</dt><dd>${S.years}</dd></div>
        <div><dt class="mono">Crews</dt><dd>${S.crews}</dd></div>
        <div><dt class="mono">Service radius</dt><dd>${S.radius}<span>mi</span></dd></div>
      </dl>
    </div>
    <div class="hero__media">
      <figure class="arch">
        <img src="assets/opt/hero.webp" alt="Freshly painted interior in the South Carolina Midlands" width="${M.hero.w}" height="${M.hero.h}" fetchpriority="high" decoding="async">
      </figure>
      <div class="chips" aria-hidden="true">
        <span class="chip chip--1"></span><span class="chip chip--2"></span><span class="chip chip--3"></span>
      </div>
      <span class="hero__tag mono">Interior · Repaint</span>
    </div>
  </div>
</section>

<div class="stripwrap" aria-hidden="true">
  <div class="strip">
    <div class="strip__track">
      <span>Interior</span><span>/</span><span>Exterior</span><span>/</span><span>Cabinets</span><span>/</span><span>Trim</span><span>/</span><span>Commercial</span><span>/</span><span>Colour</span><span>/</span>
      <span>Interior</span><span>/</span><span>Exterior</span><span>/</span><span>Cabinets</span><span>/</span><span>Trim</span><span>/</span><span>Commercial</span><span>/</span><span>Colour</span><span>/</span>
    </div>
  </div>
</div>

<section class="sec intro">
  <div class="shell intro__grid">
    <div>
      <span class="eyebrow mono">01 — Why Fresh Lines</span>
      <h2 class="h2">Paint is the easy part.<br><em>The prep is the job.</em></h2>
    </div>
    <div class="intro__body">
      <p class="lead">Anyone can sell you a coat of paint. We sell the hours before it: the filling, sanding, masking and priming that decide how the room looks in two years.</p>
      <p>Fresh Lines is owner-run by Kristina Marie, with two crews working out of Irmo and a 40-mile radius across the Midlands. Eight years in the trade, the last few building a reputation here the old way — one finished room at a time.</p>
      <p>You get a written scope, a start date, and the same person answering the phone from the walkthrough to the final touch-up.</p>
      <a class="link" href="about/">How we work <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>

<section class="sec sec--tint svcs" id="services">
  <div class="shell">
    <div class="sechead">
      <span class="eyebrow mono">02 — What we paint</span>
      <h2 class="h2">Five ways to<br><em>freshen a space.</em></h2>
      <p class="sechead__p">Residential and commercial, inside and out. If it takes paint, we have probably prepped one like it.</p>
    </div>
    <ol class="svc">
      ${SERVICES.map((s) => `<li>
        <a class="svc__row" href="services/#${s.slug}">
          <span class="svc__n mono">${s.n}</span>
          <span class="svc__t">${s.title}</span>
          <span class="svc__d">${s.short}</span>
          <span class="svc__go"><svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></span>
          <span class="svc__peek"><img src="assets/opt/${s.img}.webp" alt="" loading="lazy" decoding="async"></span>
        </a>
      </li>`).join('\n      ')}
    </ol>
    <div class="svcs__foot">
      <a class="btn btn--solid" href="services/">All services <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <span class="mono">Free estimates · written scope</span>
    </div>
  </div>
</section>

<section class="sec work">
  <div class="shell">
    <div class="sechead sechead--split">
      <div><span class="eyebrow mono">03 — Recent work</span><h2 class="h2">Rooms we finished,<br><em>not rooms we staged.</em></h2></div>
      <a class="link" href="work/">See all 12 projects <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
    <div class="gal">
      ${WORK.slice(0, 6).map(([img, label], i) => `<a class="gal__item" href="work/" aria-label="${esc(label)}">
        <img src="assets/opt/${M[img].small}" alt="${esc(label)} by Fresh Lines Painting" width="${M[img].w}" height="${M[img].h}" loading="lazy" decoding="async">
        <span class="gal__cap mono">${String(i + 1).padStart(2, '0')} · ${label}</span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="sec sec--dark proc">
  <div class="shell">
    <div class="sechead sechead--split">
      <div><span class="eyebrow mono">04 — The process</span><h2 class="h2 h2--light">Four steps.<br><em>No surprises.</em></h2></div>
      <p class="sechead__p">You always know who is coming, what happens that day, and what it costs.</p>
    </div>
    <ol class="steps">
      <li><span class="mono">01</span><h3>Walkthrough</h3><p>We look at the space, the surface and the light. Measurements and photos, fifteen minutes.</p></li>
      <li><span class="mono">02</span><h3>Written quote</h3><p>A fixed, line-item number: labour, materials, prep and the days we will be there.</p></li>
      <li><span class="mono">03</span><h3>Prep &amp; protect</h3><p>Furniture covered, floors protected, cracks filled, surfaces sanded and primed.</p></li>
      <li><span class="mono">04</span><h3>Paint &amp; walk</h3><p>Finish coats, clean edges, clean-up, then a walkthrough with touch-ups before we leave.</p></li>
    </ol>
    <a class="link link--light" href="process/">More about the process <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
  </div>
</section>

<section class="sec std">
  <div class="shell std__grid">
    <div class="std__copy">
      <span class="eyebrow mono">05 — The standard</span>
      <h2 class="h2">What “done”<br><em>actually means.</em></h2>
      <p>No mystery upcharges, no crew you have never met, no “we will come back next week” that turns into next month.</p>
      <a class="btn btn--solid" href="contact/">Book a walkthrough <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
    <ul class="std__list">
      <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg><div><strong>A fixed written quote</strong><span>The number you sign is the number you pay. Changes only when you ask for them.</span></div></li>
      <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg><div><strong>Our own crews</strong><span>Two crews, trained by us. No rotating subcontractors and no strangers in your house.</span></div></li>
      <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg><div><strong>Prep in the quote</strong><span>Filling, sanding, caulking and priming are line items, not surprises.</span></div></li>
      <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg><div><strong>Clean every day</strong><span>Tools down, floors vacuumed, furniture back before we leave each night.</span></div></li>
    </ul>
  </div>
</section>

<section class="sec sec--tint area">
  <div class="shell area__grid">
    <div>
      <span class="eyebrow mono">06 — Where we work</span>
      <h2 class="h2">Based in Irmo.<br><em>Forty miles out.</em></h2>
      <p>We are a Midlands company, not a franchise driving in from Charlotte. That means shorter drives, faster callbacks and a crew that knows the local housing stock.</p>
      <a class="link" href="contact/">Check your address <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
    <ul class="area__list">
      <li>Irmo</li><li>Columbia</li><li>Lexington</li><li>Chapin</li><li>Ballentine</li><li>Blythewood</li><li>West Columbia</li><li>Cayce</li>
    </ul>
  </div>
</section>

${ctaBand(0)}
`;

page({
  d: 0,
  title: `Fresh Lines Painting LLC | House Painters in Irmo & Columbia, SC`,
  desc: 'Interior and exterior painting, cabinet refinishing and commercial repainting in Irmo, Columbia and the Midlands. Owner-run, two crews, written quotes.',
  canonical: '',
  og: 'hero.webp',
  active: 'home',
  jsonld: {
    '@context': 'https://schema.org',
    '@graph': [biz(), {
      '@type': 'WebSite',
      '@id': ORIGIN + '/#website',
      url: ORIGIN + '/',
      name: S.name,
      publisher: { '@id': ORIGIN + '/#business' },
    }],
  },
}, home);

/* ------------------------------------------------------------------ */
/* services                                                           */
/* ------------------------------------------------------------------ */

const servicesBody = `
<section class="phero">
  <div class="shell phero__grid">
    <div>
      <span class="eyebrow mono">Services</span>
      <h1>Paint, prep and<br><em>the finish in between.</em></h1>
      <p>Interior, exterior, cabinets and commercial. One crew from the first patch to the last touch-up.</p>
    </div>
    <figure class="phero__fig"><img src="assets/opt/work-04.webp" alt="Exterior painting project" width="${M['work-04'].w}" height="${M['work-04'].h}" decoding="async"></figure>
  </div>
</section>

${SERVICES.map((s, i) => `<section class="sec ${i % 2 ? 'sec--tint' : ''} svcsec" id="${s.slug}">
  <div class="shell svcsec__grid">
    <div class="svcsec__media">
      <figure><img src="assets/opt/${s.img}.webp" alt="${esc(s.imgAlt)}" width="${M[s.img].w}" height="${M[s.img].h}" loading="lazy" decoding="async"></figure>
    </div>
    <div class="svcsec__body">
      <span class="eyebrow mono">${s.n} — ${s.title}</span>
      <h2 class="h2">${s.lede}</h2>
      ${s.body.map((p) => `<p>${p}</p>`).join('\n      ')}
      <ul class="ticks">${s.includes.map((x) => `<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>${x}</li>`).join('')}</ul>
      <a class="btn btn--solid" href="${url(1, 'contact/')}">Price this service <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>`).join('\n')}

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Painting Services in Irmo & Columbia SC | ${S.name}`,
  desc: 'Interior and exterior painting, cabinet refinishing, trim and commercial repainting across Irmo, Columbia and the Midlands. Written, fixed quotes.',
  canonical: 'services/',
  og: 'work-04.webp',
  active: 'services',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Services', 'services/']]), {
    '@type': 'ItemList',
    itemListElement: SERVICES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, url: `${ORIGIN}/services/#${s.slug}` })),
  }] },
}, servicesBody);

/* ------------------------------------------------------------------ */
/* work                                                               */
/* ------------------------------------------------------------------ */

const workBody = `
<section class="phero phero--work">
  <div class="shell">
    <span class="eyebrow mono">Recent work</span>
    <h1>Twelve rooms,<br><em>twelve fresh starts.</em></h1>
    <p>A selection of interior, exterior and cabinet projects around the Midlands. Tap any photo to look closer.</p>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <div class="gal gal--work">
      ${WORK.map(([img, label], i) => `<button class="gal__item gal__item--btn" data-lightbox="${i}" data-full="assets/opt/${M[img].file}" data-label="${esc(label)}" aria-label="Open ${esc(label)}">
        <img src="assets/opt/${M[img].small}" alt="${esc(label)} by Fresh Lines Painting" width="${M[img].w}" height="${M[img].h}" loading="lazy" decoding="async">
        <span class="gal__cap mono">${String(i + 1).padStart(2, '0')} · ${label}</span>
      </button>`).join('\n      ')}
    </div>
  </div>
</section>

<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Project photo" hidden>
  <button class="lb__close" aria-label="Close">×</button>
  <button class="lb__nav lb__prev" aria-label="Previous">‹</button>
  <img class="lb__img" src="assets/opt/${M['work-01'].file}" alt="">
  <button class="lb__nav lb__next" aria-label="Next">›</button>
  <span class="lb__cap mono"></span>
</div>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Recent Painting Projects in the Midlands | ${S.name}`,
  desc: 'Interior, exterior and cabinet painting projects across Irmo, Columbia, Lexington and the Midlands by Fresh Lines Painting LLC.',
  canonical: 'work/',
  og: 'work-06.webp',
  active: 'work',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Work', 'work/']])] },
}, workBody);

/* ------------------------------------------------------------------ */
/* process                                                            */
/* ------------------------------------------------------------------ */

const processBody = `
<section class="phero phero--process">
  <div class="shell">
    <span class="eyebrow mono">Process</span>
    <h1>Four steps, then<br><em>the good part.</em></h1>
    <p>Painting goes wrong in the gaps — between the quote and the start date, between one trade and the next. We closed them.</p>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <ol class="bigsteps">
      <li><span class="mono">01</span><div><h2>Walkthrough &amp; measure</h2><p>Fifteen minutes in the room, not a phone estimate. We check the surface, the light, the trim and what needs patching. You get a straight answer about what can be saved and what needs replacing.</p></div></li>
      <li><span class="mono">02</span><div><h2>Written, fixed quote</h2><p>Labour, materials, prep and the number of days, line by line. You approve a start date before anything is ordered. If something changes the scope, you get a change order before we proceed.</p></div></li>
      <li><span class="mono">03</span><div><h2>Prep, protect, prime</h2><p>Furniture moved and covered. Floors protected. Cracks and nail pops filled, surfaces sanded, joints caulked and bare spots primed. This is where the finish is won.</p></div></li>
      <li><span class="mono">04</span><div><h2>Finish &amp; walkthrough</h2><p>Two finish coats, cut lines by hand, hardware and furniture back. We walk the space together, mark anything that needs attention, and leave touch-up paint labelled for the future.</p></div></li>
    </ol>
  </div>
</section>

<section class="sec sec--tint">
  <div class="shell two">
    <div>
      <span class="eyebrow mono">What you get</span>
      <h2 class="h2">A clean job,<br><em>not just clean walls.</em></h2>
      <p>Daily clean-up is part of the quote, not a favour. Tools down, floors vacuumed, furniture roughly back before we leave each day, so the house stays livable while we work.</p>
    </div>
    <figure class="frame"><img src="assets/opt/work-11.webp" alt="Exterior painting detail" width="${M['work-11'].w}" height="${M['work-11'].h}" loading="lazy" decoding="async"><figcaption class="mono">Prep, prime, finish · Midlands</figcaption></figure>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Our Painting Process | ${S.name}`,
  desc: 'How Fresh Lines Painting works: walkthrough, fixed written quote, proper prep and protection, then finish coats and a final walkthrough.',
  canonical: 'process/',
  og: 'work-11.webp',
  active: 'process',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Process', 'process/']])] },
}, processBody);

/* ------------------------------------------------------------------ */
/* about                                                              */
/* ------------------------------------------------------------------ */

const aboutBody = `
<section class="phero phero--about">
  <div class="shell phero__grid">
    <div>
      <span class="eyebrow mono">About</span>
      <h1>Owner-run.<br><em>Two crews. One standard.</em></h1>
      <p>Fresh Lines Painting is Kristina Marie's company, working out of Irmo across the South Carolina Midlands.</p>
    </div>
    <figure class="phero__fig phero__fig--portrait"><img src="assets/opt/about.webp" alt="Fresh Lines Painting project" width="${M.about.w}" height="${M.about.h}" decoding="async"></figure>
  </div>
</section>

<section class="sec">
  <div class="shell about__grid">
    <div class="about__lead">
      <span class="eyebrow mono">The story</span>
      <h2 class="h2">Eight years in Ohio.<br><em>A fresh start in Irmo.</em></h2>
      <p class="lead">Kristina ran a painting company in Ohio for eight years before relocating to South Carolina. She brought the crews, the standards and the habit of answering her own phone.</p>
      <p>Fresh Lines is deliberately small: two crews, a 40-mile radius, and a calendar that is not overbooked. That is what makes it possible to finish a job before starting the next one, and to come back if something is not right.</p>
      <p>The work is mostly repeat and referral — realtors, property managers and homeowners who saw a room at a friend's house. There is no call centre and no sales script. You talk to the person who will walk the job.</p>
    </div>
    <figure class="about__fig"><img src="assets/opt/work-07.webp" alt="Interior painting detail" width="${M['work-07'].w}" height="${M['work-07'].h}" loading="lazy" decoding="async"><figcaption class="mono">Interior repaint · Midlands</figcaption></figure>
  </div>
</section>

<section class="sec sec--tint">
  <div class="shell">
    <div class="sechead"><span class="eyebrow mono">What we believe</span><h2 class="h2">Three rules we<br><em>do not bend.</em></h2></div>
    <ul class="rules">
      <li><span class="mono">01</span><h3>Prep is not optional</h3><p>If a surface is not ready, paint will not fix it. We would rather add a day than hand over a finish that fails in a year.</p></li>
      <li><span class="mono">02</span><h3>The quote is the quote</h3><p>No surprise line items at the end. If we missed something, that is our problem to solve, not a new invoice for you.</p></li>
      <li><span class="mono">03</span><h3>Leave it cleaner</h3><p>Every day ends with a vacuum and a clear path through the house. The job is not finished until the room is usable.</p></li>
    </ul>
  </div>
</section>

<section class="sec">
  <div class="shell two two--rev">
    <figure class="frame"><img src="assets/opt/detail.webp" alt="Exterior painting project in the Midlands" width="${M.detail.w}" height="${M.detail.h}" loading="lazy" decoding="async"><figcaption class="mono">Exterior repaint · Irmo</figcaption></figure>
    <div>
      <span class="eyebrow mono">Where we work</span>
      <h2 class="h2">A local crew,<br><em>not a drive-in.</em></h2>
      <p>We work a 40-mile radius from Irmo: Columbia, Lexington, Chapin, Ballentine, Blythewood, West Columbia and Cayce. If you are just outside that ring, ask — we will tell you honestly whether we can service it well.</p>
      <a class="btn btn--solid" href="${url(1, 'contact/')}">Ask about your area <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `About Fresh Lines Painting | Irmo, SC`,
  desc: 'Meet Fresh Lines Painting LLC — owner-run by Kristina Marie, two crews, eight years of experience, serving Irmo, Columbia and the Midlands.',
  canonical: 'about/',
  og: 'about.webp',
  active: 'about',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['About', 'about/']])] },
}, aboutBody);

/* ------------------------------------------------------------------ */
/* contact                                                            */
/* ------------------------------------------------------------------ */

const contactBody = `
<section class="phero phero--contact">
  <div class="shell">
    <span class="eyebrow mono">Contact</span>
    <h1>Tell us about<br><em>the room.</em></h1>
    <p>Send the space, the timeline and a photo if you have one. We reply within one business day and book walkthroughs in Irmo and across the Midlands.</p>
  </div>
</section>

<section class="sec">
  <div class="shell contact__grid">
    <form class="form" action="../thank-you/" method="get" data-quote>
      <div class="form__row">
        <label>Name<input type="text" name="name" autocomplete="name" required placeholder="Your name"></label>
        <label>Phone<input type="tel" name="phone" autocomplete="tel" required placeholder="(803) 555-0123"></label>
      </div>
      <label>Email<input type="email" name="email" autocomplete="email" placeholder="you@email.com"></label>
      <div class="form__row">
        <label>Service
          <select name="service">
            <option>Interior painting</option>
            <option>Exterior painting</option>
            <option>Cabinets &amp; trim</option>
            <option>Commercial / multi-unit</option>
            <option>Colour &amp; prep</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Timeline
          <select name="timeline">
            <option>As soon as possible</option>
            <option>Within a month</option>
            <option>1–3 months</option>
            <option>Just planning</option>
          </select>
        </label>
      </div>
      <label>About the space<textarea name="message" rows="5" placeholder="Rooms, approximate size, what needs painting, anything we should know."></textarea></label>
      <button class="btn btn--solid btn--lg" type="submit">Request my estimate <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></button>
      <p class="form__fine mono">No deposit · no obligation · reply within one business day</p>
    </form>

    <aside class="contact__aside">
      <div class="cbox">
        <h3>Where we work</h3>
        <p>Irmo, Columbia, Lexington, Chapin, Ballentine, Blythewood, West Columbia and Cayce — a 40-mile radius from Irmo, SC.</p>
      </div>
      <div class="cbox">
        <h3>What to send</h3>
        <p>A photo of the room, the rough size, and whether the walls are currently painted or bare. That is enough for a useful first number.</p>
      </div>
      <div class="cbox cbox--dark">
        <h3>Who you will talk to</h3>
        <p>Your request goes straight to Kristina, not a call centre or a sales script. She replies within one business day to book the walkthrough.</p>
        <span class="mono">Owner · Fresh Lines Painting LLC</span>
      </div>
    </aside>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Contact Fresh Lines Painting | Irmo & Columbia, SC`,
  desc: 'Request a free painting estimate in Irmo, Columbia, Lexington and the Midlands. Interior, exterior, cabinet and commercial painting.',
  canonical: 'contact/',
  og: 'hero.webp',
  active: 'contact',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Contact', 'contact/']])] },
}, contactBody);

/* ------------------------------------------------------------------ */
/* thank you + 404                                                    */
/* ------------------------------------------------------------------ */

const thanksBody = `
<section class="thanks">
  <div class="shell thanks__in">
    <span class="eyebrow mono">Request received</span>
    <h1>Got it.<br><em>We will be in touch.</em></h1>
    <p>Thanks — your estimate request is in. Kristina or one of the crew will reply within one business day to book a walkthrough.</p>
    <div class="thanks__acts">
      <a class="btn btn--solid" href="${url(1, '')}">Back to home <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a class="btn btn--line" href="${url(1, 'work/')}">See recent work</a>
    </div>
  </div>
</section>
`;

page({
  d: 1,
  title: `Request received | ${S.name}`,
  desc: 'Your painting estimate request has been received. Fresh Lines Painting will reply within one business day.',
  canonical: 'thank-you/',
  og: 'hero.webp',
  active: '',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz()] },
}, thanksBody);

const notFoundBody = `
<section class="thanks">
  <div class="shell thanks__in">
    <span class="eyebrow mono">404</span>
    <h1>That page<br><em>needs a fresh coat.</em></h1>
    <p>The link may be old or mistyped. Head back to the home page, or ask us directly and we will point you the right way.</p>
    <div class="thanks__acts">
      <a class="btn btn--solid" href="/${REPO}/">Back to home <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a class="btn btn--line" href="/${REPO}/contact/">Contact us</a>
    </div>
  </div>
</section>
`;

{
  const out = path.join(ROOT, '404.html');
  const html = head({
    d: 0,
    title: `Page not found | ${S.name}`,
    desc: 'That page could not be found.',
    canonical: '404.html',
    og: 'hero.webp',
    base: `/${REPO}/`,
    jsonld: JSON.stringify({ '@context': 'https://schema.org', '@graph': [biz()] }),
  }).replace('<meta name="description"', '<meta name="robots" content="noindex">\n<meta name="description"');
  fs.writeFileSync(out, `${html}
<main id="main">${notFoundBody}</main>
${foot(0)}
<script src="/${REPO}/script.js" defer></script>
</body>
</html>
`);
  console.log('wrote 404.html');
}

/* ------------------------------------------------------------------ */
/* sitemap, robots, llms, .nojekyll                                   */
/* ------------------------------------------------------------------ */

const routes = [['', '1.0', 'monthly'], ['services/', '0.9', 'monthly'], ['work/', '0.8', 'monthly'], ['process/', '0.7', 'yearly'], ['about/', '0.7', 'yearly'], ['contact/', '0.9', 'yearly']];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([p, pr, f]) => `  <url><loc>${ORIGIN}/${p}</loc><changefreq>${f}</changefreq><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, 'llms.txt'), `# ${S.name}\nInterior and exterior painting, cabinet refinishing and commercial repainting in Irmo, Columbia and the South Carolina Midlands.\n\n## Pages\n- Home: ${ORIGIN}/\n- Services: ${ORIGIN}/services/\n- Work: ${ORIGIN}/work/\n- Process: ${ORIGIN}/process/\n- About: ${ORIGIN}/about/\n- Contact: ${ORIGIN}/contact/\n`);
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');
console.log('wrote sitemap.xml, robots.txt, llms.txt, .nojekyll');
