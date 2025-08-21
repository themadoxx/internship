import React, { useState, useEffect } from "react";
import {
  Building2,
  BarChart,
  Users,
  Rocket,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  Smartphone,
  Brain,
  Zap,
  Target,
  Award,
  Sparkles,
  ChefHat,
  Code,
  Database,
  Eye,
  Heart,
  Shield,
  Leaf,
  Star,
  ArrowUpRight,
  CheckCircle,
  Activity,
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
  <section className={`flex flex-col gap-8 ${className}`}>
    {title && (
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 bg-clip-text text-transparent mb-3">
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

const AnimatedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const GlowCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}> = ({
  children,
  className = "",
  gradient = "from-orange-500 to-red-500",
}) => (
  <div className={`group relative ${className}`}>
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300`}
    />
    <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
      {children}
    </div>
  </div>
);

const StatCard: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  delay?: number;
}> = ({ icon: Icon, label, value, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={delay}>
      <GlowCard
        className={`cursor-pointer transform transition-all duration-300 ${
          isHovered ? "scale-105" : ""
        }`}
      >
        <div
          className="p-6 text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color} shadow-lg mb-4 transform transition-all duration-300 ${
              isHovered ? "scale-110 rotate-6" : ""
            }`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div
            className={`text-2xl font-bold mb-2 bg-gradient-to-r ${color
              .replace("bg-gradient-to-br", "")
              .replace("to-", "to-")
              .replace("from-", "from-")} bg-clip-text text-transparent`}
          >
            {value}
          </div>
          <p className="text-gray-600 font-medium">{label}</p>
        </div>
      </GlowCard>
    </AnimatedCard>
  );
};

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay?: number;
}> = ({ icon: Icon, title, description, color, delay = 0 }) => (
  <AnimatedCard delay={delay}>
    <div className="group cursor-pointer p-6 bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div
          className={`p-3 rounded-xl ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-700 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </div>
    </div>
  </AnimatedCard>
);

const FloatingElement: React.FC<{
  children: React.ReactNode;
  delay: number;
  className?: string;
}> = ({ children, delay, className = "" }) => (
  <div
    className={`absolute animate-bounce opacity-20 ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: "3s",
    }}
  >
    {children}
  </div>
);

