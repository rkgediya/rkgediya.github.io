import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Chrome, Heart, Star } from "lucide-react";

const Pricing = () => {
  const features = [
    "Enhanced LWC Editor",
    "Advanced Apex class editor",
    "Smart debug log viewer with filtering",
    "SOQL query runner with results viewer",
    "Test class runner with coverage information",
    "Easy session ID access",
    "Better UI/UX improvements",
    "Performance optimizations",
    "Regular updates and improvements",
    "Community support"
  ];

  const testimonials = [
    {
      name: "Ronak Gediya",
      role: "Salesforce Developer",
      comment: "This extension makes my Salesforce development process much smoother.",
      rating: 4
    },
    {
      name: "Kishan Vasoya",
      role: "Senior Salesforce Developer",
      comment: "An absolute must-have for any Salesforce developer. The features save me hours every week and improve my workflow significantly.",
      rating: 5
    },
    // {
    //   name: "Lisa Rodriguez",
    //   role: "Salesforce Admin",
    //   comment: "Even as an admin, I find the enhanced Developer Console incredibly useful for debugging and understanding our org better.",
    //   rating: 5
    // }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SF DevX Console is completely free to use. No hidden costs, no subscriptions, no limits.
            </p>
          </div>

          {/* Free Plan Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-2">Free Forever</CardTitle>
                <CardDescription className="text-lg">
                  All features included at no cost
                </CardDescription>
                <div className="text-center mt-4">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-muted-foreground ml-2">forever</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://chromewebstore.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Chrome className="h-5 w-5" />
                    <span>Install Now - Free!</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Why Free Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Why is it free?</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-4">
                We believe that great developer tools should be accessible to everyone. SF DevX Console 
                is our contribution to the Salesforce developer community.
              </p>
              <p className="text-muted-foreground">
                Our goal is to help developers be more productive and enjoy their work more. The extension is maintained 
                by passionate developers who understand the challenges of Salesforce development.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="w-full md:w-1/3 max-w-sm">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-sm italic">
                    "{testimonial.comment}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Section */}
          <Card className="bg-secondary/20">
            <CardHeader>
              <CardTitle className="text-center">Need Support?</CardTitle>
              <CardDescription className="text-center">
                Even though it's free, we still provide excellent support
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Have questions or need help? Our community and support team are here to help you get the most 
                out of SF DevX Console.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="mailto:support@sfdevenhanced.com">Contact Support</a>
                </Button>
                {/* <Button variant="outline" asChild>
                  <a href="/documentation">View Documentation</a>
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;