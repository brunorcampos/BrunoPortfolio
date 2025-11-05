import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

interface NavigationProps {
  theme?: 'dark' | 'light';
}

export function Navigation({ theme = 'dark' }: NavigationProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const isDark = theme === 'dark';

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b ${isDark ? 'bg-black/20 border-white/10' : 'bg-white/95 border-slate-200'}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className={`hover:opacity-80 transition-opacity ${isDark ? 'text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text' : 'text-slate-900'}`}
            style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '0.1em' }}
          >
            BRUNO CAMPOS
          </button>
          
          {/* Right Side Info */}
          <div className="flex items-center gap-8">
            <div className={`hidden md:flex items-center gap-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} style={{ fontSize: '14px', fontWeight: 500 }}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Amsterdam, NL</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Amsterdam' })} CET</span>
              </div>
            </div>
            
            {/* Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-60 transition-opacity"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 transition-all ${isDark ? 'bg-white' : 'bg-slate-900'}`} style={{ transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }}></span>
              <span className={`w-6 h-0.5 transition-all ${isDark ? 'bg-white' : 'bg-slate-900'}`} style={{ opacity: menuOpen ? 0 : 1 }}></span>
              <span className={`w-6 h-0.5 transition-all ${isDark ? 'bg-white' : 'bg-slate-900'}`} style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center overflow-hidden">
          <div className="text-center space-y-8 px-4">
            <button
              onClick={() => handleNavigation('/')}
              className="block text-white hover:text-transparent hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text transition-all w-full"
              style={{ fontSize: 'clamp(32px, 10vw, 48px)', fontWeight: 700 }}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/work')}
              className="block text-white hover:text-transparent hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text transition-all w-full"
              style={{ fontSize: 'clamp(32px, 10vw, 48px)', fontWeight: 700 }}
            >
              Work
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="block text-white hover:text-transparent hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text transition-all w-full"
              style={{ fontSize: 'clamp(32px, 10vw, 48px)', fontWeight: 700 }}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/cv')}
              className="block text-white hover:text-transparent hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text transition-all w-full"
              style={{ fontSize: 'clamp(32px, 10vw, 48px)', fontWeight: 700 }}
            >
              CV
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block text-white hover:text-transparent hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text transition-all w-full"
              style={{ fontSize: 'clamp(32px, 10vw, 48px)', fontWeight: 700 }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
