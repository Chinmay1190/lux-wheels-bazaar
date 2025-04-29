
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatCurrency } from '@/lib/data';

interface ProductFiltersProps {
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

export function ProductFilters({
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
}: ProductFiltersProps) {
  return (
    <div className="flex items-center space-x-4">
      {/* Brand Dropdown */}
      <Select 
        value={selectedBrand || 'all'} 
        onValueChange={(value) => setSelectedBrand(value === 'all' ? undefined : value)}
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
        <Button variant="outline" className="w-[140px]">
          Price Range
        </Button>
        <div className="absolute z-10 hidden group-hover:block top-full left-0 mt-2 w-64 p-4 bg-background shadow-lg rounded-md border">
          <div className="space-y-4">
            <Slider
              defaultValue={priceRange}
              value={priceRange}
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
      {activeFilterCount > 0 && (
        <Button variant="ghost" onClick={resetFilters} size="sm">
          <X className="h-4 w-4 mr-1" /> Clear filters
        </Button>
      )}
    </div>
  );
}
