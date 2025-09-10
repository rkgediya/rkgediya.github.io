import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary-dark bg-clip-text text-transparent">
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-primary/10 blur-sm">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-muted-foreground/80 font-mono bg-muted/30 px-3 py-2 rounded-lg inline-block">
              {location.pathname}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Return Home</span>
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="border-border/50 hover:bg-muted/60 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              <button onClick={() => window.history.back()} className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Go Back</span>
              </button>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Popular Pages</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link 
                to="/features" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
              >
                Features
              </Link>
              <Link 
                to="/installation" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
              >
                Installation
              </Link>
              <Link 
                to="/pricing" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
              >
                Pricing
              </Link>
              <Link 
                to="/security" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
