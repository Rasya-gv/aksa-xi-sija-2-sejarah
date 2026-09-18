import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navItems } from '../../data/navigation'

interface NavbarProps {
  title: string
}

/**
 * Navigasi utama aplikasi.
 * Komponen dasar — animasi cinematic final menyusul di phase berikutnya.
 */
export function Navbar({ title }: NavbarProps) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '0 24px',
        height: 64,
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--bg)',
      }}
    >
      <Link to="/" style={{ fontWeight: 700, letterSpacing: '0.08em', fontSize: 16 }}>
        {title}
      </Link>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {navItems.map((item) => (
          <motion.div key={item.key} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to={item.path}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 12px',
                borderRadius: 8,
                fontSize: 14,
                color: 'var(--text)',
                textDecoration: 'none',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.background = 'var(--accent-bg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  )
}

export default Navbar