import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  rating?: number;
  inStock?: boolean;
}

const ProductCard = ({ id, name, price, image, badge, rating = 0, inStock = true }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          {badge && (
            <Badge className="absolute top-2 right-2 bg-[hsl(var(--badge-bg))] hover:bg-[hsl(var(--badge-bg))]/90">
              {badge}
            </Badge>
          )}
          {!inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-bold text-lg">OUT OF STOCK</span>
            </div>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 mb-2 hover:text-primary transition-colors min-h-[2.5rem]">
            {name}
          </h3>
        </Link>
        
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-primary">
            ${price.toFixed(2)}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          className="flex-1 bg-secondary hover:bg-secondary/90" 
          disabled={!inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
