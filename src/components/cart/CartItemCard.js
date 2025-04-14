'use client';

import { useState } from 'react';
import Badge from '@/components/ui/Badge';

const CartItemCard = ({ item, updateQuantity, removeItem }) => {
  const [showActions, setShowActions] = useState(false);
  
  // Calculate discounted percentage if available
  const calculateDiscount = () => {
    if (!item.originalPrice) return null;
    const discount = ((item.originalPrice - item.price) / item.originalPrice) * 100;
    return Math.round(discount);
  };
  
  const discountPercent = calculateDiscount();
  
  return (
    <div 
      className="py-4 flex relative"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Item image */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden glass">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        
        {discountPercent && (
          <div className="absolute top-1 left-1">
            <Badge variant="accent" size="sm">{discountPercent}% OFF</Badge>
          </div>
        )}
      </div>
      
      {/* Item details */}
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium line-clamp-1">{item.name}</h3>
            <div className="text-xs text-text-secondary mt-1">{item.store} • {item.deliveryTime}</div>
            
            <div className="flex items-center mt-2 text-xs text-text-secondary">
              <div className="mr-3">Color: {item.color}</div>
              <div>Size: {item.size}</div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="font-bold text-primary">₹{item.price.toFixed(2)}</div>
            {item.originalPrice && (
              <div className="text-xs text-text-secondary line-through">
                ₹{item.originalPrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          {/* Quantity controls */}
          <div className="flex items-center glass rounded-full overflow-hidden">
            <button 
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="w-8 text-center font-medium">
              {item.quantity}
            </div>
            
            <button 
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Item total */}
          <div className="text-sm">
            Item total: <span className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {/* Action buttons (visible on hover) */}
      <div 
        className={`absolute right-0 top-4 transition-opacity duration-200 ${
          showActions ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-white/10"
          onClick={() => removeItem(item.id)}
          title="Remove item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
