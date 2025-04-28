
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  ChevronLeft, 
  IndianRupee,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { getProductsByType } from '@/lib/data';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getCartCount, 
    getOrderSummary 
  } = useCart();
  const navigate = useNavigate();
  
  // Get recommended products
  const recommendedProducts = getProductsByType('luxury')
    .filter(product => !cartItems.some(item => item.product.id === product.id))
    .slice(0, 4);
  
  // Order summary
  const orderSummary = getOrderSummary();
  
  // Handle checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 mt-8">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any vehicles to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link to="/">Continue Shopping</Link>
          </Button>
          
          {/* Recommended Products */}
          {recommendedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold mb-6">Recommended For You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recommendedProducts.slice(0, 2).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-sm font-medium">Cart</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Page Title */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
        <span className="text-muted-foreground">
          {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map(item => (
            <Card key={item.product.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3">
                  <img 
                    src={item.product.images[0] || '/placeholder.svg'} 
                    alt={item.product.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex justify-between">
                    <div>
                      <Link to={`/product/${item.product.id}`} className="font-bold hover:text-primary">
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span className="font-bold">
                        {formatCurrency(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {/* Actions */}
          <div className="flex justify-between items-center mt-6">
            <Button variant="outline" asChild>
              <Link to="/">
                <ChevronLeft className="h-4 w-4 mr-2" /> Continue Shopping
              </Link>
            </Button>
            <Button variant="ghost" className="text-red-500 hover:text-red-700" onClick={clearCart}>
              <Trash2 className="h-4 w-4 mr-2" /> Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(orderSummary.subtotal)}</span>
                </div>
                
                {orderSummary.discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="text-green-600 dark:text-green-400">
                      -{formatCurrency(orderSummary.discount)}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span>{formatCurrency(orderSummary.tax)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {orderSummary.shipping > 0 
                      ? formatCurrency(orderSummary.shipping) 
                      : "Free"}
                  </span>
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>{formatCurrency(orderSummary.total)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleCheckout}>
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Shipping Note */}
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="flex items-start space-x-2 text-sm">
              <ShoppingBag className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Free shipping on orders above ₹5,00,000. Standard delivery 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
