export const projectMeta = {
  portalTitle: "Portal Tugas IMK",
  courseName: "Interaksi Manusia & Komputer",
  semester: "Semester Genap 2024/2025",
  institution: "Program Studi S1 Informatika - Universitas Sebelas Maret",
  assignments: [
    {
      id: "tugas-1",
      number: "Tugas 1",
      title: "Analisis & Redesain Interaksi PLN Mobile",
      status: "completed",
      badge: "Selesai & Dianalisis",
      summary: "Bedah interaksi pembelian token listrik prabayar Rp500.000 menggunakan Siklus Norman, Abowd-Beale, identifikasi Gulf of Execution & Evaluation, serta redesain antarmuka."
    },
    {
      id: "tugas-2",
      number: "Tugas 2",
      title: "Evaluasi Heuristik & User Journey Map",
      status: "upcoming",
      badge: "Mendatang",
      summary: "Evaluasi 10 Prinsip Heuristik Nielsen pada sistem publik dan pemetaan User Journey end-to-end."
    },
    {
      id: "tugas-3",
      number: "Tugas 3",
      title: "High-Fidelity Prototyping & Usability Testing",
      status: "upcoming",
      badge: "Mendatang",
      summary: "Pengujian usability terukur (SUS, SEQ, Task Completion Time) pada rancang bangun interaktif baru."
    }
  ],
  team: [
    { name: "Zendinan Okbah Hasan", nim: "L0124126", role: "Analisis Siklus Norman & Abowd-Beale" },
    { name: "Mufti Farris Murtadho", nim: "L0124133", role: "Evaluasi Ergonomi & Gulf Analysis" },
    { name: "Revan Alifian Zhafran", nim: "L0124154", role: "Rancang Ulang Interaksi & Prototyping" }
  ],
  caseStudy: "Pembelian token listrik prabayar (menu + form fill)",
  concreteScenario: "Pengguna ingin membeli token listrik prabayar Rp500.000 melalui aplikasi PLN Mobile saat kondisi darurat listrik padam."
};

