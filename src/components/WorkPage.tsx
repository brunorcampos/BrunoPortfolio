import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navigation } from './Navigation';
import galegateImage from 'figma:asset/2f7866467c87b9ccd8a9537671353673d88f583e.png';
import fashionCoverImage from 'figma:asset/1f3f9ec04b592235afbf17dcd6d65dbeee96e20e.png';
import sewingCoverImage from 'figma:asset/c801a30887e87bdbebaa5fb2f943e2b29b4292a9.png';

export function WorkPage() {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-black relative overflow-x-hidden">
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
        <section className="pt-32 pb-16 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center space-y-6 mb-20">
              <h1 
                className="text-white"
                style={{ 
                  fontSize: 'clamp(56px, 10vw, 96px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.04em'
                }}
              >
                Featured
                <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Work
                </span>
              </h1>
              <p 
                className="text-slate-300 max-w-2xl mx-auto"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.7 }}
              >
                A collection of design projects spanning mobile apps, photography, and creative explorations
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(project.route)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 h-full">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                        <span className="text-white" style={{ fontSize: '12px', fontWeight: 600 }}>
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 space-y-4">
                      <div>
                        <div className="text-slate-400 mb-2" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
                          {project.category}
                        </div>
                        <h3 
                          className="text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all"
                          style={{ fontSize: '24px', fontWeight: 700 }}
                        >
                          {project.title}
                        </h3>
                        <p 
                          className="text-slate-400"
                          style={{ fontSize: '15px', lineHeight: 1.6 }}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full"
                            style={{ fontSize: '12px', fontWeight: 500 }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Project Link */}
                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-white transition-colors pt-2">
                        <span style={{ fontSize: '14px', fontWeight: 600 }}>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon Section */}
            <div className="mt-16 text-center">
              <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                <span className="text-slate-400" style={{ fontSize: '14px', fontWeight: 500 }}>
                  More projects coming soon...
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
