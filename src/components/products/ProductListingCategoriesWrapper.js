// components/products/ProductListingCategoriesWrapper.js
'use client';

import { Suspense } from 'react';
import ProductListingCategories from './ProductListingCategories';

export default function ProductListingCategoriesWrapper() {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <ProductListingCategories />
    </Suspense>
  );
}
