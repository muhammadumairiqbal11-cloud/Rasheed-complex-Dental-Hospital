import React from 'react';
import { X, CheckCircle, Clock, AlertCircle, Phone, Heart } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface PatientGuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientGuidelinesModal: React.FC<PatientGuidelinesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A3D62]/90 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative my-8 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#D91E27]" />
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#D91E27]">
                Visitor & OPD Advice
              </span>
              <h3 className="text-xl font-light text-[#0A3D62] tracking-tight">
                Patient <span className="font-bold italic font-serif">Guidelines</span>
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-sm text-gray-400 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Close guidelines"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-[#636E72]">
          <div className="p-4 bg-[#F9F9F9] rounded-sm border border-gray-100">
            <h4 className="font-bold text-[#0A3D62] text-xs uppercase tracking-wider mb-1">
              1. Outpatient (OPD) Registration
            </h4>
            <p className="text-xs text-[#636E72] leading-relaxed">
              Upon arrival at Rasheed Hospital & Dental Complex, please register at the reception desk. Subsidized consultation slips are issued in sequence.
            </p>
          </div>

          <div className="p-4 bg-[#F9F9F9] rounded-sm border border-gray-100">
            <h4 className="font-bold text-[#0A3D62] text-xs uppercase tracking-wider mb-1">
              2. What to Bring
            </h4>
            <ul className="text-xs space-y-1 text-[#636E72] list-disc list-inside">
              <li>Any previous prescriptions, hospital discharge summaries, or lab reports</li>
              <li>Current daily medications list for blood pressure, diabetes, etc.</li>
              <li>Patient identification (CNIC or family record if available)</li>
            </ul>
          </div>

          <div className="p-4 bg-[#F9F9F9] rounded-sm border border-gray-100">
            <h4 className="font-bold text-[#0A3D62] text-xs uppercase tracking-wider mb-1">
              3. Blood Pressure & Nursing Support
            </h4>
            <p className="text-xs text-[#636E72] leading-relaxed">
              For routine blood pressure checks, injections, or IV drip administrations, present your doctor's valid prescription at the nursing station.
            </p>
          </div>

          <div className="p-4 bg-[#F9F9F9] rounded-sm border border-gray-100">
            <h4 className="font-bold text-[#0A3D62] text-xs uppercase tracking-wider mb-1">
              4. Dental Appointments & Procedures
            </h4>
            <p className="text-xs text-[#636E72] leading-relaxed">
              For complex dental procedures, fillings, or extractions, please call in advance or schedule at the reception desk to ensure the operatory is prepared.
            </p>
          </div>
        </div>

        {/* Action / Call Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-[#636E72]">
            <Phone className="w-3.5 h-3.5 text-[#0A3D62]" />
            <span>Reception Desk: <strong className="text-[#0A3D62]">{HOSPITAL_INFO.phones[0]}</strong></span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#D91E27] hover:bg-[#b51921] text-white text-[11px] font-bold uppercase tracking-wider rounded-sm transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
