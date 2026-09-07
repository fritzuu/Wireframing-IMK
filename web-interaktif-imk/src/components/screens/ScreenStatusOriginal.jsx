import React from 'react';
import { 
  Home, 
  Receipt, 
  Gift, 
  User, 
  Zap, 
  Car, 
  Flag, 
  QrCode,
  AlertCircle
} from 'lucide-react';

export default function ScreenStatusOriginal({ activeBadgeId, onBadgeClick }) {
  return (
    <div className="pln-app-screen beranda-screen">
      {/* Top Header */}
      <div className="pln-header-bg">
        <div className="pln-header-search-bar">
          <div className="pln-brand-title">PLN Mobile</div>
          <div className="pln-notification-bell">
            <span className="bell-badge"></span>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="pln-main-card compact">
        <div className="listrik-rumah-header">
          <div className="house-icon-wrapper">
            <div className="house-roof"></div>
            <div className="house-body">
              <Zap size={14} className="house-zap" />
            </div>
          </div>
          <h3 className="listrik-title">Listrik Rumah</h3>
          <p className="listrik-subtitle">Kelola semua kebutuhan listrik dalam satu tempat</p>
        </div>
      </div>

      {/* PROBLEM EVAL 1: The Blank Spot Area */}
      <div className={`blank-spot-container ${activeBadgeId === '1' ? 'highlight-target' : ''}`}>
        <div 
          className="annotation-pin pin-red"
          style={{ top: '15px', right: '15px' }}
          onClick={() => onBadgeClick('1')}
          title="Klik untuk melihat analisis anotasi #1"
        >
          1
          <span className="pin-pulse"></span>
        </div>

        <div className="blank-spot-dashed-box">
          <AlertCircle size={24} className="text-muted-warning" />
          <span className="blank-spot-title">Ketiadaan Status (Blank Spot)</span>
          <p className="blank-spot-desc">
            Pengguna baru kembali dari m-banking, namun layar Beranda tidak menampilkan notifikasi ada transaksi token Rp500.000 yang sedang menunggu pembayaran.
          </p>
        </div>
      </div>

      {/* Standard Icons Below */}
      <div className="pln-service-grid-card">
        <div className="service-item">
          <div className="service-icon cyan-bg">
            <Receipt size={22} className="text-cyan" />
            <span className="rp-badge">Rp</span>
          </div>
          <span className="service-label">Token & Tagihan</span>
        </div>

        <div className="service-item">
          <div className="service-icon yellow-bg">
            <Zap size={22} className="text-yellow" />
          </div>
          <span className="service-label">Listrik Saya</span>
        </div>

        <div className="service-item">
          <div className="service-icon red-bg">
            <Flag size={22} className="text-red" />
          </div>
          <span className="service-label">Pengaduan</span>
        </div>

        <div className="service-item">
          <div className="service-icon teal-bg">
            <Car size={22} className="text-teal" />
          </div>
          <span className="service-label">EV Services</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pln-bottom-navbar">
        <div className="nav-tab active">
          <Home size={18} />
          <span>Beranda</span>
        </div>
        <div className="nav-tab">
          <Receipt size={18} />
          <span>Transaksi</span>
        </div>
        <div className="nav-tab-center">
          <div className="charge-ev-btn">
            <QrCode size={20} />
          </div>
          <span>Charge EV</span>
        </div>
        <div className="nav-tab">
          <Gift size={18} />
          <span>Rewards</span>
        </div>
        <div className="nav-tab">
          <User size={18} />
          <span>Akun</span>
        </div>
      </div>
    </div>
  );
}
