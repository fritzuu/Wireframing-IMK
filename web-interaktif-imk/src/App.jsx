import { MotionButton, MotionReveal, MotionSwitch, MotionPopover } from './components/motion/PortalMotion';
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Layers, 
  Smartphone, 
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import PageAnalisisSummary from './components/pages/PageAnalisisSummary';
import PageRancangUlangCases from './components/pages/PageRancangUlangCases';
import PageUX from './components/pages/PageUX';
import UpcomingAssignment from './components/UpcomingAssignment';
import { projectMeta } from './data/analysisData';

export default function App() {
  const [activeAssignmentId, setActiveAssignmentId] = useState('tugas-2');
  const [activePage, setActivePage] = useState('analisis'); // 'analisis' or 'kasus'
  const [isAssignmentDropdownOpen, setIsAssignmentDropdownOpen] = useState(false);

  const currentAssignment = projectMeta.assignments.find(a => a.id === activeAssignmentId) || projectMeta.assignments[0];

  return (
    <div className="imk-master-viewport">
      {/* 1. Global Academic Portal Header */}
      <MotionReveal as="header" className="imk-top-header">
        <div className="top-header-left">
          <div className="portal-brand-block">
            <GraduationCap size={26} className="text-teal" />
            <div className="brand-text-stack">
              <span className="brand-meta">PORTAL TUGAS IMK, INFORMATIKA UNS</span>
              <span className="brand-title">Interaksi Manusia & Komputer</span>
            </div>
          </div>

          <div className="header-divider-line" />

          {/* Continuous Multi-Assignment Switcher */}
          <div className="assignment-selector-container">
            <MotionButton
              className="assignment-selector-trigger"
              onClick={() => setIsAssignmentDropdownOpen(!isAssignmentDropdownOpen)}
              title="Pilih Tugas Kuliah Berkelanjutan"
            >
              <span className="asg-pill-number">{currentAssignment.number}</span>
              <span className="asg-pill-name">{currentAssignment.title}</span>
              <ChevronDown size={16} className={`chevron-icon ${isAssignmentDropdownOpen ? 'open' : ''}`} />
            </MotionButton>

            <MotionPopover open={isAssignmentDropdownOpen} className="assignment-dropdown-popover">
                <div className="popover-heading">Daftar Tugas Kuliah IMK:</div>
                {projectMeta.assignments.map((asg) => (
                  <MotionButton
                    key={asg.id}
                    className={`asg-dropdown-item ${activeAssignmentId === asg.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveAssignmentId(asg.id);
                      setIsAssignmentDropdownOpen(false);
                      setActivePage('analisis');
                    }}
                  >
                    <div className="asg-item-row">
                      <span className="asg-item-num">{asg.number}</span>
                      <span className={`asg-item-badge ${asg.status}`}>{asg.badge}</span>
                    </div>
                    <span className="asg-item-title">{asg.title}</span>
                  </MotionButton>
                ))}
            </MotionPopover>
          </div>
        </div>

        {/* Header Right: Team Members */}
        <div className="top-header-right">
          <div className="team-pill-badge">
            <Users size={17} />
            <span>Kelompok 3: Zendinan, Faris, dan Revan</span>
          </div>
        </div>
      </MotionReveal>

      {/* 2. Tugas 1 Primary Navigation (Only 2 Unified Pages) */}
      {activeAssignmentId === 'tugas-1' && (
        <nav className="tugas1-nav-bar">
          <div className="tugas1-nav-tabs">
            <MotionButton
              className={`tugas1-tab-btn ${activePage === 'analisis' ? 'active' : ''}`}
              onClick={() => setActivePage('analisis')}
            >
              <Layers size={20} />
              <span>Ringkasan Analisis <span className="tab-sub-text">(Executive Summary)</span></span>
            </MotionButton>

            <MotionButton
              className={`tugas1-tab-btn ${activePage === 'kasus' ? 'active' : ''}`}
              onClick={() => setActivePage('kasus')}
            >
              <Smartphone size={20} />
              <span>Rancang Ulang <span className="tab-sub-text">(4 Kasus Mockup)</span></span>
            </MotionButton>
          </div>

          <div className="tugas1-quick-hint">
            {activePage === 'analisis' ? (
              <MotionButton className="quick-switch-link" onClick={() => setActivePage('kasus')}>
                <span>Langsung ke 4 Kasus Redesain</span>
                <ArrowRight size={16} />
              </MotionButton>
            ) : (
              <MotionButton className="quick-switch-link" onClick={() => setActivePage('analisis')}>
                <span>Lihat Ringkasan Teori & Analisis</span>
                <ArrowRight size={16} />
              </MotionButton>
            )}
          </div>
        </nav>
      )}

      {/* 3. Main Workspace Canvas */}
      <main className="imk-main-canvas">
        <MotionSwitch motionKey={`${activeAssignmentId}-${activePage}`} className="portal-page-motion">
        {activeAssignmentId === 'tugas-1' ? (
          activePage === 'analisis' ? (
            <PageAnalisisSummary onGoToCases={() => setActivePage('kasus')} />
          ) : (
            <PageRancangUlangCases onGoToAnalysis={() => setActivePage('analisis')} />
          )
        ) : activeAssignmentId === 'tugas-2' ? (
          <PageUX />
        ) : (
          <UpcomingAssignment 
            assignment={currentAssignment} 
            onSelectAssignment={(id) => {
              setActiveAssignmentId(id);
              setActivePage('analisis');
            }} 
          />
        )}
        </MotionSwitch>
      </main>
    </div>
  );
}
