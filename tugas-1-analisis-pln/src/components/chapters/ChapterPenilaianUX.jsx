import React from 'react';
import { 
  AlertCircle, 
  HelpCircle, 
  EyeOff, 
  ShieldAlert, 
  Sliders, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { pdfSections } from '../../data/analysisData';

export default function ChapterPenilaianUX({ onNavigateToMockups }) {
  const { penilaianUX } = pdfSections;

  return (
    <div className="chapter-container">
      {/* Header Banner */}
      <div className="chapter-header">
        <div className="chapter-tag">BAGIAN 3 • DOKUMEN PDF</div>
        <h1 className="chapter-title">{penilaianUX.title}</h1>
        <p className="chapter-subtitle">{penilaianUX.subtitle}</p>
      </div>

      {/* Grid: Gulf of Execution vs Gulf of Evaluation */}
      <div className="two-col-grid">
        {/* Gulf of Execution */}
        <div className="section-card card-execution">
          <div className="gulf-card-header">
            <span className="gulf-tag tag-execution">GULF OF EXECUTION</span>
            <h2 className="gulf-heading">Jurang Eksekusi</h2>
            <p className="gulf-subdesc">Jarak antara niat mental pengguna dan aksi yang diizinkan oleh antarmuka sistem.</p>
          </div>

          <div className="gulf-items-list">
            {penilaianUX.gulfOfExecution.map((item, idx) => (
              <div key={idx} className="gulf-item-card">
                <div className="gulf-item-header">
                  <span className="item-number">#{idx + 1}</span>
                  <h3 className="item-title">{item.title}</h3>
                </div>
                <p className="item-desc">{item.desc}</p>
                <div className="impact-box">
                  <strong>Dampak Interaksi:</strong> {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gulf of Evaluation */}
        <div className="section-card card-evaluation">
          <div className="gulf-card-header">
            <span className="gulf-tag tag-evaluation">GULF OF EVALUATION</span>
            <h2 className="gulf-heading">Jurang Evaluasi</h2>
            <p className="gulf-subdesc">Tingkat kesulitan pengguna dalam menginterpretasi status fisik sistem pasca aksi.</p>
          </div>

          <div className="gulf-items-list">
            {penilaianUX.gulfOfEvaluation.map((item, idx) => (
              <div key={idx} className="gulf-item-card">
                <div className="gulf-item-header">
                  <span className="item-number">#{idx + 1}</span>
                  <h3 className="item-title">{item.title}</h3>
                </div>
                <p className="item-desc">{item.desc}</p>
                <div className="impact-box">
                  <strong>Dampak Interaksi:</strong> {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dimensi Kualitas Pengalaman (UX) */}
      <div className="section-block">
        <h2 className="section-heading">
          <Sliders size={20} className="text-teal" />
          <span>Dimensi Pengalaman Pengguna (UX Dimensions)</span>
        </h2>
        <div className="two-col-grid">
          <div className="ux-dimension-card">
            <div className="ux-dim-header">
              <span className="dim-type">DIMENSI PRAGMATIS (KEGUNAAN)</span>
              <span className="dim-score score-medium">{penilaianUX.dimensiUX.pragmatis.score}</span>
            </div>
            <p className="dim-verdict">{penilaianUX.dimensiUX.pragmatis.verdict}</p>
          </div>

          <div className="ux-dimension-card">
            <div className="ux-dim-header">
              <span className="dim-type">DIMENSI HEDONIS (EMOSIONAL & KEPUASAN)</span>
              <span className="dim-score score-low">{penilaianUX.dimensiUX.hedonis.score}</span>
            </div>
            <p className="dim-verdict">{penilaianUX.dimensiUX.hedonis.verdict}</p>
          </div>
        </div>
      </div>

      {/* Potensi Dark Pattern: Misdirection */}
      <div className="section-block">
        <div className="dark-pattern-banner">
          <div className="dp-header">
            <ShieldAlert size={26} className="text-red" />
            <div>
              <span className="dp-badge">TEMUAN KRITIS: DARK PATTERN</span>
              <h2 className="dp-title">{penilaianUX.darkPattern.type} — {penilaianUX.darkPattern.feature}</h2>
            </div>
          </div>
          <div className="dp-content">
            <p className="dp-desc">{penilaianUX.darkPattern.description}</p>
            <div className="dp-risk-box">
              <strong>Analisis Risiko Desain:</strong> {penilaianUX.darkPattern.risk}
            </div>
          </div>
        </div>
      </div>

      {/* CTA to Redesign Mockups */}
      {onNavigateToMockups && (
        <div className="cta-banner">
          <div className="cta-text">
            <h3>Lihat Bagaimana 4 Masalah di Atas Diperbaiki Secara Konkret</h3>
            <p>Bandingkan mockup Android asli vs usulan fiksasi rancang ulang berbasis teori IMK.</p>
          </div>
          <button className="btn-cta-primary" onClick={onNavigateToMockups}>
            <span>Buka Rancang Ulang Interaktif</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
