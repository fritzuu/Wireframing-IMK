import React from 'react';
import { 
  Compass, 
  Target, 
  CheckSquare, 
  Zap, 
  Layers, 
  Smartphone, 
  AlertTriangle, 
  Clock 
} from 'lucide-react';
import { pdfSections, projectMeta } from '../../data/analysisData';

export default function ChapterBedahSistem() {
  const { bedahSistem } = pdfSections;

  return (
    <div className="chapter-container">
      {/* Header Banner */}
      <div className="chapter-header">
        <div className="chapter-tag">BAGIAN 1 • DOKUMEN PDF</div>
        <h1 className="chapter-title">{bedahSistem.title}</h1>
        <p className="chapter-subtitle">{bedahSistem.subtitle}</p>
        <div className="scenario-callout">
          <div className="scenario-label">Skenario Tugas Konkret:</div>
          <div className="scenario-text">"{projectMeta.concreteScenario}"</div>
        </div>
      </div>

      {/* Grid: Domain, Goal, Task, Intention */}
      <div className="section-block">
        <h2 className="section-heading">
          <Target size={20} className="text-teal" />
          <span>Dekomposisi Hirarki: Domain, Goal, Task & Intention</span>
        </h2>
        <div className="dgti-grid">
          {bedahSistem.domainGoalTask.map((item, idx) => (
            <div key={idx} className="dgti-card">
              <div className="dgti-card-header">
                <span className="dgti-index">0{idx + 1}</span>
                <span className="dgti-badge">{item.element}</span>
              </div>
              <h3 className="dgti-title">{item.desc}</h3>
              <p className="dgti-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid 2 Columns: Gaya Interaksi & Ergonomi */}
      <div className="two-col-grid">
        {/* Gaya Interaksi */}
        <div className="section-card">
          <h2 className="section-heading">
            <Layers size={20} className="text-teal" />
            <span>Gaya Interaksi (Interaction Styles)</span>
          </h2>
          <div className="feature-list">
            {bedahSistem.gayaInteraksi.map((item, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-item-header">
                  <span className="item-bullet" />
                  <strong className="item-name">{item.name}</strong>
                </div>
                <p className="item-desc">{item.desc}</p>
                <div className="implication-box">
                  <span className="implication-label">Implikasi Kognitif:</span> {item.implication}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ergonomi & Fitts's Law */}
        <div className="section-card">
          <h2 className="section-heading">
            <Smartphone size={20} className="text-teal" />
            <span>Ergonomi & Aspek Fisik</span>
          </h2>
          <div className="feature-list">
            {bedahSistem.ergonomi.map((item, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-item-header">
                  <span className="item-bullet" />
                  <strong className="item-name">{item.title}</strong>
                </div>
                <p className="item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Konteks Penggunaan */}
      <div className="section-block">
        <h2 className="section-heading">
          <Clock size={20} className="text-teal" />
          <span>Konteks Penggunaan & Tekanan Situasional</span>
        </h2>
        <div className="context-grid">
          {bedahSistem.konteksPenggunaan.map((item, idx) => (
            <div key={idx} className="context-card">
              <div className="context-card-header">
                <AlertTriangle size={18} className="text-amber" />
                <h3 className="context-title">{item.title}</h3>
              </div>
              <p className="context-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
