import { motion } from 'framer-motion'
import type { TimelineEvent } from '../../types/archive'
import { Link2 } from 'lucide-react'

interface TimelineNodeProps {
  event: TimelineEvent
  index: number
  side: 'left' | 'right'
  onSelect: (event: TimelineEvent) => void
}

/** Kategori ke color accent */
const CATEGORY_COLORS: Record<string, string> = {
  Political: 'var(--accent-bright)',
  Social: 'var(--success)',
  Military: 'var(--danger)',
  Cultural: '#93a3b8',
  Diplomatic: '#7b8cde',
}

/** Significance ke ukuran node */
const SIGNIFICANCE_SIZE: Record<string, string> = {
  landmark: '20px',
  milestone: '16px',
  catalyst: '13px',
}

/**
 * Node peristiwa pada garis waktu.
 *
 * Phase 7 — Timeline Interaktif:
 * - node bulat berwarna berdasarkan kategori
 * - landmark events: glow besar + ring
 * - milestone events: glow sedang
 * - catalyst events: glow kecil
 * - hover: kartu terangkat, ring glow menyala
 */
export function TimelineNode({ event, index, side, onSelect }: TimelineNodeProps) {
  const color = CATEGORY_COLORS[event.category] || 'var(--accent)'
  const nodeSize = SIGNIFICANCE_SIZE[event.detail?.significance || 'milestone'] || '16px'
  const isLandmark = event.detail?.significance === 'landmark'

  return (
    <motion.div
      className={`timeline-node timeline-node--${side}`}
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Garis penghubung ke garis utama */}
      <div className="timeline-node__connector" style={{ backgroundColor: `${color}33` }} />

      {/* Node bulat di garis */}
      <div
        className={`timeline-node__dot ${isLandmark ? 'timeline-node__dot--landmark' : ''}`}
        style={{
          width: nodeSize,
          height: nodeSize,
          backgroundColor: color,
          boxShadow: `0 0 14px ${color}cc`,
        }}
        aria-hidden
      />

      {/* Kartu peristiwa */}
      <motion.button
        className="timeline-node__card"
        type="button"
        onClick={() => onSelect(event)}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          '--tl-color': color,
          transformPerspective: 800,
        } as React.CSSProperties}
        aria-label={`Buka detail peristiwa ${event.title}`}
      >
        {/* Tahun */}
        <span className="timeline-node__year" style={{ color }}>{event.year}</span>

        {/* Ikon + kategori */}
        <div className="timeline-node__header">
          {event.icon && <span className="timeline-node__icon" aria-hidden>{event.icon}</span>}
          <span className="timeline-node__cat" style={{ color, borderColor: `${color}44` }}>
            {event.category}
          </span>
        </div>

        {/* Judul */}
        <strong className="timeline-node__title">{event.title}</strong>

        {/* Deskripsi */}
        <p className="timeline-node__desc">{event.description}</p>

        {/* Tautan arsip jika ada */}
        {event.archiveIds && event.archiveIds.length > 0 && (
          <span className="timeline-node__archives">
            <Link2 size={10} />
            {event.archiveIds.length} ARSIP
          </span>
        )}

        {/* CTA */}
        <span className="timeline-node__cta">LIHAT PERISTIWA →</span>
      </motion.button>
    </motion.div>
  )
}

export default TimelineNode