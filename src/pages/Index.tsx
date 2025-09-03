import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Bug, Play, TestTube, Key, Chrome, Star, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "LWC Editor",
      description: "Enhanced Lightning Web Component editor with best view and syntax highlighting",
    },
    {
      icon: Code,
      title: "Apex Class Editor",
      description: "Improved Apex class editing with advanced features and better usability",
    },
    {
      icon: Bug,
      title: "Debug Logs",
      description: "View and analyze debug logs with enhanced filtering and search capabilities",
    },
    {
      icon: Database,
      title: "SOQL Query Runner",
      description: "Execute SOQL queries directly in the developer console with results viewer",
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
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: Star, value: "4.8", label: "Chrome Store Rating" },
    { icon: Chrome, value: "100%", label: "Chrome Compatible" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Supercharge Your{" "}
                <span className="text-primary">Salesforce Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                SF Developer Console Enhanced brings powerful tools and improvements to your Salesforce development workflow. Code faster, debug smarter, and test better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a
                    href="https://chromewebstore.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Chrome className="h-5 w-5" />
                    <span>Install from Chrome Store</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">View Features</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to enhance your Salesforce development experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Development?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of Salesforce developers who are already using SF Developer Console Enhanced to boost their productivity.
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://chromewebstore.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 mx-auto w-fit"
                >
                  <Chrome className="h-5 w-5" />
                  <span>Get Started - It's Free!</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
