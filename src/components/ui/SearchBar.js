'use client';

import { useState } from 'react';

const SearchBar = ({ className = '', variant = 'glass', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const variants = {
    glass: "glass",
    neomorph: isFocused ? "neomorph-inset" : "neomorph",
    flat: "bg-background-card",
  };
  
  return (
    <div className={`relative ${className}`}>
      <div className={`flex items-center ${variants[variant]} rounded-full pl-4 pr-2 py-2`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-text-secondary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        <input
          type="text"
          placeholder="Search for stores, products, brands..."
          className="bg-transparent border-none text-text-primary placeholder-text-secondary w-full ml-2 focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {isFocused && (
          <button 
            className="p-1 rounded-full hover:bg-white/10"
            onClick={() => setIsFocused(false)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-text-secondary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;