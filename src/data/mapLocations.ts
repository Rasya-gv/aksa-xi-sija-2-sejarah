import type { MapLocation } from '../types/archive'

/**
 * LOKASI PERISTIWA PERJUANGAN NASIONAL — Phase 7B
 *
 * Titik-titik bersejarah di seluruh Nusantara yang menjadi
 * panggung pergerakan nasional Indonesia. Setiap lokasi memiliki
 * koordinat SVG untuk peta interaktif, serta narasi lengkap.
 */
export const mapLocations: MapLocation[] = [
  /* ── JAWA ── */
  {
    id: 'LOC-BAT',
    name: 'Batavia (Jakarta)',
    region: 'Jawa',
    modernName: 'Jakarta',
    coordinates: { x: 68, y: 80 },
    category: 'political',
    era: '1908–1945',
    description: 'Ibu kota Hindia Belanda — pusat pergerakan nasional sejak Budi Utomo hingga Proklamasi.',
    detail:
      'Sebagai pusat pemerintahan kolonial, Batavia menjadi tempat lahirnya organisasi pergerakan nasional pertama. STOVIA, rumah sakit, dan gedung-gedung pemerintahan di sini menjadi saksi bisu lahirnya kesadaran kebangsaan.',
    relatedEvents: ['TL-1908', 'TL-1928', 'TL-1945'],
    relatedFigures: ['RS Soerjopranoto', 'Ki Hadjar Dewantara', 'Sukarno'],
    icon: '🏛️',
    coordinateInfo: '6°12\'S 106°50\'E',
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Batavia',
    ],
  },
  {
    id: 'LOC-SUR',
    name: 'Surabaya',
    region: 'Jawa',
    modernName: 'Surabaya',
    coordinates: { x: 73, y: 92 },
    category: 'military',
    era: '1945',
    description: 'Medan pertempuran 10 November 1945 — tempat lahirnya semangat "Arek-arek Suroboyo".',
    detail:
      'Pertempuran Surabaya merupakan pertempuran terbesar dan terpenting dalam sejarah revolusi nasional. Arek-arek Suroboyo di bawah pimpinan Bung Tomo berjuang mati-matian mempertahankan kemerdekaan. Peristiwa ini menjadi inspirasi Hari Pahlawan.',
    relatedEvents: ['TL-1945'],
    relatedFigures: ['Bung Tomo'],
    icon: '⚔️',
    coordinateInfo: '7°15\'S 112°44\'E',
    source: [
      'Museum Sepuluh Nopember, Surabaya (museumsurabaya.id)',
      'Wikipedia bahasa Indonesia — Pertempuran Surabaya',
    ],
  },
  {
    id: 'LOC-SLB',
    name: 'Solo (Surakarta)',
    region: 'Jawa',
    modernName: 'Surakarta',
    coordinates: { x: 69, y: 88 },
    category: 'political',
    era: '1911–1912',
    description: 'Lahirnya Sarekat Islam — organisasi massa politik terbesar pascakolonial.',
    detail:
      'Solo menjadi kota kelahiran Sarekat Dagang Islam (1911) yang bertransformasi menjadi Sarekat Islam di bawah Tjokroaminoto. Organisasi ini mampu menghimpun jutaan anggota dari berbagai lapisan masyarakat, menjadikannya gerakan politik pribumi terbesar di masa itu.',
    relatedEvents: ['TL-1911'],
    relatedFigures: ['H.O.S. Tjokroaminoto'],
    icon: '🕌',
    coordinateInfo: '7°34\'S 110°49\'E',
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Sarekat Islam',
    ],
  },
  {
    id: 'LOC-BDG',
    name: 'Bandung',
    region: 'Jawa',
    modernName: 'Bandung',
    coordinates: { x: 65, y: 82 },
    category: 'military',
    era: '1946',
    description: 'Kota Kembang — tempat meledaknya Api Perjuangan dan Bandung Lautan Api.',
    detail:
      'Pada 23 Maret 1946, untuk menggagalkan rencana Sekutu menjadikan Bandung sebagai pangkalan militer, perjuangan rakyat membakar seluruh kota. Kejadian ini dikenal sebagai Bandung Lautan Api — sebuah simbol pengorbanan tanpa pamrih demi kemerdekaan.',
    relatedEvents: [],
    relatedFigures: [],
    icon: '🔥',
    coordinateInfo: '6°55\'S 107°37\'E',
    source: [
      'Museum Konferensi Asia Afrika (asianafricanmuseum.org)',
      'Wikipedia bahasa Indonesia — Bandung Lautan Api',
    ],
  },
  {
    id: 'LOC-YOG',
    name: 'Yogyakarta',
    region: 'Jawa',
    modernName: 'Yogyakarta',
    coordinates: { x: 69, y: 90 },
    category: 'cultural',
    era: '1945–1949',
    description: 'Ibukota RI masa perjuangan — pusat pendidikan dan seni pergerakan.',
    detail:
      'Yogyakarta menjadi ibu kota Republik Indonesia selama masa revolusi. Kauman, kampung Muhammadiyah, menjadi basis pendidikan nasionalis. Ki Hadjar Dewantara mendirikan Taman Siswa di sini. Serangan Umum 1 Maret 1949 juga terjadi di kota ini.',
    relatedEvents: ['TL-1918'],
    relatedFigures: ['Ki Hadjar Dewantara', 'Soedirman'],
    icon: '🎓',
    coordinateInfo: '7°48\'S 110°22\'E',
    source: [
      'Museum Benteng Vredeburg Yogyakarta (vredeburg.id)',
      'Taman Siswa (tamansiswa.org)',
    ],
  },

  /* ── SUMATERA ── */
  {
    id: 'LOC-BEN',
    name: 'Bengkulu',
    region: 'Sumatera',
    modernName: 'Bengkulu',
    coordinates: { x: 33, y: 93 },
    category: 'political',
    era: '1938–1942',
    description: 'Tempat pengasingan Bung Karno — tempat ia menulis manifesto perjuangan.',
    detail:
      'Bengkulu menjadi tempat pengasingan Sukarno oleh pemerintah kolonial Belanda. Selama di sini, Sukarno tetap aktif berjuang lewat tulisan dan pemikiran. Di Bengkulo pula ia menikah dengan Fatmawati dan menulis sejumlah manifesto penting perjuangan kemerdekaan.',
    relatedEvents: [],
    relatedFigures: ['Sukarno'],
    icon: '📝',
    coordinateInfo: '3°48\'S 102°15\'E',
    source: [
      'Arsip Nasional RI (anri.go.id) — koleksi pengasingan Soekarno',
      'Wikipedia bahasa Indonesia — Bengkulu',
    ],
  },
  {
    id: 'LOC-PDG',
    name: 'Padang',
    region: 'Sumatera',
    modernName: 'Padang',
    coordinates: { x: 26, y: 88 },
    category: 'political',
    era: '1920–1945',
    description: 'Pusat pergerakan Sumatera Barat — lahirnya para intelektual nasionalis.',
    detail:
      'Kota Padang dan Sumatera Barat merupakan kampung halaman bagi banyak tokoh pergerakan nasional seperti Mohammad Hatta, Sutan Sjahrir, dan Agus Salim. Pergerakan intelektual dari ranah Minangkabau memberikan kontribusi besar bagi pemikiran kebangsaan Indonesia.',
    relatedEvents: [],
    relatedFigures: ['Mohammad Hatta', 'Sutan Sjahrir', 'Agus Salim'],
    icon: '📚',
    coordinateInfo: '0°57\'S 100°24\'E',
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Padang',
    ],
  },
  {
    id: 'LOC-FLO',
    name: 'Endeh, Flores',
    region: 'Nusa Tenggara',
    modernName: 'Ende, Flores',
    coordinates: { x: 120, y: 107 },
    category: 'political',
    era: '1934–1938',
    description: 'Pengasingan Sukarno — tempat lahirnya ide dasar Pancasila.',
    detail:
      'Sukarno diasingkan ke Ende, Flores selama empat tahun (1934-1938). Di sinilah, saat merenung di bawah pohon sukun, gagasan-gagasan yang kelak menjadi dasar negara Pancasila mulai terbentuk. Flores menjadi saksi bisu lahirnya filosofi kebangsaan Indonesia.',
    relatedEvents: [],
    relatedFigures: ['Sukarno'],
    icon: '🌳',
    coordinateInfo: '8°40\'S 121°44\'E',
    source: [
      'Museum Bung Karno Ende (endekab.go.id)',
      'Wikipedia bahasa Indonesia — Ende, Flores',
    ],
  },
  {
    id: 'LOC-BUK',
    name: 'Bukittinggi',
    region: 'Sumatera',
    modernName: 'Bukittinggi',
    coordinates: { x: 27, y: 85 },
    category: 'cultural',
    era: '1920–1945',
    description: 'Kota kelahiran intelektual — pusat pendidikan dan pemikiran nasionalis.',
    detail:
      'Bukittinggi merupakan kota bersejarah di Sumatera Barat yang melahirkan banyak tokoh pergerakan nasional. Jam Gadang yang ikonik menjadi simbol kota ini. Pendidikan yang berkembang pesat di sini menghasilkan pemikir-pemikir yang membawa gagasan kemerdekaan ke seluruh Nusantara.',
    relatedEvents: [],
    relatedFigures: ['Mohammad Hatta', 'Sutan Sjahrir'],
    icon: '🗼',
    coordinateInfo: '0°15\'S 100°22\'E',
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Bukittinggi',
    ],
  },
  {
    id: 'LOC-JAM',
    name: 'Jambi',
    region: 'Sumatera',
    modernName: 'Jambi',
    coordinates: { x: 40, y: 85 },
    category: 'social',
    era: '1945',
    description: 'Basis perjuangan kemerdekaan di Sumatera Tengah.',
    detail:
      'Jambi menjadi basis penting perjuangan kemerdekaan di Sumatera Tengah. Perlawanan rakyat terhadap sekutu dan Belanda di kawasan ini memainkan peran penting dalam mempertahankan kemerdekaan di wilayah Sumatera.',
    relatedEvents: [],
    relatedFigures: [],
    icon: '⚔️',
    coordinateInfo: '1°29\'S 102°27\'E',
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Jambi',
    ],
  },

  /* ── INDONESIA TIMUR ── */
  {
    id: 'LOC-MAN',
    name: 'Manado',
    region: 'Sulawesi',
    modernName: 'Manado',
    coordinates: { x: 115, y: 52 },
    category: 'military',
    era: '1945',
    description: 'Perjuangan kemerdekaan di Sulawesi Utara — peristiwa 14 Februari.',
    detail:
      'Peristiwa 14 Februari 1946 di Manado merupakan salah satu pertempuran sengit di Indonesia Timur. Rakyat Sulawesi Utara berjuang mati-matian mempertahankan kemerdekaan di tengah tekanan militer sekutu.',
    relatedEvents: [],
    relatedFigures: [],
    icon: '⚔️',
    coordinateInfo: '1°28\'N 124°50\'E',
    source: [
      'Museum Negeri Sulawesi Utara',
      'Wikipedia bahasa Indonesia — Manado',
    ],
  },
  {
    id: 'LOC-MED',
    name: 'Medan',
    region: 'Sumatera',
    modernName: 'Medan',
    coordinates: { x: 34, y: 70 },
    category: 'military',
    era: '1945',
    description: 'Medan area — pertempuran sengit di Sumatera Utara.',
    detail:
      'Medan Area menjadi arena pertempuran sengit antara pejuang kemerdekaan dan pasukan sekutu. Perlawanan rakyat di bawah pimpinan berbagai laskar rakyat menjadi bukti semangat pantang menyerah warga Sumatera Utara dalam mempertahankan kemerdekaan.',
    relatedEvents: [],
    relatedFigures: [],
    icon: '⚔️',
    coordinateInfo: '3°35\'N 98°40\'E',
    source: [
      'Museum Perjuangan TNI Medan',
      'Wikipedia bahasa Indonesia — Medan Area',
    ],
  },
  {
    id: 'LOC-MK',
    name: 'Makassar',
    region: 'Sulawesi',
    modernName: 'Makassar',
    coordinates: { x: 111, y: 75 },
    category: 'military',
    era: '1945–1946',
    description: 'Gerilya Sulawesi Selatan — pertempuran habis-habisan melawan sekutu.',
    detail:
      'Makassar dan sekitarnya menjadi medan pertempuran gerilya yang panjang dan brutal. Perjuangan rakyat Sulawesi Selatan di bawah berbagai laskar rakyat merupakan salah satu episod paling heroik dalam sejarah revolusi kemerdekaan Indonesia.',
    relatedEvents: [],
    relatedFigures: [],
    icon: '🗡️',
    coordinateInfo: '5°08\'S 119°25\'E',
    source: [
      'Museum Negeri La Galigo, Makassar',
      'Wikipedia bahasa Indonesia — Sulawesi Selatan',
    ],
  },
]

