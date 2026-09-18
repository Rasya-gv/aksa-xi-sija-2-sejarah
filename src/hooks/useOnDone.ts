import { useCallback, useEffect, useRef } from 'react'

/**
 * Hook yang memanggil callback sekali setiap kali kondisi `done`
 * berubah dari false menjadi true.
 * Guard internal mencegah double-fire pada React StrictMode (dev),
 * dan di-reset otomatis saat kondisi kembali false.
 */
export function useOnDone(done: boolean, callback: () => void) {
  const firedRef = useRef(false)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // Reset penjaga saat kondisi belum/belum lagi selesai.
  useEffect(() => {
    if (!done) {
      firedRef.current = false
    }
  }, [done])

  const fire = useCallback(() => {
    if (!firedRef.current) {
      firedRef.current = true
      callbackRef.current()
    }
  }, [])

  useEffect(() => {
    if (done) fire()
  }, [done, fire])
}

export default useOnDone