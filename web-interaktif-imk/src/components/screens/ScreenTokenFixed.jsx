import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Info, X, ShieldCheck } from 'lucide-react';

export default function ScreenTokenFixed({ activeBadgeId, onBadgeClick }) {
  const [selectedNominal, setSelectedNominal] = useState('Rp500.000');

  const nominalOptions = [
    { value: 'Rp5.000', kwh: '3.3 kWh' },
    { value: 'Rp10.000', kwh: '6.6 kWh' },
    { value: 'Rp15.000', kwh: '9.8 kWh' },
    { value: 'Rp20.000', kwh: '13.1 kWh' },
    { value: 'Rp25.000', kwh: '16.4 kWh' },
    { value: 'Rp50.000', kwh: '32.8 kWh' },
    { value: 'Rp100.000', kwh: '65.7 kWh' },
    { value: 'Rp150.000', kwh: '98.5 kWh' },
    { value: 'Rp200.000', kwh: '131.4 kWh' },
    { value: 'Rp500.000', kwh: '328.5 kWh' }
  ];

  return (
    <div className="pln-app-screen token-screen fixed-screen">
      {/* Top Header */}
      <div className="screen-nav-header">
        <button className="nav-back-btn">
          <ArrowLeft size={20} />
        </button>
        <span className="nav-title">Token & Pembayaran</span>
        <div style={{ width: 24 }}></div>
      </div>

      {/* Tabs */}
      <div className="token-nav-tabs">
        <div className="tab-item active">
          <span>Token Listrik</span>
          <div className="tab-active-indicator"></div>
        </div>
        <div className="tab-item">
          <span>Tagihan Listrik</span>
        </div>
        <div className="tab-item">
          <span>Non Taglis</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="token-scroll-body">
        {/* ID Pelanggan Field */}
        <div className="id-pelanggan-section">
          <div className="label-with-info">
            <label className="field-label">
              ID Pelanggan <span className="text-danger">*</span>
            </label>
            <div className="customer-verified-tag">
              <ShieldCheck size={12} />
              <span>Daya R1 / 1300 VA</span>
            </div>
          </div>

          <div className="id-input-wrapper">
            <div className="id-input-field">
              <span>520511772413</span>
              <X size={15} className="clear-icon" />
            </div>
            <button className="btn-periksa active">Terverifikasi</button>
          </div>
        </div>

        {/* FIX 2: Clear Human Language Kuota Card */}
        <div className={`kuota-card-fixed ${activeBadgeId === '2' ? 'highlight-target' : ''}`}>
          <div 
            className="annotation-pin pin-green"
            style={{ top: '-10px', right: '-8px' }}
            onClick={() => onBadgeClick('2')}
            title="Klik untuk melihat solusi anotasi #2"
          >
            2
            <span className="pin-pulse"></span>
          </div>

          <div className="kuota-fixed-header">
            <div className="kuota-title-with-pill">
              <span className="kuota-fixed-title">Batas Maksimal Beli Bulan Ini</span>
              <span className="kuota-pill-ok">Normal</span>
            </div>
            <p className="kuota-fixed-sub">Sesuai regulasi batas subsidi daya meteran Anda</p>
          </div>

          {/* Visual Progress Bar */}
          <div className="kuota-fixed-bar-track">
            <div className="kuota-fixed-bar-used" style={{ width: '0%' }}></div>
            <div className="kuota-fixed-bar-remain" style={{ width: '100%' }}></div>
          </div>

          {/* 2 Clear Metric Badges */}
          <div className="kuota-metric-grid">
            <div className="metric-box box-used">
              <span className="metric-title">Terpakai Bulan Ini</span>
              <span className="metric-value">0 kWh</span>
            </div>
            <div className="metric-box box-remain">
              <span className="metric-title">Sisa Kuota Tersedia</span>
              <span className="metric-value text-green">1.584 kWh</span>
            </div>
          </div>

          {/* Real-time Contextual Validation */}
          <div className="kuota-smart-helper">
            <CheckCircle2 size={14} className="text-green" />
            <span>
              Nominal <b>{selectedNominal}</b> (estimasi <b>328.5 kWh</b>) aman & tidak melebihi kuota.
            </span>
          </div>
        </div>

        {/* Grid of Nominal Buttons */}
        <div className="nominal-grid-container">
          {nominalOptions.map((item) => (
            <button
              key={item.value}
              className={`nominal-btn-enhanced ${selectedNominal === item.value ? 'selected' : ''}`}
              onClick={() => setSelectedNominal(item.value)}
            >
              <div className="nom-main-val">{item.value}</div>
              <div className="nom-kwh-val">≈ {item.kwh}</div>
              {item.value === 'Rp500.000' && (
                <span className="scenario-tag">Skenario Tugas</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Fixed Action */}
      <div className="token-bottom-bar">
        <button className="btn-selanjutnya">
          Lanjutkan Pembayaran ({selectedNominal})
        </button>
      </div>
    </div>
  );
}
