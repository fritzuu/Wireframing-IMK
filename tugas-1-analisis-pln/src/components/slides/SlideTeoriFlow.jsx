import React, { useState } from 'react';
import { 
  GitBranch, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Layers,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { pdfSections } from '../../data/analysisData';

export default function SlideTeoriFlow() {
  const { teoriNormanAbowd } = pdfSections;
  const [activeStep, setActiveStep] = useState(3); // Default to Action Specification / Execution

  const currentStep = teoriNormanAbowd.normanCycle.find(s => s.step === activeStep) || teoriNormanAbowd.normanCycle[2];

  return (
    <div className="slide-content-layout">
      {/* Header */}
      <div className="slide-header-row">
        <div>
          <span className="slide-badge-category">KERANGKA TEORI INTERAKSI</span>
          <h1 className="slide-main-heading">Siklus 7 Tahap Don Norman & Kerangka Abowd-Beale</h1>
          <p className="slide-lead-text">
            Pemetaan matematis jurang eksekusi (*Gulf of Execution*) dan jurang evaluasi (*Gulf of Evaluation*) pada transaksi.
          </p>
        </div>

        <div className="norman-phase-pills">
          <span className="phase-pill pill-exec">Tahap 2–4: Gulf of Execution</span>
          <span className="phase-pill pill-eval">Tahap 5–7: Gulf of Evaluation</span>
        </div>
      </div>

      {/* Visual Norman 7-Step Pipeline */}
      <div className="norman-flow-card">
        <div className="norman-track-row">
          {teoriNormanAbowd.normanCycle.map((item) => {
            const isSelected = item.step === activeStep;
            const phaseClass = item.phase === 'GOAL' ? 'node-goal' : item.phase === 'EXECUTION' ? 'node-exec' : 'node-eval';
            return (
              <button
                key={item.step}
                className={`norman-node-btn ${phaseClass} ${isSelected ? 'selected' : ''}`}
                onClick={() => setActiveStep(item.step)}
              >
                <span className="node-num">0{item.step}</span>
                <span className="node-name">{item.name}</span>
                <span className="node-subtag">{item.phase}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Inspector */}
        <div className="norman-node-inspector">
          <div className="inspector-header">
            <span className={`inspector-phase-badge ${currentStep.phase.toLowerCase()}`}>
              TAHAP {currentStep.step} • {currentStep.phase}
            </span>
            <h3 className="inspector-title">{currentStep.name}: "{currentStep.desc}"</h3>
          </div>

          <div className="inspector-grid">
            <div className="inspector-box box-user">
              <div className="box-title-row">
                <Activity size={16} className="text-blue" />
                <span>Aksi Mental / Motorik Pengguna:</span>
              </div>
              <p className="box-body">{currentStep.userAction}</p>
            </div>

            <div className="inspector-box box-system">
              <div className="box-title-row">
                <Cpu size={16} className="text-teal" />
                <span>Respon Komputasi & Antarmuka Sistem:</span>
              </div>
              <p className="box-body">{currentStep.systemRole}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abowd & Beale 4-Stage Architecture Loop */}
      <div className="abowd-loop-card">
        <div className="abowd-loop-title">
          <Layers size={18} className="text-teal" />
          <span>Kerangka Loop Interaksi Abowd & Beale:</span>
        </div>

        <div className="abowd-loop-row">
          {teoriNormanAbowd.abowdBeale.map((ab, idx) => (
            <div key={idx} className="abowd-block">
              <div className="abowd-block-badge">{ab.code}</div>
              <h4 className="abowd-block-title">{ab.title.split('(')[0]}</h4>
              <p className="abowd-block-desc">{ab.desc}</p>
              {idx < teoriNormanAbowd.abowdBeale.length - 1 && (
                <div className="abowd-arrow">➔</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
