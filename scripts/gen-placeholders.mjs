/* eslint-disable */
// Generator placeholder bergaya "arsip tua" — SVG.
// Dipakai: node scripts/gen-placeholders.mjs
// Menghasilkan file ke src/assets/{figures,artifacts,documents}/*.svg
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets')

// ── Palet arsip ──
const BG = '#12141c'
const PAPER = '#e9e0cd'
const INK = '#2b2620'
const GOLD = '#c8a24a'
const RED = '#9e3b2e'
const FONT = "Georgia, 'Times New Roman', serif"
const MONO = "'Courier New', monospace"

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function shadeFrame(label, sub) {
  // Bingkai gelap ruang arsip — dipakai untuk tokoh & dokumen
  return `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="560" viewBox="0 0 480 560">
  <defs>
    <radialGradient id="glow" cx="35%" cy="25%" r="85%">
      <stop offset="0%" stop-color="#252a3d"/>
      <stop offset="100%" stop-color="${BG}"/>
    </radialGradient>
    <pattern id="grain" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="4" fill="transparent"/>
      <circle cx="1" cy="1" r="0.6" fill="#ffffff" opacity="0.05"/>
      <circle cx="3" cy="3" r="0.5" fill="#000000" opacity="0.12"/>
    </pattern>
  </defs>
  <rect width="480" height="560" fill="url(#glow)"/>
  <rect width="480" height="560" fill="url(#grain)"/>
  <rect x="18" y="18" width="444" height="524" fill="none" stroke="${GOLD}" stroke-opacity="0.35" stroke-width="2"/>
  <rect x="26" y="26" width="428" height="508" fill="none" stroke="${GOLD}" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="4 5"/>
  <text x="240" y="58" text-anchor="middle" font-family="${MONO}" font-size="13" letter-spacing="4" fill="${GOLD}">ARSIP RAHASIA</text>
  <text x="240" y="80" text-anchor="middle" font-family="${MONO}" font-size="10" letter-spacing="3" fill="#8a877f">★ STAMP VERIFIED ARCHIVE ★</text>
  <rect x="112" y="118" width="256" height="300" fill="#1b1e2a" stroke="${GOLD}" stroke-opacity="0.5" stroke-width="2"/>
  <rect x="120" y="126" width="240" height="284" fill="#14161f"/>
  <text x="240" y="268" text-anchor="middle" font-size="120" opacity="0.9">${escapeXml(sub)}</text>
  <text x="126" y="152" font-family="${MONO}" font-size="9" letter-spacing="2" fill="${GOLD}">FILE ARCHIVE</text>
  <text x="240" y="468" text-anchor="middle" font-family="${FONT}" font-size="30" font-weight="bold" fill="#f0ead8">${escapeXml(label)}</text>
  <line x1="120" y1="488" x2="360" y2="488" stroke="${GOLD}" stroke-opacity="0.4"/>
  <text x="240" y="512" text-anchor="middle" font-family="${MONO}" font-size="11" letter-spacing="3" fill="#9a968c">ARSIP RAHASIA V2 — ${new Date().getFullYear()}</text>
</svg>`
}

function artifactFrame(label, emoji, cat) {
  // Bingkai koleksi artefak
  return `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="560" viewBox="0 0 480 560">
  <defs>
    <radialGradient id="glow" cx="35%" cy="25%" r="85%">
      <stop offset="0%" stop-color="#232838"/>
      <stop offset="100%" stop-color="${BG}"/>
    </radialGradient>
    <pattern id="grain" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="4" fill="transparent"/>
      <circle cx="1" cy="1" r="0.6" fill="#ffffff" opacity="0.05"/>
      <circle cx="3" cy="3" r="0.5" fill="#000000" opacity="0.12"/>
    </pattern>
  </defs>
  <rect width="480" height="560" fill="url(#glow)"/>
  <rect width="480" height="560" fill="url(#grain)"/>
  <rect x="40" y="76" width="400" height="360" fill="#11131a" stroke="#3a3f52" stroke-width="2"/>
  <rect x="48" y="84" width="384" height="344" fill="#171a24"/>
  <text x="240" y="272" text-anchor="middle" font-size="150" opacity="0.95">${escapeXml(emoji)}</text>
  <text x="60" y="112" font-family="${MONO}" font-size="10" letter-spacing="3" fill="${GOLD}">${escapeXml(cat)}</text>
  <text x="240" y="500" text-anchor="middle" font-family="${FONT}" font-size="26" font-weight="bold" fill="#f0ead8">${escapeXml(label)}</text>
  <text x="240" y="528" text-anchor="middle" font-family="${MONO}" font-size="10" letter-spacing="3" fill="#9a968c">KOLEKSI ARSIP RAHASIA</text>
  <circle cx="420" cy="420" r="34" fill="none" stroke="${RED}" stroke-width="3" opacity="0.8"/>
  <text x="420" y="426" text-anchor="middle" font-family="${MONO}" font-size="9" fill="${RED}" opacity="0.9">RAHASIA</text>
</svg>`
}

