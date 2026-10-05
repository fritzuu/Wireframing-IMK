import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { MotionButton, MotionCard, MotionLink, MotionReveal } from '../motion/PortalMotion';
import { uxAssets } from '../../data/uxAssetData';
import './ux.css';

export default function PageUXAssets({ onSelectCase }) {
  return <div className="summary-free-canvas ux-body">
    <MotionReveal className="free-hero-header">
      <div className="hero-text-block">
        <span className="free-tagline">ASSET. SCREENSHOT ACUAN</span>
        <h1 className="free-hero-title">Screenshot asli PLN Mobile</h1>
        <p className="free-hero-sub">{uxAssets.length} layar yang dipakai sebagai acuan observasi dan pengembangan desain dalam laporan Hari 1 sampai 5.</p>
      </div>
    </MotionReveal>
    <p className="ux-language-note">Sumber gambar adalah PLN.zip. Kode mengikuti lampiran laporan Hari 1. Pilih gambar untuk melihat ukuran penuh.</p>
    <div className="ux-asset-grid">
      {uxAssets.map(asset => <MotionCard className="ux-asset-card" key={asset.code}>
        <figure>
          <MotionLink className="ux-asset-preview" href={asset.src} target="_blank" rel="noopener noreferrer" aria-label={`Buka screenshot ${asset.title} ukuran penuh`}>
            <img src={asset.src} alt={`Screenshot asli PLN Mobile. ${asset.title}`} loading="lazy" decoding="async" />
          </MotionLink>
          <figcaption>
            <span className="dgti-code">{asset.code}</span>
            <h2>{asset.title}</h2>
            <p>{asset.description}</p>
          </figcaption>
        </figure>
        <div className="ux-asset-actions">
          <MotionLink className="ux-download" href={asset.src} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />Buka ukuran penuh</MotionLink>
          {asset.comparisonIndex >= 0 && <MotionButton className="ux-asset-case-link" onClick={() => onSelectCase(asset.comparisonIndex)}>Lihat rancang ulang<ArrowRight size={16} /></MotionButton>}
        </div>
      </MotionCard>)}
    </div>
  </div>;
}
