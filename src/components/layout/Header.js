'use client';

import { useState, useEffect } from 'react';
import Badge from '@/components/ui/Badge';
import ThemeToggle from '@/components/ui/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
          <button className="relative neomorph p-2 rounded-full">
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
          
          <ThemeToggle />
          
          <button className="neomorph p-1 rounded-full">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center text-white font-medium">
              T
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;