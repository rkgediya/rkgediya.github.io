import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Menu, X, Chrome } from "lucide-react";
import { useState } from "react";
import logoImage from "/lovable-uploads/370a5a49-a53d-41cc-b1f2-9b6ac8520c38.png";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/installation", label: "Installation" },
    
    { path: "/pricing", label: "Pricing" },
    { path: "/security", label: "Security" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b border-border/30 backdrop-blur-xl bg-gradient-to-r from-background/95 via-muted/40 to-background/95 sticky top-0 z-50 shadow-nav">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 overflow-hidden">
              <img 
                src={logoImage} 
                alt="SF DevX Console Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground hidden sm:block">SF DevX Console</span>
              <span className="font-bold text-xl text-foreground sm:hidden">SF DevX</span>
              <span className="text-xs text-muted-foreground font-medium">Chrome Extension</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group hover:bg-muted/60 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-300 group-hover:w-6 ${
                  location.pathname === item.path ? "w-6" : ""
                }`}></span>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-border/50">
              <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                <a
                  href="https://chromewebstore.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Chrome className="h-4 w-4" />
                  <span>Install Extension</span>
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-muted/60 transition-all duration-300 hover:scale-105"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6">
            <div className="flex flex-col space-y-2 bg-gradient-to-br from-muted/30 to-background/50 backdrop-blur-sm rounded-2xl p-6 mt-4 border border-border/30 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-sm ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/30">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <a
                    href="https://chromewebstore.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Chrome className="h-4 w-4" />
                    <span>Install Extension</span>
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;