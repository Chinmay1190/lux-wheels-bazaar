
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  ShoppingCart, 
  Package, 
  CheckCircle, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  IndianRupee,
  Truck,
  Shield,
  Clock,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components/ProductCard';
import { getProductById, formatCurrency, calculateDiscountedPrice, getProductsByType } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { NotFound } from './NotFound';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart, isInCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!product) {
    return <NotFound />;
  }
  
  const similarProducts = getProductsByType(product.type)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const isDiscounted = !!product.discount;
  const discountedPrice = isDiscounted 
    ? calculateDiscountedPrice(product.price, product.discount) 
    : product.price;
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
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
                <Link 
                  to={`/${product.category === 'bike' ? 'bikes' : `cars/${product.type}`}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {product.category === 'bike' 
                    ? 'Superbikes' 
                    : product.type === 'luxury' ? 'Luxury Cars' : 'Sports Cars'
                  }
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-sm font-medium text-foreground truncate max-w-[150px] md:max-w-xs">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
            <img 
              src={product.images[currentImageIndex] || '/placeholder.svg'} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            
            {/* Navigation arrows */}
            {product.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full"
                  onClick={() => setCurrentImageIndex(prevIndex => 
                    prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
                  )}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
                  onClick={() => setCurrentImageIndex(prevIndex => 
                    prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
                  )}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
            
            {/* Discount badge */}
            {isDiscounted && (
              <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
          
          {/* Thumbnail images */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                    currentImageIndex === index ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image || '/placeholder.svg'} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-muted-foreground">{product.brand}</p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) 
                      ? 'fill-yellow-500 text-yellow-500' 
                      : i < product.rating 
                        ? 'fill-yellow-500/50 text-yellow-500' 
                        : 'fill-muted-foreground/20 text-muted-foreground/20'
                  }`} 
                />
              ))}
            </div>
            <span className="font-medium">{product.rating.toFixed(1)}</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center mb-6">
            <IndianRupee className="h-6 w-6 mr-1" />
            <div className="flex items-baseline">
              {isDiscounted ? (
                <>
                  <span className="text-3xl font-bold">
                    {formatCurrency(discountedPrice)}
                  </span>
                  <span className="ml-3 text-lg line-through text-muted-foreground">
                    {formatCurrency(product.price)}
                  </span>
                  <span className="ml-3 text-sm text-primary font-medium">
                    {product.discount}% off
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>
          </div>
          
          {/* Stock Status */}
          <div className="mb-6">
            {product.stock > 5 ? (
              <div className="flex items-center text-green-600 dark:text-green-500">
                <CheckCircle className="h-5 w-5 mr-1" />
                <span>In Stock</span>
              </div>
            ) : product.stock > 0 ? (
              <div className="flex items-center text-amber-600 dark:text-amber-500">
                <Clock className="h-5 w-5 mr-1" />
                <span>Only {product.stock} left</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600 dark:text-red-500">
                <span>Out of Stock</span>
              </div>
            )}
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1 || product.stock === 0}
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= product.stock || product.stock === 0}
              >
                +
              </Button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex space-x-4 mb-8">
            <Button 
              className="flex-1"
              onClick={handleAddToCart}
              disabled={isInCart(product.id) || product.stock === 0}
            >
              {isInCart(product.id) ? (
                'Added to Cart'
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </>
              )}
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Short Description */}
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">2 Years Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Premium Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Same Day Dispatch</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="specifications">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="details">Additional Details</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.engine && (
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Engine</span>
                  <span>{product.specifications.engine}</span>
                </div>
              )}
              {product.specifications.power && (
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Power</span>
                  <span>{product.specifications.power}</span>
                </div>
              )}
              {product.specifications.torque && (
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Torque</span>
                  <span>{product.specifications.torque}</span>
                </div>
              )}
              {product.specifications.transmission && (
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Transmission</span>
                  <span>{product.specifications.transmission}</span>
                </div>
              )}
              {product.specifications.acceleration && (
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Acceleration</span>
                  <span>{product.specifications.acceleration}</span>
                </div>
              )}
              {product.specifications.topSpeed && (
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Top Speed</span>
                  <span>{product.specifications.topSpeed}</span>
                </div>
              )}
              {product.specifications.fuelConsumption && (
                <div className="flex justify-between border-b py-2">
                  <span className="font-medium">Fuel Consumption</span>
                  <span>{product.specifications.fuelConsumption}</span>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="features" className="p-4 border rounded-md mt-2">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="details" className="p-4 border rounded-md mt-2">
            <h3 className="text-xl font-bold mb-4">Additional Information</h3>
            <div className="space-y-4">
              <p>
                Experience the pinnacle of {product.type === 'luxury' ? 'luxury' : 'performance'} with the {product.brand} {product.name}.
                Each {product.category} is meticulously crafted to deliver an exceptional driving experience.
              </p>
              <p>
                Backed by our comprehensive warranty, this {product.category === 'car' ? 'vehicle' : 'motorcycle'} comes with full 
                documentation, service history, and dedicated customer support.
              </p>
              <p>
                We offer competitive financing options, trade-in opportunities, and exclusive ownership benefits. Contact our sales team for more information.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* FAQ */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the warranty coverage?</AccordionTrigger>
            <AccordionContent>
              All our vehicles come with a standard 2-year manufacturer warranty covering mechanical and electrical components.
              Extended warranty options are available for purchase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you offer financing options?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer flexible financing solutions with competitive interest rates through our banking partners.
              Our finance team can help structure a payment plan that suits your budget.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is the delivery process?</AccordionTrigger>
            <AccordionContent>
              Upon purchase, we handle all documentation and registration processes. Delivery can be arranged to your location,
              or you can collect from our showroom where our team will provide a comprehensive orientation of your new vehicle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are service packages available?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer comprehensive service packages that cover regular maintenance for up to 5 years.
              These packages can be customized based on your usage requirements and preferences.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      {/* Similar Products */}
      <div>
        <h3 className="text-2xl font-bold mb-6">You May Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
