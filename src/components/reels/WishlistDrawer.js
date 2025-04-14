'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useReelStore } from './ReelStore';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const WishlistDrawer = ({ isOpen, onClose }) => {
  const { wishlist, removeFromWishlist } = useReelStore();
  const overlayRef = useRef(null);
  
  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Handle escape key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);
  
  // Format price with currency
  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };
  
  // Portal component only runs on client
  if (typeof window === 'undefined') return null;
  
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 glass max-h-[85vh] overflow-y-auto rounded-t-2xl"
            ref={overlayRef}
          >
            <div className="sticky top-0 left-0 right-0 glass py-4 px-6 backdrop-blur-md z-10 border-b border-white/10">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold font-display">
                  Wishlist <span className="text-purple-500">({wishlist.length})</span>
                </h3>
                
                <button
                  onClick={onClose}
                  className="rounded-full p-1.5 hover:bg-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="w-12 h-1 rounded-full bg-white/20 mx-auto mt-2" />
            </div>
            
            <div className="px-4 py-6">
              {wishlist.length === 0 ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-text-secondary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h4 className="text-lg font-medium mb-2">Your wishlist is empty</h4>
                  <p className="text-text-secondary mb-6">Swipe right on reels to add items to your wishlist</p>
                  <Button variant="primary" onClick={onClose}>
                    Continue Browsing
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlist.map((item) => (
                      <Card 
                        key={item.id} 
                        variant="glass" 
                        className="relative overflow-hidden"
                      >
                        <div className="flex">
                          <div 
                            className="h-24 w-24 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.posterUrl})` }}
                          />
                          
                          <div className="flex-1 p-3">
                            <div className="text-xs text-text-secondary">{item.product.store}</div>
                            <h4 className="font-medium text-sm line-clamp-1">{item.product.name}</h4>
                            
                            <div className="flex justify-between items-end mt-1">
                              <div>
                                <div className="font-bold text-purple-500">{formatPrice(item.product.price)}</div>
                                {item.product.originalPrice && (
                                  <div className="text-xs text-text-secondary line-through">
                                    {formatPrice(item.product.originalPrice)}
                                  </div>
                                )}
                              </div>
                              
                              <div className="text-xs text-text-secondary">
                                {item.product.deliveryTime}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute top-2 right-2">
                          <button 
                            className="w-6 h-6 glass rounded-full flex items-center justify-center"
                            onClick={() => removeFromWishlist(item.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
                    <Button 
                      variant="glass" 
                      className="flex-1"
                      onClick={onClose}
                    >
                      Continue Browsing
                    </Button>
                    
                    <Button 
                      variant="primary" 
                      className="flex-1"
                    >
                      Add All to Cart
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default WishlistDrawer;