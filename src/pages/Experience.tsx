import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Target,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Globe2,
  Calendar,
  MapPin,
  Users,
  Rocket,
  Brain,
  Code,
  Eye,
  Zap,
  Award,
  Star,
  ArrowRight,
  Building,
  Clock,
  LineChart,
  Settings,
  Shield,
  Leaf,
  Heart,
  Sparkles,
  ChevronRight,
  Play,
  BarChart3,
  UserCheck,
  Workflow,
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
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-3">
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
  gradient = "from-blue-500 to-purple-500",
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

const ActionItem: React.FC<{
  action: string;
  index: number;
}> = ({ action, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={index * 100}>
      <div
        className="group flex items-start space-x-4 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg transform transition-all duration-300 ${
            isHovered ? "scale-110 rotate-6" : ""
          }`}
        >
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            {action}
          </p>
        </div>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 transform transition-all duration-300 ${
            isHovered ? "translate-x-1 text-blue-600" : ""
          }`}
        />
      </div>
    </AnimatedCard>
  );
};

const SkillCard: React.FC<{
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
  delay?: number;
}> = ({ title, icon: Icon, skills, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={delay}>
      <GlowCard
        className="h-full cursor-pointer transform transition-all duration-300 hover:scale-105"
       // onMouseEnter={() => setIsHovered(true)}
       /// onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`p-3 rounded-xl ${color} shadow-lg transform transition-all duration-300 ${
                isHovered ? "scale-110 rotate-6" : ""
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </GlowCard>
    </AnimatedCard>
  );
};

const ResultCard: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay?: number;
}> = ({ title, description, icon: Icon, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={delay}>
      <div
        className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-xl ${color} shadow-lg transform transition-all duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>
          <Play
            className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transform transition-all duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </div>
      </div>
    </AnimatedCard>
  );
};

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

