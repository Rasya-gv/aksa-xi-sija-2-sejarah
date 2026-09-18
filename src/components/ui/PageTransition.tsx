import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { pageTransition, pageVariants } from '../../animations/variants'

interface PageTransitionProps {
  children: ReactNode
}

/**
 * Pembungkus transisi halaman yang konsisten.
 * Dipakai di setiap halaman agar pergantian route terasa mulus.
 */
export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition