import React, { useState } from 'react';
import { X, Maximize2, Sparkles, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hospitalData';
import { GalleryItem } from '../types';

interface FullGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullGalleryModal: React.FC<FullGalleryModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  if (!isOpen) return null;

  const categories = ['All', ...Array.from(new Set(GALLERY_ITEMS.map((g) => g.category)))];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0A3D62]/90 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm max-w-5xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative my-8 max-h-[90vh] overflow-y-auto animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#D91E27]">
              Facility Photographs
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-[#0A3D62] tracking-tight">
              Rasheed Hospital & <span className="font-bold italic font-serif">Dental Complex Gallery</span>
            </h3>
            <p className="text-xs text-[#636E72] mt-1">
              Visual tour of our outpatient clinic, dental operatory, and patient facilities in Multan.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-sm text-gray-400 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#0A3D62] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group cursor-pointer bg-white rounded-sm p-2 border border-gray-200 hover:border-[#0A3D62] transition-all shadow-2xs"
            >
              <div className="aspect-[4/3] rounded-xs overflow-hidden relative bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0A3D62]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2 bg-white text-[#0A3D62] rounded-xs shadow-md">
                    <Maximize2 className="w-4 h-4 text-[#D91E27]" />
                  </span>
                </div>
              </div>
              <div className="p-2.5">
                <span className="text-[10px] font-bold text-[#D91E27] uppercase tracking-widest block">
                  {item.category}
                </span>
                <h4 className="text-xs font-bold text-[#0A3D62] mt-0.5">{item.title}</h4>
                <p className="text-[11px] text-[#636E72] mt-1 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Single Modal if selected */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-60 bg-[#0A3D62]/95 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="bg-[#072B45] text-white rounded-sm max-w-3xl w-full overflow-hidden relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">{lightboxItem.title}</span>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="p-1 text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-[16/10] bg-black">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 text-xs text-white/80">
                {lightboxItem.description}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
