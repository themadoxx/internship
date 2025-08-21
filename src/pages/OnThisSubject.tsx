import React, { useState, useEffect } from "react";
import {
  Lightbulb,
  TrendingUp,
  Globe,
  BookOpen,
  Users,
  Rocket,
  Brain,
  Target,
  Sparkles,
  Star,
  Zap,
  ChevronRight,
  Play,
  Leaf,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Telescope,
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

const InsightCard: React.FC<{
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
        className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4 h-full">
          <div
            className={`p-3 rounded-xl ${color} shadow-lg transform transition-all duration-300 ${
              isHovered ? "scale-110 rotate-6" : ""
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
          </div>
          <ArrowUpRight
            className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transform transition-all duration-300 ${
              isHovered ? "translate-x-1 -translate-y-1" : ""
            }`}
          />
        </div>
      </div>
    </AnimatedCard>
  );
};

const TheoryCard: React.FC<{
  theory: string;
  description: string;
  index: number;
}> = ({ theory, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    "from-blue-500 to-cyan-600",
    "from-purple-500 to-pink-600",
    "from-green-500 to-emerald-600",
  ];

  return (
    <AnimatedCard delay={index * 150}>
      <div
        className="group flex items-start space-x-4 p-6 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`p-3 rounded-lg bg-gradient-to-br ${
            colors[index % colors.length]
          } shadow-lg transform transition-all duration-300 ${
            isHovered ? "scale-110 rotate-6" : ""
          }`}
        >
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
            {theory}
          </h4>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transform transition-all duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`}
        />
      </div>
    </AnimatedCard>
  );
};

