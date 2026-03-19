// src/App.jsx

import React from 'react';
import './App.css';
import logo from '/workcentrik-logo.svg';
import { 
  Globe, 
  ShoppingCart, 
  Tag, 
  Cloud, 
  Award, 
  Image as ImageIcon, 
  Users, 
  Search, 
  Wrench, 
  Mail, 
  MessageCircle,
  ArrowRight,
  Check
} from 'lucide-react';

function App() {
  const whatsappNumber = "27768297455";
  const defaultWhatsappMessage = encodeURIComponent("Hi WorkCentrik! I'm interested in your design and development services.");
  const defaultWhatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultWhatsappMessage}`;

  // ENHANCED SERVICES WITH PRICE RANGES AND FEATURES
  const services = [
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: "Custom Web Design & Development",
      desc: "Pixel-perfect, lightning-fast, fully responsive websites built with modern React.",
      price: "From R 9,500",
      range: "Typical range: R 9,500 – R 35,000",
      features: [
        "Mobile-first responsive design",
        "SEO-optimised structure",
        "Contact forms + analytics",
        "3 rounds of revisions",
        "1 month free support"
      ],
      popular: true
    },
    {
      icon: <ShoppingCart size={32} strokeWidth={1.5} />,
      title: "E-commerce Solutions",
      desc: "Powerful online stores with secure payments, inventory, and stunning product pages.",
      price: "From R 18,000",
      range: "Typical range: R 18,000 – R 55,000",
      features: [
        "WooCommerce / Shopify / Custom",
        "Payment gateway integration",
        "Product management dashboard",
        "Abandoned cart recovery",
        "Free SSL & hosting setup"
      ],
      popular: false
    },
    {
      icon: <Tag size={32} strokeWidth={1.5} />,
      title: "Domain Name Registration",
      desc: "Secure .co.za, .com, .net and international domains with instant activation.",
      price: "From R 99",
      range: "Typical range: R 99 – R 399 / year",
      features: [
        "WHOIS privacy included",
        "DNS management panel",
        "Auto-renewal option",
        "Transfer assistance"
      ],
      popular: false
    },
    {
      icon: <Cloud size={32} strokeWidth={1.5} />,
      title: "Web Hosting & Maintenance",
      desc: "Ultra-fast SSD hosting with daily backups, security monitoring and 99.99% uptime.",
      price: "From R 149",
      range: "Typical range: R 149 – R 799 / month",
      features: [
        "Unlimited bandwidth",
        "Daily offsite backups",
        "Free SSL certificate",
        "Weekly security scans",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      icon: <Award size={32} strokeWidth={1.5} />,
      title: "Logo & Brand Identity Design",
      desc: "Timeless logos + complete brand kits (business cards, social assets, guidelines).",
      price: "From R 2,999",
      range: "Typical range: R 2,999 – R 12,000",
      features: [
        "Unlimited concepts & revisions",
        "Full colour palette & typography",
        "Source files (AI, PSD, SVG)",
        "Social media kit included"
      ],
      popular: false
    },
    {
      icon: <ImageIcon size={32} strokeWidth={1.5} />,
      title: "Graphic Design & Print",
      desc: "Posters, flyers, banners, social media visuals, packaging and full print campaigns.",
      price: "From R 1,500",
      range: "Typical range: R 1,500 – R 8,000",
      features: [
        "Print-ready files",
        "Multiple size variations",
        "Brand-consistent styling",
        "Fast 48-hour delivery"
      ],
      popular: false
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: "UI/UX Design & Prototyping",
      desc: "Beautiful, intuitive interfaces that convert visitors into paying customers.",
      price: "From R 4,500",
      range: "Typical range: R 4,500 – R 15,000",
      features: [
        "Figma prototypes",
        "User flow mapping",
        "Usability testing",
        "Dark/light mode versions"
      ],
      popular: false
    },
    {
      icon: <Search size={32} strokeWidth={1.5} />,
      title: "Local SEO & Google Ranking",
      desc: "Get found first in Cape Town & South Africa. Google Business, on-page & technical SEO.",
      price: "From R 4,000",
      range: "Typical range: R 4,000 – R 15,000",
      features: [
        "Google Business Profile setup",
        "Keyword research",
        "On-page optimisation",
        "Monthly ranking reports"
      ],
      popular: true
    },
    {
      icon: <Wrench size={32} strokeWidth={1.5} />,
      title: "Ongoing Website Support",
      desc: "Peace of mind — we keep your site fast, secure and always up-to-date.",
      price: "From R 999",
      range: "Typical range: R 999 – R 3,999 / month",
      features: [
        "Unlimited small updates",
        "Security patches",
        "Speed optimisation",
        "Content changes",
        "Monthly backup"
      ],
      popular: false
    }
  ];

  // Smooth scroll handler
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
        <a href="/" onClick={(e) => scrollToSection(e, 'top')} className="logo-link" aria-label="Back to top">
          <img src={logo} alt="WorkCentrik Logo" className="logo" />
        </a>

        {/* New Centered Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="nav-link">Services & Pricing</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-link">Contact Us</a>
        </nav>

        <a href={defaultWhatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button outline flex-center">
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
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="cta-button primary">
              Explore Services & Pricing
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="services-header-context">
            <span className="premium-pill">Transparent Pricing • No Hidden Fees</span>
            <h2>Services & Pricing</h2>
            <p className="services-subtitle">Everything your business needs to dominate online — with clear price ranges so you know exactly what to expect.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => {
              const serviceMessage = encodeURIComponent(`Hi WorkCentrik! 👋\n\nI'm interested in your *${service.title}* service.\n\nPlease send me a detailed quote. Thank you!`);
              const serviceLink = `https://wa.me/${whatsappNumber}?text=${serviceMessage}`;

              return (
                <a key={index} href={serviceLink} target="_blank" rel="noopener noreferrer" className={`service-card interactive ${service.popular ? 'popular-card' : ''}`}>
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}

                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  
                  {/* Features List */}
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <Check size={16} strokeWidth={3} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-footer">
                    <div className="price-container">
                      <span className="service-price">{service.price}</span>
                      <span className="service-range">{service.range}</span>
                    </div>
                    <span className="service-action">
                      Quote <ArrowRight size={16} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="services-disclaimer">
            <p>Every project is 100% custom. The ranges above are for typical scopes — we’ll provide an exact quote after a quick chat.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Ready to start a project?</h2>
          <p>Get in touch with us today to discuss your digital needs.</p>
          <div className="contact-methods">
            <a href="mailto:info@workcentrik.com" className="contact-link flex-center">
              <Mail size={20} className="icon-spacing" /> info@workcentrik.com
            </a>
            <a href={defaultWhatsappLink} target="_blank" rel="noopener noreferrer" className="contact-link whatsapp flex-center">
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
      <a href={defaultWhatsappLink} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat with us on WhatsApp">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
