import { Archive, Clock3, Landmark, Lock, MapPin, ScanSearch, Users } from 'lucide-react'
import type { NavItem } from '../types/archive'

/** Definisi item navigasi utama — sumber tunggal untuk Navbar */
export const navItems: NavItem[] = [
  { key: 'vault', label: 'Vault', path: '/', icon: Lock },
  { key: 'archive', label: 'Arsip', path: '/archive', icon: Archive },
  { key: 'timeline', label: 'Timeline', path: '/timeline', icon: Clock3 },
  { key: 'characters', label: 'Tokoh', path: '/characters', icon: Users },
  { key: 'artifacts', label: 'Artefak', path: '/artifacts', icon: Landmark },
  { key: 'map', label: 'Peta', path: '/map', icon: MapPin },
  { key: 'investigation', label: 'Investigasi', path: '/investigation', icon: ScanSearch },
]

