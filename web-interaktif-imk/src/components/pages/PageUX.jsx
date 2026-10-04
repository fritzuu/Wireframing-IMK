import { MotionButton, MotionLink, MotionSection, MotionCard, MotionReveal, MotionSwitch } from '../motion/PortalMotion';
import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Download, Layers, Smartphone } from 'lucide-react';
import { uxComparisons, uxDays } from '../../data/uxReportData';
import './ux.css';

const summaryFields = [
  ['focus', 'TUJUAN'],
  ['work', 'PEKERJAAN'],
  ['results', 'HASIL'],
  ['deliverables', 'DELIVERABLE'],
];

function Section({ number, title, children }) {
  return (
    <MotionSection className="free-section">
      <div className="free-section-title"><span className="sec-num">{number}</span><h3>{title}</h3></div>
      {children}
    </MotionSection>
  );
}

export function DayReport({ day, onSelectCase }) {
  return (
    <>
      <Section number={`0${day.day}`} title={`${day.stage}: ${day.title}`}>
        <div className="free-dgti-strip ux-summary">
          {summaryFields.map(([field, label], index) => (
            <MotionCard className={`dgti-item ${index === 0 ? 'highlight' : ''}`} key={field} delay={index * 0.05}>
              <span className="dgti-code">{label}</span>
              <ul>{day[field].map(text => <li key={text}>{text}</li>)}</ul>
            </MotionCard>
          ))}
        </div>
        <p className="ux-source-note"><b>Batas informasi:</b> {day.limitation}</p>
      </Section>
      {day.sections.map((section, index) => (
        <Section number={String(index + 1).padStart(2, '0')} title={section.title} key={section.title}>
          <ReportSection section={section} onSelectCase={onSelectCase} />
        </Section>
      ))}
      <div className="free-bottom-cta">
        <div className="cta-statement"><strong>Sumber Day {day.day}</strong><span className="ux-source-file">A_3_tugasUXdesain_{day.day}.pdf</span><span>Bagian {day.sourceSections}</span></div>
        <MotionLink className="ux-download" href={day.source} download><Download size={17} />Unduh laporan Day {day.day}</MotionLink>
      </div>
    </>
  );
}

