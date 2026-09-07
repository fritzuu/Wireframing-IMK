import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown,
  ExternalLink,
  Award,
  Calendar,
  Layers
} from 'lucide-react';
import { projectMeta, pdfSections, gulfItems } from '../../data/analysisData';

export default function SlideDokumenPaper() {
  const [isFullTranscriptOpen, setIsFullTranscriptOpen] = useState(false);

  return (
    <div className="slide-content-layout">
      {/* Header */}
      <div className="slide-header-row">
        <div>
          <span className="slide-badge-category">DOKUMENTASI AKADEMIK • ARTEFAK TUGAS</span>
          <h1 className="slide-main-heading">Dokumen Laporan Lengkap Kelompok 3</h1>
          <p className="slide-lead-text">
            Arsip lengkap dokumen analisis IMK (Format PDF) beserta ringkasan eksekutif seluruh temuan.
          </p>
        </div>

        <button 
          className="btn-toggle-transcript"
          onClick={() => setIsFullTranscriptOpen(!isFullTranscriptOpen)}
        >
          <FileText size={16} />
          <span>{isFullTranscriptOpen ? 'Tutup Transkrip Lengkap' : 'Buka Transkrip PDF Lengkap'}</span>
          <ChevronDown size={14} className={`chevron-icon ${isFullTranscriptOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Bento Grid Deliverable Overview */}
      <div className="paper-bento-grid">
        {/* Card 1: Tim & Identitas */}
        <div className="paper-card">
          <div className="paper-card-header">
            <Users size={18} className="text-teal" />
            <strong>Anggota Kelompok 3</strong>
          </div>
          <div className="team-vertical-list">
            {projectMeta.team.map((m, idx) => (
              <div key={idx} className="team-row-item">
                <div className="team-row-avatar">{m.name.charAt(0)}</div>
                <div className="team-row-info">
                  <span className="team-name">{m.name}</span>
                  <span className="team-nim">{m.nim} • {m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: 4 Kasus Redesign Summary */}
        <div className="paper-card paper-cases-span">
          <div className="paper-card-header">
            <Award size={18} className="text-teal" />
            <strong>Ringkasan Hasil Rancang Ulang (Deliverables)</strong>
          </div>
          <div className="paper-summary-cases">
            {gulfItems.map((item, idx) => (
              <div key={idx} className="summary-case-pill">
                <div className="summary-pill-top">
                  <span className="pill-num">0{idx + 1}</span>
                  <span className="pill-theory">{item.theoryBadge}</span>
                </div>
                <h4 className="pill-title">{item.title}</h4>
                <p className="pill-fix">{item.solutionSummary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collapsible Verbatim Academic Paper View */}
      {isFullTranscriptOpen && (
        <div className="full-transcript-sheet">
          <div className="sheet-header">
            <h3 className="sheet-title">Transkrip Naskah Laporan Asli (PDF 7 Halaman)</h3>
            <span className="sheet-sub">S1 Informatika - Fakultas MIPA Universitas Sebelas Maret</span>
          </div>

          <div className="sheet-body">
            {/* Section 1 */}
            <div className="sheet-section">
              <h4>1. Bedah Sistem</h4>
              <p><b>Domain:</b> {pdfSections.bedahSistem.domainGoalTask[0].desc}</p>
              <p><b>Goal:</b> {pdfSections.bedahSistem.domainGoalTask[1].desc}</p>
              <p><b>Task:</b> {pdfSections.bedahSistem.domainGoalTask[2].desc}</p>
              <p><b>Intention:</b> {pdfSections.bedahSistem.domainGoalTask[3].desc}</p>
            </div>

            {/* Section 2 */}
            <div className="sheet-section">
              <h4>2. Siklus Eksekusi–Evaluasi (Norman)</h4>
              <ol className="sheet-ol">
                {pdfSections.teoriNormanAbowd.normanCycle.map((n) => (
                  <li key={n.step}><b>{n.name}:</b> {n.desc}</li>
                ))}
              </ol>
            </div>

            {/* Section 3 */}
            <div className="sheet-section">
              <h4>3. Penilaian Jurang Interaksi & Dark Pattern</h4>
              <p><b>Gulf of Execution:</b> Beban kognitif beranda & interupsi data pribadi.</p>
              <p><b>Gulf of Evaluation:</b> Transaksi blank spot & interaction cost kuota kWh.</p>
              <p><b>Dark Pattern:</b> Misdirection toggle donasi Electree Rp1.000.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
