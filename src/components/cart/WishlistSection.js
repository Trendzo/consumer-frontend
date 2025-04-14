'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const WishlistSection = () => {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Floral Print Maxi Dress',
      price: 3599,
      originalPrice: 4999,
      store: 'Mango',
      deliveryTime: '45 min',
      image: '/api/placeholder/400/320',
    },
    {
      id: 2,
      name: 'Chunky Platform Sneakers',
      price: 4999,
      store: 'Nike',
      deliveryTime: '35 min',
      image: '/api/placeholder/400/320',
    },
    {
      id: 3,
      name: 'Oversized Denim Jacket',
      price: 2999,
      originalPrice: 3999,
      store: 'Zara',
      deliveryTime: '25 min',
      image: '/api/placeholder/400/320',
    }
  ]);
  
  // Handle remove from wishlist
  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
  };
  
  // Format currency
  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };
  
  // Calculate discount percentage
  const calculateDiscount = (item) => {
    if (!item.originalPrice) return null;
    const discount = ((item.originalPrice - item.price) / item.originalPrice) * 100;
    return Math.round(discount);
  };
  
  return (
    <Card variant="glass">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-display font-bold">Your Wishlist</h3>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary"
          >
            View All
          </Button>
        </div>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-6">
            <div className="mb-4 mx-auto w-16 h-16 glass rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">Your wishlist is empty</h4>
            <p className="text-text-secondary mb-4">Save items you like to your wishlist</p>
            <Button variant="primary" size="sm">
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlistItems.map((item) => {
              const discountPercent = calculateDiscount(item);
              
              return (
                <Card 
                  key={item.id}
                  variant="glass" 
                  className="overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                      {discountPercent && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="accent" size="sm">{discountPercent}% OFF</Badge>
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 glass px-2 py-1 flex justify-between items-center text-xs">
                        <span>{item.store}</span>
                        <span>{item.deliveryTime}</span>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="font-bold text-sm text-primary">{formatPrice(item.price)}</span>
                          {item.originalPrice && (
                            <span className="text-xs text-text-secondary line-through ml-1">
                              {formatPrice(item.originalPrice)}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex">
                          <button 
                            className="w-7 h-7 glass rounded-full flex items-center justify-center hover:bg-white/10 mr-1"
                            onClick={() => removeFromWishlist(item.id)}
                            title="Remove from wishlist"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                          
                          <button 
                            className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center"
                            title="Add to cart"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};

export default WishlistSection;