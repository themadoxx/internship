import React from "react";
import { Section } from "../index";
import {
  Briefcase,
  Target,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Globe2,
} from "lucide-react";

export default function Experience() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <Section
        title="Professional Experience"
        subtitle="Mandatory internship at OuiChef – Product & AI Intern"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Product & AI Intern</h1>
          <p className="text-lg">
            08 July 2025 → 25 August 2025 • 7 weeks • 35h/week • France
          </p>
          <p className="mt-2 text-sm opacity-90">
            Context: Internship part of the GBBA Year 3 mandatory professional
            experience.
          </p>
        </div>
      </Section>

      {/* Context */}
      <Section
        title="Context"
        subtitle="Understanding the environment of the mission"
      >
        <p className="text-gray-700 leading-relaxed">
          OuiChef is a French <strong>FoodTech startup</strong> founded in 2022,
          specializing in <strong>AI-powered solutions for restaurants</strong>.
          With fewer than 10 employees, the company is in a fast-scaling phase,
          following an <strong>80% revenue growth</strong> and a successful{" "}
          <strong>fundraising in March 2025</strong>. Its white-label SaaS
          platform enables restaurateurs to optimize operations, enhance the
          customer experience, and integrate sustainable practices such as
          <em> anti-waste forecasting algorithms</em>.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Within this dynamic and innovative context, I joined OuiChef as a{" "}
          <strong>Product & AI Intern</strong>, reporting directly to the CEO
          and working closely with the development team and restaurant partners.
        </p>
      </Section>

      {/* Actions */}
      <Section
        title="Actions"
        subtitle="Missions and responsibilities carried out"
      >
        <ul className="space-y-3 text-gray-700">
          {[
            "Actively contributed to the design and pilot of new AI modules for the platform",
            "Collected and analyzed user needs from restaurant partners and food delivery platforms",
            "Structured functional roadmaps in collaboration with developers",
            "Conducted technological watch on AI & FoodTech best practices",
            "Designed and tested user experiences through field testing sessions",
            "Assessed product impact on CSR and sustainability",
            "Verified integration of sustainability into solutions (anti-waste algorithms, accessibility, awareness tools)",
          ].map((action, i) => (
            <li key={i} className="flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Results */}
      <Section title="Results" subtitle="Impact and outcomes of the internship">
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Delivered <strong>functional specifications</strong> for 2 new AI
              features integrated into the roadmap.
            </li>
            <li>
              Improved <strong>UX flows</strong> validated during 3 user-testing
              sessions with partner restaurateurs.
            </li>
            <li>
              Contributed to a <strong>CSR-focused product framework</strong>{" "}
              including anti-waste algorithms and accessibility guidelines.
            </li>
            <li>
              Strengthened internal processes by creating{" "}
              <strong>benchmarks</strong> of FoodTech competitors and AI
              solutions.
            </li>
          </ul>
        </div>
      </Section>

      {/* Skills */}
      <Section
        title="Skills & Learning Outcomes"
        subtitle="Personal and professional development"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />{" "}
              <span>Hard Skills</span>
            </h3>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              <li>Product management & roadmap design</li>
              <li>User research & data analysis</li>
              <li>AI technology watch (NLP, computer vision, forecasting)</li>
              <li>UX/UI design and usability testing</li>
              <li>CSR & sustainability integration</li>
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />{" "}
              <span>Soft Skills</span>
            </h3>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              <li>Critical thinking & problem-solving</li>
              <li>Adaptability in a startup environment</li>
              <li>Collaboration with cross-functional teams</li>
              <li>Effective communication with stakeholders</li>
              <li>Time & priority management</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* International & CSR */}
      <Section
        title="International & CSR Dimension"
        subtitle="How this internship addresses global and sustainable challenges"
      >
        <p className="text-gray-700 leading-relaxed">
          Even though the internship took place in France, OuiChef operates in a
          <strong> global FoodTech ecosystem</strong>, with solutions applicable
          across markets. The work included a strong{" "}
          <strong>CSR dimension</strong>: promoting diversity, inclusion, and
          sustainability in product design. Specific focus was put on{" "}
          <em>anti-waste algorithms</em>, accessibility for all users, and
          raising awareness among customers about the environmental impact of
          menus.
        </p>
      </Section>
    </div>
  );
}
