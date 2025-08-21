import React, { useState, useEffect } from "react";
import {
  Brain,
  AlertTriangle,
  BookOpen,
  Compass,
  Target,
  Scale,
  Lightbulb,
  TrendingUp,
  Users,
  Zap,
  Award,
  Eye,
  ChevronRight,
  Sparkles,
  Rocket,
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
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-3">
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
  gradient = "from-purple-500 to-blue-500",
}) => (
  <div className={`group relative ${className}`}>
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300`}
    />
    <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
      {children}
    </div>
  </div>
);

const FloatingOrb: React.FC<{
  size: number;
  color: string;
  position: { x: number; y: number };
  delay: number;
}> = ({ size, color, position, delay }) => (
  <div
    className={`absolute rounded-full ${color} opacity-20 animate-pulse`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${position.x}%`,
      top: `${position.y}%`,
      animationDelay: `${delay}s`,
      animationDuration: "4s",
    }}
  />
);

const InteractiveListItem: React.FC<{
  icon: React.ElementType;
  title: string;
  content: string;
  iconColor: string;
  delay?: number;
}> = ({ icon: Icon, title, content, iconColor, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={delay}>
      <div
        className="group cursor-pointer p-6 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start space-x-4">
          <div
            className={`p-3 rounded-xl ${iconColor} shadow-lg transform transition-all duration-300 ${
              isHovered ? "scale-110 rotate-6" : ""
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-700 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {content}
            </p>
          </div>
          <ChevronRight
            className={`w-5 h-5 text-gray-400 transform transition-all duration-300 ${
              isHovered ? "translate-x-1 text-purple-600" : ""
            }`}
          />
        </div>
      </div>
    </AnimatedCard>
  );
};

export default function CriticalThinking() {
  const [activeTab, setActiveTab] = useState(0);

  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    color: ["bg-purple-400", "bg-blue-400", "bg-indigo-400", "bg-pink-400"][
      i % 4
    ],
    position: { x: Math.random() * 100, y: Math.random() * 100 },
    delay: i * 0.5,
  }));

  const academicLinks = [
    {
      icon: Brain,
      title: "Innovation & Strategy",
      content:
        "Strategic management courses illuminated OuiChef's competitive positioning in the FoodTech landscape and informed their fundraising strategy decisions.",
      iconColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      icon: Zap,
      title: "Data & AI Mastery",
      content:
        "Machine learning and analytics knowledge directly supported roadmap discussions about NLP integration and forecasting algorithm development.",
      iconColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      icon: Scale,
      title: "CSR & Ethics",
      content:
        "Business ethics and sustainability coursework provided frameworks to evaluate the social and environmental impact of OuiChef's innovative solutions.",
      iconColor: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
  ];

  const strengths = [
    {
      icon: Rocket,
      title: "Rapid Startup Adaptation",
      content:
        "Seamlessly navigated resource constraints while maintaining high-impact deliverables in a fast-paced environment.",
    },
    {
      icon: Target,
      title: "Concrete Value Creation",
      content:
        "Delivered actionable specifications and UX improvements directly implemented by the development team.",
    },
    {
      icon: Sparkles,
      title: "CSR-Driven Innovation",
      content:
        "Integrated sustainable thinking that perfectly aligned with OuiChef's mission and values.",
    },
    {
      icon: Users,
      title: "Cross-Functional Excellence",
      content:
        "Enhanced problem-solving abilities and collaborative skills across diverse team functions.",
    },
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Resource Optimization",
      content:
        "Startup constraints limited comprehensive testing phases, requiring creative solution approaches.",
      iconColor: "bg-gradient-to-br from-red-500 to-orange-500",
    },
    {
      icon: Eye,
      title: "Scope Clarification",
      content:
        "Navigated mission ambiguity through proactive CEO engagement and objective clarification processes.",
      iconColor: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: Scale,
      title: "Impact vs. Profitability",
      content:
        "Balanced sustainability integration with commercial viability, highlighting strategic tension points.",
      iconColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ];

  const recommendations = [
    {
      icon: Compass,
      title: "For OuiChef",
      content:
        "Strengthen UX research methodology with structured user-testing and invest in AI model scalability for sustainable growth.",
      iconColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      icon: Target,
      title: "Personal Growth",
      content:
        "Pursue product strategy and AI innovation opportunities with a dedicated focus on sustainable technology solutions.",
      iconColor: "bg-gradient-to-br from-green-500 to-teal-600",
    },
    {
      icon: Award,
      title: "Academic Development",
      content:
        "Deepen expertise in digital business and responsible innovation to prepare for future leadership responsibilities.",
      iconColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb) => (
          <FloatingOrb
            key={orb.id}
            size={orb.size}
            color={orb.color}
            position={orb.position}
            delay={orb.delay}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-20 space-y-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <Section
          title="Critical Thinking"
          subtitle="Analytical reflection on my transformative journey at OuiChef"
        >
          <AnimatedCard>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 opacity-90" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
              <div className="relative p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  Reflection & Strategic Analysis
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Beyond tasks and deliverables, this internship became a
                  transformative journey of critical assessment—evaluating my
                  evolving role, the company's strategic vision, and my personal
                  growth trajectory.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </Section>

        {/* Academic Bridge Section */}
        <Section
          title="Bridging Theory & Practice"
          subtitle="How academic knowledge transformed into real-world impact"
        >
          <div className="grid gap-8">
            {academicLinks.map((item, index) => (
              <InteractiveListItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                content={item.content}
                iconColor={item.iconColor}
                delay={index * 200}
              />
            ))}
          </div>
        </Section>

        {/* Strengths Section */}
        <Section
          title="Strengths & Key Contributions"
          subtitle="Excellence delivered through strategic thinking and execution"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <AnimatedCard key={strength.title} delay={index * 150}>
                <GlowCard gradient="from-green-400 to-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg">
                      <strength.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {strength.content}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedCard>
            ))}
          </div>
        </Section>

        {/* Challenges Section */}
        <Section
          title="Limitations & Strategic Challenges"
          subtitle="Critical analysis of obstacles and learning opportunities"
        >
          <div className="grid gap-8">
            {challenges.map((challenge, index) => (
              <InteractiveListItem
                key={challenge.title}
                icon={challenge.icon}
                title={challenge.title}
                content={challenge.content}
                iconColor={challenge.iconColor}
                delay={index * 200}
              />
            ))}
          </div>
        </Section>

        {/* Personal Reflection */}
        <Section
          title="Personal Transformation"
          subtitle="Deep insights into professional and personal evolution"
        >
          <AnimatedCard>
            <GlowCard
              gradient="from-purple-400 to-pink-500"
              className="max-w-4xl mx-auto"
            >
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This internship crystallized my passion for{" "}
                  <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    AI-driven real-world solutions
                  </span>{" "}
                  and reinforced my ambition to operate at the dynamic
                  intersection of{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    technology and strategic innovation
                  </span>
                  . I discovered my natural affinity for{" "}
                  <span className="font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    entrepreneurial environments
                  </span>
                  , where autonomy, adaptability, and creative problem-solving
                  are paramount. Most importantly, it highlighted the critical
                  importance of{" "}
                  <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    analytical thinking
                  </span>
                  : challenging assumptions, balancing commercial objectives
                  with ethical considerations, and continuously pursuing
                  innovative yet sustainable solutions.
                </p>
              </div>
            </GlowCard>
          </AnimatedCard>
        </Section>

        {/* Future Recommendations */}
        <Section
          title="Strategic Recommendations & Future Vision"
          subtitle="Actionable insights for OuiChef's growth and my career trajectory"
        >
          <div className="grid gap-8">
            {recommendations.map((rec, index) => (
              <InteractiveListItem
                key={rec.title}
                icon={rec.icon}
                title={rec.title}
                content={rec.content}
                iconColor={rec.iconColor}
                delay={index * 200}
              />
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <AnimatedCard delay={300}>
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10" />
            <div className="relative">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Armed with critical insights and strategic thinking, I'm
                prepared to tackle the next phase of innovation in AI and
                sustainable technology.
              </p>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
}
