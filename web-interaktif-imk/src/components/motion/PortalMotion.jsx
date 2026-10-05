import React from 'react';
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'motion/react';
import './portal-motion.css';

const ease = [0.22, 1, 0.36, 1];
const spring = { type: 'spring', stiffness: 380, damping: 30, mass: 0.7 };

export function PortalMotionProvider({ children }) {
  return <LazyMotion features={domAnimation} strict><MotionConfig reducedMotion="user" transition={{ duration: 0.28, ease }}>{children}</MotionConfig></LazyMotion>;
}

export function MotionButton({ children, disabled, indicator, active, stationary = false, className = '', ...props }) {
  const reduced = useReducedMotion();
  return <m.button {...props} disabled={disabled} className={`portal-motion-button ${className}`} whileHover={disabled || reduced || stationary ? undefined : { y: -1, scale: 1.015 }} whileTap={disabled || reduced || stationary ? undefined : { scale: 0.97 }} transition={reduced ? { duration: 0 } : spring}>
    {indicator && <AnimatePresence initial={false}>{active && <m.span className="portal-active-line" layoutId={reduced ? undefined : indicator} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={reduced ? { duration: 0 } : spring} />}</AnimatePresence>}
    {children}
  </m.button>;
}

export function MotionLink({ children, className = '', ...props }) {
  const reduced = useReducedMotion();
  return <m.a {...props} className={`portal-motion-link ${className}`} whileHover={reduced ? undefined : { y: -1 }} whileTap={reduced ? undefined : { scale: 0.98 }} transition={reduced ? { duration: 0 } : spring}>{children}</m.a>;
}

export function MotionSection({ children, delay = 0, className = '', ...props }) {
  const reduced = useReducedMotion();
  return <m.section {...props} className={`portal-motion-section ${className}`} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0 : 0.42, delay: reduced ? 0 : delay, ease }}>{children}</m.section>;
}

export function MotionCard({ children, className = '', delay = 0, ...props }) {
  const reduced = useReducedMotion();
  return <m.div {...props} className={`portal-motion-card ${className}`} initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: reduced ? 0 : 0.36, delay: reduced ? 0 : delay, ease }} whileHover={reduced ? undefined : { y: -3 }}>{children}</m.div>;
}

export function MotionReveal({ children, className = '', delay = 0, as = 'div', ...props }) {
  const reduced = useReducedMotion();
  const Tag = m[as];
  return <Tag {...props} className={className} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : delay, ease }}>{children}</Tag>;
}

export function MotionSwitch({ children, motionKey, className = '', direction = 1 }) {
  const reduced = useReducedMotion();
  const distance = reduced ? 0 : 14 * direction;
  return <AnimatePresence mode="wait" initial={false}><m.div key={motionKey} className={className} initial={reduced ? false : { opacity: 0, x: distance }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: reduced ? 1 : 0, x: -distance }} transition={{ duration: reduced ? 0 : 0.2, ease }}>{children}</m.div></AnimatePresence>;
}

export function MotionPopover({ children, open, className = '' }) {
  const reduced = useReducedMotion();
  return <AnimatePresence>{open && <m.div className={className} initial={reduced ? false : { opacity: 0, y: -6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduced ? { opacity: 1 } : { opacity: 0, y: -4, scale: 0.98 }} transition={{ duration: reduced ? 0 : 0.16, ease }} style={{ transformOrigin: 'top left' }}>{children}</m.div>}</AnimatePresence>;
}
