
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts, getProductsByType } from '@/lib/data';
import { ArrowRight, Car, ArrowDown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const luxuryCars = getProductsByType('luxury').slice(0, 4);
  const sportsCars = getProductsByType('sport').slice(0, 4);
  const superbikes = getProductsByType('superbike').slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/placeholder.svg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Experience Luxury <span className="text-primary">Performance</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Discover our exclusive collection of luxury cars, sport cars, and superbikes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg">
                <Link to="/cars/luxury">Explore Luxury Cars</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/bikes">Browse Superbikes</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Vehicles</h2>
            <Link to="/products" className="text-primary flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
          <Tabs defaultValue="luxury">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="luxury">Luxury Cars</TabsTrigger>
                <TabsTrigger value="sport">Sports Cars</TabsTrigger>
                <TabsTrigger value="bike">Superbikes</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="luxury">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {luxuryCars.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/cars/luxury">View All Luxury Cars</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="sport">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sportsCars.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/cars/sport">View All Sports Cars</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="bike">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {superbikes.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/bikes">View All Superbikes</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose LuxWheels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Selection</h3>
              <p className="text-muted-foreground">
                Carefully curated collection of the finest luxury vehicles and superbikes available in India.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Service</h3>
              <p className="text-muted-foreground">
                Our team of automotive experts ensures you get the perfect vehicle tailored to your preferences.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Support</h3>
              <p className="text-muted-foreground">
                Dedicated after-sales service and support to ensure your luxury vehicle ownership experience is seamless.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Extraordinary Driving Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Browse our collection and find your dream vehicle today. Our experts are ready to assist you.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/products">Explore All Vehicles</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
