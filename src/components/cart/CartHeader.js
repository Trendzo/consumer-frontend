'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';

const CartHeader = () => {
  const { clearCart } = useCart();

  return (
    <div className="my-6">
      <h1 className="text-3xl font-display font-bold mb-1">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          Your Cart
        </span>
      </h1>
      <p className="text-text-secondary">
        Complete your purchase and get it delivered in 60 minutes
      </p>
      
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-text-secondary">
          
        </div>
        
        <Button variant="ghost" size="sm" className="flex items-center" onClick={clearCart}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartHeader;