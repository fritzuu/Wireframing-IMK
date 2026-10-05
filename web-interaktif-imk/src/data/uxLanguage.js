import { uxDays, uxComparisons } from './uxReportData';

// Presentation labels only. Keep the source report data and figures intact.
export const reportCodes = {
  K1: 'Kebutuhan memahami biaya', K2: 'Kebutuhan memahami status pesanan',
  K3: 'Kebutuhan mencari transaksi', K4: 'Kebutuhan memperbaiki kesalahan',
  N1: 'Peserta H S', N2: 'Peserta H A', N3: 'Peserta A B P', N4: 'Peserta R P',
  H0: 'Beranda', T1: 'Pemilihan token', T2: 'Tinjauan pesanan', T3: 'Detail pembayaran',
  A1: 'Pesanan aktif', A2: 'Pesanan kedaluwarsa', R1: 'Riwayat kosong', B1: 'Bantuan pembayaran',
  S01: 'Screenshot pesanan aktif', S02: 'Screenshot detail pembayaran',
  S03: 'Screenshot sebelum lanjut pembayaran', S04: 'Screenshot Non Taglis',
  S05: 'Screenshot tagihan listrik', S06: 'Screenshot pemilihan token',
  S07: 'Screenshot pengaduan', S08: 'Screenshot rewards', S09: 'Screenshot akun',
  S10: 'Screenshot pesanan lama', S11: 'Screenshot riwayat transaksi',
  S12: 'Screenshot beranda bagian bawah', S13: 'Screenshot beranda bagian atas',
};

const codePattern = /\b(?:K[1-4]|N[1-4]|S(?:0[1-9]|1[0-3])|H0|T[1-3]|A[1-2]|R1|B1)\b/g;
const terms = [
  ['H S / N1', 'Peserta H S'], ['H A / N2', 'Peserta H A'], ['A B P / N3', 'Peserta A B P'],
  ['N1 / H S', 'Peserta H S'], ['N2 / H A', 'Peserta H A'], ['N3 / A B P', 'Peserta A B P'], ['N4 / R P', 'Peserta R P'],
  ['User Persona Sheet', 'Lembar gambaran pengguna'], ['Problem statement', 'Rumusan masalah'],
  ['problem statement', 'rumusan masalah'], ['Usability Test Report', 'Laporan uji kemudahan penggunaan'],
  ['Final Presentation', 'Presentasi akhir'], ['Empathy map', 'Peta empati'], ['empathy map', 'peta empati'],
  ['Storyboard visual', 'Alur penggunaan bergambar'], ['storyboard visual', 'alur penggunaan bergambar'],
  ['Storyboard', 'Alur bergambar'], ['storyboard', 'alur bergambar'],
  ['Wireframe', 'Sketsa tampilan'], ['wireframe', 'sketsa tampilan'],
  ['persona primer', 'gambaran pengguna utama'], ['persona sekunder', 'gambaran pengguna pendukung'],
  ['Persona masih hipotesis desain.', 'Gambaran pengguna masih berupa dugaan untuk membantu perancangan.'],
  ['Primer:', 'Pengguna utama:'], ['Sekunder:', 'Pengguna pendukung:'],
  ['walkthrough', 'penelusuran alur penggunaan'], ['D/F/V', 'kebutuhan, kelayakan, dan manfaat'],
  ['BCA VA', 'nomor pembayaran virtual BCA'], ['VA dummy', 'nomor pembayaran contoh'], ['Nomor VA', 'Nomor pembayaran virtual'],
  ['Substitute / ganti', 'Ganti'], ['Combine / gabungkan', 'Gabungkan'], ['Adapt / adaptasi', 'Adaptasi'],
  ['Modify / ubah', 'Ubah'], ['Put to another use / manfaatkan ulang', 'Manfaatkan ulang'],
  ['Eliminate / hilangkan', 'Hilangkan'], ['Rearrange / susun ulang', 'Susun ulang'],
];

export function readableText(value) {
  let result = value;
  for (const [term, replacement] of terms) result = result.replaceAll(term, replacement);
  result = result.replace(/\b(?:T[1-3]|A[1-2]|R1|B1|S\d{2})(?:\/(?:T[1-3]|A[1-2]|R1|B1|S\d{2}))+\b/g,
    group => group.split('/').map(code => reportCodes[code] || code).join(', '));
  return result.replace(codePattern, code => reportCodes[code]).replace(/\bVA\b/g, 'nomor pembayaran virtual').replace(/\s+,/g, ',');
}

