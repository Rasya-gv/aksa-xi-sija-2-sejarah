import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, ShieldAlert, BookMarked } from 'lucide-react'
import PageTransition from '../../components/ui/PageTransition'
import Button from '../../components/ui/Button'
import DocumentHeader from '../../components/archive/DocumentHeader'
import ArchiveTabs from '../../components/archive/ArchiveTabs'
import ArchiveContent from '../../components/archive/ArchiveContent'
import { archives } from '../../data/archives'
import { getDocumentImage } from '../../assets/images'
import type { ArchiveTabKey } from '../../types/archive'

/** Reveal berurutan untuk bagian-bagian dokumen */
const docReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

/**
 * Detail satu berkas arsip — route /file/:id.
 *
 * Phase 4A — struktur:
 * - baca id dari URL lalu cocokkan dengan src/data/archives.ts
 * - susun dokumen classified: DocumentHeader + ArchiveTabs + ArchiveContent
 *
 * Phase 4B — desain classified document:
 * - efek kertas tua & stempel VERIFIED ARCHIVE di DocumentHeader
 * - tab animasi (indikator aktif berpindah) di ArchiveTabs
 * - document reveal animation saat ganti tab di ArchiveContent
 * - tombol kembali ke ruang arsip (Button + backbar)
 * - reveal berurutan antarbagian dokumen
 */
export function FileDetailPage() {
  const { id } = useParams<{ id: string }>()
  const doc = archives.find((a) => a.id === id)
  const [activeTab, setActiveTab] = useState<ArchiveTabKey>('background')

  const docImage = doc?.image ? getDocumentImage(doc.image) : null

  if (!doc) {
    return (
      <PageTransition>
        <div className="file-404">
          <ShieldAlert size={48} color="var(--text)" />
          <h2>Dokumen tidak ditemukan</h2>
          <p>Kode berkas tidak dikenal. Arsip mungkin telah dipindahkan atau dihapus.</p>
          <Link to="/archive">
            <Button variant="secondary">← KEMBALI KE RUANG ARSIP</Button>
          </Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="file-doc">
        {/* Bar navigasi — selalu terlihat di desktop, tablet & mobile */}
        <div className="file-doc__backbar">
          <Link to="/archive" className="file-doc__back">
            <ArrowLeft size={16} />
            KEMBALI KE RUANG ARSIP
          </Link>
          <span className="file-doc__access">
            <Lock size={11} />
            AKSES TERBATAS
          </span>
        </div>

        {/* Kepala dokumen classified — kertas tua + stempel verifikasi */}
        <motion.div
          variants={docReveal}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          <DocumentHeader archive={doc} />
        </motion.div>

        {/* Tab isi dokumen — indikator aktif berpindah dengan animasi */}
        <motion.div variants={docReveal} custom={1} initial="hidden" animate="visible">
          <ArchiveTabs active={activeTab} onChange={setActiveTab} />
        </motion.div>

        {/* Isi tab aktif — document reveal animation */}
        <ArchiveContent archive={doc} activeTab={activeTab} />

        {/* Lampiran foto dokumen — bila tersedia */}
        {docImage && (
          <motion.figure
            variants={docReveal}
            custom={2}
            initial="hidden"
            animate="visible"
            className="file-doc__attachment"
          >
            <img src={docImage} alt={`Lampiran — ${doc.title}`} loading="lazy" />
            <figcaption>
              LAMPIRAN ARSIP — DOKUMEN ASLI {doc.code}
            </figcaption>
          </motion.figure>
        )}

        {/* Sumber referensi */}
        {doc.source && doc.source.length > 0 && (
          <motion.div
            variants={docReveal}
            custom={docImage ? 3 : 2}
            initial="hidden"
            animate="visible"
            className="file-doc__sources"
          >
            <h3 className="file-doc__sources-title">
              <BookMarked size={14} />
              SUMBER REFERENSI
            </h3>
            <ul className="file-doc__sources-list">
              {doc.source.map((s) => (
                <li key={s} className="file-doc__sources-item">
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          variants={docReveal}
          custom={4}
          initial="hidden"
          animate="visible"
          className="file-doc__footer"
        >
          <ShieldAlert size={15} className="file-doc__footer-icon" />
          Dokumen asli diamankan dalam brankas. Salinan digital terbatas — penyebaran tanpa izin dilarang.
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default FileDetailPage