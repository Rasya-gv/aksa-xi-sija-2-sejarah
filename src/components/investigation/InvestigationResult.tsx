import { motion } from 'framer-motion'
import { FolderOpen, RotateCcw } from 'lucide-react'
import { QUIZ_CATEGORIES, investigationRanks } from '../../data/quiz'
import type { QuizCategoryKey } from '../../types/archive'

interface InvestigationResultProps {
  score: number
  total: number
  breakdown: Record<QuizCategoryKey, { total: number; correct: number }>
  onRestart: () => void
  onExit: () => void
}

/**
 * Layar hasil investigasi — Phase 8.
 * Menampilkan gelar berdasarkan skor, akurasi, dan rincian
 * per kategori (tokoh / organisasi / peristiwa).
 */
export function InvestigationResult({
  score,
  total,
  breakdown,
  onRestart,
  onExit,
}: InvestigationResultProps) {
  const rank = investigationRanks.find((r) => score >= r.minScore) ??
    investigationRanks[investigationRanks.length - 1]
  const pct = total > 0 ? Math.round((score / total) * 100) : 0

  const categories = (Object.keys(QUIZ_CATEGORIES) as QuizCategoryKey[]).map((key) => {
    const meta = QUIZ_CATEGORIES[key]
    const data = breakdown[key]
    const barPct = data.total > 0 ? (data.correct / data.total) * 100 : 0
    return { key, meta, data, barPct }
  })

  return (
    <motion.div
      className="invest-result"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ikone gelar */}
      <div className="invest-result__rank-icon">
        <span aria-hidden>{rank.icon}</span>
        <span className="invest-result__rank-ring" />
      </div>

      <div className="invest-result__kicker">LAPORAN INVESTIGASI FINAL</div>
      <h2 className="invest-result__rank-title">{rank.title}</h2>
      <p className="invest-result__rank-subtitle">{rank.subtitle}</p>

      <div className="invest-result__score">
        <span className="invest-result__score-val">
          {score}
          <span className="invest-result__score-total">/{total}</span>
        </span>
        <span className="invest-result__pct">
          AKURASI {pct}%
        </span>
      </div>

      {/* Rincian per kategori */}
      <div className="invest-result__breakdown">
        {categories.map(({ key, meta, data, barPct }) => (
          <div key={key} className="invest-result__bar-row">
            <span className="invest-result__bar-label" style={{ color: meta.color }}>
              {meta.icon} {meta.label}
            </span>
            <div className="invest-result__bar-track">
              <div
                className="invest-result__bar-fill"
                style={{ width: `${barPct}%`, background: meta.color }}
              />
            </div>
            <span className="invest-result__bar-count" style={{ color: meta.color }}>
              {data.correct}/{data.total}
            </span>
          </div>
        ))}
      </div>

      {/* Aksi */}
      <div className="invest-result__actions">
        <button type="button" className="invest-btn invest-btn--primary" onClick={onRestart}>
          <RotateCcw size={15} />
          ULANGI INVESTIGASI
        </button>
        <button type="button" className="invest-btn invest-btn--ghost" onClick={onExit}>
          <FolderOpen size={15} />
          KEMBALI KE ARSIP
        </button>
      </div>
    </motion.div>
  )
}