function readableSection(section) {
  const copy = { ...section, title: readableText(section.title) };
  for (const key of ['note', 'intro', 'text', 'alt']) if (section[key]) copy[key] = readableText(section[key]);
  if (section.type === 'table') {
    copy.headers = section.headers.map(readableText);
    copy.rows = section.rows.map(row => row.map(readableText));
    if (section.headers.includes('D / F / V')) {
      copy.title = 'Lima ide dan alasan pemilihannya';
      copy.headers = ['Ide', 'Solusi', 'Dibutuhkan pengguna', 'Bisa diterapkan', 'Bermanfaat bagi layanan', 'Dasar dan pertimbangan'];
      copy.rows = section.rows.map(([idea, solution, scores, reason]) => [readableText(idea), readableText(solution), ...scores.split(' / '), readableText(reason)]);
      copy.note = 'Skor 1 sampai 5 merupakan penilaian desain. Urutan penilaian adalah kebutuhan pengguna, kemudahan penerapan, dan manfaat bagi layanan. Ide pertama paling mudah diterapkan. Ide kedua membantu pengguna setelah pesanan dibuat.';
    }
  } else if (section.type === 'profiles') {
    copy.items = section.items.map(profile => Object.fromEntries(Object.entries(profile).map(([key, value]) => [key, readableText(value)])));
  } else if (section.items) copy.items = section.items.map(readableText);
  return copy;
}

export const readableDays = uxDays.map(day => {
  const copy = { ...day, limitation: readableText(day.limitation), sections: day.sections.map(readableSection) };
  for (const field of ['focus', 'work', 'results', 'deliverables']) copy[field] = day[field].map(readableText);
  if (day.day === 1) {
    copy.results = ['Empat kebutuhan ditemukan: memahami biaya, membaca status dan batas waktu, menemukan transaksi, serta memperbaiki kesalahan.', 'Biaya dan status menjadi fokus utama. Jalur pencarian transaksi mendukung alur, sedangkan pemulihan kesalahan menjadi peluang lanjutan.'];
    copy.deliverables = ['Peta empati yang merangkum ucapan, pikiran, tindakan, dan perasaan pengguna.', 'Empat catatan wawancara skenario dengan peserta berinisial H S, H A, A B P, dan R P.', 'Daftar kebutuhan pengguna dan pemetaan 13 screenshot.'];
  }
  if (day.day === 3) {
    copy.work[1] = 'Menilai apakah ide dibutuhkan pengguna, bisa diterapkan, dan bermanfaat bagi layanan pada skala 1 sampai 5.';
    copy.sections[0].title = 'Tujuh cara mengembangkan ide';
    copy.sections[0].note = 'Metode ini disebut SCAMPER. Setiap langkah membantu melihat kemungkinan perubahan pada desain yang sudah ada.';
  }
  if (day.day === 4) {
    copy.results[0] = 'Empat perubahan: biaya terlihat saat memilih token, batas waktu muncul pada kartu pesanan, tindakan disesuaikan saat kedaluwarsa, dan riwayat kosong mempunyai jalan lanjut.';
    copy.deliverables[0] = 'Empat pasangan sketsa sebelum dan sesudah untuk pemilihan token, pesanan aktif, kedaluwarsa, dan riwayat kosong.';
    copy.sections.find(s => s.title === 'Skenario A: pembelian token').items = [
      'Dari beranda, buka Beli Token.',
      'Pilih Rp5.000. Nomor pembayaran virtual BCA sudah dipilih. Sebut nominal, admin, dan total sebelum Selanjutnya.',
      'Tinjau identitas dan total. Tekan Lanjutkan Pembayaran untuk membuat pesanan demo.',
      'Temukan nomor pembayaran contoh dan batas waktu. Buka Pesanan Aktif.',
      'Temukan pesanan yang sama, lalu jelaskan status dan tombol yang sesuai.',
    ];
    copy.sections.find(s => s.title === 'Skenario B: status pesanan dan pemulihan').items[0] = 'Dari beranda, buka Riwayat dan Bantuan dengan data demo kosong.';
    copy.sections.find(s => s.title === 'Aturan interaksi dan kesiapan evaluasi').items[0] = 'Rincian biaya diterapkan saat memilih dan meninjau token. Status diperjelas pada detail pembayaran serta pesanan aktif. Jalur lanjut tersedia pada riwayat dan bantuan.';
  }
  return copy;
});

export const readableComparisons = uxComparisons.map(item => ({ ...item,
  original: readableText(item.original), proposal: readableText(item.proposal), reason: readableText(item.reason), kept: readableText(item.kept),
}));

export function codesForDay(day) {
  const codes = [...new Set(JSON.stringify(day).match(codePattern) || [])];
  if (day.day === 1) for (let i = 1; i <= 13; i++) codes.push(`S${String(i).padStart(2, '0')}`);
  return [...new Set(codes)].sort();
}
