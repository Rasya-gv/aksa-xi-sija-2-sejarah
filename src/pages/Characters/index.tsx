import { useMemo, useState } from 'react'
import { Users, Fingerprint, ShieldCheck } from 'lucide-react'
import PageTransition from '../../components/ui/PageTransition'
import { CharacterGrid } from '../../components/characters/CharacterGrid'
import { CharacterModal } from '../../components/characters/CharacterModal'
import { characters } from '../../data/characters'
import type { HistoricalFigure } from '../../types/archive'

/** Kategori era pergerakan untuk filter kartu tokoh */
type CharacterFilter = 'semua' | 'awak' | 'org' | 'politik' | 'proklamasi'

const FILTERS: { value: CharacterFilter; label: string }[] = [
  { value: 'semua', label: 'SEMUA' },
  { value: 'awak', label: 'AWAL' },
  { value: 'org', label: 'ORG' },
  { value: 'politik', label: 'POLITIK' },
  { value: 'proklamasi', label: 'PROKLAMASI' },
]

/**
 * Character Archive — ruang tokoh perjuangan nasional (Phase 5).
 *
 * Menampilkan kartu tokoh dalam grid "berkas investigasi":
 * - avatar & identitas tokoh
 * - peran & rentang hidup
 * - tautan ke arsip terverifikasi (dossier)
 * - modal detail saat kartu diklik
 */
export function CharactersPage() {
  const [filter, setFilter] = useState<CharacterFilter>('semua')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFigure, setSelectedFigure] = useState<HistoricalFigure | null>(null)

  /** Filter sederhana berdasarkan id tokoh (ST/WS/TR/DD/CM/KH/AD/TA/SK/MH/TM/SS/WR/RK) */
  const filtered = useMemo(() => {
    if (filter === 'semua') return characters
    return characters.filter((c) => {
      const prefix = c.id.split('-')[0]
      if (filter === 'awak') return ['ST', 'WS', 'TR', 'AD', 'RK'].includes(prefix)
      if (filter === 'org') return ['DD', 'CM', 'KH', 'TA'].includes(prefix)
      if (filter === 'politik') return ['SK', 'TM', 'SS'].includes(prefix)
      if (filter === 'proklamasi') return ['SK', 'MH', 'TM', 'SS'].includes(prefix)
      return true
    })
  }, [filter])

  return (
    <PageTransition>
      <div className="character-room">
        {/* Atmosfer ruang */}
        <div className="character-room__atmos" aria-hidden>
          <div className="character-room__beams" />
          <div className="character-room__vignette" />
        </div>

        {/* Header halaman */}
        <header className="character-room__header">
          <div className="character-room__kicker">
            <Fingerprint size={13} />
            RUANG TOKOH — AKSES KLASIFIKASI
          </div>
          <h1 className="character-room__title">
            <Users size={30} color="var(--accent)" />
            Tokoh Perjuangan Nasional
          </h1>
          <p className="character-room__sub">
            Dossier tokoh yang tercatat dalam arsip-arsip terverifikasi.
            Klik kartu untuk membuka berkas investigasi lengkap.
          </p>
          <div className="character-room__stats">
            <span className="character-room__stat">
              <ShieldCheck size={13} />
              {characters.length} TOKOH TERVERIFIKASI
            </span>
            <span className="character-room__stat">
              <Fingerprint size={13} />
              {characters.reduce((n, c) => n + (c.relatedArchiveIds?.length ?? 0), 0)} TAUTAN ARSIP
            </span>
          </div>
        </header>

        {/* Filter era pergerakan */}
        <div className="character-room__filters" role="tablist" aria-label="Filter tokoh">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              className={`character-room__filter${filter === f.value ? ' character-room__filter--active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid tokoh */}
        <CharacterGrid
          figures={filtered}
          onSelect={(figure: HistoricalFigure) => {
            setSelectedFigure(figure)
            setModalOpen(true)
          }}
        />

        <CharacterModal
          open={modalOpen}
          figure={selectedFigure}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </PageTransition>
  )
}

export default CharactersPage