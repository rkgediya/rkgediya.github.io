import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Bug, Play, TestTube, Key, Chrome, Star, Users, ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "/lovable-uploads/acf56aaf-3d8b-42a8-ae56-2d4a26229b5b.png";

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "LWC Editor",
      description: "Enhanced Lightning Web Component editor with best view",
    },
    {
      icon: Code,
      title: "Apex Class Editor",
      description: "Improved Apex class editing with advanced features and better usability",
    },
    {
      icon: Bug,
      title: "Debug Logs",
      description: "View, Delete and analyze debug logs with filtering and search capabilities",
    },
    {
      icon: Database,
      title: "SOQL Query Runner",
      description: "Execute SOQL queries directly in this console with enhanced results viewer",
    },
    {
      icon: TestTube,
      title: "Test Classes",
      description: "Run test classes and view detailed results with coverage information",
    },
    {
      icon: Key,
      title: "Session ID",
      description: "Easy access to session ID for external tools and API calls",
    },
  ];

  const stats = [
    // { icon: Users, value: "10,000+", label: "Active Users" },
    // { icon: Star, value: "4.8", label: "Chrome Store Rating" },
    { icon: Chrome, value: "100%", label: "Chrome Compatible" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-14">
            <div className="text-center max-w-5xl mx-auto">
              <Badge variant="outline" className="mb-6 animate-fade-in glass-effect">
                <Sparkles className="h-4 w-4 mr-2" />
                Enhanced Developer Experience
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8 animate-slide-up">
                Supercharge Your{" "}
                <span className="gradient-text">Salesforce Development</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
                Transform your Salesforce Developer Console with powerful enhancements. 
                Code faster, debug smarter, and test better with our feature-rich Chrome extension.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
                <Button size="lg" className="group hover-lift hover-glow px-8 py-6 text-lg" asChild>
                  <a
                    href="https://chromewebstore.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <Chrome className="h-6 w-6" />
                    <span>Install from Chrome Store</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="hover-lift px-8 py-6 text-lg" asChild>
                  <a href="#features" className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Explore Features</span>
                  </a>
                </Button>
              </div>
              
              <div className="mt-16 flex justify-center">
                <div className="relative max-w-4xl mx-auto">
                  <img 
                    src={heroImage} 
                    alt="SF DevX Console - Salesforce Developer Console Enhanced" 
                    className="w-full h-auto animate-float rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-t bg-gradient-to-r from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover-lift glass-effect animate-fade-in w-64"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
                    <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                    <div className="text-muted-foreground text-lg">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fade-in">
              <Badge variant="outline" className="mb-6 glass-effect">
                <Star className="h-4 w-4 mr-2" />
                Powerful Features
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
                Transform Your Development Workflow
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to enhance your Salesforce development experience with cutting-edge tools and improvements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover-lift hover-glow glass-effect animate-fade-in border-0 shadow-lg" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-fade-in">
              {/* <Badge variant="outline" className="mb-8 glass-effect">
                <Users className="h-4 w-4 mr-2" />
                Join 10,000+ Developers
              </Badge> */}
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text leading-normal sm:leading-normal">
                Introducing SF DevX Console
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Be among the first to explore our brand-new Salesforce developer extension — designed to boost productivity and streamline your workflow from day one.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="group hover-lift hover-glow px-10 py-6 text-lg" asChild>
                  <a
                    href="https://chromewebstore.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <Chrome className="h-6 w-6" />
                    <span>Get Started - It's Free!</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                {/* <div className="flex items-center space-x-2 text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm">Trusted by 10,000+ developers</span>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
