'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const PromoCodeInput = () => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Handle input change
  const handleChange = (e) => {
    setPromoCode(e.target.value.toUpperCase());
    setErrorMessage('');
  };
  
  // Apply promo code
  const applyPromoCode = () => {
    if (!promoCode) {
      setErrorMessage('Please enter a promo code');
      return;
    }
    
    setIsApplying(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check if it's a valid code (mocked)
      if (promoCode === 'WELCOME50' || promoCode === 'TRENDZO20') {
        const discount = promoCode === 'WELCOME50' ? 
          { code: 'WELCOME50', discount: '50% off up to ₹200', value: 200 } : 
          { code: 'TRENDZO20', discount: '20% off up to ₹100', value: 100 };
          
        setAppliedPromo(discount);
        setPromoCode('');
      } else {
        setErrorMessage('Invalid or expired promo code');
      }
      
      setIsApplying(false);
    }, 800);
  };
  
  // Remove applied promo
  const removePromo = () => {
    setAppliedPromo(null);
  };
  
  return (
    <Card variant="glass">
      <div className="p-4">
        <h3 className="text-lg font-display font-bold mb-4">Apply Promo Code</h3>
        
        {appliedPromo ? (
          <div className="glass p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-400 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">{appliedPromo.code}</div>
                  <div className="text-xs text-text-secondary">{appliedPromo.discount}</div>
                </div>
              </div>
              
              <button 
                className="text-red-400 hover:text-red-300 text-sm"
                onClick={removePromo}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={promoCode}
                  onChange={handleChange}
                  placeholder="Enter promo code"
                  className="w-full glass rounded-l-full px-4 py-3 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                {errorMessage && (
                  <div className="absolute -bottom-6 left-0 text-xs text-red-400">
                    {errorMessage}
                  </div>
                )}
              </div>
              
              <Button
                variant="primary"
                className="rounded-r-full px-6"
                onClick={applyPromoCode}
                disabled={isApplying}
              >
                {isApplying ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Applying
                  </div>
                ) : (
                  "Apply"
                )}
              </Button>
            </div>
            
            <div className="mt-4">
              <div className="text-sm font-medium mb-2">Available Coupons</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="coupon-card">
                  <div className="flex-1">
                    <div className="text-lg font-bold mb-1">WELCOME50</div>
                    <div className="text-xs text-text-secondary">50% off up to ₹200 on first order</div>
                  </div>
                  
                  <div className="coupon-dashed"></div>
                  
                  <button 
                    className="text-sm text-primary font-medium"
                    onClick={() => {
                      setPromoCode('WELCOME50');
                      applyPromoCode();
                    }}
                  >
                    Apply
                  </button>
                </div>
                
                <div className="coupon-card">
                  <div className="flex-1">
                    <div className="text-lg font-bold mb-1">TRENDZO20</div>
                    <div className="text-xs text-text-secondary">20% off up to ₹100 on all orders</div>
                  </div>
                  
                  <div className="coupon-dashed"></div>
                  
                  <button 
                    className="text-sm text-primary font-medium"
                    onClick={() => {
                      setPromoCode('TRENDZO20');
                      applyPromoCode();
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default PromoCodeInput;