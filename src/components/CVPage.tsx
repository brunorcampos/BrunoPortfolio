import React from 'react';
import { Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Navigation } from './Navigation';

interface CVPageProps {
  onBack: () => void;
}

export const CVPage: React.FC<CVPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Light theme for CV page */}
      <Navigation theme="light" />
      
      {/* Download Button - Integrated into page flow */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[900px] mx-auto px-6 py-4 flex justify-end">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-[900px] mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-12 pb-8 border-b-2 border-slate-200">
          <h1 
            className="text-slate-900 mb-3"
            style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            BRUNO CAMPOS
          </h1>
          <p 
            className="text-slate-600 mb-6"
            style={{ fontSize: '20px', fontWeight: 500 }}
          >
            Product Designer | UX/UI Specialist
          </p>
          
          <div className="flex flex-wrap gap-6 text-slate-600">
            <div className="flex items-center gap-2" style={{ fontSize: '15px', fontWeight: 400 }}>
              <Phone className="w-4 h-4" />
              +31 06 84468414
            </div>
            <div className="flex items-center gap-2" style={{ fontSize: '15px', fontWeight: 400 }}>
              <Mail className="w-4 h-4" />
              brunoinvan@gmail.com
            </div>
            <div className="flex items-center gap-2" style={{ fontSize: '15px', fontWeight: 400 }}>
              <MapPin className="w-4 h-4" />
              Amsterdam, NL
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 
            className="text-slate-900 mb-4 pb-2 border-b border-slate-200"
            style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p 
            className="text-slate-700 leading-relaxed"
            style={{ fontSize: '16px', fontWeight: 400 }}
          >
            Driven Product Designer transitioning from extensive project management and international account leadership. 
            Proficient in Figma, user research, and agile methodologies, with a passion for transforming complex data 
            into intuitive, user-centric digital products. Experienced in end-to-end product delivery from design to 
            deployment using modern AI-assisted development workflows, enabling rapid prototyping and seamless 
            design-to-development handoff. Ready to leverage a strong background in architecture and strategic 
            planning to deliver measurable product improvements.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-10">
          <h2 
            className="text-slate-900 mb-4 pb-2 border-b border-slate-200"
            style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            CORE COMPETENCIES
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-900 mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                Design Tools:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                Figma (Prototyping, Auto-Layout, Design Systems), Adobe Suite (Illustrator & Photoshop).
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                UX Skills:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                User Research, Usability Testing (Moderated/Unmoderated), Persona Creation, Information Architecture, 
                Wireframing, User Flow Mapping.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                Methodologies:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                Agile Management (Scrum/Kanban), Design Thinking, Heuristics Evaluation.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                Development Workflow:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                AI-Assisted Front-End Development (Figma to Code), Git/GitHub Version Control, 
                Deployment & CI/CD (Netlify), Design-to-Development Handoff, Responsive Design Principles, 
                Interactive Prototyping, Build Troubleshooting.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                Transferable:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                Project Management, International Sourcing, Leadership, Stakeholder Management, Cultural Awareness.
              </p>
            </div>
          </div>
        </section>

        {/* Key Project */}
        <section className="mb-10 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
          <h2 
            className="text-slate-900 mb-4"
            style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            KEY PROJECT: GaleGate Mobile App
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-900 mb-1" style={{ fontSize: '17px', fontWeight: 600 }}>
                Product:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                A specialized mobile weather application for water sports enthusiasts (surfers, kitesurfers).
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-1" style={{ fontSize: '17px', fontWeight: 600 }}>
                Role:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                Lead UX Researcher & Product Designer.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-1" style={{ fontSize: '17px', fontWeight: 600 }}>
                Challenge (Data Readability):
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                Users struggled to quickly interpret complex wind and tide data necessary for safe sport participation. 
                Usability testing revealed a Severity 4 Usability Catastrophe when trying to determine peak wind times, 
                forcing users to manually read hourly data.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                Solution & Impact:
              </h3>
              <ul className="space-y-2 ml-5">
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Redesigned the forecast component to include a clear wind summary (e.g., "Wind strongest at 3 PM from 
                  the NE") displayed prominently above the data chart.
                </li>
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Replaced ambiguous wind direction arrows with labeled icons (e.g., 'from N', 'to SE') based on 
                  participant feedback (P5: "Does this arrow mean coming from or blowing to?").
                </li>
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  <strong>Result:</strong> Eliminated the Severity 4 issue and significantly reduced task completion time 
                  for Objective B (Data Readability), allowing users to make faster, safer decisions.
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-1" style={{ fontSize: '17px', fontWeight: 600 }}>
                Community Feature Improvement:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                Improved the learnability of the Community Event Creation flow by adding a visible '+ Create Event' 
                button and share options post-creation, resolving a major usability concern.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 mb-1" style={{ fontSize: '17px', fontWeight: 600 }}>
                Portfolio & Documentation:
              </h3>
              <p className="text-slate-700" style={{ fontSize: '16px', fontWeight: 400 }}>
                Designed and deployed an interactive portfolio website (brunocamposdesign.netlify.app) featuring 
                comprehensive case studies with scroll animations and responsive design. Leveraged AI-assisted development 
                tools (Figma Make) to convert Figma designs to production code, managed version control via Git/GitHub, 
                and successfully deployed via Netlify CI/CD pipeline after troubleshooting build configuration issues.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h2 
            className="text-slate-900 mb-4 pb-2 border-b border-slate-200"
            style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
          
          <div className="space-y-6">
            {/* Tapajós Tecidos */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-slate-900" style={{ fontSize: '18px', fontWeight: 600 }}>
                    Tapajós Tecidos
                  </h3>
                  <p className="text-slate-600" style={{ fontSize: '16px', fontWeight: 500 }}>
                    International Account Manager - Buyer
                  </p>
                </div>
                <span className="text-slate-500" style={{ fontSize: '15px', fontWeight: 500 }}>
                  2016 – 2024
                </span>
              </div>
              <ul className="space-y-2 ml-5">
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Managed sourcing and supply chain relationships with international textile partners (China, India, Europe), 
                  requiring expert negotiation and strategic planning.
                </li>
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Directed budget allocation and project timelines for global stock purchasing and logistics, consistently 
                  meeting inventory goals.
                </li>
              </ul>
            </div>

            {/* INRIX */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-slate-900" style={{ fontSize: '18px', fontWeight: 600 }}>
                    INRIX
                  </h3>
                  <p className="text-slate-600" style={{ fontSize: '16px', fontWeight: 500 }}>
                    Data Operations Manager
                  </p>
                </div>
                <span className="text-slate-500" style={{ fontSize: '15px', fontWeight: 500 }}>
                  2019 – 2022
                </span>
              </div>
              <ul className="space-y-2 ml-5">
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Compiled, managed, and updated server databases with critical urban planning data (traffic, parking, 
                  map alterations) for the ParkMe app in Amsterdam and Oslo.
                </li>
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Ensured data accuracy and integrity, directly impacting user experience and application reliability 
                  across two major metropolitan areas.
                </li>
              </ul>
            </div>

            {/* Velloreti */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-slate-900" style={{ fontSize: '18px', fontWeight: 600 }}>
                    Velloreti
                  </h3>
                  <p className="text-slate-600" style={{ fontSize: '16px', fontWeight: 500 }}>
                    Customer Service Quality Ensurer
                  </p>
                </div>
                <span className="text-slate-500" style={{ fontSize: '15px', fontWeight: 500 }}>
                  2022 – 2023
                </span>
              </div>
              <ul className="space-y-2 ml-5">
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Monitored ticket systems and managed escalation processes, improving customer resolution times and 
                  service quality.
                </li>
                <li className="text-slate-700 list-disc" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Updated and implemented the Customer Service manual, establishing best practices and training protocols 
                  for team members.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 
            className="text-slate-900 mb-4 pb-2 border-b border-slate-200"
            style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            EDUCATION
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-slate-900" style={{ fontSize: '17px', fontWeight: 600 }}>
                  Product Designer Certificate
                </h3>
                <p className="text-slate-600" style={{ fontSize: '16px', fontWeight: 400 }}>
                  CareerFoundry
                </p>
              </div>
              <span className="text-slate-500" style={{ fontSize: '15px', fontWeight: 500 }}>
                2025
              </span>
            </div>
            
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-slate-900" style={{ fontSize: '17px', fontWeight: 600 }}>
                  Agile Management & Scrum
                </h3>
                <p className="text-slate-600" style={{ fontSize: '16px', fontWeight: 400 }}>
                  PUC São Paulo
                </p>
              </div>
              <span className="text-slate-500" style={{ fontSize: '15px', fontWeight: 500 }}>
                2023
              </span>
            </div>
            
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-slate-900" style={{ fontSize: '17px', fontWeight: 600 }}>
                  Bachelor in Architecture
                </h3>
                <p className="text-slate-600" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Federal University of Amazonas
                </p>
              </div>
              <span className="text-slate-500" style={{ fontSize: '15px', fontWeight: 500 }}>
                2016
              </span>
            </div>
            
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-slate-900" style={{ fontSize: '17px', fontWeight: 600 }}>
                  Graphic and Web Design Diploma
                </h3>
                <p className="text-slate-600" style={{ fontSize: '16px', fontWeight: 400 }}>
                  Vancouver College of Art and Design
                </p>
              </div>
              <span className="text-slate-500" style={{ fontSize: '15px', fontWeight: 500 }}>
                2012
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500" style={{ fontSize: '14px', fontWeight: 400 }}>
            References available upon request
          </p>
        </div>
      </div>
    </div>
  );
};
