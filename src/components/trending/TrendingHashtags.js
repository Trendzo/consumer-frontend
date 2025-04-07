'use client';

import { useRef } from 'react';
import Badge from '@/components/ui/Badge';

const TrendingHashtags = () => {
  const scrollRef = useRef(null);
  
  // Mock data
  const hashtags = [
    { id: 1, tag: 'SummerOutfits', count: '4.2k posts', isHot: true },
    { id: 2, tag: 'StreetStyle', count: '3.8k posts' },
    { id: 3, tag: 'MinimalistFashion', count: '2.9k posts' },
    { id: 4, tag: 'CasualChic', count: '2.5k posts' },
    { id: 5, tag: 'OfficeLook', count: '2.3k posts', isHot: true },
    { id: 6, tag: 'DenimOnDenim', count: '1.9k posts' },
    { id: 7, tag: 'SustainableFashion', count: '1.7k posts' },
    { id: 8, tag: 'VintageVibes', count: '1.5k posts' },
    { id: 9, tag: 'PatternMixing', count: '1.3k posts' },
    { id: 10, tag: 'AccessoryGame', count: '1.2k posts' },
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative my-6">
      <h2 className="text-xl font-display font-bold mb-4">Trending Hashtags</h2>
      
      <div 
        className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-1" 
        ref={scrollRef}
      >
        {hashtags.map((item) => (
          <div 
            key={item.id}
            className="glass rounded-xl py-2 px-4 min-w-40 flex-shrink-0 transition-all hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="font-bold text-purple-500">#</span>
                  <span className="font-bold ml-1">{item.tag}</span>
                  {item.isHot && (
                    <div className="ml-2">
                      <Badge variant="accent" size="sm" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        Hot
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  {item.count}
                </div>
              </div>
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="absolute -left-2 top-1/2 -translate-y-1/2 mt-2 w-8 h-8 glass rounded-full flex items-center justify-center z-10 opacity-80 hover:opacity-100"
        onClick={() => scroll('left')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      <button 
        className="absolute -right-2 top-1/2 -translate-y-1/2 mt-2 w-8 h-8 glass rounded-full flex items-center justify-center z-10 opacity-80 hover:opacity-100"
        onClick={() => scroll('right')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default TrendingHashtags;