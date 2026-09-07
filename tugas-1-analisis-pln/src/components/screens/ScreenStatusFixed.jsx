import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Receipt, 
  Gift, 
  User, 
  Zap, 
  Car, 
  Flag, 
  QrCode,
  Clock,
  Copy,
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ScreenStatusFixed({ activeBadgeId, onBadgeClick }) {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(14349); // ~ 3h 59m 09s in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pln-app-screen beranda-screen fixed-screen">
      {/* Top Header */}
      <div className="pln-header-bg">
        <div className="pln-header-search-bar">
          <div className="pln-brand-title">PLN Mobile</div>
          <div className="pln-notification-bell">
            <span className="bell-badge"></span>
          </div>
        </div>
      </div>

      {/* FIX 2: Persistent Status Card */}
      <div className={`persistent-status-card ${activeBadgeId === '2' ? 'highlight-target' : ''}`}>
        <div 
          className="annotation-pin pin-green"
          style={{ top: '-10px', right: '-8px' }}
          onClick={() => onBadgeClick('2')}
          title="Klik untuk melihat solusi anotasi #2"
        >
          2
          <span className="pin-pulse"></span>
        </div>

        {/* Card Header with Countdown */}
        <div className="pending-status-header">
          <div className="status-pill-badge">
            <span className="blinking-dot"></span>
            <span>Menunggu Pembayaran</span>
          </div>
          <div className="countdown-timer">
            <Clock size={13} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Order Details */}
        <div className="pending-order-details">
          <div className="order-nominal-row">
            <div>
              <span className="order-type-label">Token Listrik Prabayar</span>
              <h3 className="order-amount">Rp500.000</h3>
            </div>
            <span className="order-badge-bca">BCA VA</span>
          </div>

          <div className="va-copy-box">
            <div className="va-info">
              <span className="va-label">No. Virtual Account</span>
              <span className="va-number">82410 520511772413</span>
            </div>
            <button className="btn-copy-mini" onClick={handleCopy}>
              {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
              <span>{copied ? 'Tersalin' : 'Salin'}</span>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button className="btn-continue-payment">
          <span>Lanjutkan Bayar Sekarang</span>
          <ArrowRight size={15} />
        </button>
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

      {/* Services Grid */}
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
