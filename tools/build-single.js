#!/usr/bin/env node
/* Build a single self-contained HTML file (dist/MBA-Studio.html) from index.html.
   Inlines the stylesheet and every <script src> in load order, so the app runs from one
   downloaded file on any device with a browser — no server, no internet needed
   (web fonts load when online and fall back to system fonts offline).
   Usage: node tools/build-single.js */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
let html = read('index.html');

// Inline local stylesheets.
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (m, href) => {
  if (/^https?:/.test(href)) return m;
  return '<style>\n' + read(href) + '\n</style>';
});

// Inline local scripts. "</script" inside code would end the tag early, so escape it.
let count = 0;
html = html.replace(/<script src="([^"]+)"><\/script>/g, (m, src) => {
  if (/^https?:/.test(src)) return m;
  count++;
  const code = read(src).replace(/<\/script/gi, '<\\/script');
  return '<script>/* ' + src + ' */\n' + code + '\n</script>';
});

// Phone-friendly extras: theme colour and "Add to Home Screen" support when hosted.
html = html.replace('<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
  '  <meta name="theme-color" content="#4f46e5">\n' +
  '  <meta name="mobile-web-app-capable" content="yes">\n' +
  '  <meta name="apple-mobile-web-app-capable" content="yes">\n' +
  '  <meta name="apple-mobile-web-app-title" content="MBA Studio">');

const out = path.join(root, 'dist', 'MBA-Studio.html');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
const left = (html.match(/<script src="(?!https?:)/g) || []).length;
console.log('Inlined ' + count + ' scripts → dist/MBA-Studio.html (' + (fs.statSync(out).size / 1048576).toFixed(2) + ' MB)' + (left ? ' — WARNING: ' + left + ' local scripts not inlined' : ''));
