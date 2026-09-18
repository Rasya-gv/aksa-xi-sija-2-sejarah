import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { InvestigationResult } from '../../components/investigation/InvestigationResult'
import { QuestionCard } from '../../components/investigation/QuestionCard'
import { QUIZ_CATEGORIES, quizQuestions } from '../../data/quiz'
import PageTransition from '../../components/ui/PageTransition'
import type { QuizCategoryKey } from '../../types/archive'

/**
 * FINAL INVESTIGATION — Phase 8
 *
 * Ruang investigasi rahasia: kuis sejarah pergerakan nasional
 * bergaya game dengan 12 pertanyaan, skor, dan tingkat penyelidikan.
 *
 * Alur: intro (persiapan) → pertanyaan per pertanyaan → hasil akhir.
 */
export function InvestigationPage() {
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [breakdown, setBreakdown] = useState<Record<QuizCategoryKey, { total: number; correct: number }>>(
    () => ({
      tokoh: { total: 0, correct: 0 },
      organisasi: { total: 0, correct: 0 },
      peristiwa: { total: 0, correct: 0 },
    }),
  )

  const current = quizQuestions[currentIndex]

  /** Mulai penyelidikan dari awal */
  const startNew = useCallback(() => {
    setStarted(true)
    setFinished(false)
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setBreakdown({ tokoh: { total: 0, correct: 0 }, organisasi: { total: 0, correct: 0 }, peristiwa: { total: 0, correct: 0 } })
  }, [])

  /** Pilih jawaban → update skor */
  const handleSelect = (i: number) => {
    if (selected !== null) return
    setSelected(i)

    const cat = current.category
    const isCorrect = i === current.answerIndex
    setScore((s) => s + (isCorrect ? 1 : 0))
    setBreakdown((prev) => ({
      ...prev,
      [cat]: {
        total: prev[cat].total + 1,
        correct: prev[cat].correct + (isCorrect ? 1 : 0),
      },
    }))
  }

  /** Lanjut ke pertanyaan berikutnya */
  const handleNext = () => {
    if (currentIndex + 1 >= quizQuestions.length) {
      setFinished(true)
    } else {
      setCurrentIndex((i) => i + 1)
      setSelected(null)
    }
  }

  const questionCount = quizQuestions.length

  return (
    <PageTransition>
      <div className="invest-room">
        {/* Atmosfer ruang */}
        <div className="invest-room__atmos" aria-hidden>
          <div className="invest-room__scan" />
          <div className="invest-room__beams" />
          <div className="invest-room__vignette" />
        </div>

        <AnimatePresence mode="wait">
          {!started && (
            <motion.div
              key="intro"
              className="invest-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="invest-intro__badge">
                <span className="invest-intro__pulse" />
                AKSES TERBATAS — LEVEL 4
              </div>

              <h1 className="invest-intro__title">
                Final <span>Investigation</span>
              </h1>
              <p className="invest-intro__desc">
                Ujian terakhir bagi agen arsip: 12 berkas rahasia tentang pergerakan nasional
                Indonesia. Jawab dengan benar untuk mengungkap kebenaran sejarah.{' '}
                <strong>Berapa tingkat penyelidikan Anda?</strong>
              </p>

              <div className="invest-intro__stats">
                <div className="invest-intro__stat">
                  <span className="invest-intro__stat-val">{questionCount}</span>
                  <span className="invest-intro__stat-label">PERTANYAAN</span>
                </div>
                <div className="invest-intro__stat">
                  <span className="invest-intro__stat-val">3</span>
                  <span className="invest-intro__stat-label">KATEGORI</span>
                </div>
                <div className="invest-intro__stat">
                  <span className="invest-intro__stat-val">4</span>
                  <span className="invest-intro__stat-label">TINGKAT</span>
                </div>
              </div>

              <div className="invest-intro__cats">
                {Object.entries(QUIZ_CATEGORIES).map(([key, meta]) => (
                  <div
                    key={key}
                    className="invest-intro__cat"
                    style={{ color: meta.color, borderColor: `${meta.color}55`, background: `${meta.color}12` }}
                  >
                    <span aria-hidden>{meta.icon}</span>
                    {meta.label}
                  </div>
                ))}
              </div>

              <button type="button" className="invest-btn invest-btn--primary invest-btn--lg" onClick={startNew}>
                MULAI INVESTIGASI
              </button>
              <p className="invest-intro__hint">Waktu tidak dibatasi — teliti setiap berkas.</p>
            </motion.div>
          )}

          {started && !finished && (
            <motion.div key="quiz" className="invest-quiz-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <QuestionCard
                question={current}
                index={currentIndex}
                total={questionCount}
                score={score}
                selected={selected}
                onSelect={handleSelect}
                onNext={handleNext}
                isLast={currentIndex + 1 >= questionCount}
              />
            </motion.div>
          )}

          {started && finished && (
            <InvestigationResult
              score={score}
              total={questionCount}
              breakdown={breakdown}
              onRestart={startNew}
              onExit={() => {
                setStarted(false)
                setFinished(false)
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}

export default InvestigationPage