import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Compass, Heart, HelpCircle, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS, HOSPITAL_INFO } from '../data/hospitalData';
import { HospitalLogo } from './HospitalLogo';

interface NavbarProps {
  onOpenGuidelines?: () => void;
  onOpenGallery?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGuidelines,
  onOpenGallery
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('rasheed-theme');
    const darkMode = savedTheme === 'dark';

    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? 'light' : 'dark';
    const nextDarkMode = nextTheme === 'dark';

    setIsDarkMode(nextDarkMode);
    localStorage.setItem('rasheed-theme', nextTheme);

    document.documentElement.classList.toggle('dark', nextDarkMode);

    if (nextDarkMode && 'vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch {
        // Vibration is optional.
      }
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'guidelines' && onOpenGuidelines) {
      onOpenGuidelines();
      return;
    }

    if (id === 'gallery' && onOpenGallery) {
      const element = document.getElementById('gallery');

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      return;
    }

    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=30.2044816,71.5260072';

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-xs border-b border-gray-200'
          : 'bg-white border-b border-gray-100'
      }`}
      id="main-navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center group py-1"
            title="Rasheed Hospital & Dental Complex"
          >
            <HospitalLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) =>
                    handleNavClick(e, item.href, item.id)
                  }
                  className={`text-[13px] font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#0A3D62] font-semibold border-b-2 border-[#0A3D62]'
                      : 'text-[#636E72] hover:text-[#0A3D62]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Area */}
          <div className="hidden sm:flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle inline-flex items-center justify-center w-9 h-9 rounded-sm border border-gray-200 bg-white text-[#0A3D62] hover:bg-[#E8F1F8] hover:border-[#0A3D62]/30 active:scale-95 transition-all duration-200"
              aria-label={
                isDarkMode
                  ? 'Switch to Light Mode'
                  : 'Switch to Dark Mode'
              }
              title={
                isDarkMode
                  ? 'Switch to Light Mode'
                  : 'Switch to Dark Mode'
              }
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Phone */}
            <a
              href={`tel:${HOSPITAL_INFO.phones[0]}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0A3D62] border border-[#0A3D62]/30 hover:bg-[#E8F1F8] rounded-sm transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D91E27]" />
              <span>061-6560560</span>
            </a>

            {/* Get Directions */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D91E27] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#b51921] transition-colors rounded-sm shadow-2xs"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center lg:hidden gap-2">

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle p-2 rounded-sm border border-gray-200 bg-white text-[#0A3D62] hover:bg-[#E8F1F8] active:scale-95 transition-all duration-200"
              aria-label={
                isDarkMode
                  ? 'Switch to Light Mode'
                  : 'Switch to Dark Mode'
              }
              title={
                isDarkMode
                  ? 'Switch to Light Mode'
                  : 'Switch to Dark Mode'
              }
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Call */}
            <a
              href={`tel:${HOSPITAL_INFO.phones[0]}`}
              className="p-2 text-[#0A3D62] bg-[#E8F1F8] rounded-sm border border-sky-200 sm:hidden"
              aria-label="Call Hospital"
            >
              <PhoneCall className="w-4 h-4 text-[#D91E27]" />
            </a>

            {/* Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-sm border border-slate-200 focus:outline-hidden active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">

          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) =>
                    handleNavClick(e, item.href, item.id)
                  }
                  className={`px-3 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#E8F1F8] text-[#0A3D62]'
                      : 'text-[#636E72] hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D91E27]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-2">

            <div className="p-3 bg-[#F9F9F9] rounded-sm text-xs text-[#636E72] space-y-1 border border-gray-100">
              <p className="font-bold text-[#0A3D62] uppercase tracking-wider text-[11px]">
                Rasheed Hospital & Dental Complex
              </p>

              <p className="text-[11px]">
                {HOSPITAL_INFO.address}, Multan
              </p>

              <p className="text-[#D91E27] font-semibold text-[11px]">
                061-6560560 / 0328-6560560
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">

              {/* Mobile Call */}
              <a
                href={`tel:${HOSPITAL_INFO.phones[0]}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-gray-200 text-[#0A3D62] rounded-sm text-xs font-bold uppercase tracking-wider"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D91E27]" />
                Call Now
              </a>

              {/* Mobile Directions */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#D91E27] hover:bg-[#b51921] text-white rounded-sm text-xs font-bold uppercase tracking-wider"
              >
                Directions
              </a>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};
