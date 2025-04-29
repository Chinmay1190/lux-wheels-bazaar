
import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProductFilters } from '@/components/ProductFilters';
import { MobileFilters } from '@/components/MobileFilters';
import { ProductSort } from '@/components/ProductSort';
import { ProductGrid } from '@/components/ProductGrid';
import { 
  getProductsByCategory, 
  getProductsByType, 
  searchProducts, 
  filterProducts, 
  getBrands, 
  getPriceRange 
} from '@/lib/data';

const ProductListing = () => {
  const { type } = useParams();
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
    if (type === 'luxury') return 'Luxury Cars';
    if (type === 'sport') return 'Sports Cars';
    if (type === 'bikes') return 'Superbikes';
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
    } else if (type === 'luxury' || type === 'sport') {
      results = getProductsByType(type);
    } else if (type === 'bikes') {
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
  }, [query, type, selectedBrand, priceRange, inStockOnly, sortBy]);
  
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
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
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
        <MobileFilters 
          isOpen={isFilterSheetOpen}
          setIsOpen={setIsFilterSheetOpen}
          brands={brands}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
          resetFilters={resetFilters}
          activeFilterCount={getActiveFilterCount()}
        />
        
        {/* Desktop Filters */}
        <div className="hidden md:block">
          <ProductFilters 
            brands={brands}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            resetFilters={resetFilters}
            activeFilterCount={getActiveFilterCount()}
          />
        </div>
        
        {/* Sort Dropdown */}
        <ProductSort sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      
      {/* Product Grid */}
      <ProductGrid products={filteredProducts} resetFilters={resetFilters} />
    </div>
  );
};

export default ProductListing;
