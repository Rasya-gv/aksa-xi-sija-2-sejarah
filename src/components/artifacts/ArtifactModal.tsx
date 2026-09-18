import { AnimatePresence, motion } from 'framer-motion'
import { X, MapPin, Tag, FileText, Link2, Layers, BookMarked } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Artifact } from '../../types/archive'
import { getArtifactImage } from '../../assets/images'

interface ArtifactModalProps {
  open: boolean
  artifact: Artifact | null
  onClose: () => void
}

/**
 * Modal artefak — detail lengkap artefak sejarah.
 *
 * Phase 6:
 * - backdrop blur + tap outside to close
 * - Escape key to close
 * - scroll lock when open
 * - animated: fade backdrop + scale+lift panel
 * - dossier layout: header + story + material + location + related archives
 */
export function ArtifactModal({ open, artifact, onClose }: ArtifactModalProps) {
  const photo = artifact?.image ? getArtifactImage(artifact.image) : null

  // Lock body scroll
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Escape key to close
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && artifact && (
        <motion.div
          className="artifact-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail artefak ${artifact.name}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="artifact-modal__panel"
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header artefak */}
            <div className="artifact-modal__header">
              <div className="artifact-modal__icon-frame">
                {photo ? (
                  <img
                    className="artifact-modal__icon-img"
                    src={photo}
                    alt={artifact.name}
                  />
                ) : (
                  <span className="artifact-modal__icon" aria-hidden>
                    {artifact.icon}
                  </span>
                )}
                <span className="artifact-modal__tape" aria-hidden />
              </div>

              <div className="artifact-modal__headings">
                <span className="artifact-modal__kicker">ARTIFAK {artifact.id}</span>
                <h2 className="artifact-modal__title">{artifact.name}</h2>

                <div className="artifact-modal__meta">
                  <span className="artifact-modal__meta-item">
                    <Layers size={12} />
                    {artifact.category}
                  </span>
                  <span className="artifact-modal__meta-item">
                    <Tag size={12} />
                    {artifact.year}
                  </span>
                  {artifact.detail?.material && (
                    <span className="artifact-modal__meta-item">
                      <FileText size={12} />
                      {artifact.detail.material}
                    </span>
                  )}
                </div>
              </div>

              <button
                className="artifact-modal__close"
                onClick={onClose}
                aria-label="Tutup detail artefak"
              >
                <X size={22} />
              </button>
            </div>

            {/* Cerita artefak */}
            {artifact.detail?.story && (
              <section className="artifact-modal__section">
                <h3 className="artifact-modal__section-title">
                  <FileText size={13} />
                  CERITA & KONTEKS
                </h3>
                <p className="artifact-modal__story">{artifact.detail.story}</p>
              </section>
            )}

            {/* Lokasi penyimpanan */}
            {artifact.detail?.location && (
              <section className="artifact-modal__section">
                <h3 className="artifact-modal__section-title">
                  <MapPin size={13} />
                  LOKASI PENYIMPANAN
                </h3>
                <span className="artifact-modal__location">{artifact.detail.location}</span>
              </section>
            )}

            {/* Arsip terkait */}
            {artifact.detail?.relatedArchiveIds && artifact.detail.relatedArchiveIds.length > 0 && (
              <section className="artifact-modal__section">
                <h3 className="artifact-modal__section-title">
                  <Link2 size={13} />
                  ARSIP TERKAIT
                </h3>
                <div className="artifact-modal__links">
                  {artifact.detail.relatedArchiveIds.map((id) => (
                    <Link
                      key={id}
                      to={`/file/${id}`}
                      className="artifact-modal__link"
                      onClick={onClose}
                    >
                      <span className="artifact-modal__link-dot" aria-hidden />
                      BUKA BERKAS — {id}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Sumber referensi */}
            {artifact.source && artifact.source.length > 0 && (
              <section className="artifact-modal__section">
                <h3 className="artifact-modal__section-title">
                  <BookMarked size={13} />
                  SUMBER REFERENSI
                </h3>
                <ul className="artifact-modal__sources">
                  {artifact.source.map((s) => (
                    <li key={s} className="artifact-modal__source-item">
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Footer */}
            <div className="artifact-modal__footer">
              ARSIP RAHASIA — KOLEKSI BENDA BERSEJARAH
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ArtifactModal