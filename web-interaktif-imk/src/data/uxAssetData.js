import { uxComparisons } from './uxReportData';

// Codes and screen names follow the Day 1 report appendix. Images come from PLN.zip.
const screenshots = [
  ['S01', 'Pesanan aktif', 'Acuan status pesanan dan usulan batas waktu pada setiap kartu.'],
  ['S02', 'Detail pembayaran', 'Acuan rincian biaya, nomor pembayaran virtual, dan batas waktu pembayaran.'],
  ['S03', 'Sebelum lanjut pembayaran', 'Bukti bahwa admin dan total sudah terlihat sebelum pembayaran dilanjutkan.'],
  ['S04', 'Non Taglis', 'Acuan pesan kode tidak ditemukan dan kebutuhan panduan pemulihan.'],
  ['S05', 'Tagihan listrik', 'Acuan konsistensi istilah dan konteks pembayaran pada pesan gagal.'],
  ['S06', 'Pemilihan token', 'Acuan pilihan nominal dan usulan menampilkan rincian biaya lebih awal.'],
  ['S07', 'Pengaduan', 'Acuan tampilan riwayat pengaduan kosong pada observasi Hari 1.'],
  ['S08', 'Rewards', 'Acuan ide penataan hierarki beranda dan area promosi pada Hari 3.'],
  ['S09', 'Akun', 'Tampilan akun dalam kumpulan 13 screenshot yang diobservasi pada Hari 1.'],
  ['S10', 'Pesanan lama', 'Acuan pesanan lama yang masih berstatus menunggu. Usia pesanan tidak membuktikan kedaluwarsa.'],
  ['S11', 'Riwayat transaksi', 'Acuan riwayat kosong dan usulan jalur lanjut ke pesanan aktif.'],
  ['S12', 'Beranda bagian bawah', 'Acuan ide penataan layanan dan promosi pada beranda.'],
  ['S13', 'Beranda bagian atas', 'Acuan kartu pelanggan dan akses Beli Token pada beranda.'],
];

export const uxAssets = screenshots.map(([code, title, description]) => ({
  code,
  title,
  description,
  src: `/ux/${code}.jpeg`,
  comparisonIndex: uxComparisons.findIndex(item => item.before === code),
}));
