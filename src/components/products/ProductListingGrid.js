'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';
import Button from '@/components/ui/Button';

const dummyProducts = [
  { id: 1, name: 'High-Waist Trousers', category: 'trousers', price: 1299, image: '/images/1.jpg', rank: 1, store: 'Zara', rating: 4.5, likes: 120, comments: 10, deliveryTime: '30 min', tags: ['Formal', 'Workwear'] },
  { id: 2, name: 'Summer Linen Shirt', category: 'summer-shirts', price: 999, image: '/images/2.jpg', rank: 2, store: 'H&M', rating: 4.6, likes: 98, comments: 8, deliveryTime: '20 min', tags: ['Casual', 'Summer'] },
  { id: 3, name: 'Classic Jeans', category: 'jeans', price: 1599, image: '/images/3.jpg', rank: 3, store: 'Levi\'s', rating: 4.8, likes: 150, comments: 15, deliveryTime: '35 min', tags: ['Denim', 'Classic'] },
  { id: 4, name: 'Check Shirt', category: 'check-shirts', price: 1199, image: '/images/4.jpg', rank: 4, store: 'Zara', rating: 4.7, likes: 110, comments: 12, deliveryTime: '25 min', tags: ['Casual', 'Check'] },
  { id: 5, name: 'Basic T-Shirt', category: 'tshirts', price: 799, image: '/images/5.jpg', rank: 5, store: 'Uniqlo', rating: 4.3, likes: 80, comments: 5, deliveryTime: '20 min', tags: ['Casual', 'Everyday'] },
];

export default function ProductListingGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const brand = searchParams.get('brand');

    useEffect(() => {
    let filtered = dummyProducts;

    if (category && category !== 'all') {
        filtered = filtered.filter((p) => p.category === category);
    }

    if (brand) {
        filtered = filtered.filter((p) => p.store.toLowerCase() === brand.toLowerCase());
    }

    setFilteredProducts(filtered);
    }, [category, brand]);


  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + 4, filteredProducts.length));
      setIsLoading(false);
    }, 800);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, visibleItems).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <div className="col-span-4 text-center text-text-secondary">No products found.</div>
        )}
      </div>

      {visibleItems < filteredProducts.length && (
        <div className="mt-8 text-center">
          <Button variant="glass" size="lg" className="px-8" onClick={loadMore} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  );
}
