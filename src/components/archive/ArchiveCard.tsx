import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import type { Archive } from '../../types/archive'

interface ArchiveCardProps {
  archive: Archive
  /** Index untuk delay entri berurutan */
  index?: number
}

/**
 * Kartu folder arsip — rak dokumen dengan tab kode file,
 * judul, tahun, status VERIFIED ARCHIVE, dan lembar dokumen
 * yang terbuka saat hover. Klik menuju /file/:id.
 */
export function ArchiveCard({ archive, index = 0 }: ArchiveCardProps) {
  const fileNum = archive.id.replace('FILE-', '')

  return (
    <motion.article
      className="archive-card"
      layout
      initial={{ opacity: 0, y: 34, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.22 } }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -12, rotateX: 5 }}
      style={{ transformPerspective: 1200 }}
    >
      <span className="archive-card__shelf" aria-hidden />

      <Link
        to={`/file/${archive.id}`}
        className="archive-card__link"
        aria-label={`Buka ${archive.code} — ${archive.title}`}
      >
        <span className="archive-card__tab">
          <span className="archive-card__tab-dot" aria-hidden />
          {archive.code}
        </span>

        <div className="archive-card__body">
          <span className="archive-card__num" aria-hidden>
            {fileNum}
          </span>

          <div className="archive-card__cat">{archive.category}</div>
          <h3 className="archive-card__title">{archive.title}</h3>

          <div className="archive-card__meta">
            <span className="archive-card__year">{archive.year}</span>
            <span className="archive-card__verified">
              <ShieldCheck size={11} />
              VERIFIED ARCHIVE
            </span>
          </div>

          <span className="archive-card__sheet">
            <span className="archive-card__sheet-code">{archive.code}</span>
            <span className="archive-card__sheet-cta">
              BUKA DOKUMEN <ArrowUpRight size={13} />
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export default ArchiveCard