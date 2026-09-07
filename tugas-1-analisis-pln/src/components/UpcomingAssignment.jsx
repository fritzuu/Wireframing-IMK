import React from 'react';
import { Clock, Calendar, BookOpen, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function UpcomingAssignment({ assignment, onSelectAssignment }) {
  return (
    <div className="upcoming-container">
      <div className="upcoming-card">
        <div className="upcoming-badge">
          <Clock size={16} />
          <span>PORTAL TUGAS BERKELANJUTAN • {assignment.badge}</span>
        </div>

        <h1 className="upcoming-title">{assignment.number}: {assignment.title}</h1>
        <p className="upcoming-desc">{assignment.summary}</p>

        <div className="upcoming-timeline-box">
          <div className="timeline-header">
            <Calendar size={18} className="text-teal" />
            <strong>Rencana Pelaksanaan & Kurikulum IMK:</strong>
          </div>
          <ul className="timeline-points">
            <li>
              <CheckCircle2 size={16} className="text-teal" />
              <span><b>Tugas 1 (Selesai):</b> Analisis Interaksi & Rancang Ulang PLN Mobile (Norman Cycle, Abowd-Beale, Gulf of Execution/Evaluation).</span>
            </li>
            <li>
              <Clock size={16} className="text-amber" />
              <span><b>{assignment.number} (Sedang Dipersiapkan):</b> Modul ini siap diisi dengan laporan penelitian, artefak data, dan prototipe interaktif semester ini.</span>
            </li>
          </ul>
        </div>

        <div className="upcoming-action-row">
          <button 
            className="btn-back-tugas1"
            onClick={() => onSelectAssignment('tugas-1')}
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Tugas 1: Analisis PLN Mobile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
