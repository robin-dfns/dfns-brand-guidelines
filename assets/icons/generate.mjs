#!/usr/bin/env node
/**
 * Regenerates icon-data.js + Icon.d.ts from the official Heroicons npm package.
 *
 *   node assets/icons/generate.mjs
 *
 * DFNS bundles the three solid families only — solid 24, mini 20, micro 16
 * (upstream: 24/solid, 20/solid, 16/solid). Outline is forbidden by the brand
 * guidelines and is deliberately not bundled.
 *
 * Keys are `Heroicons<Family><Name>`, where <Name> matches the @heroicons/react
 * export name minus its `Icon` suffix: kebab-case → PascalCase, digits glued to
 * the preceding token, a letter following a digit uppercased.
 *   squares-2x2 → Squares2X2 · square-3-stack-3d → Square3Stack3D · cog-6-tooth → Cog6Tooth
 *
 * No dependencies: the tarball is fetched from the registry and unpacked in-process.
 */
import { gunzipSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const VERSION = '2.2.0';
const TARBALL = `https://registry.npmjs.org/heroicons/-/heroicons-${VERSION}.tgz`;
const FAMILIES = [
  { family: 'Solid', dir: '24/solid', viewBox: '0 0 24 24' },
  { family: 'Mini',  dir: '20/solid', viewBox: '0 0 20 20' },
  { family: 'Micro', dir: '16/solid', viewBox: '0 0 16 16' },
];
const HERE = dirname(fileURLToPath(import.meta.url));

/** Minimal tar reader — npm tarballs use short paths, so the 100-byte name field suffices. */
function untar(buf) {
  const files = new Map();
  for (let off = 0; off + 512 <= buf.length; ) {
    const name = buf.toString('utf8', off, off + 100).replace(/\0.*$/, '');
    if (!name) { off += 512; continue; }
    const size = parseInt(buf.toString('utf8', off + 124, off + 136).replace(/\0.*$/, '').trim() || '0', 8);
    const type = buf.toString('utf8', off + 156, off + 157);
    const start = off + 512;
    if (type === '0' || type === '') files.set(name, buf.subarray(start, start + size));
    off = start + Math.ceil(size / 512) * 512;
  }
  return files;
}

const pascal = (kebab) => kebab
  .split('-')
  .map((t) => (t ? t[0].toUpperCase() + t.slice(1) : t))
  .map((t) => t.replace(/(?<=[0-9])([a-z])/g, (c) => c.toUpperCase()))
  .join('');

/**
 * Strips the <svg> wrapper and pushes the paint down onto every shape, so a body
 * stays self-sufficient inside a bare <svg> (how Icon.jsx and the docs site render it).
 */
const toBody = (svg) => svg
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .trim()
  .replace(/\s+/g, ' ')
  .replace(/<(path|circle|rect|ellipse|line|polyline|polygon)\b[^>]*?\/?>/g, (tag) => (
    tag.endsWith('/>')
      ? `${tag.slice(0, -2).trimEnd()} fill="currentColor"/>`
      : `${tag.slice(0, -1)} fill="currentColor">`
  ));

const res = await fetch(TARBALL);
if (!res.ok) throw new Error(`registry returned ${res.status} for ${TARBALL}`);
const files = untar(gunzipSync(Buffer.from(await res.arrayBuffer())));

const icons = [];
for (const { family, dir, viewBox } of FAMILIES) {
  const prefix = `package/${dir}/`;
  const names = [...files.keys()]
    .filter((p) => p.startsWith(prefix) && p.endsWith('.svg'))
    .sort();
  if (!names.length) throw new Error(`no svg found under ${prefix}`);
  for (const path of names) {
    const key = `Heroicons${family}${pascal(path.slice(prefix.length, -4))}`;
    icons.push({ key, viewBox, body: toBody(files.get(path).toString('utf8')) });
  }
  console.log(`${family.padEnd(5)} ${dir.padEnd(9)} ${names.length} icons`);
}

const header = [
  `// Heroicons v${VERSION} — generated from the official npm package \`heroicons@${VERSION}\`.`,
  `// Regenerate with: node assets/icons/generate.mjs — do not hand-edit.`,
  `// ${icons.length} icon(s) as { viewBox, body } SVG-markup entries, across the three`,
  `// solid families (solid 24 / mini 20 / micro 16). Outline is not bundled.`,
  `// Render via the sibling Icon.jsx: <Icon name="HeroiconsSolidWallet" size={24} />`,
].join('\n');

writeFileSync(join(HERE, 'icon-data.js'), `${header}\nexport default {\n${
  icons.map((i) => `  ${JSON.stringify(i.key)}: { viewBox: ${JSON.stringify(i.viewBox)}, body: ${JSON.stringify(i.body)} },`).join('\n')
}\n};\n`);

writeFileSync(join(HERE, 'Icon.d.ts'), `import * as React from 'react';\nexport type IconName =\n${
  icons.map((i) => `  | ${JSON.stringify(i.key)}`).join('\n')
};\nexport interface IconProps extends React.SVGProps<SVGSVGElement> {\n  name: IconName;\n  size?: number | string;\n}\nexport declare const Icon: React.FC<IconProps>;\nexport default Icon;\n`);

console.log(`\n${icons.length} icons → icon-data.js + Icon.d.ts`);
