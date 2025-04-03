'use client';

import { useState, useRef, useEffect } from 'react';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('trendzo');
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);
  
  const tabs = [
    { id: 'trendzo', label: 'TRENDZO' },
    { id: 'local', label: 'LOCAL' },
    { id: 'all', label: 'ALL BRANDS' }
  ];
  
  // Mock video data
  const videos = [
    {
      id: 'video1',
      src: '/videos/fashion-1.mp4', // These would be your actual video paths
      poster: '/images/demo-products/trend-1.jpg', // Fallback image
    },
    {
      id: 'video2',
      src: '/videos/fashion-2.mp4',
      poster: '/images/demo-products/trend-2.jpg',
    },
    {
      id: 'video3',
      src: '/videos/fashion-3.mp4',
      poster: '/images/demo-products/trend-3.jpg',
    },
  ];
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds
    
    return () => clearInterval(interval);
  }, [videos.length]);
  
  return (
    <section className="relative -mt-6 overflow-hidden">
      {/* Video carousel - positioned to be overlapped by tabs */}
      <div className="glass rounded-2xl overflow-hidden mt-12">
        <div className="relative h-[75vh] min-h-[560px]">
          {/* Video overlay with dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10"></div>
          
          {/* Video element */}
          <div className="absolute inset-0">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentVideo === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.poster})` }}
                ></div>
                {/* We'd use actual videos here but will use images for this example */}
                {/* <video
                  ref={currentVideo === index ? videoRef : null}
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                ></video> */}
              </div>
            ))}
          </div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 pt-24">
            <h3 className="text-lg font-medium text-white mb-2">
              ONLINE EXCLUSIVE
            </h3>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
              MID-SEASON OFFERS<br/>UP TO 30% OFF
            </h1>
            
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                variant="glass" 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 border-0 font-bold py-3 px-10 rounded-lg"
              >
                FOR HIM
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0 font-bold py-3 px-10 rounded-lg"
              >
                FOR HER
              </Button>
            </div>
            
            <p className="text-sm text-white/80">
              Valid until 13.04.2025
            </p>
          </div>
          
          {/* Carousel indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentVideo === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
                onClick={() => setCurrentVideo(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Tabs - absolutely positioned to overlap the carousel */}
      <div className="absolute top-2 left-0 w-full flex justify-center z-30">
        <div className="glass rounded-full px-1 py-1 flex items-center mt-4 shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`font-display font-bold text-sm px-4 py-2 rounded-full transition-all ${
                activeTab === tab.id
                ? 'bg-white/90 text-gray-900 dark:text-gray-900'
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