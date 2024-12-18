import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
}

const PricingCard = ({ name, price, period, description, features }: PricingCardProps) => {
  return (
    <Card className="border-2">
      <CardHeader>
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-full">
          {price === "Custom" ? "Contact Sales" : "Get Started"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;