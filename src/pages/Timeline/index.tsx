import { useMemo, useState } from 'react'
import { Clock3, Landmark, ShieldCheck, Zap } from 'lucide-react'
import PageTransition from '../../components/ui/PageTransition'
import { TimelineNode } from '../../components/timeline/TimelineNode'
import { TimelineModal } from '../../components/timeline/TimelineModal'
import { timeline } from '../../data/timeline'
import type { TimelineEvent } from '../../types/archive'

/** Filter kategori peristiwa */
type TimelineFilter = 'semua' | 'Political' | 'Social' | 'Military' | 'Cultural' | 'Diplomatic'

const FILTERS: { value: TimelineFilter; label: string }[] = [
  { value: 'semua', label: 'SEMUA' },
  { value: 'Political', label: 'POLITIK' },
  { value: 'Social', label: 'SOSIAL' },
  { value: 'Military', label: 'MILITER' },
  { value: 'Cultural', label: 'BUDAYA' },
  { value: 'Diplomatic', label: 'DIPLOMASI' },
]

/**
 * Timeline Interaktif — Garis Waktu Perjuangan Nasional (Phase 7).
 *
 * Visualisasi vertikal cinematic:
 * - garis utama dengan node berwarna berdasarkan kategori
 * - landmark events: glow besar + ring
 * - alternasi kiri-kanan untuk kartu peristiwa
 * - modal detail saat diklik (narasi + dampak + kutipan + arsip)
 * - filter berdasarkan kategori
 */
export function TimelinePage() {
  const [filter, setFilter] = useState<TimelineFilter>('semua')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const filtered = useMemo(
    () => (filter === 'semua' ? timeline : timeline.filter((e) => e.category === filter)),
    [filter],
  )

  const landmarks = timeline.filter((e) => e.detail?.significance === 'landmark').length
  const totalArchives = timeline.reduce((n, e) => n + (e.archiveIds?.length ?? 0), 0)

  return (
    <PageTransition>
      <div className="timeline-room">
        {/* Atmosfer ruang */}
        <div className="timeline-room__atmos" aria-hidden>
          <div className="timeline-room__beams" />
          <div className="timeline-room__vignette" />
        </div>

        {/* Header halaman */}
        <header className="timeline-room__header">
          <div className="timeline-room__kicker">
            <Zap size={13} />
            GARIS WAKTU PERJUANGAN
          </div>
          <h1 className="timeline-room__title">
            <Clock3 size={30} color="var(--accent)" />
            Garis Waktu Sejarah
          </h1>
          <p className="timeline-room__sub">
            Perjalanan pergerakan nasional dari Budi Utomo (1908) hingga Proklamasi Kemerdekaan (1945).
            Klik peristiwa untuk membuka narasi lengkap.
          </p>
          <div className="timeline-room__stats">
            <span className="timeline-room__stat">
              <Clock3 size={13} />
              {timeline.length} PERISTIWA
            </span>
            <span className="timeline-room__stat">
              <Landmark size={13} />
              {landmarks} LANDMARK
            </span>
            <span className="timeline-room__stat">
              <ShieldCheck size={13} />
              {totalArchives} ARSIP TERKAIT
            </span>
          </div>
        </header>

        {/* Filter kategori */}
        <div className="timeline-room__filters" role="tablist" aria-label="Filter peristiwa">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              className={`timeline-room__filter${filter === f.value ? ' timeline-room__filter--active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Garis waktu vertikal */}
        <div className="timeline-track">
          <div className="timeline-track__line" aria-hidden />
          <div className="timeline-track__nodes">
            {filtered.map((event, i) => (
              <TimelineNode
                key={event.id}
                event={event}
                index={i}
                side={i % 2 === 0 ? 'left' : 'right'}
                onSelect={(e) => {
                  setSelectedEvent(e)
                  setModalOpen(true)
                }}
              />
            ))}
          </div>
        </div>

        <TimelineModal
          open={modalOpen}
          event={selectedEvent}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </PageTransition>
  )
}

export default TimelinePage