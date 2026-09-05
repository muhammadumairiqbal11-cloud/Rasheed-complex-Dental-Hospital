import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  PhoneCall,
  Compass
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Medical Consultation / OPD',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Direct Google Maps directions to Rasheed Hospital & Dental Complex
  const mapsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=30.2044816,71.5260072';

  return (
    <section
      className="bg-[#F9F9F9] py-16 lg:py-24 border-b border-gray-100"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#D91E27] uppercase block mb-1">
            Get in Touch & Location
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0A3D62] tracking-tight">
            Contact Rasheed Hospital <br />
            <span className="font-bold italic font-serif">
              & Dental Complex
            </span>
          </h2>

          <div className="w-12 h-0.5 bg-[#0A3D62] my-3" />

          <p className="text-[#636E72] text-xs sm:text-sm">
            We welcome visiting patients and inquiries regarding outpatient
            medical consultations, blood pressure checks, injections, and
            dental appointments in Multan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Hospital Contact Details */}
          <div className="lg:col-span-5 space-y-6">

            {/* Address Card */}
            <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-2xs space-y-3">

              <div className="flex items-center gap-2.5 text-[#0A3D62]">
                <div className="w-1 h-5 bg-[#D91E27]" />

                <h3 className="text-sm font-bold text-[#0A3D62] uppercase tracking-wider">
                  Hospital Address
                </h3>
              </div>

              <p className="text-sm text-[#0A3D62] leading-relaxed font-bold">
                Rasheed Hospital & Dental Complex
              </p>

              <p className="text-xs text-[#636E72] leading-relaxed">
                Bag E Hussain Chowk, Pira Gaib Road, Samijabad, Multan
              </p>

              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A3D62] hover:text-[#D91E27] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />

                  <span>Get Directions on Google Maps</span>

                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Direct Telephone Lines */}
            <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-2xs space-y-3">

              <div className="flex items-center gap-2.5 text-[#0A3D62]">
                <div className="w-1 h-5 bg-[#0A3D62]" />

                <h3 className="text-sm font-bold text-[#0A3D62] uppercase tracking-wider">
                  Direct Phone Lines
                </h3>
              </div>

              <div className="space-y-2 pt-1">

                <div className="flex items-center justify-between p-3 bg-[#F9F9F9] rounded-sm border border-gray-100">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">
                      Landline
                    </span>

                    <a
                      href={`tel:${HOSPITAL_INFO.phones[0]}`}
                      className="text-sm font-bold text-[#0A3D62] hover:text-[#D91E27]"
                    >
                      {HOSPITAL_INFO.phones[0]}
                    </a>
                  </div>

                  <a
                    href={`tel:${HOSPITAL_INFO.phones[0]}`}
                    className="p-2 bg-white border border-gray-200 text-[#0A3D62] rounded-xs hover:bg-[#E8F1F8]"
                    title="Call Landline"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#D91E27]" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#F9F9F9] rounded-sm border border-gray-100">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block">
                      Mobile Contact
                    </span>

                    <a
                      href={`tel:${HOSPITAL_INFO.phones[1]}`}
                      className="text-sm font-bold text-[#0A3D62] hover:text-[#D91E27]"
                    >
                      {HOSPITAL_INFO.phones[1]}
                    </a>
                  </div>

                  <a
                    href={`tel:${HOSPITAL_INFO.phones[1]}`}
                    className="p-2 bg-white border border-gray-200 text-[#0A3D62] rounded-xs hover:bg-[#E8F1F8]"
                    title="Call Mobile"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#D91E27]" />
                  </a>
                </div>

              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-2xs space-y-3">

              <div className="flex items-center gap-2.5 text-[#0A3D62]">
                <div className="w-1 h-5 bg-[#0A3D62]" />

                <h3 className="text-sm font-bold text-[#0A3D62] uppercase tracking-wider">
                  Email Communication
                </h3>
              </div>

              <div className="space-y-1.5 text-xs">

                <p className="flex items-center gap-2 text-[#636E72]">
                  <span className="font-semibold text-gray-400">
                    Official HR:
                  </span>

                  <a
                    href={`mailto:${HOSPITAL_INFO.emails[0]}`}
                    className="text-[#0A3D62] hover:underline font-medium"
                  >
                    {HOSPITAL_INFO.emails[0]}
                  </a>
                </p>

                <p className="flex items-center gap-2 text-[#636E72]">
                  <span className="font-semibold text-gray-400">
                    Additional:
                  </span>

                  <a
                    href={`mailto:${HOSPITAL_INFO.emails[1]}`}
                    className="text-[#0A3D62] hover:underline font-medium"
                  >
                    {HOSPITAL_INFO.emails[1]}
                  </a>
                </p>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-gray-100 shadow-2xs">

            <h3 className="text-lg font-bold text-[#0A3D62] mb-1">
              Send an OPD or Dental Inquiry
            </h3>

            <p className="text-xs text-[#636E72] mb-6">
              Leave your contact details and message below. For urgent clinical
              queries, please call directly at 061-6560560.
            </p>

            {isSubmitted ? (

              <div className="p-6 bg-[#E8F1F8] border border-sky-200 rounded-sm text-center space-y-3">

                <CheckCircle2 className="w-10 h-10 text-[#0A3D62] mx-auto" />

                <h4 className="text-base font-bold text-[#0A3D62]">
                  Inquiry Received
                </h4>

                <p className="text-xs text-[#0A3D62] max-w-md mx-auto leading-relaxed">
                  Thank you,{' '}
                  <strong className="font-semibold">
                    {formData.name}
                  </strong>
                  . Our hospital reception desk at Rasheed Hospital & Dental
                  Complex will review your inquiry.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      service: 'Medical Consultation / OPD',
                      message: '',
                    });
                  }}
                  className="mt-3 px-4 py-2 bg-white text-[#0A3D62] border border-sky-300 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-sky-50 transition-colors"
                >
                  Send Another Inquiry
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Name */}
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-[#0A3D62] mb-1"
                      htmlFor="patient-name"
                    >
                      Patient / Inquirer Name *
                    </label>

                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ahmad"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F9F9F9] border border-gray-200 rounded-sm focus:bg-white focus:outline-hidden focus:border-[#0A3D62] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-[#0A3D62] mb-1"
                      htmlFor="patient-phone"
                    >
                      Contact Phone Number *
                    </label>

                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      placeholder="e.g. 0300-1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F9F9F9] border border-gray-200 rounded-sm focus:bg-white focus:outline-hidden focus:border-[#0A3D62] transition-all"
                    />
                  </div>

                </div>

                {/* Service of Interest */}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-[#0A3D62] mb-1"
                    htmlFor="service-select"
                  >
                    Service Required
                  </label>

                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F9F9F9] border border-gray-200 rounded-sm focus:bg-white focus:outline-hidden focus:border-[#0A3D62] transition-all"
                  >
                    <option value="Medical Consultation / OPD">
                      Medical Consultation / Outpatient OPD
                    </option>

                    <option value="Dental Care & Procedures">
                      Dental Care & Dental Procedures
                    </option>

                    <option value="Blood Pressure Checking">
                      Blood Pressure Check & Monitoring
                    </option>

                    <option value="Injections & IV / Drip Care">
                      Injections & IV / Drip Care
                    </option>

                    <option value="Prescription & Medical Guidance">
                      Prescription & Medical Guidance
                    </option>

                    <option value="Basic Medicines Availability">
                      Basic Medicines Inquiry
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-[#0A3D62] mb-1"
                    htmlFor="patient-message"
                  >
                    Inquiry Details or Symptoms (Optional)
                  </label>

                  <textarea
                    id="patient-message"
                    rows={4}
                    placeholder="Briefly describe your medical or dental question..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F9F9F9] border border-gray-200 rounded-sm focus:bg-white focus:outline-hidden focus:border-[#0A3D62] transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">

                  <span className="text-[10px] text-gray-400">
                    * Required fields
                  </span>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#D91E27] hover:bg-[#b51921] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm transition-all shadow-xs disabled:opacity-70"
                  >
                    <Send className="w-3.5 h-3.5" />

                    <span>
                      {submitting ? 'Submitting...' : 'Submit Inquiry'}
                    </span>
                  </button>

                </div>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
