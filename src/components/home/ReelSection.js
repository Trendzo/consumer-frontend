'use client';

import { useRef } from 'react';
import Card from '@/components/ui/Card';

const ReelSection = () => {
  const scrollRef = useRef(null);
  
  // Mock data with videos instead of images
  const reels = [
    {
      id: 1,
      title: 'Summer essentials you need',
      videoUrl: '/videos/3.mp4',
      likes: 423,
      user: { name: 'FashionDaily', avatar: '/images/demo-products/avatar-1.jpg' }
    },
    {
      id: 2,
      title: 'Street style lookbook 2025',
      videoUrl: '/videos/6.mp4',
      likes: 892,
      user: { name: 'StyleCraze', avatar: '/images/demo-products/avatar-2.jpg' }
    },
    {
      id: 3,
      title: 'Office wear inspiration',
      videoUrl: '/videos/7.mp4',
      likes: 512,
      user: { name: 'WorkChic', avatar: '/images/demo-products/avatar-3.jpg' }
    },
    {
      id: 4,
      title: 'Weekend casual outfits',
      videoUrl: '/videos/8.mp4',
      likes: 743,
      user: { name: 'TrendHunter', avatar: '/images/demo-products/avatar-4.jpg' }
    },
    {
      id: 5,
      title: 'Accessorize like a pro',
      videoUrl: '/videos/9.mp4',
      likes: 651,
      user: { name: 'GlamGuide', avatar: '/images/demo-products/avatar-5.jpg' }
    }
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative">
      <div 
        className="flex items-stretch gap-4 overflow-x-auto py-2 scrollbar-none"
        ref={scrollRef}
      >
        {reels.map((reel) => (
          <div key={reel.id} className="w-40 flex-shrink-0">
            <Card variant="glass" hover className="h-64">
              <div className="relative h-full w-full overflow-hidden">
                {/* Video element instead of background image */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* User avatar */}
                <div className="absolute top-3 left-3 flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                      {reel.user.name.charAt(0)}
                    </div>
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-medium text-sm line-clamp-2 mb-1">
                    {reel.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {reel.user.name}
                    </span>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-xs text-gray-400 ml-1">
                        {reel.likes}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Volume indicator */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
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
  );
};

export default ReelSection;