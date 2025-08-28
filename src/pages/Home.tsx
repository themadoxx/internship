import { useState, useEffect } from "react";
import {
  Clock,
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

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = "",
}) => (
  <section className={`flex flex-col gap-6 ${className}`}>
    {title && (
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    )}
    {children}
  </section>
);

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    const animate = (timestamp: number) => {
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

const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white/20 rounded-full animate-bounce"
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

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div
    className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${className}`}
    {...props}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 group-hover:blur-xl transition-all duration-200" />
    <div className="relative bg-white rounded-2xl shadow-2xl">{children}</div>
  </div>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyMetrics = [
    { label: "Weeks", value: 7, icon: Calendar, color: "blue" },
    { label: "Hours/week", value: 35, icon: Clock, color: "purple" },
    { label: "Total hours", value: 302, icon: TrendingUp, color: "green" },
    { label: "Remote days", value: 7.2, icon: Laptop, color: "orange" },
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

  const getIconColorClasses = (color: string) => {
    const classes = {
      blue: "bg-gradient-to-br from-blue-500 to-cyan-500",
      purple: "bg-gradient-to-br from-purple-500 to-pink-500",
      green: "bg-gradient-to-br from-green-500 to-emerald-600",
      orange: "bg-gradient-to-br from-orange-500 to-red-500",
      indigo: "bg-gradient-to-br from-indigo-500 to-purple-500",
    };
    return classes[color as keyof typeof classes] || classes.blue;
  };

  const getTextColorClasses = (color: string) => {
    const classes = {
      blue: "bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent",
      purple:
        "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
      green:
        "bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent",
      orange:
        "bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent",
    };
    return classes[color as keyof typeof classes] || classes.blue;
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section - Full width, full height */}
      <section className="relative w-full h-130 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700">
          <FloatingParticles />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>GBBA 3rd Year Work Experience</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-none">
              <span className="block text-white/90 text-2xl sm:text-3xl lg:text-4xl font-normal mb-2">
                Internship
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                Product & AI
              </span>
            </h1>

            {/* Date and Location */}
            <div className="flex flex-col gap-2 text-lg sm:text-xl">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>July 8, 2025 → August 25, 2025</span>
              </p>
              <p className="text-white/80">
                OuiChef Startup • Le Kremlin-Bicêtre, France
              </p>
            </div>

            {/* Supervisor Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-sm">
                <User className="w-4 h-4" />
                <span>Supervisor : Mr. Kamal Bencharki</span>
              </div>
              <div className="hidden sm:block text-white/60">•</div>
              <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-sm">
                CEO & Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections with proper spacing */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 space-y-20 py-20">
        {/* Metrics Section */}
        <Section title="Key Metrics">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {keyMetrics.map((metric, index) => (
              <GlowCard
                key={metric.label}
                className="transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(`metric-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-6 text-center flex flex-col items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${getIconColorClasses(
                      metric.color
                    )} flex items-center justify-center shadow-lg`}
                  >
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div
                      className={`text-5xl font-bold font-mono ${getTextColorClasses(
                        metric.color
                      )}`}
                    >
                      <AnimatedCounter end={metric.value} />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      {metric.label}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </Section>

        {/* Highlights Section */}
        <Section title="Internship Highlights">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => {
              // Add auto-animation effect
              useEffect(() => {
          const timer = setInterval(() => {
            setHoveredCard(`highlight-${index}`);
            setTimeout(() => {
              setHoveredCard(null);
            }, 500);
          }, 4000 + index * 1000); // 4s initial delay, then 1s interval between each card

          return () => clearInterval(timer);
              }, []);

              return (
          <GlowCard
            key={highlight.title}
            className="transition-all duration-500"
            style={{ transitionDelay: `${index * 150}ms` }}
            onMouseEnter={() => setHoveredCard(`highlight-${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-8">
              <div className="flex items-start gap-4">
                <div
            className={`w-14 h-14 rounded-xl ${getIconColorClasses(
              highlight.color
            )} flex items-center justify-center shadow-xl flex-shrink-0`}
                >
            <highlight.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {highlight.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {highlight.description}
            </p>
                </div>
                <ArrowRight
            className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-all duration-300 ${
              hoveredCard === `highlight-${index}`
                ? "translate-x-1 text-gray-600"
                : ""
            }`}
                />
              </div>
            </div>
          </GlowCard>
              );
            })}
          </div>
        </Section>

        {/* Detailed Information */}
        <Section
          title="Detailed Information"
          subtitle="Detailed information about internship"
        >
          <GlowCard className="max-w-5xl mx-auto">
            <div className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        Duration
                      </h4>
                      <p className="text-gray-600">
                        7 intensive weeks • 35h/week
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Laptop className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        Work Arrangements
                      </h4>
                      <p className="text-gray-600">
                        Remote work 1 day/week • Modern flexibility
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        Type
                      </h4>
                      <p className="text-gray-600">
                        Mandatory professional experience (unpaid)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        Location
                      </h4>
                      <p className="text-gray-600">
                        80T Av. de Fontainebleau
                        <br />
                        94270 Le Kremlin-Bicêtre, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        Supervisor
                      </h4>
                      <p className="text-gray-600">
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
    </div>
  );
}
