'use client';

import { useRef } from 'react';

const PromoBar = () => {
  const scrollRef = useRef(null);
  
  // Mock data
  const coupons = [
    {
      id: 1,
      code: 'WELCOME50',
      description: '50% off on your first order',
      maxDiscount: '₹200',
      minOrder: '₹399',
      expiresIn: '2 days',
    },
    {
      id: 2,
      code: 'FLASH30',
      description: '30% off on all shoes',
      maxDiscount: '₹500',
      minOrder: '₹999',
      expiresIn: '12 hours',
    },
    {
      id: 3,
      code: 'WEEKEND20',
      description: '20% off on weekend shopping',
      maxDiscount: '₹350',
      minOrder: '₹799',
      expiresIn: '3 days',
    },
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="my-8">
      <h2 className="text-2xl font-display font-bold mb-4">Available Coupons</h2>
      
      <div className="relative">
        <div 
          className="flex items-stretch gap-4 overflow-x-auto pb-2 scrollbar-none"
          ref={scrollRef}
        >
          {coupons.map((coupon) => (
            <div key={coupon.id} className="min-w-64 flex-shrink-0">
              <div className="coupon-card">
                <div className="flex-1">
                  <div className="text-xs text-accent mb-1">New Coupon</div>
                  <div className="text-lg font-bold mb-1">{coupon.code}</div>
                  <div className="text-sm text-text-secondary mb-1">{coupon.description}</div>
                  <div className="text-xs text-text-secondary">
                    Max discount: {coupon.maxDiscount} | Min Order: {coupon.minOrder}
                  </div>
                </div>
                
                <div className="coupon-dashed"></div>
                
                <div className="text-right">
                  <button className="bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors">
                    Apply
                  </button>
                  <div className="text-xs text-text-secondary mt-2">
                    Expires in: {coupon.expiresIn}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 neomorph rounded-full flex items-center justify-center z-10"
          onClick={() => scroll('left')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 neomorph rounded-full flex items-center justify-center z-10"
          onClick={() => scroll('right')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PromoBar;