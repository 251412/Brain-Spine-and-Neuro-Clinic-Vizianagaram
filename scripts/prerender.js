import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { seoServices } from '../src/data/seoServicesData.js';
import { 
  SITE_URL, 
  getPhysicianSchema, 
  getClinicSchema, 
  getFAQSchema, 
  getMedicalProcedureSchema, 
  getMedicalConditionSchema,
  getArticleSchema 
} from '../src/data/seoSchemas.js';
import { homeFaqs } from '../src/data/homeFaqsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Please run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(templatePath, 'utf8');

const leadDoctor = {
  nameEn: "Dr. Reddi Sankara Rao",
  nameTe: "డా. రెడ్డి శంకర రావు",
  qualifications: "MBBS, MS, MCh (Neurosurgery) - Narayana Hrudayalaya, Bengaluru",
  councilReg: "APMC / 85415 (Andhra Pradesh Medical Council - Verified)",
  experienceYears: 11
};

// Define all routes to prerender
const routes = [
  // 1. Homepage
  {
    path: '/',
    title: 'Dr. Reddi Sankara Rao – Neurosurgeon in Vizianagaram | Brain & Spine Surgeon',
    description: 'Consult Dr. Reddi Sankara Rao, Neurosurgeon and Brain & Spine Surgeon in Vizianagaram. Expert consultation for brain, spine and neurological conditions.',
    h1: 'Dr. Reddi Sankara Rao – Neurosurgeon in Vizianagaram | Brain & Spine Surgeon',
    schema: [
      getClinicSchema(),
      getPhysicianSchema(leadDoctor),
      getFAQSchema(homeFaqs.map(f => ({ question: f.qEn, answer: f.aEn })))
    ],
    contentSnippet: `
      <header>
        <h1>Dr. Reddi Sankara Rao – Neurosurgeon in Vizianagaram | Brain & Spine Surgeon</h1>
        <p>Consult Dr. Reddi Sankara Rao for precision brain surgery, endoscopic spine surgery, sciatica & slip disc treatment in Vizianagaram and Bobbili.</p>
        <p>Phone: +91 99089 81669 | 24x7 Emergency Helpline</p>
      </header>
      <section>
        <h2>Senior Consultant Neurosurgeon – Qualifications & Council Registration</h2>
        <p>MBBS, MS, MCh (Neurosurgery) - Narayana Hrudayalaya, Bengaluru. Andhra Pradesh Medical Council APMC / 85415 Verified.</p>
      </section>
    `
  },

  // 2. Doctor Profile
  {
    path: '/dr-reddi-sankara-rao',
    title: 'Dr. Reddi Sankara Rao | Neurosurgeon & Brain Spine Surgeon',
    description: 'Comprehensive profile of Dr. Reddi Sankara Rao, Senior Consultant Neurosurgeon in Vizianagaram. Narayana Hrudayalaya trained, APMC verified, 11+ years experience.',
    h1: 'Dr. Reddi Sankara Rao – Chief Neurosurgeon & Spine Care Specialist',
    schema: [
      getPhysicianSchema(leadDoctor),
      getClinicSchema()
    ],
    contentSnippet: `
      <article>
        <h1>Dr. Reddi Sankara Rao – Chief Neurosurgeon & Spine Care Specialist</h1>
        <p>MBBS, MS, MCh (Neurosurgery) - Narayana Hrudayalaya, Bengaluru. Verified APMC / 85415.</p>
        <p>Specializing in Complex Brain Surgery, Minimally Invasive Spine Surgery, and Endoscopic Lumbar Discectomy in Vizianagaram.</p>
      </article>
    `
  },

  // 3. Vizianagaram Location Page
  {
    path: '/neurosurgeon-in-vizianagaram',
    title: 'Neurosurgeon in Vizianagaram | Dr. Reddi Sankara Rao',
    description: 'Consult Dr. Reddi Sankara Rao, Senior Consultant Neurosurgeon in Vizianagaram at Gumchi Junction Clinic. Expert brain, spine, slip disc & 24x7 trauma care.',
    h1: 'Neurosurgeon in Vizianagaram – Dr. Reddi Sankara Rao',
    schema: [
      getPhysicianSchema(leadDoctor),
      getClinicSchema()
    ],
    contentSnippet: `
      <section>
        <h1>Neurosurgeon in Vizianagaram – Dr. Reddi Sankara Rao</h1>
        <p>Brain Spine & Neuro Clinic, Gumchi Junction, Sankaramatam Road, Vizianagaram – 535002.</p>
        <p>OPD Hours: Monday – Saturday: 09:30 AM – 06:30 PM. 24x7 Emergency Services Available.</p>
        <p>Phone: +91 99089 81669 / +91 92814 00151</p>
      </section>
    `
  },

  // 4. Bobbili Location Page
  {
    path: '/neurosurgeon-in-bobbili',
    title: 'Neurosurgeon in Bobbili | Dr. Reddi Sankara Rao',
    description: 'Expert neurosurgery consultation in Bobbili by Dr. Reddi Sankara Rao every Tuesday and Friday (4 PM - 9 PM) at RTC Complex Ingate branch. Spine & brain care.',
    h1: 'Neurosurgeon in Bobbili – Dr. Reddi Sankara Rao',
    schema: [
      getPhysicianSchema(leadDoctor),
      getClinicSchema()
    ],
    contentSnippet: `
      <section>
        <h1>Neurosurgeon in Bobbili – Dr. Reddi Sankara Rao</h1>
        <p>Outpatient Consultation Branch: Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili – 535558.</p>
        <p>Consultations: Tuesday & Friday (04:00 PM – 09:00 PM). Phone: +91 99511 42275.</p>
        <p>Note: Bobbili is a specialized outpatient consultation clinic; surgical procedures are operated at the main Vizianagaram hospital.</p>
      </section>
    `
  },

  // 5. General Clinical Pages
  {
    path: '/about',
    title: 'About Dr. Reddi Sankara Rao | Brain Spine & Neuro Clinic',
    description: 'Learn about Dr. Reddi Sankara Rao, Senior Consultant Neurosurgeon in Vizianagaram. Advanced brain & spine surgical care with precision and compassion.',
    h1: 'About Dr. Reddi Sankara Rao – Senior Consultant Neurosurgeon'
  },
  {
    path: '/specialities',
    title: 'Specialities & Treatments | Brain Spine & Neuro Clinic',
    description: 'Explore comprehensive clinical disciplines: Neurology, Neurosurgery, Spine Care, Stroke Management, Brain Tumour Care, Epilepsy, and Chronic Nerve Pain.',
    h1: 'Specialities & Advanced Surgical Disciplines'
  },
  {
    path: '/doctors',
    title: 'Doctors & Specialists | Brain Spine & Neuro Clinic',
    description: 'Meet our lead specialist Dr. Reddi Sankara Rao, Narayana Hrudayalaya Bengaluru alumnus with APMC verified credentials.',
    h1: 'Doctors & Clinical Leadership'
  },
  {
    path: '/appointment',
    title: 'Book Doctor Appointment | Dr. Reddi Sankara Rao',
    description: 'Book an outpatient consultation slot with Dr. Reddi Sankara Rao at Gumchi Junction Clinic, Vizianagaram or Bobbili Branch.',
    h1: 'Book an Outpatient Consultation'
  },
  {
    path: '/emergency',
    title: '24/7 Emergency Neuro Care | Brain Spine & Neuro Clinic',
    description: '24/7 rapid neuro-trauma, road accident head injury, and acute stroke response in Vizianagaram. Emergency Helpline: 9908981669.',
    h1: '24/7 Emergency Neurosurgical Protocols'
  },
  {
    path: '/gallery',
    title: 'Facilities & Operation Suite Gallery | Brain Spine & Neuro Clinic',
    description: 'View photos of our advanced neurosurgical operative microscope, equipment suite, waiting lounge, and clinic interiors in Vizianagaram.',
    h1: 'Clinic Facilities & Surgical Infrastructure'
  },
  {
    path: '/blog',
    title: 'Health Blog & Patient Education | Dr. Reddi Sankara Rao',
    description: 'Medically reviewed health guides by Dr. Reddi Sankara Rao on stroke warning signs, endoscopic spine surgery, and sciatica pain relief.',
    h1: 'Health Blog & Patient Education'
  },
  {
    path: '/contact',
    title: 'Contact Brain Spine & Neuro Clinic | Vizianagaram & Bobbili',
    description: 'Get in touch with Brain Spine & Neuro Clinic for clinical appointments, Google Maps directions, and 24x7 emergency helpline.',
    h1: 'Contact Us & Clinic Directions'
  },

  // 6. Blog Posts
  {
    path: '/blog/recognizing-hidden-signs-of-stroke-be-fast',
    title: 'Recognizing the Hidden Signs of Stroke: What BE-FAST Really Means | Health Blog',
    description: 'Every 40 seconds, someone experiences an acute stroke. Understanding the early, subtle warning signs and acting within the 4.5-hour golden window can save lives.',
    h1: 'Recognizing the Hidden Signs of Stroke: What BE-FAST Really Means'
  },
  {
    path: '/blog/endoscopic-lumbar-discectomy-vs-traditional-open-spine-surgery',
    title: 'Endoscopic Lumbar Discectomy vs Open Spine Surgery | Health Blog',
    description: 'How stitchless endoscopic spine surgery through an 8mm cannula under local anesthesia differs from traditional open spine surgery.',
    h1: 'Endoscopic Lumbar Discectomy: What Makes It Different from Traditional Open Spine Surgery?'
  },
  {
    path: '/blog/understanding-sciatica-root-causes-myths-vs-realities',
    title: 'Understanding Sciatica: Root Causes, Myths vs Realities | Health Blog',
    description: 'A comprehensive medical guide by Dr. Reddi Sankara Rao examining the anatomical causes of sciatica and modern treatment options.',
    h1: 'Understanding Sciatica: Root Causes, Myths vs Realities, and Long-Term Relief'
  }
];

// Append all 18 SEO Service Pages
seoServices.forEach((svc) => {
  const pageCanonical = `${SITE_URL}/${svc.slug}/`;
  routes.push({
    path: `/${svc.slug}`,
    title: svc.seoTitleEn,
    description: svc.metaDescriptionEn,
    h1: svc.h1En,
    schema: [
      getPhysicianSchema(leadDoctor),
      getClinicSchema(),
      getMedicalProcedureSchema({
        name: svc.titleEn,
        description: svc.metaDescriptionEn,
        procedureType: svc.category.includes('Surgery') ? 'SurgicalProcedure' : 'MedicalTherapy',
        bodyLocation: svc.category.includes('Brain') ? 'Brain' : 'Spine',
        url: pageCanonical
      }),
      getMedicalConditionSchema({
        name: svc.titleEn,
        description: svc.whatIsEn,
        possibleTreatment: svc.treatmentsEn,
        url: pageCanonical
      }),
      getFAQSchema(svc.faqsEn)
    ],
    contentSnippet: `
      <article>
        <header>
          <h1>${svc.h1En}</h1>
          <p>${svc.introEn}</p>
        </header>
        <section>
          <h2>What is ${svc.titleEn}?</h2>
          <p>${svc.whatIsEn}</p>
        </section>
        <section>
          <h2>Common Symptoms</h2>
          <ul>${svc.symptomsEn.map(s => `<li>${s}</li>`).join('')}</ul>
        </section>
        <section>
          <h2>Causes and Risk Factors</h2>
          <ul>${svc.causesEn.map(c => `<li>${c}</li>`).join('')}</ul>
        </section>
        <section>
          <h2>Available Treatment Options</h2>
          <ul>${svc.treatmentsEn.map(t => `<li>${t}</li>`).join('')}</ul>
        </section>
        <section>
          <h2>Consultation & Clinic Details</h2>
          <p>Consult Dr. Reddi Sankara Rao at Gumchi Junction Clinic, Vizianagaram or Bobbili Branch.</p>
          <p>Phone: +91 99089 81669 | Emergency 24x7</p>
        </section>
      </article>
    `
  });
});

