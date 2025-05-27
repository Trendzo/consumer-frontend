'use client';

import { useState, useRef, useEffect } from 'react';

const SearchBar = ({ 
  className = '', 
  variant = 'glass', 
  onSearch = () => {},
  autoFocus = false,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);
  
  const variants = {
    glass: "glass",
    neomorph: isFocused ? "neomorph-inset" : "neomorph",
    flat: "bg-background-card",
  };
  
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    
    if (value.trim().length > 0) {
      // Show loading state
      setIsSearching(true);
      
      // Debounce search to avoid excessive API calls
      const timer = setTimeout(() => {
        onSearch(value);
        setIsSearching(false);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  };
  
  const clearSearch = () => {
    setSearchValue('');
    setIsSearching(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
    onSearch('');
  };
  
  return (
    <div className={`relative ${className}`}>
      <div className={`flex items-center ${variants[variant]} rounded-full pl-4 pr-2 py-2 `}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ${isSearching ? 'text-purple-500 animate-pulse' : 'text-text-secondary'}`}
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
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search for stores, products, brands..."
          className="bg-transparent border-none text-text-primary placeholder-text-secondary w-full ml-2 focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {isSearching && (
          <div className="mr-2 flex items-center">
            <div className="h-4 w-4 relative">
              <div className="absolute inset-0 rounded-full border-2 border-purple-500 border-t-transparent animate-spin"></div>
            </div>
          </div>
        )}
        
        {searchValue && (
          <button 
            className="p-1 rounded-full hover:bg-white/10"
            onClick={clearSearch}
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
      
      {/* Loading indicator shimmer effect */}
      {isSearching && (
        <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
          <div className="h-full w-[95%] mx-auto bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 animate-shimmer"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;