import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

console.log('=== SEO & TECHNICAL VERIFICATION SUITE ===\n');

// 1. Check robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  const hasSitemap = robotsContent.includes('Sitemap: https://www.drreddisankararao.com/sitemap.xml');
  console.log(`[PASS] robots.txt exists and references sitemap.xml: ${hasSitemap}`);
} else {
  console.error('[FAIL] robots.txt missing in dist');
}

// 2. Check sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
  console.log(`[PASS] sitemap.xml exists with ${urlCount} indexed URLs.`);
} else {
  console.error('[FAIL] sitemap.xml missing in dist');
}

// 3. Check Prerendered HTML files and JSON-LD schema validity
const checkPaths = [
  '',
  'dr-reddi-sankara-rao',
  'neurosurgeon-in-vizianagaram',
  'neurosurgeon-in-bobbili',
  'sciatica-treatment-in-vizianagaram',
  'slip-disc-treatment-in-vizianagaram',
  'endoscopic-lumbar-discectomy-in-vizianagaram',
  'brain-tumor-surgery-in-vizianagaram',
  'head-injury-treatment',
  'stroke-management',
  'trigeminal-neuralgia-treatment'
];

let allPassed = true;

checkPaths.forEach((sub) => {
  const filePath = sub ? path.join(distDir, sub, 'index.html') : path.join(distDir, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] Prerendered file missing: ${filePath}`);
    allPassed = false;
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const hasTitle = /<title>(.+?)<\/title>/i.test(html);
  const hasDesc = /<meta name="description" content="(.+?)"/i.test(html);
  const hasCanonical = /<link rel="canonical" href="(.+?)"/i.test(html);
  const hasH1 = /<h1>(.+?)<\/h1>/i.test(html);
  const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);

  let schemaValid = false;
  if (schemaMatch && schemaMatch[1]) {
    try {
      JSON.parse(schemaMatch[1]);
      schemaValid = true;
    } catch (e) {
      console.error(`[FAIL] Invalid JSON-LD in ${sub || 'home'}:`, e.message);
      allPassed = false;
    }
  }

  console.log(`Route [/${sub}]: Title: ${hasTitle} | Desc: ${hasDesc} | Canonical: ${hasCanonical} | H1: ${hasH1} | JSON-LD Valid: ${schemaValid}`);
});

if (allPassed) {
  console.log('\n=== ALL TECHNICAL SEO TESTS PASSED SUCCESSFULLY! ===');
} else {
  console.error('\n=== SOME TESTS FAILED ===');
  process.exit(1);
}

