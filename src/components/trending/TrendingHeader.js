'use client';

import { useState } from 'react';
import SearchBar from '@/components/ui/SearchBar';

const TrendingHeader = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'popular', label: 'Popular' },
    { id: 'recent', label: 'Recent' },
    { id: 'rising', label: 'Rising' }
  ];

  return (
    <div className="my-6">
      <h1 className="text-3xl font-display font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          #TrendingNow
        </span>
      </h1>
      
      <div className="mb-6">
        <SearchBar 
          className="w-full" 
          variant="glass"
          placeholder="Search trending items..."
        />
      </div>
      
      <div className="flex items-center overflow-x-auto scrollbar-none pb-2">
        <div className="glass rounded-full px-1 py-1 flex items-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                activeFilter === filter.id
                ? 'bg-white/90 text-gray-900 dark:text-gray-900'
                : 'hover:text-white/80'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <button className="ml-4 flex items-center glass rounded-full px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="text-sm">Filter</span>
        </button>
      </div>
      
      <div className="flex justify-between items-center mt-6 mb-2">
        <div className="text-text-secondary text-sm">
          Showing <span className="font-medium text-text-primary">852</span> trending items
        </div>
        
        <div className="flex items-center glass rounded-full px-3 py-1">
          <span className="text-sm mr-2">Sort by:</span>
          <select className="bg-transparent border-none text-sm focus:outline-none appearance-none pr-6 cursor-pointer">
            <option>Popularity</option>
            <option>Recent</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -ml-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrendingHeader;