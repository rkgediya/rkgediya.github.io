import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Bug, TestTube, Key, Chrome, Play, Monitor, Search, Zap, Sparkles, ArrowRight, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Enhanced LWC Editor",
      description: "Advanced Lightning Web Component editor with improved syntax highlighting, code completion, and better file organization. Navigate through your components with ease and enhanced productivity.",
      benefits: ["Syntax highlighting", "Code completion", "Better file organization", "Enhanced navigation"],
      category: "Code Editor",
      image: "/lovable-uploads/7272fb2b-c0e4-4a88-bf8a-2b9359791c50.png"
    },
    {
      icon: Code,
      title: "Improved Apex Class Editor", 
      description: "Enhanced Apex class editing experience with advanced features including better code formatting, method navigation, and improved debugging capabilities.",
      benefits: ["Advanced formatting", "Method navigation", "Better debugging", "Code organization"],
      category: "Code Editor",
      image: "/lovable-uploads/aabd0f75-5c07-4940-a665-428f541cbc86.png"
    },
    {
      icon: Bug,
      title: "Enhanced Debug Logs",
      description: "Advanced debug log viewer with powerful filtering, search capabilities, and better log organization. Find issues faster with improved log analysis tools.",
      benefits: ["Advanced filtering", "Powerful search", "Better organization", "Quick issue detection"],
      category: "Debugging",
      image: "/lovable-uploads/d6660582-5d2a-495d-bd85-63f673a530d2.png"
    },
    {
      icon: Database,
      title: "Advanced SOQL Query Runner",
      description: "Execute SOQL queries with an enhanced interface featuring result formatting, export capabilities, and query history for better data analysis.",
      benefits: ["Result formatting", "Export capabilities", "Query history", "Data analysis tools"],
      category: "Data Management",
      image: "/lovable-uploads/8e2ada8f-1b0e-4482-869b-9002ea2cce81.png"
    },
    {
      icon: TestTube,
      title: "Enhanced Test Class Runner",
      description: "Run test classes with detailed results, coverage information, and performance metrics. Get comprehensive insights into your test execution.",
      benefits: ["Detailed results", "Coverage information", "Performance metrics", "Test insights"],
      category: "Testing",
      image: "/lovable-uploads/c670cbe2-368e-4c1f-9bfb-76583e76d2f2.png"
    },
    {
      icon: Key,
      title: "Easy Session ID Access",
      description: "Quick and secure access to session IDs for external tools and API calls. Streamline your development workflow with one-click session management.",
      benefits: ["Quick access", "Secure handling", "API integration", "Workflow optimization"],
      category: "Utilities",
      image: "/lovable-uploads/c670cbe2-368e-4c1f-9bfb-76583e76d2f2.png"
    }
  ];

  const additionalFeatures = [
    {
      icon: Search,
      title: "Enhanced Search",
      description: "Powerful search capabilities across all developer console features"
    },
    {
      icon: Eye,
      title: "Better UI/UX",
      description: "Improved user interface for better development experience"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized performance for faster development workflows"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <Badge variant="outline" className="mb-8 animate-fade-in glass-effect">
                <Sparkles className="h-4 w-4 mr-2" />
                Comprehensive Feature Suite
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8 animate-slide-up">
                Transform Your <span className="gradient-text">Salesforce Development</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed">
                Discover the comprehensive suite of tools and enhancements that make SF Developer Console Enhanced the ultimate companion for Salesforce developers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid with Screenshots */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <Badge variant="outline" className="glass-effect">
                        <feature.icon className="h-4 w-4 mr-2" />
                        {feature.category}
                      </Badge>
                      <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                        {feature.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                      <img 
                        src={feature.image} 
                        alt={`${feature.title} screenshot`}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Floating badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-primary-glow text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Live Preview
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <Badge variant="outline" className="mb-6 glass-effect">
                <Zap className="h-4 w-4 mr-2" />
                Additional Enhancements
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
                Even More Powerful Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore additional enhancements that make your development experience even better
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="text-center hover-lift glass-effect animate-fade-in border-0 shadow-lg" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Badge variant="outline" className="mb-8 glass-effect">
                <Zap className="h-4 w-4 mr-2" />
                Ready to Get Started?
              </Badge>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
                Experience These Features Today
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Install SF Developer Console Enhanced and join thousands of developers who have already transformed their Salesforce development workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://chromewebstore.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-white rounded-xl hover-lift hover-glow font-medium text-lg transition-all"
                >
                  <Chrome className="h-6 w-6 mr-3" />
                  Install from Chrome Store
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="/installation"
                  className="inline-flex items-center px-8 py-4 border border-border rounded-xl hover:bg-muted/50 transition-all text-lg hover-lift"
                >
                  <Play className="h-5 w-5 mr-3" />
                  View Installation Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;