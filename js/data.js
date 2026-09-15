/**
 * ====================================================================
 * DATA MASTER WEBSITE DENKESYAH 04.04.04 SURAKARTA
 * Kesdam IV/Diponegoro - Korem 074/Warastratama
 * ====================================================================
 * 
 * PANDUAN PENGEDITAN:
 * Anda dapat mengedit isian di bawah ini cukup menggunakan Notepad / VS Code.
 * Simpan file ini, lalu muat ulang (Refresh / Tekan F5) pada browser Anda.
 */

const DENKESYAH_DATA = {

  // ==================================================================
  // 1. PROFIL SATUAN, PIMPINAN, VISI & MISI
  // ==================================================================
  profil: {
    namaSatuan: "Denkesyah 04.04.04 Surakarta",
    namaLengkap: "Detasemen Kesehatan Wilayah 04.04.04 Surakarta",
    komandoAtas: "Kesehatan Komando Daerah Militer IV/Diponegoro (Kesdam IV/Diponegoro)",
    koremPembina: "Korem 074/Warastratama",

    // Motto Satuan
    motto: "Hesti Wira Sakti",
    mottoPenjelasan: "Prajurit kesehatan yang tangkas, berilmu luhur, berani menghadapi risiko tugas, dan senantiasa mendahulukan keselamatan jiwa prajurit serta masyarakat.",

    // Data Pimpinan (Komandan Denkesyah)
    komandan: {
      nama: "Letkol Ckm dr. Sandhi Fitriardi, Sp.S.,M.M.",
      pangkat: "Letnan Kolonel Ckm",
      jabatan: "Komandan Denkesyah 04.04.04 Surakarta",
      subJabatan: "Kesdam IV/Diponegoro",
      kutipan: "Kesehatan prima prajurit adalah penentu kemenangan dalam setiap medan pengabdian.",
      foto: "", // Isi nama file foto jika ada (misal: "assets/komandan.jpg"), kosongkan jika menggunakan grafis bawaan
      
      // Paragraf Sambutan
      sambutan1: "Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa. Website resmi Denkesyah 04.04.04 Surakarta hadir sebagai sarana informasi, transparansi, serta jembatan pelayanan terpadu bagi keluarga besar TNI AD, PNS Kemhan, dan seluruh masyarakat wilayah Solo Raya.",
      sambutan2: "Sebagai komando pelaksana teknis kesehatan di bawah jajaran Kesdam IV/Diponegoro, kami mengemban dua tugas mulia: Dukungan Kesehatan (Dukkes) untuk kesiapan tempur dan latihan militer, serta Pelayanan Kesehatan (Yankes) yang prima, modern, dan humanis melalui rumah sakit kebanggaan RS Tk. III Slamet Riyadi serta 7 Klinik Pratama Kartika."
    },

    // Visi Satuan
    visi: "Menjadi satuan kesehatan militer yang handal, profesional, dan dicintai rakyat, dengan kapabilitas dukungan operasional unggul serta fasilitas faskes berstandar nasional.",

    // 3 Pilar Tugas Pokok / Misi Satuan
    pilarTugas: [
      {
        judul: "Dukungan Kesehatan Taktis",
        desc: "Menjamin kesiapan fisik prajurit Korem 074/Warastratama melalui Rikkes dan pengawalan medis di medan latihan maupun tugas operasi."
      },
      {
        judul: "Pelayanan Kesehatan Berkualitas",
        desc: "Mengembangkan layanan spesialistik terakreditasi di RS Slamet Riyadi dan faskes tingkat pertama Kartika dengan fasilitas modern dan berorientasi keselamatan pasien."
      },
      {
        judul: "Kemanunggalan dengan Rakyat",
        desc: "Pengabdian masyarakat melalui bakti kesehatan, donor darah, pencegahan stunting balita, dan tanggap darurat bencana alam di Solo Raya."
      }
    ],

    // Kontak Kantor Madenkesyah & RS DKT
    alamat: "Jl. Slamet Riyadi No. 321, Penumping, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57141",
    teleponOperator: "(0271) 714422",
    hotlineIGD: "(0271) 713311",
    whatsappSiaga: "0812-2600-4404",
    emailDinas: "denkesyah040404.solo@tni-ad.mil.id",
    jamKerjaMaden: "Senin - Jumat: 07.00 - 15.30 WIB (IGD Siaga 24 Jam)"
  },

  // ==================================================================
  // 2. ANGKA STATISTIK
  // ==================================================================
  statistik: [
    { label: "Rumah Sakit Inti", nilai: "1", sub: "Rumkit Tk. III Slamet Riyadi" },
    { label: "Klinik Pratama Jajaran", nilai: "9", sub: "7 Kartika + 2 Yonif Batalyon" },
    { label: "Unit Operasional Khusus", nilai: "2", sub: "Gudkesyah & TRC Dukkes" },
    { label: "Personel Medis & Nakes", nilai: "280+", sub: "Dokter, Perawat & Paramedis" },
    { label: "Cakupan Daerah", nilai: "7", sub: "Kabupaten / Kota di Solo Raya" },
    { label: "Kesiapsiagaan Dukkes", nilai: "24/7", sub: "Siaga Bencana & VVIP Escort" }
  ],

  // ==================================================================
  // 3. DAFTAR FASILITAS KESEHATAN (FASKES) & UNIT OPERASIONAL JAJARAN
  // ==================================================================
  faskes: [
    {
      id: "rs-slamet-riyadi",
      nama: "Rumah Sakit Tk. III 04.06.04 Slamet Riyadi (RS DKT Solo)",
      kategori: "rumkit",
      wilayah: "surakarta",
      wilayahNama: "Kota Surakarta",
      tipe: "Rumah Sakit Rujukan Tingkat III TNI AD",
      kodeBpjs: "1111R001",
      alamat: "Jl. Slamet Riyadi No. 321, Sriwedari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57141",
      telepon: "(0271) 714422",
      wa: "081226004404",
      jam: "IGD & Rawat Inap 24 Jam Non-Stop | Poliklinik: 08.00 - 14.00 WIB",
      layanan: [
        "Instalasi Gawat Darurat (IGD) & Trauma Center 24 Jam",
        "Rawat Inap VVIP, VIP, Kelas I, II, dan III",
        "Instalasi Bedah Sentral (IBS) Kamar Operasi Steril Hepa Filter",
        "Poliklinik Spesialis (Internis, Bedah, Anak, Obgyn, Jantung, Saraf, Mata, THT, Kulit, Jiwa & Gigi)",
        "Intensive Care Unit (ICU) & High Care Unit (HCU) Terpadu",
        "Laboratorium Patologi Klinik 24 Jam",
        "Radiologi Digital & USG Doppler",
        "Instalasi Farmasi 24 Jam",
        "Fisioterapi & Rehabilitasi Medik Terpadu",
        "Medical Check-Up (Rikkes Militer & Werving Calon Prajurit)"
      ],
      bpjs: true,
      unggulan: true,
      badge: "Faskes Rujukan Utama Tingkat III"
    },
    {
      id: "klinik-kartika-01",
      nama: "Klinik Pratama Kartika 01 Surakarta",
      kategori: "kartika",
      wilayah: "surakarta",
      wilayahNama: "Kota Surakarta",
      tipe: "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
      kodeBpjs: "0154B001",
      alamat: "Kompleks Madenkesyah 04.04.04 / Jl. Slamet Riyadi 321, Kota Surakarta",
      telepon: "(0271) 714422 ext 105",
      wa: "081390010401",
      jam: "Senin - Sabtu: 07.30 - 20.00 WIB",
      layanan: [
        "Poli Umum Dokter Keluarga",
        "Poli Kesehatan Gigi & Mulut",
        "Pelayanan Kesehatan Ibu & Anak (KIA) / KB",
        "Laboratorium Sederhana (GDS, Asam Urat, Kolesterol)",
        "Apotek & Penyerahan Obat Kronis BPJS",
        "Konseling Promotif, Preventif & Program Prolanis",
        "Dukkes Kegiatan Militer Teritorial Kota Surakarta"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Induk Surakarta"
    },
    {
      id: "klinik-kartika-23",
      nama: "Klinik Pratama Kartika 23 Klaten",
      kategori: "kartika",
      wilayah: "klaten",
      wilayahNama: "Kabupaten Klaten",
      tipe: "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
      kodeBpjs: "0155B001",
      alamat: "Kompleks Makodim 0723/Klaten, Jl. Pemuda No. 80, Kab. Klaten",
      telepon: "(0272) 329107",
      wa: "081390010423",
      jam: "Senin - Sabtu: 07.30 - 15.00 WIB",
      layanan: [
        "Pemeriksaan Dokter Umum & Konsultasi Medis",
        "Poli Gigi Pratama",
        "Pelayanan KIA / KB & Imunisasi",
        "Pemeriksaan Kesehatan Rutin Prajurit & Persit",
        "Kunjungan Home Care Pasien Lanjut Usia",
        "Dukkes Latihan Militer Teritorial Kodim 0723/Klaten"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Kodim 0723/Klaten"
    },
    {
      id: "klinik-kartika-24",
      nama: "Klinik Pratama Kartika 24 Boyolali",
      kategori: "kartika",
      wilayah: "boyolali",
      wilayahNama: "Kabupaten Boyolali",
      tipe: "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
      kodeBpjs: "0156B001",
      alamat: "Jl. Merbabu, Bayanan, Siswodipuran, Kec. Boyolali, Kab. Boyolali",
      telepon: "(0276) 321456",
      wa: "081390010424",
      jam: "Senin - Sabtu: 07.30 - 15.00 WIB",
      layanan: [
        "Poli Umum Rawat Jalan",
        "Poli Gigi & Mulut",
        "Pelayanan Pasien BPJS Kesehatan & Umum",
        "Konseling Gizi & Kesehatan Ibu Anak",
        "Apotek Pelayanan Obat Resep Dokter",
        "Dukkes Latihan Satuan Teritorial Boyolali"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Kodim 0724/Boyolali"
    },
    {
      id: "klinik-kartika-25",
      nama: "Klinik Pratama Kartika 25 Sragen",
      kategori: "kartika",
      wilayah: "sragen",
      wilayahNama: "Kabupaten Sragen",
      tipe: "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
      kodeBpjs: "0157B001",
      alamat: "Kompleks Makodim 0725/Sragen, Jl. Raya Sukowati No. 120, Kab. Sragen",
      telepon: "(0271) 891230",
      wa: "081390010425",
      jam: "Senin - Sabtu: 07.30 - 15.00 WIB",
      layanan: [
        "Pelayanan Dokter Umum & Edukasi Medis",
        "Poli Gigi & Perawatan Mulut",
        "Instalasi Farmasi Obat BPJS & Dinas",
        "Skrining Kesehatan Berkala Personel TNI & ASN",
        "Posyandu Teritorial & Penanganan Balita Stunting"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Kodim 0725/Sragen"
    },
    {
      id: "klinik-kartika-26",
      nama: "Klinik Pratama Kartika 26 Sukoharjo",
      kategori: "kartika",
      wilayah: "sukoharjo",
      wilayahNama: "Kabupaten Sukoharjo",
      tipe: "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
      kodeBpjs: "0158B001",
      alamat: "Kompleks Makodim 0726/Sukoharjo, Jl. Mayor Sunaryo No. 15, Kab. Sukoharjo",
      telepon: "(0271) 593122",
      wa: "081390010426",
      jam: "Senin - Sabtu: 07.30 - 15.00 WIB",
      layanan: [
        "Poli Umum Rawat Jalan",
        "Poli Gigi Pratama",
        "Program Pengelolaan Penyakit Kronis (Prolanis)",
        "Imunisasi Dasar & Pemeriksaan Tumbuh Kembang Anak",
        "Rujukan Cepat Terintegrasi ke RS Slamet Riyadi Solo"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Kodim 0726/Sukoharjo"
    },
    {
      id: "klinik-kartika-27",
      nama: "Klinik Pratama Kartika 27 Karanganyar",
      kategori: "kartika",
      wilayah: "karanganyar",
      wilayahNama: "Kabupaten Karanganyar",
      tipe: "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
      kodeBpjs: "0159B001",
      alamat: "Kompleks Makodim 0727/Karanganyar, Jl. Lawu No. 120, Kab. Karanganyar",
      telepon: "(0271) 495140",
      wa: "081390010427",
      jam: "Senin - Sabtu: 07.30 - 15.00 WIB",
      layanan: [
        "Poli Rawat Jalan Dokter Umum & Gawat Darurat Dasar",
        "Poli Gigi Pratama",
        "Pemeriksaan Laborat Cepat (Gula Darah, Asam Urat, Kolesterol)",
        "Pelayanan BPJS Kesehatan Penuh",
        "Dukkes Latihan Pasukan Tempur di Lereng Gunung Lawu"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Kodim 0727/Karanganyar"
    },
    {
      id: "klinik-kartika-28",
      nama: "Klinik Pratama Kartika 28 Wonogiri",
      kategori: "kartika",
      wilayah: "wonogiri",
      wilayahNama: "Kabupaten Wonogiri",
      tipe: "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
      kodeBpjs: "0160B001",
      alamat: "Kompleks Makodim 0728/Wonogiri, Jl. Jenderal Sudirman No. 104, Kab. Wonogiri",
      telepon: "(0273) 321155",
      wa: "081390010428",
      jam: "Senin - Sabtu: 07.30 - 15.00 WIB",
      layanan: [
        "Pemeriksaan Dokter Umum & Dokter Keluarga",
        "Poli Kesehatan Gigi & Mulut",
        "Pelayanan KIA / KB & Konseling Kesehatan Reproduksi",
        "Apotek Dinas & Konseling Obat",
        "Rikkes Skrining Fisik Prajurit Kodim 0728/Wonogiri"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Kodim 0728/Wonogiri"
    },
    {
      id: "klinik-yonif-408",
      nama: "Klinik Pratama Yonif 408/Suhbrastha",
      kategori: "yonif",
      wilayah: "sragen",
      wilayahNama: "Kabupaten Sragen",
      tipe: "FKTP Batalyon Infanteri Tempur",
      kodeBpjs: "0157B002",
      alamat: "Asrama Militer Yonif 408/SBH, Jl. Mayor Soeharto No. 1, Sragen Kulon, Kab. Sragen",
      telepon: "(0271) 891408",
      wa: "081390010408",
      jam: "Pelayanan Pasien: 07.30 - 15.00 WIB | Siaga Keslap Yonif: 24 Jam",
      layanan: [
        "Poli Umum Rawat Jalan Prajurit & Warga Sekitar Asmil",
        "Poli Gigi Pratama",
        "Dukungan Medis Latihan Tempur Taktis Batalyon (Dukkes Opslat)",
        "Unit Evakuasi Medis Taktis Pra-Rumah Sakit",
        "Farmasi & Rawat Tindakan Medis Lapangan"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Yonif 408/Suhbrastha"
    },
    {
      id: "klinik-yonif-413",
      nama: "Klinik Pratama Yonif Mekanis Raider 413/Bremoro",
      kategori: "yonif",
      wilayah: "sukoharjo",
      wilayahNama: "Kabupaten Sukoharjo",
      tipe: "FKTP Batalyon Infanteri Mekanis Kostrad",
      kodeBpjs: "0158B002",
      alamat: "Asrama Militer Yonif Mekanis Raider 413/Bremoro, Palur, Kec. Mojolaban, Kab. Sukoharjo",
      telepon: "(0271) 825413",
      wa: "081390010413",
      jam: "Pelayanan Pasien: 07.30 - 15.00 WIB | Siaga Medis Tempur: 24 Jam",
      layanan: [
        "Poli Umum Pelayanan Prajurit, Keluarga & Masyarakat Umum",
        "Poli Gigi & Kesehatan Mulut",
        "Tim Medis Siaga Operasi Latihan Mekanis",
        "Skrining Uji Kebugaran Fisik Prajurit Siap Tugas",
        "Pemberian Obat Farmasi & Konsultasi BPJS"
      ],
      bpjs: true,
      unggulan: false,
      badge: "FKTP Yonif Raider 413"
    },
    {
      id: "gudkesyah-surakarta",
      nama: "Gudang Kesehatan Wilayah 04.04.04 (Gudkesyah Solo)",
      kategori: "khusus",
      wilayah: "surakarta",
      wilayahNama: "Kota Surakarta",
      tipe: "Unit Logistik Kesehatan Militer",
      alamat: "Kompleks Madenkesyah 04.04.04, Jl. Slamet Riyadi No. 321, Kota Surakarta",
      telepon: "(0271) 714422 ext 108",
      wa: "081226004404",
      jam: "Senin - Jumat: 07.00 - 15.30 WIB (Siaga Logkes Darurat 24 Jam)",
      layanan: [
        "Pengelolaan & Distribusi Bekal Kesehatan (Bekkes) Dinas TNI AD",
        "Penyimpanan & Penyaluran Obat Rutin Jajaran Solo Raya",
        "Pemeliharaan & Kalibrasi Alat Kesehatan (Alkes) Satuan",
        "Pengelolaan Cadangan Obat Bencana Alam & Operasi Militer",
        "Dukungan Logistik Medis Latihan Tempur Korem 074/Warastratama"
      ],
      bpjs: false,
      unggulan: false,
      badge: "Unit Logistik Bekkes Militer"
    },
    {
      id: "trc-dukkes-lapangan",
      nama: "Tim Dukkes Lapangan & TRC Evakuasi Medis 04.04.04",
      kategori: "khusus",
      wilayah: "surakarta",
      wilayahNama: "Solo Raya (7 Kabupaten/Kota)",
      tipe: "Unit Reaksi Cepat Medis Militer 24 Jam",
      alamat: "Madenkesyah 04.04.04 / RS Slamet Riyadi, Jl. Slamet Riyadi No. 321, Surakarta",
      telepon: "(0271) 713311 (Hotline 24 Jam)",
      wa: "081226004404",
      jam: "Siaga Darurat Penuh 24 Jam Non-Stop",
      layanan: [
        "Tim Reaksi Cepat (TRC) Penanggulangan Bencana Alam Solo Raya",
        "Pengamanan Medis Ring 1 & Ring 2 Kunjungan Kenegaraan Presiden / VVIP",
        "Armada Ambulans Taktis Evakuasi Medan Sulit & ICU Bergerak",
        "Posko Kesehatan Taktis Latihan Bersama TNI-Polri",
        "Hotline Jemput Pasien Kritis Emergency 24 Jam"
      ],
      bpjs: false,
      unggulan: true,
      badge: "Unit Reaksi Cepat 24 Jam"
    }
  ],

  // ==================================================================
  // 4. JADWAL DOKTER SPESIALIS (RS SLAMET RIYADI)
  // ==================================================================
  jadwalDokter: [
    {
      spesialis: "Spesialis Penyakit Dalam (Internis)",
      icon: "activity",
      dokter: [
        { nama: "dr. Hendro Wicaksono, Sp.PD", hari: "Senin - Kamis", jam: "08.30 - 12.30 WIB", kuota: "25 Pasien" },
        { nama: "dr. Nurul Aini, Sp.PD", hari: "Selasa, Jumat & Sabtu", jam: "09.00 - 13.00 WIB", kuota: "20 Pasien" }
      ]
    },
    {
      spesialis: "Spesialis Bedah Umum & Subspesialis",
      icon: "scissors",
      dokter: [
        { nama: "Letkol Ckm dr. Aris Purnomo, Sp.B", hari: "Senin & Rabu", jam: "08.00 - 11.30 WIB", kuota: "15 Pasien" },
        { nama: "dr. Bambang Irawan, Sp.B", hari: "Selasa, Kamis & Jumat", jam: "08.30 - 12.00 WIB", kuota: "20 Pasien" }
      ]
    },
    {
      spesialis: "Spesialis Anak (Pediatri)",
      icon: "baby",
      dokter: [
        { nama: "dr. Rina Suryandari, Sp.A", hari: "Senin - Jumat", jam: "08.30 - 12.00 WIB", kuota: "25 Pasien" },
        { nama: "dr. Agus Prasetyo, Sp.A", hari: "Senin, Rabu & Sabtu", jam: "13.00 - 15.30 WIB", kuota: "20 Pasien" }
      ]
    },
    {
      spesialis: "Spesialis Obstetri & Ginekologi (Kebidanan)",
      icon: "heart-pulse",
      dokter: [
        { nama: "dr. Sri Rahayu, Sp.OG", hari: "Senin, Rabu & Jumat", jam: "08.30 - 12.30 WIB", kuota: "20 Pasien" },
        { nama: "Mayor Ckm dr. Dwi Hartanto, Sp.OG", hari: "Selasa & Kamis", jam: "09.00 - 13.00 WIB", kuota: "20 Pasien" }
      ]
    },
    {
      spesialis: "Spesialis Jantung & Pembuluh Darah",
      icon: "heart",
      dokter: [
        { nama: "dr. FX. Surya Prabowo, Sp.JP, FIHA", hari: "Selasa & Kamis", jam: "10.00 - 13.30 WIB", kuota: "15 Pasien" },
        { nama: "dr. Ratna Wulandari, Sp.JP", hari: "Rabu & Jumat", jam: "08.30 - 11.30 WIB", kuota: "15 Pasien" }
      ]
    },
    {
      spesialis: "Spesialis Saraf (Neurologi)",
      icon: "brain",
      dokter: [
        { nama: "dr. Tri Wahyuni, Sp.N", hari: "Senin, Rabu & Jumat", jam: "08.30 - 12.00 WIB", kuota: "20 Pasien" }
      ]
    },
    {
      spesialis: "Spesialis Mata (Oftalmologi)",
      icon: "eye",
      dokter: [
        { nama: "dr. Budi Santoso, Sp.M", hari: "Senin, Selasa & Kamis", jam: "08.30 - 12.00 WIB", kuota: "20 Pasien" }
      ]
    },
    {
      spesialis: "Kesehatan Gigi, Mulut & Bedah Mulut",
      icon: "smile",
      dokter: [
        { nama: "Kapten Ckm (K) drg. Maya Safitri", hari: "Senin - Jumat", jam: "08.00 - 13.00 WIB", kuota: "20 Pasien" },
        { nama: "drg. Anton Nugroho, Sp.BM", hari: "Selasa & Kamis", jam: "09.00 - 12.00 WIB", kuota: "12 Pasien" }
      ]
    }
  ],

  // ==================================================================
  // 5. ALUR PELAYANAN
  // ==================================================================
  alurPelayanan: [
    {
      tipe: "tni",
      judul: "Alur Pelayanan Pasien TNI AD / PNS Kemhan & Keluarga",
      deskripsi: "Prosedur pelayanan kesehatan dinas militer menggunakan KTA / Kartu KBP & BPJS TNI.",
      langkah: [
        { no: 1, title: "Pendaftaran & Verifikasi", desc: "Menunjukkan KTA / KTP & Kartu BPJS TNI di loket khusus prajurit/dinas." },
        { no: 2, title: "Triage / Pemeriksaan Tanda Vital", desc: "Pemeriksaan tekanan darah, nadi, suhu, dan skrining riwayat kesehatan oleh perawat militer." },
        { no: 3, title: "Pemeriksaan Dokter", desc: "Pemeriksaan oleh dokter militer/umum di Poliklinik atau rujukan internal ke dokter spesialis RS DKT." },
        { no: 4, title: "Pemeriksaan Penunjang (Bila Diperlukan)", desc: "Pemeriksaan laboratorium, rontgen radiologi, EKG, atau USG." },
        { no: 5, title: "Farmasi / Tindakan Lanjutan", desc: "Pengambilan obat di apotek dinas atau proses admission bila dianjurkan rawat inap dinas." }
      ]
    },
    {
      tipe: "bpjs",
      judul: "Alur Pelayanan Pasien BPJS Kesehatan Umum",
      deskripsi: "Prosedur berobat bagi peserta BPJS Kesehatan Mandiri, PBI, dan Badan Usaha.",
      langkah: [
        { no: 1, title: "Rujukan FKTP / Antrean Online", desc: "Membawa surat rujukan dari FKTP/Puskesmas atau mendaftar via Aplikasi Mobile JKN." },
        { no: 2, title: "Loket BPJS Center RS DKT", desc: "Cetak SEP (Surat Eligibilitas Peserta) dan konfirmasi kehadiran di loket verifikasi." },
        { no: 3, title: "Pelayanan di Poliklinik Spesialis", desc: "Konsultasi medis dan pemeriksaan klinis oleh dokter spesialis sesuai jadwal." },
        { no: 4, title: "Pemeriksaan Lab / Diagnostik", desc: "Layanan penunjang diagnostik laboratorium atau radiologi sesuai instruksi dokter spesialis." },
        { no: 5, title: "Pengambilan Obat di Farmasi BPJS", desc: "E-resep langsung terkirim ke instalasi farmasi, pasien mengambil obat tanpa biaya tambahan." }
      ]
    },
    {
      tipe: "rikkes",
      judul: "Alur Rikkes Werving Calon Prajurit TNI AD",
      deskripsi: "Tahapan tes pemeriksaan kesehatan calon Taruna Akmil, Bintara, dan Tamtama PK.",
      langkah: [
        { no: 1, title: "Pendaftaran & Absensi Peserta", desc: "Verifikasi kartu pendaftaran calon prajurit dan penomoran dada peserta Rikkes." },
        { no: 2, title: "Pemeriksaan Fisik Luar (Rikkes I)", desc: "Pengukuran tinggi/berat badan, tensi nadi, postur tubuh, mata/visus, THT, dan gigi mulut." },
        { no: 3, title: "Pemeriksaan Dalam & Penunjang (Rikkes II)", desc: "Pemeriksaan laboratorium darah/urine lengkap, rontgen toraks, EKG jantung, USG & jiwa." },
        { no: 4, title: "Sidang Rekam Medis (Tim Dokter Uji)", desc: "Rapat pleno panitia pemeriksa kesehatan untuk penetapan kategori MS (Memenuhi Syarat) / TMS." },
        { no: 5, title: "Pengumuman Hasil Resmi", desc: "Penyampaian hasil keputusan kesehatan secara transparan dan terukur kepada panitia werving." }
      ]
    }
  ],

  // ==================================================================
  // 6. BERITA & KEGIATAN SATUAN
  // ==================================================================
  beritaKegiatan: [
    {
      id: 1,
      judul: "Denkesyah 04.04.04 Surakarta Gelar Pengobatan Massal dan Baksos Sambut HUT TNI",
      tanggal: "12 September 2026",
      kategori: "Bakti Sosial",
      ringkasan: "Sebanyak 750 warga Solo Raya mendapatkan pelayanan pengobatan gratis, pemeriksaan gula darah, serta pembagian kacamata baca dalam rangkaian bakti TNI untuk rakyat.",
      lokasi: "Madenkesyah 04.04.04 Surakarta"
    },
    {
      id: 2,
      judul: "Tingkatkan Kesiapsiagaan, Personel Denkesyah Gelar Latihan Simulasi Triage Bencana Lapangan",
      tanggal: "28 Agustus 2026",
      kategori: "Latihan Militer",
      ringkasan: "Tim Reaksi Cepat Kesehatan Denkesyah 04.04.04 menguji kesiapan armada ambulans taktis dan penanganan korban massal dalam skenario penanggulangan bencana gempa.",
      lokasi: "RS Slamet Riyadi Solo"
    },
    {
      id: 3,
      judul: "Pelaksanaan Rikkes Berkala Semester II Prajurit dan PNS Kodim Jajaran Korem 074/Warastratama",
      tanggal: "15 Agustus 2026",
      kategori: "Rikkes Dinas",
      ringkasan: "Pemeriksaan menyeluruh mencakup treadmill test, EKG, laboratorium lengkap, dan visus guna memastikan seluruh prajurit selalu prima dalam menjalankan tugas negara.",
      lokasi: "Instalasi Rikkes Denkesyah"
    },
    {
      id: 4,
      judul: "Sinergi TNI & Persit KCK Sukseskan Program Percepatan Penurunan Stunting Anak Balita",
      tanggal: "02 Agustus 2026",
      kategori: "Kesehatan Anak",
      ringkasan: "Klinik Kartika jajaran Denkesyah 04.04.04 membagikan paket nutrisi tambahan dan vitamin bagi balita beresiko stunting di 7 wilayah Solo Raya.",
      lokasi: "Klinik Pratama Kartika Solo Raya"
    }
  ]
};

// Export ke objek window
if (typeof window !== 'undefined') {
  window.DENKESYAH_DATA = DENKESYAH_DATA;
}
