// src/App.jsx

import React from 'react';
import './App.css';
import logo from '/workcentrik-logo.svg';
import { 
  Monitor, 
  Server, 
  PenTool, 
  Layout, 
  Smartphone, 
  ShoppingCart, 
  TrendingUp, 
  ShieldCheck, 
  Mail, 
  MessageCircle 
} from 'lucide-react';

function App() {
  const whatsappNumber = "27768297455";
  const whatsappMessage = encodeURIComponent("Hi WorkCentrik! I'm interested in your design and development services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const services = [
    { icon: <Monitor size={32} strokeWidth={1.5} />, title: "Web Design & Development", desc: "Custom, responsive React websites tailored to your brand." },
    { icon: <Server size={32} strokeWidth={1.5} />, title: "Web Hosting & Domains", desc: "Reliable hosting solutions and seamless domain name registration." },
    { icon: <PenTool size={32} strokeWidth={1.5} />, title: "Logo & Brand Identity", desc: "Professional logo design and comprehensive brand guidelines." },
    { icon: <Layout size={32} strokeWidth={1.5} />, title: "Graphic & Poster Design", desc: "Eye-catching marketing materials and digital posters." },
    { icon: <Smartphone size={32} strokeWidth={1.5} />, title: "UI/UX Design", desc: "Intuitive user interfaces focused on exceptional user experiences." },
    { icon: <ShoppingCart size={32} strokeWidth={1.5} />, title: "E-Commerce Solutions", desc: "Secure and scalable online stores to grow your digital sales." },
    { icon: <TrendingUp size={32} strokeWidth={1.5} />, title: "SEO Optimization", desc: "Search engine strategies to help your business rank higher." },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Web Maintenance", desc: "Ongoing support, security updates, and performance monitoring." }
  ];

  // Smooth scroll handler that prevents URL hash updates
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="site-header">
        {/* Logo is now a clickable link back to the top */}
        <a href="/" onClick={(e) => scrollToSection(e, 'top')} className="logo-link" aria-label="Back to top">
          <img src={logo} alt="WorkCentrik Logo" className="logo" />
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button outline flex-center">
          <MessageCircle size={18} className="icon-spacing" /> Chat on WhatsApp
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Building Digital Excellence</h1>
            <p>
              We are currently crafting our full online experience. In the meantime, 
              discover how WorkCentrik can elevate your business with modern web and design solutions.
            </p>
            {/* Explore button now uses the custom scroll function */}
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="cta-button primary">
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <h2>What We Do</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Ready to start a project?</h2>
          <p>Get in touch with us today to discuss your digital needs.</p>
          <div className="contact-methods">
            <a href="mailto:info@workcentrik.com" className="contact-link flex-center">
              <Mail size={20} className="icon-spacing" /> info@workcentrik.com
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-link whatsapp flex-center">
              <MessageCircle size={20} className="icon-spacing" /> WhatsApp Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} WorkCentrik. All rights reserved.</p>
        <p>Proudly based in Cape Town, South Africa.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
