import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/ui/Navbar'
import OpeningVaultPage from './pages/OpeningVault'
import ArchiveRoomPage from './pages/ArchiveRoom'
import FileDetailPage from './pages/FileDetail'
import TimelinePage from './pages/Timeline'
import { CharactersPage } from './pages/Characters'
import ArtifactsPage from './pages/Artifacts'
import { MapPage } from './pages/Map'
import { InvestigationPage } from './pages/Investigation'

const APP_TITLE = 'ARSIP RAHASIA'

/** Scroll ke atas setiap kali route berubah */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  const isVaultPage = location.pathname === '/'

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ScrollToTop />

      {/* OpeningVault tampil fullscreen tanpa Navbar/Footer */}
      {!isVaultPage && <Navbar title={APP_TITLE} />}

      <main style={{ flex: 1 }}>
        <AnimatedRoutes />
      </main>

      {!isVaultPage && (
        <footer
          style={{
            textAlign: 'center',
            padding: '24px 16px',
            fontSize: 12,
            letterSpacing: '0.2em',
            color: 'var(--text)',
            borderTop: '1px solid var(--border)',
          }}
        >
          DOKUMEN RAHASIA NEGARA — AKSES TERBATAS
        </footer>
      )}
    </div>
  )
}

/** Routes dengan page transition via AnimatePresence */
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<OpeningVaultPage />} />
        <Route path="/archive" element={<ArchiveRoomPage />} />
        <Route path="/file/:id" element={<FileDetailPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/artifacts" element={<ArtifactsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/investigation" element={<InvestigationPage />} />
        <Route path="*" element={<OpeningVaultPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App