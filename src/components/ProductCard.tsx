
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star, ShoppingCart, IndianRupee } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatCurrency, calculateDiscountedPrice } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();
  const isDiscounted = !!product.discount;

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="product-card h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden">
        {/* Main product image */}
        <Link to={`/product/${product.id}`} className="block">
          <img 
            src={product.images[0] || '/placeholder.svg'} 
            alt={product.name} 
            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Discount badge if applicable */}
        {isDiscounted && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            {product.discount}% OFF
          </Badge>
        )}
        
        {/* Stock status badge */}
        {product.stock < 3 && product.stock > 0 && (
          <Badge className="absolute top-2 right-2 bg-amber-500 text-white">
            Only {product.stock} left
          </Badge>
        )}
        
        {product.stock === 0 && (
          <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
            Out of Stock
          </Badge>
        )}
        
        {/* Wishlist button */}
        <Button 
          variant="secondary" 
          size="icon" 
          className="absolute bottom-2 right-2 opacity-0 transition-opacity rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="flex-1 flex flex-col pt-4">
        {/* Category/type badge */}
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category === 'car' ? 
              (product.type === 'luxury' ? 'Luxury Car' : 'Sports Car') : 
              'Superbike'
            }
          </Badge>
        </div>
        
        {/* Product brand & name */}
        <Link to={`/product/${product.id}`} className="group">
          <h3 className="text-sm text-muted-foreground">{product.brand}</h3>
          <h2 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h2>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm">{product.rating.toFixed(1)}</span>
        </div>
        
        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-center mb-2">
            <IndianRupee className="h-4 w-4 mr-1" />
            {isDiscounted ? (
              <>
                <span className="font-bold text-lg">
                  {formatCurrency(calculateDiscountedPrice(product.price, product.discount))}
                </span>
                <span className="ml-2 text-sm line-through text-muted-foreground">
                  {formatCurrency(product.price)}
                </span>
              </>
            ) : (
              <span className="font-bold text-lg">{formatCurrency(product.price)}</span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        {product.stock > 0 ? (
          <Button 
            className="w-full transition-all"
            onClick={handleAddToCart}
            disabled={isInCart(product.id)}
          >
            {isInCart(product.id) ? (
              'Added to Cart'
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </>
            )}
          </Button>
        ) : (
          <Button className="w-full" variant="outline" disabled>
            Out of Stock
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
