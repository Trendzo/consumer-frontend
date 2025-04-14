'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';

const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState('express');
  
  // Delivery options
  const options = [
    {
      id: 'express',
      title: 'Express Delivery',
      time: '60 min',
      price: 40,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'standard',
      title: 'Standard Delivery',
      time: '3-4 hours',
      price: 20,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    {
      id: 'scheduled',
      title: 'Scheduled Delivery',
      time: 'Choose time',
      price: 30,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <Card variant="glass">
      <div className="p-4">
        <h3 className="text-lg font-display font-bold mb-4">Delivery Options</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((option) => (
            <div 
              key={option.id}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                selectedOption === option.id 
                  ? 'border-2 border-purple-500 bg-purple-500/10'
                  : 'glass hover:-translate-y-1'
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className={`${selectedOption === option.id ? 'text-purple-500' : 'text-text-secondary'}`}>
                    {option.icon}
                  </div>
                  
                  {selectedOption === option.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <h4 className="font-bold">{option.title}</h4>
                <div className="text-sm text-text-secondary">{option.time}</div>
                <div className="mt-2 font-medium">₹{option.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedOption === 'scheduled' && (
          <div className="mt-4 glass p-3 rounded-lg">
            <label className="text-sm font-medium mb-2 block">Choose Delivery Time</label>
            <div className="grid grid-cols-2 gap-3">
              <select className="glass rounded-lg bg-transparent px-3 py-2 focus:outline-none border-none">
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Day after tomorrow</option>
              </select>
              
              <select className="glass rounded-lg bg-transparent px-3 py-2 focus:outline-none border-none">
                <option>10:00 AM - 12:00 PM</option>
                <option>12:00 PM - 02:00 PM</option>
                <option>02:00 PM - 04:00 PM</option>
                <option>04:00 PM - 06:00 PM</option>
                <option>06:00 PM - 08:00 PM</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default DeliveryOptions;