function docFrame(label, code, klass) {
  // Dokumen classified — kertas tua + stempel
  return `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="560" viewBox="0 0 480 560">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${PAPER}"/>
      <stop offset="100%" stop-color="#cbbfa6"/>
    </linearGradient>
    <pattern id="grain" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="4" fill="transparent"/>
      <circle cx="1" cy="1" r="0.6" fill="#6b5f4a" opacity="0.14"/>
      <circle cx="3" cy="3" r="0.5" fill="#5a4f3c" opacity="0.16"/>
    </pattern>
  </defs>
  <rect width="480" height="560" fill="#0c0e13"/>
  <rect x="58" y="40" width="364" height="480" fill="url(#paper)" rx="4"/>
  <rect x="58" y="40" width="364" height="480" fill="url(#grain)" rx="4"/>
  <circle cx="106" cy="64" r="5" fill="#4a4033"/>
  <circle cx="376" cy="64" r="5" fill="#4a4033"/>
  <circle cx="106" cy="496" r="5" fill="#4a4033"/>
  <circle cx="376" cy="496" r="5" fill="#4a4033"/>
  <text x="240" y="118" text-anchor="middle" font-family="${MONO}" font-size="15" letter-spacing="6" fill="${INK}">${escapeXml(code)}</text>
  <line x1="100" y1="140" x2="380" y2="140" stroke="${INK}" stroke-opacity="0.4" stroke-width="2"/>
  <text x="240" y="196" text-anchor="middle" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}">${escapeXml(label)}</text>
  <text x="240" y="236" text-anchor="middle" font-family="${MONO}" font-size="11" letter-spacing="4" fill="#7a6a4f">DOKUMEN KLASIFIKASI</text>
  <text x="240" y="286" text-anchor="middle" font-family="${MONO}" font-size="14" letter-spacing="8" fill="${RED}" font-weight="bold">${escapeXml(klass)}</text>
  <rect x="140" y="330" width="200" height="110" rx="6" fill="none" stroke="${RED}" stroke-width="4" opacity="0.85" transform="rotate(-8 240 385)"/>
  <text x="240" y="382" text-anchor="middle" font-family="${MONO}" font-size="22" font-weight="bold" letter-spacing="3" fill="${RED}" opacity="0.9" transform="rotate(-8 240 385)">VERIFIED</text>
  <text x="240" y="408" text-anchor="middle" font-family="${MONO}" font-size="14" letter-spacing="5" fill="${RED}" opacity="0.9" transform="rotate(-8 240 385)">ARCHIVE</text>
  <text x="240" y="478" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-style="italic" fill="#6b5f4a">Dokumen asli tersimpan dalam brankas nasional</text>
</svg>`
}

