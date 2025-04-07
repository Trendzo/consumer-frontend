'use client';

import { useRef } from 'react';

const TrendingCategories = () => {
  const scrollRef = useRef(null);
  
  // Mock data
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'summer', name: 'Summer', count: '3.2k' },
    { id: 'casual', name: 'Casual', count: '2.8k' },
    { id: 'formal', name: 'Formal', count: '1.4k' },
    { id: 'sporty', name: 'Sporty', count: '2.0k' },
    { id: 'party', name: 'Party', count: '1.9k' },
    { id: 'ethnic', name: 'Ethnic', count: '1.2k' },
    { id: 'accessories', name: 'Accessories', count: '2.5k' },
    { id: 'footwear', name: 'Footwear', count: '1.8k' },
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative my-6">
      <div 
        className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-1" 
        ref={scrollRef}
      >
        {categories.map((category, index) => (
          <div 
            key={category.id}
            className={`glass rounded-xl py-3 px-4 min-w-32 flex-shrink-0 transition-transform hover:-translate-y-1 cursor-pointer ${
              index === 0 ? 'bg-gradient-to-r from-purple-500/20 to-cyan-400/20 border-purple-500/30' : ''
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <span className={`font-bold ${index === 0 ? 'text-purple-500' : ''}`}>
                {category.name}
              </span>
              {category.count && (
                <span className="text-xs text-text-secondary mt-1">
                  {category.count} items
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10 opacity-80 hover:opacity-100"
        onClick={() => scroll('left')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10 opacity-80 hover:opacity-100"
        onClick={() => scroll('right')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default TrendingCategories;