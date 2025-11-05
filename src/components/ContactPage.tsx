import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Navigation } from './Navigation';

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`${formData.subject} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\n` +
      `This message was sent from the portfolio contact form.`
    );
    
    // Open user's default email client with pre-filled information
    window.location.href = `mailto:brunoinvan@gmail.com?subject=${subject}&body=${body}`;
    
    // Optional: Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 
                className="text-white"
                style={{ 
                  fontSize: 'clamp(48px, 8vw, 88px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.04em'
                }}
              >
                Let's Work
                <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h1>
              <p 
                className="text-slate-300 max-w-2xl mx-auto"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1.7 }}
              >
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Left - Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  <h2 
                    className="text-white"
                    style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-0.01em' }}
                  >
                    Get in Touch
                  </h2>
                  <p 
                    className="text-slate-300"
                    style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.6 }}
                  >
                    Whether you have a question, want to discuss a project, or just want to say hi, 
                    I'll do my best to get back to you as soon as possible.
                  </p>
                </div>

                {/* Contact Information Cards */}
                <div className="space-y-4">
                  <a 
                    href="mailto:brunoinvan@gmail.com"
                    className="relative group block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl blur-xl"></div>
                    <div className="relative flex items-start gap-4 p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                          Email
                        </h3>
                        <p className="text-slate-300" style={{ fontSize: '15px', fontWeight: 400 }}>
                          brunoinvan@gmail.com
                        </p>
                      </div>
                    </div>
                  </a>

                  <a 
                    href="tel:+31684468414"
                    className="relative group block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl blur-xl"></div>
                    <div className="relative flex items-start gap-4 p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                          Phone
                        </h3>
                        <p className="text-slate-300" style={{ fontSize: '15px', fontWeight: 400 }}>
                          +31 06 84468414
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl"></div>
                    <div className="relative flex items-start gap-4 p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                          Location
                        </h3>
                        <p className="text-slate-300" style={{ fontSize: '15px', fontWeight: 400 }}>
                          Amsterdam, Netherlands 🇳🇱
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4 pt-4">
                  <h3 
                    className="text-white"
                    style={{ fontSize: '18px', fontWeight: 600 }}
                  >
                    Connect with me
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://www.linkedin.com/in/bruno-campos-a247bb95/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
                      <span className="text-slate-300 group-hover:text-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                        LinkedIn
                      </span>
                    </a>
                    <a 
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                      <span className="text-slate-300 group-hover:text-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                        GitHub
                      </span>
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative p-6 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                    <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                      Availability
                    </h3>
                    <p className="text-slate-300" style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.6 }}>
                      Currently available for freelance projects and full-time opportunities. 
                      Response time: Usually within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-3xl blur-xl"></div>
                    <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl space-y-6">
                      <h2 
                        className="text-white"
                        style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.01em' }}
                      >
                        Send a Message
                      </h2>

                      {/* Name Input */}
                      <div className="space-y-2">
                        <label 
                          htmlFor="name"
                          className="block text-slate-300"
                          style={{ fontSize: '15px', fontWeight: 600 }}
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                          style={{ fontSize: '16px', fontWeight: 400 }}
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-2">
                        <label 
                          htmlFor="email"
                          className="block text-slate-300"
                          style={{ fontSize: '15px', fontWeight: 600 }}
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                          style={{ fontSize: '16px', fontWeight: 400 }}
                        />
                      </div>

                      {/* Subject Input */}
                      <div className="space-y-2">
                        <label 
                          htmlFor="subject"
                          className="block text-slate-300"
                          style={{ fontSize: '15px', fontWeight: 600 }}
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                          style={{ fontSize: '16px', fontWeight: 400 }}
                        >
                          <option value="" className="bg-slate-900">Select a subject</option>
                          <option value="project" className="bg-slate-900">New Project Inquiry</option>
                          <option value="collaboration" className="bg-slate-900">Collaboration Opportunity</option>
                          <option value="job" className="bg-slate-900">Job Opportunity</option>
                          <option value="question" className="bg-slate-900">General Question</option>
                          <option value="other" className="bg-slate-900">Other</option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div className="space-y-2">
                        <label 
                          htmlFor="message"
                          className="block text-slate-300"
                          style={{ fontSize: '15px', fontWeight: 600 }}
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={8}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell me about your project..."
                          style={{ fontSize: '16px', fontWeight: 400 }}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all overflow-hidden"
                        style={{ fontWeight: 700, fontSize: '16px' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative">Send Message</span>
                        <Send className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="space-y-2">
                        <p className="text-slate-400 text-center" style={{ fontSize: '14px', fontWeight: 400 }}>
                          * Required fields
                        </p>
                        <p className="text-slate-500 text-center" style={{ fontSize: '13px', fontWeight: 400 }}>
                          Clicking "Send Message" will open your email client with the form details pre-filled
                        </p>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Additional Info */}
                <div className="mt-6 space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl blur-xl"></div>
                    <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
                      <h3 className="text-white mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        💡 Quick Tip
                      </h3>
                      <p className="text-slate-300" style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.6 }}>
                        For project inquiries, please include details about your timeline, budget range, and 
                        specific requirements. This helps me provide you with a more accurate response.
                      </p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl"></div>
                    <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                      <p className="text-slate-300 mb-3" style={{ fontSize: '15px', fontWeight: 400 }}>
                        Or email me directly at
                      </p>
                      <a 
                        href="mailto:brunoinvan@gmail.com"
                        className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                        style={{ fontSize: '16px', fontWeight: 600 }}
                      >
                        <Mail className="w-5 h-5" />
                        brunoinvan@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-8 lg:px-16 border-t border-white/10">
          <div className="max-w-[1000px] mx-auto">
            <h2 
              className="text-white text-center mb-12"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, letterSpacing: '-0.02em' }}
            >
              Common Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: 'What is your typical response time?',
                  answer: 'I usually respond to all inquiries within 24 hours during business days.'
                },
                {
                  question: 'Do you work remotely?',
                  answer: 'Yes, I work with clients worldwide and am comfortable with remote collaboration.'
                },
                {
                  question: 'What types of projects do you take on?',
                  answer: 'I specialize in UX/UI design for web and mobile applications, focusing on user-centered solutions.'
                },
                {
                  question: 'Can we schedule a call?',
                  answer: 'Absolutely! After initial contact, we can schedule a call to discuss your project in detail.'
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-2xl blur-xl"></div>
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
                    <h3 className="text-white mb-2" style={{ fontSize: '17px', fontWeight: 600 }}>
                      {item.question}
                    </h3>
                    <p className="text-slate-300" style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.6 }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
