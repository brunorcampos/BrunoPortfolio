import React, { useEffect, useState } from 'react';
import { ArrowLeft, Target, Users, Zap, Smartphone, CheckCircle, ArrowRight, MapPin, Cloud, Wind, Waves, Heart, Star, Calendar, Search, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import GaleGateDashboard from './GaleGateDashboard';
import EnhancedSpotSearch from './EnhancedSpotSearch';
import Community from './Community';
import WeatherMain from './WeatherMain';
import Favorites from './Favorites';
import UserProfile from './UserProfile';
import heroMockup from 'figma:asset/e6c6ec73154069048535ac895bc08699366b9a06.png';
import galegateLogo from 'figma:asset/2156d488f82df24560464c56f089faf83979cc18.png';
import marcosPersona from 'figma:asset/6292c0ab4b7a3a4a7685d74c586021921b68409a.png';
import luanaPersona from 'figma:asset/b4cd260c8d9ccbb9e3900ceb7cdd55a1832546f4.png';
import emotionalEngagement from 'figma:asset/f6d01a04bdb0cee8dd783759c4e549ecdc23a761.png';
import weatherCheckFlow from 'figma:asset/dc63dd11f34ec92665e7ca513bb93172346ee951.png';
import communityFlow from 'figma:asset/cd2b85c37c811d6179a76a9d658c8fada4aef7e9.png';
import spotDiscoveryFlow from 'figma:asset/745e7c5cf866a694be9caa172bd2a41a182af346.png';
import lowFiSketch1 from 'figma:asset/1d4a5bbf8c65ef7bc9449672392a81ef80327ff0.png';
import lowFiSketch2 from 'figma:asset/1c84a3f2b4baee128dd21adb20a766cda878c77f.png';
import lowFiSketch3 from 'figma:asset/91f04953eda694ce32505fee8cd1bbd4e988d410.png';
import midFiPrototype from 'figma:asset/496a3bf15a466fc97f9b1876341ea193bfc5ff34.png';
import hiFiPrototype from 'figma:asset/d55305a32195da34b31096cbeee76e8d8095a271.png';

interface GaleGateCaseStudyProps {
  onClose: () => void;
  headerImage?: string;
}

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function GaleGateCaseStudy({ onClose, headerImage }: GaleGateCaseStudyProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    // Scroll to the very top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Also set a small timeout to ensure it happens after render
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  // Prototype viewer state
  const [currentScreen, setCurrentScreen] = useState<string>('dashboard');

  const renderPrototypeScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <GaleGateDashboard 
          onNavigateToSpotSearch={() => setCurrentScreen('search')}
          onNavigateToCommunity={() => setCurrentScreen('community')}
          onNavigateToWeather={() => setCurrentScreen('weather')}
          onNavigateToFavorites={() => setCurrentScreen('favorites')}
          onNavigateToProfile={() => setCurrentScreen('profile')}
        />;
      case 'search':
        return <EnhancedSpotSearch 
          onNavigateBack={() => setCurrentScreen('dashboard')}
          onNavigateToSpotDetail={() => setCurrentScreen('search')}
          onNavigateToFavorites={() => setCurrentScreen('favorites')}
        />;
      case 'community':
        return <Community 
          onNavigateBack={() => setCurrentScreen('dashboard')}
          onNavigateToCalendar={() => setCurrentScreen('community')}
          onNavigateToRewards={() => setCurrentScreen('community')}
        />;
      case 'weather':
        return <WeatherMain 
          onNavigateBack={() => setCurrentScreen('dashboard')}
          onNavigateToDetail={() => setCurrentScreen('weather')}
        />;
      case 'favorites':
        return <Favorites 
          onNavigateBack={() => setCurrentScreen('dashboard')}
          onNavigateToSpotDetail={() => setCurrentScreen('search')}
        />;
      case 'profile':
        return <UserProfile 
          onNavigateBack={() => setCurrentScreen('dashboard')}
        />;
      default:
        return <GaleGateDashboard 
          onNavigateToSpotSearch={() => setCurrentScreen('search')}
          onNavigateToCommunity={() => setCurrentScreen('community')}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            style={{ fontWeight: 500, fontSize: '15px' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          
          <div className="text-slate-900" style={{ fontWeight: 600, fontSize: '16px', letterSpacing: '0.1em' }}>
            CASE STUDY
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gray-50">
        <div className="relative w-full">
          {/* Background Mockup - Full Width - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex absolute top-0 bottom-0 items-center justify-center pointer-events-none" style={{ left: '60%', right: '0' }}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={heroMockup}
                alt="GaleGate app mockups"
                className="w-full h-auto object-contain"
                style={{ 
                  maxWidth: '1000px',
                  transform: 'scale(1.6632)',
                  transformOrigin: 'center right'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16">
            <motion.div 
              className="max-w-[600px] lg:text-center space-y-6 pt-8 pb-16 lg:min-h-[600px] flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 backdrop-blur-sm rounded-full border border-blue-200 lg:mx-auto w-fit"
                variants={staggerItem}
              >
                <span className="text-blue-600" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>
                  UX/UI Case Study
                </span>
              </motion.div>

              {/* Logo */}
              <motion.div 
                className="flex lg:justify-center -mb-4"
                variants={staggerItem}
              >
                <div className="w-[380px] md:w-[420px]">
                  <img 
                    src={galegateLogo}
                    alt="GaleGate Logo"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-slate-900"
                style={{ 
                  fontSize: '32px',
                  fontWeight: 700,
                  lineHeight: '48px',
                  letterSpacing: '-0.01em'
                }}
                variants={staggerItem}
              >
                Surf & Weather Spot Discovery App
              </motion.h1>

              {/* Mobile Mockup Preview - Appears here on mobile, between title and description */}
              <motion.div 
                className="lg:hidden -mx-4"
                variants={staggerItem}
              >
                <img 
                  src={heroMockup}
                  alt="GaleGate app mockups"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-slate-600 lg:mx-auto max-w-[500px] text-justify"
                style={{ fontSize: '17px', fontWeight: 400, lineHeight: '28px' }}
                variants={staggerItem}
              >
                A mobile-first application that helps surfers and ocean enthusiasts discover perfect spots based on real-time weather conditions and community insights
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="flex items-center lg:justify-center gap-8 pt-2"
                variants={staggerItem}
              >
                <div className="text-center">
                  <div className="text-blue-600" style={{ fontSize: '40px', fontWeight: 700, lineHeight: '60px' }}>17</div>
                  <div className="text-slate-500" style={{ fontSize: '14px', fontWeight: 500 }}>Screens</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600" style={{ fontSize: '40px', fontWeight: 700, lineHeight: '60px' }}>iOS</div>
                  <div className="text-slate-500" style={{ fontSize: '14px', fontWeight: 500 }}>Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600" style={{ fontSize: '40px', fontWeight: 700, lineHeight: '60px' }}>6wk</div>
                  <div className="text-slate-500" style={{ fontSize: '14px', fontWeight: 500 }}>Timeline</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                className="pt-4"
                variants={staggerItem}
              >
                <button 
                  onClick={() => {
                    const section = document.getElementById('overview');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md"
                  style={{ fontWeight: 600, fontSize: '16px' }}
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Quick Info - Only visible on mobile */}
      <section className="lg:hidden bg-blue-50 py-8 px-6 border-y border-gray-200">
        <div className="space-y-4">
          <h3 className="text-slate-900" style={{ fontSize: '20px', fontWeight: 600 }}>
            At a Glance
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="text-blue-600" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                Role
              </div>
              <div className="text-slate-700" style={{ fontSize: '13px', fontWeight: 400 }}>
                Lead UX Researcher & Product Designer
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="text-blue-600" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                Timeline
              </div>
              <div className="text-slate-700" style={{ fontSize: '13px', fontWeight: 400 }}>
                6 weeks
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="text-blue-600" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                Platform
              </div>
              <div className="text-slate-700" style={{ fontSize: '13px', fontWeight: 400 }}>
                iOS Mobile App
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="text-blue-600" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                Screens
              </div>
              <div className="text-slate-700" style={{ fontSize: '13px', fontWeight: 400 }}>
                17 designed
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="text-blue-600" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
              Key Achievement
            </div>
            <div className="text-slate-700" style={{ fontSize: '13px', fontWeight: 400, lineHeight: '1.5' }}>
              Eliminated Severity 4 usability issue in weather data readability, reducing task completion time by helping surfers make faster, safer decisions
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-0">
          
          {/* Project Overview */}
          <section id="overview" className="py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <motion.div 
              className="space-y-3 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <div className="text-blue-600" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                01
              </div>
              <h2 
                className="text-slate-900"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                Project Overview
              </h2>
            </motion.div>

            {/* Project Context */}
            <motion.div 
              className="mb-6 p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '24px', fontWeight: 600 }}>
                Project Context
              </h3>
              <p className="text-[#2C4A6B]/80 text-justify mb-4" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.7 }}>
                GaleGate was conceived to address a critical gap in the water sports community: the lack of specialized, user-friendly tools for making informed decisions about when and where to engage in ocean activities. While generic weather apps exist, they fail to present data in formats that are meaningful for surfers, kitesurfers, and sailors who need sport-specific insights. This project emerged from extensive user research revealing that athletes were spending excessive time manually interpreting meteorological data across multiple platforms, often leading to frustration and missed opportunities.
              </p>
              <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.7 }}>
                The application was designed as a comprehensive solution combining real-time weather forecasting, spot discovery, and community engagement features. By consolidating essential information into an intuitive mobile interface, GaleGate aims to reduce decision-making time while simultaneously building a connected community of water sports enthusiasts who can share local knowledge and experiences.
              </p>
            </motion.div>

            {/* Product & Role */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="p-5 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm" variants={staggerItem}>
                <h3 className="text-[#2C4A6B] mb-1.5" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Product Type
                </h3>
                <p className="text-[#2C4A6B]/70 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
                  Mobile-first weather and spot discovery application for iOS, designed specifically for water sports enthusiasts including surfers, kitesurfers, windsurfers, and sailors.
                </p>
              </motion.div>
              
              <motion.div className="p-5 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm" variants={staggerItem}>
                <h3 className="text-[#2C4A6B] mb-1.5" style={{ fontSize: '20px', fontWeight: 600 }}>
                  My Role
                </h3>
                <p className="text-[#2C4A6B]/70 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
                  Lead UX Researcher & Product Designer, responsible for conducting user research, creating personas, designing user flows, developing wireframes and prototypes, and conducting usability testing.
                </p>
              </motion.div>

              <motion.div className="p-5 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm" variants={staggerItem}>
                <h3 className="text-[#2C4A6B] mb-1.5" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Timeline & Scope
                </h3>
                <p className="text-[#2C4A6B]/70 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
                  6-week design sprint covering user research (1 week), ideation and wireframing (2 weeks), high-fidelity prototyping (2 weeks), and usability testing with iterations (1 week).
                </p>
              </motion.div>
            </motion.div>

            {/* Target Audience & Research Insights */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="p-5 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm" variants={staggerItem}>
                <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Target Audience
                </h3>
                <ul className="space-y-2">
                  {[
                    'Experienced water sports athletes seeking real-time, sport-specific weather data',
                    'Beginner to intermediate practitioners looking for simplified condition information',
                    'Traveling athletes discovering new spots in unfamiliar coastal regions',
                    'Community-minded users wanting to connect with local practitioners'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                      <span className="text-[#FF6B35] mt-0.5">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="p-5 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm" variants={staggerItem}>
                <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Research Methods
                </h3>
                <ul className="space-y-2">
                  {[
                    'Conducted 5 in-depth user interviews with water sports practitioners',
                    'Competitive analysis of 8 existing weather and sport apps',
                    'Observational studies at 3 popular surf spots in Brazil and New Zealand',
                    'Moderated usability testing sessions with 6 participants across two iterations'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                      <span className="text-[#FF6B35] mt-0.5">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Problem Statement */}
            <div className="mb-4 p-6 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 backdrop-blur-sm rounded-2xl border border-[#FF6B35]/30 shadow-sm">
              <h3 className="text-[#FF6B35] mb-3" style={{ fontSize: '26px', fontWeight: 600 }}>
                The Problem
              </h3>
              <p className="text-[#2C4A6B]/90 text-justify mb-4" style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.7 }}>
                Water sports enthusiasts face significant challenges when trying to make informed decisions about when and where to practice their sport safely and effectively.
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                  <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                    1. Data Complexity & Cognitive Overload
                  </h4>
                  <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                    Users struggled to quickly interpret complex wind and tide data necessary for safe sport participation. 
                    Usability testing revealed a <span className="text-[#FF6B35] font-semibold">Severity 4 Usability Catastrophe</span> when 
                    trying to determine peak wind times, forcing users to manually read hourly data across multiple sources. Generic weather apps present information optimized for general audiences, not sport-specific requirements.
                  </p>
                </div>

                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                  <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                    2. Fragmented User Experience
                  </h4>
                  <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                    Athletes reported using 3-5 different apps simultaneously to gather comprehensive information: one for wind forecasts, another for tides, a third for swell data, and separate platforms for finding spots and connecting with the community. This fragmented experience wastes time and increases frustration.
                  </p>
                </div>

                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                  <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                    3. Limited Local Knowledge Access
                  </h4>
                  <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                    Traveling athletes expressed difficulty finding reliable, up-to-date information about unfamiliar spots, including hazards, best conditions, and local regulations. While online forums exist, information is scattered and often outdated, making trip planning unnecessarily risky.
                  </p>
                </div>
              </div>
            </div>


            </div>
          </section>

          {/* Initial Goals */}
          <section className="bg-gray-50 border-y border-gray-200 py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <motion.div 
              className="space-y-3 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <div className="text-[#FF6B35]" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                02
              </div>
              <h2 
                className="text-[#2C4A6B]"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                Initial Goals
              </h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="p-6 border border-gray-200 rounded-2xl bg-gray-50 backdrop-blur-sm shadow-sm" variants={staggerItem}>
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Simplify Decision Making
                </h3>
                <p className="text-[#2C4A6B]/70 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                  Provide all necessary information in one place to help users quickly decide where and when to go.
                </p>
              </motion.div>

              <motion.div className="p-6 border border-gray-200 rounded-2xl bg-gray-50 backdrop-blur-sm shadow-sm" variants={staggerItem}>
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Build Community
                </h3>
                <p className="text-[#2C4A6B]/70 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                  Create a platform for water sports enthusiasts to connect, share experiences, and learn from each other.
                </p>
              </motion.div>

              <motion.div className="p-6 border border-gray-200 rounded-2xl bg-gray-50 backdrop-blur-sm shadow-sm" variants={staggerItem}>
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Enhance Discovery
                </h3>
                <p className="text-[#2C4A6B]/70 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                  Help users explore new spots with confidence through comprehensive data and community feedback.
                </p>
              </motion.div>

              <motion.div className="p-6 border border-gray-200 rounded-2xl bg-gray-50 backdrop-blur-sm shadow-sm" variants={staggerItem}>
                <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Improve Accessibility
                </h3>
                <p className="text-[#2C4A6B]/70 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                  Design an intuitive interface that works seamlessly for both beginners and experienced athletes.
                </p>
              </motion.div>
            </motion.div>
            </div>
          </section>

          {/* User Personas */}
          <section className="bg-white border-y border-gray-200 py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <motion.div 
              className="flex items-start gap-4 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-[#FF6B35]" />
              </div>
              <div>
                <h2 
                  className="text-[#2C4A6B] mb-2"
                  style={{ fontSize: '40px', fontWeight: 600 }}
                >
                  User Personas
                </h2>
                <p className="text-[#2C4A6B]/60" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Understanding our target users and their needs
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24 max-w-[1600px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Marcos Persona */}
              <motion.div className="relative bg-white backdrop-blur-sm rounded-2xl p-10 pt-24 border border-gray-200 shadow-sm" variants={staggerItem}>
                <div className="flex flex-col items-center mb-6">
                  {/* Profile Image with 3D Border - Half Outside Card */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-2">
                    <div className="w-40 h-40 rounded-full overflow-hidden bg-white p-1">
                      <img 
                        src={marcosPersona}
                        alt="Marcos Brum"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-[#2C4A6B] mb-1.5 mt-4" style={{ fontSize: '28px', fontWeight: 700 }}>
                    Marcos Brum, 39
                  </h3>
                  <p className="text-[#2C4A6B]/60 text-center" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
                    Amateur Kitesurfer<br/>
                    Single Dad<br/>
                    Praia Mole, Brazil
                  </p>
                </div>

                <div className="mb-6 p-5 bg-[#FF6B35]/10 rounded-xl border border-[#FF6B35]/20">
                  <p className="text-[#FF6B35]" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.5 }}>
                    "I need to know the wind is perfect right now, not what it was 30 minutes ago"
                  </p>
                </div>

                <p className="text-[#2C4A6B]/70 mb-6 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                  Passionate kitesurfer who loves chasing new spots. Experienced athlete who prioritizes accurate, real-time information to make smart decisions. Works as a freelance photographer, allowing flexible schedules for optimal wind conditions.
                </p>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-[#FF6B35] mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Goals & Needs:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Real-time sport-specific weather forecasts with accurate wind speed and direction',
                        'Discover new spots while traveling along the coast',
                        'Live community feedback about current conditions',
                        'Quick access to tide information and swell data',
                        'Save favorite spots for rapid access'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          <span className="text-[#2C4A6B]/40 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Frustrations:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Generic weather apps don\'t account for kitesurfing needs',
                        'Hard to find reliable spot information when traveling',
                        'Outdated wind data leads to wasted trips',
                        'No easy way to connect with local kiters'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          <span className="text-[#2C4A6B]/40 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Behaviors:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Checks app from car before entering water to verify conditions',
                        'Actively engages with community to share spots and tips',
                        'Plans sessions around wind forecasts and son\'s schedule',
                        'Uses multiple apps to cross-reference weather data'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          <span className="text-[#2C4A6B]/40 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Luana Persona */}
              <motion.div className="relative bg-white backdrop-blur-sm rounded-2xl p-10 pt-24 border border-gray-200 shadow-sm" variants={staggerItem}>
                <div className="flex flex-col items-center mb-6">
                  {/* Profile Image with 3D Border - Half Outside Card */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-2">
                    <div className="w-40 h-40 rounded-full overflow-hidden bg-white p-1">
                      <img 
                        src={luanaPersona}
                        alt="Luana Lima"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-[#2C4A6B] mb-1.5 mt-4" style={{ fontSize: '28px', fontWeight: 700 }}>
                    Luana Lima, 28
                  </h3>
                  <p className="text-[#2C4A6B]/60 text-center" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
                    Student Sailor<br/>
                    Married<br/>
                    Auckland, NZ
                  </p>
                </div>

                <div className="mb-6 p-5 bg-[#FF6B35]/10 rounded-xl border border-[#FF6B35]/20">
                  <p className="text-[#FF6B35]" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.5 }}>
                    "If I could filter out all the extra stuff so I can just see the info I need"
                  </p>
                </div>

                <p className="text-[#2C4A6B]/70 mb-6 text-justify" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                  Beginner to intermediate sailor who values simplicity and clear guidance. Focused on building skills without overwhelming technical data. Studies marine biology and sails on weekends with her husband's sailing club.
                </p>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-[#FF6B35] mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Goals & Needs:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Beginner-friendly interface with simplified weather data',
                        'Find safe, appropriate spots for her skill level',
                        'Learn from community insights and experienced sailors',
                        'Clear visual indicators for safe sailing conditions',
                        'Step-by-step guidance for understanding weather patterns'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          <span className="text-[#2C4A6B]/40 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Frustrations:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Expert-focused apps are too complex and intimidating',
                        'Overwhelmed by technical meteorological data',
                        'Difficulty knowing if conditions are safe for beginners',
                        'Hard to find beginner-friendly sailing spots nearby'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          <span className="text-[#2C4A6B]/40 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Behaviors:
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Prefers mobile apps for convenience and on-the-go checks',
                        'Relies on community recommendations and ratings',
                        'Checks weather multiple times before heading out',
                        'Seeks advice from sailing club members before trying new spots'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[#2C4A6B]/70" style={{ fontSize: '15px', lineHeight: 1.6 }}>
                          <span className="text-[#2C4A6B]/40 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            </div>
          </section>

          {/* Design Evolution */}
          <section className="bg-gray-50 border-y border-gray-200 py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <motion.div 
              className="space-y-3 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <div className="text-[#FF6B35]" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                04
              </div>
              <h2 
                className="text-[#2C4A6B]"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                Design Evolution
              </h2>
              <p className="text-[#2C4A6B]/70 max-w-2xl" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.6 }}>
                From initial sketches to polished high-fidelity prototypes, here's how GaleGate's design evolved through iterative refinement and user feedback.
              </p>
            </motion.div>

            <div className="space-y-10">
              {/* Low-Fidelity Sketches */}
              <div>
                <motion.div 
                  className="mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUpVariants}
                >
                  <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
                    Low-Fidelity Sketches
                  </h3>
                  <p className="text-[#2C4A6B]/70 max-w-3xl" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                    Initial wireframe sketches exploring key user flows, screen layouts, and interaction patterns. These hand-drawn concepts helped validate ideas quickly before investing in high-fidelity designs.
                  </p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  <motion.div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm" variants={staggerItem}>
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={lowFiSketch1}
                        alt="Low-fidelity sketch showing location forecast screen with wind, waves, and progression indicators"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-[#2C4A6B] mb-1" style={{ fontSize: '15px', fontWeight: 600 }}>
                        Location Forecast
                      </h4>
                      <p className="text-[#2C4A6B]/60" style={{ fontSize: '13px', fontWeight: 400 }}>
                        Detailed weather with wind/wave data and sport conditions
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm" variants={staggerItem}>
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={lowFiSketch2}
                        alt="Low-fidelity sketch showing spot search screen with map integration and filters"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-[#2C4A6B] mb-1" style={{ fontSize: '15px', fontWeight: 600 }}>
                        Spot Search
                      </h4>
                      <p className="text-[#2C4A6B]/60" style={{ fontSize: '13px', fontWeight: 400 }}>
                        Map-based search with secondary menu for filtering options
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm" variants={staggerItem}>
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={lowFiSketch3}
                        alt="Low-fidelity sketch showing community feed with events and marketplace"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-[#2C4A6B] mb-1" style={{ fontSize: '15px', fontWeight: 600 }}>
                        Community Hub
                      </h4>
                      <p className="text-[#2C4A6B]/60" style={{ fontSize: '13px', fontWeight: 400 }}>
                        Social feed with events calendar and marketplace integration
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Arrow Indicator */}
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent"></div>
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-[#FF6B35] rotate-90" />
                  </div>
                  <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent"></div>
                </div>
              </div>

              {/* Mid-Fidelity Prototype */}
              <div>
                <div className="mb-8">
                  <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
                    Mid-Fidelity Wireframes
                  </h3>
                  <p className="text-[#2C4A6B]/70 max-w-3xl" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                    Interactive wireframes with basic styling to test user flows and information architecture. At this stage, we refined the navigation patterns, content hierarchy, and core interactions before applying the final visual design.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-md">
                  <ImageWithFallback 
                    src={midFiPrototype}
                    alt="Mid-fidelity wireframes showing Bly Beach overview, review submission, and spot search screens"
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                {/* Design Refinements */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      User Flows
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}>
                      Validated navigation paths and screen transitions with clickable prototypes
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                      <Target className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      Content Structure
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}>
                      Organized weather data, reviews, and spot details into scannable sections
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      Interaction Patterns
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}>
                      Established consistent patterns for tabs, buttons, and form inputs
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent"></div>
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-[#FF6B35] rotate-90" />
                  </div>
                  <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent"></div>
                </div>
              </div>

              {/* High-Fidelity Prototype */}
              <div>
                <div className="mb-8">
                  <h3 className="text-[#2C4A6B] mb-3" style={{ fontSize: '28px', fontWeight: 600 }}>
                    High-Fidelity Prototype
                  </h3>
                  <p className="text-[#2C4A6B]/70 max-w-3xl" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                    The refined, polished designs featuring the complete visual system with glassmorphism effects, ocean-inspired gradients, and precise typography. These screens were tested with users to validate usability and emotional engagement.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                  <ImageWithFallback 
                    src={hiFiPrototype}
                    alt="High-fidelity prototype showing Explore Spots, Magnolia Beach detail, and Saved Locations screens with polished UI"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>

                {/* Key Improvements */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      Visual Hierarchy
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}>
                      Clear information structure with cards, labels, and spacing to guide user attention
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mb-3">
                      <Smartphone className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      Touch-Optimized
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}>
                      Appropriately sized touch targets and swipe gestures for mobile interaction
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mb-3">
                      <Target className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      Brand Identity
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}>
                      Cohesive ocean theme with consistent colors, icons, and glassmorphic elements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* User Flows */}
          <section className="bg-white border-y border-gray-200 py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <div className="space-y-3 mb-12">
              <div className="text-[#FF6B35]" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                05
              </div>
              <h2 
                className="text-[#2C4A6B]"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                User Flows
              </h2>
            </div>

            <div className="space-y-16">
              {/* Introduction */}
              <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.8, maxWidth: '900px' }}>
                Understanding how users navigate through GaleGate was crucial to creating an intuitive experience. We mapped out three primary user flows that address the core needs of our target audience: discovering new surf spots, checking real-time conditions, and engaging with the community. Each flow was designed to minimize friction while maximizing the delivery of relevant information.
              </p>

              {/* Flow 1: Image Left, Text Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={spotDiscoveryFlow}
                    alt="Spot discovery user flow"
                    className="w-full h-auto"
                    style={{ transform: 'scale(1.375)' }}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#FF6B35]" style={{ fontSize: '28px', fontWeight: 600 }}>
                    Spot Discovery Flow
                  </h3>
                  <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.7 }}>
                    Users begin their journey on the dashboard where they can quickly browse nearby spots or use the search feature. The flow prioritizes visual information with large spot cards showing key data at a glance. Users can tap any spot to view detailed conditions, save favorites, or check community reviews, creating a seamless path from discovery to decision.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                      <span className="text-[#2C4A6B]/70" style={{ fontSize: '15px', fontWeight: 500 }}>Dashboard → Search/Browse → Spot Details</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                      <span className="text-[#2C4A6B]/70" style={{ fontSize: '15px', fontWeight: 500 }}>View Conditions → Add to Favorites → Plan Session</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow 2: Text Left, Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 order-2 lg:order-1">
                  <h3 className="text-[#FF6B35]" style={{ fontSize: '28px', fontWeight: 600 }}>
                    Weather Check Flow
                  </h3>
                  <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.7 }}>
                    The weather check flow is designed for users who want quick access to conditions at their favorite spots. Starting from the dashboard or favorites list, users can instantly view current weather, wind speed, wave height, and tides. The interface presents complex meteorological data in an easy-to-understand visual format with color-coded indicators for optimal surfing conditions.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                      <span className="text-[#2C4A6B]/70" style={{ fontSize: '15px', fontWeight: 500 }}>Select Saved Spot → View Real-time Data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                      <span className="text-[#2C4A6B]/70" style={{ fontSize: '15px', fontWeight: 500 }}>Check Forecast → Set Weather Alerts</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img 
                    src={weatherCheckFlow}
                    alt="Weather check user flow"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Flow 3: Image Left, Text Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={communityFlow}
                    alt="Community engagement user flow"
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#FF6B35]" style={{ fontSize: '28px', fontWeight: 600 }}>
                    Community Engagement Flow
                  </h3>
                  <p className="text-[#2C4A6B]/80 text-justify" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.7 }}>
                    Community features are woven throughout the app, allowing users to share experiences and learn from others. Users can access the community hub from any spot detail page to read reviews, view photos, check event calendars, and participate in discussions. The flow encourages contribution while making it easy to filter and find relevant community content.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                      <span className="text-[#2C4A6B]/70" style={{ fontSize: '15px', fontWeight: 500 }}>Browse Community → View Reviews & Photos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                      <span className="text-[#2C4A6B]/70" style={{ fontSize: '15px', fontWeight: 500 }}>Create Event → Share Experience → Earn Rewards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* Design System */}
          <section className="bg-gray-50 border-y border-gray-200 py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between w-full group cursor-pointer">
                  <div className="space-y-3">
                    <div className="text-[#FF6B35]" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                      06
                    </div>
                    <h2 
                      className="text-[#2C4A6B] text-left"
                      style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em' }}
                    >
                      Design System
                    </h2>
                    <p className="text-[#2C4A6B]/60 text-left" style={{ fontSize: '16px', fontWeight: 400 }}>
                      Click to explore typography, colors, icons, and design details
                    </p>
                  </div>
                  <ChevronDown className="w-8 h-8 text-[#2C4A6B]/40 group-hover:text-[#2C4A6B] transition-all group-data-[state=open]:rotate-180" />
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="space-y-8 mt-12">
              {/* Typography */}
              <div>
                <h3 className="text-[#FF6B35] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Typography
                </h3>
                <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <div className="text-[#2C4A6B]/60" style={{ fontSize: '13px', fontWeight: 500 }}>
                    Font Family: Jost
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 backdrop-blur-sm rounded-xl border border-gray-200">
                      <div className="text-[#FF6B35] mb-1" style={{ fontSize: '11px', fontWeight: 500 }}>Regular (400)</div>
                      <div className="text-[#2C4A6B]" style={{ fontSize: '18px', fontWeight: 400 }}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 backdrop-blur-sm rounded-xl border border-gray-200">
                      <div className="text-[#FF6B35] mb-1" style={{ fontSize: '11px', fontWeight: 500 }}>Semibold (600)</div>
                      <div className="text-[#2C4A6B]" style={{ fontSize: '18px', fontWeight: 600 }}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 backdrop-blur-sm rounded-xl border border-gray-200">
                      <div className="text-[#FF6B35] mb-1" style={{ fontSize: '11px', fontWeight: 500 }}>Bold (700)</div>
                      <div className="text-[#2C4A6B]" style={{ fontSize: '18px', fontWeight: 700 }}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Palette */}
              <div>
                <h3 className="text-[#FF6B35] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Color Palette
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="h-24 bg-[#2C4A6B] rounded-2xl shadow-lg mb-3 border-2 border-gray-200"></div>
                    <div className="text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>Ocean Navy</div>
                    <div className="text-[#2C4A6B]/60" style={{ fontSize: '12px' }}>#2c4a6b</div>
                  </div>
                  <div className="text-center">
                    <div className="h-24 bg-[#FF6B35] rounded-2xl shadow-lg mb-3 border-2 border-gray-200"></div>
                    <div className="text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>Coral Orange</div>
                    <div className="text-[#2C4A6B]/60" style={{ fontSize: '12px' }}>#FF6B35</div>
                  </div>
                  <div className="text-center">
                    <div className="h-24 bg-[#D4E8F5] rounded-2xl shadow-lg mb-3 border-2 border-gray-200"></div>
                    <div className="text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>Sky Blue</div>
                    <div className="text-[#2C4A6B]/60" style={{ fontSize: '12px' }}>#d4e8f5</div>
                  </div>
                  <div className="text-center">
                    <div className="h-24 bg-white backdrop-blur-sm rounded-2xl shadow-lg mb-3 border-2 border-gray-200"></div>
                    <div className="text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>Pure White</div>
                    <div className="text-[#2C4A6B]/60" style={{ fontSize: '12px' }}>#ffffff</div>
                  </div>
                </div>
              </div>

              {/* Icons */}
              <div>
                <h3 className="text-[#FF6B35] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Icons
                </h3>
                <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Location</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Weather</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <Wind className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Wind</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <Waves className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Waves</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Favorite</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <Star className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Rating</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Events</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#2C4A6B]/10 flex items-center justify-center">
                        <Search className="w-6 h-6 text-[#2C4A6B]" />
                      </div>
                      <span className="text-[#2C4A6B]/60" style={{ fontSize: '11px', fontWeight: 500 }}>Search</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div>
                <h3 className="text-[#FF6B35] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Buttons
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Primary Button */}
                  <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                    <div className="mb-3 text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>
                      Primary
                    </div>
                    <button className="w-full px-6 py-3 bg-[#2C4A6B] text-white rounded-full" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Find Spots
                    </button>
                  </div>

                  {/* Secondary Button */}
                  <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                    <div className="mb-3 text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>
                      Secondary
                    </div>
                    <button className="w-full px-6 py-3 bg-white/20 backdrop-blur-sm text-[#2C4A6B] border border-[#2C4A6B]/30 rounded-full" style={{ fontSize: '15px', fontWeight: 600 }}>
                      View Details
                    </button>
                  </div>

                  {/* Accent Button */}
                  <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                    <div className="mb-3 text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>
                      Accent
                    </div>
                    <button className="w-full px-6 py-3 bg-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/30" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Add to Favorites
                    </button>
                  </div>

                  {/* Icon Button */}
                  <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                    <div className="mb-3 text-[#2C4A6B]" style={{ fontSize: '14px', fontWeight: 600 }}>
                      Icon Button
                    </div>
                    <div className="flex gap-3">
                      <button className="w-12 h-12 bg-[#2C4A6B]/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-[#2C4A6B]" />
                      </button>
                      <button className="w-12 h-12 bg-[#FF6B35]/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-[#FF6B35]" />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-[#2C4A6B]/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#2C4A6B]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Details */}
              <div>
                <h3 className="text-[#FF6B35] mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                  Design Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      Glassmorphism Effects
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.6 }}>
                      Frosted glass appearance with semi-transparent backgrounds, backdrop blur, and subtle borders
                    </p>
                  </div>
                  <div className="p-6 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                      Ocean Gradients
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.6 }}>
                      Smooth gradients from deep ocean navy to light sky blues creating depth and atmosphere
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </CollapsibleContent>
            </Collapsible>
            </div>
          </section>

          {/* Emotional Engagement */}
          <section className="bg-white border-y border-gray-200 py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between w-full group cursor-pointer">
                  <div className="space-y-3">
                    <div className="text-[#FF6B35]" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                      07
                    </div>
                    <h2 
                      className="text-[#2C4A6B] text-left"
                      style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em' }}
                    >
                      Emotional Engagement
                    </h2>
                    <p className="text-[#2C4A6B]/60 text-left" style={{ fontSize: '16px', fontWeight: 400 }}>
                      Click to explore how design creates emotional connection
                    </p>
                  </div>
                  <ChevronDown className="w-8 h-8 text-[#2C4A6B]/40 group-hover:text-[#2C4A6B] transition-all group-data-[state=open]:rotate-180" />
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch mt-12">
              {/* Image */}
              <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl h-full">
                <img 
                  src={emotionalEngagement}
                  alt="GaleGate app screens showing emotional design elements"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
                <p className="text-[#2C4A6B]/80" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.6 }}>
                  The new user interface builds emotional engagement through thoughtful visual and interaction design that balances warmth, calmness, and energy. It creates a friendly and motivating atmosphere that encourages users to connect with both the app and the community.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Personal connection:
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                      The redesigned profile screen uses rounded cards, soft gradients, and friendly emojis to create a warm, approachable tone that feels human and personal.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Sense of achievement:
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                      Elements like "Sessions," "Friends," and "Achievements" foster motivation and emotional satisfaction by showcasing progress and activity.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Mood-driven visuals:
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                      The weather and condition screens use ocean-inspired blues, smooth gradients, and nature-based icons (like sun and waves) to evoke calmness and a connection to the outdoors.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Energy and positivity:
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                      Bright accent colors and depth effects make the interface feel active and dynamic, encouraging engagement and excitement.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Community and belonging:
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                      The activity feed and shared session visuals highlight social interactions, building a sense of inclusion and shared experience.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#2C4A6B] mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                      Emotional balance:
                    </h4>
                    <p className="text-[#2C4A6B]/70" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                      The combination of clean spacing, consistent rounding, and subtle animation maintains a feeling of ease and trust while keeping the interface lively and modern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </CollapsibleContent>
            </Collapsible>
            </div>
          </section>

          {/* Interactive Prototype */}
          <section className="bg-white border-y border-gray-200 py-16">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <div className="space-y-3 mb-12">
              <div className="text-[#FF6B35]" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}>
                08
              </div>
              <h2 
                className="text-[#2C4A6B]"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                Interactive Prototype
              </h2>
              <p className="text-[#2C4A6B]/70 max-w-2xl" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.6 }}>
                Explore the GaleGate app in action. Click through the interactive screens to experience the user flow.
              </p>
            </div>

            {/* Prototype Viewer with Side Navigation */}
            <div id="prototype-viewer" className="flex items-start justify-center gap-6 lg:gap-12 py-12 flex-wrap lg:flex-nowrap">
              
              {/* Navigation Controls - Left Side */}
              <div className="space-y-4 order-2 lg:order-1 w-full lg:w-auto">
                <p className="text-[#2C4A6B]/60 text-center mb-6" style={{ fontSize: '15px', fontWeight: 500 }}>
                  💡 Navigate screens
                </p>
                <div className="flex flex-col gap-3 lg:min-w-[180px]">
                  <button
                    onClick={() => setCurrentScreen('dashboard')}
                    className={`w-full px-6 py-3 rounded-xl border-2 transition-all text-left ${
                      currentScreen === 'dashboard'
                        ? 'bg-[#FF6B35] border-[#FF6B35] text-white'
                        : 'bg-white border-gray-200 text-[#2C4A6B] hover:border-[#FF6B35]/50'
                    }`}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    🏠 Dashboard
                  </button>
                  <button
                    onClick={() => setCurrentScreen('search')}
                    className={`w-full px-6 py-3 rounded-xl border-2 transition-all text-left ${
                      currentScreen === 'search'
                        ? 'bg-[#FF6B35] border-[#FF6B35] text-white'
                        : 'bg-white border-gray-200 text-[#2C4A6B] hover:border-[#FF6B35]/50'
                    }`}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    🔍 Spot Search
                  </button>
                  <button
                    onClick={() => setCurrentScreen('weather')}
                    className={`w-full px-6 py-3 rounded-xl border-2 transition-all text-left ${
                      currentScreen === 'weather'
                        ? 'bg-[#FF6B35] border-[#FF6B35] text-white'
                        : 'bg-white border-gray-200 text-[#2C4A6B] hover:border-[#FF6B35]/50'
                    }`}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    ☀️ Weather
                  </button>
                  <button
                    onClick={() => setCurrentScreen('community')}
                    className={`w-full px-6 py-3 rounded-xl border-2 transition-all text-left ${
                      currentScreen === 'community'
                        ? 'bg-[#FF6B35] border-[#FF6B35] text-white'
                        : 'bg-white border-gray-200 text-[#2C4A6B] hover:border-[#FF6B35]/50'
                    }`}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    👥 Community
                  </button>
                  <button
                    onClick={() => setCurrentScreen('favorites')}
                    className={`w-full px-6 py-3 rounded-xl border-2 transition-all text-left ${
                      currentScreen === 'favorites'
                        ? 'bg-[#FF6B35] border-[#FF6B35] text-white'
                        : 'bg-white border-gray-200 text-[#2C4A6B] hover:border-[#FF6B35]/50'
                    }`}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    ❤️ Favorites
                  </button>
                  <button
                    onClick={() => setCurrentScreen('profile')}
                    className={`w-full px-6 py-3 rounded-xl border-2 transition-all text-left ${
                      currentScreen === 'profile'
                        ? 'bg-[#FF6B35] border-[#FF6B35] text-white'
                        : 'bg-white border-gray-200 text-[#2C4A6B] hover:border-[#FF6B35]/50'
                    }`}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    👤 Profile
                  </button>
                </div>

                {/* External Figma Prototype Link */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-[#2C4A6B]/60 text-center mb-3" style={{ fontSize: '13px', fontWeight: 500 }}>
                    Or access the prototype directly
                  </p>
                  <a
                    href="https://www.figma.com/proto/rZMxjd0TxyMLBpsuX95qp2/GaleGate-Final?page-id=0%3A1&node-id=207-10449&p=f&viewport=-226%2C-425%2C0.23&t=nIWywRPb9ZaaFZXC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=207%3A10449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border-2 border-[#2C4A6B] bg-white text-[#2C4A6B] hover:bg-[#2C4A6B] hover:text-white transition-all"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
                    </svg>
                    Open in Figma
                  </a>
                </div>
              </div>

              {/* iPhone 16 Pro Frame Container */}
              <div className="relative inline-block order-1 lg:order-2 flex-shrink-0" style={{ transform: 'scale(min(1, calc(90vw / 420)))' }}>
                {/* iPhone Frame - Realistic white/silver iPhone 16 Pro */}
                <div 
                  className="relative rounded-[60px] shadow-2xl"
                  style={{ 
                    width: '420px', 
                    height: '880px',
                    background: 'linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 50%, #e8e8e8 100%)',
                    border: '2px solid #d0d0d0',
                    padding: '12px'
                  }}
                >
                  {/* Volume Buttons - Left Side */}
                  <div className="absolute left-0 top-[120px] w-1 h-[30px] bg-gradient-to-r from-[#c0c0c0] to-[#d8d8d8] rounded-l-sm"></div>
                  <div className="absolute left-0 top-[170px] w-1 h-[60px] bg-gradient-to-r from-[#c0c0c0] to-[#d8d8d8] rounded-l-sm"></div>
                  <div className="absolute left-0 top-[240px] w-1 h-[60px] bg-gradient-to-r from-[#c0c0c0] to-[#d8d8d8] rounded-l-sm"></div>
                  
                  {/* Power Button - Right Side */}
                  <div className="absolute right-0 top-[200px] w-1 h-[80px] bg-gradient-to-l from-[#c0c0c0] to-[#d8d8d8] rounded-r-sm"></div>
                  
                  {/* Screen Content Area - Exact iPhone 16 screen: 393x852 */}
                  <div 
                    className="w-[393px] h-[852px] bg-black rounded-[48px] overflow-hidden relative shadow-inner"
                    style={{
                      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Clickable Prototype Content */}
                    <div className="w-full h-full overflow-hidden" style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        {renderPrototypeScreen()}
                      </div>
                    </div>
                  </div>
                  
                  {/* Dynamic Island */}
                  <div 
                    className="absolute top-[16px] left-1/2 -translate-x-1/2 bg-black rounded-full z-20"
                    style={{
                      width: '126px',
                      height: '37px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  ></div>
                </div>
              </div>
            </div>
            </div>
          </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-blue-50 border-t border-gray-200">
        <div className="max-w-[1000px] mx-auto text-center space-y-8">
          <h2 
            className="text-slate-900"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, letterSpacing: '-0.02em' }}
          >
            Interested in working together?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onClose}
              className="px-8 py-4 bg-white border border-gray-300 text-slate-700 rounded-full hover:bg-gray-50 transition-all shadow-sm"
              style={{ fontWeight: 600, fontSize: '16px' }}
            >
              ← Back to Portfolio
            </button>
            <a
              href="https://www.linkedin.com/in/bruno-campos-a247bb95/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md"
              style={{ fontWeight: 600, fontSize: '16px' }}
            >
              Let's Connect on LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
