import { AnimatePresence, motion } from 'framer-motion'
import { X, MapPin, Users, Quote, Link2, Calendar, Zap, BookMarked } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { TimelineEvent } from '../../types/archive'

interface TimelineModalProps {
  open: boolean
  event: TimelineEvent | null
  onClose: () => void
}

/** Significance ke label visual */
const SIG_LABELS: Record<string, { label: string; color: string }> = {
  landmark: { label: 'LANDMARK', color: 'var(--accent-bright)' },
  milestone: { label: 'MILESTONE', color: 'var(--success)' },
  catalyst: { label: 'KATALIS', color: '#7b8cde' },
}

/**
 * Modal detail peristiwa timeline.
 *
 * Phase 7:
 * - backdrop blur + tap outside to close
 * - Escape key to close + scroll lock
 * - animated fade + scale+lift
 * - dossier layout: header + narrative + impact + quote + archives
 */
export function TimelineModal({ open, event, onClose }: TimelineModalProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const sigInfo = event?.detail ? SIG_LABELS[event.detail.significance] : null

  return (
    <AnimatePresence>
      {open && event && (
        <motion.div
          className="timeline-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail peristiwa ${event.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="timeline-modal__panel"
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header peristiwa */}
            <div className="timeline-modal__header">
              {event.icon && (
                <div className="timeline-modal__icon-frame">
                  <span className="timeline-modal__icon" aria-hidden>{event.icon}</span>
                </div>
              )}

              <div className="timeline-modal__headings">
                <div className="timeline-modal__kicker-row">
                  <span className="timeline-modal__kicker">
                    <Calendar size={11} />
                    PERISTIWA {event.id}
                  </span>
                  {sigInfo && (
                    <span className="timeline-modal__sig" style={{ color: sigInfo.color, borderColor: `${sigInfo.color}44` }}>
                      <Zap size={10} />
                      {sigInfo.label}
                    </span>
                  )}
                </div>

                <h2 className="timeline-modal__title">{event.title}</h2>

                <div className="timeline-modal__meta">
                  <span className="timeline-modal__meta-item">
                    <Calendar size={12} />
                    {event.year}
                    {event.duration && ` — ${event.duration}`}
                  </span>
                  {event.location && (
                    <span className="timeline-modal__meta-item">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  )}
                  <span className="timeline-modal__meta-item">
                    <span style={{ color: 'var(--accent)', fontSize: '10px', textTransform: 'uppercase' }}>{event.category}</span>
                  </span>
                </div>
              </div>

              <button
                className="timeline-modal__close"
                onClick={onClose}
                aria-label="Tutup detail peristiwa"
              >
                <X size={22} />
              </button>
            </div>

            {/* Narasi */}
            {event.detail?.narrative && (
              <section className="timeline-modal__section">
                <h3 className="timeline-modal__section-title">
                  <Quote size={13} />
                  NARASI PERISTIWA
                </h3>
                <p className="timeline-modal__narrative">{event.detail.narrative}</p>
              </section>
            )}

            {/* Dampak */}
            {event.detail?.impact && (
              <section className="timeline-modal__section">
                <h3 className="timeline-modal__section-title">
                  <Zap size={13} />
                  DAMPAK HISTORIS
                </h3>
                <div className="timeline-modal__impact">{event.detail.impact}</div>
              </section>
            )}

            {/* Kutipan */}
            {event.detail?.quote && (
              <blockquote className="timeline-modal__quote">
                <p>"{event.detail.quote.text}"</p>
                <cite>— {event.detail.quote.author}</cite>
              </blockquote>
            )}

            {/* Tokoh terlibat */}
            {event.figures && event.figures.length > 0 && (
              <section className="timeline-modal__section">
                <h3 className="timeline-modal__section-title">
                  <Users size={13} />
                  TOKOH TERLIBAT
                </h3>
                <div className="timeline-modal__figures">
                  {event.figures.map((f) => (
                    <span key={f} className="timeline-modal__figure">{f}</span>
                  ))}
                </div>
              </section>
            )}

            {/* Arsip terkait */}
            {event.archiveIds && event.archiveIds.length > 0 && (
              <section className="timeline-modal__section">
                <h3 className="timeline-modal__section-title">
                  <Link2 size={13} />
                  ARSIP TERKAIT
                </h3>
                <div className="timeline-modal__links">
                  {event.archiveIds.map((id) => (
                    <Link
                      key={id}
                      to={`/file/${id}`}
                      className="timeline-modal__link"
                      onClick={onClose}
                    >
                      <span className="timeline-modal__link-dot" aria-hidden />
                      BUKA BERKAS — {id}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Sumber referensi */}
            {event.source && event.source.length > 0 && (
              <section className="timeline-modal__section">
                <h3 className="timeline-modal__section-title">
                  <BookMarked size={13} />
                  SUMBER REFERENSI
                </h3>
                <ul className="timeline-modal__sources">
                  {event.source.map((s) => (
                    <li key={s} className="timeline-modal__source-item">
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="timeline-modal__footer">
              GARIS WAKTU PERJUANGAN — ARSIP RAHASIA
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TimelineModal