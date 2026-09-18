/**
 * IMAGE ASSET RESOLVER — Phase 9
 *
 * Pemuatan gambar dinamis menggunakan Vite's import.meta.glob.
 * Foto dimuat dari folder src/assets/figures/, src/assets/artifacts/,
 * dan src/assets/documents/. Jika file tidak ditemukan, sistem
 * mengembalikan fallback yang aman (null).
 *
 * CARA PAKAI:
 * 1. Buat folder: src/assets/figures/ , src/assets/artifacts/ , src/assets/documents/
 * 2. Simpan gambar dengan nama: soetomo.jpg, budi-utomo.jpg, dll.
 * 3. Gunakan getFigureImage('soetomo.jpg'), getArtifactImage('proklamasi.jpg'), dll.
 * 4. Jika file ada → return URL gambar; jika tidak → return null (fallback ke emoji).
 *
 * FORMAT YANG DIDUKUNG: .jpg, .jpeg, .png, .webp, .avif, .svg
 * NAMA FILE: huruf kecil, gunakan strip (-) untuk spasi, contoh: douwes-dekker.jpg
 */

// ── Tokoh (Figure) Photos ──
const figureModules = import.meta.glob<{ default: string }>(
  './figures/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true },
)

/** Mapping nama file ke URL — contoh: 'soetomo.jpg' → '/src/assets/figures/soetomo.jpg' */
const figureMap: Record<string, string> = {}
for (const [path, mod] of Object.entries(figureModules)) {
  const name = path.split('/').pop()!
  figureMap[name] = mod.default
}

/** Ambil URL foto tokoh. Return null jika tidak ada foto. */
export function getFigureImage(filename: string): string | null {
  return figureMap[filename] ?? null
}

/** Daftar foto tokoh yang tersedia (berguna untuk debugging) */
export function getAvailableFigureImages(): string[] {
  return Object.keys(figureMap)
}

// ── Artefak Photos ──
const artifactModules = import.meta.glob<{ default: string }>(
  './artifacts/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true },
)

const artifactMap: Record<string, string> = {}
for (const [path, mod] of Object.entries(artifactModules)) {
  const name = path.split('/').pop()!
  artifactMap[name] = mod.default
}

/** Ambil URL foto artefak. Return null jika tidak ada foto. */
export function getArtifactImage(filename: string): string | null {
  return artifactMap[filename] ?? null
}

// ── Dokumen Arsip Photos ──
const documentModules = import.meta.glob<{ default: string }>(
  './documents/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true },
)

const documentMap: Record<string, string> = {}
for (const [path, mod] of Object.entries(documentModules)) {
  const name = path.split('/').pop()!
  documentMap[name] = mod.default
}

/** Ambil URL foto dokumen arsip. Return null jika tidak ada foto. */
export function getDocumentImage(filename: string): string | null {
  return documentMap[filename] ?? null
}
