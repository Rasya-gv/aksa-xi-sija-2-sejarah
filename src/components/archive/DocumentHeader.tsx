import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import type { Archive } from '../../types/archive'

interface DocumentHeaderProps {
  archive: Archive
}

/**
 * Kepala dokumen classified — kode file, klasifikasi, status verifikasi.
 *
 * Phase 4B:
 * - efek kertas tua: grain halus, noda kertas, lubang map, tepi terbakar
 * - stempel VERIFIED ARCHIVE masuk dengan animasi "dicap" ke kertas
 */
export function DocumentHeader({ archive }: DocumentHeaderProps) {
  return (
    <header className="file-doc__header">
      {/* Lubang map di tepi atas kertas */}
      <span className="file-doc__punch file-doc__punch--tl" aria-hidden />
      <span className="file-doc__punch file-doc__punch--tr" aria-hidden />

      {/* Stempel verifikasi — masuk seperti dicap ke kertas */}
      <motion.div
        className="file-doc__stamp"
        role="img"
        aria-label={`Stempel: ${archive.status.toUpperCase()} ARCHIVE`}
        initial={{ scale: 2.4, rotate: -24, opacity: 0 }}
        animate={{ scale: [2.4, 0.9, 1.08, 1], rotate: -8, opacity: 1 }}
        transition={{
          duration: 0.6,
          times: [0, 0.5, 0.72, 1],
          ease: ['easeOut', 'easeOut', 'easeOut'],
          delay: 0.5,
        }}
      >
        <span className="file-doc__stamp-ring">
          <strong>VERIFIED</strong>
          <span>ARCHIVE</span>
        </span>
      </motion.div>

      <div className="file-doc__classified">CLASSIFIED ARCHIVE</div>

      <div className="file-doc__id-row">
        <span className="file-doc__code-label">FILE CODE:</span>
        <span className="file-doc__code">{archive.id}</span>
        <span className="file-doc__badge">{archive.classification}</span>
      </div>

      <div className="file-doc__status-row">
        <span className="file-doc__status-label">STATUS:</span>
        <span className="file-doc__status">
          <ShieldCheck size={14} />
          {archive.status.toUpperCase()} ARCHIVE
        </span>
      </div>

      <h1 className="file-doc__title">{archive.title}</h1>
      <p className="file-doc__year">{archive.year}</p>
    </header>
  )
}

export default DocumentHeader