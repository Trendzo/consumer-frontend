'use client';

import { useState, useEffect, useRef } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchContainerRef = useRef(null);
  const router = useRouter();
  
  // Popular searches to show as suggestions
  const popularSearches = [
    'Summer dresses', 'Sneakers', 'T-shirts', 'Jeans',
    'Accessories', 'Formal wear', 'Sportswear'
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Add click outside listener to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Prevent body scroll when search is open on mobile
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);
  
  // Toggle search visibility
  const toggleSearch = () => {
    // Scroll to top when opening search (this is the only new addition)
    if (!isSearchOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Small delay to ensure scrolling has started
      setTimeout(() => {
        setIsSearchOpen(true);
        // Reset search when opening
        setSearchQuery('');
        setIsSearching(false);
        setSearchSuggestions([]);
      }, 100);
    } else {
      setIsSearchOpen(false);
    }
  };
  
  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Show loading effect when typing
    if (value.length > 0) {
      setIsSearching(true);
      
      // Simulate search delay
      const timer = setTimeout(() => {
        // Generate search suggestions based on input
        const filteredSuggestions = popularSearches
          .filter(item => item.toLowerCase().includes(value.toLowerCase()))
          .slice(0, 5);
        
        // Add dynamic suggestions
        if (value.length >= 2) {
          filteredSuggestions.push(`${value} t-shirts`, `${value} shoes`);
        }
        
        setSearchSuggestions([...new Set(filteredSuggestions.slice(0, 5))]);
        setIsSearching(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
      setSearchSuggestions([]);
    }
  };
  
  // Clear search input
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    setSearchSuggestions([]);
  };
  
  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      // Navigate to search results page
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };
  
  // // Use suggested search term
  // const useSearchTerm = (term) => {
  //   setSearchQuery(term);
  //   router.push(`/search?q=${encodeURIComponent(term)}`);
  //   setIsSearchOpen(false);
  // };
  
  return (
    <header 
      className={`sticky top-0 z-50 py-4 transition-all duration-200 ${
        isScrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 text-2xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Trendzo
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search Icon Button */}
          <div ref={searchContainerRef} className="relative">
            <button 
              className="relative neomorph p-2 rounded-full hover:bg-white/5 transition-all"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
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
            </button>
            
            {/* Search overlay - fixed to the top of viewport */}
            {isSearchOpen && (
              <>
                {/* Mobile full screen overlay */}
                <div className="fixed inset-0 z-50 md:hidden bg-gray-950/90 backdrop-blur-md">
                  <div className="flex flex-col w-full h-full">
                    {/* Close button for mobile */}
                    <div className="flex justify-end p-4">
                      <button 
                        onClick={() => setIsSearchOpen(false)}
                        className="rounded-full p-2 glass hover:bg-white/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Mobile search content */}
                    <div className="flex-1 flex flex-col p-4 pt-0 overflow-auto">
                      <div className="glass rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <form onSubmit={handleSearchSubmit} className="relative">
                          <div className="relative flex items-center">
                            <div className="absolute left-4 text-text-secondary">
                              <svg
                                className={`h-5 w-5 ${isSearching ? 'text-purple-500 animate-pulse' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
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
                            </div>
                            
                            <input
                              type="text"
                              placeholder="Search for products, brands, stores..."
                              className="w-full bg-transparent border-none px-12 py-4 focus:outline-none focus:ring-0 text-lg placeholder-text-secondary/70"
                              value={searchQuery}
                              onChange={handleSearchChange}
                              autoFocus
                            />
                            
                            {searchQuery && (
                              <button
                                type="button"
                                className="absolute right-4 text-text-secondary hover:text-white"
                                onClick={clearSearch}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            )}
                            
                            {/* Loading shimmer effect */}
                            {isSearching && (
                              <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600" style={{ backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite linear' }}></div>
                              </div>
                            )}
                          </div>
                        </form>
                        
                        {/* Search suggestions */}
                        {searchSuggestions.length > 0 && !isSearching && (
                          <div className="max-h-96 overflow-y-auto border-t border-white/10">
                            {searchSuggestions.map((suggestion, index) => (
                              <div 
                                key={index}
                                className="px-4 py-3 hover:bg-white/5 cursor-pointer transition-all flex items-center"
                                // onClick={() => useSearchTerm(suggestion)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span>{suggestion}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Quick suggestions when no input yet */}
                        {!searchQuery && !isSearching && (
                          <div className="p-4 border-t border-white/10">
                            <div className="text-sm text-text-secondary mb-3">Popular Searches</div>
                            <div className="flex flex-wrap gap-2">
                              {popularSearches.map((term, index) => (
                                <div 
                                  key={index}
                                  className="glass px-3 py-1.5 rounded-full text-sm cursor-pointer hover:bg-purple-500/10 transition-all"
                                  // onClick={() => useSearchTerm(term)}
                                >
                                  {term}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop dropdown */}
                <div className="hidden md:block absolute right-0 top-full mt-2 w-96 z-50">
                  <div className="neomorph rounded-xl overflow-hidden border border-white/10 shadow-xl">
                    <form onSubmit={handleSearchSubmit} className="relative">
                      <div className="relative flex items-center">
                        <div className="absolute left-4 text-text-secondary">
                          <svg
                            className={`h-5 w-5 ${isSearching ? 'text-purple-500 animate-pulse' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
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
                        </div>
                        
                        <input
                          type="text"
                          placeholder="Search for products, brands, stores..."
                          className="w-full bg-transparent border-none px-12 py-3 focus:outline-none focus:ring-0 text-base placeholder-text-secondary/70"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          autoFocus
                        />
                        
                        {searchQuery && (
                          <button
                            type="button"
                            className="absolute right-4 text-text-secondary hover:text-white"
                            onClick={clearSearch}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                        
                        {/* Loading shimmer effect */}
                        {isSearching && (
                          <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600" style={{ backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite linear' }}></div>
                          </div>
                        )}
                      </div>
                    </form>
                    
                    {/* Search suggestions */}
                    {searchSuggestions.length > 0 && !isSearching && (
                      <div className="max-h-64 overflow-y-auto border-t border-white/10">
                        {searchSuggestions.map((suggestion, index) => (
                          <div 
                            key={index}
                            className="px-4 py-3 hover:bg-white/5 cursor-pointer transition-all flex items-center"
                            // onClick={() => useSearchTerm(suggestion)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Quick suggestions when no input yet */}
                    {!searchQuery && !isSearching && (
                      <div className="p-4 border-t border-white/10">
                        <div className="text-sm text-text-secondary mb-3">Popular Searches</div>
                        <div className="flex flex-wrap gap-2">
                          {popularSearches.slice(0, 4).map((term, index) => (
                            <div 
                              key={index}
                              className="glass px-3 py-1.5 rounded-full text-sm cursor-pointer hover:bg-purple-500/10 transition-all"
                              // onClick={() => useSearchTerm(term)}
                            >
                              {term}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          
          <ThemeToggle />
          
          {/* Profile button has been removed */}
        </div>
      </div>
    </header>
  );
};

export default Header;