import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useOnDone } from '../../hooks/useOnDone'
import { ScanLines, GrainOverlay } from '../../vault/VaultEffects'

interface LoadingSceneProps {
  onComplete: () => void
  /** Durasi total animasi loading (ms). */
  duration?: number
}

/**
 * Scene 2 — ACCESSING NATIONAL ARCHIVE.
 * Tampilan terminal komputer retro dengan efek CRT:
 * - Scan lines menyapu layar
 * - Border glow hijau-emas
 * - Progress bar terminal
 * - Teks berkedip ala terminal
 */
export function LoadingScene({ onComplete, duration = 3200 }: LoadingSceneProps) {
  const [progress, setProgress] = useState(0)

  const terminalLogs = [
    'INITIALIZING SECURE CHANNEL...',
    'CONNECTING TO ARCHIVE SERVER...',
    'DECRYPTING ACCESS KEY...',
    'VERIFYING CLEARANCE LEVEL...',
    'LOADING CLASSIFIED INDEX...',
    'ACCESS GRANTED',
  ]

  useEffect(() => {
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const raw = Math.min(1, (now - start) / duration)
      const eased = raw < 0.5 ? 2 * raw * raw : 1 - ((-2 * raw + 2) ** 2) / 2
      setProgress(eased)
      if (raw < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [duration])

  // Log terminal muncul bertahap sesuai progress — derivasi murni saat render
  const visibleCount = Math.min(
    terminalLogs.length,
    Math.floor(progress * terminalLogs.length) + 1,
  )
  const logLines = terminalLogs.slice(0, visibleCount)

  useOnDone(progress >= 1, onComplete)

  const percent = Math.round(progress * 100)
  const barWidth = 40
  const filledChars = Math.round((progress * barWidth))
  const emptyChars = barWidth - filledChars
  const barText = '█'.repeat(filledChars) + '░'.repeat(emptyChars)

  return (
    <div className="vault-loading" role="status" aria-label="Mengakses arsip nasional">
      {/* Scan lines overlay */}
      <ScanLines />

      {/* Terminal container */}
      <motion.div
        className="vault-terminal"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Terminal header */}
        <div className="vault-terminal__header">
          <span className="vault-terminal__dot vault-terminal__dot--red" />
          <span className="vault-terminal__dot vault-terminal__dot--yellow" />
          <span className="vault-terminal__dot vault-terminal__dot--green" />
          <span className="vault-terminal__title">NATIONAL ARCHIVE — SECURE ACCESS</span>
        </div>

        {/* Terminal body */}
        <div className="vault-terminal__body">
          {/* Judul utama */}
          <motion.p
            className="vault-loading__title"
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.32em' }}
            transition={{ duration: 1.2 }}
          >
            ACCESSING NATIONAL ARCHIVE…
          </motion.p>

          {/* Log terminal bertahap */}
          <div className="vault-terminal__logs">
            {logLines.map((line, i) => (
              <motion.div
                key={i}
                className="vault-terminal__log"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="vault-terminal__prompt">&gt;</span>
                {line}
                {i === logLines.length - 1 && (
                  <span className="vault-terminal__cursor">_</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar ala terminal */}
          <div className="vault-loading__track">
            <motion.div
              className="vault-loading__fill"
              style={{ width: `${progress * 100}%` }}
            >
              <span className="vault-loading__glow" />
            </motion.div>
          </div>

          {/* ASCII-style progress bar */}
          <div className="vault-loading__ascii-bar">
            <span className="vault-loading__bracket">[</span>
            <span className="vault-loading__bar-text">{barText}</span>
            <span className="vault-loading__bracket">]</span>
          </div>

          {/* Meta info */}
          <div className="vault-loading__meta">
            <span className="vault-loading__percent">{percent}%</span>
            <span className="vault-loading__hint">
              {percent < 100 ? 'MENDEKRIPSI BERKAS…' : 'AKSES DIBERIKAN'}
            </span>
          </div>
        </div>
      </motion.div>

      <GrainOverlay />
    </div>
  )
}

export default LoadingScene