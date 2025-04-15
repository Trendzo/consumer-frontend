'use client';

import { useState, useContext, createContext, useRef, useEffect } from 'react';

// Create a context for the active tab
const TabContext = createContext({
  activeTab: 'orders',
  setActiveTab: () => {},
});

// Custom hook to use the tab context
export const useTabContext = () => useContext(TabContext);

// Provider component to wrap both ProfileTabs and ProfileContent
export const ProfileTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('orders');
  
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

const ProfileTabs = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const tabsRef = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({});
  
  const tabs = [
    { id: 'orders', label: 'Orders', badge: 3 },
    { id: 'wishlist', label: 'Wishlist', badge: null },
    { id: 'addresses', label: 'Addresses', badge: null },
    { id: 'payment', label: 'Payment Methods', badge: null },
  ];

  // Update indicator position when active tab changes
  useEffect(() => {
    // Make sure the ref exists for the active tab
    if (tabsRef.current[activeTab]) {
      const tabElement = tabsRef.current[activeTab];
      const tabRect = tabElement.getBoundingClientRect();
      
      setIndicatorStyle({
        width: `${tabRect.width - 20}px`, // Slightly narrower than the tab
        left: `${tabElement.offsetLeft + tabRect.width / 2}px`,
        transform: 'translateX(-50%)'
      });
    }
  }, [activeTab]);
  
  return (
    <div className="relative mb-6">
      <div className="flex items-center overflow-x-auto scrollbar-none pb-2">
        <div className="glass rounded-full px-1 py-1 flex items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={el => tabsRef.current[tab.id] = el}
              className={`relative font-display font-bold text-sm px-5 py-2.5 rounded-full transition-all ${
                activeTab === tab.id
                ? 'bg-white/90 text-gray-900 dark:text-gray-900'
                : 'bg-transparent hover:text-white/80'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              
              {tab.badge && (
                <span className="absolute -top-1 -right-1 inline-flex">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-purple-500 opacity-50 animate-ping"></span>
                  <span className="relative flex items-center justify-center rounded-full h-4 w-4 bg-purple-500">
                    <span className="text-[10px] text-white font-bold">{tab.badge}</span>
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Animated highlight line that moves under the active tab - Now properly positioned */}
      <div 
        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 rounded" 
        style={indicatorStyle}
      />
    </div>
  );
};

export default ProfileTabs;