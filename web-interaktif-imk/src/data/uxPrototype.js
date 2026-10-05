export const tokenAmounts = [5000, 10000, 15000, 20000, 25000, 50000, 100000, 150000];
export const demoAdmin = 1750;
export const demoPaymentNumber = '880012345678901';
export const paymentMethods = [
  { id: 'bca', label: 'BCA Virtual Account', admin: demoAdmin, paymentNumber: demoPaymentNumber },
  { id: 'bni', label: 'BNI Virtual Account', admin: demoAdmin, paymentNumber: '880022345678901' },
  { id: 'bri', label: 'BRI Virtual Account', admin: demoAdmin, paymentNumber: '880032345678901' },
  { id: 'mandiri', label: 'Mandiri Virtual Account', admin: demoAdmin, paymentNumber: '880042345678901' },
];
export const getPaymentMethod = id => paymentMethods.find(method => method.id === id);
export const demoDeadline = '30 September 2026, 23:40 WIB';
export const demoTimeLeft = '03:16:40';
export const rupiah = value => `Rp${new Intl.NumberFormat('id-ID').format(value)}`;

export const prototypeScreens = {
  H0: { title: 'Beranda', hint: 'Pilih Beli Token atau buka Riwayat dan Bantuan.' },
  T1: { title: 'Pemilihan token', hint: 'Pilih nominal dan metode pembayaran. Periksa admin dan total sebelum menekan Selanjutnya.' },
  T2: { title: 'Tinjauan pesanan', hint: 'Periksa biaya. Ubah Pilihan akan mengembalikan pilihan yang sama.' },
  T3: { title: 'Detail pembayaran', hint: 'Pesanan sudah dibuat. Pembayaran belum berhasil. Temukan nomor pembayaran dan batas waktu.' },
  A1: { title: 'Pesanan aktif', hint: 'Periksa status dan batas waktu. Bayar Sekarang membuka detail pembayaran demo.' },
  A2: { title: 'Pesanan kedaluwarsa', hint: 'Pesanan ini tidak bisa dibayar. Pilih Buat Pesanan Baru atau Bantuan Pembayaran.' },
  R1: { title: 'Riwayat transaksi', hint: 'Riwayat demo masih kosong. Cari pesanan yang belum dibayar lewat Pesanan Aktif.' },
  B1: { title: 'Bantuan pembayaran', hint: 'Temukan langkah yang sesuai dengan status pesanan, lalu kembali ke alur.' },
};

export const prototypeFlows = {
  A: ['H0', 'T1', 'T2', 'T3', 'A1'],
  B: ['H0', 'R1', 'A1', 'A2', 'T1'],
};

const demoOrder = (amount, status = 'waiting', number = 1, paymentMethod = 'bca') => {
  const method = getPaymentMethod(paymentMethod);
  return { amount, total: amount + method.admin, admin: method.admin, paymentMethod,
    paymentNumber: method.paymentNumber, status, number };
};

export function createPrototypeState(screen = 'H0', scenario = ['R1', 'A2'].includes(screen) ? 'B' : 'A') {
  const seeded = ['A1', 'A2', 'T3', 'R1'].includes(screen) || scenario === 'B';
  return {
    screen: prototypeScreens[screen] ? screen : 'H0',
    scenario,
    amount: seeded ? 5000 : null,
    paymentMethod: 'bca',
    order: seeded ? demoOrder(5000, screen === 'A2' ? 'expired' : 'waiting') : null,
    orderCount: seeded ? 1 : 0,
    history: [],
  };
}

export function canVisit(state, screen) {
  if (!prototypeScreens[screen]) return false;
  if (screen === 'T2') return tokenAmounts.includes(state.amount) && Boolean(getPaymentMethod(state.paymentMethod));
  if (screen === 'T3') return Boolean(state.order);
  if (screen === 'A2') return state.order?.status === 'expired';
  return true;
}

function navigate(state, screen) {
  if (!canVisit(state, screen)) return state;
  const target = screen === 'A1' && state.order?.status === 'expired' ? 'A2' : screen;
  if (target === state.screen) return state;
  return { ...state, screen: target, history: [...state.history, state.screen] };
}

export function prototypeReducer(state, action) {
  switch (action.type) {
    case 'NAVIGATE': return navigate(state, action.screen);
    case 'BACK': {
      const history = [...state.history];
      while (history.length) {
        let target = history.pop();
        if (target === 'A1' && state.order?.status === 'expired') target = 'A2';
        if (target === 'T2' && !state.amount) target = 'T1';
        if (target !== state.screen && canVisit(state, target)) return { ...state, screen: target, history };
      }
      return { ...state, screen: 'H0', history: [] };
    }
    case 'SELECT_AMOUNT': return tokenAmounts.includes(action.amount) ? { ...state, amount: action.amount } : state;
    case 'SELECT_PAYMENT_METHOD': return getPaymentMethod(action.paymentMethod) ? { ...state, paymentMethod: action.paymentMethod } : state;
    case 'CREATE_ORDER': {
      if (state.screen !== 'T2' || !canVisit(state, 'T2')) return state;
      const next = { ...state, order: demoOrder(state.amount, 'waiting', state.orderCount + 1, state.paymentMethod), orderCount: state.orderCount + 1 };
      return navigate(next, 'T3');
    }
    case 'SET_STATUS': {
      if (!state.order || !['waiting', 'checking', 'expired'].includes(action.status)) return state;
      const next = { ...state, order: { ...state.order, status: action.status } };
      if (action.status === 'expired') return navigate(next, 'A2');
      if (state.screen === 'A2') return navigate(next, 'A1');
      return next;
    }
    case 'NEW_ORDER': return navigate({ ...state, amount: null }, 'T1');
    case 'START_FLOW': return ['A', 'B'].includes(action.scenario) ? createPrototypeState('H0', action.scenario) : state;
    case 'RESET': return createPrototypeState();
    default: return state;
  }
}

// Coordinates follow the original 710 × 1600 sketches. They scale with the image.
export const sketchLinks = {
  T1: [
    { label: 'Kembali ke beranda', shape: 'icon', rect: [26, 96, 52, 52], action: { type: 'NAVIGATE', screen: 'H0' } },
  ],
  A1: [
    { label: 'Buka riwayat', shape: 'tab', rect: [226, 168, 112, 58], action: { type: 'NAVIGATE', screen: 'R1' } },
    { label: 'Bayar Sekarang. Buka detail pembayaran demo', shape: 'pill', rect: [428, 876, 226, 69], action: { type: 'NAVIGATE', screen: 'T3' } },
    { label: 'Lihat bantuan', shape: 'pill', rect: [56, 1293, 598, 69], action: { type: 'NAVIGATE', screen: 'B1' } },
    { label: 'Beranda', shape: 'nav', rect: [26, 1452, 90, 88], action: { type: 'NAVIGATE', screen: 'H0' } },
  ],
  A2: [
    { label: 'Buka riwayat', shape: 'tab', rect: [226, 168, 112, 58], action: { type: 'NAVIGATE', screen: 'R1' } },
    { label: 'Buat Pesanan Baru', shape: 'pill', rect: [392, 876, 266, 69], action: { type: 'NEW_ORDER' } },
    { label: 'Bantuan Pembayaran', shape: 'pill', rect: [30, 1195, 650, 69], action: { type: 'NAVIGATE', screen: 'B1' } },
    { label: 'Beranda', shape: 'nav', rect: [26, 1452, 90, 88], action: { type: 'NAVIGATE', screen: 'H0' } },
  ],
  R1: [
    { label: 'Buka Pesanan Aktif', shape: 'tab', rect: [30, 168, 158, 58], action: { type: 'NAVIGATE', screen: 'A1' } },
    { label: 'Lihat Pesanan Aktif', shape: 'pill', rect: [90, 1088, 530, 79], action: { type: 'NAVIGATE', screen: 'A1' } },
    { label: 'Bantuan Pembayaran', shape: 'pill', rect: [90, 1187, 530, 69], action: { type: 'NAVIGATE', screen: 'B1' } },
    { label: 'Beranda', shape: 'nav', rect: [26, 1452, 90, 88], action: { type: 'NAVIGATE', screen: 'H0' } },
  ],
};

export const rectangleStyle = ([x, y, width, height]) => ({
  left: `${x / 710 * 100}%`, top: `${y / 1600 * 100}%`,
  width: `${width / 710 * 100}%`, height: `${height / 1600 * 100}%`,
});
