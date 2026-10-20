/**
 * Builds public/og-image.jpg, the 1200x630 picture shown when a page without
 * its own image is shared (Facebook, LinkedIn, WhatsApp, X).
 * Made from the real logo (src/assets/Logo.svg) plus a tagline.
 * Run: node scripts/make-og-image.mjs
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const W = 1200;
const H = 630;
const NAVY = "#115088";
const ORANGE = "#F08020";

const logo = await sharp(path.join(ROOT, "src/assets/Logo.svg"), { density: 900 })
  .resize({ width: 760 })
  .png()
  .toBuffer();
const { height: logoH } = await sharp(logo).metadata();

const text = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .t { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; }
  </style>
  <rect x="${W / 2 - 60}" y="318" width="120" height="6" rx="3" fill="${ORANGE}"/>
  <text x="50%" y="398" text-anchor="middle" class="t" font-size="50" font-weight="700" fill="${NAVY}">SIA Security Courses, Licences &amp; Jobs</text>
  <text x="50%" y="458" text-anchor="middle" class="t" font-size="32" font-weight="600" fill="${ORANGE}">Accredited training at centres across the UK</text>
  <rect x="0" y="${H - 80}" width="${W}" height="80" fill="${NAVY}"/>
  <text x="50%" y="${H - 29}" text-anchor="middle" class="t" font-size="30" font-weight="600" fill="#ffffff">courses4me.co.uk</text>
</svg>`);

await sharp({ create: { width: W, height: H, channels: 3, background: "#ffffff" } })
  .composite([
    { input: logo, left: Math.round((W - 760) / 2), top: Math.round(150 - logoH / 2) },
    { input: text, left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og-image.jpg"));

console.log("public/og-image.jpg written");
