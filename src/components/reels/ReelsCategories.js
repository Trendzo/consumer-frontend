'use client';

import { useState, useRef } from 'react';
import Card from '@/components/ui/Card';

const ReelsCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef(null);
  
  // Mock categories
  const categories = [
    { id: 'all', name: 'All', count: 265 },
    { id: 'trending', name: 'Trending', count: 124, isHot: true },
    { id: 'summer', name: 'Summer', count: 87 },
    { id: 'casual', name: 'Casual', count: 95 },
    { id: 'formal', name: 'Formal', count: 42 },
    { id: 'office', name: 'Office Wear', count: 55 },
    { id: 'party', name: 'Party', count: 63 },
    { id: 'beach', name: 'Beach Wear', count: 37 },
    { id: 'accessories', name: 'Accessories', count: 76 },
    { id: 'shoes', name: 'Shoes', count: 54 },
  ];
  
  // Handle scroll for categories
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative mb-6">
      <div 
        className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-1" 
        ref={scrollRef}
      >
        {categories.map((category) => (
          <div 
            key={category.id}
            className={`glass rounded-xl py-3 px-4 min-w-32 flex-shrink-0 transition-all cursor-pointer ${
              activeCategory === category.id 
                ? 'bg-gradient-to-r from-purple-500/20 to-cyan-400/20 border-purple-500/30 transform -translate-y-1' 
                : 'hover:-translate-y-1'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center">
                <span className={`font-bold ${activeCategory === category.id ? 'text-purple-500' : ''}`}>
                  {category.name}
                </span>
                {category.isHot && (
                  <div className="ml-1 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                )}
              </div>
              <span className="text-xs text-text-secondary mt-1">
                {category.count} reels
              </span>
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

export default ReelsCategories;