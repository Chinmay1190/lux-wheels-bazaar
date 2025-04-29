
import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
  resetFilters: () => void;
}

export function ProductGrid({ products, resetFilters }: ProductGridProps) {
  if (products.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
  
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold mb-2">No products found</h2>
      <p className="text-muted-foreground mb-6">
        Try adjusting your search or filter criteria
      </p>
      <Button onClick={resetFilters}>Reset Filters</Button>
    </div>
  );
}
