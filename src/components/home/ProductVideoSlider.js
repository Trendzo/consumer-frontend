'use client';

import { useRef } from 'react';
import Card from '@/components/ui/Card';

const ProductVideoSlider = () => {
  const scrollRef = useRef(null);
  
  // Mock data for videos (removed posterUrl)
  const videos = [
    {
      id: 1,
      videoUrl: '/videos/1.mp4',
    },
    {
      id: 2,
      videoUrl: '/videos/2.mp4',
    },
    {
      id: 3,
      videoUrl: '/videos/3.mp4',
    },
    {
      id: 4,
      videoUrl: '/videos/4.mp4',
    },
    {
      id: 5,
      videoUrl: '/videos/5.mp4',
    }
  ];
  
  // Handle horizontal scrolling with buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -280 : 280;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="my-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-display font-bold">Fashion Reels</h2>
        <a href="/videos" className="text-primary text-sm font-medium">View All</a>
      </div>
      
      <div className="relative">
        <div 
          className="flex items-stretch gap-4 overflow-x-auto pb-2 scrollbar-none" 
          ref={scrollRef}
        >
          {videos.map((video) => (
            <div key={video.id} className="w-64 flex-shrink-0">
              <Card variant="glass" className="h-96 overflow-hidden">
                <div className="relative h-full w-full">
                  {/* Video element with immediate autoplay, no poster */}
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                  
                  {/* Mute indicator */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10"
          onClick={() => scroll('left')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10"
          onClick={() => scroll('right')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductVideoSlider;