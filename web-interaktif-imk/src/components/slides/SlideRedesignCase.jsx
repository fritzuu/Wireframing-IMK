import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle, 
  CheckCircle2, 
  Compass,
  ArrowRight,
  Layers
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

export default function SlideRedesignCase({ caseIndex = 0, onSelectCase }) {
  const [activeBadgeId, setActiveBadgeId] = useState(null);

  const currentGulf = gulfItems[caseIndex] || gulfItems[0];

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
    <div className="redesign-deliverable-slide">
      {/* Top Sub-Nav: 4 Cases Selector */}
      <div className="case-selector-bar">
        <div className="case-pills-row">
          {gulfItems.map((item, idx) => (
            <button
              key={item.id}
              className={`case-pill-btn ${caseIndex === idx ? 'active' : ''}`}
              onClick={() => {
                onSelectCase(idx);
                setActiveBadgeId(null);
              }}
            >
              <span className="case-pill-num">Kasus {idx + 1}</span>
              <span className="case-pill-title">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="case-counter-tag">
          Deliverable <b>{caseIndex + 1}</b> / {gulfItems.length}
        </div>
      </div>

      {/* Main Split: Left Analysis Cards vs Right Side-by-Side Mockups */}
      <div className="redesign-split-canvas">
        {/* Left Column: Sharp Executive Analysis */}
        <div className="redesign-left-deck">
          <div className="deck-header-block">
            <span className="deck-stage-pill">
              {currentGulf.type === 'EXECUTION' ? 'GULF OF EXECUTION' : 'GULF OF EVALUATION'}
            </span>
            <h2 className="deck-title">
              {currentGulf.index}. {currentGulf.title}
            </h2>
            <p className="deck-lead">{currentGulf.tagline}</p>
          </div>

          {/* Problem Card */}
          <div className="deck-callout-card card-issue">
            <div className="deck-card-header">
              <AlertCircle size={17} className="text-red" />
              <strong className="deck-card-label">Masalah Desain Saat Ini:</strong>
            </div>
            <ul className="deck-points-list">
              {currentGulf.keyPoints.issues.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="deck-callout-card card-fix">
            <div className="deck-card-header">
              <CheckCircle2 size={17} className="text-green" />
              <strong className="deck-card-label">Solusi Rancang Ulang:</strong>
            </div>
            <ul className="deck-points-list">
              {currentGulf.keyPoints.fixes.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>

          {/* Theory Box */}
          <div className="deck-theory-box">
            <span className="theory-tag">LANDASAN TEORI IMK</span>
            <div className="theory-statement">
              <b>{currentGulf.keyPoints.theory.name}:</b> {currentGulf.keyPoints.theory.rule}
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Side-by-Side Mockups */}
        <div className="redesign-mockup-deck">
          {/* Mockup 1: Asli */}
          <div className="mockup-unit">
            <div className="mockup-header-tag tag-issue">
              <span className="tag-state">DESAIN ASLI</span>
              <span className="tag-note">{currentGulf.tagOriginal.split(':')[1] || currentGulf.tagOriginal}</span>
            </div>
            <div className="mockup-device-wrapper">
              <PhoneMockup 
                time={getTimeForScreen(currentGulf.id)} 
                battery={getBatteryForScreen(currentGulf.id)}
              >
                {renderScreen(currentGulf.id, false)}
              </PhoneMockup>
            </div>
          </div>

          {/* Mockup 2: Fiksasi */}
          <div className="mockup-unit">
            <div className="mockup-header-tag tag-fix">
              <span className="tag-state">USULAN FIKSASI</span>
              <span className="tag-note">{currentGulf.tagProposed.split(':')[1] || currentGulf.tagProposed}</span>
            </div>
            <div className="mockup-device-wrapper">
              <PhoneMockup 
                time={getTimeForScreen(currentGulf.id)} 
                battery={getBatteryForScreen(currentGulf.id)}
              >
                {renderScreen(currentGulf.id, true)}
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
