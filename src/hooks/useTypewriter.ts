import { useEffect, useRef, useState } from 'react'

interface UseTypewriterOptions {
  /** Kecepatan ketik per karakter (ms) */
  speed?: number
  /** Delay sebelum mulai mengetik (ms) */
  delay?: number
  /** Dipanggil saat teks selesai diketik */
  onComplete?: () => void
}

/**
 * Hook efek mesin ketik.
 * Aman terhadap identitas callback yang berubah — onComplete disimpan di ref
 * agar tidak memicu useEffect berulang.
 */
export function useTypewriter(
  text: string,
  { speed = 45, delay = 0, onComplete }: UseTypewriterOptions = {},
) {
  const [display, setDisplay] = useState('')
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    let index = 0
    let intervalId: ReturnType<typeof setInterval> | undefined

    const start = window.setTimeout(() => {
      // Reset tampilan tepat sebelum mulai mengetik (di dalam callback).
      setDisplay('')

      intervalId = window.setInterval(() => {
        index += 1
        setDisplay(text.slice(0, index))

        if (index >= text.length) {
          if (intervalId) window.clearInterval(intervalId)
          onCompleteRef.current?.()
        }
      }, speed)
    }, delay)

    return () => {
      window.clearTimeout(start)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [text, speed, delay])

  return display
}

export default useTypewriter