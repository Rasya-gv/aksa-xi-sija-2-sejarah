import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import type { MapLocation } from '../../types/archive'
import { MapLocationModal } from './MapLocationModal'
import { mapLocations } from '../../data/mapLocations'

/**
 * FILTER REGION untuk peta
 */
type RegionFilter = 'semua' | 'Jawa' | 'Sumatera' | 'Sulawesi' | 'Nusa Tenggara'

const REGIONS: { value: RegionFilter; label: string }[] = [
  { value: 'semua', label: 'SELURUH' },
  { value: 'Jawa', label: 'JAWA' },
  { value: 'Sumatera', label: 'SUMATERA' },
  { value: 'Sulawesi', label: 'SULAWESI' },
  { value: 'Nusa Tenggara', label: 'NUSATENGGARA' },
]

/**
 * Peta interaktif Indonesia — Phase 7B
 *
 * Fitur:
 * — SVG silhouette nusantara (simplified, high-contrast)
 * — Marker lokasi berwarna berdasarkan kategori
 * — Pulse animation pada marker aktif
 * — Hover tooltip nama lokasi
 * — Click → modal detail (narasi + peristiwa + tokoh)
 * — Filter berdasarkan region
 * — Responsive layout: peta + side panel
 */
export function IndonesiaMap() {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('semua')
  const [selectedLoc, setSelectedLoc] = useState<MapLocation | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered = useMemo(
    () => (activeRegion === 'semua' ? mapLocations : mapLocations.filter((l) => l.region === activeRegion)),
    [activeRegion],
  )

  const categoryColors: Record<string, string> = {
    political: '#c8a24a',
    military: '#e06040',
    social: '#7b8cde',
    cultural: 'var(--success, #50c878)',
  }

  const politicalCount = filtered.filter((l) => l.category === 'political').length
  const militaryCount = filtered.filter((l) => l.category === 'military').length

  return (
    <div className="map-room">
      {/* Atmosfer */}
      <div className="map-room__atmos" aria-hidden>
        <div className="map-room__grid-lines" />
        <div className="map-room__vignette" />
      </div>

      {/* Header */}
      <header className="map-room__header">
        <div className="map-room__kicker">
          <span className="map-room__kicker-icon">🗺️</span>
          PETA PERJUANGAN NASIONAL
        </div>
        <h1 className="map-room__title">Nusantara Bergerak</h1>
        <p className="map-room__desc">
          Lokasi-lokasi bersejarah yang menjadi panggung perjuangan kemerdekaan Indonesia.
          Klik marker untuk melihat narasi lengkap.
        </p>

        {/* Stats kecil */}
        <div className="map-room__stats">
          <div className="map-room__stat">
            <span className="map-room__stat-val">{filtered.length}</span>
            <span className="map-room__stat-label">LOKASI</span>
          </div>
          <div className="map-room__stat">
            <span className="map-room__stat-val" style={{ color: categoryColors.political }}>
              {politicalCount}
            </span>
            <span className="map-room__stat-label">POLITIK</span>
          </div>
          <div className="map-room__stat">
            <span className="map-room__stat-val" style={{ color: categoryColors.military }}>
              {militaryCount}
            </span>
            <span className="map-room__stat-label">MILITER</span>
          </div>
        </div>
      </header>

      {/* Filter bar */}
      <div className="map-room__filters">
        {REGIONS.map((r) => (
          <button
            key={r.value}
            className={`map-room__filter-btn ${activeRegion === r.value ? 'map-room__filter-btn--active' : ''}`}
            onClick={() => setActiveRegion(r.value)}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Peta + tooltip */}
      <div className="map-room__canvas">
        {/* Tooltip hover */}
        {hoveredId && (
          <div className="map-room__tooltip" aria-live="polite">
            {mapLocations.find((l) => l.id === hoveredId)?.name}
          </div>
        )}

        <svg
          viewBox="0 0 160 160"
          className="map-room__svg"
          aria-label="Peta interaktif Indonesia"
          role="img"
        >
          <defs>
            {/* Glow filter untuk marker */}
            <filter id="marker-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            {/* Land fill gradient */}
            <linearGradient id="land-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2a2f3e" />
              <stop offset="100%" stopColor="#1e2230" />
            </linearGradient>
          </defs>

          {/* ── SUMATERA ── */}
          <path
            d="M18 72 C20 68, 24 58, 28 54 C32 50, 36 46, 40 44 C44 42, 46 40, 48 38
               C50 36, 52 34, 54 32 C56 30, 58 28, 58 30
               C60 32, 58 36, 56 40 C54 44, 52 48, 50 52
               C48 56, 46 60, 42 64 C40 66, 38 70, 36 74
               C34 78, 32 82, 30 86 C28 90, 26 94, 24 98
               C22 100, 20 102, 18 104 C16 106, 14 108, 16 106
               C18 104, 20 100, 22 96 C24 92, 24 88, 22 84
               C20 80, 18 76, 18 72 Z"
            className="map-room__land"
          />

          {/* ── JAWA ── */}
          <path
            d="M56 82 C60 80, 64 80, 68 81 C72 82, 76 83, 80 84
               C84 85, 88 86, 92 87 C96 88, 100 89, 102 90
               C104 91, 102 92, 100 92 C96 92, 92 93, 88 93
               C84 93, 80 94, 76 94 C72 94, 68 93, 64 93
               C60 93, 56 92, 54 91 C52 90, 54 88, 56 86
               C58 84, 56 83, 56 82 Z"
            className="map-room__land"
          />

          {/* ── KALIMANTAN ── */}
          <path
            d="M82 48 C86 44, 92 40, 96 38 C100 36, 104 36, 108 38
               C112 40, 116 44, 118 48 C120 52, 120 56, 118 60
               C116 64, 112 68, 108 72 C104 76, 100 78, 96 80
               C92 82, 88 82, 84 80 C80 78, 78 74, 76 70
               C74 66, 74 62, 76 58 C78 54, 80 50, 82 48 Z"
            className="map-room__land"
          />

          {/* ── SULAWESI ── */}
          <path
            d="M112 42 C114 38, 116 34, 118 32 C120 30, 122 32, 120 36
               C118 40, 116 44, 118 48 C120 52, 122 56, 124 60
               C126 64, 126 68, 122 72 C118 76, 114 80, 112 84
               C110 88, 112 90, 114 86 C116 82, 118 78, 120 74
               C122 70, 124 66, 126 62 C128 58, 130 54, 128 50
               C126 46, 122 42, 118 40 C116 42, 114 44, 112 42 Z"
            className="map-room__land"
          />

          {/* ── NUSA TENGGARA ── */}
          {/* Bali */}
          <path
            d="M104 94 C106 92, 108 92, 110 93 C112 94, 112 96, 110 97
               C108 98, 106 97, 104 96 C102 95, 102 94, 104 94 Z"
            className="map-room__land"
          />
          {/* Lombok */}
          <path
            d="M114 94 C116 93, 118 93, 120 94 C122 95, 122 97, 120 98
               C118 99, 116 98, 114 97 C112 96, 112 95, 114 94 Z"
            className="map-room__land"
          />
          {/* Sumbawa */}
          <path
            d="M124 94 C126 93, 130 92, 134 93 C138 94, 140 95, 138 97
               C136 98, 130 99, 126 98 C122 97, 122 95, 124 94 Z"
            className="map-room__land"
          />
          {/* Flores */}
          <path
            d="M122 104 C126 102, 130 102, 134 103 C138 104, 142 105, 140 107
               C138 108, 132 109, 126 108 C120 107, 118 106, 122 104 Z"
            className="map-room__land"
          />
          {/* Timor */}
          <path
            d="M138 108 C140 107, 144 106, 148 107 C152 108, 154 110, 150 111
               C146 112, 142 112, 138 111 C136 110, 136 109, 138 108 Z"
            className="map-room__land"
          />
          {/* Papua (simplified) */}
          <path
            d="M142 50 C146 46, 150 44, 154 46 C158 48, 160 52, 158 56
               C156 60, 154 64, 150 68 C146 72, 144 74, 148 76
               C152 78, 156 76, 158 72 C160 68, 160 64, 158 60
               C156 56, 154 52, 150 50 C148 48, 144 48, 142 50 Z"
            className="map-room__land"
          />

          {/* ── MARKERS ── */}
          {filtered.map((loc) => {
            const isActive = selectedLoc?.id === loc.id
            const isHovered = hoveredId === loc.id
            const color = categoryColors[loc.category] || '#c8a24a'

            return (
              <g
                key={loc.id}
                className="map-room__marker-group"
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedLoc(loc)}
                style={{ cursor: 'pointer' }}
              >
                {/* Pulse ring for active marker */}
                {isActive && (
                  <motion.circle
                    cx={loc.coordinates.x}
                    cy={loc.coordinates.y}
                    r={4}
                    fill="none"
                    stroke={color}
                    strokeWidth={0.4}
                    initial={{ r: 2, opacity: 0.6 }}
                    animate={{ r: 6, opacity: 0 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}

                {/* Glow ring on hover */}
                {(isHovered || isActive) && (
                  <circle
                    cx={loc.coordinates.x}
                    cy={loc.coordinates.y}
                    r={3}
                    fill="none"
                    stroke={color}
                    strokeWidth={0.3}
                    opacity={0.4}
                    className="map-room__marker-glow"
                  />
                )}

                {/* Main dot */}
                <circle
                  cx={loc.coordinates.x}
                  cy={loc.coordinates.y}
                  r={isActive ? 1.8 : 1.4}
                  fill={color}
                  stroke={isActive ? '#fff' : 'rgba(255,255,255,0.3)'}
                  strokeWidth={0.4}
                  filter="url(#marker-glow)"
                  className="map-room__marker-dot"
                />

                {/* Label name (always shown for key locations, or on hover) */}
                {(isHovered || isActive) && (
                  <text
                    x={loc.coordinates.x}
                    y={loc.coordinates.y - 3.5}
                    textAnchor="middle"
                    className="map-room__marker-label"
                    fill="#e8e0d0"
                    fontSize="2.8"
                    fontFamily="Georgia, serif"
                  >
                    {loc.name.length > 16 ? loc.modernName || loc.name : loc.name}
                  </text>
                )}
              </g>
            )
          })}
        </svg>

        {/* Keterangan legend */}
        <div className="map-room__legend">
          {Object.entries(categoryColors).map(([key, color]) => (
            <div key={key} className="map-room__legend-item">
              <span className="map-room__legend-dot" style={{ background: color }} />
              <span className="map-room__legend-label">{key.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Daftar lokasi (bawah peta — mobile-friendly) */}
      <div className="map-room__list">
        <h3 className="map-room__list-title">
          <MapPin size={14} />
          DAFTAR LOKASI
        </h3>
        <div className="map-room__list-grid">
          {filtered.map((loc, i) => (
            <motion.button
              key={loc.id}
              className="map-room__list-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.02, borderColor: categoryColors[loc.category] }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLoc(loc)}
            >
              <span className="map-room__list-card-icon">{loc.icon}</span>
              <div className="map-room__list-card-info">
                <span className="map-room__list-card-name">{loc.name}</span>
                <span className="map-room__list-card-desc">{loc.description.slice(0, 60)}…</span>
              </div>
              <span
                className="map-room__list-card-dot"
                style={{ background: categoryColors[loc.category] }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <MapLocationModal open={!!selectedLoc} location={selectedLoc} onClose={() => setSelectedLoc(null)} />
    </div>
  )
}
