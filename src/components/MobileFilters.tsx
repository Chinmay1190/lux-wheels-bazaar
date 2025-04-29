
import React from 'react';
import { Filter, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter, 
  SheetClose 
} from '@/components/ui/sheet';
import { formatCurrency } from '@/lib/data';

interface MobileFiltersProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  brands: string[];
  selectedBrand: string | undefined;
  setSelectedBrand: (brand: string | undefined) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
  resetFilters: () => void;
  activeFilterCount: number;
}

export function MobileFilters({
  isOpen,
  setIsOpen,
  brands,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
  inStockOnly,
  setInStockOnly,
  resetFilters,
  activeFilterCount
}: MobileFiltersProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" className="w-full">
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <Badge className="ml-2 bg-primary text-primary-foreground">{activeFilterCount}</Badge>
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
              <Button
                variant={!selectedBrand || selectedBrand === 'all' ? "default" : "outline"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setSelectedBrand(undefined)}
              >
                {(!selectedBrand || selectedBrand === 'all') && <Check className="h-4 w-4 mr-2" />}
                All Brands
              </Button>
              {brands.map(brand => (
                <Button
                  key={brand}
                  variant={selectedBrand === brand ? "default" : "outline"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setSelectedBrand(selectedBrand === brand ? undefined : brand)}
                >
                  {selectedBrand === brand && <Check className="h-4 w-4 mr-2" />}
                  {brand}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Price Range</h3>
            <div className="px-2">
              <Slider
                value={priceRange}
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
  );
}
