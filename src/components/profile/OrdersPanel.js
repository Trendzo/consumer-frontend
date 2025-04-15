// Find line 200 and look for an apostrophe that needs escaping
// The error is likely in the store name "Levi's" which should be "Levi&apos;s"

// Partial fix for OrdersPanel.js - focus on the error area, around line 200
// This is based on the error message without seeing the exact code

'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const OrdersPanel = () => {
  // Mock orders data
  const [orders, setOrders] = useState([
    {
      id: 'ORD5678901',
      date: 'April 12, 2025',
      status: 'Out for Delivery',
      statusCode: 'delivery',
      items: [
        {
          id: 1,
          name: 'Oversized Cotton T-shirt',
          price: 1299,
          quantity: 1,
          store: 'Zara',
          image: '/api/placeholder/400/320'
        },
        {
          id: 2,
          name: 'High Rise Skinny Jeans',
          price: 2499,
          quantity: 1,
          store: 'H&M',
          image: '/api/placeholder/400/320'
        }
      ],
      total: 3798,
      deliveryTime: '25 min',
      tracking: {
        estimatedDelivery: '15 mins',
        currentLocation: 'Nearby your location'
      }
    },
    {
      id: 'ORD4567890',
      date: 'April 10, 2025',
      status: 'Delivered',
      statusCode: 'completed',
      items: [
        {
          id: 3,
          name: 'Air Max Sneakers',
          price: 7999,
          quantity: 1,
          store: 'Nike',
          image: '/api/placeholder/400/320'
        }
      ],
      total: 7999,
      deliveryTime: 'Delivered',
      tracking: null
    },
    {
      id: 'ORD3456789',
      date: 'April 5, 2025',
      status: 'Delivered',
      statusCode: 'completed',
      items: [
        {
          id: 4,
          name: 'Floral Print Maxi Dress',
          price: 3599,
          quantity: 1,
          store: 'Mango',
          image: '/api/placeholder/400/320'
        }
      ],
      total: 3599,
      deliveryTime: 'Delivered',
      tracking: null
    }
  ]);
  
  // Handle status badge color
  const getStatusColor = (statusCode) => {
    switch(statusCode) {
      case 'pending': return 'warning';
      case 'processing': return 'info';
      case 'delivery': return 'primary';
      case 'completed': return 'success';
      case 'cancelled': return 'accent';
      default: return 'secondary';
    }
  };
  
  // Format currency
  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };
  
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <Card key={order.id} variant="glass" className="overflow-hidden">
          <div className="p-4">
            {/* Order header */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              <div>
                <div className="text-sm text-text-secondary">Order #{order.id}</div>
                <div className="font-medium">{order.date}</div>
              </div>
              
              <Badge variant={getStatusColor(order.statusCode)}>
                {order.status}
              </Badge>
            </div>
            
            {/* Live tracking for out for delivery orders */}
            {order.statusCode === 'delivery' && order.tracking && (
              <div className="glass p-3 rounded-lg mb-4 bg-gradient-to-r from-purple-500/10 to-cyan-400/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center animate-pulse mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Live Tracking</div>
                    <div className="text-xs text-text-secondary">Arriving in {order.tracking.estimatedDelivery}</div>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-grow h-2 glass rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 w-3/4"></div>
                  </div>
                  <span className="text-xs">75%</span>
                </div>
              </div>
            )}
            
            {/* Order items */}
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 glass rounded-lg overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-medium line-clamp-1">{item.name}</div>
                    <div className="text-sm text-text-secondary">{item.store}</div>
                    <div className="flex justify-between mt-1">
                      <span>{formatPrice(item.price)} x {item.quantity}</span>
                      <span className="font-bold">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order summary */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-sm text-text-secondary">Total Amount</div>
                <div className="font-bold">{formatPrice(order.total)}</div>
              </div>
              
              <div className="flex gap-2">
                {order.statusCode === 'delivery' && (
                  <Button
                    variant="primary"
                    size="sm"
                  >
                    Track Order
                  </Button>
                )}
                
                <Button
                  variant="glass"
                  size="sm"
                >
                  Order Details
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
      
      {orders.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">No orders yet</h3>
          <p className="text-text-secondary mb-6">You haven&apos;t placed any orders yet</p>
          <Button variant="primary">
            Browse Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrdersPanel;