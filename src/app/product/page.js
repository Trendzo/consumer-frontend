'use client';

import GlassPanels from '@/components/layout/GlassPanels';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import ProductListingCategoriesWrapper from '@/components/products/ProductListingCategoriesWrapper';
import ProductListingHeader from '@/components/products/ProductListingHeader';
import ProductListingGridWrapper from '@/components/products/ProductListingGridWrapper';

export default function ProductsPage() {
  return (
    <>
      <GlassPanels />
      <Header />
      <Container className="pb-16">
        <ProductListingHeader />
        <ProductListingCategoriesWrapper />
        <ProductListingGridWrapper />
      </Container>
    </>
  );
}
