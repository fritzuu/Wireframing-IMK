import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowRight, 
  Eye, 
  Cpu, 
  HelpCircle, 
  Activity, 
  CheckCircle, 
  Layers
} from 'lucide-react';
import { pdfSections } from '../../data/analysisData';

export default function ChapterTeoriNorman() {
  const { teoriNormanAbowd } = pdfSections;
  const [activeStep, setActiveStep] = useState(1);

  const selectedStepData = teoriNormanAbowd.normanCycle.find(s => s.step === activeStep) || teoriNormanAbowd.normanCycle[0];

  return (
    <div className="chapter-container">
      {/* Header Banner */}
      <div className="chapter-header">
        <div className="chapter-tag">BAGIAN 2 • DOKUMEN PDF</div>
        <h1 className="chapter-title">{teoriNormanAbowd.title}</h1>
        <p className="chapter-subtitle">{teoriNormanAbowd.subtitle}</p>
      </div>

      {/* Interactive Norman Cycle Visualizer */}
      <div className="section-block">
        <div className="norman-cycle-wrapper">
          <div className="norman-cycle-header">
            <div className="flex-col">
              <span className="norman-label">INTERACTIVE MODEL</span>
              <h2 className="norman-heading">Siklus 7 Tahapan Eksekusi–Evaluasi (Don Norman)</h2>
            </div>
            <div className="norman-legend">
              <span className="legend-item legend-goal">Goal (Tujuan)</span>
              <span className="legend-item legend-exec">Gulf of Execution (Tahap 2–4)</span>
              <span className="legend-item legend-eval">Gulf of Evaluation (Tahap 5–7)</span>
            </div>
          </div>

          {/* Stepper Bar */}
          <div className="norman-stepper">
            {teoriNormanAbowd.normanCycle.map((item) => {
              const isSelected = item.step === activeStep;
              const stepTypeClass = item.phase === 'GOAL' ? 'step-goal' : item.phase === 'EXECUTION' ? 'step-exec' : 'step-eval';
              return (
                <button
                  key={item.step}
                  className={`norman-step-btn ${stepTypeClass} ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveStep(item.step)}
                >
                  <span className="step-num">{item.step}</span>
                  <span className="step-name">{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Card */}
          <div className="norman-active-card">
            <div className="active-card-top">
              <div className="active-card-meta">
                <span className={`badge-phase ${selectedStepData.phase.toLowerCase()}`}>
                  {selectedStepData.phase === 'GOAL' ? 'PEMBENTUKAN TUJUAN' : selectedStepData.phase === 'EXECUTION' ? 'GULF OF EXECUTION' : 'GULF OF EVALUATION'}
                </span>
                <span className="active-step-index">Tahap {selectedStepData.step} dari 7</span>
              </div>
              <h3 className="active-step-title">{selectedStepData.name} ({selectedStepData.formula})</h3>
              <p className="active-step-desc">{selectedStepData.desc}</p>
            </div>

            <div className="active-card-columns">
              <div className="column-box box-user">
                <div className="box-header">
                  <Activity size={18} className="text-blue" />
                  <strong>Tindakan / Kondisi Pengguna</strong>
                </div>
                <p>{selectedStepData.userAction}</p>
              </div>

              <div className="column-box box-system">
                <div className="box-header">
                  <Cpu size={18} className="text-teal" />
                  <strong>Tanggapan / Kondisi Sistem Antarmuka</strong>
                </div>
                <p>{selectedStepData.systemRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kerangka Abowd & Beale */}
      <div className="section-block">
        <h2 className="section-heading">
          <Layers size={20} className="text-teal" />
          <span>Kerangka Interaksi Abowd & Beale (4 Komponen Interaksi)</span>
        </h2>
        <div className="abowd-grid">
          {teoriNormanAbowd.abowdBeale.map((item, idx) => (
            <div key={idx} className="abowd-card">
              <div className="abowd-code-badge">{item.code}</div>
              <h3 className="abowd-card-title">{item.title}</h3>
              <p className="abowd-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
