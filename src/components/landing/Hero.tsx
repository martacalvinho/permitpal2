import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-primary py-20 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Simplify Your Cafe Permit Management
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Never miss a permit renewal deadline again. Track, manage, and stay
              compliant with all your NYC cafe permits in one place.
            </p>
            <div className="flex space-x-4">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Add illustration or screenshot here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;