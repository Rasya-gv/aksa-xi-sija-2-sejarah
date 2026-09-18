import { motion, AnimatePresence } from 'framer-motion'
import type { Artifact } from '../../types/archive'
import { ArtifactCard } from './ArtifactCard'

interface ArtifactGridProps {
  artifacts: Artifact[]
  onSelect: (artifact: Artifact) => void
}

/**
 * Grid galeri artefak — menampilkan kartu dengan animasi stagger
 * dan transisi mulus saat filter kategori berubah.
 */
export function ArtifactGrid({ artifacts, onSelect }: ArtifactGridProps) {
  return (
    <motion.div
      className="artifact-grid"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <AnimatePresence mode="popLayout">
        {artifacts.map((artifact, i) => (
          <ArtifactCard key={artifact.id} artifact={artifact} index={i} onSelect={onSelect} />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default ArtifactGrid