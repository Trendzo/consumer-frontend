'use client';

import { useState } from 'react';
import TrendingItem from './TrendingItem';
import Button from '@/components/ui/Button';

const TrendingGrid = () => {
  const [visibleItems, setVisibleItems] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  
  // Function to load more items
  const loadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + 4, trendingItems.length));
      setIsLoading(false);
    }, 800);
  };
  
  // Mock data
  const trendingItems = [
    {
      id: 1,
      rank: 1,
      name: 'Oversized Cotton Tee',
      store: 'Zara',
      price: 1299,
      originalPrice: 1999,
      rating: 4.7,
      likes: 842,
      comments: 56,
      deliveryTime: '25 min',
      image: '/images/13.jpg',
      tags: ['OversizedTee', 'SummerOutfit'],
    },
    {
      id: 2,
      rank: 2,
      name: 'Cargo Pants - Olive Green',
      store: 'H&M',
      price: 2499,
      originalPrice: 3499,
      rating: 4.5,
      likes: 756,
      comments: 43,
      deliveryTime: '30 min',
      image: '/images/2.jpg',
      tags: ['CargoPants', 'StreetStyle'],
    },
    {
      id: 3,
      rank: 3,
      name: 'Chunky Platform Sneakers',
      store: 'Nike',
      price: 6999,
      rating: 4.8,
      likes: 689,
      comments: 38,
      deliveryTime: '35 min',
      image: '/images/14.jpg',
      tags: ['ChunkySneakers', 'Footwear'],
    },
    {
      id: 4,
      rank: 4,
      name: 'Floral Maxi Dress',
      store: 'Mango',
      price: 3599,
      originalPrice: 4999,
      rating: 4.6,
      likes: 623,
      comments: 41,
      deliveryTime: '45 min',
      image: '/images/4.jpg',
      tags: ['MaxiDress', 'FloralPrint'],
    },
    {
      id: 5,
      rank: 5,
      name: 'Linen Blend Shirt',
      store: 'Uniqlo',
      price: 1999,
      rating: 4.4,
      likes: 589,
      comments: 29,
      deliveryTime: '40 min',
      image: '/images/5.jpg',
      tags: ['LinenShirt', 'SummerOutfit'],
    },
    {
      id: 6,
      rank: 6,
      name: 'High-Waist Mom Jeans',
      store: 'Levi\'s',
      price: 3499,
      originalPrice: 4299,
      rating: 4.7,
      likes: 547,
      comments: 34,
      deliveryTime: '30 min',
      image: '/images/6.jpg',
      tags: ['MomJeans', 'DenimStyle'],
    },
    {
      id: 7,
      rank: 7,
      name: 'Bucket Hat',
      store: 'H&M',
      price: 899,
      originalPrice: 1299,
      rating: 4.3,
      likes: 498,
      comments: 22,
      deliveryTime: '30 min',
      image: '/images/7.jpg',
      tags: ['BucketHat', 'Accessories'],
    },
    {
      id: 8,
      rank: 8,
      name: 'Tie-Dye Sweatshirt',
      store: 'Zara',
      price: 1899,
      rating: 4.5,
      likes: 456,
      comments: 31,
      deliveryTime: '25 min',
      image: '/images/8.jpg',
      tags: ['TieDye', 'Sweatshirt'],
    },
    {
      id: 9,
      rank: 9,
      name: 'Leather Cross-body Bag',
      store: 'Mango',
      price: 2499,
      originalPrice: 3499,
      rating: 4.8,
      likes: 423,
      comments: 28,
      deliveryTime: '45 min',
      image: '/images/9.jpg',
      tags: ['CrossBodyBag', 'Accessories'],
    },
    {
      id: 10,
      rank: 10,
      name: 'Wide Leg Trousers',
      store: 'Uniqlo',
      price: 2799,
      rating: 4.6,
      likes: 402,
      comments: 25,
      deliveryTime: '40 min',
      image: '/images/10.jpg',
      tags: ['WideLeg', 'OfficeLook'],
    },
    {
      id: 11,
      rank: 11,
      name: 'Canvas Slip-on Shoes',
      store: 'Vans',
      price: 3999,
      rating: 4.7,
      likes: 387,
      comments: 19,
      deliveryTime: '35 min',
      image: '/images/11.jpg',
      tags: ['SlipOn', 'Footwear'],
    },
    {
      id: 12,
      rank: 12,
      name: 'Printed Kimono',
      store: 'FabIndia',
      price: 1899,
      originalPrice: 2499,
      rating: 4.4,
      likes: 362,
      comments: 21,
      deliveryTime: '50 min',
      image: '/images/12.jpg',
      tags: ['Kimono', 'Ethnic'],
    },
  ];
  
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trendingItems.slice(0, visibleItems).map((item) => (
          <TrendingItem key={item.id} item={item} />
        ))}
      </div>
      
      {visibleItems < trendingItems.length && (
        <div className="mt-8 text-center">
          <Button 
            variant="glass" 
            size="lg" 
            className="px-8"
            onClick={loadMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </div>
            ) : (
              'Load More'
            )}
          </Button>
        </div>
      )}
      
      {/* Floating action button to scroll to top */}
      <button 
        className="fixed bottom-20 right-4 w-12 h-12 glass rounded-full flex items-center justify-center z-10 animate-bounce"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default TrendingGrid;