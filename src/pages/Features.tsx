import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Bug, Play, TestTube, Key, Zap, Search, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Enhanced LWC Editor",
      description: "Superior Lightning Web Component editing experience with improved syntax highlighting, auto-completion, and better code organization.",
      benefits: [
        "Advanced syntax highlighting",
        "Intelligent auto-completion",
        "Better code organization",
        "Enhanced readability"
      ]
    },
    {
      icon: Code,
      title: "Advanced Apex Editor",
      description: "Powerful Apex class editor with enhanced features for better code development and debugging.",
      benefits: [
        "Improved code editing",
        "Better error highlighting",
        "Quick navigation",
        "Enhanced formatting"
      ]
    },
    {
      icon: Bug,
      title: "Smart Debug Logs",
      description: "View and analyze debug logs with powerful filtering, search capabilities, and better visualization.",
      benefits: [
        "Advanced log filtering",
        "Quick search functionality",
        "Better log visualization",
        "Export capabilities"
      ]
    },
    {
      icon: Database,
      title: "SOQL Query Runner",
      description: "Execute SOQL queries directly in the developer console with enhanced results viewer and query optimization.",
      benefits: [
        "Direct query execution",
        "Enhanced results viewer",
        "Query history",
        "Performance insights"
      ]
    },
    {
      icon: TestTube,
      title: "Test Class Runner",
      description: "Run test classes and view detailed results with comprehensive coverage information and performance metrics.",
      benefits: [
        "Detailed test results",
        "Coverage information",
        "Performance metrics",
        "Easy test management"
      ]
    },
    {
      icon: Key,
      title: "Session ID Access",
      description: "Easy access to session ID for external tools, API calls, and third-party integrations.",
      benefits: [
        "Quick session ID retrieval",
        "Copy to clipboard",
        "External tool integration",
        "API call support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover all the ways SF Developer Console Enhanced can improve your Salesforce development workflow
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <feature.icon className="h-10 w-10 text-primary" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-secondary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Enhancements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Search className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Enhanced Search</h3>
                <p className="text-sm text-muted-foreground">
                  Powerful search capabilities across all developer console features
                </p>
              </div>
              <div className="text-center">
                <Eye className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Better UI/UX</h3>
                <p className="text-sm text-muted-foreground">
                  Improved user interface for better development experience
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized performance for faster development workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;