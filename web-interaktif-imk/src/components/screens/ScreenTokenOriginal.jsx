import React, { useState } from 'react';
import { ArrowLeft, Info, X } from 'lucide-react';

export default function ScreenTokenOriginal({ activeBadgeId, onBadgeClick }) {
  const [selectedNominal, setSelectedNominal] = useState('Rp500.000');

  const nominalList = [
    'Rp5.000', 'Rp10.000',
    'Rp15.000', 'Rp20.000',
    'Rp25.000', 'Rp50.000',
    'Rp100.000', 'Rp150.000',
    'Rp200.000', 'Rp500.000'
  ];

  return (
    <div className="pln-app-screen token-screen">
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
            <div className="info-link">
              <Info size={13} />
              <span>Informasi</span>
            </div>
          </div>

          <div className="id-input-wrapper">
            <div className="id-input-field">
              <span>520511772413</span>
              <X size={15} className="clear-icon" />
            </div>
            <button className="btn-periksa">Periksa</button>
          </div>
        </div>

        {/* PROBLEM EVAL 2: Ambiguous Kuota Pembelian Card */}
        <div className={`kuota-card-original ${activeBadgeId === '1' ? 'highlight-target' : ''}`}>
          <div 
            className="annotation-pin pin-red"
            style={{ top: '-10px', right: '-8px' }}
            onClick={() => onBadgeClick('1')}
            title="Klik untuk melihat analisis anotasi #1"
          >
            1
            <span className="pin-pulse"></span>
          </div>

          <div className="kuota-header-row">
            <span className="kuota-title">Kuota Pembelian Listrik</span>
            <div className="info-link-teal">
              <Info size={13} />
              <span>Informasi</span>
            </div>
          </div>
          
          <p className="kuota-sub">Total pembelian listrik bulanan dalam ID Pelanggan</p>

          <div className="kuota-progress-track">
            <div className="kuota-progress-fill" style={{ width: '2%' }}></div>
          </div>

          <div className="kuota-footer-row">
            <span className="kuota-lbl">Total pembelian kWh listrik bulanan</span>
            <span className="kuota-value-bold">0 / 1.584 kWh</span>
          </div>
        </div>

        {/* Grid of Nominal Buttons */}
        <div className="nominal-grid-container">
          {nominalList.map((nominal) => (
            <button
              key={nominal}
              className={`nominal-btn ${selectedNominal === nominal ? 'selected' : ''}`}
              onClick={() => setSelectedNominal(nominal)}
            >
              {nominal}
              {nominal === 'Rp500.000' && (
                <span className="scenario-tag">Skenario Tugas</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Fixed Action */}
      <div className="token-bottom-bar">
        <button className="btn-selanjutnya">
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
