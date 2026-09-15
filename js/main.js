/**
 * JavaScript Interaktif Website Denkesyah 04.04.04 Surakarta
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi ikon Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // State aplikasi
  const state = {
    selectedWilayah: 'semua',
    selectedKategori: 'semua',
    searchQuery: '',
    currentAlur: 'tni',
    currentPoli: 0
  };

  // 1. Render Profil & Visi Misi
  renderProfilSatuan();

  // 2. Render Statistik
  renderStatistik();

  // 3. Render Faskes Jajaran
  renderFaskes();

  // 4. Render Jadwal Dokter
  renderJadwalDokter();

  // 5. Render Alur Pelayanan
  renderAlurPelayanan();

  // 6. Render Berita & Kegiatan
  renderBerita();

  // 7. Setup Event Listeners
  setupEventListeners();

  // 8. Setup Form Pengaduan
  setupContactForm();

  // 9. Setup BMI Calculator
  setupBMICalculator();

  // 10. Setup Mobile Menu
  setupMobileMenu();
});

/**
 * 1. Render Statistik
 */
function renderStatistik() {
  const container = document.getElementById('stats-container');
  if (!container || !window.DENKESYAH_DATA) return;

  const { statistik } = window.DENKESYAH_DATA;
  container.innerHTML = statistik.map(item => `
    <div class="p-6 bg-white/95 rounded-2xl border border-emerald-900/10 shadow-sm hover:shadow-md transition-all text-center group">
      <div class="text-3xl lg:text-4xl font-extrabold text-[#1b4332] group-hover:text-[#d4af37] transition-colors mb-1">
        ${item.nilai}
      </div>
      <div class="font-bold text-slate-800 text-sm lg:text-base">${item.label}</div>
      <div class="text-xs text-slate-500 mt-1">${item.sub}</div>
    </div>
  `).join('');
}

/**
 * 2. Render Faskes dengan Filter
 */
