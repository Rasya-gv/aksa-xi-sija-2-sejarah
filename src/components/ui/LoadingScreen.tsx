import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

interface LoadingScreenProps {
  message?: string
}

/**
 * Screen loading yang dipakai saat aplikasi boot & saat akses vault.
 * Versi dasar — animasi 3D akan menyusul.
 */
export function LoadingScreen({ message = 'Membuka arsip…' }: LoadingScreenProps) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        background: 'var(--bg)',
        zIndex: 999,
      }}
    >
      <motion.div
        animate={{ rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      >
        <Lock size={40} color="var(--accent)" />
      </motion.div>
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        style={{ color: 'var(--text)', fontSize: 14, letterSpacing: '0.2em' }}
      >
        {message}
      </motion.p>
    </div>
  )
}

export default LoadingScreen