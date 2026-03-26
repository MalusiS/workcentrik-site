// src/App.jsx

import { useState, useEffect, useRef } from 'react';
import './App.css';
import logo from '/workcentrik-logo.svg';
import { 
  Globe, 
  ShoppingCart, 
  Cloud,
  Award, 
  Image as ImageIcon, 
  Users, 
  Search, 
  Wrench, 
  Mail, 
  MessageCircle,
  ArrowRight,
  Check,
  Code,
  Target,
  Zap,
  Menu,
  X,
  Smartphone
} from 'lucide-react';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to track active section
  const [activeSection, setActiveSection] = useState('');

  // State to track which service is selected for the contact form
  const [selectedService, setSelectedService] = useState('');
  
  // Ref to hold the current visibility status of all sections without triggering re-renders
  const visibleSections = useRef({});

  // Bulletproof Intersection Observer
  useEffect(() => {
    const handleScroll = (entries) => {
      // Update our ref with the latest true/false visibility
      entries.forEach((entry) => {
        visibleSections.current[entry.target.id] = entry.isIntersecting;
      });

      // Manually check our list in REVERSE DOM order.
      // This ensures that if multiple sections are visible (like at the bottom of the page),
      // the section furthest down the page wins the highlight.
      if (visibleSections.current['contact']) {
        setActiveSection('contact');
      } else if (visibleSections.current['about']) {
        setActiveSection('about');
      } else if (visibleSections.current['services']) {
        setActiveSection('services');
      } else {
        // If user is in the Hero section, turn off all highlights
        setActiveSection('top');
      }
    };

    // The observer settings: Slightly expanded bottom margin to easily catch short final sections
    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: '-100px 0px -20% 0px', 
      threshold: 0,
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); 
  }, []);
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
      icon: <Smartphone size={32} strokeWidth={1.5} />,
      title: "Mobile App Development",
      desc: "High-performance native apps for iOS and Android, built to scale and dominate the app stores.",
      price: "From R 25,000",
      range: "Typical range: R 25,000 – R 85,000+",
      features: [
        "Cross-platform (iOS & Android)",
        "App Store & Play Store deployment",
        "Custom API integration",
        "Offline functionality",
        "Push notifications"
      ],
      popular: false
    },
    {
      icon: <Cloud size={32} strokeWidth={1.5} />,
      title: "Premium Hosting & Domains",
      desc: "Ultra-fast SSD hosting and secure domain registration (.co.za, .com) managed entirely for you.",
      price: "From R 249 /mo",
      range: "Typical range: R 249 – R 899/mo",
      features: [
        "Domain registration & DNS setup",
        "Unlimited bandwidth & SSD storage",
        "Daily offsite backups",
        "Free SSL & weekly security scans",
        "WHOIS privacy protection"
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

  // Handle clicking the Email quote button
    const handleEmailQuote = (e, serviceTitle) => {
    e.preventDefault();
    setSelectedService(serviceTitle); // Pre-fill the dropdown
    scrollToSection(e, 'contact');    // Scroll to the form
  };

  // Smooth scroll handler
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    
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

        {/* Dynamic Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className={`nav-link ${activeSection === 'top' ? 'active' : ''}`}>Home</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </nav>

        <div className="header-actions">
          <a href={defaultWhatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button outline header-wa-btn flex-center">
            <MessageCircle size={18} className="icon-spacing" /> Chat on WhatsApp
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Premium Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className={activeSection === 'top' ? 'active' : ''}>Home</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className={activeSection === 'services' ? 'active' : ''}>Services</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section id="top" className="hero">
          {/* Abstract Background Elements (Styled in CSS) */}
          <div className="hero-glow glow-1"></div>
          <div className="hero-glow glow-2"></div>

          <div className="hero-content">
            
            {/* Status Pill */}
            <div className="hero-pill">
              <span className="pulse-dot"></span> Accepting new projects
            </div>
            
            {/* Magnetic Headline */}
            <h1>
              Engineer Your Unfair <br className="desktop-break" />
              <span className="text-gradient">Digital Advantage.</span>
            </h1>
            
            {/* Authoritative Subheadline */}
            <p className="hero-subtitle">
              WorkCentrik engineers high-performance digital experiences that transform
              complex ideas into scalable, conversion-driven platforms. Stop blending in.
              Start dominating online.
            </p>
            
            {/* Dual CTAs */}
            <div className="hero-ctas">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="cta-button primary flex-center">
                Start a Project <ArrowRight size={18} />
              </a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="cta-button outline hero-outline flex-center">
                Explore Services
              </a>
            </div>

            {/* Trust Signals / Tech Stack */}
            <div className="hero-tech-stack">
              <p>Specialized expertise in</p>
              <div className="tech-tags">
                <span>React</span>
                <span className="dot-separator">•</span>
                <span>JavaScript</span>
                <span className="dot-separator">•</span>
                <span>UI/UX</span>
                <span className="dot-separator">•</span>
                <span>Technical SEO</span>
              </div>
            </div>

          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="services-header-context">
            <span className="premium-pill">Transparent Pricing • No Hidden Fees</span>
            <h2>Services</h2>
            <p className="services-subtitle">Everything your business needs to dominate online — with clear price ranges so you know exactly what to expect.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => {
              const serviceMessage = encodeURIComponent(`Hi WorkCentrik! 👋\n\nI'm interested in your *${service.title}* service.\n\nPlease send me a detailed quote. Thank you!`);
              const serviceLink = `https://wa.me/${whatsappNumber}?text=${serviceMessage}`;

              return (
                // Changed from <a> to <div> to allow multiple buttons inside
                <div key={index} className={`service-card interactive ${service.popular ? 'popular-card' : ''}`}>
                  
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
                    
                    {/* New Split Action Buttons */}
                    <div className="service-actions">
                      <a 
                        href={serviceLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="action-btn wa-btn" 
                        title="Quote via WhatsApp"
                      >
                        <MessageCircle size={18} />
                      </a>
                      
                      {/* THIS is where handleEmailQuote is used! */}
                      <button 
                        onClick={(e) => handleEmailQuote(e, service.title)} 
                        className="action-btn email-btn" 
                        title="Quote via Email"
                      >
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="services-disclaimer">
            <p>Every project is 100% custom. The ranges above are for typical scopes — we’ll provide an exact quote after a quick chat.</p>
          </div>
        </section>

        {/* About / Agency DNA Section */}
        <section id="about" className="about-section">
          <div className="services-header-context">
            <span className="premium-pill">About Our Agency</span>
            <h2>Architecting Digital Growth</h2>
            <p className="services-subtitle">We don't just build websites. We engineer scalable, high-performance digital assets that establish trust and drive measurable results.</p>
          </div>

          <div className="about-grid">
            {/* Left Column: The Philosophy */}
            <div className="about-philosophy">
              <div className="philosophy-item">
                <div className="philosophy-icon"><Code size={24} /></div>
                <div>
                  <h3>Clean Architecture</h3>
                  <p>We prioritize modern frameworks like React and write clean, responsive code to ensure lightning-fast load times and seamless experiences across all devices.</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon"><Target size={24} /></div>
                <div>
                  <h3>Strategic Partnerships</h3>
                  <p>We act as your dedicated technology partner. We invest time in understanding your unique vision to deliver bespoke solutions tailored to your specific market.</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon"><Zap size={24} /></div>
                <div>
                  <h3>Uncompromising Standards</h3>
                  <p>From the initial UX wireframes to post-launch technical SEO and security maintenance, we enforce rigorous quality control at every stage of development.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Leadership Profile (Dynamically Toggled) */}
            <div className={`leadership-card ${!isExpanded ? 'collapsed' : ''}`}>
              <div className="leadership-header">
                <div className="leadership-avatar"><Users size={28} /></div>
                <div>
                  <h3 className="leadership-name">Executive Leadership</h3>
                  <span className="leadership-title">Engineering & Project Management</span>
                </div>
              </div>

              {/* Text container for the truncated section */}
              <div className="leadership-bio-wrapper">
                <p>Operating out of Cape Town, WorkCentrik is spearheaded by a dynamic dual-leadership team combining over a decade of strategic project management with cutting-edge front-end development.</p>
                <p>Backed by academic foundations from the University of Cape Town and ongoing Computer Science studies at Harvard University, our directors bridge the critical gap between pixel-perfect aesthetic appeal, rigorous technical performance, and flawless execution.</p>
                
                {/* Condition: Show this part only when expanded */}
                {isExpanded && (
                  <p>Driven by a philosophy of continuous mastery and community mentorship, our leadership ensures that every digital asset we architect is delivered on time, within scope, and built to scale.</p>
                )}
              </div>

              {/* The interaction button (inline and seamless) */}
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="read-more-btn"
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Read less' : 'Read more...'}
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            
            {/* Left Column: Contact Info */}
            <div className="contact-info">
              <h2>Ready to start a project?</h2>
              <p>Get in touch with us today to discuss your digital needs. Choose your preferred method of communication.</p>
              
              <div className="contact-methods">
                <a href="mailto:info@workcentrik.com" className="contact-link flex-center">
                  <Mail size={20} className="icon-spacing" /> info@workcentrik.com
                </a>
                <a href={defaultWhatsappLink} target="_blank" rel="noopener noreferrer" className="contact-link whatsapp flex-center">
                  <MessageCircle size={20} className="icon-spacing" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Column: Formspree Contact Form */}
            <div className="contact-form-wrapper">
              {/* NOTE: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree endpoint */}
              <form action="https://formspree.io/f/maqpklgy" method="POST" className="premium-form">
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="e.g. John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={selectedService} 
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">General Enquiry</option>
                    {services.map((s, idx) => (
                      <option key={idx} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" rows="4" required placeholder="Tell us a bit about your goals and requirements..."></textarea>
                </div>
                
                <button type="submit" className="cta-button primary full-width">Send Request</button>
              </form>
            </div>

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
