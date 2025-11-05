import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sewingCoverImage from 'figma:asset/c801a30887e87bdbebaa5fb2f943e2b29b4292a9.png';

interface HomeSewingProjectProps {
  onClose: () => void;
}

export function HomeSewingProject({ onClose }: HomeSewingProjectProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contentSections = [
    {
      title: 'Pattern Making',
      description: 'Developing custom patterns from scratch, adapting traditional techniques to create unique silhouettes. Each pattern is carefully drafted with precise measurements and tested through multiple iterations to ensure the perfect fit.',
      image: 'https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc2tldGNoZXN8ZW58MXx8fHwxNzYxODcwNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Fabric Selection',
      description: 'Carefully curating materials from sustainable sources, considering weight, drape, and texture. The selection process involves testing various fabrics to find the perfect match for each design, balancing aesthetics with functionality.',
      image: 'https://images.unsplash.com/photo-1622532470022-24107cac5ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBmYWJyaWMlMjB0ZXh0aWxlfGVufDF8fHx8MTc2MTkyNjI0Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Construction',
      description: 'Hand-sewing and machine work combined to create durable, beautiful garments. Every stitch is placed with intention, using techniques passed down through generations while incorporating modern finishing methods.',
      image: 'https://images.unsplash.com/photo-1759753795699-a49d329fd220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lJTIwZGV0YWlsfGVufDF8fHx8MTc2MTkyNjI0NHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Close Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
          <div className="text-slate-900" style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '0.15em' }}>
            HOME SEWING PROJECT
          </div>
          
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="px-8 lg:px-16 py-20 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-slate-400 mb-4" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                  PERSONAL PROJECT
                </div>
                <h1 
                  className="text-slate-900 mb-6"
                  style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 600, letterSpacing: '-0.02em' }}
                >
                  Home Sewing Project
                </h1>
                <p className="text-slate-600 mb-8" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                  An exploration of traditional garment-making techniques combined with modern sustainable practices. This project documents the journey of creating handmade clothing from initial concept through pattern development, fabric selection, and final construction.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Garment Making', 'Pattern Design', 'Sustainable Fashion', 'Handcraft'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src={sewingCoverImage}
                  alt="Sewing workspace with patterns and measuring tape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Sections */}
        <section className="px-8 lg:px-16 py-16 bg-slate-50">
          <div className="max-w-[1400px] mx-auto space-y-24">
            {contentSections.map((section, index) => (
              <div 
                key={section.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 
                    className="text-slate-900 mb-4"
                    style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, letterSpacing: '-0.01em' }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-slate-600" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    {section.description}
                  </p>
                </div>
                
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <ImageWithFallback 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Two Images Side by Side */}
        <section className="px-8 lg:px-16 py-16 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1676893140053-9b74ecfe79fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsb3RoaW5nJTIwZ2FybWVudHxlbnwxfHx8fDE3NjE5MjYyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Finished garment detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1701964620877-5653b8a7280e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwcGF0dGVybiUyMGRlc2lnbnxlbnwxfHx8fDE3NjE4NDQ2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Textile pattern detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="px-8 lg:px-16 py-16 bg-slate-50">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/cMaoyb2R3zY?autoplay=1&mute=1"
                title="Home Sewing Project Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="px-8 lg:px-16 py-20 bg-white">
          <div className="max-w-[900px] mx-auto">
            <h2 
              className="text-slate-900 mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              Conclusion
            </h2>
            <p className="text-slate-600" style={{ fontSize: '18px', lineHeight: '1.8' }}>
              This home sewing project represents a meaningful exploration of slow fashion and traditional craftsmanship. Through careful attention to each step of the garment-making process—from initial sketches to final stitching—I've developed a deeper appreciation for the artistry and skill involved in creating clothing by hand. The project has not only resulted in unique, personally-tailored pieces but has also fostered a more sustainable approach to fashion consumption. Moving forward, these techniques will continue to inform both my personal practice and broader understanding of textile arts and sustainable design.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
