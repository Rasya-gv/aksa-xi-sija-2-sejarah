import { DustField } from './VaultEffects'

interface CssVaultSafeboxProps {
  /** Nilai 0..1 jalan pembukaan. */
  openProgress: number
}

/**
 * Brankas rahasia 3D berbasis CSS (fallback bila WebGL tidak tersedia).
 * Dipakai juga sebagai referensi visual dengan efek HTML murni.
 * Tombol BUKA BRANKAS dirender oleh VaultRevealScene agar konsisten.
 */
export function CssVaultSafebox({ openProgress }: CssVaultSafeboxProps) {
  return (
    <div className="vault-css-scene">
      <DustField count={28} />

      <div className="vault-css" style={{ transform: `scale(${1 - 0.1 * openProgress})` }}>
        {/* Glow di belakang brankas */}
        <div
          className="vault-css__glow"
          style={{
            opacity: openProgress > 0.05 ? Math.min(1, openProgress * 2.4) : 0,
            transition: 'opacity 0.4s',
          }}
        />

        {/* Balok body — besi gelap */}
        <div className="vault-css__body">
          {/* Detail emas tepi */}
          <div className="vault-css__trim vault-css__trim--top" />
          <div className="vault-css__trim vault-css__trim--left" />
          <div className="vault-css__trim vault-css__trim--right" />
          <div className="vault-css__trim vault-css__trim--bottom" />

          {/* Cahaya dari celah pintu */}
          <div
            className="vault-css__seam-light"
            style={{
              opacity: openProgress > 0.02 ? Math.min(1, openProgress * 2.2) : 0,
              transition: 'opacity 0.35s',
            }}
          />

          {/* Pintu tebal — berputar membuka */}
          <div
            className="vault-css__door"
            style={{ transform: `perspective(1200px) rotateY(${-72 * openProgress}deg)` }}
          >
            <div className="vault-css__door-inner">
              {/* Roda kombinasi */}
              <div className="vault-css__wheel">
                <div className="vault-css__wheel-center" />
                <div className="vault-css__wheel-handle" />
              </div>
              {/* Handle pintu */}
              <div className="vault-css__handle" />
              {/* Papan nama */}
              <div className="vault-css__plate">
                <span>RAHASIA</span>
                <small>ARSIP NEGARA</small>
              </div>
            </div>
          </div>

          {/* Rongga dalam tersembunyi */}
          <div className="vault-css__interior" style={{ opacity: Math.min(1, openProgress * 2) }} />
        </div>

        {/* Bayangan di lantai */}
        <div
          className="vault-css__shadow"
          style={{ opacity: 1 - openProgress * 0.55 }}
        />
      </div>
    </div>
  )
}

export default CssVaultSafebox