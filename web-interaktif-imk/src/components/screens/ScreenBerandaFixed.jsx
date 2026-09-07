import React from 'react';
import { 
  Home, 
  Receipt, 
  Gift, 
  User, 
  Zap, 
  Car, 
  CreditCard, 
  Flag, 
  Plus, 
  Wifi, 
  Calculator, 
  Smartphone, 
  ChevronRight, 
  CheckCircle2,
  Sparkles,
  QrCode,
  Coins,
  ArrowRight
} from 'lucide-react';

export default function ScreenBerandaFixed({ activeBadgeId, onBadgeClick }) {
  return (
    <div className="pln-app-screen beranda-screen fixed-screen">
      {/* Top Header Background Curve */}
      <div className="pln-header-bg">
        <div className="pln-header-search-bar">
          <div className="pln-brand-title">PLN Mobile</div>
          <div className="pln-notification-bell">
            <span className="bell-badge"></span>
          </div>
        </div>
      </div>

      {/* Main Card: Listrik Rumah */}
      <div className="pln-main-card">
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

        <div className="listrik-action-row">
          <button className="btn-pln-outline">Pasang Baru</button>
          <button className="btn-pln-solid">+ ID Pelanggan</button>
        </div>
      </div>

      {/* Quick Action Bar: Saldo & Points */}
      <div className="pln-quick-bar">
        <div className="saldo-chip">
          <div className="wallet-mini-icon">
            <CreditCard size={11} className="text-white" />
          </div>
          <span className="saldo-text">Aktifkan Saldo PLN Mobile</span>
          <ChevronRight size={14} />
        </div>
        <div className="point-chip">
          <Coins size={14} className="gold-coin" />
          <span>Point <b>0</b></span>
        </div>
        <div className="voucher-mini-icon">
          <Gift size={16} />
        </div>
      </div>

      {/* FIX 1: Layanan Utama Eksklusif (Hick's Law - Focal Point Pertama) */}
      <div className={`pln-redesign-section-card ${activeBadgeId === '1-2' ? 'highlight-target' : ''}`}>
        <div 
          className="annotation-pin pin-green"
          style={{ top: '-10px', right: '-8px' }}
          onClick={() => onBadgeClick('1-2')}
          title="Klik untuk melihat solusi anotasi #1 & #2"
        >
          1
          <span className="pin-pulse"></span>
        </div>

        <div className="section-badge-header">
          <div className="section-title-group">
            <span className="section-dot-indicator"></span>
            <h4>Layanan Utama (Prioritas Kebutuhan)</h4>
          </div>
          <span className="quick-access-tag">Akses Cepat</span>
        </div>

        {/* 4 Focused Utility Services */}
        <div className="primary-utility-grid">
          <div className="utility-card featured-token">
            <div className="utility-icon cyan-bg pulse-glow">
              <Receipt size={22} className="text-cyan" />
              <span className="rp-badge">Rp</span>
            </div>
            <span className="utility-name"><b>Beli Token</b></span>
            <span className="utility-badge-hot">Sering Dipakai</span>
          </div>

          <div className="utility-card">
            <div className="utility-icon blue-bg">
              <Zap size={22} className="text-blue" />
            </div>
            <span className="utility-name">Tagihan Listrik</span>
          </div>

          <div className="utility-card">
            <div className="utility-icon red-bg">
              <Flag size={22} className="text-red" />
            </div>
            <span className="utility-name">Pengaduan</span>
          </div>

          <div className="utility-card">
            <div className="utility-icon teal-bg">
              <Calculator size={22} className="text-teal" />
            </div>
            <span className="utility-name">Pasang Baru</span>
          </div>
        </div>
      </div>

      {/* FIX 2: Layanan Tambahan Dipisahkan Rapi */}
      <div className="pln-redesign-section-card">
        <div className="section-badge-header">
          <div className="section-title-group">
            <span className="section-dot-gray"></span>
            <h4>Layanan Tambahan</h4>
          </div>
        </div>

        <div className="secondary-utility-grid">
          <div className="secondary-badge-item">
            <div className="sub-circle-icon iconnet-bg">
              <Wifi size={16} />
            </div>
            <div className="sub-info">
              <span className="sub-title">Internet Iconnet</span>
              <span className="sub-meta">WiFi Fiber Rumah</span>
            </div>
          </div>

          <div className="secondary-badge-item">
            <div className="sub-circle-icon ev-bg">
              <Car size={16} />
            </div>
            <div className="sub-info">
              <span className="sub-title">EV Digital</span>
              <span className="sub-meta">Ekosistem Mobil Listrik</span>
            </div>
          </div>
        </div>
      </div>

      {/* Minimized Non-Intrusive Banner (Demoted below primary actions) */}
      <div className="pln-compact-banner">
        <div className="compact-banner-left">
          <User size={13} className="text-muted" />
          <span className="compact-banner-text">Verifikasi email akun (25%)</span>
        </div>
        <button className="compact-banner-btn">Lengkapi</button>
      </div>

      {/* Floating Robot Mascot Helper */}
      <div className="pln-floating-mascot">
        <div className="mascot-bubble">Butuh bantuan?</div>
        <div className="mascot-avatar">
          <div className="robot-head">
            <div className="robot-eyes"></div>
          </div>
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
