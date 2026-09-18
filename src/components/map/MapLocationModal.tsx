import { AnimatePresence, motion } from 'framer-motion'
import { X, MapPin, Clock, Users, Link2, Globe, Compass, BookMarked } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { MapLocation } from '../../types/archive'

interface MapLocationModalProps {
  open: boolean
  location: MapLocation | null
  onClose: () => void
}

const CATEGORY_LABELS: Record<string, { label: string; color: string }> = {
  political: { label: 'POLITIK', color: 'var(--accent)' },
  military: { label: 'MILITER', color: '#e06040' },
  social: { label: 'SOSIAL', color: '#7b8cde' },
  cultural: { label: 'BUDAYA', color: 'var(--success)' },
}

/**
 * Modal detail lokasi peta interaktif.
 *
 * Phase 7B:
 * — Backdrop blur + tap outside to close
 * — Escape key + scroll lock
 * — Animated fade + slide up
 * — Dossier layout: header + detail + events + figures
 */
export function MapLocationModal({ open, location, onClose }: MapLocationModalProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const catInfo = location ? CATEGORY_LABELS[location.category] : null

  return (
    <AnimatePresence>
      {open && location && (
        <motion.div
          className="map-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail lokasi ${location.name}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="map-modal__panel"
            initial={{ opacity: 0, y: 40, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="map-modal__header">
              <div className="map-modal__icon-frame">
                <span className="map-modal__icon" aria-hidden>
                  {location.icon}
                </span>
              </div>

              <div className="map-modal__headings">
                <div className="map-modal__kicker-row">
                  <span className="map-modal__kicker">
                    <MapPin size={11} />
                    LOKASI SEJARAH
                  </span>
                  {catInfo && (
                    <span
                      className="map-modal__cat"
                      style={{ color: catInfo.color, borderColor: `${catInfo.color}44` }}
                    >
                      {catInfo.label}
                    </span>
                  )}
                </div>

                <h2 className="map-modal__title">{location.name}</h2>

                <div className="map-modal__meta">
                  {location.modernName && location.modernName !== location.name && (
                    <span className="map-modal__meta-item">
                      <Globe size={12} />
                      {location.modernName}
                    </span>
                  )}
                  <span className="map-modal__meta-item">
                    <Clock size={12} />
                    {location.era}
                  </span>
                  <span className="map-modal__meta-item">
                    <Compass size={12} />
                    {location.coordinateInfo}
                  </span>
                </div>
              </div>

              <button className="map-modal__close" onClick={onClose} aria-label="Tutup detail lokasi">
                <X size={22} />
              </button>
            </div>

            {/* Subtitle */}
            <p className="map-modal__subtitle">{location.description}</p>

            {/* Detail naratif */}
            <div className="map-modal__section">
              <h3 className="map-modal__section-title">
                <MapPin size={14} />
                KONTEKS HISTORIS
              </h3>
              <p className="map-modal__narrative">{location.detail}</p>
            </div>

            {/* Peristiwa terkait */}
            {location.relatedEvents.length > 0 && (
              <div className="map-modal__section">
                <h3 className="map-modal__section-title">
                  <Clock size={14} />
                  PERISTIWA TERKAIT
                </h3>
                <div className="map-modal__tags">
                  {location.relatedEvents.map((eid) => (
                    <Link key={eid} to="/timeline" className="map-modal__tag" onClick={onClose}>
                      <Link2 size={11} />
                      {eid}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Tokoh terkait */}
            {location.relatedFigures.length > 0 && (
              <div className="map-modal__section">
                <h3 className="map-modal__section-title">
                  <Users size={14} />
                  TOKOH TERKAIT
                </h3>
                <div className="map-modal__tags">
                  {location.relatedFigures.map((name) => (
                    <Link key={name} to="/characters" className="map-modal__tag" onClick={onClose}>
                      <Users size={11} />
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Sumber referensi */}
            {location.source && location.source.length > 0 && (
              <div className="map-modal__section">
                <h3 className="map-modal__section-title">
                  <BookMarked size={14} />
                  SUMBER REFERENSI
                </h3>
                <ul className="map-modal__sources">
                  {location.source.map((s) => (
                    <li key={s} className="map-modal__source-item">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Region badge */}
            <div className="map-modal__footer">
              <span className="map-modal__region-badge">
                <MapPin size={12} />
                {location.region}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
