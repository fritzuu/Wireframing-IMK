import React from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Bell, 
  ChevronLeft, 
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function PhoneMockup({ 
  title, 
  time = "10:41", 
  battery = "12", 
  children,
  badge = null,
  activeBadgeId = null,
  onBadgeClick = () => {}
}) {
  return (
    <div className="phone-device-container">
      <div className="phone-device">
        {/* Outer Frame Bezel */}
        <div className="phone-bezel">
          {/* Top Speaker & Punch Hole Camera */}
          <div className="phone-notch-area">
            <div className="phone-speaker"></div>
            <div className="phone-camera-hole"></div>
          </div>

          {/* Status Bar */}
          <div className="phone-status-bar">
            <div className="status-left">
              <span className="status-time">{time}</span>
              <div className="status-app-icons">
                <span className="status-dot"></span>
                <span className="status-dot-sm"></span>
              </div>
            </div>
            <div className="status-right">
              <Signal size={13} className="status-icon" />
              <Wifi size={13} className="status-icon" />
              <div className="battery-indicator">
                <span className="battery-pct">{battery}</span>
                <Battery size={15} className="battery-icon" />
              </div>
            </div>
          </div>

          {/* Phone Scrollable Screen */}
          <div className="phone-screen-content">
            {children}
          </div>

          {/* Bottom Android Gesture Bar */}
          <div className="phone-bottom-nav-bar">
            <div className="gesture-home-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
