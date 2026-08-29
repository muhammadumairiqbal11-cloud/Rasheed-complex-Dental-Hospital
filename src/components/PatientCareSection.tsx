import React from 'react';
import { Check, Heart } from 'lucide-react';
import { HOSPITAL_IMAGES, HOSPITAL_INFO } from '../data/hospitalData';

export const PatientCareSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100" id="patient-care">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Photograph (Consultation / OPD) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Image Frame */}
              <div className="bg-[#F9F9F9] p-2 rounded-sm border border-gray-200 shadow-sm">
                <div className="aspect-[4/3] rounded-xs overflow-hidden relative">
                  <img
                    src={HOSPITAL_IMAGES.consultation}
                    alt="Medical Consultation and Patient Examination Room at Rasheed Hospital"
                    className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A3D62]/90 via-[#0A3D62]/40 to-transparent p-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">Medical Consultation Room</p>
                    <p className="text-[11px] text-slate-200">OPD examination desk & vital monitoring station</p>
                  </div>
                </div>
              </div>

              {/* Subsidized Care Note Tag */}
              <div className="mt-4 p-3.5 bg-[#E8F1F8] rounded-sm border border-sky-100 flex items-start gap-3">
                <Heart className="w-4 h-4 text-[#D91E27] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#0A3D62] leading-relaxed">
                  <strong className="font-bold text-[#0A3D62]">Community Note:</strong> Consultations and supportive procedures are subsidized to assist patients with affordable primary care access in Multan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Structured Checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#D91E27] uppercase block mb-1">
                Patient-Centered Healthcare
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0A3D62] leading-tight">
                Compassionate Attention <br />
                <span className="font-bold italic font-serif">For Every Visiting Patient.</span>
              </h3>
              <div className="w-12 h-0.5 bg-[#0A3D62] mt-3" />
            </div>

            <p className="text-[#636E72] text-sm sm:text-base leading-relaxed">
              At Rasheed Hospital & Dental Complex, we believe patient care begins with genuine listening, thorough clinical examination, and clear medical advice. Our outpatient clinic is equipped to handle essential medical needs promptly and affordably.
            </p>

            {/* Checklist of Patient Services with Editorial Bars */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3.5">
                <div className="w-1 h-5 bg-[#0A3D62] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0A3D62] uppercase tracking-wider">Affordable & Subsidized Consultation</h4>
                  <p className="text-xs text-[#636E72]">Thorough outpatient assessments with experienced clinical attention.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-1 h-5 bg-[#D91E27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0A3D62] uppercase tracking-wider">Dedicated Dental Care & Procedures</h4>
                  <p className="text-xs text-[#636E72]">Complete oral examinations, pain management, scaling, and restorative tooth care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-1 h-5 bg-[#0A3D62] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0A3D62] uppercase tracking-wider">Blood Pressure & Vital Monitoring</h4>
                  <p className="text-xs text-[#636E72]">Quick, accurate vital sign evaluations for routine follow-up and monitoring.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-1 h-5 bg-[#D91E27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0A3D62] uppercase tracking-wider">Injections & IV / Drip-Related Support</h4>
                  <p className="text-xs text-[#636E72]">Hygienic administration of prescribed injections and supportive saline/fluid therapy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-1 h-5 bg-[#0A3D62] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0A3D62] uppercase tracking-wider">Selected Basic Medicines (When Available)</h4>
                  <p className="text-xs text-[#636E72]">Subsidized first-line medication distribution to help patients begin therapy promptly.</p>
                </div>
              </div>
            </div>

            {/* Action link to guidelines / contact */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-2xs"
              >
                <span>Visit Our Clinic</span>
              </a>
              <a
                href={`tel:${HOSPITAL_INFO.phones[0]}`}
                className="text-[11px] font-bold uppercase tracking-wider text-[#D91E27] hover:underline"
              >
                Inquire via phone: {HOSPITAL_INFO.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

