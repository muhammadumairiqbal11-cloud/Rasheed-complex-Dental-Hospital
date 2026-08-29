import React from 'react';
import { HeartHandshake, Sparkles, Stethoscope } from 'lucide-react';

export const CommunityHighlights: React.FC = () => {
  return (
    <section className="bg-[#F9F9F9] py-16 lg:py-20 border-b border-gray-100" id="highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-200">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D91E27] uppercase block mb-1">
              Primary Focus Areas
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#0A3D62]">
              Compassionate Care <span className="font-bold italic font-serif">Centered on People</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#636E72] max-w-md mt-2 md:mt-0">
            Every service at Rasheed Hospital & Dental Complex is structured to be dependable, straightforward, and financially accessible.
          </p>
        </div>

        {/* 3 Editorial Horizontal Blocks with Vertical Line Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Subsidized Care */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-gray-100 shadow-2xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#D91E27]" />
                <span className="text-[11px] font-bold text-[#D91E27] uppercase tracking-widest">Pillar 01</span>
              </div>
              <h4 className="text-lg font-bold text-[#0A3D62] uppercase tracking-tight mb-2">
                Subsidized & Affordable Access
              </h4>
              <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed mb-4">
                Healthcare designed for everyday families. We offer subsidized consultation fees and prioritize patient welfare above all else.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A3D62]">
              <span>Subsidized OPD Slips</span>
              <span className="text-[#D91E27]">●</span>
            </div>
          </div>

          {/* Pillar 2: Dental Care Unit */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-gray-100 shadow-2xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#0A3D62]" />
                <span className="text-[11px] font-bold text-[#0A3D62] uppercase tracking-widest">Pillar 02</span>
              </div>
              <h4 className="text-lg font-bold text-[#0A3D62] uppercase tracking-tight mb-2">
                Dedicated Dental Care Unit
              </h4>
              <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed mb-4">
                A clean dental operatory providing checkups, preventative scaling, tooth extractions, and restorative procedures with sterile instrumentation.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A3D62]">
              <span>Oral Hygiene & Surgery</span>
              <span className="text-[#0A3D62]">●</span>
            </div>
          </div>

          {/* Pillar 3: Basic Clinical Support */}
          <div className="bg-white p-6 sm:p-8 rounded-sm border border-gray-100 shadow-2xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#0A3D62]" />
                <span className="text-[11px] font-bold text-[#0A3D62] uppercase tracking-widest">Pillar 03</span>
              </div>
              <h4 className="text-lg font-bold text-[#0A3D62] uppercase tracking-tight mb-2">
                Essential Clinical Support
              </h4>
              <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed mb-4">
                Outpatient support including routine blood pressure monitoring, prescribed injection administration, and supportive IV drip management.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A3D62]">
              <span>Vital Checks & Injections</span>
              <span className="text-[#0A3D62]">●</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