// ── Data tokoh: [nama file, label, emoji/warna] ──
const figures = [
  ['soetomo', 'dr. Soetomo', '🩺'],
  ['wahidin', 'Wahidin Soedirohoesodo', '📚'],
  ['tjokroaminoto', 'H.O.S. Tjokroaminoto', '🎙️'],
  ['douwes-dekker', 'Ernest Douwes Dekker', '✒️'],
  ['cipto', 'Cipto Mangunkusumo', '⚕️'],
  ['ki-hajar', 'Ki Hajar Dewantara', '🏫'],
  ['ahmad-dahlan', 'K.H. Ahmad Dahlan', '🌙'],
  ['tirto', 'Tirto Adhi Soerjo', '📰'],
  ['soekarno', 'Soekarno', '🎤'],
  ['hatta', 'Mohammad Hatta', '📈'],
  ['tan-malaka', 'Tan Malaka', '🔥'],
  ['sjahrir', 'Sutan Sjahrir', '🕊️'],
  ['soepratman', 'W.R. Soepratman', '🎼'],
  ['kartini', 'R.A. Kartini', '🌅'],
]

// ── Data artefak: [nama file, label, emoji, kategori] ──
const artifacts = [
  ['proklamasi', 'Naskah Proklamasi', '📜', 'DOKUMEN'],
  ['bendera', 'Bendera Pusaka', '🚩', 'BENDA'],
  ['mikrofon', 'Mikrofon RRI', '🎙️', 'BENDA'],
  ['asia-raya', 'Koran Asia Raja', '📰', 'KORAN'],
  ['nederlander', 'Als Ik Een Nederlander Was', '✒️', 'SURAT'],
  ['poster', 'Poster Propaganda', '🖼️', 'POSTER'],
  ['peta-1928', 'Peta Indonesia 1928', '🗺️', 'DOKUMEN'],
  ['topi-gerilya', 'Topi Pet Gerilya', '🧢', 'BENDA'],
  ['ori', 'Uang ORI I', '💵', 'BENDA'],
  ['surat-bung-karno', 'Surat Bung Karno–Hatta', '💌', 'SURAT'],
  ['foto-kongres', 'Foto Kongres Pemuda II', '📷', 'FOTO'],
  ['madilog', 'Buku Madilog', '📘', 'DOKUMEN'],
  ['lencana-budi-utomo', 'Lencana Budi Utomo', '🪙', 'BENDA'],
]

// ── Data dokumen: [nama file, label, kode, klasifikasi] ──
const documents = [
  ['awal-nasionalisme', 'Awal Nasionalisme', 'FILE 00', 'RESTRICTED'],
  ['budi-utomo', 'Budi Utomo', 'FILE 01', 'CLASSIFIED'],
  ['sarekat-islam', 'Sarekat Islam', 'FILE 02', 'CONFIDENTIAL'],
  ['indische-partij', 'Indische Partij', 'FILE 03', 'RESTRICTED'],
  ['muhammadiyah-taman-siswa', 'Muhammadiyah & Taman Siswa', 'FILE 04', 'CLASSIFIED'],
  ['perhimpunan-indonesia', 'Perhimpunan Indonesia', 'FILE 05', 'CONFIDENTIAL'],
  ['pni', 'PNI', 'FILE 06', 'RESTRICTED'],
  ['jong-java', 'Organisasi Pemuda', 'FILE 07', 'CLASSIFIED'],
  ['sumpah-pemuda', 'Sumpah Pemuda', 'FILE 08', 'REDACTED'],
  ['pers-perjuangan', 'Pers Perjuangan', 'FILE 09', 'CLASSIFIED'],
  ['strategi-perlawanan', 'Strategi Pergerakan', 'FILE 10', 'CONFIDENTIAL'],
  ['bpupki-proklamasi', 'Menuju Kemerdekaan', 'FILE 11', 'REDACTED'],
]

function write(dir, files, renderer) {
  const target = join(root, dir)
  mkdirSync(target, { recursive: true })
  for (const f of files) {
    const [file, ...rest] = f
    writeFileSync(join(target, `${file}.svg`), renderer(file, rest))
  }
}

write('figures', figures, (_f, [label, emoji]) => shadeFrame(label, emoji))
write('artifacts', artifacts, (_f, [label, emoji, cat]) => artifactFrame(label, emoji, cat))
write('documents', documents, (_f, [label, code, klass]) => docFrame(label, code, klass))

console.log('OK — placeholder SVG dibuat:')
console.log(`  figures    : ${figures.length} file`)
console.log(`  artifacts  : ${artifacts.length} file`)
console.log(`  documents  : ${documents.length} file`)