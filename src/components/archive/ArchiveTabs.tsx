import { motion } from 'framer-motion'
import type { ArchiveTabKey } from '../../types/archive'
const FILE_TABS: { key: ArchiveTabKey; label: string; icon: string }[] = [
  { key: 'background', label: 'LATAR BELAKANG', icon: '📌' },
  { key: 'figures', label: 'TOKOH', icon: '👤' },
  { key: 'objectives', label: 'TUJUAN', icon: '🎯' },
  { key: 'struggle', label: 'PERJUANGAN', icon: '⚔' },
  { key: 'impact', label: 'DAMPAK', icon: '🏛' },
]

interface ArchiveTabsProps {
  active: ArchiveTabKey
  onChange: (tab: ArchiveTabKey) => void
}

/**
 * Tab isi dokumen classified — 5 bagian: latar belakang, tokoh, tujuan,
 * perjuangan, dampak.
 *
 * Phase 4B: indikator aktif bergeser mulus dengan layoutId (spring);
 * aksen underline menyala di bawah tab yang sedang dibuka.
 */
export function ArchiveTabs({ active, onChange }: ArchiveTabsProps) {
  return (
    <nav className="file-doc__tabs" role="tablist" aria-label="Isi dokumen rahasia">
      {FILE_TABS.map((tab) => {
        const isActive = active === tab.key
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={isActive ? 'file-doc__tab file-doc__tab--active' : 'file-doc__tab'}
            onClick={() => onChange(tab.key)}
          >
            <span className="file-doc__tab-icon" aria-hidden>
              {tab.icon}
            </span>
            {tab.label}
            {isActive && (
              <motion.span
                className="file-doc__tab-underline"
                layoutId="file-doc-tab-underline"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}

export default ArchiveTabs