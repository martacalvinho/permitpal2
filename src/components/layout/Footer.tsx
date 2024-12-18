import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import { footerLinks } from "@/data/footer";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Cafe Permit Pal</span>
            </div>
            <p className="text-sm text-gray-600">
              Simplifying permit management for NYC cafes. Stay compliant, stay focused on what matters.
            </p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-600 md:flex-row md:space-y-0">
            <p>© {new Date().getFullYear()} Cafe Permit Pal. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;