function renderFaskes() {
  const container = document.getElementById('faskes-grid');
  const countBadge = document.getElementById('faskes-count');
  if (!container || !window.DENKESYAH_DATA) return;

  const { faskes } = window.DENKESYAH_DATA;

  // Filter faskes berdasarkan state
  const filtered = faskes.filter(item => {
    const matchWilayah = state.selectedWilayah === 'semua' || item.wilayah === state.selectedWilayah;
    const matchKategori = state.selectedKategori === 'semua' || 
      item.kategori === state.selectedKategori ||
      (state.selectedKategori === 'klinik' && (item.kategori === 'kartika' || item.kategori === 'yonif'));
    
    const query = state.searchQuery.toLowerCase();
    const matchSearch = !query || 
      item.nama.toLowerCase().includes(query) ||
      item.alamat.toLowerCase().includes(query) ||
      item.wilayahNama.toLowerCase().includes(query) ||
      (item.kodeBpjs && item.kodeBpjs.toLowerCase().includes(query)) ||
      item.layanan.some(l => l.toLowerCase().includes(query));

    return matchWilayah && matchKategori && matchSearch;
  });

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${filtered.length} Faskes & Unit`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-slate-300">
        <i data-lucide="map-pin-off" class="w-12 h-12 mx-auto text-slate-400 mb-3"></i>
        <h4 class="text-lg font-bold text-slate-700">Fasilitas Tidak Ditemukan</h4>
        <p class="text-slate-500 text-sm mt-1">Coba gunakan kata kunci pencarian lain atau pilih filter wilayah "Semua Wilayah".</p>
        <button onclick="resetFaskesFilter()" class="mt-4 px-4 py-2 bg-[#1b4332] text-white text-xs font-semibold rounded-lg hover:bg-[#2d5a27] transition">
          Reset Filter
        </button>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => {
    // Badge Kategori Styling
    let badgeClass = 'bg-blue-100 text-blue-800';
    let badgeIcon = 'stethoscope';
    if (item.kategori === 'rumkit') {
      badgeClass = 'bg-emerald-100 text-emerald-800';
      badgeIcon = 'hospital';
    } else if (item.kategori === 'yonif') {
      badgeClass = 'bg-purple-100 text-purple-800';
      badgeIcon = 'shield';
    } else if (item.kategori === 'khusus') {
      badgeClass = 'bg-amber-100 text-amber-800';
      badgeIcon = 'activity';
    }

    return `
      <div class="bg-white rounded-2xl overflow-hidden border ${item.unggulan ? 'border-amber-400 shadow-md ring-1 ring-amber-300' : 'border-slate-200/80 shadow-sm'} hover-lift flex flex-col justify-between transition-all">
        <div class="p-6">
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${badgeClass}">
              <i data-lucide="${badgeIcon}" class="w-3.5 h-3.5"></i>
              ${item.tipe}
            </span>
            <span class="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-md">
              ${item.wilayahNama}
            </span>
          </div>

          <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#1b4332]">
            ${item.nama}
          </h3>

          ${item.kodeBpjs ? `
            <div class="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-50 border border-teal-200 text-teal-800 rounded text-[10px] font-bold mb-2.5">
              <i data-lucide="credit-card" class="w-3 h-3"></i>
              <span>Kode BPJS: ${item.kodeBpjs}</span>
            </div>
          ` : ''}

          <div class="flex items-start gap-2 text-xs text-slate-600 mb-2.5">
            <i data-lucide="map-pin" class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5"></i>
            <span class="line-clamp-2">${item.alamat}</span>
          </div>

          <div class="flex items-center gap-2 text-xs text-slate-600 mb-3.5">
            <i data-lucide="clock" class="w-4 h-4 text-amber-600 shrink-0"></i>
            <span class="truncate">${item.jam}</span>
          </div>

          <div class="border-t border-slate-100 pt-3">
            <p class="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Layanan Utama:</p>
            <ul class="space-y-1 text-xs text-slate-600">
              ${item.layanan.slice(0, 3).map(lay => `
                <li class="flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
                  <span class="truncate">${lay}</span>
                </li>
              `).join('')}
              ${item.layanan.length > 3 ? `<li class="text-[11px] font-semibold text-[#1b4332] pl-5">+ ${item.layanan.length - 3} layanan lainnya</li>` : ''}
            </ul>
          </div>
        </div>

        <div class="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
          <button onclick="bukaModalFaskes('${item.id}')" class="text-xs font-bold text-[#1b4332] hover:text-[#2d5a27] hover:underline flex items-center gap-1">
            <span>Detail Lengkap</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
          <div class="flex items-center gap-2">
            <a href="tel:${item.telepon.replace(/[^0-9]/g, '')}" class="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition" title="Telepon">
              <i data-lucide="phone" class="w-3.5 h-3.5"></i>
            </a>
            <a href="https://wa.me/62${item.wa.replace(/^0/, '')}?text=Halo%20Admin%20${encodeURIComponent(item.nama)},%20mohon%20informasi%20layanan." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm transition">
              <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
              <span>WA</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/**
 * Buka Modal Detail Faskes
 */
window.bukaModalFaskes = function(id) {
  const modal = document.getElementById('modal-faskes');
  const content = document.getElementById('modal-faskes-body');
  if (!modal || !content || !window.DENKESYAH_DATA) return;

  const item = window.DENKESYAH_DATA.faskes.find(f => f.id === id);
  if (!item) return;

  content.innerHTML = `
    <div class="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
      <div>
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
            ${item.tipe}
          </span>
          ${item.kodeBpjs ? `
            <span class="inline-block px-2.5 py-0.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold rounded">
              Kode Faskes BPJS: ${item.kodeBpjs}
            </span>
          ` : ''}
        </div>
        <h3 class="text-xl font-bold text-slate-900">${item.nama}</h3>
        <p class="text-xs text-amber-700 font-semibold mt-0.5">Wilayah Tugas: ${item.wilayahNama} - Korem 074/Warastratama</p>
      </div>
      <button onclick="tutupModalFaskes()" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="space-y-4 text-sm text-slate-700">
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/70">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <i data-lucide="info" class="w-4 h-4 text-[#1b4332]"></i>
          Informasi & Jam Operasional
        </h4>
        <div class="grid sm:grid-cols-2 gap-3 text-xs">
          <div>
            <span class="text-slate-500 block">Alamat Lengkap:</span>
            <span class="font-medium text-slate-800">${item.alamat}</span>
          </div>
          <div>
            <span class="text-slate-500 block">Jam Pelayanan:</span>
            <span class="font-medium text-slate-800">${item.jam}</span>
          </div>
          <div>
            <span class="text-slate-500 block">Telepon Kantor/Faskes:</span>
            <span class="font-semibold text-emerald-800">${item.telepon}</span>
          </div>
          <div>
            <span class="text-slate-500 block">Hotline WhatsApp:</span>
            <span class="font-semibold text-emerald-800">${item.wa}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
          Daftar Layanan Medis & Penunjang:
        </h4>
        <div class="grid sm:grid-cols-2 gap-2 text-xs">
          ${item.layanan.map(l => `
            <div class="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/50 border border-emerald-100">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-700 shrink-0"></i>
              <span class="font-medium text-slate-800">${l}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
        <i data-lucide="alert-circle" class="w-4 h-4 text-amber-700 shrink-0 mt-0.5"></i>
        <div>
          <strong>Pelayanan Pasien:</strong> Menerima pasien Prajurit TNI AD, PNS Kemhan, Anggota Persit Kartika Chandra Kirana, Peserta BPJS Kesehatan (Mandiri/PBI/PNS) serta Pasien Umum Non-BPJS.
        </div>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
      <button onclick="tutupModalFaskes()" class="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50">
        Tutup
      </button>
      <a href="https://maps.google.com/?q=${encodeURIComponent(item.nama + ' ' + item.alamat)}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 shadow-sm">
        <i data-lucide="navigation" class="w-3.5 h-3.5"></i>
        <span>Buka Petunjuk Rute</span>
      </a>
      <a href="https://wa.me/62${item.wa.replace(/^0/, '')}?text=Halo%20Admin%20${encodeURIComponent(item.nama)},%20saya%20ingin%20informasi%20pendaftaran%20dan%20berobat." target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1.5 shadow-sm">
        <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
        <span>Hubungi WhatsApp</span>
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');

  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.tutupModalFaskes = function() {
  const modal = document.getElementById('modal-faskes');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
};

window.resetFaskesFilter = function() {
  state.selectedWilayah = 'semua';
  state.selectedKategori = 'semua';
  state.searchQuery = '';
  
  const searchInput = document.getElementById('faskes-search');
  if (searchInput) searchInput.value = '';

  const wilayahSelect = document.getElementById('filter-wilayah');
  if (wilayahSelect) wilayahSelect.value = 'semua';

  document.querySelectorAll('.kategori-btn').forEach(btn => {
    if (btn.dataset.kategori === 'semua') {
      btn.classList.add('bg-[#1b4332]', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-[#1b4332]', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });

  renderFaskes();
};

/**
 * 3. Render Jadwal Dokter RS DKT Slamet Riyadi
 */
function renderJadwalDokter() {
  const navContainer = document.getElementById('dokter-nav');
  const contentContainer = document.getElementById('dokter-content');
  if (!navContainer || !contentContainer || !window.DENKESYAH_DATA) return;

  const { jadwalDokter } = window.DENKESYAH_DATA;

  // Render Tabs Navigasi
  navContainer.innerHTML = jadwalDokter.map((item, idx) => `
    <button onclick="pilihPoli(${idx})" class="poli-tab-btn flex items-center gap-2.5 px-4 py-3 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all border ${idx === state.currentPoli ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}">
      <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0 ${idx === state.currentPoli ? 'text-amber-300' : 'text-emerald-700'}"></i>
      <span class="truncate">${item.spesialis}</span>
    </button>
  `).join('');

  // Render Konten Poli Terpilih
  const current = jadwalDokter[state.currentPoli];
  contentContainer.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div class="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
        <div>
          <span class="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
            Instalasi Rawat Jalan Spesialis
          </span>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 mt-1">${current.spesialis}</h3>
        </div>
        <div class="text-right hidden sm:block">
          <span class="text-xs text-slate-500">Lokasi:</span>
          <p class="text-xs font-bold text-[#1b4332]">RS Tk. III Slamet Riyadi Solo</p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        ${current.dokter.map(d => `
          <div class="p-5 rounded-xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white hover:border-emerald-300 transition-all">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h4 class="font-bold text-slate-900 text-sm sm:text-base">${d.nama}</h4>
              <span class="text-[11px] font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">
                ${d.kuota}
              </span>
            </div>

            <div class="space-y-1.5 text-xs text-slate-600 mt-3">
              <div class="flex items-center gap-2">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-emerald-700 shrink-0"></i>
                <span class="font-semibold text-slate-800">Hari:</span>
                <span>${d.hari}</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-600 shrink-0"></i>
                <span class="font-semibold text-slate-800">Jam Praktik:</span>
                <span>${d.jam}</span>
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] text-slate-500">Pendaftaran Mobile JKN & Loket</span>
              <a href="https://wa.me/6281226004404?text=Halo%20Pendaftaran%20RS%20Slamet%20Riyadi,%20saya%20ingin%20mendaftar%20konsultasi%20dengan%20${encodeURIComponent(d.nama)}." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1b4332] hover:bg-[#2d5a27] text-white text-xs font-semibold rounded-lg shadow-sm transition">
                <span>Daftar / Reservasi</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between flex-wrap gap-3">
        <div class="text-xs text-emerald-900">
          <strong class="font-semibold">Catatan Pendaftaran:</strong> Pasien BPJS disarankan mengambil nomor antrean online melalui aplikasi Mobile JKN 1 hari sebelum jadwal periksa.
        </div>
        <a href="tel:0271714422" class="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1">
          <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
          <span>Hubungi Operator (0271) 714422</span>
        </a>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.pilihPoli = function(index) {
  state.currentPoli = index;
  renderJadwalDokter();
};

/**
 * 4. Render Alur Pelayanan
 */
function renderAlurPelayanan() {
  const navContainer = document.getElementById('alur-nav');
  const contentContainer = document.getElementById('alur-content');
  if (!navContainer || !contentContainer || !window.DENKESYAH_DATA) return;

  const { alurPelayanan } = window.DENKESYAH_DATA;

  // Render Navigasi Tipe Alur
  navContainer.innerHTML = alurPelayanan.map(item => `
    <button onclick="pilihAlur('${item.tipe}')" class="px-5 py-3 font-bold text-xs sm:text-sm rounded-xl transition-all border ${item.tipe === state.currentAlur ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}">
      ${item.tipe === 'tni' ? 'Prajurit & PNS TNI' : item.tipe === 'bpjs' ? 'Pasien BPJS Umum' : 'Rikkes Calon Prajurit'}
    </button>
  `).join('');

  // Render Konten Alur Terpilih
  const current = alurPelayanan.find(a => a.tipe === state.currentAlur) || alurPelayanan[0];
  contentContainer.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
      <div class="mb-6">
        <h3 class="text-lg sm:text-xl font-bold text-slate-900">${current.judul}</h3>
        <p class="text-slate-500 text-xs sm:text-sm mt-1">${current.deskripsi}</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        ${current.langkah.map((l, idx) => `
          <div class="relative p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div class="w-8 h-8 rounded-full bg-[#1b4332] text-amber-300 font-extrabold flex items-center justify-center text-sm mb-3 shadow-sm">
                ${l.no}
              </div>
              <h4 class="font-bold text-slate-900 text-sm mb-1.5">${l.title}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${l.desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-200/60 text-[10px] font-semibold text-emerald-800 uppercase tracking-wider">
              Langkah ke-${idx + 1}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

window.pilihAlur = function(tipe) {
  state.currentAlur = tipe;
  renderAlurPelayanan();
};

/**
 * 5. Render Berita & Kegiatan
 */
function renderBerita() {
  const container = document.getElementById('berita-grid');
  if (!container || !window.DENKESYAH_DATA) return;

  const { beritaKegiatan } = window.DENKESYAH_DATA;
  container.innerHTML = beritaKegiatan.map(item => `
    <div class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover-lift flex flex-col justify-between">
      <div class="p-6">
        <div class="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span class="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
            ${item.kategori}
          </span>
          <span class="flex items-center gap-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
            ${item.tanggal}
          </span>
        </div>
        <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug hover:text-[#1b4332] transition">
          ${item.judul}
        </h3>
        <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
          ${item.ringkasan}
        </p>
      </div>

      <div class="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="text-slate-500 flex items-center gap-1">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-700"></i>
          ${item.lokasi}
        </span>
        <button onclick="bukaModalBerita('${item.id}')" class="font-bold text-[#1b4332] hover:underline flex items-center gap-1">
          <span>Baca Selengkapnya</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.bukaModalBerita = function(id) {
  const modal = document.getElementById('modal-faskes');
  const content = document.getElementById('modal-faskes-body');
  if (!modal || !content || !window.DENKESYAH_DATA) return;

  const item = window.DENKESYAH_DATA.beritaKegiatan.find(b => b.id == id);
  if (!item) return;

  content.innerHTML = `
    <div class="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
      <div>
        <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-1">
          ${item.kategori}
        </span>
        <h3 class="text-xl font-bold text-slate-900">${item.judul}</h3>
        <p class="text-xs text-slate-500 mt-1">Dipublikasikan pada: ${item.tanggal} • Lokasi: ${item.lokasi}</p>
      </div>
      <button onclick="tutupModalFaskes()" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="space-y-4 text-sm text-slate-700 leading-relaxed">
      <p class="font-medium text-slate-800">${item.ringkasan}</p>
      <p>Kegiatan ini merupakan bentuk dedikasi prajurit kesehatan Denkesyah 04.04.04 Surakarta di bawah naungan Kesdam IV/Diponegoro untuk terus mendukung kesiapan operasional prajurit dan memberikan pelayanan medis yang prima dan bermartabat bagi masyarakat Solo Raya.</p>
      <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
        <strong>Penerangan Denkesyah 04.04.04 Surakarta:</strong> Untuk liputan media dan informasi dokumentasi resmi dapat menghubungi Staf Penerangan melalui nomor dinas Madenkesyah.
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-slate-100 flex justify-end">
      <button onclick="tutupModalFaskes()" class="px-5 py-2 bg-[#1b4332] text-white text-xs font-bold rounded-xl hover:bg-[#2d5a27] transition">
        Tutup
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');

  if (typeof lucide !== 'undefined') lucide.createIcons();
};

/**
 * 6. Setup Event Listeners
 */
function setupEventListeners() {
  // Filter Wilayah
  const filterWilayah = document.getElementById('filter-wilayah');
  if (filterWilayah) {
    filterWilayah.addEventListener('change', (e) => {
      state.selectedWilayah = e.target.value;
      renderFaskes();
    });
  }

  // Filter Kategori (Semua, Rumkit, Klinik)
  document.querySelectorAll('.kategori-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.kategori-btn').forEach(b => {
        b.classList.remove('bg-[#1b4332]', 'text-white');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.add('bg-[#1b4332]', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
      state.selectedKategori = btn.dataset.kategori;
      renderFaskes();
    });
  });

  // Pencarian Faskes
  const searchInput = document.getElementById('faskes-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderFaskes();
    });
  }

  // FAQ Accordions
  document.querySelectorAll('.faq-toggle').forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      const icon = item.querySelector('.faq-icon');
      const isOpen = content.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Emergency Hotline Copy
  const copyHotlineBtn = document.getElementById('btn-copy-hotline');
  if (copyHotlineBtn) {
    copyHotlineBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('(0271) 713311').then(() => {
        showToast('Nomor Hotline IGD (0271) 713311 berhasil disalin!');
      });
    });
  }
}

/**
 * 7. Setup Form Pengaduan & Aspirasi
 */
function setupContactForm() {
  const form = document.getElementById('form-pengaduan');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('pengaduan-nama').value.trim();
    const hp = document.getElementById('pengaduan-hp').value.trim();
    const kategori = document.getElementById('pengaduan-kategori').value;
    const pesan = document.getElementById('pengaduan-pesan').value.trim();

    if (!nama || !hp || !pesan) {
      showToast('Harap lengkapi semua kolom yang bertanda bintang (*)', 'error');
      return;
    }

    const waText = `Halo Petugas Pengaduan Denkesyah 04.04.04 Surakarta,%0A%0ASaya ingin menyampaikan pesan/aspirasi:%0A*Nama:* ${encodeURIComponent(nama)}%0A*No HP:* ${encodeURIComponent(hp)}%0A*Kategori:* ${encodeURIComponent(kategori)}%0A*Pesan:* ${encodeURIComponent(pesan)}`;
    
    // Tampilkan modal konfirmasi atau langsung redirect ke WA
    showToast('Pesan berhasil disusun! Membuka WhatsApp Call Center...', 'success');

    setTimeout(() => {
      window.open(`https://wa.me/6281226004404?text=${waText}`, '_blank');
      form.reset();
    }, 1000);
  });
}

/**
 * 8. Setup BMI Calculator (Kalkulator Kesehatan & Stakes Fisik)
 */
function setupBMICalculator() {
  const form = document.getElementById('bmi-form');
  const resultDiv = document.getElementById('bmi-result');
  if (!form || !resultDiv) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const bb = parseFloat(document.getElementById('bmi-bb').value);
    const tb = parseFloat(document.getElementById('bmi-tb').value);
    const gender = document.querySelector('input[name="bmi-gender"]:checked')?.value || 'pria';

    if (!bb || !tb || bb <= 0 || tb <= 0) {
      showToast('Masukkan data berat dan tinggi badan dengan benar.', 'error');
      return;
    }

    const tinggiMeter = tb / 100;
    const bmi = (bb / (tinggiMeter * tinggiMeter)).toFixed(1);

    let status = '';
    let colorClass = '';
    let stakesTNI = '';
    let rekomendasi = '';

    if (bmi < 18.5) {
      status = 'Kekurangan Berat Badan (Underweight)';
      colorClass = 'text-amber-600 bg-amber-50 border-amber-200';
      stakesTNI = 'Stakes III / Memerlukan Peningkatan Massa Otot';
      rekomendasi = 'Tingkatkan asupan kalori bernutrisi seimbang dan latihan beban untuk mencapai berat proporsional.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = 'Ideal / Normal (Memenuhi Standar)';
      colorClass = 'text-emerald-700 bg-emerald-50 border-emerald-200';
      stakesTNI = 'Stakes I / Standar Prima Prajurit TNI AD';
      rekomendasi = 'Pertahankan pola latihan fisik lari 3200 meter, pull-up, sit-up, dan pola makan bergizi.';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      status = 'Kelebihan Berat Badan (Overweight)';
      colorClass = 'text-orange-600 bg-orange-50 border-orange-200';
      stakesTNI = 'Stakes II / Evaluasi Postur Tubuh';
      rekomendasi = 'Tingkatkan latihan kardio aerobik dan atur defisit kalori agar kembali ke rentang ideal.';
    } else {
      status = 'Obesitas (Perlu Penanganan Medis)';
      colorClass = 'text-red-700 bg-red-50 border-red-200';
      stakesTNI = 'Stakes IV / Tidak Memenuhi Standar Fisik Werving';
      rekomendasi = 'Konsultasikan dengan dokter gizi dan dokter spesialis di RS DKT Slamet Riyadi.';
    }

    resultDiv.innerHTML = `
      <div class="p-4 rounded-xl border ${colorClass} mt-4 text-left space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-600">Hasil Indeks Massa Tubuh (BMI)</span>
          <span class="text-xl font-extrabold text-slate-900">${bmi} kg/m²</span>
        </div>
        <div class="font-bold text-sm">${status}</div>
        <div class="p-2 rounded-lg bg-white/80 border border-slate-200 text-xs">
          <span class="font-bold text-slate-800">Kategori Postur Fisik TNI:</span> ${stakesTNI}
        </div>
        <p class="text-xs text-slate-600">${rekomendasi}</p>
      </div>
    `;
    resultDiv.classList.remove('hidden');
  });
}

/**
 * 9. Mobile Navigation Toggle
 */
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });

  // Auto close menu when link clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/**
 * Helper: Toast Notification
 */
function showToast(message, type = 'info') {
  let toast = document.getElementById('system-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'system-toast';
    toast.className = 'fixed bottom-5 right-5 z-50 px-5 py-3.5 rounded-xl shadow-xl text-xs sm:text-sm font-semibold transition-all duration-300 transform translate-y-10 opacity-0 flex items-center gap-2.5';
    document.body.appendChild(toast);
  }

  if (type === 'error') {
    toast.className = 'fixed bottom-5 right-5 z-50 px-5 py-3.5 rounded-xl shadow-xl text-xs sm:text-sm font-semibold bg-red-600 text-white flex items-center gap-2.5';
  } else if (type === 'success') {
    toast.className = 'fixed bottom-5 right-5 z-50 px-5 py-3.5 rounded-xl shadow-xl text-xs sm:text-sm font-semibold bg-emerald-700 text-white flex items-center gap-2.5';
  } else {
    toast.className = 'fixed bottom-5 right-5 z-50 px-5 py-3.5 rounded-xl shadow-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white flex items-center gap-2.5';
  }

  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.remove('translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3500);
}

/**
 * 10. Render Profil Satuan, Pimpinan & Visi Misi dari data.js
 */
function renderProfilSatuan() {
  if (!window.DENKESYAH_DATA || !window.DENKESYAH_DATA.profil) return;
  const { profil } = window.DENKESYAH_DATA;
  const { komandan } = profil;

  if (komandan) {
    const elNama = document.getElementById('pimpinan-nama');
    if (elNama && komandan.nama) elNama.textContent = komandan.nama;

    const elPangkat = document.getElementById('pimpinan-pangkat');
    if (elPangkat && komandan.jabatan) elPangkat.textContent = komandan.jabatan;

    const elSub = document.getElementById('pimpinan-sub');
    if (elSub && komandan.subJabatan) elSub.textContent = komandan.subJabatan;

    const elKutipan = document.getElementById('pimpinan-kutipan');
    if (elKutipan && komandan.kutipan) elKutipan.textContent = `"${komandan.kutipan}"`;

    const elSambutan1 = document.getElementById('pimpinan-sambutan-1');
    if (elSambutan1 && komandan.sambutan1) elSambutan1.textContent = komandan.sambutan1;

    const elSambutan2 = document.getElementById('pimpinan-sambutan-2');
    if (elSambutan2 && komandan.sambutan2) elSambutan2.textContent = komandan.sambutan2;
  }

  // Visi
  const elVisi = document.getElementById('profil-visi');
  if (elVisi && profil.visi) elVisi.textContent = profil.visi;

  // Motto Penjelasan
  const elMottoPenjelasan = document.getElementById('profil-motto-desc');
  if (elMottoPenjelasan && profil.mottoPenjelasan) elMottoPenjelasan.textContent = profil.mottoPenjelasan;

  // 3 Pilar Tugas Pokok
  const elPilarList = document.getElementById('profil-pilar-list');
  if (elPilarList && Array.isArray(profil.pilarTugas)) {
    elPilarList.innerHTML = profil.pilarTugas.map(p => `
      <li class="flex items-start gap-2">
        <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
        <span><strong>${p.judul}:</strong> ${p.desc}</span>
      </li>
    `).join('');
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
