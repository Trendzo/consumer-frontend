'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { useRouter } from 'next/navigation';

const ProfileHeader = () => {
  const router = useRouter();
  // Mock user data
  const [user, setUser] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+91 98765 43210',
    avatar: '/api/placeholder/400/400',
    level: 'Gold Member',
    points: 2456,
    tier: 2
  });
  
  // Function to handle navigation to edit profile
  const handleEditProfile = () => {
    router.push('/profile/edit');
  };
  
  // Function to handle navigation to settings
  const handleSettings = () => {
    router.push('/profile/settings');
  };
  
  return (
    <Card variant="glass" className="relative mt-4 rounded-3xl overflow-hidden pt-6">
      {/* Background pattern - simplified and less prominent */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern1" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="url(#grad1)" />
            </pattern>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-purple)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-teal)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern1)" />
        </svg>
      </div>
      
      {/* Badge for member level - Positioned at top with padding to prevent cutoff */}
      <div className="flex justify-center mb-4">
        <Badge 
          variant="glass" 
          size="md"
          className="bg-gradient-to-r from-yellow-300 to-amber-500 text-white font-bold px-4 py-2"
        >
          {user.level}
        </Badge>
      </div>
      
      {/* User info */}
      <div className="relative z-10 p-6 pt-0 flex flex-col items-center text-center">
        <h1 className="text-2xl font-display font-bold">
          {user.name}
        </h1>
        <p className="text-text-secondary mt-1">
          {user.email}
        </p>
        
        {/* Progress bar for next tier */}
        <div className="mt-6 w-full max-w-md">
          <div className="flex justify-between text-xs text-text-secondary mb-1">
            <span>{user.points} points</span>
            <span>Next tier: 5000 points</span>
          </div>
          <div className="h-2 w-full glass rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-400" 
              style={{width: `${(user.points / 5000) * 100}%`}}
            ></div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="mt-6 flex gap-4">
          <Button 
            variant="glass" 
            size="md"
            className="px-6"
            onClick={handleEditProfile}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit Profile
          </Button>
          
          <Button 
            variant="glass" 
            size="md"
            className="px-6"
            onClick={handleSettings}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;