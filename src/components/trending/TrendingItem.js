'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const TrendingItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format currency
  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };
  
  // Calculate discount percentage
  const calculateDiscount = () => {
    if (!item.originalPrice) return null;
    const discount = ((item.originalPrice - item.price) / item.originalPrice) * 100;
    return Math.round(discount);
  };
  
  const discountPercent = calculateDiscount();
  
  return (
    <Card 
      variant="glass" 
      className="transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image with overlay for trending rank */}
        <div 
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Trending rank badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="primary" size="md" className="font-display font-bold">
              #{item.rank}
            </Badge>
          </div>
          
          {/* Discount badge if available */}
          {discountPercent && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="accent" size="md" className="font-display font-bold">
                {discountPercent}% OFF
              </Badge>
            </div>
          )}
          
          {/* Stats overlay */}
          <div className="absolute bottom-0 left-0 right-0 glass p-2 flex justify-between items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs ml-1">{item.rating}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs ml-1">{item.likes}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs ml-1">{item.comments}</span>
            </div>
          </div>
          
          {/* Quick actions overlay (visible on hover) */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300">
              <button className="w-10 h-10 glass rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              
              <button className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              
              <button className="w-10 h-10 glass rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* Product info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-text-secondary">{item.store}</span>
            <span className="text-xs text-text-secondary">{item.deliveryTime}</span>
          </div>
          
          <h3 className="font-medium line-clamp-1">{item.name}</h3>
          
          <div className="flex items-end mt-2">
            <span className="font-bold text-purple-500">{formatPrice(item.price)}</span>
            {item.originalPrice && (
              <span className="text-xs text-text-secondary line-through ml-2">
                {formatPrice(item.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Trending tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag, index) => (
              <span 
                key={index}
                className="glass text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TrendingItem;