import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float, PerspectiveCamera, Sparkles } from '@react-three/drei'
import { Suspense, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { VaultDoor } from './VaultDoor'
import { VaultLock } from './VaultLock'

type VaultSceneProps = {
  /** Nilai 0..1 menggerakkan posisi kamera agar mendekat. */
  openProgress: number
}

/**
 * Scene utama brankas rahasia — React Three Fiber.
 * Menampilkan: body besi gelap dengan detail emas, pintu tebal,
 * roda kombinasi, cahaya dari celah pintu, dan debu melayang.
 */
export function VaultScene({ openProgress }: VaultSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      className="vault-canvas"
    >
      <SceneContent openProgress={openProgress} />
    </Canvas>
  )
}

function SceneContent({ openProgress }: { openProgress: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const lightRef = useRef<THREE.SpotLight>(null)
  const interiorLightRef = useRef<THREE.PointLight>(null)
  const doorGroupRef = useRef<THREE.Group>(null)
  const seamGlowRef = useRef<THREE.Mesh>(null)

  // Dolly-in sinematik saat scene pertama kali muncul
  const [entered] = useState(() => Date.now())

  const materials = useMemo(() => {
    const iron = new THREE.MeshStandardMaterial({
      color: '#1b1f26',
      metalness: 0.9,
      roughness: 0.34,
    })
    const darkIron = new THREE.MeshStandardMaterial({
      color: '#0d0f13',
      metalness: 0.95,
      roughness: 0.42,
    })
    const gold = new THREE.MeshStandardMaterial({
      color: '#c8a24a',
      metalness: 1,
      roughness: 0.2,
      emissive: '#3a2f15',
      emissiveIntensity: 0.18,
    })
    return { iron, darkIron, gold }
  }, [])

  // Gerakkan kamera mendekat saat membuka + rotasi pintu + nyalakan cahaya dalam.
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const elapsed = (Date.now() - entered) / 1000

    // Kamera: mulai jauh (9.2) lalu dolly-in ke 7.2, dan mendekat lagi saat membuka
    const introZ = THREE.MathUtils.clamp(9.2 - elapsed * 0.9, 7.2, 9.2)
    const targetZ = introZ - openProgress * 1.8
    const currentZ = cameraRef.current?.position.z ?? 9.2
    const nextZ = THREE.MathUtils.lerp(currentZ, targetZ, 1 - Math.pow(0.004, delta))
    cameraRef.current?.position.set(0, 0.15 + Math.sin(t * 0.2) * 0.03, nextZ)
    cameraRef.current?.lookAt(0, 0, 0)

    if (lightRef.current) {
      lightRef.current.position.set(
        Math.sin(t * 0.15) * 1.2,
        3.4,
        2.6 + Math.cos(t * 0.12) * 0.3,
      )
      // Cahaya utama sedikit meredup saat pintu terbuka — diganti cahaya interior
      lightRef.current.intensity = 26 * (1 - openProgress * 0.45)
    }

    if (interiorLightRef.current) {
      interiorLightRef.current.intensity = Math.min(openProgress * 70, 70)
    }

    if (doorGroupRef.current) {
      // Pintu berputar membuka dengan ease-out — berhenti mulus di sudut terbuka
      const eased = openProgress < 0.6 ? openProgress / 0.6 : 1
      doorGroupRef.current.rotation.y = -eased * 2.15
    }

    if (seamGlowRef.current) {
      // Cahaya dari celah pintu — membesar pelan saat pintu mulai terbuka
      const glow = openProgress > 0.04 ? THREE.MathUtils.clamp((openProgress - 0.04) * 3, 0, 1) : 0
      const mat = seamGlowRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = glow * 0.9
      seamGlowRef.current.scale.set(1, 1, 0.3 + glow * 1.6)
    }
  })

  return (
    <>
      <color attach="background" args={['#05060a']} />
      <fog attach="fog" args={['#05060a', 8, 16]} />

      <PerspectiveCamera ref={cameraRef} makeDefault fov={42} position={[0, 0.15, 9.2]} near={0.1} far={30} />

      {/* Ambient lemah agar besi tidak hitam pekat */}
      <ambientLight intensity={0.12} />
      {/* Cahaya utama — menyapu dari atas */}
      <spotLight
        ref={lightRef}
        position={[1.2, 3.4, 2.6]}
        angle={0.5}
        penumbra={0.9}
        intensity={26}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 2, 1]} intensity={0.35} color="#c8a24a" />

      {/* Vault body — blok besi dengan tepi emas */}
      <group position={[0, -0.55, 0]}>
        <MeshBox
          args={[4.2, 3.6, 3.4]}
          material={materials.darkIron}
          position={[0, 0, 0]}
          castShadow
          receiveShadow
        />
        {/* Trim emas vertikal di tepi kiri/kanan depan */}
        <MeshBox args={[0.08, 3.42, 0.06]} material={materials.gold} position={[-2.0, 0, 1.72]} />
        <MeshBox args={[0.08, 3.42, 0.06]} material={materials.gold} position={[2.0, 0, 1.72]} />
        {/* Trim emas atas/bawah */}
        <MeshBox args={[4.02, 0.08, 0.06]} material={materials.gold} position={[0, 1.68, 1.72]} />
        <MeshBox args={[4.02, 0.08, 0.06]} material={materials.gold} position={[0, -1.68, 1.72]} />
        {/* Trim emas vertikal di tengah rel pintu */}

        {/* Rongga interior (bukaan pintu) */}
        <MeshBox args={[3.0, 2.6, 0.15]} material={materials.iron} position={[0, 0.1, 1.42]} />

        {/* Glow dari celah pintu — terlihat saat mulai terbuka */}
        <mesh ref={seamGlowRef} position={[0, 0.1, 1.53]}>
          <planeGeometry args={[2.9, 2.5]} />
          <meshBasicMaterial
            color="#ffd786"
            transparent
            opacity={0}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Pintu berputar */}
        <group ref={doorGroupRef} position={[0, 0.1, 1.55]}>
          <VaultDoor materials={materials} openProgress={openProgress} />
        </group>

        {/* Cahaya dari celah pintu */}
        <pointLight
          ref={interiorLightRef}
          position={[0, 0.2, 1.0]}
          color="#ffd786"
          intensity={0}
          distance={7}
        />
      </group>

      {/* Lantai */}
      <MeshPlane args={[24, 24]} position={[0, -2.15, -2]} receiveShadow />

      {/* Debu melayang */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.2}>
        <Sparkles count={130} scale={[9, 4.5, 6]} size={1.6} speed={0.25} color="#e6c36b" opacity={0.4} />
      </Float>

      {/* Bayangan kontak di lantai */}
      <ContactShadows position={[0, -2.14, 0]} opacity={0.6} scale={12} blur={2.4} far={4} />

      <Environment preset="night" />
      <Suspense fallback={null}>
        <VaultLock materials={materials} openProgress={openProgress} />
      </Suspense>
    </>
  )
}

function MeshBox({
  args,
  material,
  position,
  castShadow,
  receiveShadow,
}: {
  args: [number, number, number]
  material: THREE.Material
  position: [number, number, number]
  castShadow?: boolean
  receiveShadow?: boolean
}) {
  return (
    <mesh material={material} position={position} castShadow={castShadow} receiveShadow={receiveShadow}>
      <boxGeometry args={args} />
    </mesh>
  )
}

function MeshPlane({
  args,
  position,
  receiveShadow,
}: {
  args: [number, number]
  position: [number, number, number]
  receiveShadow?: boolean
}) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} receiveShadow={receiveShadow}>
      <planeGeometry args={args} />
      <meshStandardMaterial color="#0a0c10" metalness={0.3} roughness={0.9} />
    </mesh>
  )
}

export default VaultScene