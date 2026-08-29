import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hospitalData';
import { GalleryItem } from '../types';

interface GalleryPreviewProps {
  onOpenFullGallery?: () => void;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ onOpenFullGallery }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(GALLERY_ITEMS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(GALLERY_ITEMS[prevIdx]);
  };

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-100">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#D91E27] uppercase block mb-1">
              Facility Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0A3D62] tracking-tight">
              Hospital & Dental Complex <span className="font-bold italic font-serif">Facilities</span>
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-3">
            <span className="text-xs text-[#636E72]">Real facility photographs</span>
            {onOpenFullGallery && (
              <button
                type="button"
                onClick={onOpenFullGallery}
                className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#0A3D62] hover:text-white bg-white hover:bg-[#0A3D62] border border-[#0A3D62]/40 rounded-sm transition-all shadow-2xs"
              >
                View Full Gallery
              </button>
            )}
          </div>
        </div>

        {/* 4 Clean Gallery Thumbnails with Controlled Framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, index)}
              className="group cursor-pointer bg-white rounded-sm p-2 border border-gray-200 hover:border-[#0A3D62] transition-all shadow-2xs relative"
            >
              <div className="aspect-[4/3] rounded-xs overflow-hidden relative bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center grayscale-[10%] group-hover:grayscale-0 group-hover:scale-103 transition-transform duration-500"
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
                <h4 className="text-xs font-bold text-[#0A3D62] line-clamp-1 mt-0.5">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#636E72] line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-[#0A3D62]/90 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="bg-white rounded-sm max-w-3xl w-full overflow-hidden shadow-2xl relative animate-fadeIn border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-[#F9F9F9]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D91E27]">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-base font-bold text-[#0A3D62]">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-1.5 rounded-sm hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="relative aspect-[16/10] bg-[#0A3D62]">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Buttons */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xs bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xs bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between text-xs text-[#636E72]">
                <p>{selectedImage.description}</p>
                <span className="text-gray-400 font-medium">
                  {currentIndex + 1} / {GALLERY_ITEMS.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
