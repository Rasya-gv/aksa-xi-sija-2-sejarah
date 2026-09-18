import { AnimatePresence, motion } from 'framer-motion'
import type { Archive, ArchiveTabKey } from '../../types/archive'

interface ArchiveContentProps {
  archive: Archive
  activeTab: ArchiveTabKey
}

/**
 * Phase 4B: isi tab aktif dibungkus motion — reveal dokumen:
 * fade + lift + blur halus setiap tab berganti (AnimatePresence).
 */
export function ArchiveContent({ archive, activeTab }: ArchiveContentProps) {
  const detail = archive.detail

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        className="file-doc__content"
        initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
        transition={{ duration: 0.32, ease: 'easeOut' }}
      >
        {detail ? (
          activeTab === 'figures' ? (
            <div className="file-doc__figures">
              {detail.figures.map((figure) => (
                <figure key={figure.name} className="file-doc__figure">
                  <span className="file-doc__figure-avatar" aria-hidden>
                    {figure.initial}
                  </span>
                  <figcaption className="file-doc__figure-body">
                    <strong className="file-doc__figure-name">{figure.name}</strong>
                    <span className="file-doc__figure-role">{figure.role}</span>
                    {figure.lifespan && (
                      <span className="file-doc__figure-lifespan">{figure.lifespan}</span>
                    )}
                    <p className="file-doc__figure-contribution">{figure.contribution}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <ul className="file-doc__list">
              {detail[activeTab].map((item, i) => (
                <li key={i} className="file-doc__item">
                  {item}
                </li>
              ))}
            </ul>
          )
        ) : (
          <>
            <p className="file-doc__notice">
              — BERKAS {archive.code}: DOKUMEN DIGITAL BELUM DITERBITKAN —
            </p>
            <p className="file-doc__desc">{archive.description}</p>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default ArchiveContent