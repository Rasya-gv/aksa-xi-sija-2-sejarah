import { motion } from 'framer-motion'
import { archiveFilters, archives } from '../../data/archives'
import type { ArchiveCategory } from '../../types/archive'

export type ArchiveFilterValue = ArchiveCategory | 'semua'

interface ArchiveFilterProps {
  value: ArchiveFilterValue
  onChange: (value: ArchiveFilterValue) => void
}

/**
 * Filter kategori rak arsip — pill dengan indikator aktif
 * yang bergeser mulus lewat layout animation.
 */
export function ArchiveFilter({ value, onChange }: ArchiveFilterProps) {
  return (
    <div className="archive-filter" role="tablist" aria-label="Filter kategori arsip">
      {archiveFilters.map((filter) => {
        const active = value === filter.key
        const count =
          filter.key === 'semua'
            ? archives.length
            : archives.filter((a) => a.category === filter.key).length

        return (
          <button
            key={filter.key}
            type="button"
            role="tab"
            aria-selected={active}
            className={`archive-filter__btn${active ? ' archive-filter__btn--active' : ''}`}
            onClick={() => onChange(filter.key)}
          >
            {active && (
              <motion.span
                layoutId="archive-filter-active"
                className="archive-filter__active"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="archive-filter__label">{filter.label}</span>
            <span className="archive-filter__count">{count}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ArchiveFilter