'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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

export default function ProductListingCategories() {
  const scrollRef = useRef(null);
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

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
        {categories.map((category) => (
          <Link href={`/products${category.id !== 'all' ? `?category=${category.id}` : ''}`} key={category.id}>
            <div
              className={`glass rounded-xl py-3 px-4 min-w-32 flex-shrink-0 transition-transform hover:-translate-y-1 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500/20 to-cyan-400/20 border-purple-500/30'
                  : ''
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <span className={`font-bold ${activeCategory === category.id ? 'text-purple-500' : ''}`}>
                  {category.name}
                </span>
                {category.count && (
                  <span className="text-xs text-text-secondary mt-1">
                    {category.count} items
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10 opacity-80 hover:opacity-100"
        onClick={() => scroll('left')}
      >
        {/* Left Arrow SVG */}
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10 opacity-80 hover:opacity-100"
        onClick={() => scroll('right')}
      >
        {/* Right Arrow SVG */}
      </button>
    </div>
  );
}
