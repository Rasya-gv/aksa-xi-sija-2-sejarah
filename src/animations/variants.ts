import type { Variants } from 'framer-motion'

/**
 * Variants animasi bersama untuk transisi halaman & elemen.
 * Dikonsumsi oleh komponen PageTransition dan UI lain.
 */

/** Fade + slide halus untuk entri halaman */
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

/** Settings umum transisi halaman */
export const pageTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
}

/** Reveal sederhana untuk kartu/daftar */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
}

/** Entri berurutan untuk daftar item (stagger) */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/** Item di dalam stagger container */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}