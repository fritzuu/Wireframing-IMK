import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ScreenDataPribadiOriginal({ activeBadgeId, onBadgeClick }) {
  return (
    <div className="pln-app-screen form-screen">
      {/* Top Header */}
      <div className="screen-nav-header">
        <button className="nav-back-btn">
          <ArrowLeft size={20} />
        </button>
        <span className="nav-title">Pelindungan Data Pribadi</span>
        
        {/* PROBLEM: Tiny Lewati Button at top right */}
        <div 
          className={`nav-action-wrapper ${activeBadgeId === '1' ? 'highlight-target' : ''}`}
          style={{ position: 'relative' }}
        >
          <span className="nav-action-link">Lewati</span>
          <div 
            className="annotation-pin pin-red"
            style={{ top: '-10px', right: '-12px' }}
            onClick={() => onBadgeClick('1')}
            title="Klik untuk melihat analisis anotasi #1"
          >
            1
            <span className="pin-pulse"></span>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="form-scrollable-body">
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
            rows={4}
            readOnly
          ></textarea>
        </div>
      </div>

      {/* Fixed Bottom Action: Disabled Lanjutkan */}
      <div className="form-bottom-bar">
        <button className="btn-pln-disabled" disabled>
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
