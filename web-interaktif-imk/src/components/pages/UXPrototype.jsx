import React, { useEffect, useReducer, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BatteryFull, Clock, Copy, Eye, EyeOff, Home, RotateCcw, Wifi, X } from 'lucide-react';
import { MotionButton, MotionSwitch } from '../motion/PortalMotion';
import {
  canVisit, createPrototypeState, demoAdmin, demoDeadline, demoPaymentNumber, demoTimeLeft,
  prototypeFlows, prototypeReducer, prototypeScreens, rectangleStyle, rupiah, sketchLinks, tokenAmounts,
} from '../../data/uxPrototype';
import './ux-prototype.css';

const statusNames = { waiting: 'Menunggu Pembayaran', checking: 'Sedang Diperiksa', expired: 'Kedaluwarsa' };
const go = screen => ({ type: 'NAVIGATE', screen });

export default function UXPrototype({ initialScreen = 'H0', onClose }) {
  const dialog = useRef(null);
  const [state, dispatch] = useReducer(prototypeReducer, initialScreen, createPrototypeState);
  const [showAreas, setShowAreas] = useState(true);
  const [notice, setNotice] = useState('');
  const screen = prototypeScreens[state.screen];
  const act = action => { setNotice(''); dispatch(action); };

  useEffect(() => { if (dialog.current && !dialog.current.open) dialog.current.showModal(); }, []);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(demoPaymentNumber);
      setNotice('Nomor pembayaran demo sudah disalin.');
    } catch {
      setNotice(`Nomor pembayaran demo: ${demoPaymentNumber}`);
    }
  };

  return <dialog ref={dialog} className="ux-prototype" aria-labelledby="ux-prototype-title" onCancel={onClose} onClose={onClose}>
    <header className="ux-prototype-toolbar">
      <div><h2 id="ux-prototype-title">Simulasi Token Jelas</h2><span>Data demo. Tidak ada pembayaran nyata.</span></div>
      <div className="ux-prototype-tools">
        <MotionButton onClick={() => setShowAreas(value => !value)} aria-pressed={showAreas} title="Tampilkan area yang bisa diklik">{showAreas ? <Eye size={18} /> : <EyeOff size={18} />}<span>Area klik</span></MotionButton>
        <MotionButton onClick={() => act({ type: 'RESET' })} title="Ulangi simulasi dari beranda"><RotateCcw size={18} /><span>Ulangi</span></MotionButton>
        <MotionButton onClick={onClose} aria-label="Tutup simulasi"><X size={22} /></MotionButton>
      </div>
    </header>
    <div className="ux-prototype-workspace">
      <aside className="ux-prototype-guide">
        <span className="dgti-code">PILIH ALUR</span>
        <div className="ux-prototype-flow-buttons">
          <MotionButton active={state.scenario === 'A'} aria-pressed={state.scenario === 'A'} onClick={() => act({ type: 'START_FLOW', scenario: 'A' })}>A. Beli token</MotionButton>
          <MotionButton active={state.scenario === 'B'} aria-pressed={state.scenario === 'B'} onClick={() => act({ type: 'START_FLOW', scenario: 'B' })}>B. Cek pesanan</MotionButton>
        </div>
        <div className="ux-prototype-current" aria-live="polite"><strong>{screen.title}</strong><p>{screen.hint}</p></div>
        <details className="ux-prototype-guide-details">
          <summary>Panduan dan kontrol demo</summary>
          <ol className="ux-prototype-flow">
            {prototypeFlows[state.scenario].map((code, index) => <li key={`${code}-${index}`}><MotionButton aria-current={state.screen === code ? 'step' : undefined} disabled={!canVisit(state, code)} onClick={() => act(go(code))}><span>{index + 1}</span>{prototypeScreens[code].title}</MotionButton></li>)}
          </ol>
          <div className="ux-prototype-status-controls">
            <span className="dgti-code">KEADAAN PESANAN DEMO</span>
            {Object.entries(statusNames).map(([status, label]) => <MotionButton key={status} disabled={!state.order} aria-pressed={state.order?.status === status} onClick={() => act({ type: 'SET_STATUS', status })}>{label}</MotionButton>)}
            {!state.order && <p>Buat pesanan atau pilih alur B untuk mencoba status.</p>}
          </div>
          <p className="ux-small">Empat sketsa asli dipakai untuk simulasi. Beranda, tinjauan, detail pembayaran, dan bantuan melengkapi alur pada laporan Hari 4. Nomor dan waktu adalah contoh tetap.</p>
        </details>
        <MotionButton className="ux-prototype-back" onClick={() => act({ type: 'BACK' })} disabled={state.screen === 'H0' && !state.history.length}><ArrowLeft size={16} />Kembali satu layar</MotionButton>
        {notice && <p className="ux-prototype-notice" role="status">{notice}</p>}
      </aside>
      <div className="ux-prototype-stage">
        <div className={`ux-prototype-phone ${showAreas ? 'show-click-areas' : ''}`}>
          <MotionSwitch motionKey={state.screen} className="ux-prototype-screen-motion">
            <PrototypeScreen state={state} onAction={act} onCopy={copyNumber} />
          </MotionSwitch>
        </div>
        <p className="ux-prototype-caption">Klik tombol pada layar untuk melanjutkan.</p>
      </div>
    </div>
  </dialog>;
}

