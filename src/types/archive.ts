import type { LucideIcon } from 'lucide-react'

/** Klasifikasi keamanan utama untuk setiap arsip */
export type Classification =
  | 'REDACTED'
  | 'CLASSIFIED'
  | 'CONFIDENTIAL'
  | 'RESTRICTED'
  | 'PUBLIC'

/** Status verifikasi dokumen */
export type ArchiveStatus = 'Verified' | 'Under Review' | 'Contested'

/** Fase perjuangan — kategori rak arsip */
export type ArchiveCategory =
  | 'Awal'
  | 'Organisasi'
  | 'Pemuda'
  | 'Perjuangan'
  | 'Kemerdekaan'

/** Entitas tunggal dalam basis data arsip */
export interface Archive {
  /** Kode unik arsip untuk route /file/:id, contoh: "FILE-08" */
  id: string
  /** Kode rak yang ditampilkan di kartu, contoh: "FILE 08" */
  code: string
  /** Fase/kategori perjuangan untuk filter galeri */
  category: ArchiveCategory
  /** Judul dokumen */
  title: string
  /** Tahun peristiwa */
  year: string
  /** Klasifikasi keamanan */
  classification: Classification
  /** Status verifikasi */
  status: ArchiveStatus
  /** Deskripsi singkat */
  description: string
  /** Tag kategori untuk pencarian/filter */
  tags?: string[]
  /** Rujukan silang ke arsip lain */
  relatedIds?: string[]
  /** Nama file gambar dokumen (opsional — ditaruh di src/assets/documents) */
  image?: string
  /** Sumber referensi sejarah (opsional) */
  source?: string[]
  /** Detail dokumen classified — isi 5 tab (Phase 4) */
  detail?: ArchiveDocumentDetail
}

/** Tokoh yang terlibat dalam sebuah berkas arsip */
export interface ArchiveFigure {
  name: string
  role: string
  contribution: string
  /** Inisial untuk avatar dokumen */
  initial: string
  /** Rentang tahun hidup, contoh: "1901–1970" */
  lifespan?: string
}

/** Detail dokumen classified — isi 5 tab pada halaman /file/:id */
export interface ArchiveDocumentDetail {
  /** TAB 1 — kondisi sebelum, faktor pendukung, situasi sosial politik */
  background: string[]
  /** TAB 2 — tokoh & kontribusinya */
  figures: ArchiveFigure[]
  /** TAB 3 — tujuan organisasi/peristiwa */
  objectives: string[]
  /** TAB 4 — strategi, aktivitas, perjalanan sejarah */
  struggle: string[]
  /** TAB 5 — pengaruh terhadap pergerakan nasional */
  impact: string[]
}

/** Kunci tab dokumen classified — memetakan ke field ArchiveDocumentDetail */
export type ArchiveTabKey =
  | 'background'
  | 'figures'
  | 'objectives'
  | 'struggle'
  | 'impact'

/** Kategori artefak sejarah — jenis objek dalam koleksi */
export type ArtifactCategory =
  | 'Surat'
  | 'Koran'
  | 'Poster'
  | 'Dokumen'
  | 'Foto'
  | 'Benda'

/** Status keaslian artefak */
export type ArtifactStatus = 'Verified' | 'Under Review' | 'Restored'

/** Entitas tunggal dalam koleksi artefak sejarah */
export interface Artifact {
  /** Kode unik artefak, contoh: "ART-01" */
  id: string
  /** Nama artefak */
  name: string
  /** Kategori artefak */
  category: ArtifactCategory
  /** Tahun artefak dibuat/diterbitkan */
  year: string
  /** Deskripsi singkat untuk kartu galeri */
  description: string
  /** Status keaslian */
  status: ArtifactStatus
  /** Icon lucide untuk galeri (fallback saat tanpa gambar) */
  icon: string
  /** Nama file gambar (opsional — ditaruh di src/assets/artifacts) */
  image?: string
  /** Sumber referensi sejarah (opsional) */
  source?: string[]
  /** Detail lengkap — muncul saat artefak diklik */
  detail?: ArtifactDetail
}

/** Detail lengkap artefak — dibuka lewat modal */
export interface ArtifactDetail {
  /** Cerita & konteks artefak */
  story: string
  /** Material/medium artefak */
  material: string
  /** Lokasi penyimpanan saat ini */
  location: string
  /** Arsip terkait (ids) */
  relatedArchiveIds?: string[]
  /** Tokoh terkait (referensi ke characters) */
  relatedFigureIds?: string[]
}

