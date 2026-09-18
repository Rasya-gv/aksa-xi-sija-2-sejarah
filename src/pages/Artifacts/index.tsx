import { useMemo, useState } from 'react'
import { Landmark, ShieldCheck, Fingerprint } from 'lucide-react'
import PageTransition from '../../components/ui/PageTransition'
import { ArtifactGrid } from '../../components/artifacts/ArtifactGrid'
import { ArtifactModal } from '../../components/artifacts/ArtifactModal'
import { artifacts, artifactFilters } from '../../data/artifacts'
import type { Artifact, ArtifactCategory } from '../../types/archive'

type ArtifactFilter = ArtifactCategory | 'semua'

/**
 * Artifact Archive — ruang artefak sejarah (Phase 6).
 *
 * Menampilkan galeri artefak bersejarah dalam bentuk kartu museum:
 * - bingkai visual + icon artefak
 * - judul, tahun, deskripsi singkat
 * - filter berdasarkan kategori
 * - modal detail saat artefak diklik (cerita, material, lokasi, arsip terkait)
 */
export function ArtifactsPage() {
  const [filter, setFilter] = useState<ArtifactFilter>('semua')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null)

  const filtered = useMemo(
    () => (filter === 'semua' ? artifacts : artifacts.filter((a) => a.category === filter)),
    [filter],
  )

  return (
    <PageTransition>
      <div className="artifact-room">
        {/* Atmosfer ruang */}
        <div className="artifact-room__atmos" aria-hidden>
          <div className="artifact-room__beams" />
          <div className="artifact-room__vignette" />
        </div>

        {/* Header halaman */}
        <header className="artifact-room__header">
          <div className="artifact-room__kicker">
            <Fingerprint size={13} />
            KOLEKSI BENDA BERSEJARAH
          </div>
          <h1 className="artifact-room__title">
            <Landmark size={30} color="var(--accent)" />
            Artefak Sejarah
          </h1>
          <p className="artifact-room__sub">
            Objek fisik, dokumen, dan benda bersejarah yang tersimpan dalam vault arsip nasional.
            Klik artefak untuk membuka cerita dan konteks lengkap.
          </p>
          <div className="artifact-room__stats">
            <span className="artifact-room__stat">
              <ShieldCheck size={13} />
              {artifacts.length} ARTEFAK TERVERIFIKASI
            </span>
            <span className="artifact-room__stat">
              <Fingerprint size={13} />
              {artifacts.filter((a) => a.status === 'Verified').length} TERVERIFIKASI
            </span>
          </div>
        </header>

        {/* Filter kategori */}
        <div className="artifact-room__filters" role="tablist" aria-label="Filter artefak">
          {artifactFilters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`artifact-room__filter${filter === f.key ? ' artifact-room__filter--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid artefak */}
        <ArtifactGrid
          artifacts={filtered}
          onSelect={(artifact: Artifact) => {
            setSelectedArtifact(artifact)
            setModalOpen(true)
          }}
        />

        <ArtifactModal
          open={modalOpen}
          artifact={selectedArtifact}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </PageTransition>
  )
}

export default ArtifactsPage