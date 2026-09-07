import React from 'react';
import { 
  FileText, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  Download,
  Award,
  Calendar
} from 'lucide-react';
import { projectMeta, pdfSections, gulfItems } from '../../data/analysisData';

export default function ChapterDokumenPDF() {
  return (
    <div className="chapter-container">
      {/* Document Meta Header */}
      <div className="pdf-doc-paper">
        <div className="pdf-doc-header">
          <div className="pdf-uni-tag">UNIVERSITAS SEBELAS MARET • INFORMATIKA</div>
          <h1 className="pdf-main-title">Analisis & Redesain Interaksi: PLN Mobile</h1>
          <p className="pdf-case-sub">Studi Kasus: Pembelian Token Listrik Prabayar (Menu + Form Fill)</p>
          
          <div className="pdf-meta-box">
            <div className="meta-scenario">
              <strong>Skenario Tugas Konkret:</strong> "{projectMeta.concreteScenario}"
            </div>
            
            <div className="meta-team-list">
              <div className="meta-team-title">
                <Users size={16} />
                <span>Anggota Kelompok 3:</span>
              </div>
              <div className="meta-team-members">
                {projectMeta.team.map((m, idx) => (
                  <div key={idx} className="team-pill">
                    <strong>{m.name}</strong> ({m.nim})
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="pdf-section">
          <h2 className="pdf-section-title">1. Bedah Sistem</h2>
          
          <h3 className="pdf-sub-title">Domain – Goal – Task – Intention</h3>
          <table className="pdf-table">
            <thead>
              <tr>
                <th style={{ width: '180px' }}>Elemen</th>
                <th>Deskripsi Analisis</th>
              </tr>
            </thead>
            <tbody>
              {pdfSections.bedahSistem.domainGoalTask.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.element}</strong></td>
                  <td>
                    <div>{row.desc}</div>
                    <div className="text-muted text-sm mt-1">{row.detail}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="pdf-sub-title">Siklus Eksekusi–Evaluasi (Norman)</h3>
          <ol className="pdf-ordered-list">
            {pdfSections.teoriNormanAbowd.normanCycle.map((item) => (
              <li key={item.step}>
                <strong>{item.name}</strong>: {item.desc}
              </li>
            ))}
          </ol>

          <h3 className="pdf-sub-title">Kerangka Abowd & Beale</h3>
          <ul className="pdf-bullet-list">
            {pdfSections.teoriNormanAbowd.abowdBeale.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}</strong>: {item.desc}
              </li>
            ))}
          </ul>

          <h3 className="pdf-sub-title">Gaya Interaksi</h3>
          <p>Kombinasi antara:</p>
          <ul className="pdf-bullet-list">
            <li><strong>Menu Selection</strong> — memilih grid nominal token dan layanan utama.</li>
            <li><strong>Form Fill-in</strong> — mengetik ID Pelanggan dan nomor NIK (jika diminta).</li>
          </ul>

          <h3 className="pdf-sub-title">Ergonomi</h3>
          <ul className="pdf-bullet-list">
            <li>Tombol aksi utama (Selanjutnya/Lanjutkan) ditempatkan konsisten di <em>thumb-zone</em> (area jempol bawah).</li>
            <li>Kepadatan elemen visual (<em>clutter</em>) di Beranda membuat mata cepat lelah dan navigasi awal terasa berat.</li>
          </ul>

          <h3 className="pdf-sub-title">Konteks Penggunaan</h3>
          <ul className="pdf-bullet-list">
            <li>Sering digunakan dalam kondisi urgensi/panik (listrik berbunyi/mati dan rumah gelap gulita).</li>
            <li>Rentan terhadap <em>multitasking</em> antar-aplikasi (harus berpindah ke aplikasi mobile banking) sehingga pengguna berisiko terdistraksi atau tidak sengaja menutup aplikasi PLN Mobile.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="pdf-section">
          <h2 className="pdf-section-title">2. Penilaian Interaksi</h2>
          
          <h3 className="pdf-sub-title">Gulf of Execution</h3>
          <ol className="pdf-ordered-list">
            <li>
              <strong>Beban Kognitif Beranda:</strong> Fitur utilitas utama bersaing dengan banner persentase profil kelengkapan akun dan promosi yang memakan ruang besar, menunda pengguna menemukan titik mulai (opsi "Token").
            </li>
            <li>
              <strong>Interupsi Alur:</strong> Munculnya paksaan mengisi NIK (Data Pribadi) di tengah proses urgen pembelian menahan ritme pengguna, memperlebar jarak antara niat pengguna dan tindakan sistem.
            </li>
          </ol>

          <h3 className="pdf-sub-title">Gulf of Evaluation</h3>
          <ol className="pdf-ordered-list">
            <li>
              <strong>Transaksi Hilang (Blank Spot):</strong> Jika pengguna menutup aplikasi di tengah pembayaran (misal saat membuka m-banking), Beranda tidak menampilkan indikator proaktif bahwa ada transaksi pending. Pengguna sering keliru mengevaluasi sistem dan mengulang pesanan dari awal.
            </li>
            <li>
              <strong>Interaction Cost pada 'Kuota Pembelian':</strong> Layar nominal menampilkan angka "0 / 1.584 kWh" yang membingungkan. Penjelasannya ada, tetapi disembunyikan di balik ikon "Informasi". Pengguna dituntut melakukan aksi tambahan (klik) untuk mengevaluasi makna angka tersebut.
            </li>
          </ol>

          <h3 className="pdf-sub-title">Dimensi Pengalaman (UX)</h3>
          <ul className="pdf-bullet-list">
            <li><strong>Pragmatis:</strong> Fungsional, tetapi terasa birokratis di awal penggunaan (paksaan isi data pribadi).</li>
            <li><strong>Hedonis:</strong> Rendah, cenderung memicu kecemasan karena berkaitan langsung dengan tenggat waktu layanan esensial.</li>
          </ul>

          <h3 className="pdf-sub-title">Potensi Dark Pattern</h3>
          <div className="pdf-callout-box">
            <strong>Misdirection (Salah Arah):</strong> Toggle donasi (Electree Rp1.000) diletakkan persis di atas total biaya dan tombol "Lanjutkan Pembayaran". Ini berisiko terpencet secara tidak sengaja oleh pengguna yang sedang terburu-buru.
          </div>
        </section>

        {/* Section 3 */}
        <section className="pdf-section">
          <h2 className="pdf-section-title">3. Rancang Ulang (Redesign Cases)</h2>
          <div className="pdf-redesign-summary-grid">
            {gulfItems.map((item, idx) => (
              <div key={idx} className="pdf-case-card">
                <span className="case-badge">{item.type} #{idx + 1}</span>
                <h4>{item.title}</h4>
                <p className="case-desc-sm">{item.problemSummary}</p>
                <div className="case-fix-sm">
                  <strong>Fiksasi:</strong> {item.solutionSummary}
                </div>
                <div className="case-theory-sm">
                  <strong>Teori:</strong> {item.theoryBadge}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
