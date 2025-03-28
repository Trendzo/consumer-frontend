'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleSwipe = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };
  
  return (
    <Card 
      variant="neomorph" 
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div 
          className="relative h-56 bg-background-darker swipe-area"
          style={{ 
            backgroundImage: `url(${product.images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {product.isNew && (
            <Badge 
              variant="accent" 
              className="absolute top-2 left-2"
            >
              New
            </Badge>
          )}
          
          {isHovered && (
            <>
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
                onClick={() => handleSwipe('prev')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
                onClick={() => handleSwipe('next')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}
          
          <div className="swipe-indicator">
            {product.images.map((_, index) => (
              <span 
                key={index} 
                className={`swipe-dot ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          
          <div className="absolute bottom-2 right-2 add-to-bag">
            <button className="add-to-bag-btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-text-secondary">{product.store}</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-warning" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs ml-1">{product.rating}</span>
            </div>
          </div>
          
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          
          <div className="flex items-end justify-between mt-2">
            <div>
              <span className="font-bold text-primary">₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-text-secondary line-through ml-2">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-xs text-text-secondary">{product.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;