import React, { useEffect } from 'react';
import { X } from 'lucide-react';
// Original images
import originalImage1 from 'figma:asset/1f3f9ec04b592235afbf17dcd6d65dbeee96e20e.png';
import originalImage2 from 'figma:asset/248baa96dfb5230e60ee67d6c8ae570c81e76505.png';
import originalImage3 from 'figma:asset/0590e03f1175c7156667118ae3af865f466f0ee0.png';
// New images
import fashionImage1 from 'figma:asset/f3bb97161298e19bcffd76653535149174fd36ae.png';
import fashionImage2 from 'figma:asset/db8a203baa4f06b1778b949429af302408968663.png';
import fashionImage3 from 'figma:asset/209970eb572b5a4792932415f167c11afd62ec6c.png';
import fashionImage4 from 'figma:asset/59ca4d37a57bd5386792b7dbd89419006a0d4915.png';
import fashionImage5 from 'figma:asset/b2e06b9e355030286ea960c9aa055a13956f015d.png';

interface FashionFoodPhotographyProps {
  onClose: () => void;
}

export function FashionFoodPhotography({ onClose }: FashionFoodPhotographyProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    {
      url: originalImage1,
      title: 'Editorial I',
      zoom: 'scale-105'
    },
    {
      url: originalImage2,
      title: 'Runway II',
      zoom: 'scale-108'
    },
    {
      url: originalImage3,
      title: 'Portrait III',
      zoom: 'scale-110'
    },
    {
      url: fashionImage1,
      title: 'Elegance in Blue',
      zoom: 'scale-110'
    },
    {
      url: fashionImage2,
      title: 'Urban Chic',
      zoom: 'scale-105'
    },
    {
      url: fashionImage3,
      title: 'Nature\'s Palette',
      zoom: 'scale-115'
    },
    {
      url: fashionImage4,
      title: 'Glamour Shot',
      zoom: 'scale-108'
    },
    {
      url: fashionImage5,
      title: 'Behind the Scenes',
      zoom: 'scale-112'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header with Close Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
          <div className="text-white" style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '0.15em' }}>
            FASHION & FOOD PHOTOGRAPHY
          </div>
          
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="pt-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-16">
          {/* Dynamic Grid Layout - Masonry Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {/* Original Image 1 - Editorial I */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[0].url}
                    alt={images[0].title}
                    className={`w-full h-auto ${images[0].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[0].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* New Image 2 - Turquoise dress on rocks */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[4].url}
                    alt={images[4].title}
                    className={`w-full h-auto ${images[4].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[4].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Original Image 3 - Portrait III */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[2].url}
                    alt={images[2].title}
                    className={`w-full h-auto ${images[2].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[2].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {/* New Image 1 - Blue Gown */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[3].url}
                    alt={images[3].title}
                    className={`w-full h-auto ${images[3].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[3].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* New Image 4 - Glamour Shot */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[6].url}
                    alt={images[6].title}
                    className={`w-full h-auto ${images[6].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[6].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {/* Original Image 2 - Runway II */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[1].url}
                    alt={images[1].title}
                    className={`w-full h-auto ${images[1].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[1].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* New Image 3 - Yellow Gown */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[5].url}
                    alt={images[5].title}
                    className={`w-full h-auto ${images[5].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[5].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* New Image 5 - Behind the Scenes */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg bg-black/20">
                  <img 
                    src={images[7].url}
                    alt={images[7].title}
                    className={`w-full h-auto ${images[7].zoom} group-hover:scale-125 transition-transform duration-700`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.05em' }}>
                      {images[7].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8 px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40" style={{ fontSize: '14px', fontWeight: 400 }}>
            © 2024 Bruno Campos
          </p>
          <p className="text-white/40" style={{ fontSize: '14px', fontWeight: 400 }}>
            Commercial Photography Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
