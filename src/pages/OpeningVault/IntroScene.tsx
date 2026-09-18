import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTypewriter } from '../../hooks/useTypewriter'
import { useOnDone } from '../../hooks/useOnDone'
import { DustField, GrainOverlay, Vignette } from '../../vault/VaultEffects'

interface IntroSceneProps {
  onComplete: () => void
}

/**
 * Scene 1 — OPENING SEQUENCE.
 * Teks diketik mesin ketik di latar hitam penuh:
 * "BATAVIA — 1908" → "SEBUAH KESADARAN BARU MULAI TUMBUH" → "ARSIP RAHASIA TELAH DITEMUKAN".
 *
 * Dilengkapi efek sinematik:
 * - Grain film overlay
 * - Partikel debu melayang
 * - Vignette tepi gelap
 * - Cahaya ambient lembut
 * - Fade in/out dramatis
 */
export function IntroScene({ onComplete }: IntroSceneProps) {
  const [lineIndex, setLineIndex] = useState(0)

  const lines = [
    'BATAVIA — 1908',
    'SEBUAH KESADARAN BARU MULAI TUMBUH',
    'ARSIP RAHASIA TELAH DITEMUKAN',
  ]

  const currentLine = lines[lineIndex]
  const typed = useTypewriter(currentLine, {
    speed: lineIndex === 1 ? 28 : 55,
    delay: lineIndex === 0 ? 1200 : 350,
  })

  const isLast = lineIndex === lines.length - 1
  const lineDone = typed === currentLine

  useOnDone(lineDone, () => {
    if (isLast) {
      window.setTimeout(onComplete, 800)
    } else {
      window.setTimeout(() => setLineIndex((i) => i + 1), 750)
    }
  })

  return (
    <div className="vault-intro" aria-live="polite">
      {/* Cahaya ambient lembut di tengah */}
      <motion.div
        className="vault-intro__ambient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      />

      {/* Debu melayang */}
      <DustField count={35} />

      {/* Garis cahaya horizontal yang menyapu */}
      <motion.div
        className="vault-intro__sweep"
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: [0, 0.5, 0], x: ['-100%', '100%'] }}
        transition={{ duration: 4, delay: 0.8, repeat: Infinity, repeatDelay: 6 }}
      />

      {/* Teks sebelumnya — melayang ke atas saat berganti */}
      <AnimatePresence mode="wait">
        {lineIndex > 0 && (
          <motion.div
            key={`prev-${lineIndex}`}
            className="vault-intro__prev"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.4, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            {lines[lineIndex - 1]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teks utama yang sedang diketik */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={lineIndex}
          className="vault-intro__line"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {typed}
          <span className="vault-intro__cursor" />
        </motion.h1>
      </AnimatePresence>

      {/* Tahun kecil di atas — hanya untuk baris pertama */}
      <AnimatePresence>
        {lineIndex === 0 && (
          <motion.p
            className="vault-intro__year"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            ▼ CONFIDENTIAL ▼
          </motion.p>
        )}
      </AnimatePresence>

      {/* Overlay sinematik global */}
      <Vignette />
      <GrainOverlay />
    </div>
  )
}

export default IntroScene