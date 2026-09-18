import { motion } from 'framer-motion'
import { ArrowRight, Check, FileSearch, X } from 'lucide-react'
import { QUIZ_CATEGORIES } from '../../data/quiz'
import type { QuizQuestion } from '../../types/archive'

const LETTERS = ['A', 'B', 'C', 'D']

interface QuestionCardProps {
  question: QuizQuestion
  index: number
  total: number
  score: number
  selected: number | null
  onSelect: (i: number) => void
  onNext: () => void
  isLast: boolean
}

/**
 * Kartu pertanyaan kuis investigasi.
 * Phase 8: pilihan jawaban A–D dengan umpan balik langsung
 * (benar/salah), catatan investigasi, dan tombol lanjut.
 */
export function QuestionCard({
  question,
  index,
  total,
  score,
  selected,
  onSelect,
  onNext,
  isLast,
}: QuestionCardProps) {
  const cat = QUIZ_CATEGORIES[question.category]
  const answered = selected !== null
  const progress = ((index + (answered ? 1 : 0)) / total) * 100

  return (
    <motion.div
      className="invest-quiz"
      key={question.id}
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -48 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Bar status */}
      <div className="invest-quiz__top">
        <span className="invest-quiz__file">
          <FileSearch size={12} />
          BERKAS {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
        <span className="invest-quiz__score">SKOR {score}</span>
      </div>

      <div className="invest-quiz__progress">
        <div className="invest-quiz__progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Kategori */}
      <div
        className="invest-quiz__cat"
        style={{ color: cat.color, borderColor: `${cat.color}55`, background: `${cat.color}14` }}
      >
        <span aria-hidden>{cat.icon}</span>
        {cat.label}
      </div>

      {/* Soal */}
      <h2 className="invest-quiz__question">{question.question}</h2>

      {/* Opsi jawaban */}
      <div className="invest-quiz__options">
        {question.options.map((opt, i) => {
          const isCorrect = answered && i === question.answerIndex
          const isWrongPick = answered && i === selected && i !== question.answerIndex
          const cls = [
            'invest-quiz__option',
            isCorrect ? 'invest-quiz__option--correct' : '',
            isWrongPick ? 'invest-quiz__option--wrong' : '',
            answered && !isCorrect && !isWrongPick ? 'invest-quiz__option--dim' : '',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <button
              key={i}
              type="button"
              className={cls}
              disabled={answered}
              onClick={() => onSelect(i)}
            >
              <span className="invest-quiz__option-letter">{LETTERS[i]}</span>
              <span className="invest-quiz__option-text">{opt}</span>
              {isCorrect && <Check size={16} className="invest-quiz__option-icon" />}
              {isWrongPick && <X size={16} className="invest-quiz__option-icon" />}
            </button>
          )
        })}
      </div>

      {/* Catatan investigasi */}
      {answered && (
        <motion.div
          className="invest-quiz__fact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <span className="invest-quiz__fact-label">📋 CATATAN INVESTIGASI</span>
          <p className="invest-quiz__fact-text">{question.fact}</p>
        </motion.div>
      )}

      {/* Lanjut */}
      {answered && (
        <motion.button
          type="button"
          className="invest-quiz__next"
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {isLast ? 'LIHAT HASIL' : 'LANJUT'}
          <ArrowRight size={15} />
        </motion.button>
      )}
    </motion.div>
  )
}