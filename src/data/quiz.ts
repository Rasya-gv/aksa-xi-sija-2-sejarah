import type { InvestigationRank, QuizCategoryKey, QuizQuestion } from '../types/archive'

/**
 * KUIS INVESTIGASI SEJARAH — Phase 8
 *
 * Berkas-berkas ujian bagi agen investigasi: 12 pertanyaan seputar
 * pergerakan nasional Indonesia (1908–1945) dengan tiga kategori:
 * tokoh, organisasi, dan peristiwa. Setiap jawaban diikuti catatan
 * investigasi (fakta sejarah) untuk memperkaya pengetahuan.
 */
export const QUIZ_CATEGORIES: Record<QuizCategoryKey, { label: string; icon: string; color: string }> = {
  tokoh: { label: 'TOKOH', icon: '🕵️', color: '#d4a24a' },
  organisasi: { label: 'ORGANISASI', icon: '🏛️', color: '#7b8cde' },
  peristiwa: { label: 'PERISTIWA', icon: '📜', color: '#4d9e68' },
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'Q-01',
    category: 'organisasi',
    question: 'Organisasi modern pertama yang menandai lahirnya pergerakan nasional Indonesia adalah…',
    options: ['Budi Utomo', 'Jong Java', 'Indische Partij', 'Sarekat Islam'],
    answerIndex: 0,
    fact: 'Budi Utomo didirikan dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908 di Batavia — hari yang kini diperingati sebagai Hari Kebangkitan Nasional.',
    source: ['Museum Kebangkitan Nasional (museumkebangkitannasional.kemdikbud.go.id)'],
  },
  {
    id: 'Q-02',
    category: 'tokoh',
    question: 'Siapa tokoh utama pendiri Budi Utomo (1908)?',
    options: ['H.O.S. Tjokroaminoto', 'dr. Soetomo', 'Douwes Dekker', 'Ki Hadjar Dewantara'],
    answerIndex: 1,
    fact: 'dr. Soetomo bersama mahasiswa STOVIA menggagas Budi Utomo. Kelak ia dikenal sebagai dokter dan pelopor kesehatan rakyat.',
    source: ['Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)'],
  },
  {
    id: 'Q-03',
    category: 'organisasi',
    question: 'Organisasi massa politik terbesar awal abad ke-20 yang dipimpin H.O.S. Tjokroaminoto adalah…',
    options: ['PNI', 'Muhammadiyah', 'Sarekat Islam', 'Perhimpunan Indonesia'],
    answerIndex: 2,
    fact: 'Sarekat Islam (1912) menghimpun jutaan anggota dari berbagai lapisan — gerakan massa pertama yang mengubah wajah politik Hindia Belanda.',
    source: ['Wikipedia bahasa Indonesia — Sarekat Islam'],
  },
  {
    id: 'Q-04',
    category: 'tokoh',
    question: 'Penulis surat terbuka terkenal "Als Ik Een Nederlander Was" (1913) adalah…',
    options: ['Cipto Mangunkusumo', 'Tirto Adhi Soerjo', 'Suwardi Suryaningrat', 'Tan Malaka'],
    answerIndex: 2,
    fact: 'Suwardi Suryaningrat (kelak Ki Hadjar Dewantara) mengkritik rencana perayaan 100 tahun kemerdekaan Belanda; tulisannya membuat ia diasingkan ke Belanda.',
    source: ['De Expres 1913 — kliping esai asli'],
  },
  {
    id: 'Q-05',
    category: 'organisasi',
    question: '"Tiga Serangkai" — pendiri Indische Partij (1912) adalah…',
    options: [
      'Douwes Dekker, Cipto Mangunkusumo & Suwardi Suryaningrat',
      'Soetomo, Wahidin Soedirohoesodo & Hatta',
      'Ahmad Dahlan, Haji Samanhudi & Hasyim Asy\'ari',
      'Kartini, Dewi Sartika & Rohana Kudus',
    ],
    answerIndex: 0,
    fact: 'Indische Partij adalah partai politik pertama yang secara tegas bercita-cita mencapai kemerdekaan Indonesia — "Indie los van Holland".',
    source: ['Wikipedia bahasa Indonesia — Indische Partij'],
  },
  {
    id: 'Q-06',
    category: 'tokoh',
    question: 'Pendiri Muhammadiyah (1912) di Yogyakarta adalah…',
    options: ['Haji Samanhudi', 'KH Ahmad Dahlan', 'KH Hasyim Asy\'ari', 'Kyai Haji Mas Mansur'],
    answerIndex: 1,
    fact: 'KH Ahmad Dahlan mendirikan Muhammadiyah untuk memajukan pendidikan dan pemurnian ajaran Islam — gerakan pembaruan yang bertahan hingga kini.',
    source: ['Muhammadiyah (muhammadiyah.or.id) — Sejarah berdirinya'],
  },
  {
    id: 'Q-07',
    category: 'peristiwa',
    question: 'Ikrar Sumpah Pemuda dibacakan pada Kongres Pemuda II tahun…',
    options: ['1926', '1933', '1928', '1930'],
    answerIndex: 2,
    fact: '28 Oktober 1928: para pemuda mengikrarkan satu nusa, satu bangsa, satu bahasa — bahasa Indonesia.',
    source: ['Museum Sumpah Pemuda (museumsumpahpemuda.kemdikbud.go.id)'],
  },
  {
    id: 'Q-08',
    category: 'tokoh',
    question: 'Pendiri PNI — Partai Nasional Indonesia (1927) adalah…',
    options: ['Tan Malaka', 'Soekarno', 'Sutan Sjahrir', 'Mohammad Hatta'],
    answerIndex: 1,
    fact: 'Soekarno bersama tokoh nasionalis mendirikan PNI dengan strategi nasionalisme radikal. PNI dibubarkan 1930, dan Soekarno ditangkap serta diadili.',
    source: ['Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)'],
  },
  {
    id: 'Q-09',
    category: 'organisasi',
    question: 'Organisasi pelajar Indonesia di Belanda yang menerbitkan majalah "Indonesia Merdeka" adalah…',
    options: ['Perhimpunan Indonesia', 'Jong Sumatra', 'Indonesia Muda', 'Jong Java'],
    answerIndex: 0,
    fact: 'Perhimpunan Indonesia (PI) mengubah haluan dari sosial-budaya menjadi politik radikal dan menjadi kaderisasi tokoh seperti Hatta dan Natsir.',
    source: ['Wikipedia bahasa Indonesia — Perhimpunan Indonesia'],
  },
  {
    id: 'Q-10',
    category: 'tokoh',
    question: 'Naskah proklamasi yang diketik ulang oleh…',
    options: ['Soekarni', 'Sayuti Melik', 'B.M. Diah', 'Soeprijadi'],
    answerIndex: 1,
    fact: 'Sayuti Melik mengetik ulang naskah proklamasi pada malam 16–17 Agustus 1945 setelah sempat ditulis tangan oleh Soekarno dan Hatta.',
    source: ['Arsip Nasional RI (anri.go.id) — Naskah Proklamasi'],
  },
  {
    id: 'Q-11',
    category: 'peristiwa',
    question: 'Peristiwa Rengasdengklok (16 Agustus 1945) pada akhirnya mendorong…',
    options: [
      'Penundaan proklamasi kemerdekaan',
      'Percepatan proklamasi kemerdekaan',
      'Pembentukan BPUPKI',
      'Penyerahan Jepang kepada Sekutu',
    ],
    answerIndex: 1,
    fact: 'Kurawu muda menekan Soekarno-Hatta agar segera memproklamasikan kemerdekaan tanpa menunggu keputusan Jepang — hasilnya proklamasi 17 Agustus 1945.',
    source: ['Wikipedia bahasa Indonesia — Peristiwa Rengasdengklok'],
  },
  {
    id: 'Q-12',
    category: 'peristiwa',
    question: 'Puncak perlawanan rakyat yang diperingati sebagai Hari Pahlawan — pertempuran 10 November 1945 terjadi di…',
    options: ['Bandung', 'Surabaya', 'Semarang', 'Medan'],
    answerIndex: 1,
    fact: 'Pertempuran 10 November di Surabaya menjadi simbol perlawanan nasional. Semangat arek-arek Suroboyo di bawah Bung Tomo menginspirasi seluruh Indonesia.',
    source: ['Museum Sepuluh Nopember, Surabaya (museumsurabaya.id)'],
  },
]

/** Tingkat/gelar berdasarkan skor akhir investigasi */
export const investigationRanks: InvestigationRank[] = [
  {
    minScore: 11,
    title: 'KEPALA INVESTIGASI',
    subtitle: 'Menguasai seluruh ruang arsip rahasia. Tidak ada dokumen yang luput dari analisis Anda.',
    icon: '🏆',
  },
  {
    minScore: 8,
    title: 'ANALIS ARSIP',
    subtitle: 'Analisis tajam menembus dokumen-dokumen terkunci. Sedikit lagi mencapai puncak.',
    icon: '🕵️',
  },
  {
    minScore: 5,
    title: 'INVESTIGATOR LAPANGAN',
    subtitle: 'Penelusuran mulai menemukan pola. Terus gali catatan-catatan pergerakan.',
    icon: '🔎',
  },
  {
    minScore: 0,
    title: 'PELACAK PEMULA',
    subtitle: 'Ruang arsip masih menyimpan banyak misteri. Mulailah dari berkas pertama.',
    icon: '📂',
  },
]

