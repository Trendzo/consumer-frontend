'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const PaymentMethodsPanel = () => {
  // Mock payment methods data
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'credit',
      name: 'Visa Ending in 4242',
      cardNumber: '•••• •••• •••• 4242',
      expiryDate: '09/26',
      isDefault: true,
      icon: (
        <svg className="h-6 w-8" viewBox="0 0 48 30" fill="none">
          <rect width="48" height="30" rx="4" fill="#2C2C2C"/>
          <path d="M18.5 19.5C21.5376 19.5 24 17.0376 24 14C24 10.9624 21.5376 8.5 18.5 8.5C15.4624 8.5 13 10.9624 13 14C13 17.0376 15.4624 19.5 18.5 19.5Z" fill="#EB001B"/>
          <path d="M29.5 19.5C32.5376 19.5 35 17.0376 35 14C35 10.9624 32.5376 8.5 29.5 8.5C26.4624 8.5 24 10.9624 24 14C24 17.0376 26.4624 19.5 29.5 19.5Z" fill="#F79E1B"/>
          <path d="M24 10.2539C25.0819 11.1937 25.7628 12.5254 25.7628 14.0004C25.7628 15.4754 25.0819 16.8071 24 17.7469C22.9181 16.8071 22.2372 15.4754 22.2372 14.0004C22.2372 12.5254 22.9181 11.1937 24 10.2539Z" fill="#FF5F00"/>
        </svg>
      )
    },
    {
      id: 2,
      type: 'credit',
      name: 'Mastercard Ending in 5353',
      cardNumber: '•••• •••• •••• 5353',
      expiryDate: '12/25',
      isDefault: false,
      icon: (
        <svg className="h-6 w-8" viewBox="0 0 48 30" fill="none">
          <rect width="48" height="30" rx="4" fill="#2C2C2C"/>
          <path d="M18.5 19.5C21.5376 19.5 24 17.0376 24 14C24 10.9624 21.5376 8.5 18.5 8.5C15.4624 8.5 13 10.9624 13 14C13 17.0376 15.4624 19.5 18.5 19.5Z" fill="#EB001B"/>
          <path d="M29.5 19.5C32.5376 19.5 35 17.0376 35 14C35 10.9624 32.5376 8.5 29.5 8.5C26.4624 8.5 24 10.9624 24 14C24 17.0376 26.4624 19.5 29.5 19.5Z" fill="#F79E1B"/>
          <path d="M24 10.2539C25.0819 11.1937 25.7628 12.5254 25.7628 14.0004C25.7628 15.4754 25.0819 16.8071 24 17.7469C22.9181 16.8071 22.2372 15.4754 22.2372 14.0004C22.2372 12.5254 22.9181 11.1937 24 10.2539Z" fill="#FF5F00"/>
        </svg>
      )
    },
    {
      id: 3,
      type: 'upi',
      name: 'Google Pay',
      upiId: 'sarah@okbank',
      isDefault: false,
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path d="M4.20105 5.47595L11.5334 0.86545C11.8079 0.706447 12.1921 0.706447 12.4666 0.86545L19.7989 5.47595C20.0734 5.63495 20.0734 6.02145 19.7989 6.18045L12.4666 10.791C12.1921 10.95 11.8079 10.95 11.5334 10.791L4.20105 6.18045C3.92655 6.02145 3.92655 5.63495 4.20105 5.47595Z" fill="#EA4335"/>
          <path d="M3.77542 15.0451L9.41842 17.9986C9.69292 18.1576 9.86592 18.4711 9.86592 18.8186V23.1451C9.86592 23.5681 9.45142 23.8561 9.08342 23.6636L3.44042 20.7081C3.16592 20.5491 2.99292 20.2356 2.99292 19.8881V15.5631C2.99242 15.1416 3.40692 14.8521 3.77542 15.0451Z" fill="#FBBC04"/>
          <path d="M14.1366 18.8175V23.1455C14.1366 23.5681 14.5511 23.8561 14.9191 23.6636L20.5621 20.7096C20.8366 20.5506 21.0096 20.2371 21.0096 19.8896V15.5631C21.0096 15.1406 20.5951 14.8526 20.2271 15.0451L14.5841 17.9991C14.3091 18.1576 14.1366 18.4711 14.1366 18.8175Z" fill="#34A853"/>
          <path d="M19.7985 12.8401L14.1545 15.7941C13.8795 15.9531 13.5025 15.9531 13.2285 15.7941L7.58447 12.8401C7.21647 12.6471 7.21647 12.1106 7.58447 11.9176L13.2285 8.96362C13.5035 8.80462 13.8805 8.80462 14.1545 8.96362L19.7985 11.9176C20.1665 12.1111 20.1665 12.6471 19.7985 12.8401Z" fill="#4285F4"/>
        </svg>
      )
    }
  ]);

  // States to manage the new payment method form
  const [isAddingPayment, setIsAddingPayment] = useState(false);
  const [paymentType, setPaymentType] = useState('credit');
  const [newPayment, setNewPayment] = useState({
    cardNumber: '',
    name: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  // Handle remove payment method
  const removePaymentMethod = (paymentId) => {
    setPaymentMethods(paymentMethods.filter(payment => payment.id !== paymentId));
  };

  // Handle set as default
  const setAsDefault = (paymentId) => {
    setPaymentMethods(paymentMethods.map(payment => ({
      ...payment,
      isDefault: payment.id === paymentId
    })));
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Handle card number input with formatting
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setNewPayment(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  // Handle add payment method submission
  const handleAddPayment = (e) => {
    e.preventDefault();
    
    // Create new payment method object based on type
    let newPaymentObj;
    
    if (paymentType === 'credit') {
      // Get last 4 digits of card
      const last4 = newPayment.cardNumber.replace(/\s/g, '').slice(-4);
      
      newPaymentObj = {
        id: paymentMethods.length + 1,
        type: 'credit',
        name: `Card Ending in ${last4}`,
        cardNumber: `•••• •••• •••• ${last4}`,
        expiryDate: newPayment.expiryDate,
        isDefault: paymentMethods.length === 0,
        icon: (
          <svg className="h-6 w-8" viewBox="0 0 48 30" fill="none">
            <rect width="48" height="30" rx="4" fill="#2C2C2C"/>
            <path d="M18.5 19.5C21.5376 19.5 24 17.0376 24 14C24 10.9624 21.5376 8.5 18.5 8.5C15.4624 8.5 13 10.9624 13 14C13 17.0376 15.4624 19.5 18.5 19.5Z" fill="#EB001B"/>
            <path d="M29.5 19.5C32.5376 19.5 35 17.0376 35 14C35 10.9624 32.5376 8.5 29.5 8.5C26.4624 8.5 24 10.9624 24 14C24 17.0376 26.4624 19.5 29.5 19.5Z" fill="#F79E1B"/>
            <path d="M24 10.2539C25.0819 11.1937 25.7628 12.5254 25.7628 14.0004C25.7628 15.4754 25.0819 16.8071 24 17.7469C22.9181 16.8071 22.2372 15.4754 22.2372 14.0004C22.2372 12.5254 22.9181 11.1937 24 10.2539Z" fill="#FF5F00"/>
          </svg>
        )
      };
    } else if (paymentType === 'upi') {
      newPaymentObj = {
        id: paymentMethods.length + 1,
        type: 'upi',
        name: 'UPI',
        upiId: newPayment.upiId,
        isDefault: paymentMethods.length === 0,
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path d="M4.20105 5.47595L11.5334 0.86545C11.8079 0.706447 12.1921 0.706447 12.4666 0.86545L19.7989 5.47595C20.0734 5.63495 20.0734 6.02145 19.7989 6.18045L12.4666 10.791C12.1921 10.95 11.8079 10.95 11.5334 10.791L4.20105 6.18045C3.92655 6.02145 3.92655 5.63495 4.20105 5.47595Z" fill="#EA4335"/>
            <path d="M3.77542 15.0451L9.41842 17.9986C9.69292 18.1576 9.86592 18.4711 9.86592 18.8186V23.1451C9.86592 23.5681 9.45142 23.8561 9.08342 23.6636L3.44042 20.7081C3.16592 20.5491 2.99292 20.2356 2.99292 19.8881V15.5631C2.99242 15.1416 3.40692 14.8521 3.77542 15.0451Z" fill="#FBBC04"/>
            <path d="M14.1366 18.8175V23.1455C14.1366 23.5681 14.5511 23.8561 14.9191 23.6636L20.5621 20.7096C20.8366 20.5506 21.0096 20.2371 21.0096 19.8896V15.5631C21.0096 15.1406 20.5951 14.8526 20.2271 15.0451L14.5841 17.9991C14.3091 18.1576 14.1366 18.4711 14.1366 18.8175Z" fill="#34A853"/>
            <path d="M19.7985 12.8401L14.1545 15.7941C13.8795 15.9531 13.5025 15.9531 13.2285 15.7941L7.58447 12.8401C7.21647 12.6471 7.21647 12.1106 7.58447 11.9176L13.2285 8.96362C13.5035 8.80462 13.8805 8.80462 14.1545 8.96362L19.7985 11.9176C20.1665 12.1111 20.1665 12.6471 19.7985 12.8401Z" fill="#4285F4"/>
          </svg>
        )
      };
    }
    
    // Add to payment methods list
    setPaymentMethods([...paymentMethods, newPaymentObj]);
    
    // Reset form and close it
    setNewPayment({
      cardNumber: '',
      name: '',
      expiryDate: '',
      cvv: '',
      upiId: ''
    });
    setIsAddingPayment(false);
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-display font-bold">Payment Methods</h2>
        
        <Button 
          variant="primary" 
          size="sm"
          className="flex items-center"
          onClick={() => setIsAddingPayment(!isAddingPayment)}
        >
          {isAddingPayment ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Payment Method
            </>
          )}
        </Button>
      </div>
      
      {/* Add New Payment Method Form */}
      {isAddingPayment && (
        <Card variant="glass" className="p-4 mb-6">
          <h3 className="font-bold mb-4">Add Payment Method</h3>
          
          {/* Payment Type Selector */}
          <div className="mb-4">
            <div className="flex p-1 glass rounded-full max-w-xs">
              <button
                className={`flex-1 py-2 px-4 rounded-full transition ${
                  paymentType === 'credit' 
                    ? 'bg-white/90 text-gray-900 dark:text-gray-900' 
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setPaymentType('credit')}
              >
                Card
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-full transition ${
                  paymentType === 'upi' 
                    ? 'bg-white/90 text-gray-900 dark:text-gray-900' 
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setPaymentType('upi')}
              >
                UPI
              </button>
            </div>
          </div>
          
          <form onSubmit={handleAddPayment}>
            {paymentType === 'credit' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <input 
                    type="text" 
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    value={newPayment.cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength="19"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name on card"
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    value={newPayment.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input 
                      type="text" 
                      name="expiryDate"
                      placeholder="MM/YY"
                      className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      value={newPayment.expiryDate}
                      onChange={handleInputChange}
                      maxLength="5"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input 
                      type="password" 
                      name="cvv"
                      placeholder="•••"
                      className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      value={newPayment.cvv}
                      onChange={handleInputChange}
                      maxLength="4"
                      required
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium mb-1">UPI ID</label>
                <input 
                  type="text" 
                  name="upiId"
                  placeholder="username@bankname"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newPayment.upiId}
                  onChange={handleInputChange}
                  required
                />
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button type="button" variant="glass" className="p-2" onClick={() => setNewPayment(prev => ({ ...prev, upiId: 'username@okbank' }))}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M4.20105 5.47595L11.5334 0.86545C11.8079 0.706447 12.1921 0.706447 12.4666 0.86545L19.7989 5.47595C20.0734 5.63495 20.0734 6.02145 19.7989 6.18045L12.4666 10.791C12.1921 10.95 11.8079 10.95 11.5334 10.791L4.20105 6.18045C3.92655 6.02145 3.92655 5.63495 4.20105 5.47595Z" fill="#EA4335"/>
                      <path d="M3.77542 15.0451L9.41842 17.9986C9.69292 18.1576 9.86592 18.4711 9.86592 18.8186V23.1451C9.86592 23.5681 9.45142 23.8561 9.08342 23.6636L3.44042 20.7081C3.16592 20.5491 2.99292 20.2356 2.99292 19.8881V15.5631C2.99242 15.1416 3.40692 14.8521 3.77542 15.0451Z" fill="#FBBC04"/>
                      <path d="M14.1366 18.8175V23.1455C14.1366 23.5681 14.5511 23.8561 14.9191 23.6636L20.5621 20.7096C20.8366 20.5506 21.0096 20.2371 21.0096 19.8896V15.5631C21.0096 15.1406 20.5951 14.8526 20.2271 15.0451L14.5841 17.9991C14.3091 18.1576 14.1366 18.4711 14.1366 18.8175Z" fill="#34A853"/>
                      <path d="M19.7985 12.8401L14.1545 15.7941C13.8795 15.9531 13.5025 15.9531 13.2285 15.7941L7.58447 12.8401C7.21647 12.6471 7.21647 12.1106 7.58447 11.9176L13.2285 8.96362C13.5035 8.80462 13.8805 8.80462 14.1545 8.96362L19.7985 11.9176C20.1665 12.1111 20.1665 12.6471 19.7985 12.8401Z" fill="#4285F4"/>
                    </svg>
                  </Button>
                  <Button type="button" variant="glass" className="p-2" onClick={() => setNewPayment(prev => ({ ...prev, upiId: 'username@paytm' }))}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#00BAF2"/>
                      <path d="M16.1169 8.12773H14.2966V15.8741H16.1169V8.12773Z" fill="white"/>
                      <path d="M12.7064 11.5117C12.7064 10.1553 11.7878 9.23665 10.4313 9.23665C9.07483 9.23665 8.15619 10.1553 8.15619 11.5117C8.15619 12.8682 9.07483 13.7868 10.4313 13.7868C11.7878 13.7868 12.7064 12.8682 12.7064 11.5117ZM10.4313 12.1921C10.0606 12.1921 9.75097 11.8825 9.75097 11.5117C9.75097 11.141 10.0606 10.8314 10.4313 10.8314C10.8021 10.8314 11.1117 11.141 11.1117 11.5117C11.1117 11.8825 10.8021 12.1921 10.4313 12.1921Z" fill="white"/>
                    </svg>
                  </Button>
                  <Button type="button" variant="glass" className="p-2" onClick={() => setNewPayment(prev => ({ ...prev, upiId: 'username@ybl' }))}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#6739B7"/>
                      <path d="M14.9205 7.74316L12.0012 10.6625L9.08183 7.74316H7.71826L12.0012 12.0261L16.284 7.74316H14.9205Z" fill="white"/>
                      <path d="M7.71826 16.2829H9.08183L12.0012 13.3636L14.9205 16.2829H16.284L12.0012 12L7.71826 16.2829Z" fill="white"/>
                    </svg>
                  </Button>
                </div>
              </div>
            )}
            
            <div className="flex justify-end mt-6">
              <Button 
                type="submit" 
                variant="primary"
              >
                Save Payment Method
              </Button>
            </div>
          </form>
        </Card>
      )}
      
      {/* Payment Methods List */}
      {paymentMethods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods.map((payment) => (
            <Card 
              key={payment.id}
              variant="glass" 
              className={`p-4 transition-all relative ${
                payment.isDefault ? 'border-2 border-purple-500 bg-purple-500/10' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="mr-3">
                    {payment.icon}
                  </div>
                  <div>
                    <div className="font-medium">{payment.name}</div>
                    {payment.type === 'credit' ? (
                      <div className="text-sm text-text-secondary">
                        {payment.cardNumber} • Expires {payment.expiryDate}
                      </div>
                    ) : (
                      <div className="text-sm text-text-secondary">
                        {payment.upiId}
                      </div>
                    )}
                  </div>
                </div>
                
                {payment.isDefault && (
                  <Badge variant="primary" size="sm">Default</Badge>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {!payment.isDefault && (
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setAsDefault(payment.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Set as Default
                  </Button>
                )}
                
                {!payment.isDefault && (
                  <Button
                    variant="glass"
                    size="sm"
                    className="text-red-400"
                    onClick={() => removePaymentMethod(payment.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">No payment methods</h3>
          <p className="text-text-secondary mb-6">Add a payment method for faster checkout</p>
          <Button variant="primary" onClick={() => setIsAddingPayment(true)}>
            Add Payment Method
          </Button>
        </div>
      )}
      
      {/* Security Note */}
      <div className="mt-8 glass p-4 rounded-lg">
        <div className="flex items-start">
          <div className="glass rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium">Payment Security</h4>
            <p className="text-sm text-text-secondary mt-1">
              Your payment information is securely stored using industry-standard encryption. We never store your full card details on our servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPanel;