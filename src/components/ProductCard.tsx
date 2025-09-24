import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const ProductCard = ({ title, price, description, features, isPopular }: ProductCardProps) => {
  return (
    <Card className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
      isPopular ? 'ring-2 ring-primary shadow-lg' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <div className="text-3xl font-bold text-primary mt-2">{price}</div>
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full mt-6 transition-all duration-300 ${
            isPopular 
              ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105' 
              : 'hover:bg-primary hover:shadow-md'
          }`}
        >
          Select
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;