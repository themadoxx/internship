import React from "react";
import { Section } from "../index";
import {
  Brain,
  AlertTriangle,
  BookOpen,
  Compass,
  Target,
  Scale,
} from "lucide-react";

export default function CriticalThinking() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <Section
        title="Critical Thinking"
        subtitle="Analytical reflection on my internship at OuiChef"
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Reflection & Analysis</h1>
          <p className="text-lg opacity-90">
            Beyond tasks and deliverables, this internship was an opportunity to
            critically assess my role, the company’s strategy, and my personal
            growth.
          </p>
        </div>
      </Section>

      {/* Academic Link */}
      <Section
        title="Bridging Theory & Practice"
        subtitle="How my academic knowledge was mobilized"
      >
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <BookOpen className="h-6 w-6 text-indigo-600 mt-1" />
            <span>
              <strong>Innovation & Strategy:</strong> Courses on{" "}
              <em>strategic management</em> helped me understand OuiChef’s
              positioning in the competitive FoodTech landscape and its
              fundraising strategy.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="h-6 w-6 text-indigo-600 mt-1" />
            <span>
              <strong>Data & AI:</strong> My learnings in{" "}
              <em>machine learning & analytics</em> supported my contribution to
              roadmap discussions about NLP and forecasting algorithms.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="h-6 w-6 text-indigo-600 mt-1" />
            <span>
              <strong>CSR & Ethics:</strong> Business ethics and sustainability
              courses gave me tools to evaluate the{" "}
              <em>social & environmental impact</em> of OuiChef’s solutions.
            </span>
          </li>
        </ul>
      </Section>

      {/* Strengths */}
      <Section
        title="Strengths & Contributions"
        subtitle="What worked well during the internship"
      >
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Ability to <strong>adapt quickly</strong> to a startup environment
            with limited resources.
          </li>
          <li>
            Delivered concrete{" "}
            <strong>specifications and UX improvements</strong>
            used by the development team.
          </li>
          <li>
            Brought a structured <strong>CSR-oriented mindset</strong> that
            aligned with OuiChef’s values.
          </li>
          <li>
            Strengthened my <strong>problem-solving</strong> and
            cross-functional collaboration skills.
          </li>
        </ul>
      </Section>

      {/* Challenges */}
      <Section
        title="Limitations & Challenges"
        subtitle="Critical view of difficulties encountered"
      >
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
            <span>
              <strong>Limited resources:</strong> In a startup, lack of time and
              budget constrained deeper testing phases.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
            <span>
              <strong>Scope definition:</strong> Missions were sometimes
              ambiguous, requiring me to clarify objectives with the CEO.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
            <span>
              <strong>CSR trade-offs:</strong> While sustainability was
              integrated, tensions between profitability and impact emerged.
            </span>
          </li>
        </ul>
      </Section>

      {/* Reflection */}
      <Section
        title="Personal Reflection"
        subtitle="What I learned about myself"
      >
        <p className="text-gray-700 leading-relaxed">
          This internship reinforced my interest in{" "}
          <strong>AI applied to real-world problems</strong> and my desire to
          work at the intersection of <strong>technology and strategy</strong>.
          I realized that I thrive in <strong>entrepreneurial contexts</strong>,
          where autonomy, adaptability, and creativity are crucial. It also
          highlighted the importance of <strong>critical thinking</strong>:
          questioning assumptions, balancing business priorities with ethical
          considerations, and constantly seeking innovative yet sustainable
          solutions.
        </p>
      </Section>

      {/* Recommendations */}
      <Section
        title="Recommendations & Future Outlook"
        subtitle="Suggestions for OuiChef and career perspectives"
      >
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <Compass className="h-6 w-6 text-blue-600 mt-1" />
            <span>
              For OuiChef: Strengthen <strong>UX research</strong> with more
              structured user-testing and invest in{" "}
              <strong>scalability of AI models</strong> to support growth.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Target className="h-6 w-6 text-green-600 mt-1" />
            <span>
              For myself: Pursue opportunities in{" "}
              <strong>product strategy & AI innovation</strong>, with a focus on
              <em> sustainable tech</em>.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Scale className="h-6 w-6 text-purple-600 mt-1" />
            <span>
              At NEOMA: Deepen expertise in{" "}
              <strong>digital business & responsible innovation</strong> to
              prepare for leadership roles.
            </span>
          </li>
        </ul>
      </Section>
    </div>
  );
}
