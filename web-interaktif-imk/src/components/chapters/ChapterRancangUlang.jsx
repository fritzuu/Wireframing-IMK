import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  ArrowRight
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
import { gulfItems } from '../../data/analysisData';

export default function ChapterRancangUlang() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeBadgeId, setActiveBadgeId] = useState(null);

  const currentGulf = gulfItems[currentIdx];

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
  }, [currentIdx]);

  const goToNext = () => {
    if (currentIdx < gulfItems.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setActiveBadgeId(null);
    }
  };

  const goToPrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
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

  const getTimeForScreen = (screenId) => {
    switch (screenId) {
      case 'exec1': return '10:41';
      case 'exec2': return '10:47';
      case 'eval1': return '10:45';
      case 'eval2': return '10:49';
      default: return '10:41';
    }
  };

  const getBatteryForScreen = (screenId) => {
    switch (screenId) {
      case 'exec1': return '6';
      case 'exec2': return '12';
      case 'eval1': return '8';
      case 'eval2': return '11';
      default: return '10';
    }
  };

  return (
    <div className="redesign-deck-container">
      {/* Sub-header Navigation for the 4 Cases */}
      <div className="cases-tab-nav">
        <div className="cases-tab-list">
          {gulfItems.map((item, idx) => (
            <button
              key={item.id}
              className={`case-tab-item ${currentIdx === idx ? 'active' : ''}`}
              onClick={() => {
                setCurrentIdx(idx);
                setActiveBadgeId(null);
              }}
            >
              <span className="case-tab-num">Kasus {idx + 1}</span>
              <span className="case-tab-name">{item.title}</span>
            </button>
          ))}
        </div>
        <div className="case-counter-badge">
          Kasus <b>{currentIdx + 1}</b> dari {gulfItems.length}
        </div>
      </div>

      {/* Main Split Layout: Left Deck Analysis vs Right Mockup Pair */}
      <div className="redesign-main-split">
        {/* Left Column: Clear Presentation Points */}
        <section className="redesign-left-card">
          <div className="slide-deck-header">
            <div className="slide-type-tag">
              {currentGulf.type === 'EXECUTION' ? 'TAHAP EKSEKUSI (NORMAN)' : 'TAHAP EVALUASI (NORMAN)'}
            </div>
            <h2 className="slide-title">
              {currentGulf.index}. {currentGulf.title}
            </h2>
            <p className="slide-tagline">{currentGulf.tagline}</p>
          </div>

          {/* Card 1: Masalah */}
          <div className="slide-callout-card callout-issue">
            <div className="callout-header">
              <AlertCircle size={18} className="text-red" />
              <span className="callout-title">Masalah Desain Saat Ini (Asli)</span>
            </div>
            <ul className="callout-bullets">
              {currentGulf.keyPoints.issues.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>

          {/* Card 2: Solusi */}
          <div className="slide-callout-card callout-fix">
            <div className="callout-header">
              <CheckCircle2 size={18} className="text-green" />
              <span className="callout-title">Solusi Rancang Ulang (Fiksasi)</span>
            </div>
            <ul className="callout-bullets">
              {currentGulf.keyPoints.fixes.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>

          {/* Card 3: Teori IMK */}
          <div className="slide-theory-bar">
            <span className="theory-badge-pill">LANDASAN TEORI IMK</span>
            <div className="theory-content">
              <strong>{currentGulf.keyPoints.theory.name}:</strong> {currentGulf.keyPoints.theory.rule}
            </div>
          </div>

          {/* Step Navigation Buttons */}
          <div className="deck-inline-nav">
            <button 
              className="ppt-nav-btn" 
              onClick={goToPrev}
              disabled={currentIdx === 0}
            >
              <ChevronLeft size={18} />
              <span>Kasus Sebelumnya</span>
            </button>
            <button 
              className="ppt-nav-btn primary" 
              onClick={goToNext}
              disabled={currentIdx === gulfItems.length - 1}
            >
              <span>Kasus Berikutnya</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* Right Column: Visual Mockup Showcase (Side-by-Side) */}
        <section className="redesign-right-deck">
          {/* Mockup 1: Saat Ini */}
          <div className="ppt-phone-wrapper">
            <div className="ppt-phone-tag tag-issue">
              <span className="tag-pill-badge">DESAIN ASLI</span>
              <span className="phone-tag-title">{currentGulf.tagOriginal.split(':')[1] || currentGulf.tagOriginal}</span>
            </div>
            <div className="ppt-phone-scaler">
              <PhoneMockup 
                time={getTimeForScreen(currentGulf.id)} 
                battery={getBatteryForScreen(currentGulf.id)}
              >
                {renderScreen(currentGulf.id, false)}
              </PhoneMockup>
            </div>
          </div>

          {/* Mockup 2: Usulan Fiksasi */}
          <div className="ppt-phone-wrapper">
            <div className="ppt-phone-tag tag-fix">
              <span className="tag-pill-badge">USULAN FIKSASI</span>
              <span className="phone-tag-title">{currentGulf.tagProposed.split(':')[1] || currentGulf.tagProposed}</span>
            </div>
            <div className="ppt-phone-scaler">
              <PhoneMockup 
                time={getTimeForScreen(currentGulf.id)} 
                battery={getBatteryForScreen(currentGulf.id)}
              >
                {renderScreen(currentGulf.id, true)}
              </PhoneMockup>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
