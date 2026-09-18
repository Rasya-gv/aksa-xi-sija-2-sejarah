import { IndonesiaMap } from '../../components/map/IndonesiaMap'
import PageTransition from '../../components/ui/PageTransition'

/**
 * Halaman Peta Interaktif Indonesia — Phase 7B
 *
 * Visualisasi peta nusantara dengan marker lokasi bersejarah.
 * Menggunakan IndonesiaMap component sebagai komponen utama.
 */
export function MapPage() {
  return (
    <PageTransition>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px 48px' }}>
        <IndonesiaMap />
      </div>
    </PageTransition>
  )
}

export default MapPage
