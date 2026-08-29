import React from 'react';
import { Phone, Mail, MapPin, Heart, Shield, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO, NAV_ITEMS, VERIFIED_SERVICES } from '../data/hospitalData';
import { HospitalLogo } from './HospitalLogo';

interface FooterProps {
  onOpenGuidelines?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuidelines }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#072B45] text-white/80 border-t border-[#0A3D62]" id="footer">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Hospital Identity & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <HospitalLogo variant="dark" size="md" />
            <p className="text-xs text-white/70 leading-relaxed max-w-sm pt-2">
              A community-focused healthcare and dental complex in Multan, Pakistan, dedicated to providing accessible, subsidized outpatient medical care, clinical support, and dental treatments.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-white/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91E27]" />
              <span>Serving Samijabad, Pira Gaib Road & Multan</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-3.5 bg-[#D91E27]" />
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">
                Quick Navigation
              </h4>
            </div>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-white/70"
                  >
                    <span className="text-[#D91E27]">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              {onOpenGuidelines && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenGuidelines}
                    className="text-white/90 hover:text-white hover:underline flex items-center gap-1.5 cursor-pointer text-left font-medium"
                  >
                    <span className="text-[#D91E27]">›</span>
                    <span>Visiting Patient Guidelines</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Contact & Verified Location */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-3.5 bg-[#D91E27]" />
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">
                Multan Location & Contact
              </h4>
            </div>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D91E27] flex-shrink-0 mt-0.5" />
                <span>
                  {HOSPITAL_INFO.address}, {HOSPITAL_INFO.city}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#D91E27] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${HOSPITAL_INFO.phones[0]}`} className="hover:text-white block font-bold text-white">
                    {HOSPITAL_INFO.phones[0]} (Landline)
                  </a>
                  <a href={`tel:${HOSPITAL_INFO.phones[1]}`} className="hover:text-white block font-bold text-white">
                    {HOSPITAL_INFO.phones[1]} (Mobile)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D91E27] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`mailto:${HOSPITAL_INFO.emails[0]}`} className="hover:text-white block">
                    {HOSPITAL_INFO.emails[0]}
                  </a>
                  <a href={`mailto:${HOSPITAL_INFO.emails[1]}`} className="hover:text-white block text-white/50">
                    {HOSPITAL_INFO.emails[1]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subsidized Care Statement Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>
            © {new Date().getFullYear()} Rasheed Hospital & Dental Complex. All rights reserved. Subsidized community healthcare facility.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Multan, Punjab, Pakistan</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-[#0A3D62] hover:bg-[#D91E27] text-white rounded-xs transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
