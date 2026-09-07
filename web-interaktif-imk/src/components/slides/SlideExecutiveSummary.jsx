import React from 'react';
import { 
  Zap, 
  Clock, 
  Smartphone, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { projectMeta } from '../../data/analysisData';

export default function SlideExecutiveSummary({ onGoToSlide }) {
  const steps = [
    { num: '01', title: 'Buka PLN Mobile', note: 'Beranda Clutter' },
    { num: '02', title: 'Pilih "Token"', note: 'Focal Point Terbagi' },
    { num: '03', title: 'Isi Data / NIK', note: 'Interupsi Alur' },
    { num: '04', title: 'Pilih Rp500.000', note: 'Ambigu Kuota kWh' },
    { num: '05', title: 'Checkout & VA', note: 'BCA Virtual Account' },
    { num: '06', title: 'Bayar m-Banking', note: 'Blank Spot Beranda' }
  ];

  return (
    <div className="slide-content-layout">
      {/* Slide Header */}
      <div className="slide-header-row">
        <div>
          <span className="slide-badge-category">EXECUTIVE BRIEF • BEDAH SISTEM</span>
          <h1 className="slide-main-heading">Studi Kasus: Pembelian Token Listrik PLN Mobile</h1>
          <p className="slide-lead-text">
            Dekomposisi tujuan, konteks urgensi, dan pemetaan friksi interaksi pada transaksi token prabayar Rp500.000.
          </p>
        </div>

        <div className="slide-kpi-pill">
          <span className="kpi-tag">NOMINAL</span>
          <span className="kpi-value">Rp 500.000</span>
        </div>
      </div>

      {/* Bento Grid: Core Metrics & Context */}
      <div className="bento-deliverable-grid">
        {/* Card 1: Skenario & Kondisi Kritis */}
        <div className="bento-card bento-hero">
          <div className="bento-card-top">
            <span className="bento-label">SKENARIO OPERASIONAL</span>
            <span className="bento-tag-urgent">Urgensi Tinggi</span>
          </div>
          <h2 className="bento-headline">"Rumah Padam, Butuh Listrik Menyala Cepat"</h2>
          <p className="bento-body">
            Pengguna menggunakan aplikasi di bawah <b>stres kognitif tinggi</b>. Setiap detik interupsi (banner promosi, paksaan isi NIK) memperlebar jurang eksekusi (*Gulf of Execution*).
          </p>
          <div className="bento-chips-row">
            <span className="chip-item">Domain: Utilitas Energi</span>
            <span className="chip-item">Goal: Listrik Menyala</span>
            <span className="chip-item">Metode: BCA VA</span>
          </div>
        </div>

        {/* Card 2: 2 Gaya Interaksi */}
        <div className="bento-card">
          <div className="bento-card-top">
            <span className="bento-label">GAYA INTERAKSI</span>
            <Layers size={18} className="text-teal" />
          </div>
          <div className="interaction-style-pair">
            <div className="style-box">
              <strong className="style-title">Menu Selection</strong>
              <p className="style-desc">Pilihan grid nominal Rp500k & menu esensial di Beranda.</p>
            </div>
            <div className="style-box">
              <strong className="style-title">Form Fill-in</strong>
              <p className="style-desc">Input ID Pelanggan dan form NIK administratif.</p>
            </div>
          </div>
        </div>

        {/* Card 3: Ergonomi & Multitasking */}
        <div className="bento-card">
          <div className="bento-card-top">
            <span className="bento-label">ASPEK ERGONOMI & SITUASI</span>
            <Smartphone size={18} className="text-teal" />
          </div>
          <ul className="bento-bullet-list">
            <li>
              <b>Thumb-Zone Fitts's Law:</b> Tombol aksi checkout berada di jangkauan jempol bawah, namun tombol "Lewati" terlempar ke sudut kanan atas.
            </li>
            <li>
              <b>Multitasking Risk:</b> Wajib keluar aplikasi menuju mobile banking; sistem kehilangan status transaksi saat kembali.
            </li>
          </ul>
        </div>
      </div>

      {/* User Journey Flow Pipeline */}
      <div className="flow-pipeline-container">
        <div className="flow-pipeline-header">
          <span className="flow-title">Alur Interaksi Transaksi Pengguna (Task Breakdown):</span>
          <span className="flow-legend">Tahap 1–6 Skenario</span>
        </div>
        <div className="flow-pipeline-track">
          {steps.map((s, i) => (
            <div key={i} className="flow-pipeline-step">
              <div className="step-number-bubble">{s.num}</div>
              <div className="step-info">
                <span className="step-label">{s.title}</span>
                <span className="step-friction">{s.note}</span>
              </div>
              {i < steps.length - 1 && <div className="step-connector-arrow">➔</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
