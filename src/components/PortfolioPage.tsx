import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Navigation } from './Navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import galegateImage from 'figma:asset/2f7866467c87b9ccd8a9537671353673d88f583e.png';
import profilePhoto from 'figma:asset/a0abff23a261138a8447f7334242ed0bdd71fefc.png';
import fashionCoverImage from 'figma:asset/1f3f9ec04b592235afbf17dcd6d65dbeee96e20e.png';
import sewingCoverImage from 'figma:asset/c801a30887e87bdbebaa5fb2f943e2b29b4292a9.png';

export function PortfolioPage() {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  const projects = [
    {
      id: 'galegate',
      title: 'GaleGate',
      category: 'Mobile App Design',
      description: 'A surf and weather spot discovery app for ocean enthusiasts',
      image: galegateImage,
      gradient: 'from-blue-400 to-cyan-400',
      year: '2025',
      tags: ['UX/UI Design', 'Mobile', 'iOS', 'Figma'],
      route: '/work/galegate'
    },
    {
      id: 'fashion-food',
      title: 'Fashion & Food Photography',
      category: 'Commercial Photography',
      description: 'Editorial and commercial photography for fashion brands and culinary establishments',
      image: fashionCoverImage,
      gradient: 'from-rose-400 to-amber-400',
      year: '2018 - Now',
      tags: ['Photography', 'Fashion', 'Food', 'Editorial'],
      route: '/work/fashion-food'
    },
    {
      id: 'home-sewing',
      title: 'Home Sewing Project',
      category: 'Personal Project',
      description: 'Exploring traditional garment-making techniques and sustainable fashion practices',
      image: sewingCoverImage,
      gradient: 'from-emerald-400 to-teal-400',
      year: '2020-2023',
      tags: ['Garment Making', 'Pattern Design', 'Handcraft'],
      route: '/work/home-sewing'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden overflow-y-auto">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-950 via-slate-950 to-cyan-950 opacity-80"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}
      ></div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="space-y-8">
              {/* Small Profile Image */}
              <div className="relative w-40 h-40 group">
                <div className="absolute -inset-2 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-60"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <ImageWithFallback 
                    src={profilePhoto}
                    alt="Bruno Campos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 backdrop-blur-sm rounded-full border border-violet-500/20">
                  <span className="text-violet-300" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
                    PRODUCT DESIGNER
                  </span>
                </div>
                
                <h1 
                  className="text-white"
                  style={{ 
                    fontSize: 'clamp(48px, 8vw, 88px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.04em'
                  }}
                >
                  Designing Digital
                  <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h1>

                <p 
                  className="text-slate-300 max-w-2xl"
                  style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.7 }}
                >
                  I'm Bruno, a Product Designer based in Amsterdam. I transform complex problems into 
                  intuitive, user-centered digital products through research, design, and iteration.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      const element = document.getElementById('work');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all overflow-hidden"
                    style={{ fontWeight: 700, fontSize: '16px' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">View My Work</span>
                    <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
                    style={{ fontWeight: 700, fontSize: '16px' }}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-16">
              <div className="text-violet-400 mb-4" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em' }}>
                SELECTED PROJECTS
              </div>
              <h2 
                className="text-white"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em' }}
              >
                Featured Work
              </h2>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={project.id} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 rounded-3xl blur-2xl group-hover:opacity-20 transition-all`}></div>
                  <div 
                    onClick={() => handleNavigation(project.route)}
                    className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-white/20 transition-all"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className={`aspect-video lg:aspect-square overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <ImageWithFallback 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                          style={project.id === 'galegate' ? { objectPosition: '30% center' } : {}}
                        />
                      </div>
                      
                      {/* Content */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 w-fit mb-4">
                          <span className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text`} style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}>
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 
                          className="text-white mb-4"
                          style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em' }}
                        >
                          {project.title}
                        </h3>
                        
                        <p 
                          className="text-slate-300 mb-6 max-w-xl"
                          style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
                        >
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg text-slate-300 border border-white/10"
                              style={{ fontSize: '13px', fontWeight: 600 }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-slate-400" style={{ fontSize: '14px', fontWeight: 500 }}>
                            {project.year}
                          </span>
                          
                          <button className="group/btn inline-flex items-center gap-2 text-white hover:gap-4 transition-all">
                            <span style={{ fontSize: '15px', fontWeight: 700 }}>View Project</span>
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative space-y-8">
                  <h2 
                    className="text-white"
                    style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em' }}
                  >
                    Let's Work Together
                  </h2>
                  <p 
                    className="text-slate-300 max-w-2xl mx-auto"
                    style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.7 }}
                  >
                    I'm always interested in hearing about new projects and opportunities.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => handleNavigation('/contact')}
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all overflow-hidden"
                      style={{ fontWeight: 700, fontSize: '16px' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative">Get in Touch</span>
                      <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button
                      onClick={() => handleNavigation('/cv')}
                      className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
                      style={{ fontWeight: 700, fontSize: '16px' }}
                    >
                      View CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-8 lg:px-16 border-t border-white/10">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400" style={{ fontSize: '14px', fontWeight: 500 }}>
              © 2025 Bruno Campos. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="mailto:brunoinvan@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                brunoinvan@gmail.com
              </a>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400" style={{ fontSize: '14px', fontWeight: 500 }}>
                Amsterdam, NL
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
