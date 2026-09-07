import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  ArrowRight,
  Zap,
  Check,
  X
} from 'lucide-react';
import PhoneMockup from '../PhoneMockup';
import ScreenBerandaOriginal from '../screens/ScreenBerandaOriginal';
import ScreenBerandaFixed from '../screens/ScreenBerandaFixed';
import ScreenDataPribadiOriginal from '../screens/ScreenDataPribadiOriginal';
import ScreenDataPribadiFixed from '../screens/ScreenDataPribadiFixed';
import ScreenStatusOriginal from '../screens/ScreenStatusOriginal';
import ScreenStatusFixed from '../screens/ScreenStatusFixed';
import ScreenTokenOriginal from '../screens/ScreenTokenOriginal';
import ScreenTokenFixed from '../screens/ScreenTokenFixed';

export default function PageRancangUlangCases({ onGoToAnalysis }) {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [activeBadgeId, setActiveBadgeId] = useState(null);

  const presentationCases = [
    {
      id: 'exec1',
      num: '01',
      title: 'Beban Kognitif Beranda',
      stage: 'GULF OF EXECUTION',
      theory: "Hick's Law",
      issue: 'Menu token listrik tenggelam oleh banner promosi 25% dan layanan sekunder sejajar.',
      fix: 'Fokus 4 menu utama di atas fold; geser layanan internet & EV ke blok terpisah di bawah.',
      impact: 'Akses instan ke transaksi darurat tanpa perlu mencari visual atau scroll layar.',
      tagOriginal: 'Layout Clutter',
      tagFixed: "Prioritas Hick's Law",
      time: '10:41',
      battery: '6'
    },
    {
      id: 'exec2',
      num: '02',
      title: "Tombol 'Lewati' Tersembunyi",
      stage: 'GULF OF EXECUTION',
      theory: 'Thumb Zone & Progressive Disclosure',
      issue: "Tombol 'Lewati' kecil di pojok kanan atas; form NIK mengunci proses bayar token.",
      fix: "Tombol aksi ganda di thumb-zone bawah: 'Simpan Data' & 'Lewati Sementara'.",
      impact: 'Kebutuhan mendesak token listrik tidak terblokir oleh birokrasi form profil.',
      tagOriginal: 'Bypass Tersembunyi',
      tagFixed: 'Thumb-Zone Action',
      time: '10:47',
      battery: '12'
    },
    {
      id: 'eval1',
      num: '03',
      title: 'Status Hilang (Blank Spot)',
      stage: 'GULF OF EVALUATION',
      theory: 'Visibility of System Status',
      issue: 'Saat kembali dari m-Banking, Beranda kosong tanpa ada indikator tagihan menunggu bayar.',
      fix: "Persistent Status Banner di atas Beranda lengkap dengan timer hitung mundur & salin VA.",
      impact: 'Menghilangkan kepanikan pengguna yang mengira pesanan Rp500k gagal atau hilang.',
      tagOriginal: 'Blank Spot Status',
      tagFixed: 'Persistent Status Card',
      time: '10:45',
      battery: '8'
    },
    {
      id: 'eval2',
      num: '04',
      title: 'Format Kuota kWh Ambigu',
      stage: 'GULF OF EVALUATION',
      theory: 'Match Real World & Affordance',
      issue: "Rasio angka mentah '0 / 1.584 kWh' membingungkan tanpa keterangan satuan jelas.",
      fix: "Indikator visual kWh terisi penuh hijau dengan label tegas: 'Token Baru: +1.584,2 kWh'.",
      impact: 'Pengguna langsung memvalidasi hasil pembelian dalam 1 detik tanpa perlu klik pop-up.',
      tagOriginal: 'Kuota Ambigu',
      tagFixed: 'Status Visual Jelas',
      time: '10:49',
      battery: '11'
    }
  ];

  const currentCase = presentationCases[selectedCaseIdx];

  // Keyboard navigation between cases
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCaseIdx]);

  const goToNext = () => {
    if (selectedCaseIdx < presentationCases.length - 1) {
      setSelectedCaseIdx(prev => prev + 1);
      setActiveBadgeId(null);
    }
  };

  const goToPrev = () => {
    if (selectedCaseIdx > 0) {
      setSelectedCaseIdx(prev => prev - 1);
      setActiveBadgeId(null);
    }
  };

  const handleBadgeClick = (id) => {
    setActiveBadgeId(prev => (prev === id ? null : id));
  };

  const renderScreen = (screenId, isFixed) => {
    switch (screenId) {
      case 'exec1':
        return isFixed ? (
          <ScreenBerandaFixed activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        ) : (
          <ScreenBerandaOriginal activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        );
      case 'exec2':
        return isFixed ? (
          <ScreenDataPribadiFixed activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        ) : (
          <ScreenDataPribadiOriginal activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        );
      case 'eval1':
        return isFixed ? (
          <ScreenStatusFixed activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        ) : (
          <ScreenStatusOriginal activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        );
      case 'eval2':
        return isFixed ? (
          <ScreenTokenFixed activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        ) : (
          <ScreenTokenOriginal activeBadgeId={activeBadgeId} onBadgeClick={handleBadgeClick} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="cases-stage-free">
      {/* 1. Minimal Top Bar (No Heavy Box) */}
      <div className="free-nav-bar">
        <button className="free-back-btn" onClick={onGoToAnalysis}>
          <ArrowLeft size={16} />
          <span>Ringkasan Teori</span>
        </button>

        <div className="free-case-switcher">
          {presentationCases.map((item, idx) => (
            <button
              key={item.id}
              className={`free-case-tab ${selectedCaseIdx === idx ? 'active' : ''}`}
              onClick={() => {
                setSelectedCaseIdx(idx);
                setActiveBadgeId(null);
              }}
            >
              <span className="tab-num">0{idx + 1}</span>
              <span className="tab-name">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Open Canvas (Fluid Split: Left Editorial Narrative + Right Floating Mockups) */}
      <div className="free-showcase-canvas">
        {/* Left Column: Airy, Unboxed Editorial Storytelling */}
        <div className="free-editorial-column">
          <div className="free-case-headline">
            <div className="free-meta-line">
              <span className="free-stage-label">{currentCase.stage}</span>
              <span className="free-meta-dot">•</span>
              <span className="free-theory-label">{currentCase.theory}</span>
            </div>
            <h1 className="free-display-title">
              <span className="title-number">{currentCase.num}.</span> {currentCase.title}
            </h1>
          </div>

          {/* 3 Open Narrative Points (No Nested Colored Boxes!) */}
          <div className="free-narrative-flow">
            <div className="free-narrative-item issue">
              <div className="narrative-tag">
                <span className="tag-dot red"></span>
                <span>MASALAH SAAT INI</span>
              </div>
              <p className="narrative-text">{currentCase.issue}</p>
            </div>

            <div className="free-narrative-item fix">
              <div className="narrative-tag">
                <span className="tag-dot green"></span>
                <span>USULAN FIKSASI</span>
              </div>
              <p className="narrative-text">{currentCase.fix}</p>
            </div>

            <div className="free-narrative-item result">
              <div className="narrative-tag">
                <span className="tag-dot teal"></span>
                <span>DAMPAK PENGGUNA</span>
              </div>
              <p className="narrative-text">{currentCase.impact}</p>
            </div>
          </div>

          {/* Minimal Floating Presentation Controls */}
          <div className="free-controls-bar">
            <div className="free-step-counter">
              Slide <b>{selectedCaseIdx + 1}</b> / {presentationCases.length}
            </div>

            <div className="free-btn-group">
              <button 
                className="free-nav-arrow"
                onClick={goToPrev}
                disabled={selectedCaseIdx === 0}
                title="Slide Sebelumnya (←)"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                className="free-nav-arrow primary"
                onClick={goToNext}
                disabled={selectedCaseIdx === presentationCases.length - 1}
                title="Slide Berikutnya (→)"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Floating Phone Mockups in Space */}
        <div className="free-mockups-stage">
          {/* Phone 1: Desain Asli */}
          <div className="free-phone-wrapper">
            <div className="free-phone-label asli">
              <span className="label-status">DESAIN ASLI</span>
              <span className="label-sub">{currentCase.tagOriginal}</span>
            </div>
            <div className="free-phone-shadow">
              <PhoneMockup 
                time={currentCase.time} 
                battery={currentCase.battery}
              >
                {renderScreen(currentCase.id, false)}
              </PhoneMockup>
            </div>
          </div>

          {/* Phone 2: Usulan Fiksasi */}
          <div className="free-phone-wrapper">
            <div className="free-phone-label fiksasi">
              <span className="label-status">USULAN FIKSASI</span>
              <span className="label-sub">{currentCase.tagFixed}</span>
            </div>
            <div className="free-phone-shadow">
              <PhoneMockup 
                time={currentCase.time} 
                battery={currentCase.battery}
              >
                {renderScreen(currentCase.id, true)}
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