/** Tokoh sejarah dalam mode investigasi */
export interface HistoricalFigure {
  id: string
  name: string
  title: string
  birthYear?: string
  deathYear?: string
  role: string
  bio: string
  /** Arsip yang terkait dengan tokoh ini */
  relatedArchiveIds: string[]
  /** Status aparat intelijen/mata-mata */
  alias?: string
  /** Gelar/resensi singkat untuk kartu, contoh: "Dokter & Pelopor Pendidikan" */
  tagline?: string
  /** Tahun aktif dalam gerakan, contoh: "1908–1928" */
  activeYears?: string
  /** Tempat lahir */
  birthPlace?: string
  /** Nama asli jika berbeda dari nama populer */
  realName?: string
  /** Bidang gerakan yang paling diingat */
  focus?: string[]
  /** Capaian/kontribusi utama (untuk detail dossier) */
  contributions?: string[]
  /** Kode emoji/inisial untuk avatar saat tanpa foto */
  emoji?: string
  /** Nama file foto (opsional — ditaruh di src/assets/figures) */
  image?: string
  /** Sumber referensi sejarah (opsional) */
  source?: string[]
}

/** Titik peristiwa pada garis waktu perjuangan */
export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  category: 'Political' | 'Social' | 'Military' | 'Cultural' | 'Diplomatic'
  significant: boolean
  archiveIds?: string[]
  /** Nama tempat peristiwa */
  location?: string
  /** Tokoh utama yang terlibat */
  figures?: string[]
  /** Icon visual peristiwa (emoji) */
  icon?: string
  /** Durasi peristiwa (opsional) */
  duration?: string
  /** Sumber referensi sejarah (opsional) */
  source?: string[]
  /** Detail lengkap — muncul saat timeline diklik */
  detail?: TimelineDetail
}

/** Detail peristiwa timeline — dibuka lewat modal */
export interface TimelineDetail {
  /** Narasi panjang peristiwa */
  narrative: string
  /** Dampak terhadap pergerakan */
  impact: string
  /** Kutipan bersejarah (opsional) */
  quote?: { text: string; author: string }
  /** Kategori visual peristiwa */
  significance: 'landmark' | 'milestone' | 'catalyst'
}

/** Kategori halaman aplikasi untuk navigasi konsisten */
export type AppRouteKey =
  | 'vault'
  | 'archive'
  | 'characters'
  | 'artifacts'
  | 'timeline'
  | 'map'
  | 'investigation'

/** Kategori pertanyaan kuis investigasi — Phase 8 */
export type QuizCategoryKey = 'tokoh' | 'organisasi' | 'peristiwa'

/** Pertanyaan kuis investigasi sejarah */
export interface QuizQuestion {
  id: string
  category: QuizCategoryKey
  question: string
  options: string[]
  answerIndex: number
  /** Catatan investigasi yang ditampilkan setelah menjawab */
  fact: string
  /** Sumber referensi sejarah (opsional) */
  source?: string[]
}

/** Tingkat/gelar hasil investigasi */
export interface InvestigationRank {
  minScore: number
  title: string
  subtitle: string
  icon: string
}

/** Lokasi pada peta interaktif Indonesia — Phase 7B */
export interface MapLocation {
  id: string
  name: string
  /** Wilayah geografis */
  region: 'Jawa' | 'Sumatera' | 'Sulawesi' | 'Nusa Tenggara' | 'Papua'
  /** Nama modern kota (jika berbeda dari nama sejarah) */
  modernName?: string
  /** Koordinat dalam viewBox SVG (0-160 range) */
  coordinates: { x: number; y: number }
  /** Kategori lokasi */
  category: 'political' | 'military' | 'social' | 'cultural'
  /** Rentang tahun terkait */
  era: string
  /** Deskripsi singkat */
  description: string
  /** Narasi detail lokasi */
  detail: string
  /** ID peristiwa timeline terkait */
  relatedEvents: string[]
  /** Nama tokoh terkait */
  relatedFigures: string[]
  /** Icon visual (emoji) */
  icon: string
  /** Koordinat geografis sebenarnya */
  coordinateInfo: string
  /** Sumber referensi sejarah (opsional) */
  source?: string[]
}

export interface NavItem {
  key: AppRouteKey
  label: string
  path: string
  icon: LucideIcon
}

/** Props keseragaman untuk ikon di komponen UI */
export type IconSize = 'sm' | 'md' | 'lg' | 'xl'