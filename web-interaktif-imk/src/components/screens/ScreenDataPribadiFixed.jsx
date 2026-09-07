import React from 'react';
import { ArrowLeft, Clock, ShieldCheck } from 'lucide-react';

export default function ScreenDataPribadiFixed({ activeBadgeId, onBadgeClick }) {
  return (
    <div className="pln-app-screen form-screen fixed-screen">
      {/* Top Header */}
      <div className="screen-nav-header">
        <button className="nav-back-btn">
          <ArrowLeft size={20} />
        </button>
        <span className="nav-title">Pelindungan Data Pribadi</span>
        <div style={{ width: 24 }}></div>
      </div>

      {/* Form Body */}
      <div className="form-scrollable-body">
        <div className="form-step-badge">
          <ShieldCheck size={14} className="text-teal" />
          <span>Langkah 1 dari 2 (Opsional saat darurat)</span>
        </div>

        <h2 className="form-main-heading">Data Konsumen</h2>
        <p className="form-info-text">
          Masukan data diri Anda untuk melengkapi proses pendaftaran ID Pelanggan di PLN Mobile.{' '}
          <span className="link-highlight">Pelajari Selengkapnya</span>
        </p>

        {/* Input Nama Pengguna */}
        <div className="form-group">
          <label className="form-label">
            Nama Pengguna <span className="text-danger">*</span>
          </label>
          <div className="input-box-wrapper filled">
            <input 
              type="text" 
              className="pln-input" 
              value="revan alifian zhafran" 
              readOnly 
            />
          </div>
        </div>

        {/* Input NIK with Periksa Button */}
        <div className="form-group">
          <label className="form-label">
            NIK <span className="text-danger">*</span>
          </label>
          <div className="nik-input-row">
            <input 
              type="text" 
              className="pln-input nik-field" 
              placeholder="Masukkan NIK Anda" 
              readOnly 
            />
            <button className="btn-periksa">Periksa</button>
          </div>
          <p className="nik-helper-text">Pastikan anda klik "Periksa" pada NIK Anda</p>
        </div>

        {/* Textarea Alamat */}
        <div className="form-group">
          <label className="form-label">Alamat</label>
          <textarea 
            className="pln-textarea" 
            placeholder=""
            rows={3}
            readOnly
          ></textarea>
        </div>

        {/* Informative Note regarding urgent bypass */}
        <div className="urgent-context-note">
          <Clock size={15} className="note-icon" />
          <span>Listrik padam? Lewati tahap ini untuk langsung melanjutkan pembayaran token Rp500.000.</span>
        </div>
      </div>

      {/* FIX 2: Thumb Zone Dual Buttons */}
      <div className={`form-bottom-bar dual-action ${activeBadgeId === '2' ? 'highlight-target' : ''}`}>
        <div 
          className="annotation-pin pin-green"
          style={{ top: '-12px', right: '12px' }}
          onClick={() => onBadgeClick('2')}
          title="Klik untuk melihat solusi anotasi #2"
        >
          2
          <span className="pin-pulse"></span>
        </div>

        <button className="btn-pln-primary">
          Simpan Data Pribadi
        </button>
        <button className="btn-pln-outline-wide">
          Lewati Sementara & Bayar Token →
        </button>
      </div>
    </div>
  );
}
