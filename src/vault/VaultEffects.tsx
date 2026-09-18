import { useMemo } from 'react'
import { motion, type Transition } from 'framer-motion'

/**
 * PRNG deterministik sederhana (mulberry32).
 * Menggantikan Math.random saat render agar komponen tetap pure
 * (aturan react-hooks/purity).
 */
function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Grid bintik debu melayang statis yang dihasilkan sekali per mount. */
export function DustField({ count = 55 }: { count?: number }) {
  const particles = useMemo(() => {
    const rand = mulberry32(20260911 + count)
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: 1 + rand() * 2.5,
      duration: 6 + rand() * 12,
      delay: rand() * 8,
      opacity: 0.15 + rand() * 0.55,
    }))
  }, [count])

  return (
    <div
      aria-hidden
      className="vault-dust"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="vault-dust__particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -30, 0], x: [0, 8, 0], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
          transition={
            {
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            } satisfies Transition
          }
        />
      ))}
    </div>
  )
}

/** Vignette gelap di tepi layar — menambah kedalaman sinematik. */
export function Vignette() {
  return (
    <div
      aria-hidden
      className="vault-vignette"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        background:
          'radial-gradient(ellipse at center, transparent 52%, rgba(0,0,0,0.55) 100%)',
        zIndex: 40,
      }}
    />
  )
}

/** Overlay grain film untuk atmosfer sinematik. */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="vault-grain"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 45, overflow: 'hidden' }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: '-100%',
          backgroundRepeat: 'repeat',
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/><feColorMatrix type=%22saturate%22 values=%220%22/><feComponentTransfer><feFuncA type=%22linear%22 slope=%220.7%22/></feComponentTransfer></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/></svg>")',
        }}
        animate={{ y: [0, 200, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

/** Garis cahaya horizontal tipis yang menyapu layar. */
export function LightSweep({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className="vault-lightsweep"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        height: 120,
        top: '50%',
        marginTop: -60,
        pointerEvents: 'none',
        zIndex: 30,
        background:
          'radial-gradient(ellipse at center, rgba(200,162,74,0.16) 0%, transparent 70%)',
        filter: 'blur(6px)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2.6, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/** Garis scan CRT — baris gelap tipis bergerak perlahan ke bawah. */
export function ScanLines({ intensity = 0.22 }: { intensity?: number }) {
  return (
    <div
      aria-hidden
      className="vault-scanlines"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 32,
        opacity: intensity,
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 2px, transparent 4px)',
      }}
    >
      {/* Garis terang yang menyapu ke bawah ala CRT */}
      <motion.div
        className="vault-scanlines__beam"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 140,
          background:
            'linear-gradient(180deg, transparent, rgba(200,162,74,0.05) 45%, rgba(200,162,74,0.12) 50%, rgba(200,162,74,0.05) 55%, transparent)',
        }}
        animate={{ top: ['-20%', '120%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

/** Bingkai terminal — border glow persegi panjang dengan sudut terpotong. */
export function TerminalFrame() {
  return (
    <div
      aria-hidden
      className="vault-terminal-frame"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 31,
        boxShadow:
          'inset 0 0 0 1px rgba(200,162,74,0.25), inset 0 0 40px rgba(200,162,74,0.05)',
      }}
    >
      {/* Sudut dekoratif */}
      {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
        <span key={corner} className={`vault-terminal-frame__corner vault-terminal-frame__corner--${corner}`} />
      ))}
    </div>
  )
}