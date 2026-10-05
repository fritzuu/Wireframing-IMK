import test from 'node:test';
import assert from 'node:assert/strict';
import { canVisit, createPrototypeState, demoAdmin, prototypeReducer, prototypeScreens, sketchLinks } from './uxPrototype.js';

const apply = (state, ...actions) => actions.reduce(prototypeReducer, state);
const navigate = screen => ({ type: 'NAVIGATE', screen });
const select = amount => ({ type: 'SELECT_AMOUNT', amount });

test('purchase flow keeps the selected amount and total through payment details and active orders', () => {
  const state = apply(createPrototypeState(), navigate('T1'), select(10000), navigate('T2'), { type: 'CREATE_ORDER' }, navigate('A1'));
  assert.equal(state.screen, 'A1');
  assert.deepEqual(state.order, { amount: 10000, total: 11750, status: 'waiting', number: 1 });
  assert.equal(demoAdmin, 1750);
});

test('review is blocked before selecting a supported amount; double submission makes one order', () => {
  const empty = apply(createPrototypeState('T1'), navigate('T2'), { type: 'CREATE_ORDER' }, select(-5000));
  assert.equal(empty.screen, 'T1');
  assert.equal(empty.amount, null);
  assert.equal(empty.order, null);
  const created = apply(empty, select(5000), navigate('T2'), { type: 'CREATE_ORDER' }, { type: 'CREATE_ORDER' });
  assert.equal(created.order.total, 6750);
  assert.equal(created.orderCount, 1);
});

test('back and change-selection routes keep the previous nominal', () => {
  const review = apply(createPrototypeState('T1'), select(25000), navigate('T2'));
  assert.equal(apply(review, { type: 'BACK' }).amount, 25000);
  assert.equal(apply(review, navigate('T1')).amount, 25000);
});

test('history recovery leads to active orders, manual expiry, and a fresh order', () => {
  const expired = apply(createPrototypeState('H0', 'B'), navigate('R1'), navigate('A1'), { type: 'SET_STATUS', status: 'expired' });
  assert.equal(expired.screen, 'A2');
  assert.equal(expired.order.status, 'expired');
  const fresh = apply(expired, { type: 'NEW_ORDER' }, select(15000), navigate('T2'), { type: 'CREATE_ORDER' });
  assert.equal(fresh.order.total, 16750);
  assert.equal(fresh.order.status, 'waiting');
  assert.equal(fresh.order.number, 2);
});

test('expiry requires the demo control; changing status and going back never revives an invalid expired screen', () => {
  const active = createPrototypeState('A1');
  assert.equal(canVisit(active, 'A2'), false);
  assert.equal(apply(active, navigate('A2')).screen, 'A1');
  const checked = apply(active, { type: 'SET_STATUS', status: 'checking' });
  assert.equal(checked.order.status, 'checking');
  const waiting = apply(checked, { type: 'SET_STATUS', status: 'expired' }, { type: 'SET_STATUS', status: 'waiting' }, { type: 'BACK' });
  assert.notEqual(waiting.screen, 'A2');
});

test('sketch entry points seed appropriate example orders; reset clears the demo', () => {
  for (const screen of ['A1', 'A2', 'R1']) assert.ok(createPrototypeState(screen).order);
  assert.equal(createPrototypeState('A2').order.status, 'expired');
  const reset = apply(createPrototypeState('A2'), { type: 'RESET' });
  assert.equal(reset.screen, 'H0');
  assert.equal(reset.order, null);
  assert.equal(reset.amount, null);
});

test('an existing order keeps its amount when a different next order is being selected', () => {
  const state = apply(createPrototypeState('A1'), { type: 'NEW_ORDER' }, select(50000), navigate('T3'));
  assert.equal(state.amount, 50000);
  assert.equal(state.order.amount, 5000);
  assert.equal(state.order.total, 6750);
});

test('all original sketch click areas stay inside their images and lead to supported actions', () => {
  for (const links of Object.values(sketchLinks)) for (const link of links) {
    const [x, y, width, height] = link.rect;
    assert.ok(x >= 0 && y >= 0 && x + width <= 710 && y + height <= 1600, link.label);
    if (link.action.type === 'NAVIGATE') assert.ok(prototypeScreens[link.action.screen], link.label);
    else assert.equal(link.action.type, 'NEW_ORDER');
  }
  assert.ok(sketchLinks.A2.every(link => link.action.screen !== 'T3'));
});
