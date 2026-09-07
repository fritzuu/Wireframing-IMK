import React from 'react';
import { 
  X, 
  BookOpen, 
  Users, 
  Workflow, 
  Compass, 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { projectMeta, systemDeconstruction } from '../data/analysisData';

export default function TheoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              <BookOpen size={20} className="text-teal" />
            </div>
            <div>
              <h3 className="modal-title">{projectMeta.title}</h3>
              <p className="modal-subtitle">{projectMeta.subject} • Skenario: Beli Token Rp500.000</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          {/* Anggota Kelompok */}
          <div className="theory-section team-card-group">
            <h4 className="theory-subheading">
              <Users size={16} />
              <span>Anggota Kelompok 3</span>
            </h4>
            <div className="team-grid">
              {projectMeta.team.map((member) => (
                <div key={member.nim} className="team-member-chip">
                  <div className="member-avatar">{member.name.charAt(0)}</div>
                  <div className="member-info">
                    <span className="member-name">{member.name}</span>
                    <span className="member-nim">{member.nim}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1. Bedah Sistem: Domain, Goal, Task, Intention */}
          <div className="theory-section">
            <h4 className="theory-subheading">
              <Compass size={16} />
              <span>1. Bedah Sistem: Domain – Goal – Task – Intention</span>
            </h4>
            <div className="table-responsive">
              <table className="theory-table">
                <thead>
                  <tr>
                    <th>Elemen</th>
                    <th>Deskripsi Teoretis & Konkret</th>
                  </tr>
                </thead>
                <tbody>
                  {systemDeconstruction.domainGoalTask.map((item, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold text-primary">{item.element}</td>
                      <td>{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Siklus Eksekusi-Evaluasi (Norman 7 Stages) */}
          <div className="theory-section">
            <h4 className="theory-subheading">
              <Workflow size={16} />
              <span>Siklus Eksekusi–Evaluasi (Don Norman 7 Stages)</span>
            </h4>
            <div className="norman-timeline">
              {systemDeconstruction.normanCycle.map((stage) => (
                <div key={stage.step} className="timeline-item">
                  <div className="timeline-step-badge">{stage.step}</div>
                  <div className="timeline-content">
                    <span className="timeline-stage-name">{stage.name}</span>
                    <p className="timeline-stage-desc">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kerangka Abowd & Beale */}
          <div className="theory-section">
            <h4 className="theory-subheading">
              <Layers size={16} />
              <span>Kerangka Interaksi Abowd & Beale</span>
            </h4>
            <div className="abowd-grid">
              {systemDeconstruction.abowdBeale.map((item, idx) => (
                <div key={idx} className="abowd-card">
                  <span className="abowd-tag">{item.component}</span>
                  <p className="abowd-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ergonomi & Konteks Penggunaan */}
          <div className="theory-section split-two-cols">
            <div className="info-box-sub">
              <h5>Ergonomi & Thumb-Zone</h5>
              <ul>
                {systemDeconstruction.ergonomics.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="info-box-sub">
              <h5>Konteks Penggunaan Darurat</h5>
              <ul>
                {systemDeconstruction.contextOfUse.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Potensi Dark Pattern */}
          <div className="theory-section dark-pattern-box">
            <div className="dark-pattern-header">
              <AlertTriangle size={18} className="text-warning" />
              <h4>Temuan Dark Pattern: Misdirection (Salah Arah)</h4>
            </div>
            <p>
              {systemDeconstruction.darkPatterns[0].desc}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn-modal-close" onClick={onClose}>
            Tutup Bedah Teori
          </button>
        </div>
      </div>
    </div>
  );
}
