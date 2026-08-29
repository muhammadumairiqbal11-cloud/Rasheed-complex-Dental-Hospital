import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Heart, Sparkles, MapPin, Compass } from 'lucide-react';
import { HOSPITAL_IMAGES, HOSPITAL_INFO } from '../data/hospitalData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#FCFCFC] pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-gray-100 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Text & Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            {/* Community Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F1F8] text-[#0A3D62] text-[10px] font-bold tracking-widest uppercase rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91E27]" />
              <span>Community First • Multan, Pakistan</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] leading-[1.08] font-light text-[#0A3D62] tracking-tight">
                Compassionate <br />
                <span className="font-bold italic font-serif text-[#0A3D62]">& Accessible</span> <br />
                Healthcare.
              </h1>
              <div className="w-16 h-0.5 bg-[#0A3D62]" />
            </div>

            {/* Supporting Message */}
            <p className="text-[#636E72] text-sm sm:text-base leading-relaxed max-w-xl">
              Providing subsidized outpatient medical consultations, essential clinical support, and modern dental treatments to the heart of Multan. We believe quality healthcare should be available to everyone with dignity.
            </p>

            {/* Primary Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#F9F9F9] border border-gray-100">
                <div className="w-1 h-8 bg-[#0A3D62] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0A3D62] uppercase tracking-wider">Subsidized OPD</h4>
                  <p className="text-xs text-[#636E72]">Affordable outpatient doctor consultation & guidance</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#F9F9F9] border border-gray-100">
                <div className="w-1 h-8 bg-[#D91E27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0A3D62] uppercase tracking-wider">Dental Care Unit</h4>
                  <p className="text-xs text-[#636E72]">Oral hygiene, tooth extractions & clinical procedures</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-[#0A3D62] text-[#0A3D62] px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#0A3D62] hover:text-white transition-all rounded-sm shadow-2xs"
                id="hero-services-btn"
              >
                <span>Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#D91E27] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#b51921] transition-all rounded-sm shadow-2xs"
                id="hero-contact-btn"
              >
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.phones[0]}`}
                className="inline-flex items-center gap-2 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#0A3D62] hover:text-[#D91E27] transition-colors"
                title="Call Hospital Helpdesk"
              >
                <Phone className="w-3.5 h-3.5 text-[#D91E27]" />
                <span>Call: {HOSPITAL_INFO.phones[0]}</span>
              </a>
            </div>

            {/* Location Notice */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#636E72]">
              <MapPin className="w-3.5 h-3.5 text-[#0A3D62] flex-shrink-0" />
              <span>Bag E Hussain Chowk, Pira Gaib Road, Samijabad, Multan</span>
            </div>
          </div>

          {/* Right Column: Hospital Visual with Floating Support Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative bg-white p-2 rounded-sm border border-gray-200 shadow-sm overflow-hidden">
                <div className="aspect-[4/3] rounded-xs overflow-hidden relative bg-[#F9F9F9]">
                  <img
                    src={HOSPITAL_IMAGES.hero}
                    alt="Rasheed Hospital & Dental Complex Building and Reception Entrance"
                    className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A3D62]/90 via-[#0A3D62]/40 to-transparent p-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">Rasheed Hospital & Dental Complex</p>
                    <p className="text-[11px] text-slate-200">Main Facility & Reception • Multan</p>
                  </div>
                </div>

                {/* Floating Patient Support Card (Editorial) */}
                <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl border-l-4 border-[#D91E27] rounded-sm z-20">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Patient Support</p>
                  <p className="text-base font-bold text-[#0A3D62]">Open for Consultation</p>
                </div>
              </div>

              {/* Trust Badge Below Image */}
              <div className="mt-3 flex items-center justify-between px-3.5 py-2.5 bg-[#F9F9F9] rounded-sm border border-gray-200 text-xs text-[#636E72]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0A3D62]" />
                  <span className="font-semibold text-[#0A3D62]">Subsidized Community Facility</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D91E27]">Multan, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

