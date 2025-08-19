import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Types
interface NavigationItem {
  to: string;
  label: string;
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Composant Link simulé pour la démo (remplacez par votre router)
const Link: React.FC<LinkProps> = ({ to, children, className, onClick }) => (
  <a
    href={to}
    className={className}
    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) onClick();
      // Ici vous pouvez ajouter votre logique de navigation
    }}
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>("/"); // Simule useLocation

  const navigationItems: NavigationItem[] = [
    { to: "/", label: "Home" },
    { to: "/company", label: "Company" },
    { to: "/experience", label: "Experience" },
    { to: "/critical-thinking", label: "Critical Thinking" },
    { to: "/on-this-subject", label: "On This Subject" },
  ];

  const isActiveLink = (path: string): boolean => {
    return currentPath === path;
  };

  const toggleMobileMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string): void => {
    setCurrentPath(path);
    setIsMenuOpen(false);
  };

  const handleGetStarted = (): void => {
    console.log("Get Started clicked");
    // Ajoutez votre logique ici
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Enterprise
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigationItems.map((item: NavigationItem) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => handleNavigation(item.to)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    isActiveLink(item.to)
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                      isActiveLink(item.to) ? "w-full" : ""
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              type="button"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white shadow-lg border-t border-gray-100">
          {navigationItems.map((item: NavigationItem) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => handleNavigation(item.to)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                isActiveLink(item.to)
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 border-l-4 border-transparent hover:border-blue-200"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <button
              onClick={handleGetStarted}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
