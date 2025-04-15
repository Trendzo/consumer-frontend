'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';

const ProfileStats = () => {
  // Mock stats data
  const [stats, setStats] = useState([
    {
      id: 1,
      title: 'Orders',
      value: 24,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'text-purple-500'
    },
    {
      id: 2,
      title: 'Wishlist',
      value: 16,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'text-pink-500'
    },
    {
      id: 3,
      title: 'Saved Addresses',
      value: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'text-teal-500'
    }
  ]);
  
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card 
          key={stat.id}
          variant="glass" 
          className="p-6 transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center">
            <div className={`w-12 h-12 glass flex items-center justify-center rounded-full mb-3 ${stat.color}`}>
              {stat.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-1">
              {stat.value}
            </h3>
            <p className="text-text-secondary">
              {stat.title}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProfileStats;