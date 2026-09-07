import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Layers, 
  Smartphone, 
  ChevronDown,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import PageAnalisisSummary from './components/pages/PageAnalisisSummary';
import PageRancangUlangCases from './components/pages/PageRancangUlangCases';
import UpcomingAssignment from './components/UpcomingAssignment';
import { projectMeta } from './data/analysisData';

export default function App() {
  const [activeAssignmentId, setActiveAssignmentId] = useState('tugas-1');
  const [activePage, setActivePage] = useState('analisis'); // 'analisis' or 'kasus'
  const [isAssignmentDropdownOpen, setIsAssignmentDropdownOpen] = useState(false);

  const currentAssignment = projectMeta.assignments.find(a => a.id === activeAssignmentId) || projectMeta.assignments[0];

  return (
    <div className="imk-master-viewport">
      {/* 1. Global Academic Portal Header */}
      <header className="imk-top-header">
        <div className="top-header-left">
          <div className="portal-brand-block">
            <GraduationCap size={22} className="text-teal" />
            <div className="brand-text-stack">
              <span className="brand-meta">PORTAL TUGAS IMK • INFORMATIKA UNS</span>
              <span className="brand-title">Interaksi Manusia & Komputer</span>
            </div>
          </div>

          <div className="header-divider-line" />

          {/* Continuous Multi-Assignment Switcher */}
          <div className="assignment-selector-container">
            <button 
              className="assignment-selector-trigger"
              onClick={() => setIsAssignmentDropdownOpen(!isAssignmentDropdownOpen)}
              title="Pilih Tugas Kuliah Berkelanjutan"
            >
              <span className="asg-pill-number">{currentAssignment.number}</span>
              <span className="asg-pill-name">{currentAssignment.title}</span>
              <ChevronDown size={14} className={`chevron-icon ${isAssignmentDropdownOpen ? 'open' : ''}`} />
            </button>

            {isAssignmentDropdownOpen && (
              <div className="assignment-dropdown-popover">
                <div className="popover-heading">Daftar Tugas Kuliah IMK:</div>
                {projectMeta.assignments.map((asg) => (
                  <button
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
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Header Right: Team Members */}
        <div className="top-header-right">
          <div className="team-pill-badge">
            <Users size={15} />
            <span>Kelompok 3: Zendinan • Mufti • Revan</span>
          </div>
        </div>
      </header>

      {/* 2. Tugas 1 Primary Navigation (Only 2 Unified Pages) */}
      {activeAssignmentId === 'tugas-1' && (
        <nav className="tugas1-nav-bar">
          <div className="tugas1-nav-tabs">
            <button
              className={`tugas1-tab-btn ${activePage === 'analisis' ? 'active' : ''}`}
              onClick={() => setActivePage('analisis')}
            >
              <Layers size={17} />
              <span>Ringkasan Analisis (Executive Summary)</span>
            </button>

            <button
              className={`tugas1-tab-btn ${activePage === 'kasus' ? 'active' : ''}`}
              onClick={() => setActivePage('kasus')}
            >
              <Smartphone size={17} />
              <span>Rancang Ulang (4 Kasus Mockup)</span>
            </button>
          </div>

          <div className="tugas1-quick-hint">
            {activePage === 'analisis' ? (
              <button className="quick-switch-link" onClick={() => setActivePage('kasus')}>
                <span>Langsung ke 4 Kasus Redesain</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button className="quick-switch-link" onClick={() => setActivePage('analisis')}>
                <span>Lihat Ringkasan Teori & Analisis</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </nav>
      )}

      {/* 3. Main Workspace Canvas */}
      <main className="imk-main-canvas">
        {activeAssignmentId === 'tugas-1' ? (
          activePage === 'analisis' ? (
            <PageAnalisisSummary onGoToCases={() => setActivePage('kasus')} />
          ) : (
            <PageRancangUlangCases onGoToAnalysis={() => setActivePage('analisis')} />
          )
        ) : (
          <UpcomingAssignment 
            assignment={currentAssignment} 
            onSelectAssignment={(id) => {
              setActiveAssignmentId(id);
              setActivePage('analisis');
            }} 
          />
        )}
      </main>
    </div>
  );
}
