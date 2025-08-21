import React from "react";
import { Section } from "../index";
import { Clock, Globe, Laptop, Briefcase, User } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <Section
        title="Internship Overview"
        subtitle="GBBA 3rd Year Work Experience – OuiChef Startup (France)"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Stagiaire Product & IA</h1>
          <p className="text-lg">
            08 July 2025 → 25 August 2025 • 7 weeks • 35h/week
          </p>
          <p className="mt-2 text-sm">
            Workplace Tutor: <strong>Mr. Kamal Bencharki</strong>, CEO & Founder
          </p>
        </div>
      </Section>

      {/* Internship key facts */}
      <Section title="Key Information">
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="flex items-start space-x-3">
            <Clock className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Duration:</strong> 7 weeks (35h/week)
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Globe className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Location:</strong> OuiChef, 80T Av. de Fontainebleau,
              94270 Le Kremlin-Bicêtre, France
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Laptop className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Remote work:</strong> 1 day/week
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Type:</strong> Mandatory professional experience (not
              remunerated)
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <User className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Tutor:</strong> Mr. Kamal Bencharki – CEO & Founder
            </span>
          </li>
        </ul>
      </Section>
    </div>
  );
}
