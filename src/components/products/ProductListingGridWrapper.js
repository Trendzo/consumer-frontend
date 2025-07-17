// components/products/ProductListingGridWrapper.jsx
'use client';

import { Suspense } from 'react';
import ProductListingGrid from './ProductListingGrid';

export default function ProductListingGridWrapper() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductListingGrid />
    </Suspense>
  );
}
