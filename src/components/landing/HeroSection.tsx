import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { HeroFeature } from "@/types/landing";

const heroFeatures: HeroFeature[] = [
  { icon: CheckCircle, label: "Permit Tracking" },
  { icon: CheckCircle, label: "Safety Monitoring" },
  { icon: CheckCircle, label: "Event Alerts" },
];

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div className="container relative mx-auto px-4">
        <BackgroundPattern />
        <div className="relative grid gap-12 md:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
  </div>
);

const HeroContent = () => (
  <div className="space-y-8">
    <Badge className="mb-4 rounded-full bg-primary-foreground/10 px-4 py-2 text-primary-foreground">
      Trusted by NYC's Top Cafes
    </Badge>
    
    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
      Run Your Cafe <br />
      <span className="text-primary-foreground/90">Smarter & Safer</span>
    </h1>
    
    <p className="text-xl leading-relaxed text-primary-foreground/80">
      The all-in-one platform for NYC cafe owners. Manage permits, 
      monitor food safety, and stay ahead of local events.
    </p>

    <div className="flex flex-col gap-4 sm:flex-row">
      <Link to="/dashboard">
        <Button size="lg" variant="secondary" className="w-full font-semibold sm:w-auto">
          Get Started Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>

    <HeroFeatures features={heroFeatures} />
  </div>
);

const HeroFeatures = ({ features }: { features: HeroFeature[] }) => (
  <div className="grid grid-cols-2 gap-6 border-t border-primary-foreground/10 pt-8 sm:grid-cols-3">
    {features.map((feature, index) => (
      <div key={index}>
        <div className="flex items-center gap-2 text-primary-foreground/90">
          <feature.icon className="h-5 w-5" />
          <span className="text-sm font-medium">{feature.label}</span>
        </div>
      </div>
    ))}
  </div>
);

const HeroImage = () => (
  <div className="hidden md:block">
    <div className="relative">
      <div className="rounded-lg bg-primary-foreground/10 p-8">
        <div className="aspect-[4/3] rounded-lg bg-primary-foreground/5" />
      </div>
    </div>
  </div>
);

export default HeroSection;