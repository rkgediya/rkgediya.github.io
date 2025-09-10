import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Server, FileX, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Zero Data Collection",
      description: "We don't collect, store, or transmit any of your organizational data. Everything stays local in your browser."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Local Processing Only",
      description: "All data processing happens locally on your machine. No sensitive information ever leaves your browser."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "No Tracking or Analytics",
      description: "We don't use any tracking scripts, analytics, or monitoring tools that could compromise your privacy."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "No External Servers",
      description: "The extension operates entirely client-side with no connection to external servers or databases."
    },
    {
      icon: <FileX className="h-8 w-8 text-primary" />,
      title: "No Data Persistence",
      description: "We don't save, cache, or store any of your Salesforce data beyond your current browser session."
    },
    // {
    //   icon: <CheckCircle className="h-8 w-8 text-primary" />,
    //   title: "Open Source Transparency",
    //   description: "Our code is open source and auditable, ensuring complete transparency in our security practices."
    // }
  ];

  const complianceItems = [
    "GDPR Compliant - No personal data processing",
    "SOC 2 Aligned - Industry security standards",
    "CCPA Compliant - California privacy requirements",
    "ISO 27001 Practices - Information security management",
    "Chrome Web Store Policies - Verified extension"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-normal md:leading-normal">
            Your Data Stays Yours
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SF DevX Console is built with privacy-first principles. We never store, or transmit your Salesforce data.
            Complete transparency and zero data collection guaranteed.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Privacy Commitment */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl p-8 md:p-12 mb-16 border border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Privacy Commitment</h2>
            <div className="text-lg text-muted-foreground space-y-4 text-left md:text-center">
              <p>
                <strong className="text-foreground">We pledge to never:</strong> store any user information, transmit data to external servers, or use tracking technologies.
              </p>
              <p>
                <strong className="text-foreground">We guarantee:</strong> Complete local operation, zero data collection, 
                full transparency, and respect for your organizational privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/30 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Compliance & Standards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Security Standards</h3>
                <ul className="space-y-3">
                  {complianceItems.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Technical Security</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Client-side only execution</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>No network requests to external APIs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sandboxed browser environment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Minimal required permissions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regular security audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Security FAQ</h2>
          <div className="space-y-8">
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-3 text-primary">Can you access my Salesforce data?</h3>
              <p className="text-muted-foreground">
                Absolutely not. The extension only reads data that's already visible in your browser tab. 
                We have no access to your Salesforce org, credentials, or any data beyond what you can see on your screen.
              </p>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-3 text-primary">Do you store any information?</h3>
              <p className="text-muted-foreground">
                No. We don't store, cache, or persist any data. The extension processes information in real-time 
                and discards it immediately after use. Nothing is saved locally or remotely.
              </p>
            </div>
            
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-3 text-primary">What permissions does the extension require?</h3>
              <p className="text-muted-foreground">
                We request only the minimal permissions necessary: access to Salesforce domains to read DOM elements. 
                No broad internet access, no file system access, no background processing.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;