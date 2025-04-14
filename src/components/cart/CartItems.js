'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CartItemCard from './CartItemCard';

const CartItems = () => {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Oversized Cotton T-shirt',
      price: 1299,
      originalPrice: 1999,
      quantity: 1,
      store: 'Zara',
      deliveryTime: '25 min',
      color: 'White',
      size: 'M',
      image: '/api/placeholder/400/320',
    },
    {
      id: 2,
      name: 'High Rise Skinny Jeans',
      price: 2499,
      quantity: 1,
      store: 'H&M',
      deliveryTime: '30 min',
      color: 'Blue',
      size: '30',
      image: '/api/placeholder/400/320',
    },
    {
      id: 3,
      name: 'Air Max Sneakers',
      price: 7999,
      quantity: 1,
      store: 'Nike',
      deliveryTime: '35 min',
      color: 'Black/White',
      size: 'UK 9',
      image: '/api/placeholder/400/320',
    }
  ]);
  
  // Calculate totals
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Handle quantity change
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Handle remove item
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };
  
  return (
    <Card variant="glass" className="overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-display font-bold">Cart Items ({itemCount})</h2>
          
          <div className="text-text-secondary text-sm">
            Total: ₹{subtotal.toFixed(2)}
          </div>
        </div>
        
        <div className="divide-y divide-white/10">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItemCard 
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))
          ) : (
            <div className="py-12 text-center">
              <div className="mb-4 mx-auto w-16 h-16 glass rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Your cart is empty</h3>
              <p className="text-text-secondary mb-6">Add items to your cart to see them here</p>
              <Button variant="primary">
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CartItems;
