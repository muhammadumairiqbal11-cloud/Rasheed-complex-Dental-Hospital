import React from 'react';
import { Heart, Building2, Users2, Shield } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-gray-100 relative" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Narrative & Subsidized Medicines Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-gray-100">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D91E27] uppercase block">
              Welcome to Rasheed Hospital & Dental Complex
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0A3D62] tracking-tight leading-snug">
              Subsidized Healthcare & Dental Care <br />
              <span className="font-bold italic font-serif">Centered on Human Dignity.</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#0A3D62]" />
            <p className="text-[#636E72] text-sm sm:text-base leading-relaxed">
              Located at <strong className="font-semibold text-[#0A3D62]">{HOSPITAL_INFO.address}, Multan</strong>, 
              Rasheed Hospital & Dental Complex was established to ensure that quality medical consultation, vital primary care, and modern dental treatments remain within reach of every local family.
            </p>
            <p className="text-[#636E72] text-xs sm:text-sm leading-relaxed">
              We maintain a selection of basic medicines provided at subsidized cost or free for deserving patients, ensuring treatment is never out of reach due to financial constraints.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F9F9F9] p-8 rounded-sm border border-gray-100 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-[10px] font-bold text-[#D91E27] uppercase tracking-widest mb-1">Affordable Health</p>
              <h3 className="text-2xl font-light text-[#0A3D62]">
                Subsidized <span className="font-bold italic font-serif">Medicines & Care</span>
              </h3>
              <p className="text-xs text-[#636E72] leading-relaxed mt-2">
                Outpatient consultations and first-line medicines structured specifically for accessibility in the Multan community.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between">
              <div>
                <p className="text-[32px] font-bold text-[#0A3D62] leading-none mb-1">Trusted</p>
                <p className="text-[10px] font-bold text-[#D91E27] uppercase tracking-widest">Community Healthcare</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-semibold text-[#0A3D62]">Multan, Punjab</span>
                <p className="text-[10px] text-[#636E72]">Pira Gaib Road</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Value Statements in Horizontal Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 text-left">
          <div className="flex items-start gap-3">
            <div className="w-1 h-8 bg-[#0A3D62] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A3D62] block">Affordability</span>
              <p className="text-xs text-[#636E72] leading-normal mt-0.5">
                Subsidized consultation fees designed for community access.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1 h-8 bg-[#D91E27] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A3D62] block">OPD Services</span>
              <p className="text-xs text-[#636E72] leading-normal mt-0.5">
                Routine medical checks, vital monitoring, and clinical guidance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1 h-8 bg-[#0A3D62] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A3D62] block">Dental Unit</span>
              <p className="text-xs text-[#636E72] leading-normal mt-0.5">
                Dedicated operatory for checkups, cleanings, and procedures.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-1 h-8 bg-[#D91E27] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A3D62] block">Multan Community</span>
              <p className="text-xs text-[#636E72] leading-normal mt-0.5">
                Serving local families in Samijabad & Pira Gaib Road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

