import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

// Composant Link (corrigé : navigation normale)
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
    onClick={onClick} // conserve la possibilité de fermer le menu mobile
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Hook pour détecter la taille d’écran
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

  const toggleMobileMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStarted = (): void => {
    console.log("Get Started clicked");
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
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  };

  const brandStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "all 0.3s ease",
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
    color: "#374151",
  };

  const ctaButtonStyle: React.CSSProperties = {
    display: isDesktop ? "block" : "none",
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

  const mobileNavLinkStyle: React.CSSProperties = {
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
    color: "#374151",
    backgroundColor: "transparent",
    borderLeft: "4px solid transparent",
  };

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
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        {/* Logo / Brand */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={brandStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #2563eb, #7c3aed)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #3b82f6, #8b5cf6)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Enterprise
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div>
          <ul style={desktopNavStyle}>
            {navigationItems.map((item: NavigationItem) => (
              <li key={item.to} style={{ position: "relative" }}>
                <Link
                  to={item.to}
                  style={navLinkBaseStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#3b82f6";
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#374151";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button Desktop */}
        <div>
          <button
            onClick={handleGetStarted}
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #2563eb, #7c3aed)";
              e.currentTarget.style.transform = "translateY(-1px) scale(1.05)";
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
            Get Started
          </button>
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
            <Link
              key={item.to}
              to={item.to}
              style={mobileNavLinkStyle}
              onClick={() => setIsMenuOpen(false)} // ferme le menu mobile
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
                e.currentTarget.style.borderLeftColor = "#93c5fd";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderLeftColor = "transparent";
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <div style={mobileCTAContainerStyle}>
            <button
              onClick={handleGetStarted}
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
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
