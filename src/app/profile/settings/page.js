'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function SettingsPage() {
  const router = useRouter();
  
  // Settings state
  const [settings, setSettings] = useState({
    notifications: {
      orderUpdates: true,
      promotions: true,
      deliveryAlerts: true,
      newArrivals: false,
      recommendations: true
    },
    privacy: {
      profileVisibility: 'public',
      activitySharing: true,
      dataCollection: 'limited'
    },
    appearance: {
      theme: 'dark',
      fontSize: 'medium',
      animationsEnabled: true
    }
  });
  
  // Handle toggle changes
  const handleToggleChange = (category, setting) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: !settings[category][setting]
      }
    });
  };
  
  // Handle select changes
  const handleSelectChange = (category, setting, value) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: value
      }
    });
  };
  
  // Handle form submission
  const handleSave = () => {
    // Simulate API call to save settings
    setTimeout(() => {
      // Navigate back to profile page
      router.push('/profile');
    }, 500);
  };
  
  // Handle cancel and return to profile
  const handleCancel = () => {
    router.push('/profile');
  };

  // Handle back button
  const handleBack = () => {
    router.push('/profile');
  };
  
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-20 pt-2">
        <div className="my-6">
          {/* Back button */}
          <button 
            onClick={handleBack}
            className="flex items-center text-text-secondary hover:text-white mb-4 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Profile
          </button>

          <h1 className="text-3xl font-display font-bold mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              Settings
            </span>
          </h1>
          <p className="text-text-secondary">
            Manage your account preferences
          </p>
        </div>
        
        <div className="space-y-6">
          {/* Notifications Settings */}
          <Card variant="glass" className="p-6">
            <h2 className="text-xl font-display font-bold mb-4">Notifications</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Order Updates</h3>
                  <p className="text-sm text-text-secondary">Get notified about status changes to your orders</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.orderUpdates} 
                    onChange={() => handleToggleChange('notifications', 'orderUpdates')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Promotions & Discounts</h3>
                  <p className="text-sm text-text-secondary">Receive notifications about deals and offers</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.promotions} 
                    onChange={() => handleToggleChange('notifications', 'promotions')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Delivery Alerts</h3>
                  <p className="text-sm text-text-secondary">Get real-time updates about your delivery status</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.deliveryAlerts} 
                    onChange={() => handleToggleChange('notifications', 'deliveryAlerts')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">New Arrivals</h3>
                  <p className="text-sm text-text-secondary">Stay updated on new products and collections</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.newArrivals} 
                    onChange={() => handleToggleChange('notifications', 'newArrivals')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Personalized Recommendations</h3>
                  <p className="text-sm text-text-secondary">Get product suggestions based on your preferences</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.recommendations} 
                    onChange={() => handleToggleChange('notifications', 'recommendations')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
            </div>
          </Card>
          
          {/* Privacy Settings */}
          <Card variant="glass" className="p-6">
            <h2 className="text-xl font-display font-bold mb-4">Privacy</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Profile Visibility</h3>
                <p className="text-sm text-text-secondary mb-3">Control who can see your profile information</p>
                
                <div className="flex gap-2">
                  <Button
                    variant={settings.privacy.profileVisibility === 'public' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('privacy', 'profileVisibility', 'public')}
                  >
                    Public
                  </Button>
                  <Button
                    variant={settings.privacy.profileVisibility === 'friends' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('privacy', 'profileVisibility', 'friends')}
                  >
                    Friends Only
                  </Button>
                  <Button
                    variant={settings.privacy.profileVisibility === 'private' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('privacy', 'profileVisibility', 'private')}
                  >
                    Private
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Activity Sharing</h3>
                  <p className="text-sm text-text-secondary">Share your shopping activity and reviews</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.privacy.activitySharing} 
                    onChange={() => handleToggleChange('privacy', 'activitySharing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Data Collection</h3>
                <p className="text-sm text-text-secondary mb-3">Manage how we collect data to personalize your experience</p>
                
                <div className="flex gap-2">
                  <Button
                    variant={settings.privacy.dataCollection === 'full' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('privacy', 'dataCollection', 'full')}
                  >
                    Full Access
                  </Button>
                  <Button
                    variant={settings.privacy.dataCollection === 'limited' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('privacy', 'dataCollection', 'limited')}
                  >
                    Limited
                  </Button>
                  <Button
                    variant={settings.privacy.dataCollection === 'minimal' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('privacy', 'dataCollection', 'minimal')}
                  >
                    Minimal
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Appearance Settings */}
          <Card variant="glass" className="p-6">
            <h2 className="text-xl font-display font-bold mb-4">Appearance</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Theme</h3>
                <div className="flex gap-2">
                  <Button
                    variant={settings.appearance.theme === 'light' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('appearance', 'theme', 'light')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light
                  </Button>
                  <Button
                    variant={settings.appearance.theme === 'dark' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('appearance', 'theme', 'dark')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark
                  </Button>
                  <Button
                    variant={settings.appearance.theme === 'system' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('appearance', 'theme', 'system')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    System
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Font Size</h3>
                <div className="flex gap-2">
                  <Button
                    variant={settings.appearance.fontSize === 'small' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('appearance', 'fontSize', 'small')}
                  >
                    Small
                  </Button>
                  <Button
                    variant={settings.appearance.fontSize === 'medium' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('appearance', 'fontSize', 'medium')}
                  >
                    Medium
                  </Button>
                  <Button
                    variant={settings.appearance.fontSize === 'large' ? 'primary' : 'glass'}
                    size="sm"
                    onClick={() => handleSelectChange('appearance', 'fontSize', 'large')}
                  >
                    Large
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Enable Animations</h3>
                  <p className="text-sm text-text-secondary">Toggle UI animations and transitions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.appearance.animationsEnabled} 
                    onChange={() => handleToggleChange('appearance', 'animationsEnabled')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
            </div>
          </Card>
          
          {/* Account Settings */}
          <Card variant="glass" className="p-6">
            <h2 className="text-xl font-display font-bold mb-4">Account</h2>
            
            <div className="space-y-4">
              <div>
                <Button 
                  variant="glass" 
                  className="w-full md:w-auto flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Change Password
                </Button>
              </div>
              
              <div>
                <Button 
                  variant="glass" 
                  className="w-full md:w-auto flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Two-Factor Authentication
                </Button>
              </div>
              
              <div>
                <Button 
                  variant="glass" 
                  className="w-full md:w-auto text-red-500 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="flex justify-end gap-4 mt-6">
          <Button 
            variant="glass"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          
          <Button 
            variant="primary"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </Container>
    </>
  );
}