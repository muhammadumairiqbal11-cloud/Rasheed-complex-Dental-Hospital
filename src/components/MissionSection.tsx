import React from 'react';
import { Heart, ShieldCheck, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const MissionSection: React.FC = () => {
  return (
    <section className="bg-[#0A3D62] text-white py-18 lg:py-24 relative overflow-hidden" id="mission">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Emblem Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08314e] border border-white/10 mb-6 text-[10px] text-white/90 font-bold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D91E27]" />
          <span>Our Community Healthcare Commitment</span>
        </div>

        {/* Strong, Editorial Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-tight text-white mb-6">
          Healthcare Built on <br />
          <span className="font-bold italic font-serif">Compassion, Dignity, & Affordable Access</span>
        </h2>

        {/* Narrative */}
        <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We believe that no patient or family should hesitate to seek medical or dental attention due to prohibitive costs. Rasheed Hospital & Dental Complex was created to serve Samijabad and surrounding Multan localities with honest clinical guidance, subsidized doctor consultations, and essential patient care services.
        </p>

        {/* Visual Pillars - Clean and spacious horizontal composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-8 border-t border-white/10">
          <div className="p-6 rounded-sm bg-[#08314e]/70 border border-white/10">
            <div className="w-1 h-5 bg-[#D91E27] mb-3" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">Subsidized Consultation</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Modest fees designed to allow routine checkups and early diagnosis without undue hardship.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#08314e]/70 border border-white/10">
            <div className="w-1 h-5 bg-white mb-3" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">Dedicated Dental Care</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Sterile operatory equipment and conscientious treatment for oral health, hygiene, and pain relief.
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#08314e]/70 border border-white/10">
            <div className="w-1 h-5 bg-[#D91E27] mb-3" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">Local Community Focus</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Centrally situated at Bag E Hussain Chowk on Pira Gaib Road, easily reached by local residents.
            </p>
          </div>
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="text-white/70">Have questions about OPD consultation or dental procedures?</span>
          <a
            href={`tel:${HOSPITAL_INFO.phones[0]}`}
            className="px-5 py-2.5 bg-[#D91E27] hover:bg-[#b51921] text-white font-bold uppercase tracking-wider text-[11px] rounded-sm transition-colors shadow-xs"
          >
            Call Multan Helpdesk: {HOSPITAL_INFO.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
};

