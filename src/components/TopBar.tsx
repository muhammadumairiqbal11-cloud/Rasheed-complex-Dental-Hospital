import React from 'react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0A3D62] text-white text-[11px] uppercase tracking-[0.1em] font-medium border-b border-[#08314e]" id="top-info-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Address & City */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 opacity-95">
              <span>📍</span>
              <span>{HOSPITAL_INFO.address}, {HOSPITAL_INFO.city}</span>
            </span>
            <span className="hidden lg:inline text-white/50">•</span>
            <span className="hidden lg:flex items-center gap-1.5 opacity-90">
              <span className="text-[#FF4D4D]">●</span>
              <span>Affordable Community Healthcare</span>
            </span>
          </div>

          {/* Contact Numbers & Email */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a
                href={`tel:${HOSPITAL_INFO.phones[0]}`}
                className="hover:underline font-semibold"
                title="Call Multan Landline"
              >
                {HOSPITAL_INFO.phones[0]}
              </a>
              <span className="text-white/40">/</span>
              <a
                href={`tel:${HOSPITAL_INFO.phones[1]}`}
                className="hover:underline font-semibold"
                title="Call Mobile Line"
              >
                {HOSPITAL_INFO.phones[1]}
              </a>
            </div>

            <span className="text-white/40 hidden md:inline">|</span>

            <span className="hidden sm:inline text-white/90">
              Multan, Pakistan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

