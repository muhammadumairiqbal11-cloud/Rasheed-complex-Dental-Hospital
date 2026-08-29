import React from 'react';

interface HospitalLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const HospitalLogo: React.FC<HospitalLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`} id="hospital-logo">
      {/* Editorial Monogram Badge */}
      <div
        className={`flex items-center justify-center font-bold font-['Outfit',sans-serif] rounded-xs flex-shrink-0 transition-transform ${
          size === 'sm'
            ? 'w-9 h-9 text-lg'
            : size === 'lg'
            ? 'w-13 h-13 text-2xl'
            : 'w-11 h-11 text-xl'
        } ${
          isDark
            ? 'bg-[#0A3D62] text-white border border-slate-700'
            : 'bg-[#0A3D62] text-white shadow-xs'
        }`}
      >
        <span className="leading-none tracking-tighter">R</span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-['Outfit',sans-serif] font-bold tracking-tight uppercase leading-none ${
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base sm:text-lg'
          } ${isDark ? 'text-white' : 'text-[#0A3D62]'}`}
        >
          Rasheed Hospital
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D91E27] flex-shrink-0" />
          <span
            className={`font-semibold tracking-[0.18em] uppercase ${
              size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]'
            } ${isDark ? 'text-slate-300' : 'text-[#D91E27]'}`}
          >
            & Dental Complex
          </span>
          <span className={`text-[9px] uppercase tracking-wider hidden sm:inline ${isDark ? 'text-slate-400' : 'text-[#636E72]'}`}>
            • Multan
          </span>
        </div>
      </div>
    </div>
  );
};

