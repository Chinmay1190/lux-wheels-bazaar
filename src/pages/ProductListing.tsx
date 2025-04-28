
import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { 
  Filter, 
  ChevronDown, 
  Search, 
  SlidersHorizontal,
  X,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ProductCard } from '@/components/ProductCard';
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter, 
  SheetClose 
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  getProductsByCategory, 
  getProductsByType, 
  searchProducts, 
  filterProducts, 
  getBrands, 
  getPriceRange, 
  formatCurrency 
} from '@/lib/data';

const ProductListing = () => {
  const { category, type } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const brands = getBrands();
  const { min: minPrice, max: maxPrice } = getPriceRange();
  
  // Filter states
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  
  // Get page title and initial products
  const getPageTitle = () => {
    if (query) return `Search Results: ${query}`;
    if (category === 'cars' && type === 'luxury') return 'Luxury Cars';
    if (category === 'cars' && type === 'sport') return 'Sports Cars';
    if (category === 'bikes') return 'Superbikes';
    return 'All Vehicles';
  };
  
  // Sort products
  const sortProducts = (products: any[]) => {
    switch (sortBy) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...products].sort((a, b) => Math.random() - 0.5); // Simulate newest
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      case 'featured':
      default:
        return products;
    }
  };
  
  // Apply filters
  useEffect(() => {
    let results;
    
    if (query) {
      results = searchProducts(query);
    } else if (category === 'cars' && type) {
      results = getProductsByType(type);
    } else if (category === 'bikes') {
      results = getProductsByCategory('bike');
    } else {
      results = [...getProductsByCategory('car'), ...getProductsByCategory('bike')];
    }
    
    // Apply filters
    results = filterProducts(
      undefined, // We already filtered by category/type
      undefined, // We already filtered by type
      selectedBrand === 'all' ? undefined : selectedBrand, // Use undefined for "all" brands
      priceRange[0],
      priceRange[1],
      inStockOnly
    );
    
    // Sort results
    results = sortProducts(results);
    
    setFilteredProducts(results);
  }, [query, category, type, selectedBrand, priceRange, inStockOnly, sortBy]);
  
  // Reset filters
  const resetFilters = () => {
    setSelectedBrand(undefined);
    setPriceRange([minPrice, maxPrice]);
    setInStockOnly(false);
    setSortBy('featured');
  };
  
  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (selectedBrand && selectedBrand !== 'all') count++;
    if (priceRange[0] > minPrice || priceRange[1] < maxPrice) count++;
    if (inStockOnly) count++;
    return count;
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
                <span className="text-sm font-medium">
                  {getPageTitle()}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Page Title */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{getPageTitle()}</h1>
        <div className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} results
        </div>
      </div>
      
      {/* Search query note */}
      {query && (
        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="px-3 py-1">
              <Search className="h-3 w-3 mr-1" />
              {query}
              <Link to="/products" className="ml-2">
                <X className="h-3 w-3" />
              </Link>
            </Badge>
          </div>
        </div>
      )}
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Mobile Filter Button */}
        <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {getActiveFilterCount() > 0 && (
                <Badge className="ml-2 bg-primary text-primary-foreground">{getActiveFilterCount()}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
            </SheetHeader>
            <div className="py-6 space-y-6">
              {/* Brands */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Brand</h3>
                <div className="grid grid-cols-2 gap-2">
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Button
                        variant={selectedBrand === brand ? "default" : "outline"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedBrand(selectedBrand === brand ? undefined : brand)}
                      >
                        {selectedBrand === brand && <Check className="h-4 w-4 mr-2" />}
                        {brand}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={priceRange}
                    min={minPrice}
                    max={maxPrice}
                    step={50000}
                    onValueChange={(value: number[]) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{formatCurrency(priceRange[0])}</span>
                    <span>{formatCurrency(priceRange[1])}</span>
                  </div>
                </div>
              </div>
              
              {/* Stock Toggle */}
              <div className="flex items-center space-x-2">
                <Switch 
                  id="stock-filter-mobile" 
                  checked={inStockOnly} 
                  onCheckedChange={setInStockOnly} 
                />
                <Label htmlFor="stock-filter-mobile">In stock only</Label>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" onClick={resetFilters}>Reset Filters</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button>Apply Filters</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        
        {/* Desktop Filters */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Brand Dropdown */}
          <Select 
            value={selectedBrand || ''} 
            onValueChange={(value) => setSelectedBrand(value || undefined)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map(brand => (
                <SelectItem key={brand} value={brand}>{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {/* Price Range */}
          <div className="relative group">
            <Button variant="outline" className="w-[120px]">
              Price Range <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <div className="absolute z-10 hidden group-hover:block top-full left-0 mt-2 w-64 p-4 bg-background shadow-lg rounded-md border">
              <div className="space-y-4">
                <Slider
                  defaultValue={priceRange}
                  min={minPrice}
                  max={maxPrice}
                  step={50000}
                  onValueChange={(value: number[]) => setPriceRange(value as [number, number])}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatCurrency(priceRange[0])}</span>
                  <span>{formatCurrency(priceRange[1])}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* In Stock Toggle */}
          <div className="flex items-center space-x-2">
            <Switch 
              id="stock-filter" 
              checked={inStockOnly} 
              onCheckedChange={setInStockOnly} 
            />
            <Label htmlFor="stock-filter">In stock only</Label>
          </div>
          
          {/* Reset Filters */}
          {getActiveFilterCount() > 0 && (
            <Button variant="ghost" onClick={resetFilters} size="sm">
              <X className="h-4 w-4 mr-1" /> Clear filters
            </Button>
          )}
        </div>
        
        {/* Sort Dropdown */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-2">No products found</h2>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
