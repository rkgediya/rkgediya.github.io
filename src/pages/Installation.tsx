import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Chrome, Download, CheckCircle, AlertCircle } from "lucide-react";

const Installation = () => {
  const steps = [
    {
      step: 1,
      title: "Visit Chrome Web Store",
      description: "Go to the Chrome Web Store and search for 'SF DevX Console' or click the install button below.",
    },
    {
      step: 2,
      title: "Click 'Add to Chrome'",
      description: "Click the 'Add to Chrome' button on the extension page to start the installation process.",
    },
    {
      step: 3,
      title: "Confirm Installation",
      description: "Confirm the installation when prompted and grant the necessary permissions for the extension to work.",
    },
    {
      step: 4,
      title: "Access Salesforce",
      description: "Navigate to your Salesforce org and open the Developer Console to see the enhanced features.",
    },
  ];

  const requirements = [
    "Google Chrome browser (version 88 or higher)",
    "Any edition of an active Salesforce org",
    "System Administrator permissions",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Installation Guide</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with SF DevX Console in just a few simple steps
            </p>
          </div>

          {/* Quick Install */}
          <div className="text-center mb-16">
            <div className="bg-primary/10 rounded-lg p-8 max-w-md mx-auto">
              <Chrome className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Quick Install</h2>
              <Button size="lg" asChild className="w-full">
                <a
                  href="https://chromewebstore.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Install from Chrome Store</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Step-by-Step Installation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>System Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <span>Important Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span className="text-sm">Some features may require Console to be refreshed after installation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span className="text-sm">Works with both Salesforce Classic and Lightning Experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Troubleshooting */}
          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting</CardTitle>
              <CardDescription>
                Having issues with installation? Here are some common solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Features not working as expected?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure you have the necessary permissions in your Salesforce org and that you're using a supported version of Chrome.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Need additional help?</h4>
                  <p className="text-sm text-muted-foreground">
                    Contact our support team at{" "}
                    <a href="mailto:support@sfdevenhanced.com" className="text-primary hover:underline">
                      support@sfdevenhanced.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Installation;