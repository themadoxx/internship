import React, { useState, useEffect } from "react";
import {
  Clock,
  Globe,
  Laptop,
  Briefcase,
  User,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Building,
  Zap,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

// Simulated Section component
const Section = ({ title, subtitle, children, className = "" }) => (
  <section className={`section ${className}`}>
    {title && (
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    )}
    {children}
  </section>
);

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Glowing card component
const GlowCard = ({ children, className = "" }) => (
  <div className={`glow-card ${className}`}>
    <div className="glow-effect"></div>
    <div className="card-content">{children}</div>
  </div>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyMetrics = [
    { label: "Weeks", value: 7, icon: Calendar, color: "blue" },
    { label: "Hours/week", value: 35, icon: Clock, color: "purple" },
    { label: "Total hours", value: 245, icon: TrendingUp, color: "green" },
    { label: "Remote days", value: 7, icon: Laptop, color: "orange" },
  ];

  const highlights = [
    {
      icon: Target,
      title: "AI & Product Mission",
      description:
        "Development of innovative artificial intelligence solutions",
      color: "blue",
    },
    {
      icon: Building,
      title: "OuiChef Startup",
      description: "Dynamic environment in French FoodTech industry",
      color: "purple",
    },
    {
      icon: Award,
      title: "Premium Mentorship",
      description: "Direct guidance from the CEO & Founder",
      color: "green",
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description: "Active participation in digital transformation",
      color: "orange",
    },
  ];

  return (
    <div className={`main-container ${isVisible ? "visible" : ""}`}>
      <div className="content-wrapper">
        {/* Hero Section */}
        {/* Hero Section */}
        <Section className="hero-section">
          <div className="hero-gradient">
            <FloatingParticles />
            <div className="hero-inner">
              <div className="hero-content">
                <div className="hero-badge">
                  <Star className="star-icon" />
                  <span>GBBA 3rd Year Work Experience</span>
                </div>

                <h1 className="hero-title">
                  <span className="hero-subtitle">Internship</span>
                  <span className="hero-main-title">Product & AI</span>
                </h1>

                <div className="hero-details">
                  <p className="hero-date">
                    <Calendar className="icon" />
                    <span>July 8, 2025 → August 25, 2025</span>
                  </p>
                  <p className="hero-location">
                    OuiChef Startup • Le Kremlin-Bicêtre, France
                  </p>
                </div>

                <div className="hero-tutor">
                  <div className="tutor-info">
                    <User className="icon" />
                    <span>Mr. Kamal Bencharki</span>
                  </div>
                  <div className="separator">•</div>
                  <div className="tutor-role">CEO & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* Metrics Section */}
        <Section title="Key Metrics" className="metrics-section">
          <div className="metrics-grid">
            {keyMetrics.map((metric, index) => (
              <GlowCard
                key={metric.label}
                className="metric-card"
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(`metric-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="metric-content">
                  <div className={`metric-icon ${metric.color}`}>
                    <metric.icon className="icon" />
                  </div>
                  <div className="metric-info">
                    <div className={`metric-value ${metric.color}`}>
                      <AnimatedCounter end={metric.value} />
                    </div>
                    <p className="metric-label">{metric.label}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </Section>

        {/* Highlights Section */}
        <Section title="Internship Highlights" className="highlights-section">
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <GlowCard
                key={highlight.title}
                className="highlight-card"
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(`highlight-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="highlight-content">
                  <div className="highlight-header">
                    <div className={`highlight-icon ${highlight.color}`}>
                      <highlight.icon className="icon" />
                    </div>
                    <div className="highlight-text">
                      <h3 className="highlight-title">{highlight.title}</h3>
                      <p className="highlight-description">
                        {highlight.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`arrow-icon ${
                        hoveredCard === `highlight-${index}` ? "hovered" : ""
                      }`}
                    />
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </Section>

        {/* Detailed Information */}
        <Section
          title="Detailed Information"
          subtitle={"Detailed information about internship"}
          className="details-section"
        >
          <GlowCard className="details-card">
            <div className="details-content">
              <div className="details-grid">
                <div className="details-column">
                  <div className="detail-item">
                    <div className="detail-icon blue">
                      <Clock className="icon" />
                    </div>
                    <div className="detail-info">
                      <h4 className="detail-title">Duration</h4>
                      <p className="detail-description">
                        7 intensive weeks • 35h/week
                      </p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon purple">
                      <Laptop className="icon" />
                    </div>
                    <div className="detail-info">
                      <h4 className="detail-title">Work Arrangements</h4>
                      <p className="detail-description">
                        Remote work 1 day/week • Modern flexibility
                      </p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon green">
                      <Briefcase className="icon" />
                    </div>
                    <div className="detail-info">
                      <h4 className="detail-title">Type</h4>
                      <p className="detail-description">
                        Mandatory professional experience (unpaid)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="details-column">
                  <div className="detail-item">
                    <div className="detail-icon orange">
                      <MapPin className="icon" />
                    </div>
                    <div className="detail-info">
                      <h4 className="detail-title">Location</h4>
                      <p className="detail-description">
                        80T Av. de Fontainebleau
                        <br />
                        94270 Le Kremlin-Bicêtre, France
                      </p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon indigo">
                      <User className="icon" />
                    </div>
                    <div className="detail-info">
                      <h4 className="detail-title">Supervisor</h4>
                      <p className="detail-description">
                        Mr. Kamal Bencharki
                        <br />
                        CEO & Founder of OuiChef
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </Section>
      </div>

      <style>{`
        .main-container {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #f8fafc 0%,
            #e0f2fe 50%,
            #e8eaf6 100%
          );
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease-out;
        }

        .main-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .main-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              circle at 50% 50%,
              rgba(59, 130, 246, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(147, 51, 234, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(16, 185, 129, 0.1) 0%,
              transparent 50%
            );
          pointer-events: none;
          opacity: 0.3;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
      
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(
            135deg,
            #3b82f6 0%,
            #8b5cf6 50%,
            #4f46e5 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #6b7280;
          max-width: 48rem;
          margin: 0 auto;
        }

        .hero-section {
          transition: all 1s ease-out;
          margin-top: -4rem;
      
        }

        .hero-container {
          position: relative;

          margin: 0 auto;
          align-items: center;

          align-content: center;

          justify-content: center;
        }

        .hero-card {
          overflow: hidden;
          align-items: center;
          align-self: center;
          align-content: center;

          justify-content: center;
        }


.hero-gradient {
  width: 100vw;
  height: 97vh;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #4338ca 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 5rem 5rem;
}
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          align-self: center;
        }

        .star-icon {
          width: 1rem;
          height: 1rem;
          color: #fbbf24;
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
        }

        .hero-subtitle {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-size: 2rem;
          font-weight: normal;
          margin-bottom: 0.5rem;
        }

        .hero-main-title {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #dbeafe 50%,
            #e0e7ff 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 1.125rem;
        }

        .hero-date {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .hero-location {
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-tutor {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding-top: 1rem;
        }

        .tutor-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          backdrop-filter: blur(10px);
          font-size: 0.875rem;
        }

        .separator {
          color: rgba(255, 255, 255, 0.6);
        }

        .tutor-role {
          font-size: 0.875rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          backdrop-filter: blur(10px);
        }

        .icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .glow-card {
          position: relative;
          display: block;
        }

        .glow-effect {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 1rem;
          filter: blur(8px);
          opacity: 0.3;
          transition: all 1s ease;
        }

        .glow-card:hover .glow-effect {
          opacity: 1;
          filter: blur(12px);
          transition: all 0.2s ease;
        }

        .card-content {
          position: relative;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .metrics-section {
          transition: all 1s ease-out 0.3s;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 64rem;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .metric-card {
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .metric-card:hover {
          transform: scale(1.05);
        }

        .metric-content {
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .metric-icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .metric-icon.blue {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
        }

        .metric-icon.purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        }

        .metric-icon.green {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .metric-icon.orange {
          background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
        }

        .metric-icon .icon {
          color: white;
        }

        .metric-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .metric-value {
          font-size: 3rem;
          font-weight: bold;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .metric-value.blue {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-value.purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-value.green {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-value.orange {
          background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
          margin: 0;
        }

        .highlights-section {
          transition: all 1s ease-out 0.5s;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 80rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .highlight-card {
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .highlight-card:hover {
          transform: scale(1.05);
        }

        .highlight-content {
          padding: 2rem;
        }

        .highlight-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .highlight-icon {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }

        .highlight-icon.blue {
          background: linear-gradient(135deg, #3b82f6 0%, #4338ca 100%);
        }

        .highlight-icon.purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        }

        .highlight-icon.green {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .highlight-icon.orange {
          background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
        }

        .highlight-icon.indigo {
          background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
        }

        .highlight-icon .icon {
          width: 1.75rem;
          height: 1.75rem;
          color: white;
        }

        .highlight-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .highlight-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #111827;
          margin: 0;
        }

        .highlight-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .arrow-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
          transition: all 0.3s ease;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .arrow-icon.hovered {
          transform: translateX(4px);
          color: #6b7280;
        }

        .details-section {
          transition: all 1s ease-out 0.7s;
        }

        .details-card {
          max-width: 64rem;
          margin: 0 auto;
        }

        .details-content {
          padding: 2.5rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .details-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .details-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .detail-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }

        .detail-icon.blue {
          background: linear-gradient(135deg, #3b82f6 0%, #4338ca 100%);
        }

        .detail-icon.purple {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        }

        .detail-icon.green {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .detail-icon.orange {
          background: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
        }

        .detail-icon.indigo {
          background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
        }

        .detail-icon .icon {
          color: white;
        }

        .detail-info {
          flex: 1;
        }

        .detail-title {
          font-weight: bold;
          color: #111827;
          font-size: 1.125rem;
          margin: 0 0 0.25rem 0;
        }

        .detail-description {
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        @keyframes tilt {
          0%,
          50%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .content-wrapper {
            padding: 2rem 1rem;
            gap: 3rem;
          }

          .hero-gradient {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
