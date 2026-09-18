import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import type { Artifact } from '../../types/archive'
import { getArtifactImage } from '../../assets/images'

interface ArtifactCardProps {
  artifact: Artifact
  index: number
  onSelect: (artifact: Artifact) => void
}

/**
 * Kartu artefak dalam galeri ruang koleksi.
 *
 * Phase 6 — Artifact Archive:
 * - visual kartu: bingkai plastik artefak + sertifikat tahun
 * - hover: kartu terangkat, bingkai glow
 * - CTA "LIHAT DOKUMEN" untuk membuka detail artefak
 *
 * Phase 9 — Foto artefak: jika `artifact.image` tersedia,
 * foto tampil dalam bingkai dengan fallback ke ikon emoji.
 */
export function ArtifactCard({ artifact, index, onSelect }: ArtifactCardProps) {
  const photo = artifact.image ? getArtifactImage(artifact.image) : null

  return (
    <motion.article
      className="artifact-card"
      initial={{ opacity: 0, y: 24, rotateX: -6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ y: -10, transition: { duration: 0.22 } }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(artifact)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(artifact)}
      aria-label={`Buka detail ${artifact.name}`}
    >
      {/* Nomor artefak hantu */}
      <span className="artifact-card__id">{artifact.id}</span>

      {/* Bingkai visual utama */}
      <span className="artifact-card__frame">
        {photo ? (
          <img
            className="artifact-card__photo"
            src={photo}
            alt={artifact.name}
            loading="lazy"
          />
        ) : (
          <span className="artifact-card__icon" aria-hidden>
            {artifact.icon}
          </span>
        )}
        <span className="artifact-card__cat">{artifact.category}</span>
      </span>

      {/* Tahun artefak */}
      <span className="artifact-card__year">{artifact.year}</span>

      <strong className="artifact-card__name">{artifact.name}</strong>
      <p className="artifact-card__desc">{artifact.description}</p>

      {/* Status badge */}
      <span className={`artifact-card__status artifact-card__status--${artifact.status.toLowerCase().replace(' ', '-')}`}>
        {artifact.status}
      </span>

      {/* CTA bawah kartu */}
      <span className="artifact-card__cta">
        <Search size={12} />
        LIHAT DOKUMEN
      </span>
    </motion.article>
  )
}

export default ArtifactCard