export default function Experience() {
  const actions = [
    "Actively contributed to the design and pilot of new AI modules for the platform",
    "Collected and analyzed user needs from restaurant partners and food delivery platforms",
    "Structured functional roadmaps in collaboration with developers",
    "Conducted technological watch on AI & FoodTech best practices",
    "Designed and tested user experiences through field testing sessions",
    "Assessed product impact on CSR and sustainability",
    "Verified integration of sustainability into solutions (anti-waste algorithms, accessibility, awareness tools)",
  ];

  const results = [
    {
      title: "AI Feature Specifications",
      description:
        "Delivered functional specifications for 2 new AI features integrated into the product roadmap.",
      icon: Brain,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      title: "UX Flow Improvements",
      description:
        "Enhanced UX flows validated during 3 user-testing sessions with partner restaurateurs.",
      icon: Eye,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      title: "CSR Product Framework",
      description:
        "Contributed to a CSR-focused product framework including anti-waste algorithms and accessibility guidelines.",
      icon: Leaf,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      title: "Competitive Intelligence",
      description:
        "Strengthened internal processes by creating benchmarks of FoodTech competitors and AI solutions.",
      icon: BarChart3,
      color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  const hardSkills = [
    "Product management & roadmap design",
    "User research & data analysis",
    "AI technology watch (NLP, computer vision, forecasting)",
    "UX/UI design and usability testing",
    "CSR & sustainability integration",
  ];

  const softSkills = [
    "Critical thinking & problem-solving",
    "Adaptability in a startup environment",
    "Collaboration with cross-functional teams",
    "Effective communication with stakeholders",
    "Time & priority management",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} className="top-20 left-10">
          <Briefcase className="w-8 h-8 text-blue-400" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-40 right-20">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-40 left-20">
          <Target className="w-7 h-7 text-indigo-400" />
        </FloatingElement>
        <FloatingElement delay={1.5} className="bottom-20 right-10">
          <Star className="w-5 h-5 text-pink-400" />
        </FloatingElement>
        <FloatingElement delay={0.5} className="top-1/2 left-1/4">
          <Zap className="w-6 h-6 text-cyan-400" />
        </FloatingElement>
      </div>

      <div className="relative z-10 px-6 py-20 space-y-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <Section
          title="Professional Experience"
          subtitle="Transformative internship journey at OuiChef as Product & AI Innovation Intern"
        >
          <AnimatedCard>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
              <div className="relative p-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl mb-6">
                    <Briefcase className="w-12 h-12 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    Product & AI Intern
                  </h1>
                  <div className="space-y-3 text-white/90 text-lg">
                    <div className="flex items-center justify-center gap-6 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>July 8 → August 25, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>7 weeks • 35h/week</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>France</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full text-sm mt-4">
                      <Award className="w-4 h-4" />
                      <span>GBBA Year 3 Mandatory Professional Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </Section>

        {/* Context Section */}
        <Section
          title="Strategic Context & Environment"
          subtitle="Understanding the innovative ecosystem and mission framework"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedCard>
              <GlowCard gradient="from-blue-500 to-indigo-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Company Profile
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      OuiChef is a pioneering{" "}
                      <span className="font-bold text-blue-600">
                        French FoodTech startup
                      </span>{" "}
                      founded in 2022, specializing in{" "}
                      <span className="font-bold text-indigo-600">
                        AI-powered restaurant solutions
                      </span>
                      .
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">Team Size</span>
                        </div>
                        <p className="text-lg font-bold text-blue-600 mt-1">
                          &lt;10 employees
                        </p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium">Growth</span>
                        </div>
                        <p className="text-lg font-bold text-green-600 mt-1">
                          +80% Revenue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <GlowCard gradient="from-purple-500 to-pink-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      My Role & Mission
                    </h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Joined as a{" "}
                      <span className="font-bold text-purple-600">
                        Product & AI Intern
                      </span>
                      , reporting directly to the CEO and collaborating with the
                      development team and restaurant partners.
                    </p>
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <p className="text-sm italic">
                        "Operating in a fast-scaling phase following successful
                        March 2025 fundraising, focused on white-label SaaS
                        platform optimization with anti-waste forecasting
                        algorithms."
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedCard>
          </div>
        </Section>

        {/* Actions Section */}
        <Section
          title="Key Actions & Responsibilities"
          subtitle="Strategic missions and hands-on contributions delivered"
        >
          <div className="space-y-4">
            {actions.map((action, index) => (
              <ActionItem key={index} action={action} index={index} />
            ))}
          </div>
        </Section>

        {/* Results Section */}
        <Section
          title="Measurable Impact & Outcomes"
          subtitle="Concrete deliverables and validated improvements"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <ResultCard
                key={result.title}
                title={result.title}
                description={result.description}
                icon={result.icon}
                color={result.color}
                delay={index * 150}
              />
            ))}
          </div>
        </Section>

        {/* Skills Development */}
        <Section
          title="Skills & Learning Outcomes"
          subtitle="Comprehensive personal and professional development achieved"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard
              title="Technical Expertise"
              icon={Code}
              skills={hardSkills}
              color="bg-gradient-to-br from-blue-500 to-cyan-600"
              delay={0}
            />
            <SkillCard
              title="Professional Competencies"
              icon={UserCheck}
              skills={softSkills}
              color="bg-gradient-to-br from-green-500 to-emerald-600"
              delay={200}
            />
          </div>
        </Section>

        {/* International & CSR Dimension */}
        <Section
          title="Global Impact & Sustainability Focus"
          subtitle="Addressing international challenges and sustainable innovation"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedCard>
              <GlowCard gradient="from-emerald-500 to-green-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                      <Globe2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Global Ecosystem
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While based in France, OuiChef operates within a{" "}
                    <span className="font-bold text-green-600">
                      global FoodTech ecosystem
                    </span>
                    , developing solutions with international scalability and
                    cross-market applicability.
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <Workflow className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Cross-border solution architecture
                    </span>
                  </div>
                </div>
              </GlowCard>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <GlowCard gradient="from-teal-500 to-cyan-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      CSR Integration
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Strong emphasis on{" "}
                    <span className="font-bold text-teal-600">
                      Corporate Social Responsibility
                    </span>
                    , promoting diversity, inclusion, and sustainability
                    throughout the product design process.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Anti-waste algorithms",
                      "Universal accessibility",
                      "Environmental impact awareness",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-teal-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </AnimatedCard>
          </div>
        </Section>

        {/* Success Summary */}
        <AnimatedCard delay={300}>
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Mission Accomplished</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Successfully delivered strategic product innovations, enhanced
                user experiences, and contributed to sustainable AI solutions
                within OuiChef's revolutionary FoodTech ecosystem.
              </p>
              <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="font-medium">2 AI Features Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">3 UX Testing Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">CSR Framework Established</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
