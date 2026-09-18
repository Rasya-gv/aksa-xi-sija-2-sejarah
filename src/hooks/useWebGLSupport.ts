import { useEffect, useState } from 'react'

/**
 * Mendeteksi apakah browser mendukung WebGL.
 * Mengembalikan `null` saat belum diketahui, lalu `true`/`false`.
 * Dipakai untuk memilih antara scene React Three Fiber atau fallback CSS 3D.
 */
export function useWebGLSupport(): boolean | null {
  const [support, setSupport] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false

    const check = () => {
      try {
        const canvas = document.createElement('canvas')
        const gl =
          canvas.getContext('webgl2') ||
          canvas.getContext('webgl') ||
          canvas.getContext('experimental-webgl')
        if (!cancelled) setSupport(Boolean(gl))
      } catch {
        if (!cancelled) setSupport(false)
      }
    }

    // Deferred agar tidak memanggil setState sinkron di dalam effect.
    const id = window.setTimeout(check, 0)

    return () => {
      cancelled = true
      window.clearTimeout(id)
    }
  }, [])

  return support
}

export default useWebGLSupport