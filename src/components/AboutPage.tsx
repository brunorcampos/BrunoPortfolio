import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Navigation } from './Navigation';
import aboutMePhoto from 'figma:asset/49a78f612a08ef75b355d96ab40ec3115b96a2da.png';

interface AboutPageProps {
  onBack: () => void;
  onShowCV: () => void;
}

export function AboutPage({ onBack, onShowCV }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
        <section className="pt-32 pb-16 px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              <h1 
                className="text-white"
                style={{ 
                  fontSize: 'clamp(48px, 8vw, 88px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.04em'
                }}
              >
                About Me
              </h1>
              <p 
                className="text-slate-300 max-w-2xl mx-auto"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.7 }}
              >
                Designer, problem solver, and creative thinker passionate about crafting meaningful digital experiences
              </p>
            </div>

            {/* Profile Image and Bio Side by Side */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-cyan-500/30 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10"></div>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                      <img 
                        src={aboutMePhoto}
                        alt="Bruno Campos"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="space-y-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                      <p className="text-slate-300 leading-relaxed mb-6" style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.8 }}>
                        Hi, I'm Bruno! I'm a Product Designer based in Amsterdam with a passion for creating intuitive, user-centered digital experiences. My journey into design began with architecture, where I learned to think systematically about space, flow, and human behavior. This foundation has proven invaluable in my transition to digital product design.
                      </p>
                      <p className="text-slate-300 leading-relaxed" style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.8 }}>
                        I specialize in UX/UI design, user research, and prototyping. My approach combines analytical thinking with creative problem-solving, always keeping the end user at the heart of every decision. I believe great design is invisible—it just works.
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={onShowCV}
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all overflow-hidden"
                      style={{ fontWeight: 700, fontSize: '16px' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative">View My CV</span>
                    </button>
                    
                    <a
                      href="https://www.linkedin.com/in/bruno-campos-a247bb95/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
                      style={{ fontWeight: 700, fontSize: '16px' }}
                    >
                      LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
