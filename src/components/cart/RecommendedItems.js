'use client';

import { useRef } from 'react';
import ProductCard from '@/components/home/ProductCard';

const RecommendedItems = () => {
  const scrollRef = useRef(null);
  
  // Mock recommended products data
  const products = [
    {
      id: 1,
      name: 'Tie-Dye Sweatshirt',
      price: 1899,
      store: 'Zara',
      deliveryTime: '25 min',
      rating: 4.5,
      isNew: true,
      images: [
        '/api/placeholder/400/320',
        '/api/placeholder/400/320',
      ],
    },
    {
      id: 2,
      name: 'Leather Cross-body Bag',
      price: 2499,
      originalPrice: 3499,
      store: 'Mango',
      deliveryTime: '45 min',
      rating: 4.8,
      isNew: false,
      images: [
        '/api/placeholder/400/320',
        '/api/placeholder/400/320',
      ],
    },
    {
      id: 3,
      name: 'Wide Leg Trousers',
      price: 2799,
      store: 'Uniqlo',
      deliveryTime: '40 min',
      rating: 4.6,
      isNew: false,
      images: [
        '/api/placeholder/400/320',
        '/api/placeholder/400/320',
      ],
    },
    {
      id: 4,
      name: 'Canvas Slip-on Shoes',
      price: 3999,
      store: 'Vans',
      deliveryTime: '35 min',
      rating: 4.7,
      isNew: true,
      images: [
        '/api/placeholder/400/320',
        '/api/placeholder/400/320',
      ],
    },
    {
      id: 5,
      name: 'Printed Kimono',
      price: 1899,
      originalPrice: 2499,
      store: 'FabIndia',
      deliveryTime: '50 min',
      rating: 4.4,
      isNew: false,
      images: [
        '/api/placeholder/400/320',
        '/api/placeholder/400/320',
      ],
    },
  ];
  
  // Handle horizontal scrolling with buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative">
      <div 
        className="flex items-stretch gap-4 overflow-x-auto py-2 scrollbar-none" 
        ref={scrollRef}
      >
        {products.map((product) => (
          <div key={product.id} className="w-64 flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 neomorph rounded-full flex items-center justify-center z-10"
        onClick={() => scroll('left')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 neomorph rounded-full flex items-center justify-center z-10"
        onClick={() => scroll('right')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default RecommendedItems;