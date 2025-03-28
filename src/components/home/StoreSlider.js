'use client';

import { useRef } from 'react';
import Card from '@/components/ui/Card';

const StoreSlider = () => {
  const scrollRef = useRef(null);
  
  const stores = [
    { id: 1, name: 'Zara', deliveryTime: '25 min', logo: '/images/store-logos/zara.svg' },
    { id: 2, name: 'H&M', deliveryTime: '30 min', logo: '/images/store-logos/hm.svg' },
    { id: 3, name: 'Mango', deliveryTime: '45 min', logo: '/images/store-logos/mango.svg' },
    { id: 4, name: 'Uniqlo', deliveryTime: '40 min', logo: '/images/store-logos/uniqlo.svg' },
    { id: 5, name: 'Nike', deliveryTime: '35 min', logo: '/images/store-logos/nike.svg' },
    { id: 6, name: 'Adidas', deliveryTime: '35 min', logo: '/images/store-logos/adidas.svg' },
    { id: 7, name: 'Levi\'s', deliveryTime: '30 min', logo: '/images/store-logos/levis.svg' },
    { id: 8, name: 'FabIndia', deliveryTime: '50 min', logo: '/images/store-logos/fabindia.svg' },
  ];
  
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
        className="flex items-center overflow-x-auto py-2 scrollbar-none" 
        ref={scrollRef}
      >
        {stores.map((store) => (
          <div key={store.id} className="px-2 w-40 flex-shrink-0">
            <Card variant="neomorph" hover className="p-4 h-36 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full neomorph flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {/* Would use actual logos in production */}
                  <span className="text-lg font-bold">{store.name.charAt(0)}</span>
                </div>
              </div>
              <h3 className="font-medium text-center">{store.name}</h3>
              <p className="text-xs text-text-secondary">{store.deliveryTime}</p>
            </Card>
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

export default StoreSlider;