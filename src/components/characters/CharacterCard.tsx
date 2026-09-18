import { motion } from 'framer-motion'
import { FileSearch, Fingerprint } from 'lucide-react'
import type { HistoricalFigure } from '../../types/archive'
import { getFigureImage } from '../../assets/images'

interface HistoricalCardProps {
  figure: HistoricalFigure
  index: number
  onSelect: (figure: HistoricalFigure) => void
}

/**
 * Kartu tokoh dalam grid investigasi.
 *
 * Phase 5 — Character Archive:
 * - entri berurutan dengan stagger (delay per index)
 * - avatar/foto tokoh tampil dalam bingkai "berkas"
 * - hover: kartu terangkat, lembar dossier muncul
 * - hint "BUKA DOSSIER" mengisyaratkan ada berkas investigasi tersembunyi
 *
 * Phase 9 — Foto asli tokoh: jika `figure.image` tersedia,
 * foto ditampilkan, fallback ke emoji/inisial.
 */
export function HistoricalCard({ figure, index, onSelect }: HistoricalCardProps) {
  const initials = figure.name
    .replace(/[^A-Za-z .'-]/g, '')
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join('')

  const photo = figure.image ? getFigureImage(figure.image) : null

  return (
    <motion.button
      type="button"
      className="character-card"
      onClick={() => onSelect(figure)}
      initial={{ opacity: 0, y: 24, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ y: -10, transition: { duration: 0.24 } }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
      aria-label={`Buka dossier ${figure.name}`}
    >
      {/* Nomor kasus — klise file tokoh */}
      <span className="character-card__id">{figure.id}</span>

      {/* Bingkai foto/avatar tokoh */}
      <span className="character-card__avatar-frame">
        {photo ? (
          <img
            className="character-card__avatar character-card__avatar--photo"
            src={photo}
            alt={`Foto ${figure.name}`}
            loading="lazy"
          />
        ) : (
          <span className="character-card__avatar" aria-hidden>
            {figure.emoji ?? initials}
          </span>
        )}
        <span className="character-card__avatar-tape" aria-hidden />
      </span>

      {/* Kicker — jumlah tautan arsip */}
      <span className="character-card__kicker">
        <Fingerprint size={10} />
        {figure.relatedArchiveIds?.length ?? 0} TAUTAN ARSIP
      </span>

      <strong className="character-card__name">{figure.name}</strong>
      <span className="character-card__role">{figure.title}</span>
      <span className="character-card__years">
        {figure.birthYear} — {figure.deathYear ?? '…'}
      </span>

      <span className="character-card__tagline">{figure.tagline}</span>

      {figure.alias && (
        <span className="character-card__alias">NAMA OPERASI: {figure.alias}</span>
      )}

      <span className="character-card__cta">
        <FileSearch size={12} />
        BUKA DOSSIER
      </span>
    </motion.button>
  )
}

export default HistoricalCard
