import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./ui/button";

export default function Navigation() {
  const [, setLocation] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 overflow-hidden">
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <span className="font-semibold text-foreground group-hover:text-blue-400 transition-colors border-b-2 border-transparent group-hover:border-blue-400">
              Jason Sher
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-orange-400 transition-colors border-2 border-transparent hover:border-orange-400 rounded-lg"
            >
              about me
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-purple-400 transition-colors border-2 border-transparent hover:border-purple-400 rounded-lg"
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection("lists")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-green-400 transition-colors border-2 border-transparent hover:border-green-400 rounded-lg"
            >
              lists
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-cyan-400 transition-colors border-2 border-transparent hover:border-cyan-400 rounded-lg"
            >
              contact
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 hover:text-pink-400 hover:border-pink-400 border-2 border-transparent rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:text-pink-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-card/95 backdrop-blur-md border border-border rounded-2xl p-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-orange-400 transition-colors border-2 border-transparent hover:border-orange-400 rounded-lg"
            >
              about me
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-purple-400 transition-colors border-2 border-transparent hover:border-purple-400 rounded-lg"
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection("lists")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-green-400 transition-colors border-2 border-transparent hover:border-green-400 rounded-lg"
            >
              lists
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-cyan-400 transition-colors border-2 border-transparent hover:border-cyan-400 rounded-lg"
            >
              contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

