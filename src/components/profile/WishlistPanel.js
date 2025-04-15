'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const WishlistPanel = () => {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Floral Print Maxi Dress',
      price: 3599,
      originalPrice: 4999,
      store: 'Mango',
      deliveryTime: '45 min',
      rating: 4.5,
      inStock: true,
      image: '/api/placeholder/400/320',
    },
    {
      id: 2,
      name: 'Chunky Platform Sneakers',
      price: 4999,
      store: 'Nike',
      deliveryTime: '35 min',
      rating: 4.8,
      inStock: true,
      image: '/api/placeholder/400/320',
    },
    {
      id: 3,
      name: 'Oversized Denim Jacket',
      price: 2999,
      originalPrice: 3999,
      store: 'Zara',
      deliveryTime: '25 min',
      rating: 4.7,
      inStock: true,
      image: '/api/placeholder/400/320',
    },
    {
      id: 4,
      name: 'Knitted Cardigan',
      price: 1899,
      store: 'H&M',
      deliveryTime: '30 min',
      rating: 4.2,
      inStock: false,
      image: '/api/placeholder/400/320',
    },
  ]);
  
  // Handle remove from wishlist
  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
  };
  
  // Handle add to cart
  const addToCart = (itemId) => {
    // This would normally make an API call to add to cart
    console.log(`Added item #${itemId} to cart`);
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
    <div>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => {
            const discountPercent = calculateDiscount(item);
            
            return (
              <Card
                key={item.id}
                variant="glass"
                className="overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}>
                  {discountPercent && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="accent" size="sm">{discountPercent}% OFF</Badge>
                    </div>
                  )}
                  
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Badge variant="glass" size="md" className="bg-white/20">Out of Stock</Badge>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 glass p-2 flex justify-between items-center text-xs">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{item.rating}</span>
                    </div>
                    <span>{item.store}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium line-clamp-1">{item.name}</h3>
                  <div className="flex justify-between items-end mt-2">
                    <div className="flex items-end">
                      <span className="font-bold text-primary">{formatPrice(item.price)}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-text-secondary line-through ml-1">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-text-secondary">{item.deliveryTime}</span>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      variant="glass" 
                      size="sm"
                      className="text-red-400 flex-grow"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </Button>
                    
                    <Button 
                      variant="primary" 
                      size="sm"
                      className="flex-grow"
                      onClick={() => addToCart(item.id)}
                      disabled={!item.inStock}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Your wishlist is empty</h3>
          <p className="text-text-secondary mb-6">Save items you like to your wishlist</p>
          <Button variant="primary">
            Browse Products
          </Button>
        </div>
      )}
      
      {wishlistItems.length > 0 && (
        <div className="mt-8 text-center">
          <Button variant="primary" size="lg" className="px-10">
            Add All to Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistPanel;