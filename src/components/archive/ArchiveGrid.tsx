import { motion, AnimatePresence } from 'framer-motion'
import type { Archive } from '../../types/archive'
import ArchiveCard from './ArchiveCard'

interface ArchiveGridProps {
  archives: Archive[]
}

/**
 * Grid rak arsip — menampilkan kartu dengan animasi stagger
 * dan transisi mulus saat filter kategori berubah.
 */
export function ArchiveGrid({ archives }: ArchiveGridProps) {
  return (
    <motion.div className="archive-grid" layout>
      <AnimatePresence mode="popLayout">
        {archives.map((archive, i) => (
          <ArchiveCard key={archive.id} archive={archive} index={i} />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default ArchiveGrid