export function PrototypeScreen({ state, onAction, onCopy }) {
  if (sketchLinks[state.screen] && !(state.screen === 'A1' && !state.order)) {
    return <div className="ux-prototype-sketch">
      <img className="ux-prototype-base" src={`/ux/${state.screen}.png`} alt={`Sketsa ${prototypeScreens[state.screen].title}`} draggable="false" />
      {sketchLinks[state.screen].map(link => <MotionButton className="ux-prototype-hotspot" style={rectangleStyle(link.rect)} key={link.label} aria-label={link.label} title={link.label} onClick={() => onAction(link.action)} />)}
      {state.screen === 'T1' && <>
        {tokenAmounts.map((amount, index) => <MotionButton className={`ux-prototype-amount ${state.amount === amount ? 'selected' : ''}`} key={amount} aria-pressed={state.amount === amount} style={rectangleStyle([index % 2 ? 370 : 44, 713 + Math.floor(index / 2) * 128, 296, 104])} onClick={() => onAction({ type: 'SELECT_AMOUNT', amount })}>{rupiah(amount)}</MotionButton>)}
        <div className="ux-prototype-cost-footer" style={rectangleStyle([0, 1240, 710, 360])}>
          <span className="ux-prototype-method">Metode pembayaran. BCA Virtual Account</span>
          <div><span>Total Biaya</span><strong>{state.amount ? rupiah(state.amount + demoAdmin) : 'Pilih nominal'}</strong></div>
          <small>{state.amount ? `Token ${rupiah(state.amount)} + admin ${rupiah(demoAdmin)}` : 'Pilih nominal token untuk melihat rincian biaya.'}</small>
          <MotionButton className="ux-prototype-primary" disabled={!state.amount} onClick={() => onAction(go('T2'))}>Selanjutnya<ArrowRight size={16} /></MotionButton>
        </div>
      </>}
      {['A1', 'A2'].includes(state.screen) && <>
        <div className="ux-prototype-image-text ux-prototype-image-heading" style={rectangleStyle([55, 603, 600, 42])}>Token Listrik {rupiah(state.order.amount)}</div>
        <div className="ux-prototype-image-text" style={rectangleStyle([90, 687, 300, 40])}>{rupiah(state.order.amount)}</div>
        {state.screen === 'A1' && state.order.status === 'checking' && <>
          <div className="ux-prototype-image-status" style={rectangleStyle([56, 742, 598, 84])}>Pembayaran demo sedang diperiksa.<br />Tunggu konfirmasi status.</div>
          <div className="ux-prototype-image-text" style={rectangleStyle([55, 882, 350, 55])}>Sedang Diperiksa</div>
          <MotionButton className="ux-prototype-primary ux-prototype-image-button" style={rectangleStyle([428, 876, 226, 69])} onClick={() => onAction(go('T3'))}>Lihat Detail</MotionButton>
        </>}
        {state.screen === 'A2' && <div className="ux-prototype-image-status" style={rectangleStyle([56, 742, 598, 84])}>Masa pembayaran demo telah berakhir<br />Total pembayaran: {rupiah(state.order.total)}</div>}
      </>}
    </div>;
  }

  return <div className="ux-prototype-dom-screen">
    <div className="ux-prototype-statusbar"><strong>8:23</strong><span><Wifi /><BatteryFull /></span></div>
    <header className="ux-prototype-app-header"><MotionButton aria-label="Kembali" onClick={() => onAction({ type: 'BACK' })}><ArrowLeft /></MotionButton><strong>{prototypeScreens[state.screen].title}</strong></header>
    <div className="ux-prototype-app-body">
      {state.screen === 'H0' && <>
        <div className="ux-prototype-customer"><span>PELANGGAN DEMO</span><h3>H S</h3><p>12345678901. Listrik prabayar</p><MotionButton className="ux-prototype-primary" onClick={() => onAction(go('T1'))}>Beli Token<ArrowRight size={16} /></MotionButton></div>
        <MotionButton className="ux-prototype-menu" onClick={() => onAction(go('A1'))}><Clock size={20} /><span>Pesanan Aktif<small>{state.order ? statusNames[state.order.status] : 'Belum ada pesanan'}</small></span><ArrowRight size={16} /></MotionButton>
        <MotionButton className="ux-prototype-menu" onClick={() => onAction(go('R1'))}><Home size={20} /><span>Riwayat dan Bantuan<small>Cari transaksi dan langkah berikutnya</small></span><ArrowRight size={16} /></MotionButton>
      </>}
      {state.screen === 'T2' && <>
        <h3>Periksa sebelum membuat pesanan</h3>
        <div className="ux-prototype-app-card"><span>PELANGGAN DEMO</span><strong>H S</strong><p>12345678901</p></div>
        <CostSummary amount={state.amount} />
        <MotionButton className="ux-prototype-secondary" onClick={() => onAction(go('T1'))}>Ubah Pilihan</MotionButton>
        <p className="ux-prototype-app-note">Lanjutkan Pembayaran membuat pesanan demo. Pembayaran belum berhasil.</p>
      </>}
      {state.screen === 'T3' && <>
        <div className={`ux-prototype-app-banner ${state.order.status === 'expired' ? 'expired' : ''}`}><strong>{statusNames[state.order.status]}</strong><p>{state.order.status === 'waiting' ? 'Pesanan dibuat. Pembayaran belum berhasil.' : state.order.status === 'expired' ? 'Batas pembayaran telah habis. Buat pesanan baru.' : 'Pembayaran demo sedang diperiksa.'}</p></div>
        <div className="ux-prototype-app-card"><span>BATAS PEMBAYARAN DEMO</span><strong>{demoDeadline}</strong><p>{state.order.status === 'expired' ? 'Masa berlaku habis' : `Sisa waktu demo ${demoTimeLeft}`}</p></div>
        <div className="ux-prototype-app-card"><span>BCA VIRTUAL ACCOUNT. DEMO</span><strong className="ux-prototype-payment-number">{demoPaymentNumber}</strong><MotionButton className="ux-prototype-secondary" onClick={onCopy}><Copy size={16} />Salin nomor demo</MotionButton></div>
        <CostSummary amount={state.order.amount} />
        <p className="ux-prototype-app-note">Pesanan DEMO-TOKEN-{String(state.order.number).padStart(3, '0')}. Tidak ada transaksi nyata.</p>
      </>}
      {state.screen === 'A1' && !state.order && <div className="ux-prototype-app-card"><h3>Belum ada pesanan aktif</h3><p>Pilih nominal token dan buat pesanan untuk mencoba alur.</p><MotionButton className="ux-prototype-primary" onClick={() => onAction(go('T1'))}>Beli Token</MotionButton></div>}
      {state.screen === 'B1' && <>
        <h3>Langkah sesuai status pesanan</h3>
        <div className="ux-prototype-app-card"><strong>Menunggu pembayaran</strong><p>Buka detail pesanan untuk melihat nomor pembayaran dan batas waktunya.</p></div>
        <div className="ux-prototype-app-card"><strong>Sedang diperiksa</strong><p>Tunggu konfirmasi status. Pesanan dibuat berbeda dengan pembayaran berhasil.</p></div>
        <div className="ux-prototype-app-card"><strong>Kedaluwarsa</strong><p>Nomor pembayaran lama tidak digunakan lagi. Buat pesanan baru untuk melanjutkan.</p></div>
        <MotionButton className="ux-prototype-secondary" onClick={() => onAction(go('A1'))}>Lihat Pesanan Aktif</MotionButton>
        <MotionButton className="ux-prototype-primary" onClick={() => onAction({ type: 'NEW_ORDER' })}>Buat Pesanan Baru</MotionButton>
      </>}
    </div>
    {state.screen === 'T2' ? <div className="ux-prototype-dom-footer"><MotionButton className="ux-prototype-primary" onClick={() => onAction({ type: 'CREATE_ORDER' })}>Lanjutkan Pembayaran<ArrowRight size={16} /></MotionButton></div>
      : state.screen === 'T3' ? <div className="ux-prototype-dom-footer"><MotionButton className="ux-prototype-primary" onClick={() => onAction(go('A1'))}>Pesanan Aktif<ArrowRight size={16} /></MotionButton></div>
      : <nav className="ux-prototype-bottom-nav" aria-label="Navigasi simulasi"><MotionButton onClick={() => onAction(go('H0'))}><Home size={17} />Beranda</MotionButton><MotionButton onClick={() => onAction(go('A1'))}><Clock size={17} />Pesanan</MotionButton><MotionButton onClick={() => onAction(go('R1'))}>Riwayat</MotionButton></nav>}
  </div>;
}

function CostSummary({ amount }) {
  return <dl className="ux-prototype-cost-summary"><div><dt>Nominal token</dt><dd>{rupiah(amount)}</dd></div><div><dt>Metode</dt><dd>BCA Virtual Account</dd></div><div><dt>Biaya admin</dt><dd>{rupiah(demoAdmin)}</dd></div><div><dt>Total Biaya</dt><dd>{rupiah(amount + demoAdmin)}</dd></div></dl>;
}
