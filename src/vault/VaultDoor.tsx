import { useMemo } from 'react'
import type * as THREE from 'three'
import { VaultLock } from './VaultLock'

export interface VaultMaterials {
  iron: THREE.MeshStandardMaterial
  darkIron: THREE.MeshStandardMaterial
  gold: THREE.MeshStandardMaterial
}

interface VaultDoorProps {
  materials: VaultMaterials
  /** 0 = tertutup, 1 = terbuka penuh (memengaruhi rotasi pintu). */
  openProgress: number
}

/**
 * Pintu brankas tebal — berputar membuka di sumbu kiri.
 * Roda kombinasi & handle diletakkan di permukaan pintu (lihat VaultLock).
 */
export function VaultDoor({ materials, openProgress }: VaultDoorProps) {
  const wheelPos = useMemo<[number, number, number]>(() => [-0.35, -0.55, 1.62], [])

  return (
    <group>
      {/* Pelat pintu */}
      <mesh material={materials.iron} position={[0, 0, 0]} castShadow>
        <boxGeometry args={[3.0, 2.6, 0.22]} />
      </mesh>

      {/* Perkuat tepi pintu dengan bilah emas tipis */}
      <mesh material={materials.gold} position={[0, 1.18, 0.12]}>
        <boxGeometry args={[2.92, 0.07, 0.03]} />
      </mesh>
      <mesh material={materials.gold} position={[0, -1.18, 0.12]}>
        <boxGeometry args={[2.92, 0.07, 0.03]} />
      </mesh>

      {/* Roda kombinasi (lock) — dipisah agar reusable */}
      <VaultLock materials={materials} position={wheelPos} openProgress={openProgress} />

      {/* Handle pembuka — lengan horizontal */}
      <mesh material={materials.iron} position={[0.5, 0.55, 0.14]} castShadow>
        <boxGeometry args={[1.0, 0.09, 0.09]} />
      </mesh>
      <mesh material={materials.gold} position={[0.5, 0.55, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.06, 16]} />
      </mesh>
    </group>
  )
}