const AspirationsCard: React.FC<{
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
        className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4 h-full">
          <div
            className={`p-3 rounded-xl ${color} shadow-lg transform transition-all duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
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

export default function OnThisSubject() {
  const marketInsights = [
    {
      title: "Global FoodTech Market Growth",
      description:
        "The FoodTech sector is projected to surpass $342 billion by 2027, driven by digitalization, sustainability concerns, and evolving consumption habits worldwide.",
      icon: Globe,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      title: "AI-Powered Scalability",
      description:
        "OuiChef's AI-driven optimization and white-label platform model aligns perfectly with industry demands for scalability and customization in restaurant operations.",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      title: "Triple Bottom Line Approach",
      description:
        "Integration of CSR dimensions including anti-food waste, accessibility, and sustainability awareness reflects the modern 'people, planet, profit' business philosophy.",
      icon: Lightbulb,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
  ];

  const businessTheories = [
    {
      theory: "Blue Ocean Strategy",
      description:
        "OuiChef attempts to create uncontested market space by offering AI-as-a-Service for restaurants with strong branding flexibility, avoiding direct competition.",
    },
    {
      theory: "Disruptive Innovation Theory",
      description:
        "As a startup, OuiChef leverages agility to disrupt traditional SaaS players with niche-targeted, highly adaptive tools that serve underserved market segments.",
    },
    {
      theory: "Stakeholder Theory",
      description:
        "Integrating restaurateurs, customers, and environmental concerns demonstrates a multi-stakeholder alignment strategy that creates shared value.",
    },
  ];

  const aspirations = [
    {
      title: "Cross-functional Innovation",
      description:
        "I aspire to work at the crossroads of product strategy, AI and sustainability, applying my skills in environments where innovation serves both business and society.",
      icon: Users,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      title: "Entrepreneurial Mindset",
      description:
        "My experience at OuiChef confirmed my appetite for entrepreneurship and intrapreneurship, where bold ideas can be transformed into impactful solutions.",
      icon: Rocket,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      title: "Academic Excellence",
      description:
        "I plan to deepen my expertise in responsible innovation and digital business to prepare for leadership roles in the tech sector and drive positive change.",
      icon: Lightbulb,
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} className="top-20 left-10">
          <Brain className="w-8 h-8 text-blue-400" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-40 right-20">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-40 left-20">
          <Telescope className="w-7 h-7 text-indigo-400" />
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
          title="On This Subject"
          subtitle="Broadening perspectives on AI, FoodTech and sustainable innovation"
        >
          <AnimatedCard>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
              <div className="relative p-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl mb-6">
                    <Compass className="w-12 h-12 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Beyond My Internship
                  </h1>
                  <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                    My internship at OuiChef was not just a practical
                    experience: it was an immersion into some of the most
                    transformative challenges of our time — artificial
                    intelligence, food sustainability, and the future of
                    entrepreneurship.
                  </p>
                  <div className="flex items-center justify-center gap-8 mt-8 flex-wrap">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full">
                      <Brain className="w-4 h-4" />
                      <span className="text-sm">AI Innovation</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full">
                      <Leaf className="w-4 h-4" />
                      <span className="text-sm">Sustainability</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full">
                      <Rocket className="w-4 h-4" />
                      <span className="text-sm">Entrepreneurship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </Section>

        {/* FoodTech Landscape */}
        <Section
          title="The FoodTech Landscape"
          subtitle="How OuiChef fits into a growing global trend"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <InsightCard
                key={insight.title}
                title={insight.title}
                description={insight.description}
                icon={insight.icon}
                color={insight.color}
                delay={index * 150}
              />
            ))}
          </div>
        </Section>

        {/* Theoretical Insights */}
        <Section
          title="Academic & Theoretical Insights"
          subtitle="How business frameworks help explain the experience"
        >
          <div className="space-y-6">
            {businessTheories.map((theory, index) => (
              <TheoryCard
                key={theory.theory}
                theory={theory.theory}
                description={theory.description}
                index={index}
              />
            ))}
          </div>
        </Section>

        {/* Broader Impact Section */}
        <Section
          title="Broader Implications"
          subtitle="Why this subject matters for society and business"
        >
          <AnimatedCard>
            <GlowCard gradient="from-indigo-500 to-purple-600">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Societal Transformation
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Working on AI in FoodTech revealed the profound societal
                    implications of technology. The way we{" "}
                    <span className="font-bold text-indigo-600">
                      eat, consume and manage resources
                    </span>{" "}
                    is deeply tied to sustainability and inclusivity. Companies
                    like OuiChef are not only reshaping the restaurant industry
                    but also contributing to a{" "}
                    <span className="font-bold text-purple-600">
                      global transition
                    </span>{" "}
                    toward smarter, more sustainable food systems.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-bold text-indigo-800 mb-2">
                        Critical Questions
                      </h4>
                      <p className="text-sm text-indigo-700">
                        How can we balance <em>profitability</em> with{" "}
                        <em>ethics</em>? How do we ensure <em>AI fairness</em>{" "}
                        and accessibility?
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-800 mb-2">
                        Future Impact
                      </h4>
                      <p className="text-sm text-purple-700">
                        Technology that serves both business growth and social
                        good, creating sustainable value for all stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </AnimatedCard>
        </Section>

        {/* Personal Outlook */}
        <Section
          title="Personal Outlook"
          subtitle="What this subject means for my academic and career path"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {aspirations.map((aspiration, index) => (
              <AspirationsCard
                key={aspiration.title}
                title={aspiration.title}
                description={aspiration.description}
                icon={aspiration.icon}
                color={aspiration.color}
                delay={index * 150}
              />
            ))}
          </div>
        </Section>

        {/* Vision Statement */}
        <AnimatedCard delay={300}>
          <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Future Vision</h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
                This internship has shaped my understanding of how technology
                can serve humanity. I'm committed to pursuing a career where
                innovation creates meaningful impact, bridging the gap between
                business success and social responsibility.
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span className="font-medium">Product Strategy Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-300" />
                  <span className="font-medium">AI Innovation Leader</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-300" />
                  <span className="font-medium">Sustainability Champion</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
