import React from "react";
import { Section } from "../index";
import {
  Lightbulb,
  TrendingUp,
  Globe,
  BookOpen,
  Users,
  Rocket,
} from "lucide-react";

export default function OnThisSubject() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <Section
        title="On This Subject"
        subtitle="Broadening perspectives on AI, FoodTech and sustainable innovation"
      >
        <div className="bg-gradient-to-r from-blue-700 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Beyond My Internship</h1>
          <p className="text-lg opacity-90">
            My internship at OuiChef was not just a practical experience: it was
            an immersion into some of the most transformative challenges of our
            time — artificial intelligence, food sustainability, and the future
            of entrepreneurship.
          </p>
        </div>
      </Section>

      {/* Sectoral perspective */}
      <Section
        title="The FoodTech Landscape"
        subtitle="How OuiChef fits into a growing global trend"
      >
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <Globe className="h-6 w-6 text-indigo-600 mt-1" />
            <span>
              Global FoodTech is projected to surpass{" "}
              <strong>$342 billion by 2027</strong>, driven by digitalization,
              sustainability concerns, and new consumption habits.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <TrendingUp className="h-6 w-6 text-indigo-600 mt-1" />
            <span>
              OuiChef’s model — AI-powered optimization & white-label platforms
              — is aligned with the{" "}
              <strong>scalability and customization</strong> demanded by
              restaurateurs and dark kitchens.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Lightbulb className="h-6 w-6 text-indigo-600 mt-1" />
            <span>
              The company’s integration of <strong>CSR dimensions</strong>
              (anti-food waste, accessibility, awareness) reflects the{" "}
              <em>triple bottom line</em> approach (people, planet, profit).
            </span>
          </li>
        </ul>
      </Section>

      {/* Theoretical link */}
      <Section
        title="Academic & Theoretical Insights"
        subtitle="How business frameworks help explain the experience"
      >
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
            <span>
              <strong>Blue Ocean Strategy:</strong> OuiChef attempts to create
              uncontested market space by offering{" "}
              <em>AI-as-a-Service for restaurants</em> with strong branding
              flexibility.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
            <span>
              <strong>Disruptive Innovation Theory:</strong> As a startup,
              OuiChef leverages agility to disrupt traditional SaaS players with
              <em> niche-targeted, highly adaptive tools</em>.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
            <span>
              <strong>Stakeholder Theory:</strong> Integrating restaurateurs,
              customers, and environmental concerns demonstrates a{" "}
              <em>multi-stakeholder alignment</em> strategy.
            </span>
          </li>
        </ul>
      </Section>

      {/* Broader impact */}
      <Section
        title="Broader Implications"
        subtitle="Why this subject matters for society and business"
      >
        <p className="text-gray-700 leading-relaxed">
          Working on AI in FoodTech revealed the profound societal implications
          of technology. The way we{" "}
          <strong>eat, consume and manage resources</strong> is deeply tied to
          sustainability and inclusivity. Companies like OuiChef are not only
          reshaping the restaurant industry but also contributing to a{" "}
          <strong>global transition</strong> toward smarter, more sustainable
          food systems. This raises critical questions: How can we balance{" "}
          <em>profitability</em>
          with <em>ethics</em>? How do we ensure <em>AI fairness</em> and
          accessibility in a fragmented industry?
        </p>
      </Section>

      {/* Personal outlook */}
      <Section
        title="Personal Outlook"
        subtitle="What this subject means for my academic and career path"
      >
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start space-x-3">
            <Users className="h-6 w-6 text-green-600 mt-1" />
            <span>
              I aspire to work at the crossroads of{" "}
              <strong>product strategy, AI and sustainability</strong>, applying
              my skills in environments where innovation serves both{" "}
              <em>business and society</em>.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Rocket className="h-6 w-6 text-purple-600 mt-1" />
            <span>
              My experience at OuiChef confirmed my appetite for{" "}
              <strong>entrepreneurship and intrapreneurship</strong>, where bold
              ideas can be transformed into impactful solutions.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Lightbulb className="h-6 w-6 text-yellow-500 mt-1" />
            <span>
              Academically, I plan to deepen my expertise in{" "}
              <strong>responsible innovation and digital business</strong> to
              prepare for leadership roles in the tech sector.
            </span>
          </li>
        </ul>
      </Section>
    </div>
  );
}
