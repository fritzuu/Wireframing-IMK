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
  X,
  Sparkles,
  QrCode,
  Coins
} from 'lucide-react';

export default function ScreenBerandaOriginal({ activeBadgeId, onBadgeClick }) {
  return (
    <div className="pln-app-screen beranda-screen">
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

      {/* Blue Banner: Yuk Saling Lebih Kenal (PROBLEM EXEC 1) */}
      <div className={`pln-intro-banner ${activeBadgeId === '1' ? 'highlight-target' : ''}`}>
        <div 
          className="annotation-pin pin-red"
          style={{ top: '-10px', right: '-8px' }}
          onClick={() => onBadgeClick('1')}
          title="Klik untuk melihat analisis anotasi #1"
        >
          1
          <span className="pin-pulse"></span>
        </div>
        
        <div className="banner-top-row">
          <div className="banner-title">
            <User size={14} className="banner-icon-svg" />
            <span>Yuk saling lebih kenal</span>
          </div>
          <X size={14} className="banner-close" />
        </div>

        <div className="banner-progress-bar">
          <div className="banner-progress-fill" style={{ width: '25%' }}>
            <div className="progress-knob"></div>
          </div>
        </div>

        <div className="banner-bottom-row">
          <p className="banner-desc">Yuk mulai verifikasi email agar tidak ketinggalan informasi transaksimu!</p>
          <span className="banner-pct">25%</span>
        </div>
      </div>

      {/* Primary 4 Icon Grid (PROBLEM EXEC 2) */}
      <div className={`pln-service-grid-card ${activeBadgeId === '2' ? 'highlight-target' : ''}`}>
        <div 
          className="annotation-pin pin-red"
          style={{ top: '-8px', right: '-8px' }}
          onClick={() => onBadgeClick('2')}
          title="Klik untuk melihat analisis anotasi #2"
        >
          2
          <span className="pin-pulse"></span>
        </div>

        <div className="service-item">
          <div className="service-icon yellow-bg">
            <Zap size={22} className="text-yellow" />
          </div>
          <span className="service-label">Listrik Saya</span>
        </div>

        <div className="service-item">
          <div className="service-icon teal-bg">
            <Car size={22} className="text-teal" />
          </div>
          <span className="service-label">EV Digital Services</span>
        </div>

        <div className="service-item">
          <div className="service-icon cyan-bg">
            <Receipt size={22} className="text-cyan" />
            <span className="rp-badge">Rp</span>
          </div>
          <span className="service-label">Token & Pembayaran</span>
        </div>

        <div className="service-item">
          <div className="service-icon red-bg">
            <Flag size={22} className="text-red" />
          </div>
          <span className="service-label">Pengaduan</span>
        </div>
      </div>

      {/* Secondary Services Box */}
      <div className="pln-secondary-card">
        <div className="secondary-row">
          <div className="sub-service-item">
            <div className="sub-icon"><Calculator size={18} /></div>
            <span>Pasang Baru</span>
          </div>
          <div className="sub-service-item">
            <div className="sub-icon"><Wifi size={18} /></div>
            <span>Internet</span>
          </div>
          <div className="sub-service-item">
            <div className="sub-icon"><Smartphone size={18} /></div>
            <span>Catat Meter</span>
          </div>
          <div className="sub-service-item">
            <div className="sub-icon"><Receipt size={18} /></div>
            <span>Pulsa & Tagihan</span>
          </div>
          <div className="sub-arrow">
            <ChevronRight size={18} />
          </div>
        </div>

        <div className="secondary-divider"></div>

        <div className="see-all-row">
          <div className="grid-squares-icon">
            <span></span><span></span><span></span><span></span>
          </div>
          <span>Lihat semua</span>
        </div>
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

      {/* Promo Section Preview */}
      <div className="pln-section-title-row">
        <h4>Promosi & Informasi</h4>
        <span className="link-see-all">Lihat Semua</span>
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
