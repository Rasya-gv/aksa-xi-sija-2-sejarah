import { AnimatePresence, motion } from 'framer-motion'
import { X, MapPin, Calendar, FileText, Link2, Star, BookMarked } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { HistoricalFigure } from '../../types/archive'
import { getFigureImage } from '../../assets/images'

/** Modal dossier detail untuk tokoh tunggal. */
export function CharacterModal({ open, figure, onClose }: { open: boolean; figure: HistoricalFigure | null; onClose: () => void }) {
  const photo = figure?.image ? getFigureImage(figure.image) : null

  // Lock body scroll saat modal terbuka
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Tutup dengan tombol Escape
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
      {open && figure && (
        <motion.div
          className="character-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Dossier ${figure.name}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="character-modal__panel"
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header dossier */}
            <div className="character-modal__header">
              <div className="character-modal__avatar" aria-hidden>
                {photo ? (
                  <img
                    className="character-modal__avatar-img"
                    src={photo}
                    alt={`Foto ${figure.name}`}
                  />
                ) : (
                  figure.emoji ?? figure.name.charAt(0)
                )}
              </div>

              <div className="character-modal__headings">
                <span className="character-modal__kicker">DOSSIER NOMOR {figure.id}</span>
                <h2 className="character-modal__title">{figure.name}</h2>
                <span className="character-modal__subtitle">{figure.title}</span>

                <div className="character-modal__meta">
                  {figure.birthYear && (
                    <span className="character-modal__meta-item">
                      <Calendar size={12} />
                      {figure.birthYear} — {figure.deathYear ?? '…'}
                    </span>
                  )}
                  {figure.birthPlace && (
                    <span className="character-modal__meta-item">
                      <MapPin size={12} />
                      {figure.birthPlace}
                    </span>
                  )}
                </div>

                {figure.alias && (
                  <span className="character-modal__alias">NAMA OPERASI: {figure.alias}</span>
                )}
              </div>

              <button
                className="character-modal__close"
                onClick={onClose}
                aria-label="Tutup dossier"
              >
                <X size={22} />
              </button>
            </div>

            {/* Bio */}
            <p className="character-modal__bio">{figure.bio}</p>

            {/* Kontribusi utama */}
            {figure.contributions && figure.contributions.length > 0 && (
              <section className="character-modal__section">
                <h3 className="character-modal__section-title">
                  <Star size={13} />
                  KONTRIBUSI UTAMA
                </h3>
                <ul className="character-modal__list">
                  {figure.contributions.map((c) => (
                    <li key={c} className="character-modal__list-item">
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Fokus gerakan */}
            {figure.focus && figure.focus.length > 0 && (
              <section className="character-modal__section">
                <h3 className="character-modal__section-title">
                  <FileText size={13} />
                  BIDANG PERJUANGAN
                </h3>
                <div className="character-modal__tags">
                  {figure.focus.map((f) => (
                    <span key={f} className="character-modal__tag">{f}</span>
                  ))}
                </div>
              </section>
            )}

            {/* Arsip terkait */}
            {figure.relatedArchiveIds?.length > 0 && (
              <section className="character-modal__section">
                <h3 className="character-modal__section-title">
                  <Link2 size={13} />
                  ARSIP TERKAIT
                </h3>
                <div className="character-modal__links">
                  {figure.relatedArchiveIds.map((id) => (
                    <Link
                      key={id}
                      to={`/file/${id}`}
                      className="character-modal__link"
                      onClick={onClose}
                    >
                      <span className="character-modal__link-dot" aria-hidden />
                      BUKA BERKAS — {id}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Sumber referensi */}
            {figure.source && figure.source.length > 0 && (
              <section className="character-modal__section">
                <h3 className="character-modal__section-title">
                  <BookMarked size={13} />
                  SUMBER REFERENSI
                </h3>
                <ul className="character-modal__sources">
                  {figure.source.map((s) => (
                    <li key={s} className="character-modal__source-item">
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="character-modal__footer">
              ARSIP RAHASIA — DOKUMEN TINGKAT III
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CharacterModal