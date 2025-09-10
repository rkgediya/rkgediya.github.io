import { Code, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <img 
                src="/lovable-uploads/370a5a49-a53d-41cc-b1f2-9b6ac8520c38.png" 
                alt="SF DevX Console Logo" 
                className="h-6 w-6"
              />
              <span className="font-bold">SF DevX Console</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enhance your Salesforce development experience with our powerful browser extension.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-sm text-muted-foreground hover:text-primary">
                Features
              </Link>
              <Link to="/installation" className="block text-sm text-muted-foreground hover:text-primary">
                Installation
              </Link>
              <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-primary">
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/documentation" className="block text-sm text-muted-foreground hover:text-primary">
                Documentation
              </Link>
              <a href="mailto:support@sfdevenhanced.com" className="block text-sm text-muted-foreground hover:text-primary">
                Contact Support
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 SF DevX Console. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;