export const pdfSections = {
  bedahSistem: {
    title: "1. Bedah Sistem",
    subtitle: "Dekomposisi tujuan dan niat pengguna dalam konteks kelistrikan rumah tangga.",
    domainGoalTask: [
      {
        element: "Domain",
        desc: "Manajemen utilitas / kelistrikan rumah tangga.",
        detail: "Ruang lingkup sistem yang menangani pasokan energi listrik prabayar, pembayaran tagihan, dan pemeliharaan instalasi listrik pelanggan."
      },
      {
        element: "Goal",
        desc: "Memastikan ketersediaan listrik di rumah (listrik tidak mati).",
        detail: "Tujuan tingkat tinggi (high-level goal) yang bersifat mendesak karena listrik merupakan kebutuhan primer operasional harian rumah tangga."
      },
      {
        element: "Task",
        desc: "Membeli token listrik prabayar Rp500.000 menggunakan aplikasi.",
        detail: "Tugas konkret terstruktur yang melibatkan pemilihan menu, identifikasi ID pelanggan, penentuan besaran nominal, dan transaksi pembayaran."
      },
      {
        element: "Intention (saat itu)",
        desc: "Membuka aplikasi, memasukkan ID Pelanggan, memilih nominal Rp500.000, memilih metode pembayaran (BCA VA), dan menyelesaikan transaksi secepat mungkin.",
        detail: "Niat operasional langsung saat berada di depan antarmuka, menuntut jalur interaksi yang mulus tanpa friksi atau distraksi birokratis."
      }
    ],
    gayaInteraksi: [
      {
        name: "Menu Selection",
        desc: "Memilih grid nominal token dan menu layanan utama.",
        implication: "Meminimalkan beban memori (recognition over recall), namun jika menu terlalu padat (clutter) akan menaikkan waktu pencarian visual."
      },
      {
        name: "Form Fill-in",
        desc: "Mengetik ID Pelanggan dan nomor NIK data pribadi.",
        implication: "Rentan memicu friksi dan kesalahan ketik jika validasi data kaku atau dipaksakan di tengah alur darurat."
      }
    ],
    ergonomi: [
      {
        title: "Penempatan Tombol Aksi (Thumb-Zone)",
        desc: "Tombol aksi utama (Selanjutnya / Lanjutkan Pembayaran) ditempatkan konsisten di thumb-zone (area jangkauan jempol bawah layar smartphone) untuk kemudahan ergonomis satu tangan."
      },
      {
        title: "Kepadatan Visual (Visual Clutter)",
        desc: "Kepadatan elemen visual di halaman Beranda membuat mata cepat lelah dan navigasi awal terasa berat. Banner promosi dan persentase profil merebut focal point pengguna."
      }
    ],
    konteksPenggunaan: [
      {
        title: "Kondisi Urgensi / Panik",
        desc: "Sering digunakan dalam kondisi mendesak ketika alarm meteran listrik telah berbunyi atau listrik sudah padam total dan rumah gelap gulita. Pengguna berada di bawah stres kognitif tinggi."
      },
      {
        title: "Rentan Multitasking Antar-Aplikasi",
        desc: "Pengguna dipaksa berpindah keluar ke aplikasi mobile banking untuk membayar Virtual Account. Perpindahan ini berisiko memutus alur konsentrasi, terdistraksi notifikasi lain, atau tidak sengaja menutup PLN Mobile."
      }
    ]
  },

  teoriNormanAbowd: {
    title: "Siklus Norman & Kerangka Abowd-Beale",
    subtitle: "Pemetaan 7 tahapan aksi kognitif dan interaksi 4 komponen antarmuka pengguna.",
    normanCycle: [
      {
        step: 1,
        phase: "GOAL",
        type: "Goal Formation",
        name: "Goal",
        formula: "Menetapkan Tujuan",
        desc: "Memastikan listrik di rumah tetap menyala.",
        userAction: "Menyadari token listrik hampir habis atau sudah padam.",
        systemRole: "Tidak terlibat langsung (kebutuhan riil di dunia nyata)."
      },
      {
        step: 2,
        phase: "EXECUTION",
        type: "Intention Formation",
        name: "Intention",
        formula: "Membentuk Niat",
        desc: "Beli token via aplikasi PLN Mobile.",
        userAction: "Memutuskan menggunakan smartphone daripada keluar mencari konter fisik.",
        systemRole: "Aplikasi terpasang di perangkat mobile pengguna."
      },
      {
        step: 3,
        phase: "EXECUTION",
        type: "Action Specification",
        name: "Action Specification",
        formula: "Merinci Rencana Aksi",
        desc: "Buka aplikasi → Pilih 'Token' → Masukkan ID Pelanggan → Pilih Rp500.000 → Pilih metode bayar.",
        userAction: "Merumuskan urutan langkah motorik yang harus dilakukan pada antarmuka.",
        systemRole: "Struktur navigasi dan arsitektur informasi aplikasi."
      },
      {
        step: 4,
        phase: "EXECUTION",
        type: "Execution",
        name: "Execution",
        formula: "Mengeksekusi Aksi Fisik",
        desc: "Tap tombol 'Lanjutkan Pembayaran'.",
        userAction: "Melakukan aksi fisik sentuhan jari pada layar tombol.",
        systemRole: "Menerima input sentuhan dan mengirim perintah request ke backend."
      },
      {
        step: 5,
        phase: "EVALUATION",
        type: "Perception",
        name: "Perceiving",
        formula: "Mengamati Status Sistem",
        desc: "Melihat layar batas waktu pembayaran dan nomor Virtual Account (VA).",
        userAction: "Mata memindai perubahan tampilan antarmuka pasca tombol ditekan.",
        systemRole: "Merender tampilan rincian pesanan dan nomor VA bank."
      },
      {
        step: 6,
        phase: "EVALUATION",
        type: "Interpretation",
        name: "Interpreting",
        formula: "Menafsirkan Tampilan",
        desc: "Menafsirkan bahwa nomor VA harus disalin untuk dieksekusi di aplikasi bank (m-banking).",
        userAction: "Memahami arti angka 16 digit VA dan batas waktu hitung mundur 4 jam.",
        systemRole: "Menyediakan copy button dan label instruksi yang jelas."
      },
      {
        step: 7,
        phase: "EVALUATION",
        type: "Evaluation",
        name: "Evaluating",
        formula: "Mengevaluasi Hasil",
        desc: "Mengevaluasi batas waktu pembayaran dan memastikan nomor tersalin sebelum berpindah aplikasi.",
        userAction: "Membandingkan apakah status sistem saat ini sudah sesuai dengan ekspektasi awal untuk menyalakan listrik.",
        systemRole: "Menyimpan status pesanan 'Menunggu Pembayaran' secara persisten."
      }
    ],
    abowdBeale: [
      {
        code: "U → I",
        title: "User → Input (Artikulasi)",
        desc: "Pengguna menyalurkan niat kognitif menjadi tindakan fisik melalui sentuhan layar (tap nominal, ketik nomor ID Pelanggan, pilih opsi bayar)."
      },
      {
        code: "S (Core)",
        title: "System Core (Komputasi & Operasi)",
        desc: "Backend PLN memproses validasi ID Pelanggan ke database pusat, memeriksa daya kWh, menghitung tagihan, dan meminta penerbitan nomor VA ke gateway bank."
      },
      {
        code: "S → O",
        title: "System → Output (Penyajian)",
        desc: "Sistem merender antarmuka grafis berupa rincian nominal, batas waktu, nomor Virtual Account, dan pesan konfirmasi kepada pengguna."
      },
      {
        code: "U (Feedback)",
        title: "User Feedback (Observasi & Evaluasi)",
        desc: "Pengguna mengobservasi layar antarmuka dan membaca instruksi transfer sebagai umpan balik sistem, memastikan nominal Rp500.000 sudah tepat."
      }
    ]
  },

  penilaianUX: {
    title: "2. Penilaian Interaksi & Dark Pattern",
    subtitle: "Analisis jurang interaksi (Gulf), dimensi kualitas UX, dan potensi pola manipulatif.",
    gulfOfExecution: [
      {
        id: "goe-1",
        title: "Beban Kognitif Beranda",
        desc: "Fitur utilitas esensial bersaing dengan banner persentase kelengkapan akun profil (25%) dan promosi yang memakan 35% ruang atas, menunda pengguna menemukan titik mulai (menu 'Token').",
        impact: "Menaikkan latency waktu pemindaian visual dan menaikkan tingkat kecemasan saat listrik padam."
      },
      {
        id: "goe-2",
        title: "Interupsi Alur Data Pribadi",
        desc: "Munculnya paksaan mengisi NIK (Data Pribadi) di tengah proses urgen pembelian menahan ritme pengguna, memperlebar jarak antara niat pengguna (beli token) dan tindakan sistem.",
        impact: "Tombol 'Lewati' diletakkan tersembunyi di sudut kanan atas luar jangkauan ibu jari."
      }
    ],
    gulfOfEvaluation: [
      {
        id: "gov-1",
        title: "Transaksi Hilang (Blank Spot)",
        desc: "Jika pengguna menutup aplikasi di tengah pembayaran (misal saat membuka m-banking), Beranda tidak menampilkan indikator proaktif bahwa ada transaksi pending. Pengguna sering keliru mengevaluasi sistem dan mengulang pesanan dari awal.",
        impact: "Pengguna mengira pesanan gagal, menyebabkan risiko double-transaction atau kepanikan."
      },
      {
        id: "gov-2",
        title: "Interaction Cost pada 'Kuota Pembelian'",
        desc: "Layar nominal menampilkan angka '0 / 1.584 kWh' yang membingungkan maknanya. Penjelasannya ada, tetapi disembunyikan di balik ikon 'Informasi' (i). Pengguna dituntut melakukan aksi tambahan (klik) untuk mengevaluasi makna angka tersebut.",
        impact: "Menimbulkan keraguan mental: apakah kuota 0 berarti habis atau belum terpakai?"
      }
    ],
    dimensiUX: {
      pragmatis: {
        score: "Cukup / Fungsional",
        verdict: "Fungsionalitas utama dapat tercapai, namun terasa sangat birokratis di awal penggunaan karena paksaan pengisian data profil NIK dan validasi yang kaku."
      },
      hedonis: {
        score: "Rendah / Menegangkan",
        verdict: "Rendah dan cenderung memicu kecemasan karena berkaitan langsung dengan tenggat waktu layanan esensial (listrik padam) yang diperburuk oleh visual clutter."
      }
    },
    darkPattern: {
      type: "Misdirection (Salah Arah)",
      feature: "Toggle Donasi Otomatis (Electree Rp1.000)",
      description: "Toggle donasi pohon (Electree Rp1.000) diletakkan persis di atas total biaya transaksi dan tepat bersebelahan dengan tombol konfirmasi 'Lanjutkan Pembayaran'.",
      risk: "Risiko sangat tinggi terpencet secara tidak sengaja oleh pengguna yang sedang panik atau terburu-buru, menghasilkan transaksi yang tidak disadari sepenuhnya."
    }
  }
};