function ReportSection({ section, onSelectCase }) {
  if (section.type === 'table') {
    return <>
      <div className="ux-table-wrap">
        <table className="ux-table">
          <thead><tr>{section.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead>
          <tbody>{section.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <div className="ux-table-cards" aria-label={section.title}>
        {section.rows.map((row, index) => <article className="ux-table-card" key={index}>
          <span className="ux-small">{section.headers[0]}</span>
          <h4>{row[0]}</h4>
          <dl>{row.slice(1).map((cell, cellIndex) => <div key={cellIndex}>
            <dt>{section.headers[cellIndex + 1]}</dt><dd>{cell}</dd>
          </div>)}</dl>
        </article>)}
      </div>
      {section.note && <p className="ux-small">{section.note}</p>}
    </>;
  }
  if (section.type === 'profiles') {
    return <><div className="ux-profiles">{section.items.map(profile => <MotionCard className="ux-profile" key={profile.name}><div className="ux-meta-group"><span className="dgti-code">{profile.name}</span><span className="ux-small">{profile.source}</span></div><h4>{profile.context}</h4><p><b>Pertanyaan:</b> {profile.question}</p><blockquote>{profile.answer}</blockquote><p><b>Perilaku:</b> {profile.action}</p><p><b>Potensi frustrasi:</b> {profile.pain}</p><p><b>Kebutuhan:</b> {profile.need}</p></MotionCard>)}</div><p className="ux-small">{section.note}</p></>;
  }
  if (section.type === 'image') {
    return <figure className="ux-report-figure"><img src={section.src} alt={section.alt} /><figcaption className="ux-small">Gambar dari laporan. <MotionLink className="ux-download" href={section.src} target="_blank" rel="noreferrer">Buka gambar penuh</MotionLink></figcaption></figure>;
  }
  if (section.type === 'statement') {
    return <div className="timeline-active-display"><p className="ux-problem">{section.text}</p></div>;
  }
  if (section.type === 'screens') return <ScreenGallery onSelectCase={onSelectCase} />;
  const List = section.type === 'steps' ? 'ol' : 'ul';
  return <div className="ux-list-block">{section.intro && <p className="ux-problem">{section.intro}</p>}<List>{section.items.map(item => <li key={item}>{item}</li>)}</List>{section.note && <p className="ux-small">{section.note}</p>}</div>;
}

function ScreenGallery({ onSelectCase }) {
  return <div className="ux-screen-gallery">{uxComparisons.map((item, index) => <MotionButton className="ux-screen-card" key={item.after} onClick={() => onSelectCase(index)}><span className="dgti-code">{item.need}. {item.before} dan {item.after}</span><img src={`/ux/${item.after}.png`} alt={`Wireframe ${item.after}: ${item.title}`} /><strong>{item.title}</strong><span className="ux-small">Lihat sebelum dan sesudah</span></MotionButton>)}</div>;
}

function Comparison({ index, onChange, onBack }) {
  const item = uxComparisons[index];
  return <div className="cases-stage-free">
    <div className="free-nav-bar"><MotionButton className="free-back-btn" onClick={onBack}><ChevronLeft size={16} />Day 4 Prototype</MotionButton><div className="free-case-switcher">{uxComparisons.map((comparison, i) => <MotionButton indicator="ux-case-tab" active={index === i} key={comparison.after} className={`free-case-tab ${index === i ? 'active' : ''}`} onClick={() => onChange(i)} aria-pressed={index === i}><span className="tab-num">0{i + 1}</span><span className="tab-name">{comparison.after} {comparison.need}</span></MotionButton>)}</div></div>
    <MotionSwitch className="free-showcase-canvas" motionKey={index}>
      <div className="free-editorial-column">
        <div className="free-case-headline"><div className="free-meta-line"><span className="free-stage-label">DAY 4 {item.need}</span><span className="free-theory-label">{item.before} dan {item.after}</span></div><h1 className="free-display-title">{item.title}</h1></div>
        <div className="free-narrative-flow">{[['issue', 'SEBELUM', item.original], ['fix', 'USULAN PERUBAHAN', item.proposal], ['result', 'ALASAN PERUBAHAN', item.reason]].map(([style, label, text]) => <div className={`free-narrative-item ${style}`} key={label}><div className="narrative-tag">{label}</div><p className="narrative-text">{text}</p></div>)}</div>
        <p className="ux-small"><b>Pola yang dipertahankan:</b> {item.kept}</p>
        <div className="free-controls-bar"><span>Perubahan <b>{index + 1}</b> / 4</span><div className="free-btn-group"><MotionButton className="free-nav-arrow" disabled={index === 0} onClick={() => onChange(index - 1)} aria-label="Perubahan sebelumnya"><ChevronLeft size={18} /></MotionButton><MotionButton className="free-nav-arrow primary" disabled={index === 3} onClick={() => onChange(index + 1)} aria-label="Perubahan berikutnya"><ChevronRight size={18} /></MotionButton></div></div>
        <MotionLink className="ux-download" href={uxDays[3].source} download><Download size={16} />Laporan Day 4 bagian 4.3 sampai 4.6</MotionLink>
      </div>
      <div className="free-mockups-stage">{[['asli', 'SCREENSHOT ASLI', item.before, 'jpeg'], ['fiksasi', 'WIREFRAME USULAN', item.after, 'png']].map(([style, label, code, ext]) => <MotionCard className="free-phone-wrapper" key={code} delay={style === 'fiksasi' ? 0.08 : 0}><figcaption className={`free-phone-label ${style}`}><span className="label-status">{label}</span><span className="label-sub">{code}</span></figcaption><img className="ux-screen-image" src={`/ux/${code}.${ext}`} alt={`${code}: ${label.toLowerCase()} untuk ${item.title}`} /></MotionCard>)}</div>
    </MotionSwitch>
  </div>;
}

export default function PageUX() {
  const [page, setPage] = useState('proses');
  const [dayIndex, setDayIndex] = useState(0);
  const [caseIndex, setCaseIndex] = useState(0);
  const day = uxDays[dayIndex];
  const selectDay = index => {setDayIndex(index); document.querySelector('.imk-main-canvas')?.scrollTo({ top: 0 });};
  const selectCase = index => {setCaseIndex(index); setPage('kasus'); document.querySelector('.imk-main-canvas')?.scrollTo({ top: 0 });};

  return <div className="ux-workspace">
    <nav className="tugas1-nav-bar ux-nav" aria-label="Halaman Tugas 2"><div className="tugas1-nav-tabs">{[['proses', Layers, 'Ringkasan Laporan Proses UX', 'Day 1 sampai 5'], ['kasus', Smartphone, 'Rancang Ulang', '4 Wireframe']].map(([id, Icon, label, sub]) => <MotionButton indicator="ux-page-tab" active={page === id} key={id} className={`tugas1-tab-btn ${page === id ? 'active' : ''}`} onClick={() => setPage(id)} aria-pressed={page === id}><Icon size={20} /><span><span className="ux-nav-label-full">{label}</span><span className="ux-nav-label-short">{id === 'proses' ? 'Ringkasan UX' : label}</span><span className="tab-sub-text"> ({sub})</span></span></MotionButton>)}</div></nav>
    <MotionSwitch motionKey={page} className="portal-page-motion">
    {page === 'kasus' ? <Comparison index={caseIndex} onChange={setCaseIndex} onBack={() => {setPage('proses'); selectDay(3);}} /> : <div className="summary-free-canvas ux-body">
      <MotionReveal className="free-hero-header"><div className="hero-text-block"><span className="free-tagline">TUGAS 2 IMK. USER-CENTERED DESIGN</span><h1 className="free-hero-title">Ringkasan Laporan Proses UX Day 1 sampai 5</h1><p className="free-hero-sub">Token Jelas. Biaya dan status dalam satu alur. Kegiatan, hasil, dan deliverable berdasarkan laporan revisi PLN Mobile.</p></div><div className="free-stat-ribbon"><div className="free-stat-unit"><span className="stat-label">BUKTI LAYAR</span><strong className="stat-value">13 Screenshot</strong></div><div className="stat-divider" /><div className="free-stat-unit"><span className="stat-label">CAKUPAN</span><strong className="stat-value text-teal">Biaya dan Status</strong></div></div></MotionReveal>
      <div className="free-timeline-track ux-day-track" aria-label="Hari kegiatan">{uxDays.map((item, index) => <MotionButton indicator="ux-day-tab" active={dayIndex === index} key={item.day} className={`timeline-step-btn ${dayIndex === index ? 'active' : ''}`} onClick={() => selectDay(index)} aria-label={`Day ${item.day}. ${item.stage}`} aria-pressed={dayIndex === index}><span className="step-circle">{item.day}</span><span className="step-title ux-day-label-full">{item.stage}</span><span className="step-title ux-day-label-short">{['Pahami', 'Masalah', 'Ide', 'Desain', 'Evaluasi'][index]}</span></MotionButton>)}</div>
      <MotionSwitch motionKey={`${page}-${day.day}`} className="ux-day-motion">
        <DayReport day={day} onSelectCase={selectCase} />
      </MotionSwitch>
      {page === 'proses' && dayIndex < 4 && <MotionButton className="free-cta-btn ux-next-day" onClick={() => selectDay(dayIndex + 1)}>Lanjut Day {day.day + 1}<ArrowRight size={17} /></MotionButton>}
    </div>}
    </MotionSwitch>
  </div>;
}
