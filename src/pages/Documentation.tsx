import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Bug, TestTube, Key, Book, HelpCircle } from "lucide-react";

const Documentation = () => {
  const sections = [
    {
      id: "lwc-editor",
      title: "LWC Editor",
      icon: Code,
      content: {
        overview: "The enhanced LWC editor provides a superior development experience with improved syntax highlighting and code organization.",
        features: [
          "Advanced syntax highlighting for JavaScript, HTML, and CSS",
          "Intelligent auto-completion for Lightning Web Component APIs",
          "Better code organization with collapsible sections",
          "Enhanced error detection and highlighting"
        ],
        usage: "Open any Lightning Web Component in the Developer Console to see the enhanced editor features automatically applied."
      }
    },
    {
      id: "apex-editor",
      title: "Apex Editor",
      icon: Code,
      content: {
        overview: "Enhanced Apex class editor with improved features for better code development and debugging.",
        features: [
          "Improved syntax highlighting for Apex code",
          "Better error highlighting and detection",
          "Quick navigation between methods and classes",
          "Enhanced code formatting options"
        ],
        usage: "Open any Apex class in the Developer Console to access the enhanced editing features."
      }
    },
    {
      id: "debug-logs",
      title: "Debug Logs",
      icon: Bug,
      content: {
        overview: "Smart debug log viewer with powerful filtering and search capabilities for better debugging experience.",
        features: [
          "Advanced filtering by log level, category, and time",
          "Quick search functionality across all logs",
          "Better log visualization with color coding",
          "Export logs to external files"
        ],
        usage: "Navigate to Debug Logs in the Developer Console to access enhanced log viewing features."
      }
    },
    {
      id: "soql-runner",
      title: "SOQL Query Runner",
      icon: Database,
      content: {
        overview: "Execute SOQL queries directly in the developer console with enhanced results viewer.",
        features: [
          "Direct SOQL query execution",
          "Enhanced results viewer with pagination",
          "Query history for quick re-execution",
          "Performance insights and query optimization tips"
        ],
        usage: "Use the Query Editor in the Developer Console to run SOQL queries with enhanced features."
      }
    },
    {
      id: "test-runner",
      title: "Test Class Runner",
      icon: TestTube,
      content: {
        overview: "Run test classes and view detailed results with comprehensive coverage information.",
        features: [
          "Detailed test execution results",
          "Code coverage information and visualization",
          "Performance metrics for test methods",
          "Easy test class management and organization"
        ],
        usage: "Access the Test tab in the Developer Console to run tests with enhanced reporting."
      }
    },
    {
      id: "session-id",
      title: "Session ID Access",
      icon: Key,
      content: {
        overview: "Easy access to session ID for external tools and API integrations.",
        features: [
          "Quick session ID retrieval",
          "One-click copy to clipboard",
          "Support for external tool integration",
          "API call authentication support"
        ],
        usage: "Look for the session ID button in the Developer Console toolbar for quick access."
      }
    }
  ];

  const faqs = [
    {
      question: "How do I access the enhanced features?",
      answer: "Once the extension is installed, all enhanced features are automatically available when you open the Salesforce Developer Console. No additional configuration is required."
    },
    {
      question: "Does this work with both Classic and Lightning Experience?",
      answer: "Yes, SF Developer Console Enhanced works with both Salesforce Classic and Lightning Experience Developer Console."
    },
    {
      question: "Are there any limitations on the features?",
      answer: "The extension works within the standard Salesforce Developer Console limitations. Some features may require specific user permissions in your Salesforce org."
    },
    {
      question: "How do I report bugs or request features?",
      answer: "You can contact our support team at support@sfdevenhanced.com to report bugs or request new features."
    },
    {
      question: "Is my code and data secure?",
      answer: "Yes, the extension only enhances the existing Developer Console interface and does not store or transmit any of your code or data externally."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete guide to using all features of SF Developer Console Enhanced
            </p>
          </div>

          {/* Main Documentation */}
          <Tabs defaultValue="lwc-editor" className="mb-16">
            <TabsList className="grid grid-cols-2 lg:grid-cols-6 mb-8">
              {sections.map((section) => (
                <TabsTrigger key={section.id} value={section.id} className="text-xs">
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <section.icon className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">{section.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {section.content.overview}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {section.content.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">How to Use</h3>
                      <p className="text-sm text-muted-foreground">{section.content.usage}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* FAQ Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;