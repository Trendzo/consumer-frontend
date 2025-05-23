'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '@/components/ui/Badge';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    'Summer dress', 'Nike sneakers', 'Denim jacket', 'Linen shirts'
  ]);
  const searchInputRef = useRef(null);
  const searchContentRef = useRef(null);
  
  // Categories for quick search
  const searchCategories = [
    { id: 'women', name: 'Women', icon: '👗' },
    { id: 'men', name: 'Men', icon: '👔' },
    { id: 'kids', name: 'Kids', icon: '🧸' },
    { id: 'shoes', name: 'Shoes', icon: '👟' },
    { id: 'accessories', name: 'Accessories', icon: '👜' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
  ];
  
  // Popular search terms
  const popularSearches = [
    'Floral dresses', 'Cargo pants', 'Linen shirts', 'Summer collection',
    'Nike Air Max', 'Adidas Originals', 'Oversized t-shirts', 'Maxi skirts'
  ];
  
  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);
  
  // Handle clicks outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContentRef.current && !searchContentRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);
  
  // Handle search input
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 0) {
      // Show loading state
      setIsSearching(true);
      
      // Simulate search results after delay
      setTimeout(() => {
        // Mock search results based on query
        const results = [
          { id: 1, type: 'product', name: `${value} T-shirt`, store: 'Zara', price: 1299 },
          { id: 2, type: 'product', name: `${value} Jeans`, store: 'H&M', price: 2499 },
          { id: 3, type: 'store', name: value, deliveryTime: '30 min' },
          { id: 4, type: 'category', name: value }
        ];
        
        setSearchResults(results);
        setIsSearching(false);
      }, 600);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };
  
  // Add to recent searches
  const addToRecentSearches = (term) => {
    if (!recentSearches.includes(term)) {
      setRecentSearches(prev => [term, ...prev.slice(0, 4)]);
    }
  };
  
  // Format price with currency
  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };
  
  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      addToRecentSearches(searchQuery);
      // Handle search submission - in a real app would navigate to results page
      console.log(`Searching for: ${searchQuery}`);
    }
  };
  
  // Use term for search
  const useSearchTerm = (term) => {
    setSearchQuery(term);
    addToRecentSearches(term);
    
    // Trigger search with the selected term
    setIsSearching(true);
    
    setTimeout(() => {
      // Mock search results based on term
      const results = [
        { id: 1, type: 'product', name: `${term} T-shirt`, store: 'Zara', price: 1299 },
        { id: 2, type: 'product', name: `${term} Jeans`, store: 'H&M', price: 2499 },
        { id: 3, type: 'store', name: term, deliveryTime: '30 min' },
        { id: 4, type: 'category', name: term }
      ];
      
      setSearchResults(results);
      setIsSearching(false);
    }, 600);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      style={{ backgroundColor: 'rgba(15, 15, 26, 0.7)' }}
    >
      <motion.div
        ref={searchContentRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 500 }}
        className="w-full max-w-2xl glass rounded-xl shadow-2xl overflow-hidden border border-white/10"
      >
        {/* Search input */}
        <div className="px-4 py-3 border-b border-white/10">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={handleSearchInput}
              placeholder="Search for products, brands, stores..."
              className="w-full bg-transparent text-lg focus:outline-none pl-7"
              autoComplete="off"
            />
            
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
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
            </div>
            
            {searchQuery && (
              <button 
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                onClick={clearSearch}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </form>
          
          {/* Loading shimmer */}
          {isSearching && (
            <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 animate-shimmer"></div>
            </div>
          )}
        </div>
        
        {/* Search content */}
        <div className="max-h-[70vh] overflow-y-auto">
          {/* Search results */}
          {searchQuery && searchResults.length > 0 ? (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-text-secondary mb-2">
                {isSearching ? 'Searching...' : 'Search Results'}
              </h3>
              
              <div className="divide-y divide-white/5">
                {searchResults.map(result => (
                  <div 
                    key={result.id}
                    className="py-3 transition-all hover:glass hover:-translate-y-1 px-2 rounded-lg cursor-pointer"
                  >
                    {result.type === 'product' && (
                      <div className="flex items-center">
                        <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mr-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-cyan-400/30"></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{result.name}</div>
                          <div className="flex justify-between text-sm text-text-secondary">
                            <span>{result.store}</span>
                            <span className="font-semibold text-purple-500">{formatPrice(result.price)}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {result.type === 'store' && (
                      <div className="flex items-center">
                        <div className="w-12 h-12 glass rounded-full flex items-center justify-center mr-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/30 to-blue-400/30 flex items-center justify-center font-bold text-white">
                            {result.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{result.name}</div>
                          <div className="text-sm text-text-secondary">
                            Store • {result.deliveryTime}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {result.type === 'category' && (
                      <div className="flex items-center">
                        <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{result.name}</div>
                          <div className="text-sm text-text-secondary">
                            Category
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4">
              {/* Recent searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text-secondary mb-2">
                    Recent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, index) => (
                      <div 
                        key={index}
                        className="glass py-1.5 px-3 rounded-full text-sm cursor-pointer hover:bg-purple-500/10 transition-all"
                        onClick={() => useSearchTerm(term)}
                      >
                        {term}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quick categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-text-secondary mb-2">
                  Shop by Category
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {searchCategories.map(category => (
                    <div 
                      key={category.id}
                      className="glass py-3 px-2 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-all"
                      onClick={() => useSearchTerm(category.name)}
                    >
                      <div className="text-2xl mb-1">{category.icon}</div>
                      <div className="text-xs">{category.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular searches */}
              <div>
                <h3 className="text-sm font-semibold text-text-secondary mb-2">
                  Popular Searches
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {popularSearches.map((term, index) => (
                    <div 
                      key={index}
                      className="glass p-2 rounded-lg flex items-center cursor-pointer hover:-translate-y-1 transition-all"
                      onClick={() => useSearchTerm(term)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{term}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchOverlay;