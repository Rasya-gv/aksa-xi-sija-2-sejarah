import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IntroScene } from './IntroScene'
import { LoadingScene } from './LoadingScene'
import { VaultRevealScene } from './VaultRevealScene'
import { CssVaultSafebox } from '../../vault/VaultSafeboxCss'
import { useWebGLSupport } from '../../hooks/useWebGLSupport'
import { Vignette, GrainOverlay } from '../../vault/VaultEffects'

// Lazy-load scene WebGL — Three.js ~1.3MB hanya dimuat saat scene vault aktif.
const VaultScene = lazy(() =>
  import('../../vault/VaultScene').then((m) => ({ default: m.VaultScene })),
)

type Scene = 'intro' | 'loading' | 'vault'

/**
 * Halaman pembuka vault — sinematik tiga babak:
 * 1. Intro: "BATAVIA 1908" diketik pelan di kegelapan.
 * 2. Loading: progress mengakses arsip nasional.
 * 3. Vault: brankas 3D (WebGL) dengan tombol BUKA BRANKAS.
 */
export function OpeningVaultPage() {
  const [scene, setScene] = useState<Scene>('intro')
  const [opening, setOpening] = useState(false)
  const [openProgress, setOpenProgress] = useState(0)
  const navigate = useNavigate()
  const webgl = useWebGLSupport()

  const goTo = useCallback((next: Scene) => setScene(next), [])
  const handleIntroComplete = useCallback(() => goTo('loading'), [goTo])
  const handleLoadingComplete = useCallback(() => goTo('vault'), [goTo])

  const beginOpen = useCallback(() => {
    setOpening(true)
    setOpenProgress(0.02)
  }, [])

  // Saat membuka: animasikan progress 0.02 → 1 lalu navigasi ke /archive.
  useEffect(() => {
    if (!opening) return
    const start = performance.now()
    const duration = 1900
    let raf = 0

    const tick = (now: number) => {
      const raw = Math.min(1, (now - start) / duration)
      const eased = raw < 0.5 ? 2 * raw * raw : 1 - ((-2 * raw + 2) ** 2) / 2
      setOpenProgress(eased)
      if (raw < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        // Cahaya penuh sesaat, lalu lanjut
        window.setTimeout(() => navigate('/archive'), 3000)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [opening, navigate])

  return (
    <div className="vault-page">
      <AnimatePresence mode="wait">
        {scene === 'intro' && (
          <motion.div key="intro" exit={{ opacity: 0, transition: { duration: 0.6 } }}>
            <IntroScene onComplete={handleIntroComplete} />
          </motion.div>
        )}

        {scene === 'loading' && (
          <motion.div key="loading" exit={{ opacity: 0, transition: { duration: 0.6 } }}>
            <LoadingScene onComplete={handleLoadingComplete} />
          </motion.div>
        )}

        {scene === 'vault' && (
          <motion.div key="vault" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -24, transition: { duration: 0.8 } }}>
            <VaultRevealScene opening={opening} onOpen={beginOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay global */}
      <Vignette />
      <GrainOverlay />

      {/* Brankas 3D WebGL — dirender di layer atas saat scene vault */}
      <AnimatePresence>
        {scene === 'vault' && webgl !== false && (
          <motion.div
            className="vault-webgl-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Suspense fallback={null}>
              <VaultScene openProgress={openProgress} />
            </Suspense>
          </motion.div>
        )}
        {scene === 'vault' && webgl === false && (
          <motion.div
            key="css-fallback"
            className="vault-webgl-layer vault-webgl-layer--css"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CssVaultSafebox openProgress={openProgress} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OpeningVaultPage