export default function Company() {
  const stats = [
    {
      icon: Users,
      label: "Team Size",
      value: "<10",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      label: "Revenue Growth",
      value: "+80%",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      icon: Calendar,
      label: "Last Funding",
      value: "Mar 2025",
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      icon: Building2,
      label: "Company Type",
      value: "SaaS",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "White-Label Platform",
      description:
        "Fully customizable mobile and web applications tailored to each restaurant's brand identity.",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Advanced Loyalty System",
      description:
        "AI-powered customer retention programs with personalized rewards and engagement strategies.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      icon: Brain,
      title: "Dynamic AI Recommendations",
      description:
        "Machine learning algorithms that create personalized menu suggestions based on customer preferences.",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      icon: Activity,
      title: "Smart Flow Management",
      description:
        "Intelligent order processing and kitchen workflow optimization for maximum efficiency.",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description:
        "Comprehensive dashboards providing actionable insights for data-driven decision making.",
      color: "bg-gradient-to-br from-orange-500 to-amber-600",
    },
    {
      icon: Leaf,
      title: "Sustainability Focus",
      description:
        "Anti-waste algorithms and environmental impact tracking for responsible operations.",
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
    },
  ];

  const technologies = [
    { icon: Eye, name: "Computer Vision", color: "text-blue-600" },
    {
      icon: Code,
      name: "Natural Language Processing",
      color: "text-purple-600",
    },
    {
      icon: Database,
      name: "Statistical Forecasting",
      color: "text-green-600",
    },
    { icon: Zap, name: "Real-time Processing", color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} className="top-20 left-10">
          <ChefHat className="w-8 h-8 text-orange-400" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-40 right-20">
          <Sparkles className="w-6 h-6 text-pink-400" />
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-40 left-20">
          <Rocket className="w-7 h-7 text-red-400" />
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-20 right-10">
          <Star className="w-5 h-5 text-yellow-400" />
        </FloatingElement>
      </div>

      <div className="relative z-10 px-6 py-20 space-y-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <Section
          title="Company Profile"
          subtitle="A pioneering French FoodTech & AI startup revolutionizing restaurant management"
        >
          <AnimatedCard>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-700" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
              <div className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl mb-6">
                  <ChefHat className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-white mb-4">OuiChef</h1>
                <div className="space-y-2 text-white/90 text-lg">
                  <p className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Founded on{" "}
                    <span className="font-semibold">February 1, 2022</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Headquartered in{" "}
                    <span className="font-semibold">
                      Le Kremlin-Bicêtre, France
                    </span>
                  </p>
                  <p className="text-sm text-white/70 mt-4">
                    SIRET: 83102844400022
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </Section>

        {/* Key Statistics */}
        <Section title="Key Performance Indicators">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                color={stat.color}
                delay={index * 150}
              />
            ))}
          </div>
        </Section>

        {/* Business Model */}
        <Section
          title="Business Model & Mission"
          subtitle="Transforming gastronomy through artificial intelligence"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    OuiChef designs and commercializes{" "}
                    <span className="font-bold text-orange-600">
                      AI-powered solutions
                    </span>
                    dedicated to the restaurant industry. Our mission is to
                    optimize operational management, enhance customer
                    experience, and maximize profitability for restaurants,
                    franchises, and dark kitchens.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 backdrop-blur-xl rounded-lg">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">SaaS Model</h3>
                  </div>
                  <p className="leading-relaxed opacity-90">
                    Operating on a comprehensive{" "}
                    <span className="font-bold">
                      Software-as-a-Service model
                    </span>
                    , we provide customizable tools that integrate seamlessly
                    into daily restaurant operations across both mobile and web
                    platforms.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Core Technologies
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                      >
                        <tech.icon className={`w-5 h-5 ${tech.color}`} />
                        <span className="text-sm font-medium text-gray-700">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </Section>

        {/* Platform Features */}
        <Section
          title="Innovative Platform Features"
          subtitle="A comprehensive white-label solution for the future of restaurants"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={index * 100}
              />
            ))}
          </div>
        </Section>

        {/* Market Position */}
        <Section title="Market Position & Values">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedCard>
              <GlowCard gradient="from-green-500 to-emerald-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Market Positioning
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    OuiChef operates at the intersection of{" "}
                    <span className="font-bold text-green-600">
                      technology, gastronomy, and sustainability
                    </span>
                    within France's dynamic FoodTech & AI ecosystem. We serve as
                    a strategic partner for both independent restaurants and
                    expanding franchise networks.
                  </p>
                </div>
              </GlowCard>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <GlowCard gradient="from-blue-500 to-cyan-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      CSR Commitment
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our strong commitment to{" "}
                    <span className="font-bold text-blue-600">
                      Corporate Social Responsibility
                    </span>
                    includes anti-waste algorithms, accessibility features, and
                    environmental impact awareness tools that help restaurants
                    operate more sustainably.
                  </p>
                </div>
              </GlowCard>
            </AnimatedCard>
          </div>
        </Section>

        {/* Company Information */}
        <Section title="Legal & Contact Information">
          <AnimatedCard>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-xl rounded-xl">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Headquarters</h3>
                    <p className="text-white/80">
                      Legal & Administrative Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        80T Avenue de Fontainebleau
                        <br />
                        94270 Le Kremlin-Bicêtre, France
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Legal Information
                      </h4>
                      <p className="text-gray-600">
                        SIRET: 83102844400022
                        <br />
                        Sector: IT / Internet / Telecommunications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </Section>

        {/* Success Metrics */}
        <AnimatedCard delay={300}>
          <div className="text-center bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
            <div className="relative">
              <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-3xl font-bold mb-4">
                Driving Restaurant Innovation
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                With cutting-edge AI technology, sustainable practices, and
                customer-centric solutions, OuiChef is reshaping the future of
                restaurant management across France and beyond.
              </p>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
