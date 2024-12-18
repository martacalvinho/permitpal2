import PricingCard from "@/components/pricing/PricingCard";
import { pricingTiers } from "@/data/pricing";

const PricingSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-gray-600">
            Choose the plan that best fits your cafe's needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;