import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle,
  TrendingDown,
  Info
} from 'lucide-react';
import { pdfSections } from '../../data/analysisData';

export default function SlideMatrixDarkPattern({ onNavigateToMockupCase }) {
  const { penilaianUX } = pdfSections;
  const [donateToggled, setDonateToggled] = useState(true);

  return (
    <div className="slide-content-layout">
      {/* Header */}
      <div className="slide-header-row">
        <div>
          <span className="slide-badge-category">EVALUASI INTERAKSI & DARK PATTERN</span>
          <h1 className="slide-main-heading">Matrix Temuan Masalah & Pola Manipulatif</h1>
          <p className="slide-lead-text">
            Sintesis 4 jurang interaksi (*Gulf*), degradasi dimensi UX, serta simulasi dark pattern donasi terselubung.
          </p>
        </div>

        <div className="ux-score-badges">
          <div className="score-pill score-prag">
            <span className="score-tag">UX PRAGMATIS</span>
            <span className="score-val">Birokratis</span>
          </div>
          <div className="score-pill score-hedon">
            <span className="score-tag">UX HEDONIS</span>
            <span className="score-val">Kecemasan Tinggi</span>
          </div>
        </div>
      </div>

      {/* Main Grid: 2x2 Gulf Matrix on Left vs Dark Pattern Simulator on Right */}
      <div className="matrix-and-dp-split">
        {/* Left: 4 Gulf Summary Cards */}
        <div className="gulf-matrix-container">
          <div className="matrix-column col-exec">
            <div className="matrix-col-header">
              <span className="col-tag tag-exec">GULF OF EXECUTION (AKSI)</span>
              <span className="col-desc">Jarak antara niat mental vs aksi fisik</span>
            </div>

            <div 
              className="matrix-case-card clickable"
              onClick={() => onNavigateToMockupCase(0)}
              title="Klik untuk lihat mockup Kasus 1"
            >
              <div className="case-card-header">
                <span className="case-id-tag">KASUS 01</span>
                <span className="case-theory-tag">Hick's Law</span>
              </div>
              <h4 className="case-title">Beban Kognitif Beranda</h4>
              <p className="case-snippet">Banner verifikasi 25% merebut 35% focal point atas; menu token tenggelam.</p>
              <div className="case-link-hint">Lihat Redesain Mockup ➔</div>
            </div>

            <div 
              className="matrix-case-card clickable"
              onClick={() => onNavigateToMockupCase(1)}
              title="Klik untuk lihat mockup Kasus 2"
            >
              <div className="case-card-header">
                <span className="case-id-tag">KASUS 02</span>
                <span className="case-theory-tag">Thumb Zone</span>
              </div>
              <h4 className="case-title">Interupsi Alur Form NIK</h4>
              <p className="case-snippet">Tombol 'Lewati' tersembunyi di pojok kanan atas; form menahan checkout darurat.</p>
              <div className="case-link-hint">Lihat Redesain Mockup ➔</div>
            </div>
          </div>

          <div className="matrix-column col-eval">
            <div className="matrix-col-header">
              <span className="col-tag tag-eval">GULF OF EVALUATION (STATUS)</span>
              <span className="col-desc">Kesulitan memahami status sistem</span>
            </div>

            <div 
              className="matrix-case-card clickable"
              onClick={() => onNavigateToMockupCase(2)}
              title="Klik untuk lihat mockup Kasus 3"
            >
              <div className="case-card-header">
                <span className="case-id-tag">KASUS 03</span>
                <span className="case-theory-tag">Visibility of Status</span>
              </div>
              <h4 className="case-title">Blank Spot Pasca M-Banking</h4>
              <p className="case-snippet">Beranda kosong tanpa indikator tagihan aktif; pengguna mengira pesanan gagal.</p>
              <div className="case-link-hint">Lihat Redesain Mockup ➔</div>
            </div>

            <div 
              className="matrix-case-card clickable"
              onClick={() => onNavigateToMockupCase(3)}
              title="Klik untuk lihat mockup Kasus 4"
            >
              <div className="case-card-header">
                <span className="case-id-tag">KASUS 04</span>
                <span className="case-theory-tag">Match Real World</span>
              </div>
              <h4 className="case-title">Interaction Cost Kuota kWh</h4>
              <p className="case-snippet">Angka mentah '0 / 1.584 kWh' membingungkan; penjelasan terkunci di ikon (i).</p>
              <div className="case-link-hint">Lihat Redesain Mockup ➔</div>
            </div>
          </div>
        </div>

        {/* Right: Realistic Dark Pattern Simulator */}
        <div className="dark-pattern-interactive-box">
          <div className="dp-box-header">
            <ShieldAlert size={20} className="text-red" />
            <div>
              <span className="dp-cat-label">TEMUAN KRITIS: DARK PATTERN</span>
              <h3 className="dp-cat-title">Misdirection (Salah Arah)</h3>
            </div>
          </div>

          <p className="dp-explanation">
            Sistem meletakkan opsi donasi <b>Electree Rp1.000</b> tepat menempel di atas total bayar dan tombol primer, rawan terpencet tanpa sengaja saat terburu-buru.
          </p>

          {/* Interactive Simulated Component */}
          <div className="simulated-checkout-card">
            <div className="sim-row">
              <span className="sim-label">Token Listrik Prabayar</span>
              <span className="sim-val">Rp 500.000</span>
            </div>
            <div className="sim-row">
              <span className="sim-label">Biaya Transaksi</span>
              <span className="sim-val">Rp 3.000</span>
            </div>

            {/* Dark Pattern Toggle Item */}
            <div className={`sim-donation-toggle ${donateToggled ? 'checked' : ''}`}>
              <div className="sim-toggle-left">
                <input 
                  type="checkbox" 
                  id="donate-chk" 
                  checked={donateToggled} 
                  onChange={(e) => setDonateToggled(e.target.checked)} 
                />
                <label htmlFor="donate-chk" className="sim-toggle-label">
                  <strong>Donasi Electree Pohon</strong>
                  <span className="sim-sub">Ikut peduli lingkungan (+Rp1.000)</span>
                </label>
              </div>
              <span className="sim-val text-red">{donateToggled ? '+Rp 1.000' : 'Rp 0'}</span>
            </div>

            <div className="sim-divider" />

            <div className="sim-total-row">
              <div>
                <span className="total-label">Total Pembayaran:</span>
                <div className="total-val">
                  Rp {donateToggled ? '504.000' : '503.000'}
                </div>
              </div>
              <button className="sim-btn-checkout">
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>

          <div className="dp-verdict-note">
            <AlertTriangle size={15} className="text-red" />
            <span>
              <b>Bahaya Kognitif:</b> Di bawah tekanan panik listrik padam, pengguna secara otomatis menekan tombol biru tanpa sadar biaya membengkak.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
