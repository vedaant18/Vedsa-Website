import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6">
        {/* Logo - Top Left */}
        <Link to="/" className="flex flex-col" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Vedsa</span>
          <span className="text-xs md:text-sm text-primary font-medium tracking-wide">Automation Studio</span>
        </Link>

        {/* Desktop Navigation - Top Right */}
        <nav className="hidden md:flex gap-10 items-center">
          <Link
            to="/"
            className={`transition-all duration-200 font-medium text-base relative after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full ${
              isHomePage 
                ? "text-primary after:opacity-100" 
                : "text-muted-foreground hover:text-primary after:opacity-0 hover:after:opacity-100"
            } after:transition-all`}
          >
            Workflows
          </Link>
          <Link
            to="/about"
            className={`transition-all duration-200 font-medium text-base relative after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full ${
              location.pathname === "/about"
                ? "text-primary after:opacity-100"
                : "text-muted-foreground hover:text-primary after:opacity-0 hover:after:opacity-100"
            } after:transition-all`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button - Top Right */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-border/30 bg-[#0a0a0a]/95 backdrop-blur-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 px-4 rounded-lg transition-colors font-medium ${
                isHomePage 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              Workflows
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 px-4 rounded-lg transition-colors font-medium ${
                location.pathname === "/about"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
