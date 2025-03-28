'use client';

import { useRef } from 'react';
import Card from '@/components/ui/Card';

const ReelSection = () => {
  const scrollRef = useRef(null);
  
  // Mock data
  const reels = [
    {
      id: 1,
      title: 'Summer essentials you need',
      image: '/images/demo-products/reel-1.jpg',
      likes: 423,
      user: { name: 'FashionDaily', avatar: '/images/demo-products/avatar-1.jpg' }
    },
    {
      id: 2,
      title: 'Street style lookbook 2025',
      image: '/images/demo-products/reel-2.jpg',
      likes: 892,
      user: { name: 'StyleCraze', avatar: '/images/demo-products/avatar-2.jpg' }
    },
    {
      id: 3,
      title: 'Office wear inspiration',
      image: '/images/demo-products/reel-3.jpg',
      likes: 512,
      user: { name: 'WorkChic', avatar: '/images/demo-products/avatar-3.jpg' }
    },
    {
      id: 4,
      title: 'Weekend casual outfits',
      image: '/images/demo-products/reel-4.jpg',
      likes: 743,
      user: { name: 'TrendHunter', avatar: '/images/demo-products/avatar-4.jpg' }
    },
    {
      id: 5,
      title: 'Accessorize like a pro',
      image: '/images/demo-products/reel-5.jpg',
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
              <div 
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${reel.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                      {reel.user.name.charAt(0)}
                    </div>
                  </div>
                </div>
                
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