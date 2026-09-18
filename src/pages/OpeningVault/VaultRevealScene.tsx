import { motion } from 'framer-motion'
import { DustField, LightSweep, Vignette } from '../../vault/VaultEffects'

interface VaultRevealSceneProps {
  /** Berjalan untuk membuka. */
  opening: boolean
  onOpen: () => void
}

/**
 * Scene 3 — BRANKAS RAHASIA.
 * Lapisan atmosfer: vignette, light sweep, dust particles, caption.
 * Model brankas (WebGL atau CSS fallback) dirender terpisah di layer bawah,
 * tombol BUKA BRANKAS dipasang di sini agar konsisten di kedua mode.
 */
export function VaultRevealScene({ opening, onOpen }: VaultRevealSceneProps) {
  return (
    <div className="vault-reveal">
      {/* Efek atmosfer */}
      <Vignette />
      <LightSweep delay={0.4} />

      <motion.div
        className="vault-reveal__scene"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header di atas brankas */}
        <motion.div
          className="vault-reveal__header"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="vault-reveal__header-kicker">REPUBLIK INDONESIA — LEMBAGA ARSIP RAHASIA</p>
          <h2 className="vault-reveal__header-title">ARSIP RAHASIA<br />PERJUANGAN BANGSA</h2>
          <p className="vault-reveal__header-sub">SEKTOR VII — DOKUMEN KLASIFIKASI TINGGI</p>
        </motion.div>
      </motion.div>

      {/* Judul kecil di bawah brankas */}
      <motion.p
        className="vault-reveal__caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? 0 : 0.6 }}
        transition={{ duration: 0.8 }}
      >
        ARSIP RAHASIA PERJUANGAN BANGSA — SEKTOR VII
      </motion.p>

      {/* Tombol utama */}
      {!opening && (
        <motion.button
          className="vault-open-btn"
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="vault-open-btn__text">
            <span className="vault-open-btn__icon">◈</span>
            BUKA BRANKAS
          </span>
          <span className="vault-open-btn__hint">KOMBINASI TELAH DIOTENTIKASI</span>
        </motion.button>
      )}

      <DustField count={40} />
    </div>
  )
}

export default VaultRevealScene