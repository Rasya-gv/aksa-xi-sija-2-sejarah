import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { VaultMaterials } from './VaultDoor'

interface VaultLockProps {
  materials: VaultMaterials
  /** Posisi roda kombinasi pada permukaan pintu. */
  position?: [number, number, number]
  /** 0..1 — berputar sedikit saat brankas terbuka. */
  openProgress?: number
}

/**
 * Roda kombinasi brankas — cincin emas dengan angka, berputar perlahan
 * di dalam keadaan idle, lalu berpilin saat pintu membuka.
 */
export function VaultLock({ materials, position = [0, 0, 0], openProgress = 0 }: VaultLockProps) {
  const wheelRef = useRef<THREE.Group>(null)
  const spinRef = useRef(0)

  // Nilai pull dari brankas terbuka (dari CSS/JS tidak ada — dipakai dari parent)
  const spin = Math.PI * 1.5 * openProgress

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    // Idle: rotasi halus kecil; membuka: berputar signifikan
    const idle = Math.sin(t * 0.4) * 0.25
    const target = idle + spin
    spinRef.current = THREE.MathUtils.lerp(spinRef.current, target, 1 - Math.pow(0.02, delta))

    if (wheelRef.current) {
      wheelRef.current.rotation.z = spinRef.current
    }
  })

  const tickPositions = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2
    return {
      angle,
      x: Math.cos(angle) * 0.42,
      y: Math.sin(angle) * 0.42,
    }
  })

  return (
    <group position={position}>
      <group ref={wheelRef}>
        {/* Cincin luar — emas */}
        <mesh material={materials.gold} castShadow>
          <torusGeometry args={[0.5, 0.07, 12, 48]} />
        </mesh>
        {/* Disk dalam — besi gelap */}
        <mesh material={materials.iron}>
          <cylinderGeometry args={[0.42, 0.42, 0.1, 32]} />
        </mesh>
        {/* Angka/tanda posisi di tepi */}
        {tickPositions.map((tp, i) => (
          <mesh key={i} material={materials.gold} position={[tp.x, tp.y, 0.055]}>
            <boxGeometry args={[0.05, 0.05, 0.02]} />
          </mesh>
        ))}
        {/* Poros tengah */}
        <mesh material={materials.darkIron} position={[0, 0, 0.07]}>
          <cylinderGeometry args={[0.12, 0.12, 0.09, 24]} />
        </mesh>
      </group>
    </group>
  )
}

export default VaultLock