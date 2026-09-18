import type { Artifact, ArtifactCategory } from '../types/archive'

/**
 * BASIS DATA ARTEFAK SEJARAH — Phase 6
 *
 * Sumber data tunggal untuk halaman /artifacts (Artifact Archive).
 * Koleksi benda bersejarah: surat, koran, poster, dokumen penting,
 * foto, dan benda fisik yang tersimpan dalam vault arsip nasional.
 *
 * `icon` memakai emoji sebagai visual utama (foto digital menyusul),
 * `detail` berisi cerita & konteks yang muncul saat artefak diklik.
 */
export const artifacts: Artifact[] = [
  {
    id: 'ART-01',
    name: 'Naskah Proklamasi (Ketik Asli)',
    category: 'Dokumen',
    year: '1945',
    description:
      'Naskah proklamasi kemerdekaan yang diketik oleh Sayuti Melik — dokumen paling bersejarah bangsa.',
    status: 'Verified',
    icon: '📜',
    image: 'proklamasi.jpg',
    source: [
      'Arsip Nasional RI - Penulis: Kurator ANRI',
      'Museum Nasional Indonesia - Penulis: Direktorat Museum',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Naskah proklamasi diketik pada dini hari 17 Agustus 1945 di rumah Laksamana Maeda, Jl. Imam Bonjol No. 1 Jakarta. Teks disusun oleh Soekarno, Hatta, dan Soebardjo setelah peristiwa Rengasdengklok, lalu diketik oleh Sayuti Melik dengan beberapa perubahan kecil dari draf awal yang ditulis tangan.',
      material: 'Kertas + mesin ketik (pita tinta)',
      location: 'Museum Nasional Indonesia, Jakarta',
      relatedArchiveIds: ['FILE-11'],
      relatedFigureIds: ['SK-07', 'MH-08'],
    },
  },
  {
    id: 'ART-02',
    name: 'Bendera Pusaka Merah Putih',
    category: 'Benda',
    year: '1945',
    description:
      'Bendera pusaka yang dijahit Fatmawati dan dikibarkan saat proklamasi kemerdekaan 17 Agustus 1945.',
    status: 'Verified',
    icon: '🚩',
    image: 'bendera.jpg',
    source: [
      'Museum Kepresidenan Balai Kirti - Penulis: Kurator Balai Kirti',
      'Wikipedia bahasa Indonesia - Penulis: Komunitas Wiki Sejarah',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Bendera ini dijahit tangan oleh Fatmawati dari kain katun Jepang. Dikibarkan oleh Latief Hendraningrat dan Suhud pada 17 Agustus 1945 di Jl. Pegangsaan Timur 56. Sejak 1969 bendera pusaka disimpan dan tidak dikibarkan lagi demi keawetan.',
      material: 'Kain katun (jahit tangan)',
      location: 'Monumen Nasional (Monas), Jakarta',
      relatedFigureIds: ['SK-07'],
    },
  },
  {
    id: 'ART-03',
    name: 'Mikrofon RRI Siaran Proklamasi',
    category: 'Benda',
    year: '1945',
    description:
      'Mikrofon yang dipakai Jusuf Ronodipuro menyiarkan berita proklamasi ke seluruh dunia dari RRI.',
    status: 'Under Review',
    icon: '🎙️',
    image: 'mikrofon.jpg',
    source: [
      'Museum Sumpah Pemuda - Penulis: Tim Museum Sumpah',
      'Wikipedia bahasa Indonesia - Penulis: Komunitas Wiki Sejarah',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Setelah proklamasi, berita kemerdekaan disiarkan melalui jaringan radio. Mikrofon ini digunakan Jusuf Ronodipuro dan kawan-kawan untuk menyebarkan berita proklamasi keluar negeri, menembus sensor radio Jepang.',
      material: 'Logam + kabel tembaga',
      location: 'Museum Sumpah Pemuda (disimpan sementara)',
      relatedArchiveIds: ['FILE-11'],
      relatedFigureIds: ['SK-07'],
    },
  },
  {
    id: 'ART-04',
    name: 'Koran Harian Asia Raja — Edisi Proklamasi',
    category: 'Koran',
    year: '1945',
    description:
      'Koran "Asia Raja" edisi 17 Agustus 1945 memuat teks proklamasi lengkap — bukti cetak hari bersejarah.',
    status: 'Verified',
    icon: '📰',
    image: 'asia-raya.jpg',
    source: [
      'Perpustakaan Nasional RI - Penulis: Pustakawan Perpusnas',
      'Arsip Nasional RI - Penulis: Kurator ANRI',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Koran Asia Raja edisi 17 Agustus 1945 adalah salah satu cetakan pertama yang memuat teks proklamasi, disebarkan ke seluruh Jawa sebagai pengumuman resmi berdirinya Republik Indonesia. Banyak perpustakaan dunia menyimpan eksemplar ini.',
      material: 'Kertas koran (cetak letterpress)',
      location: 'Perpustakaan Nasional RI, Jakarta',
      relatedArchiveIds: ['FILE-11', 'FILE-09'],
      relatedFigureIds: ['TA-10'],
    },
  },
  {
    id: 'ART-05',
    name: 'Naskah "Als Ik Een Nederlander Was"',
    category: 'Surat',
    year: '1913',
    description:
      'Esai kontroversial Ki Hajar Dewantara "Seandainya Aku Seorang Belanda" — pembelaan hak pribumi.',
    status: 'Verified',
    icon: '✒️',
    image: 'nederlander.jpg',
    source: [
      'De Expres 1913 — kliping esai asli - Penulis: Tim Peneliti Sejarah',
      'Arsip Nasional RI - Penulis: Kurator ANRI',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Tulisan Soewardi Soerjaningrat (Ki Hajar Dewantara) yang diterbitkan di De Expres tahun 1913 mengecam perayaan kemerdekaan Belanda yang berlangsung dengan biaya rakyat jajahan. Esai ini membuatnya diasingkan ke Belanda bersama Douwes Dekker dan Cipto Mangunkusumo.',
      material: 'Kertas + tinta (kliping pers)',
      location: 'Dokumen Arsip Nasional RI',
      relatedArchiveIds: ['FILE-09', 'FILE-03'],
      relatedFigureIds: ['KH-06', 'DD-04', 'CM-05'],
    },
  },
  {
    id: 'ART-06',
    name: 'Poster Poster Propaganda "Indonesia Merdeka"',
    category: 'Poster',
    year: '1945',
    description:
      'Poster propaganda bawah tanah menyerukan semangat Indonesia Merdeka di masa pendudukan Jepang.',
    status: 'Restored',
    icon: '🖼️',
    image: 'poster.jpg',
    source: [
      'Museum Kebangkitan Nasional - Penulis: Tim Museum Bangkit',
      'Arsip Nasional RI - Penulis: Kurator ANRI',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Selama pendudukan Jepang, gerakan bawah tanah memproduksi poster-poster propaganda yang disebar sembunyi-sembunyi. Poster ini menampilkan atribut kebangsaan — merah putih dan bintang — sebagai perlawanan visual terhadap penjajah.',
      material: 'Kertas poster + tinta sablon',
      location: 'Museum Kebangkitan Nasional, Jakarta',
      relatedArchiveIds: ['FILE-07', 'FILE-11'],
    },
  },
  {
    id: 'ART-07',
    name: 'Peta Indonesia 1928',
    category: 'Dokumen',
    year: '1928',
    description:
      'Peta wilayah Indonesia yang dipakai dalam Kongres Pemuda II — visualisasi cita-cita satu nusantara.',
    status: 'Verified',
    icon: '🗺️',
    image: 'peta-1928.jpg',
    source: [
      'Museum Sumpah Pemuda - Penulis: Tim Museum Sumpah',
      'Arsip Nasional RI - Penulis: Kurator ANRI',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Pada Kongres Pemuda II 28 Oktober 1928, para pemuda mengikrarkan "satu tanah air, satu bangsa, satu bahasa". Peta ini menjadi bagian dari alat peraga yang menggambarkan cakrawala Indonesia dari Sabang sampai Merauke.',
      material: 'Kertas dinding (lithografi warna)',
      location: 'Koleksi Musea Sejarah Pemuda',
      relatedArchiveIds: ['FILE-08'],
      relatedFigureIds: ['WR-13'],
    },
  },
  {
    id: 'ART-08',
    name: 'Topi Pet Pejuang Gerilya',
    category: 'Benda',
    year: '1947',
    description:
      'Topi pet khas pejuang gerilya masa Revolusi 1945–1949 yang menjadi simbol perlawanan rakyat.',
    status: 'Under Review',
    icon: '🧢',
    image: 'topi-gerilya.jpg',
    source: [
      'Museum Benteng Vredeburg - Penulis: Kurator Vredeburg',
      'Wikipedia bahasa Indonesia - Penulis: Komunitas Wiki Sejarah',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Topi pet lusuh ini adalah bagian dari perlengkapan gerilya selama Perang Kemerdekaan. Dalam suasana perang gerilya, topi sederhana menjadi identitas pejuang yang bertahan di hutan dan kampung melawan agresi militer Belanda.',
      material: 'Kain beludru + pelindung kartu',
      location: 'Museum Benteng Vredeburg, Yogyakarta',
      relatedFigureIds: ['SK-07', 'TM-11'],
    },
  },
  {
    id: 'ART-09',
    name: 'Uang ORI I (1950)',
    category: 'Benda',
    year: '1950',
    description:
      'Uang Republik Indonesia pertama — bukti kedaulatan ekonomi dan simbol kemandirian fiskal negara.',
    status: 'Verified',
    icon: '💵',
    image: 'ori.jpg',
    source: [
      'Museum Bank Indonesia - Penulis: Tim Museum BI',
      'Wikipedia bahasa Indonesia - Penulis: Komunitas Wiki Sejarah',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Oeang Republik Indonesia (ORI) diterbitkan pertama kali 30 Oktober 1946 sebagai alat pembayaran sah RI. Uang ini membuktikan kedaulatan ekonomi Indonesia di tengah blokade Belanda. Desainnya menggambarkan semangat perjuangan.',
      material: 'Kertas berharga (security paper)',
      location: 'Museum Bank Indonesia, Jakarta',
      relatedArchiveIds: ['FILE-05'],
      relatedFigureIds: ['MH-08'],
    },
  },
  {
    id: 'ART-10',
    name: 'Surat Pribadi Bung Karno ke Bung Hatta',
    category: 'Surat',
    year: '1944',
    description:
      'Surat pribadi Soekarno kepada Mohammad Hatta — arsip komunikasi dua proklamator di masa penjajahan.',
    status: 'Under Review',
    icon: '💌',
    image: 'surat-bung-karno.jpg',
    source: [
      'Arsip Nasional RI - Penulis: Kurator ANRI',
      'Wikipedia bahasa Indonesia - Penulis: Komunitas Wiki Sejarah',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Surat-menyurat Soekarno dan Hatta sejak zaman kolonial menjadi bukti perencanaan kemerdekaan secara diam-diam. Surat ini ditulis dari pengasingan, membahas strategi perjuangan dan kondisi politik yang berubah cepat menjelang akhir Perang Dunia II.',
      material: 'Kertas + tinta (tulisan tangan)',
      location: 'Arsip Nasional RI, Jakarta',
      relatedArchiveIds: ['FILE-10'],
      relatedFigureIds: ['SK-07', 'MH-08'],
    },
  },
  {
    id: 'ART-11',
    name: 'Koleksi Foto Kongres Pemuda II',
    category: 'Foto',
    year: '1928',
    description:
      'Foto dokumentasi Kongres Pemuda II di Batavia — momen lahirnya Sumpah Pemuda dan Indonesia Raya.',
    status: 'Verified',
    icon: '📷',
    image: 'foto-kongres.jpg',
    source: [
      'Museum Sumpah Pemuda - Penulis: Tim Museum Sumpah',
      'Arsip Nasional RI - Penulis: Kurator ANRI',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Kongres Pemuda II berlangsung 27–28 Oktober 1928 di tiga gedung berbeda di Batavia. Foto-foto dokumentasi ini menangkap momen para pemuda dari berbagai organisasi mengikrarkan satu tanah air, satu bangsa, dan satu bahasa. Pada penutupan kongres, lagu Indonesia Raya ciptaan W.R. Soepratman pertama kali diperdengarkan.',
      material: 'Fotografi hitam-putih (gelatin silver)',
      location: 'Museum Sumpah Pemuda, Jakarta',
      relatedArchiveIds: ['FILE-08'],
      relatedFigureIds: ['WR-13'],
    },
  },
  {
    id: 'ART-12',
    name: 'Buku "Madilog" (Materialisme)',
    category: 'Dokumen',
    year: '1943',
    description:
      'Manuskrip "Madilog" karya Tan Malaka — landasan berpikir materialisme dialektika untuk perjuangan.',
    status: 'Restored',
    icon: '📘',
    image: 'madilog.jpg',
    source: [
      'Perpustakaan Nasional RI - Penulis: Pustakawan Perpusnas',
      'Wikipedia bahasa Indonesia - Penulis: Komunitas Wiki Sejarah',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Madilog (Materialisme, Dialektika, Logika) ditulis Tan Malaka saat bersembunyi dari kejaran intelijen kolonial dan Jepang. Buku ini menjadi landasan berpikir bagi generasi revolusioner dan dibaca luas oleh para pemuda di masa revolusi.',
      material: 'Kertas + jilid tangan',
      location: 'Perpustakaan Nasional RI',
      relatedArchiveIds: ['FILE-05', 'FILE-10'],
      relatedFigureIds: ['TM-11'],
    },
  },
  {
    id: 'ART-13',
    name: 'Lencana Tanda Anggota Budi Utomo',
    category: 'Benda',
    year: '1908',
    description:
      'Lencana perak anggota Budi Utomo — salah satu simbol organisasi modern pertama pribumi.',
    status: 'Verified',
    icon: '🪙',
    image: 'lencana-budi-utomo.jpg',
    source: [
      'Museum Kebangkitan Nasional - Penulis: Tim Museum Bangkit',
      'Wikipedia bahasa Indonesia - Penulis: Komunitas Wiki Sejarah',
      'Sumber Foto: Pinterest',
    ],
    detail: {
      story:
        'Budi Utomo, didirikan 20 Mei 1908 oleh Soetomo dan kawan-kawan STOVIA, menjadi organisasi modern pertama yang bergerak di bidang pendidikan dan kebudayaan. Lencana perak ini dikenakan para anggotanya sebagai tanda kebanggaan keanggotaan.',
      material: 'Perak (logam cetak)',
      location: 'Museum Kebangkitan Nasional, Jakarta',
      relatedArchiveIds: ['FILE-01'],
      relatedFigureIds: ['ST-01', 'WS-02'],
    },
  },
]

/** Daftar filter kategori artefak untuk galeri */
export const artifactFilters: { key: ArtifactCategory | 'semua'; label: string }[] = [
  { key: 'semua', label: 'SEMUA' },
  { key: 'Surat', label: 'SURAT' },
  { key: 'Koran', label: 'KORAN' },
  { key: 'Poster', label: 'POSTER' },
  { key: 'Dokumen', label: 'DOKUMEN' },
  { key: 'Foto', label: 'FOTO' },
  { key: 'Benda', label: 'BENDA' },
]

