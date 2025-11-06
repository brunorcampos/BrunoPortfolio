import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { PortfolioPage } from './components/PortfolioPage';
import { WorkPage } from './components/WorkPage';
import { GaleGateCaseStudy } from './components/GaleGateCaseStudy';
import { FashionFoodPhotography } from './components/FashionFoodPhotography';
import { HomeSewingProject } from './components/HomeSewingProject';
import { CVPage } from './components/CVPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import galegateImage from 'figma:asset/2f7866467c87b9ccd8a9537671353673d88f583e.png';

// Wrapper components for portfolio pages
function GaleGateWrapper() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <GaleGateCaseStudy onClose={() => navigate('/')} headerImage={galegateImage} />;
}

function FashionFoodWrapper() {
  const navigate = useNavigate();
  return <FashionFoodPhotography onClose={() => navigate('/')} />;
}

function HomeSewingWrapper() {
  const navigate = useNavigate();
  return <HomeSewingProject onClose={() => navigate('/')} />;
}

function CVWrapper() {
  const navigate = useNavigate();
  return <CVPage onBack={() => navigate('/')} />;
}

function AboutWrapper() {
  const navigate = useNavigate();
  return <AboutPage 
    onBack={() => navigate('/')} 
    onShowCV={() => navigate('/cv')} 
  />;
}

function ContactWrapper() {
  const navigate = useNavigate();
  return <ContactPage onBack={() => navigate('/')} />;
}

// Portfolio wrapper
function PortfolioWrapper() {
  const location = useLocation();
  const isFirstRender = React.useRef(true);

  // Update page title based on route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Bruno Campos Design',
      '/work': 'Featured Work - Bruno Campos Design',
      '/work/galegate': 'GaleGate Case Study - Bruno Campos Design',
      '/work/fashion-food': 'Fashion & Food Photography - Bruno Campos Design',
      '/work/home-sewing': 'Home Sewing Project - Bruno Campos Design',
      '/cv': 'CV - Bruno Campos Design',
      '/about': 'About - Bruno Campos Design',
      '/contact': 'Contact - Bruno Campos Design',
    };
    
    document.title = titles[location.pathname] || 'Bruno Campos Design';
  }, [location.pathname]);

  // Save current route to localStorage whenever it changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    if (location.pathname !== '/') {
      localStorage.setItem('figmaLastRoute', location.pathname);
    } else {
      localStorage.removeItem('figmaLastRoute');
    }
  }, [location.pathname]);

  // Force scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/galegate" element={<GaleGateWrapper />} />
      <Route path="/work/fashion-food" element={<FashionFoodWrapper />} />
      <Route path="/work/home-sewing" element={<HomeSewingWrapper />} />
      <Route path="/cv" element={<CVWrapper />} />
      <Route path="/about" element={<AboutWrapper />} />
      <Route path="/contact" element={<ContactWrapper />} />
    </Routes>
  );
}

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <PortfolioWrapper />
    </Router>
  );
}
