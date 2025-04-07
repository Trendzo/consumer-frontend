'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Handle tab click with navigation
  const handleTabClick = (tabId) => {
    if (activeTab === tabId) return; // Don't navigate if already on that tab
    
    setActiveTab(tabId);
    setIsNavigating(true);
    
    // Navigate based on tab id
    if (tabId === 'home') {
      router.push('/');
    } else if (tabId === 'trending') {
      router.push('/trending');
    } else if (tabId === 'reels') {
      router.push('/reels');
    } else if (tabId === 'cart') {
      router.push('/cart');
    } else if (tabId === 'profile') {
      router.push('/profile');
    }
    
    // Reset navigating state after a delay (can be replaced with router events in a complete solution)
    setTimeout(() => {
      setIsNavigating(false);
    }, 3000); // Set a reasonable timeout for navigation
  };
  
  const tabs = [
    { 
      id: 'home', 
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ) 
    },
    { 
      id: 'trending', 
      label: 'Trending',
      icon: (
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
        </div>
      ) 
    },
    { 
      id: 'reels', 
      label: 'Reels',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ) 
    },
    { 
      id: 'cart', 
      label: 'Cart',
      icon: (
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <div className="absolute -top-2 -right-2 text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      ) 
    },
    { 
      id: 'profile', 
      label: 'Profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ) 
    },
  ];
  
  return (
    <>
      {/* Global loading indicator - shows when navigating between pages */}
      {isNavigating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="glass p-6 rounded-2xl flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-purple-500 border-r-cyan-400 border-b-pink-500 border-l-indigo-500 animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                T
              </div>
            </div>
            <p className="text-white font-medium">Loading...</p>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 right-0 z-40">
        <div className="glass border-t border-white/10">
          {/* Indicator line for active tab - positioned above the navbar */}
          <div className="container mx-auto relative">
            <div 
              className="absolute h-1 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-200 rounded-b w-12" 
              style={{
                left: `calc(${(tabs.findIndex(tab => tab.id === activeTab) * 20) + 10}% - 24px)`,
                top: '-1px',
              }}
            />
          </div>
          
          <div className="container mx-auto">
            <div className="grid grid-cols-5 h-16">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`bottom-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                  disabled={isNavigating}
                >
                  <div className={`${activeTab === tab.id ? 'text-purple-500' : 'text-gray-400'}`}>
                    {tab.icon}
                  </div>
                  <span className={`text-xs mt-1 ${activeTab === tab.id ? 'text-purple-500 font-medium' : 'text-gray-400'}`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;