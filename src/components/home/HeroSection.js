'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('trendzo');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const tabs = [
    { id: 'trendzo', label: 'TRENDZO' },
    { id: 'local', label: 'LOCAL' },
    { id: 'all', label: 'ALL BRANDS' }
  ];
  
  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="relative -mt-6 overflow-hidden">
      {/* Creative animated background */}
      <div className="glass rounded-2xl overflow-hidden mt-12">
        <div className="relative h-[75vh] min-h-[560px]">
          {/* Dynamic background with animated shapes and gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-950">
            {/* Animated shape 1 - Large circle with glow */}
            <div 
              className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-pink-500 to-indigo-500 blur-3xl opacity-20 animate-pulse"
              style={{ 
                left: `calc(20% + ${mousePosition.x * 40}px)`, 
                top: `calc(30% + ${mousePosition.y * 40}px)` 
              }}
            ></div>
            
            {/* Animated shape 2 - Smaller circle with different color */}
            <div 
              className="absolute rounded-full w-64 h-64 bg-gradient-to-r from-blue-400 to-teal-400 blur-3xl opacity-20 animate-pulse"
              style={{ 
                right: `calc(25% + ${mousePosition.x * -30}px)`, 
                bottom: `calc(20% + ${mousePosition.y * -30}px)`,
                animationDelay: '0.5s' 
              }}
            ></div>
            
            {/* Animated shape 3 - Ellipse with different color */}
            <div 
              className="absolute rounded-full w-80 h-80 bg-gradient-to-r from-amber-400 to-rose-400 blur-3xl opacity-20 animate-pulse"
              style={{ 
                left: `calc(60% + ${mousePosition.x * 20}px)`, 
                top: `calc(60% + ${mousePosition.y * 20}px)`,
                animationDelay: '1s' 
              }}
            ></div>
            
            {/* Fashion-themed pattern overlay */}
            <div className="absolute inset-0 opacity-10" 
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '30px 30px'
              }}
            ></div>
            
            {/* Light streaks effect */}
            <div className="absolute inset-0">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-30 top-1/4 left-0 blur-sm"></div>
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent transform rotate-12 top-2/3 left-0 blur-sm"></div>
              <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform left-1/4 top-0 blur-sm"></div>
            </div>
          </div>
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent mix-blend-overlay"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 pt-24">
            {/* Decorative elements */}
            <div className="absolute w-48 h-48 border border-white/10 rounded-full top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-64 h-64 border border-white/10 rounded-full bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>
            
            {/* Floating fashion elements - would be actual SVGs in production */}
            <div className="absolute top-20 left-20 text-white/20 text-4xl font-thin transform rotate-12">
              ✦
            </div>
            <div className="absolute bottom-32 right-24 text-white/20 text-5xl font-thin transform -rotate-6">
              ✧
            </div>
            
            <h3 className="text-lg font-medium text-white mb-2">
              ONLINE EXCLUSIVE
            </h3>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
              MID-SEASON OFFERS<br/>UP TO 30% OFF
            </h1>
            
            <div className="flex justify-center gap-4 mb-8">
              {/* FIXED BUTTON 1: Modified for better text visibility */}
              <button 
                className="bg-white hover:bg-white/90 text-gray-900 font-bold py-3 px-10 rounded-lg shadow-lg transition-all"
              >
                FOR HIM
              </button>
              
              {/* FIXED BUTTON 2: Modified for better text visibility */}
              <button 
                className="bg-white hover:bg-white/90 text-gray-900 font-bold py-3 px-10 rounded-lg shadow-lg transition-all"
              >
                FOR HER
              </button>
            </div>
            
            <p className="text-sm text-white/80">
              Valid until 13.04.2025
            </p>
          </div>
        </div>
      </div>
      
      {/* Tabs - styled to match the design in the image */}
      <div className="absolute top-2 left-0 w-full flex justify-center z-30">
        <div className="bg-gray-800/70 backdrop-blur-md rounded-full px-1 py-1 flex items-center mt-4 shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`font-medium text-sm px-5 py-2 rounded-full transition-all ${
                activeTab === tab.id
                ? 'bg-white text-gray-900'
                : 'bg-transparent text-white hover:text-white/80'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Stats counters */}
      <div className="flex items-center justify-between py-6 px-4 border-b border-white/10">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-display font-bold">100+</span>
          <span className="text-sm text-text-secondary">Local Stores</span>
        </div>
        
        <div className="w-px h-10 bg-white/10"></div>
        
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-display font-bold">10k+</span>
          <span className="text-sm text-text-secondary">Products</span>
        </div>
        
        <div className="w-px h-10 bg-white/10"></div>
        
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-display font-bold">60min</span>
          <span className="text-sm text-text-secondary">Delivery</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;