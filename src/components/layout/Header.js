'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/ui/SearchBar';
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
        
        <div className="flex-1 mx-4 max-w-md">
          <SearchBar variant="neomorph" />
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <button className="relative neomorph p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-pink-500 text-white text-xs rounded-full">3</div>
          </button>
          
          <button className="relative neomorph p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-purple-500 text-white text-xs rounded-full">2</div>
          </button>
          
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