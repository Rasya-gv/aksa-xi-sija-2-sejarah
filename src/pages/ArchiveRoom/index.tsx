import { useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowLeft, Archive, Lock } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import PageTransition from '../../components/ui/PageTransition'
import ArchiveGrid from '../../components/archive/ArchiveGrid'
import ArchiveFilter, { type ArchiveFilterValue } from '../../components/archive/ArchiveFilter'
import { archives } from '../../data/archives'

/**
 * Ruang Arsip — galeri 12 berkas rahasia perjuangan bangsa.
 *
 * Suasana:
 * - ruangan gelap cinematic dengan cahaya museum (light beams)
 * - debu atmosfer melayang
 * - efek depth / parallax mengikuti gerakan kursor
 *
 * Klik kartu membawa ke /file/:id.
 */
export function ArchiveRoomPage() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<ArchiveFilterValue>('semua')

  // Parallax depth — mengikuti gerakan kursor dengan spring
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 40, damping: 16 })
  const sy = useSpring(my, { stiffness: 40, damping: 16 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-3, 3])
  const rotateX = useTransform(sy, [-0.5, 0.5], [2.5, -2.5])
  const beamsX = useTransform(sx, [-0.5, 0.5], [-14, 14])
  const beamsY = useTransform(sy, [-0.5, 0.5], [-8, 8])

  const roomRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = roomRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const filtered = useMemo(
    () => (filter === 'semua' ? archives : archives.filter((a) => a.category === filter)),
    [filter],
  )

  return (
    <PageTransition>
      <div
        ref={roomRef}
        className="archive-room"
        onMouseMove={handleMouseMove}
      >
        {/* Lapisan atmosfer */}
        <div className="archive-room__depth" aria-hidden>
          <motion.div className="archive-room__beams" style={{ x: beamsX, y: beamsY }} />
          <div className="archive-room__vignette" />
          <div className="archive-room__floor" />
          <div className="archive-room__dust">
            {Array.from({ length: 22 }).map((_, i) => (
              <span key={i} className="archive-room__dust-particle" />
            ))}
          </div>
          <div className="archive-room__grain" />
        </div>

        <motion.div className="archive-room__content" style={{ rotateX, rotateY }}>
          {/* Navigasi kembali */}
          <div className="archive-room__topbar">
            <Link to="/" className="archive-room__back">
              <ArrowLeft size={16} />
              KEMBALI KE BRANKAS
            </Link>
            <span className="archive-room__access">
              <Lock size={11} />
              AKSES TERBATAS
            </span>
          </div>

          {/* Judul ruangan */}
          <motion.header
            className="archive-room__header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="archive-room__header-tag">
              <Archive size={14} />
              RUANG PENYIMPANAN DOKUMEN RAHASIA
            </div>
            <h1 className="archive-room__title">Ruang Arsip</h1>
            <p className="archive-room__sub">
              12 berkas perjuangan bangsa, terverifikasi. Pilih satu untuk membuka dokumen.
            </p>
          </motion.header>

          {/* Filter kategori */}
          <ArchiveFilter value={filter} onChange={setFilter} />

          {/* Rak arsip */}
          <ArchiveGrid archives={filtered} />

          <button type="button" className="archive-room__vault-cta" onClick={() => navigate('/')}>
            <Lock size={13} />
            TUTUP RUANG ARSIP — KEMBALI KE BRANKAS
          </button>
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default ArchiveRoomPage