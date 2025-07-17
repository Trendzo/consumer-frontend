'use client';

import GlassPanels from '@/components/layout/GlassPanels';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';

import ProductListingHeader from '@/components/products/ProductListingHeader';
import ProductListingCategories from '@/components/products/ProductListingCategories';
import ProductListingGrid from '@/components/products/ProductListingGrid';

export default function ProductsPage() {
  return (
    <>
      <GlassPanels />
      <Header />
      <Container className="pb-16">
        <ProductListingHeader />
        <ProductListingCategories />
        <ProductListingGrid />
      </Container>
    </>
  );
}
