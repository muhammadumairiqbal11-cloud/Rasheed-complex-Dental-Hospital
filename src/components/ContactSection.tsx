```tsx
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
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Netlify form submission error:', error);

      setSubmitting(false);
      setSubmitError(
        'We could not send your inquiry right now. Please call the hospital directly at 061-6560560.'
      );
    }
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

        {/* Main Contact Layout */}
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

                 <a href="tel:061-6560560"
                      className="text-sm font-bold text-[#0A3D62] hover:text-[#D91E27]"
                    >
                      {HOSPITAL_INFO.phones[0]}
                    </a>
                  </div>

                  <a
                   href="tel:061-6560560"
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
                   href="tel:061-6560560"
                      className="text-sm font-bold text-[#0A3D62] hover:text-[#D91E27]"
                    >
                      {HOSPITAL_INFO.phones[1]}
                    </a>
                  </div>

                  <a
                 href="tel:061-6560560"
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
                    setSubmitError('');
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

              <form
                name="opd-dental-inquiry"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Required by Netlify for JavaScript-rendered forms */}
                <input
                  type="hidden"
                  name="form-name"
                  value="opd-dental-inquiry"
                />

                {/* Spam protection honeypot */}
                <p
                  className="absolute overflow-hidden"
                  style={{
                    clip: 'rect(0 0 0 0)',
                    height: '1px',
                    width: '1px',
                    margin: '-1px',
                    padding: 0,
                    border: 0,
                  }}
                >
                  <label>
                    Don’t fill this out if you’re human:
                    <input
                      name="bot-field"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </p>

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
                      name="name"
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
                      name="phone"
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
                    name="service"
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
                    name="message"
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

                {/* Submission Error */}
                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-sm">
                    <p className="text-xs text-red-700 leading-relaxed">
                      {submitError}
                    </p>
                  </div>
                )}

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

        {/* Full-Width Google Map */}
        <div className="mt-10 bg-white rounded-sm border border-gray-100 shadow-2xs overflow-hidden">
          <div className="w-full h-[320px] sm:h-[400px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1422849497967!2d71.52343227436366!3d30.204486210972433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35caf691ec11%3A0xaa1c6f1597cc1d94!2sRasheed%20Hospital%20%26%20Dental%20Complex!5e0!3m2!1sen!2s!4v1788682892815!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Rasheed Hospital & Dental Complex Location"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
```
