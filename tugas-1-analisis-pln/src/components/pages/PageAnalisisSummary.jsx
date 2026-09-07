import React, { useState } from 'react';
import { 
  Zap, 
  Target, 
  Layers, 
  Activity, 
  Cpu, 
  Smartphone, 
  AlertTriangle, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export default function PageAnalisisSummary({ onGoToCases }) {
  const [activeNormanStep, setActiveNormanStep] = useState(3);
  const [donateToggled, setDonateToggled] = useState(true);

  const normanSteps = [
    { step: 1, name: 'Goal', phase: 'GOAL', user: 'Listrik padam, harus beli token segera.', system: 'Sistem siap menerima input transaksi.' },
    { step: 2, name: 'Plan', phase: 'EXECUTION', user: 'Buka PLN Mobile & cari menu token.', system: 'Aplikasi memuat beranda & promo.' },
    { step: 3, name: 'Specify', phase: 'EXECUTION', user: 'Cari & pilih ikon Token & Tagihan.', system: 'Menampilkan pilihan menu layanan.' },
    { step: 4, name: 'Execute', phase: 'EXECUTION', user: 'Input ID Pelanggan & pilih Rp500k.', system: 'Menerbitkan nomor VA BCA.' },
    { step: 5, name: 'Perceive', phase: 'EVALUATION', user: 'Lihat status pembayaran di layar.', system: 'Menampilkan konfirmasi transaksi.' },
    { step: 6, name: 'Interpret', phase: 'EVALUATION', user: 'Membaca kode 20 digit token listrik.', system: 'Menampilkan token & kuota kWh.' },
    { step: 7, name: 'Evaluate', phase: 'EVALUATION', user: 'Input token ke meteran; listrik nyala.', system: 'Saldo kWh meteran bertambah.' },
  ];

  const currentStep = normanSteps.find(s => s.step === activeNormanStep) || normanSteps[2];

  return (
    <div className="summary-free-canvas">
      {/* 1. Open Presentation Header (No Heavy Box Border) */}
      <div className="free-hero-header">
        <div className="hero-text-block">
          <span className="free-tagline">TUGAS 1 IMK • RINGKASAN EKSEKUTIF</span>
          <h1 className="free-hero-title">Analisis Interaksi Aplikasi PLN Mobile</h1>
          <p className="free-hero-sub">
            Dekomposisi sistem, siklus Don Norman, dan temuan 4 jurang interaksi (*Gulf*) pada skenario darurat.
          </p>
        </div>

        {/* Floating Minimalist Stat Ribbon */}
        <div className="free-stat-ribbon">
          <div className="free-stat-unit">
            <span className="stat-label">SKENARIO</span>
            <strong className="stat-value">Beli Token Rp 500.000</strong>
          </div>
          <div className="stat-divider"></div>
          <div className="free-stat-unit">
            <span className="stat-label">KONDISI</span>
            <strong className="stat-value text-red">Listrik Padam (Darurat)</strong>
          </div>
          <div className="stat-divider"></div>
          <div className="free-stat-unit">
            <span className="stat-label">KANAL BAYAR</span>
            <strong className="stat-value text-teal">BCA Virtual Account</strong>
          </div>
        </div>
      </div>

      {/* 2. Dekomposisi Sistem: Fluid Horizontal Flow */}
      <section className="free-section">
        <div className="free-section-title">
          <span className="sec-num">01</span>
          <h3>Dekomposisi Sistem (DGTI & Ergonomi)</h3>
        </div>

        {/* 4 Open Columns with Hairline Separation */}
        <div className="free-dgti-strip">
          <div className="dgti-item">
            <span className="dgti-code">DOMAIN</span>
            <strong className="dgti-head">Listrik Prabayar</strong>
            <p className="dgti-desc">Utilitas kontinuitas energi rumah tangga.</p>
          </div>
          <div className="dgti-item highlight">
            <span className="dgti-code">GOAL</span>
            <strong className="dgti-head">Listrik Segera Nyala</strong>
            <p className="dgti-desc">Urgensi primer; zero-tolerance terhadap delay.</p>
          </div>
          <div className="dgti-item">
            <span className="dgti-code">TASK</span>
            <strong className="dgti-head">Transaksi Rp 500k</strong>
            <p className="dgti-desc">Input ID Pelanggan, pilih nominal, bayar via VA.</p>
          </div>
          <div className="dgti-item">
            <span className="dgti-code">INTENTION</span>
            <strong className="dgti-head">Salin VA Secepatnya</strong>
            <p className="dgti-desc">Selesaikan checkout tanpa friksi form atau distraksi.</p>
          </div>
        </div>

        {/* 2 Open Micro-Notes */}
        <div className="free-micro-notes">
          <div className="micro-note-item">
            <Layers size={15} className="text-teal" />
            <span><b>Gaya Interaksi:</b> Menu Selection (Pilih nominal) & Form Fill-in (Input ID).</span>
          </div>
          <div className="micro-note-item">
            <Smartphone size={15} className="text-teal" />
            <span><b>Ergonomi Mobile:</b> Thumb-Zone di bawah; risiko putus alur saat switch ke m-Banking.</span>
          </div>
        </div>
      </section>

      {/* 3. Siklus 7 Don Norman: Interactive Open Timeline */}
      <section className="free-section">
        <div className="free-section-title">
          <span className="sec-num">02</span>
          <h3>Siklus 7 Tahapan Don Norman</h3>
        </div>

        <div className="free-timeline-wrapper">
          {/* Horizontal Track */}
          <div className="free-timeline-track">
            {normanSteps.map((item) => (
              <button
                key={item.step}
                className={`timeline-step-btn ${item.step === activeNormanStep ? 'active' : ''}`}
                onClick={() => setActiveNormanStep(item.step)}
              >
                <span className="step-circle">{item.step}</span>
                <span className="step-title">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Active Step Open Inspector */}
          <div className="timeline-active-display">
            <div className="active-meta-tag">
              TAHAP 0{currentStep.step} / 07 • {currentStep.phase === 'GOAL' ? 'PENETAPAN TUJUAN' : currentStep.phase === 'EXECUTION' ? 'GULF OF EXECUTION (AKSI)' : 'GULF OF EVALUATION (STATUS)'}
            </div>
            <div className="active-columns">
              <div className="active-col">
                <span className="col-caption text-blue">Aksi Pengguna:</span>
                <strong className="col-val">{currentStep.user}</strong>
              </div>
              <div className="active-col">
                <span className="col-caption text-teal">Respon Sistem:</span>
                <strong className="col-val">{currentStep.system}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4 Jurang Interaksi (Gulf) & Dark Pattern */}
      <section className="free-section">
        <div className="free-section-title">
          <span className="sec-num">03</span>
          <h3>Identifikasi 4 Jurang Interaksi & Dark Pattern</h3>
        </div>

        <div className="free-split-layout">
          {/* Left: 4 Open Case Items */}
          <div className="free-cases-list">
            <div className="free-case-entry">
              <div className="entry-head">
                <span className="entry-id">KASUS 01</span>
                <span className="entry-theory">Hick's Law</span>
              </div>
              <h4 className="entry-title">Beban Kognitif Beranda</h4>
              <p className="entry-desc">Banner profil 25% merebut fokus; menu listrik tenggelam di bawah.</p>
            </div>

            <div className="free-case-entry">
              <div className="entry-head">
                <span className="entry-id">KASUS 02</span>
                <span className="entry-theory">Thumb Zone</span>
              </div>
              <h4 className="entry-title">Tombol 'Lewati' Tersembunyi</h4>
              <p className="entry-desc">Tombol bypass NIK ditaruh di pojok kanan atas di luar jangkauan satu tangan.</p>
            </div>

            <div className="free-case-entry">
              <div className="entry-head">
                <span className="entry-id">KASUS 03</span>
                <span className="entry-theory">Visibility of Status</span>
              </div>
              <h4 className="entry-title">Blank Spot Pasca M-Banking</h4>
              <p className="entry-desc">Beranda tidak memberi tanda ada tagihan Rp500k aktif saat user kembali dari bank.</p>
            </div>

            <div className="free-case-entry">
              <div className="entry-head">
                <span className="entry-id">KASUS 04</span>
                <span className="entry-theory">Real World Match</span>
              </div>
              <h4 className="entry-title">Format Kuota kWh Ambigu</h4>
              <p className="entry-desc">Format angka rasio '0 / 1.584 kWh' membingungkan tanpa keterangan jelas.</p>
            </div>
          </div>

          {/* Right: Floating Dark Pattern Simulator */}
          <div className="free-dp-simulator">
            <div className="dp-sim-top">
              <span className="dp-pill">DARK PATTERN</span>
              <h4 className="dp-headline">Misdirection: Donasi Pohon Electree</h4>
              <p className="dp-note">Donasi Rp1.000 diselipkan otomatis di atas tombol bayar saat darurat.</p>
            </div>

            <div className="dp-live-modal">
              <div className="modal-row">
                <span>Token Listrik + Biaya</span>
                <span>Rp 503.000</span>
              </div>

              <div className={`modal-toggle-card ${donateToggled ? 'checked' : ''}`}>
                <div className="chk-grp">
                  <input 
                    type="checkbox" 
                    id="free-chk-donate" 
                    checked={donateToggled} 
                    onChange={(e) => setDonateToggled(e.target.checked)} 
                  />
                  <label htmlFor="free-chk-donate">
                    <strong>Donasi Pohon Electree</strong>
                    <span>Peduli lingkungan (+Rp1.000)</span>
                  </label>
                </div>
                <span className="toggle-amount">{donateToggled ? '+Rp 1.000' : 'Rp 0'}</span>
              </div>

              <div className="modal-footer-row">
                <div>
                  <span className="total-lbl">Total Bayar:</span>
                  <strong className="total-num">Rp {donateToggled ? '504.000' : '503.000'}</strong>
                </div>
                <button className="modal-pay-btn">Bayar Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fluid Bottom Switcher to Cases */}
      <div className="free-bottom-cta">
        <div className="cta-statement">
          <strong>Solusi Fiksasi: Rancang Ulang 4 Kasus</strong>
          <span>Periksa mockup desain asli vs usulan fiksasi berdampingan.</span>
        </div>
        <button className="free-cta-btn" onClick={onGoToCases}>
          <span>Buka 4 Mockup Redesain</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
