import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5">
              <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                <span className="text-2xl font-heading font-bold gradient-text">V</span>
              </div>
            </div>
            <span className="font-heading font-bold text-xl text-foreground group-hover:text-glow-pink transition-all">
              VEDSA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="relative font-body text-foreground hover:text-primary transition-all duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#workflows"
              className="relative font-body text-foreground hover:text-primary transition-all duration-300 group"
            >
              Workflows
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#cta"
              className="relative px-6 py-2 font-body font-medium neon-border rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-hover"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <a
              href="#"
              className="block font-body text-foreground hover:text-primary transition-all py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#workflows"
              className="block font-body text-foreground hover:text-primary transition-all py-2"
              onClick={() => setIsOpen(false)}
            >
              Workflows
            </a>
            <a
              href="#cta"
              className="block w-full text-center px-6 py-2 font-body font-medium neon-border rounded-lg hover:bg-primary/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Book a call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