console.log(`Prerendering ${routes.length} static SEO HTML pages into dist/...`);

routes.forEach((route) => {
  const cleanPath = route.path === '/' ? '' : route.path.replace(/^\/+|\/+$/g, '');
  const canonicalUrl = `${SITE_URL}/${cleanPath ? cleanPath + '/' : ''}`;

  let html = baseHtml;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
  );

  // 3. Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 4. Update Open Graph & Twitter Tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`);

  // 5. Replace / Inject JSON-LD Schema
  if (route.schema && route.schema.length > 0) {
    const jsonLdString = JSON.stringify(route.schema.length === 1 ? route.schema[0] : route.schema);
    const schemaTag = `<script type="application/ld+json">\n${jsonLdString}\n</script>`;
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, schemaTag);
  }

  // 6. Inject semantic content snippet into #root for non-JS web crawlers
  if (route.contentSnippet) {
    const semanticRoot = `<div id="root">${route.contentSnippet}</div>`;
    html = html.replace(/<div id="root"><\/div>/i, semanticRoot);
  }

  // Write file
  if (!cleanPath) {
    // Root index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
  } else {
    const targetDir = path.join(distDir, cleanPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  }
});

console.log(`✓ Successfully prerendered ${routes.length} routes with custom titles, descriptions, canonicals, JSON-LD schemas, and crawler content!`);
