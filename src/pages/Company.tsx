import React from "react";
import { Section } from "../index";
import { Building2, BarChart, Users, Rocket, Globe } from "lucide-react";

export default function Company() {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <Section
        title="OuiChef – Company Profile"
        subtitle="A French FoodTech & AI startup revolutionizing restaurant management"
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-2">OuiChef</h1>
          <p className="text-lg">
            Founded on <strong>01/02/2022</strong> • Headquartered in{" "}
            <strong>Le Kremlin-Bicêtre, France</strong>
          </p>
          <p className="text-sm mt-2">SIRET: 83102844400022</p>
        </div>
      </Section>

      {/* Key figures */}
      <Section title="Key Figures">
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="flex items-start space-x-3">
            <Users className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Staff:</strong> Fewer than 10 employees
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Organization type:</strong> Startup (FoodTech & SaaS)
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <BarChart className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Revenue growth:</strong> +80%
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <Rocket className="h-6 w-6 text-blue-600" />
            <span>
              <strong>Last fundraising:</strong> 10/03/2025
            </span>
          </li>
        </ul>
      </Section>

      {/* Activities */}
      <Section
        title="Activities & Business Model"
        subtitle="Bringing Artificial Intelligence to gastronomy"
      >
        <p className="text-gray-700 leading-relaxed">
          OuiChef designs and commercializes{" "}
          <strong>AI-powered solutions</strong>
          dedicated to the restaurant industry. The startup’s aim is to optimize
          <em>
            {" "}
            operational management, customer experience, and profitability
          </em>
          of restaurants, franchises, and dark kitchens.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          OuiChef operates on a <strong>SaaS model</strong>, offering
          customizable tools that restaurateurs can integrate into their daily
          operations, both through mobile and web platforms.
        </p>
      </Section>

      {/* Innovation */}
      <Section
        title="Innovative Project"
        subtitle="A white-label platform for the future of restaurants"
      >
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-4">
          <p>
            OuiChef’s flagship innovation is a complete{" "}
            <strong>white-label system</strong>, composed of:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Customizable mobile app and web app</li>
            <li>Advanced loyalty program</li>
            <li>Dynamic AI recommendations (personalized menus)</li>
            <li>Smart order & flow management</li>
            <li>Real-time analytics dashboards</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The technology relies on proprietary algorithms (
            <em>computer vision, NLP, statistical forecasting</em>) and
            emphasizes{" "}
            <strong>usability, sustainability, and scalability</strong>.
          </p>
        </div>
      </Section>

      {/* Market & positioning */}
      <Section title="Market & Positioning">
        <p className="text-gray-700 leading-relaxed">
          OuiChef is part of the{" "}
          <strong>FoodTech & AI ecosystem in France</strong>, at the crossroads
          of <em>technology, gastronomy, and sustainability</em>. Positioned as
          a partner for both independent restaurants and growing franchise
          networks, OuiChef distinguishes itself with its strong commitment to{" "}
          <strong>RSE (CSR)</strong>: anti-waste algorithms, accessibility, and
          user awareness about environmental impact.
        </p>
      </Section>

      {/* Location */}
      <Section title="Headquarters & Legal Information">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <Globe className="h-6 w-6 text-blue-600 mb-2" />
          <p>
            <strong>Address:</strong> 80T Avenue de Fontainebleau, 94270 Le
            Kremlin-Bicêtre, France
          </p>
          <p>
            <strong>SIRET:</strong> 83102844400022
          </p>
          <p>
            <strong>Sector:</strong> IT / Internet / Telecommunications
          </p>
        </div>
      </Section>
    </div>
  );
}
