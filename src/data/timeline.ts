import type { TimelineEvent } from '../types/archive'

/**
 * GARIS WAKTU PERJUANGAN NASIONAL — Phase 7
 *
 * Perjalanan sejarah pergerakan nasional dari Budi Utomo (1908)
 * hingga Proklamasi Kemerdekaan (1945). Setiap peristiwa ditandai
 * dengan ikon, lokasi, tokoh utama, dan detail naratif lengkap.
 *
 * Kategori: Political, Social, Military, Cultural, Diplomatic
 * Significance: landmark (paling penting), milestone, catalyst
 */
export const timeline: TimelineEvent[] = [
  {
    id: 'TL-1908',
    year: '1908',
    title: 'Pendirian Budi Utomo',
    description: 'Organisasi modern pertama lahir dari meja-meja STOVIA — awal kesadaran nasional.',
    category: 'Social',
    significant: true,
    location: 'Batavia (Jakarta)',
    figures: ['Soetomo', 'Wahidin Soedirohoesodo'],
    icon: '🏛️',
    archiveIds: ['FILE-01'],
    detail: {
      narrative:
        '20 Mei 1908, sekelompok mahasiswa STOVIA pimpinan Soetomo mendirikan Budi Utomo di Jakarta. Kongres pertamanya dihadiri oleh pelajar dari seluruh Jawa. Wahidin Soedirohoesodo menjadi inspirasi utama lewat gagasan dana pelajar yang menembus batas kelas dan daerah.',
      impact: 'Lahirnya organisasi modern pertama pribumi yang membuka jalan bagi pergerakan nasional berikutnya.',
      quote: { text: 'Mendidik rakyat adalah menjaga tanah air.', author: 'Wahidin Soedirohoesodo' },
      significance: 'landmark',
    },
    source: [
      'Museum Kebangkitan Nasional (museumkebangkitannasional.kemdikbud.go.id)',
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
    ],
  },
  {
    id: 'TL-1911',
    year: '1911',
    title: 'Sarekat Islam',
    description: 'Organisasi massa pertama — menghubungkan pedagang pribumi dengan politik kebangsaan.',
    category: 'Political',
    significant: true,
    location: 'Solo, Jawa Tengah',
    figures: ['H.O.S. Tjokroaminoto'],
    icon: '🕌',
    archiveIds: ['FILE-02'],
    detail: {
      narrative:
        'Sarekat Dagang Islam didirikan pada 1911 di Solo oleh Haji Samanhudi sebagai organisasi pedagang batik. Saat H.O.S. Tjokroaminoto mengambil alih kepemimpinan pada 1912, organisasi ini bertransformasi menjadi gerakan massa politik terbesar dengan jutaan anggota dari berbagai lapisan masyarakat.',
      impact: 'Menunjukkan bahwa rakyat mampu berorganisasi dalam skala masif — menjadi model pergerakan massa yang mengubah wajah politik Hindia Belanda.',
      quote: { text: 'Bangsa yang besar adalah bangsa yang menghargai jasa pahlawannya.', author: 'H.O.S. Tjokroaminoto' },
      significance: 'landmark',
    },
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Sarekat Islam',
    ],
  },
  {
    id: 'TL-1912',
    year: '1912',
    title: 'Indische Partij',
    description: 'Organisasi politik pertama yang terang-terangan menuntut kemerdekaan.',
    category: 'Political',
    significant: true,
    location: 'Bandung, Jawa Barat',
    figures: ['Ernest Douwes Dekker', 'Cipto Mangunkusumo', 'Ki Hajar Dewantara'],
    icon: '✊',
    archiveIds: ['FILE-03'],
    detail: {
      narrative:
        'Tiga serangkai — Douwes Dekker, Cipto Mangunkusumo, dan Ki Hajar Dewantara — mendirikan Indische Partij pada 1912 di Bandung. Berbeda dengan Budi Utomo yang bersifat kultural, Indische Partij berani menuntut kemerdekaan secara politik dan terang-terangan.',
      impact: 'Memperkenalkan gagasan kemerdekaan politik ke ruang publik dan menginspirasi generasi pemuda nasionalis.',
      quote: { text: 'Jika aku seorang Belanda, aku akan mendirikan Indonesia Merdeka!', author: 'Ki Hajar Dewantara' },
      significance: 'landmark',
    },
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Indische Partij',
    ],
  },
  {
    id: 'TL-1913',
    year: '1913',
    title: '"Als Ik Een Nederlander Was"',
    description: 'Esai Ki Hajar Dewantara yang memicu gelombang nasionalisme dan pengasingan tiga serangkai.',
    category: 'Cultural',
    significant: false,
    location: 'Bandung (diterbitkan)',
    figures: ['Ki Hajar Dewantara'],
    icon: '✒️',
    archiveIds: ['FILE-09'],
    detail: {
      narrative:
        'Esai ini diterbitkan di De Expres sebagai protes terhadap perayaan 100 tahun kemerdekaan Belanda yang dibiayai oleh rakyat jajahan. Tulisan ini membuat tiga serangkai diasingkan ke Belanda — Douwes Dekker, Cipto, dan Ki Hajar.',
      impact: 'Menjadi titik balik retorika pergerakan — dari diplomasi ke protes terbuka terhadap ketidakadilan kolonial.',
      significance: 'catalyst',
    },
    source: [
      'De Expres 1913 — kliping esai asli',
      'Wikipedia bahasa Indonesia — Ki Hadjar Dewantara',
    ],
  },
  {
    id: 'TL-1917',
    year: '1917',
    title: 'Muhammadiyah',
    description: 'Pembaruan Islam dan pendidikan modern: sekolah, rumah sakit, dan panti.',
    category: 'Social',
    significant: false,
    location: 'Kauman, Yogyakarta',
    figures: ['K.H. Ahmad Dahlan'],
    icon: '🌙',
    archiveIds: ['FILE-04'],
    detail: {
      narrative:
        'K.H. Ahmad Dahlan mendirikan Muhammadiyah pada 18 November 1912 di Yogyakarta (resmi didaftarkan 1914, dikenal luas 1917). Organisasi ini membawa gagasan pembaruan Islam lewat pendidikan, kesehatan, dan amal sosial — membuktikan bahwa agama dan kemajuan zaman tidak bertentangan.',
      impact: 'Menciptakan jaringan pendidikan dan kesehatan alternatif yang menjembatani tradisi Islam dengan kebutuhan modern.',
      significance: 'milestone',
    },
    source: [
      'Muhammadiyah (muhammadiyah.or.id) — Sejarah berdirinya',
      'Wikipedia bahasa Indonesia — Muhammadiyah',
    ],
  },
  {
    id: 'TL-1920',
    year: '1920',
    title: 'Tan Malaka Berjuang di Luar Negeri',
    description: 'Revolusioner Indonesia menggalang dukungan internasional dari Moskow hingga Eropa.',
    category: 'Diplomatic',
    significant: false,
    location: 'Moskow, Uni Soviet',
    figures: ['Tan Malaka'],
    icon: '🌍',
    detail: {
      narrative:
        'Tan Malaka meninggalkan Indonesia pada 1914 dan menempuh perjalanan panjang melalui Singapura, Jepang, Eropa, hingga Moskow. Di sana ia terlibat dalam Komintern (Komunis Internasional) dan mengembangkan konsep Republik Indonesia yang mandiri.',
      impact: 'Menyatukan gagasan perjuangan kemerdekaan dengan pemikiran revolusioner dunia — menjadi penghubung Indonesia dengan gerakan kiri internasional.',
      significance: 'catalyst',
    },
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Tan Malaka',
    ],
  },
  {
    id: 'TL-1922',
    year: '1922',
    title: 'Pendirian Taman Siswa',
    description: 'Ki Hajar Dewantara mendirikan lembaga pendidikan rakyat — "Ing Ngarsa Sung Tulada".',
    category: 'Social',
    significant: false,
    location: 'Yogyakarta',
    figures: ['Ki Hajar Dewantara'],
    icon: '🏫',
    archiveIds: ['FILE-04'],
    detail: {
      narrative:
        'Setelah kembali dari pengasingan di Belanda, Ki Hajar Dewantara mendirikan Perguruan Taman Siswa pada 3 Juli 1922 di Yogyakarta. Sekolah ini menawarkan pendidikan berbahasa Jawa dan Indonesia — menolak dominasi pendidikan Belanda.',
      impact: 'Membuktikan bahwa rakyat mampu menyelenggarakan pendidikan sendiri — menjadi model pendidikan nasional.',
      quote: { text: 'Ing Ngarsa Sung Tulada, Ing Madya Mangun Karsa, Tut Wuri Handayani.', author: 'Ki Hajar Dewantara' },
      significance: 'milestone',
    },
    source: [
      'Taman Siswa (tamansiswa.org) — sejarah perguruan',
      'Wikipedia bahasa Indonesia — Taman Siswa',
    ],
  },
  {
    id: 'TL-1926',
    year: '1926',
    title: 'Pemberontakan PNI',
    description: 'Partai Nasional Indonesia mendukung perjuangan bersenjata melawan penjajah.',
    category: 'Military',
    significant: false,
    location: 'Jawa & Sumatera',
    figures: ['Soekarno'],
    icon: '⚔️',
    archiveIds: ['FILE-06'],
    detail: {
      narrative:
        'PNI yang didirikan Soekarno pada 4 Juli 1927 menggalang semangat perjuangan nasional yang lebih radikal. Pada 1926–1927 pecah pemberontakan terhadap pemerintah kolonial di beberapa daerah — meski gagal, ini menunjukkan kesiapan rakyat untuk melawan.',
      impact: 'Meski pemberontakan gagal, ini menjadi pukulan telak bagi citra tak terkalahkan pemerintah kolonial dan memacu internasionalisasi perjuangan Indonesia.',
      significance: 'catalyst',
    },
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Partai Nasional Indonesia',
    ],
  },
  {
    id: 'TL-1928',
    year: '1928',
    title: 'Sumpah Pemuda',
    description: 'Ikrar satu tanah air, satu bangsa, satu bahasa — Indonesia Raya pertama kali didengar.',
    category: 'Cultural',
    significant: true,
    location: 'Batavia (Jakarta)',
    figures: ['W.R. Soepratman', 'Soetomo', 'Soekarno', 'Sutan Sjahrir'],
    icon: '🎤',
    archiveIds: ['FILE-08', 'FILE-07'],
    detail: {
      narrative:
        '27–28 Oktober 1928, para pemuda dari berbagai organisasi berkumpul di tiga gedung berbeda di Batavia. Mereka mengikrarkan satu tanah air, satu bangsa, dan satu bahasa Indonesia. Pada penutupan, lagu Indonesia Raya ciptaan W.R. Soepratman pertama kali diperdengarkan.',
      impact: 'Menyatukan identitas kebangsaan dari ribuan pulau menjadi satu bangsa — menjadi dasar spiritual berdirinya negara Indonesia.',
      quote: { text: 'Kami putra dan putri Indonesia, menjunjung bahasa persatuan, bahasa Indonesia.', author: 'Sumpah Pemuda, 28 Oktober 1928' },
      significance: 'landmark',
    },
    source: [
      'Museum Sumpah Pemuda (museumsumpahpemuda.kemdikbud.go.id)',
      'Arsip Nasional RI — dokumen Kongres Pemuda II 1928',
    ],
  },
  {
    id: 'TL-1930',
    year: '1930',
    title: 'Perhimpunan Indonesia',
    description: 'Organisasi pelajar Indonesia di Belanda memperjuangkan kemerdekaan melalui diplomasi.',
    category: 'Diplomatic',
    significant: false,
    location: 'Leiden, Belanda',
    figures: ['Mohammad Hatta', 'Sutan Sjahrir'],
    icon: '🤝',
    archiveIds: ['FILE-05'],
    detail: {
      narrative:
        'Perhimpunan Indonesia (PI) di Belanda menjadi pusat perjuangan diplomasi mahasiswa Indonesia di luar negeri. Dipimpin oleh Mohammad Hatta dan Sutan Sjahrir, PI menerbitkan brosur "Indonesia Vrij" yang mendesak dunia internasional untuk mendukung kemerdekaan.',
      impact: 'Membawa perjuangan kemerdekaan ke panggung internasional dan membangun jaringan diplomatik yang akan berguna saat kemerdekaan.',
      significance: 'milestone',
    },
    source: [
      'Ensiklopedia Sejarah Indonesia — Kemendikbud (esi.kemdikbud.go.id)',
      'Wikipedia bahasa Indonesia — Perhimpunan Indonesia',
    ],
  },
  {
    id: 'TL-1933',
    year: '1933',
    title: 'Soekarno Ditangkap & Diangkat',
    description: 'Soekarno ditahan pemerintah kolonial — menjadi simbol perlawanan.',
    category: 'Political',
    significant: false,
    location: 'Surabaya & Bengkulu',
    figures: ['Soekarno'],
    icon: '⛓️',
    detail: {
      narrative:
        'Pada 29 Desember 1933, Soekarno ditangkap dan diasingkan ke Ende, Flores, hingga 1938, kemudian ke Bengkulu. Selama pengasingan ini, kiprahnya diamati dan dipuja oleh rakyat — menjadi simbol perlawanan yang tak bisa dipadamkan.',
      impact: 'Pengasingan justru memperkuat aura pemimpin rakyat — Soekarno menjadi legenda hidup yang ditunggu untuk kembali.',
      significance: 'milestone',
    },
    source: [
      'Arsip Nasional RI (anri.go.id) — koleksi foto & dokumen Soekarno',
      'Wikipedia bahasa Indonesia — Soekarno',
    ],
  },
  {
    id: 'TL-1942',
    year: '1942',
    title: 'Jepang Menduduki Indonesia',
    description: 'Jatuhnya Hindia Belanda ke tangan Jepang — awal era baru perjuangan.',
    category: 'Military',
    significant: true,
    location: 'Indonesia (seluruh wilayah)',
    figures: ['Soekarno', 'Mohammad Hatta'],
    icon: '⚔️',
    archiveIds: ['FILE-10'],
    detail: {
      narrative:
        'Februari–Maret 1942, tentara Jepang mengalahkan Belanda dengan cepat. Pendudukan Jepang membawa dampak ganda: kerja paksa (romusha) yang mengerikan, tetapi juga membuka peluang pergerakan karena kebijakan pendudukan yang berbeda. Para pemimpin nasionalis diizinkan bergerak.',
      impact: 'Mengubah lanskap perjuangan secara total — dari perlawanan terhadap Belanda menjadi strategi dalam pendudukan Jepang.',
      significance: 'catalyst',
    },
    source: [
      'Arsip Nasional RI (anri.go.id) — dokumen pendudukan Jepang',
      'Wikipedia bahasa Indonesia — Pendudukan Jepang di Indonesia',
    ],
  },
  {
    id: 'TL-1945',
    year: '1945',
    title: 'Proklamasi Kemerdekaan',
    description: '17 Agustus 1945 — Indonesia menyatakan kemerdekaan dari belenggu penjajahan.',
    category: 'Political',
    significant: true,
    location: 'Jl. Pegangsaan Timur 56, Jakarta',
    figures: ['Soekarno', 'Mohammad Hatta', 'Sutan Sjahrir', 'Sayuti Melik'],
    icon: '🇮🇩',
    archiveIds: ['FILE-11'],
    detail: {
      narrative:
        'Setelah Jepang menyerah, peristiwa Rengasdengklok mendorong Soekarno dan Hatta untuk segera memproklamasikan kemerdekaan. Pada dini hari 17 Agustus 1945, naskah proklamasi diketik di rumah Laksamana Maeda. Pukul 10 pagi, bendera pusaka dikibarkan dan Soekarno membacakan teks proklamasi.',
      impact: 'Indonesia resmi merdeka — menjadi negara berdaulat yang diakui dunia internasional dan menjadi inspirasi kemerdekaan bangsa-bangsa Asia-Afrika.',
      quote: { text: 'Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.', author: 'Soekarno, 17 Agustus 1945' },
      significance: 'landmark',
    },
    source: [
      'Arsip Nasional RI (anri.go.id) — Naskah Proklamasi',
      'Museum Perumusan Naskah Proklamasi (munasprok.or.id)',
    ],
  },
]

