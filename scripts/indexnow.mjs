// IndexNow ping script for English with Ale
//
// Notifies search engines (Bing, Yandex, Naver, Seznam — and via shared
// IndexNow, indirectly informs AI search ecosystems including ChatGPT
// browsing) about updated URLs after each build.
//
// Protocol: https://www.indexnow.org/
// Key file:  /public/{INDEXNOW_KEY}.txt deployed and accessible at
//            https://englishwithale.com/{INDEXNOW_KEY}.txt for verification.
//
// Non-blocking: failures here don't break the build (search engines will
// catch up on next regular crawl).

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');

const HOST = 'englishwithale.com';
const INDEXNOW_KEY = '4adf9ebcc944425aa514639ab13f4ef8';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

async function extractUrls() {
  if (!existsSync(SITEMAP)) {
    console.warn(`[indexnow] sitemap not found at ${SITEMAP} — skipping ping.`);
    return [];
  }
  const xml = await readFile(SITEMAP, 'utf-8');
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1].trim()).filter(Boolean);
}

async function ping(urls) {
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  return { status: res.status, body: await res.text() };
}

async function main() {
  if (process.env.SKIP_INDEXNOW === '1') {
    console.log('[indexnow] SKIP_INDEXNOW=1 — skipping ping.');
    return;
  }
  const urls = await extractUrls();
  if (urls.length === 0) {
    console.warn('[indexnow] no URLs to submit.');
    return;
  }
  console.log(`[indexnow] submitting ${urls.length} URLs to IndexNow…`);
  try {
    const { status, body } = await ping(urls);
    if (status >= 200 && status < 300) {
      console.log(`[indexnow] OK (status ${status}). Bing/Yandex/Naver notified.`);
    } else {
      console.warn(`[indexnow] non-2xx response (status ${status}). Body: ${body}`);
    }
  } catch (err) {
    console.warn('[indexnow] ping failed (non-blocking):', err.message);
  }
}

main();
