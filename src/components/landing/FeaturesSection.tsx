import { features } from "@/data/features";
import FeatureCard from "@/components/features/FeatureCard";

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Why Choose Cafe Permit Pal?</h2>
          <p className="mt-4 text-gray-600">
            Everything you need to manage your cafe permits effectively
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;