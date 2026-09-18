import { motion, AnimatePresence } from 'framer-motion'
import type { HistoricalFigure } from '../../types/archive'
import { HistoricalCard } from './CharacterCard'

interface CharacterGridProps {
  figures: HistoricalFigure[]
  onSelect: (figure: HistoricalFigure) => void
}

/**
 * Grid tokoh investigasi — menampilkan kartu dengan animasi stagger
 * dan transisi mulus saat daftar tokoh berubah (dengan AnimatePresence).
 */
export function CharacterGrid({ figures, onSelect }: CharacterGridProps) {
  return (
    <motion.div
      className="character-grid"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <AnimatePresence mode="popLayout">
        {figures.map((figure, i) => (
          <HistoricalCard key={figure.id} figure={figure} index={i} onSelect={onSelect} />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default CharacterGrid