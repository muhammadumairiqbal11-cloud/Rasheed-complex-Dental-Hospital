import React, { useState } from 'react';
import {
  Stethoscope,
  Sparkles,
  Activity,
  Syringe,
  FileText,
  Pill,
  Check,
  PhoneCall,
  Info
} from 'lucide-react';
import { VERIFIED_SERVICES, HOSPITAL_INFO } from '../data/hospitalData';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'medical' | 'dental' | 'support'>('all');

  const filteredServices =
    activeTab === 'all'
      ? VERIFIED_SERVICES
      : VERIFIED_SERVICES.filter((s) => s.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Syringe':
        return <Syringe className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Pill':
        return <Pill className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  return (
    <section className="bg-[#F9F9F9] py-16 lg:py-24 border-b border-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-200 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D91E27] uppercase block mb-1">
              Clinical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0A3D62] tracking-tight">
              Hospital & Dental <span className="font-bold italic font-serif">Services</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#636E72] max-w-md">
            Delivering essential outpatient clinical support, doctor consultations, and specialized dental care to our community.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'bg-[#0A3D62] text-white shadow-2xs'
                : 'bg-white text-[#636E72] hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Services
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('medical')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'medical'
                ? 'bg-[#0A3D62] text-white shadow-2xs'
                : 'bg-white text-[#636E72] hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Medical Consultation / OPD
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('dental')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'dental'
                ? 'bg-[#0A3D62] text-white shadow-2xs'
                : 'bg-white text-[#636E72] hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Dental Care & Procedures
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('support')}
            className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'support'
                ? 'bg-[#0A3D62] text-white shadow-2xs'
                : 'bg-white text-[#636E72] hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Clinical & Supportive Care
          </button>
        </div>

        {/* Editorial Healthcare Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const isDental = service.category === 'dental';
            return (
              <div
                key={service.id}
                className="bg-white rounded-sm p-6 sm:p-7 border border-gray-100 shadow-2xs hover:border-[#0A3D62]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-1 h-5 ${isDental ? 'bg-[#D91E27]' : 'bg-[#0A3D62]'}`} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {service.category.toUpperCase()}
                      </span>
                    </div>
                    {service.badgeText && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#E8F1F8] text-[#0A3D62] rounded-xs">
                        {service.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0A3D62] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Details list */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-[#636E72]">
                        <span className="text-[#D91E27] font-bold">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service bottom note */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#636E72]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">
                    Rasheed Hospital Facility
                  </span>
                  <a
                    href={`tel:${HOSPITAL_INFO.phones[0]}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#0A3D62] hover:text-[#D91E27] flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3 h-3 text-[#D91E27]" />
                    <span>Inquire: {HOSPITAL_INFO.phones[0]}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Verification Notice */}
        <div className="mt-10 p-5 bg-white rounded-sm border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#636E72]">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-[#0A3D62] flex-shrink-0" />
            <span>
              All services listed are physically available at Rasheed Hospital & Dental Complex, Multan. For procedure availability and OPD timings, please call our clinic.
            </span>
          </div>
          <a
            href={`tel:${HOSPITAL_INFO.phones[0]}`}
            className="flex-shrink-0 text-xs font-bold uppercase tracking-wider text-[#D91E27] hover:underline"
          >
            Call: {HOSPITAL_INFO.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
};