export const gulfItems = [
  {
    id: "exec1",
    type: "EXECUTION",
    index: "01",
    stageName: "Tahap Eksekusi (Norman)",
    title: "Beban Kognitif Beranda",
    tagline: "Menu esensial kelistrikan tenggelam oleh banner promosi dan layanan sekunder.",
    problemSummary: "Banner profil (25%) memakan 35% layar atas; layanan listrik esensial tercampur sejajar dengan EV dan Iconnet.",
    solutionSummary: "Pisahkan blok Layanan Utama secara eksklusif ke focal point teratas; turunkan prioritas banner promosi.",
    theoryBadge: "Hick's Law & Prioritas Kognitif",
    tagOriginal: "SAAT INI: Layout Clutter",
    tagProposed: "USULAN: Prioritas Hick's Law",
    keyPoints: {
      issues: [
        "Banner verifikasi profil 25% merebut focal point utama pengguna yang sedang terburu-buru beli token.",
        "Menu listrik, SPKLU (EV), dan Internet (Iconnet) dicampur sejajar sehingga memperlambat pemindaian visual."
      ],
      fixes: [
        "Tempatkan 4 Layanan Utama (Token & Tagihan, Aduan, Pasang Baru, Ubah Daya) di titik pandang pertama.",
        "Kelompokkan layanan sekunder (Internet & EV) di blok terpisah di bawah dengan hierarki lebih rendah."
      ],
      theory: {
        name: "Hick's Law",
        rule: "Waktu pengambilan keputusan meningkat seiring bertambahnya pilihan. Pengelompokan hierarkis memotong beban interaksi hingga 60%."
      }
    }
  },
  {
    id: "exec2",
    type: "EXECUTION",
    index: "02",
    stageName: "Tahap Eksekusi (Norman)",
    title: "Discoverability Tombol 'Lewati'",
    tagline: "Aksi bypass tersembunyi di sudut atas saat form data diri menahan checkout darurat.",
    problemSummary: "Tombol 'Lewati' sangat kecil di pojok kanan atas di luar zona fokus; tombol bawah terkunci (disabled) sebelum mengisi NIK.",
    solutionSummary: "Sediakan tombol aksi ganda di thumb-zone bawah: 'Simpan Data' dan 'Lewati Sementara'.",
    theoryBadge: "Thumb Zone & Progressive Disclosure",
    tagOriginal: "SAAT INI: Bypass Tersembunyi",
    tagProposed: "USULAN: Thumb Zone Action",
    keyPoints: {
      issues: [
        "Tombol 'Lewati' di pojok kanan atas keluar dari pola pemindaian F-Pattern mata dan sulit dijangkau satu tangan.",
        "Pengguna terjebak pengisian form administratif NIK padahal sedang butuh token listrik darurat."
      ],
      fixes: [
        "Tempatkan tombol 'Lewati Sementara' tepat di jangkauan ibu jari (thumb-zone) bawah layar.",
        "Beri fleksibilitas penundaan data NIK tanpa memblokir alur transaksi token esensial."
      ],
      theory: {
        name: "Progressive Disclosure",
        rule: "Prioritaskan tugas utama pengguna (beli token) di atas kelengkapan database profil sistem."
      }
    }
  },
  {
    id: "eval1",
    type: "EVALUATION",
    index: "03",
    stageName: "Tahap Evaluasi (Norman)",
    title: "Kehilangan Jejak Transaksi (Blank Spot)",
    tagline: "Ketiadaan indikator status aktif di Beranda pasca interupsi aplikasi perbankan.",
    problemSummary: "Saat kembali dari m-banking, Beranda tidak memberi tanda ada tagihan Rp500.000 yang menunggu pembayaran.",
    solutionSummary: "Tampilkan Persistent Status Card di posisi teratas Beranda lengkap dengan timer hitung mundur dan tombol pintas salin VA.",
    theoryBadge: "Visibility of System Status",
    tagOriginal: "SAAT INI: Blank Spot Status",
    tagProposed: "USULAN: Persistent Status Card",
    keyPoints: {
      issues: [
        "Tidak ada indikator transaksi aktif di Beranda, memicu asumsi keliru bahwa pesanan gagal atau hilang.",
        "Pengguna dipaksa mengingat dan mencari manual riwayat transaksi di tab lain."
      ],
      fixes: [
        "Tampilkan status mengambang 'Menunggu Pembayaran (03:59:09)' tepat di bagian atas layar Beranda.",
        "Sediakan tombol pintasan 'Salin VA' dan 'Lanjutkan Bayar' langsung dari Beranda tanpa buka riwayat."
      ],
      theory: {
        name: "Visibility of System Status",
        rule: "Sistem harus selalu menginformasikan status operasional backend kepada pengguna secara instan dan transparan."
      }
    }
  },
  {
    id: "eval2",
    type: "EVALUATION",
    index: "04",
    stageName: "Tahap Evaluasi (Norman)",
    title: "Ambiguitas 'Kuota Pembelian'",
    tagline: "Format rasio '0 / 1.584 kWh' memicu beban komputasi mental pengguna.",
    problemSummary: "Angka mentah '0 / 1.584 kWh' sulit dipahami maknanya; penjelasan disembunyikan di balik ikon (i).",
    solutionSummary: "Ubah menjadi 'Batas Maksimal Beli Bulan Ini' dengan dual progress bar visual dan kalkulasi otomatis estimasi kWh.",
    theoryBadge: "Match System & Real World",
    tagOriginal: "SAAT INI: Ambiguitas & Beban Interaksi",
    tagProposed: "USULAN: Clear Human Language",
    keyPoints: {
      issues: [
        "Rasio '0 / 1.584 kWh' membingungkan pengguna: apakah kuota habis atau sisa kuota masih utuh?",
        "Menuntut interaksi tambahan (tap ikon 'i') hanya untuk memahami batasan sistem."
      ],
      fixes: [
        "Gunakan bahasa manusia: 'Terpakai: 0 kWh' vs 'Sisa Kuota: 1.584 kWh' dengan visual progress bar jelas.",
        "Tampilkan kalkulasi otomatis: Pembelian Rp500.000 setara ~328.5 kWh, aman & memenuhi kuota."
      ],
      theory: {
        name: "Match to Real World",
        rule: "Sistem wajib berbicara dalam bahasa keseharian pengguna, bukan terminologi database internal PLN."
      }
    }
  }
];
