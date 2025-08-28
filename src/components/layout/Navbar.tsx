import React, { useState, useEffect } from "react";
import { Menu, X, Building2, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";

// Types
interface NavigationItem {
  to: string;
  label: string;
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Composant Link simulé pour la démo (remplacez par votre router)
const Link: React.FC<LinkProps> = ({
  to,
  children,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => (
  <a
    href={to}
    style={{
      textDecoration: "none",
      cursor: "pointer",
      ...style,
    }}
    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) onClick();
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Hook pour détecter la taille d'écran
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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



  };

  // Styles
  const navbarStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 50,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  };

  const brandContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    flexShrink: 0,
  };

  const logoStyle: React.CSSProperties = {
    padding: "0.5rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    borderRadius: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  };

  const brandTextContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const mainTitleStyle: React.CSSProperties = {
    fontSize: isDesktop ? "1.25rem" : "1.1rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #1e40af, #7c3aed)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "all 0.3s ease",
    lineHeight: "1.2",
    margin: 0,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    color: "#6b7280",
    fontWeight: 500,
    marginTop: "0.125rem",
    letterSpacing: "0.025em",
  };

  const desktopNavStyle: React.CSSProperties = {
    display: isDesktop ? "flex" : "none",
    alignItems: "baseline",
    gap: "0.25rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const navLinkBaseStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
    position: "relative",
    display: "inline-block",
  };

  const getNavLinkStyle = (isActive: boolean): React.CSSProperties => ({
    ...navLinkBaseStyle,
    color: isActive ? "#3b82f6" : "#374151",
    backgroundColor: isActive ? "#eff6ff" : "transparent",
    boxShadow: isActive ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" : "none",
  });

  const ctaButtonStyle: React.CSSProperties = {
    display: isDesktop ? "flex" : "none",
    alignItems: "center",
    gap: "0.5rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    fontSize: "0.875rem",
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: isDesktop ? "none" : "block",
    background: "none",
    border: "none",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "#6b7280",
  };

  const mobileNavStyle: React.CSSProperties = {
    display: isDesktop ? "none" : "block",
    maxHeight: isMenuOpen ? "400px" : "0",
    opacity: isMenuOpen ? 1 : 0,
    overflow: "hidden",
    transition: "all 0.3s ease",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    borderTop: "1px solid #e5e7eb",
  };

  const mobileNavContentStyle: React.CSSProperties = {
    padding: "0.5rem 1rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const mobileNavLinkStyle = (isActive: boolean): React.CSSProperties => ({
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
    color: isActive ? "#3b82f6" : "#374151",
    backgroundColor: isActive ? "#eff6ff" : "transparent",
    borderLeft: `4px solid ${isActive ? "#3b82f6" : "transparent"}`,
  });

  const mobileCTAContainerStyle: React.CSSProperties = {
    paddingTop: "1rem",
    marginTop: "1rem",
    borderTop: "1px solid #e5e7eb",
  };

  const mobileCTAStyle: React.CSSProperties = {
    width: "100%",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    fontSize: "0.875rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  return (
    <>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          {/* Logo / Brand avec titre professionnel */}
          <div style={brandContainerStyle}>
            <div style={logoStyle}>
              <Building2
                style={{
                  height: "20px",
                  width: "20px",
                  color: "white",
                }}
              />
            </div>
            <NavLink
              to="/"
              onClick={() => handleNavigation("/")}
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) => {
                const titleElement = e.currentTarget.querySelector(
                  "[data-title]"
                ) as HTMLElement;
                if (titleElement) {
                  titleElement.style.background =
                    "linear-gradient(135deg, #1e3a8a, #6b21a8)";
                  titleElement.style.transform = "scale(1.02)";
                }
              }}
              onMouseLeave={(e) => {
                const titleElement = e.currentTarget.querySelector(
                  "[data-title]"
                ) as HTMLElement;
                if (titleElement) {
                  titleElement.style.background =
                    "linear-gradient(135deg, #1e40af, #7c3aed)";
                  titleElement.style.transform = "scale(1)";
                }
              }}
            >
              <div style={brandTextContainerStyle}>
                <h1 data-title style={mainTitleStyle}>
                  Internship Experience Report
                </h1>
                <span style={subtitleStyle}>
                  OuiChef • NEOMA Business School
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div>
            <ul style={desktopNavStyle}>
              {navigationItems.map((item: NavigationItem) => (
                <li key={item.to} style={{ position: "relative" }}>
                  <NavLink
                    to={item.to}
                    onClick={() => handleNavigation(item.to)}
                    style={getNavLinkStyle(isActiveLink(item.to))}
                    onMouseEnter={(e) => {
                      if (!isActiveLink(item.to)) {
                        e.currentTarget.style.color = "#3b82f6";
                        e.currentTarget.style.backgroundColor = "#f9fafb";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActiveLink(item.to)) {
                        e.currentTarget.style.color = "#374151";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button Desktop */}
          <div>
            <NavLink to="/">
              <button
              onClick={() => handleNavigation("/")}
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                "linear-gradient(135deg, #2563eb, #7c3aed)";
                e.currentTarget.style.transform =
                "translateY(-1px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                "linear-gradient(135deg, #3b82f6, #8b5cf6)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
              }}
              >
              <GraduationCap style={{ height: "16px", width: "16px" }} />
              Get Started
              </button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div>
            <button
              onClick={toggleMobileMenu}
              style={mobileMenuButtonStyle}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              type="button"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#111827";
                e.currentTarget.style.backgroundColor = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6b7280";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {isMenuOpen ? (
                <X style={{ height: "24px", width: "24px" }} />
              ) : (
                <Menu style={{ height: "24px", width: "24px" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div style={mobileNavStyle}>
          <div style={mobileNavContentStyle}>
            {navigationItems.map((item: NavigationItem) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => handleNavigation(item.to)}
                style={mobileNavLinkStyle(isActiveLink(item.to))}
                onMouseEnter={(e) => {
                  if (!isActiveLink(item.to)) {
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                    e.currentTarget.style.borderLeftColor = "#93c5fd";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink(item.to)) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderLeftColor = "transparent";
                  }
                }}
              >
                {item.label}
              </NavLink>
            ))}


            {/* Mobile CTA Button */}
            <div style={mobileCTAContainerStyle}>
                <button
                onClick={() => handleNavigation("/")}
                style={mobileCTAStyle}
                type="button"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                  "linear-gradient(135deg, #2563eb, #7c3aed)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                  "linear-gradient(135deg, #3b82f6, #8b5cf6)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                >
                <GraduationCap style={{ height: "16px", width: "16px" }} />
                Get Started
                </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
