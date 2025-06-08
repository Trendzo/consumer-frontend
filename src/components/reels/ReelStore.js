'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ReelStoreContext = createContext();

// Mock data for reels
const mockReels = [
  {
    id: 1,
    videoUrl: '/videos/1.mp4',
    posterUrl: '/images/demo-products/reel-1.jpg',
    title: 'Summer Essentials Collection',
    product: {
      id: 101,
      name: 'Oversized Cotton Tee',
      price: 1299,
      originalPrice: 1999,
      store: 'Zara',
      deliveryTime: '25 min',
    },
    user: {
      name: 'FashionDaily',
      avatar: '/images/demo-products/avatar-1.jpg',
    },
    tags: ['SummerStyle', 'Minimalist', 'Casual'],
    likes: 4258,
    views: '23.8k',
  },
  {
    id: 2,
    videoUrl: '/videos/2.mp4',
    posterUrl: '/images/demo-products/reel-2.jpg',
    title: 'Street Style Lookbook 2025',
    product: {
      id: 102,
      name: 'Cargo Pants - Olive',
      price: 2499,
      originalPrice: 3499,
      store: 'H&M',
      deliveryTime: '30 min',
    },
    user: {
      name: 'StyleCraze',
      avatar: '/images/demo-products/avatar-2.jpg',
    },
    tags: ['StreetStyle', 'UrbanFashion', 'Trending'],
    likes: 8921,
    views: '51.3k',
  },
  {
    id: 3,
    videoUrl: '/videos/3.mp4',
    posterUrl: '/images/demo-products/reel-3.jpg',
    title: 'Office Wear Inspiration',
    product: {
      id: 103,
      name: 'Linen Blend Blazer',
      price: 4999,
      store: 'Mango',
      deliveryTime: '45 min',
    },
    user: {
      name: 'WorkChic',
      avatar: '/images/demo-products/avatar-3.jpg',
    },
    tags: ['OfficeLook', 'Professional', 'Elegant'],
    likes: 5127,
    views: '32.4k',
  },
  {
    id: 4,
    videoUrl: '/videos/4.mp4',
    posterUrl: '/images/demo-products/reel-4.jpg',
    title: 'Weekend Casual Outfits',
    product: {
      id: 104,
      name: 'Distressed Denim Jeans',
      price: 3299,
      store: 'Levi\'s',
      deliveryTime: '30 min',
    },
    user: {
      name: 'TrendHunter',
      avatar: '/images/demo-products/avatar-4.jpg',
    },
    tags: ['WeekendStyle', 'Casual', 'Denim'],
    likes: 7435,
    views: '41.9k',
  },
  {
    id: 5,
    videoUrl: '/videos/5.mp4',
    posterUrl: '/images/demo-products/reel-5.jpg',
    title: 'Accessorize Like a Pro',
    product: {
      id: 105,
      name: 'Minimalist Gold Necklace',
      price: 1499,
      store: 'Accessorize',
      deliveryTime: '35 min',
    },
    user: {
      name: 'GlamGuide',
      avatar: '/images/demo-products/avatar-5.jpg',
    },
    tags: ['Accessories', 'Jewelry', 'Minimalist'],
    likes: 6512,
    views: '37.2k',
  },
  {
    id: 6,
    videoUrl: '/videos/6.mp4',
    posterUrl: '/images/demo-products/reel-2.jpg',
    title: 'Party Ready Outfits',
    product: {
      id: 106,
      name: 'Sequin Mini Dress',
      price: 4999,
      store: 'Zara',
      deliveryTime: '25 min',
    },
    user: {
      name: 'NightlifeStyle',
      avatar: '/images/demo-products/avatar-1.jpg',
    },
    tags: ['PartyWear', 'NightOut', 'Glam'],
    likes: 8765,
    views: '48.6k',
  },
  {
    id: 7,
    videoUrl: '/videos/7.mp4',
    posterUrl: '/images/demo-products/reel-3.jpg',
    title: 'Athleisure Outfit Ideas',
    product: {
      id: 107,
      name: 'Performance Leggings',
      price: 2799,
      originalPrice: 3499,
      store: 'Nike',
      deliveryTime: '35 min',
    },
    user: {
      name: 'FitFashion',
      avatar: '/images/demo-products/avatar-4.jpg',
    },
    tags: ['Athleisure', 'SportyChic', 'Comfortable'],
    likes: 5932,
    views: '29.6k',
  },
  {
    id: 8,
    videoUrl: '/videos/8.mp4',
    posterUrl: '/images/demo-products/reel-4.jpg',
    title: 'Beach Vacation Essentials',
    product: {
      id: 108,
      name: 'Linen Beach Shirt',
      price: 1899,
      store: 'H&M',
      deliveryTime: '30 min',
    },
    user: {
      name: 'TravelChic',
      avatar: '/images/demo-products/avatar-5.jpg',
    },
    tags: ['BeachWear', 'Vacation', 'Summer'],
    likes: 7124,
    views: '33.9k',
  }
];

// Provider component
export function ReelStoreProvider({ children }) {
  const [reels, setReels] = useState(mockReels);
  const [wishlist, setWishlist] = useState([]);
  const [viewedReels, setViewedReels] = useState([]);
  
  // Add to wishlist
  const addToWishlist = (reelId) => {
    const reel = reels.find(r => r.id === reelId);
    if (reel && !wishlist.some(item => item.id === reelId)) {
      setWishlist([...wishlist, reel]);
      
      // Store in local storage
      try {
        const storedWishlist = JSON.parse(localStorage.getItem('trendzo-wishlist') || '[]');
        localStorage.setItem('trendzo-wishlist', JSON.stringify([...storedWishlist, reelId]));
      } catch (error) {
        console.error('Failed to save wishlist to localStorage:', error);
      }
    }
  };
  
  // Remove from wishlist
  const removeFromWishlist = (reelId) => {
    setWishlist(wishlist.filter(item => item.id !== reelId));
    
    // Update local storage
    try {
      const storedWishlist = JSON.parse(localStorage.getItem('trendzo-wishlist') || '[]');
      localStorage.setItem('trendzo-wishlist', 
        JSON.stringify(storedWishlist.filter(id => id !== reelId)));
    } catch (error) {
      console.error('Failed to update wishlist in localStorage:', error);
    }
  };
  
  // Mark reel as viewed
  const markAsViewed = (reelId) => {
    if (!viewedReels.includes(reelId)) {
      setViewedReels([...viewedReels, reelId]);
    }
  };
  
  // Check if reel is in wishlist
  const isInWishlist = (reelId) => {
    return wishlist.some(item => item.id === reelId);
  };
  
  // Fetch wishlist from local storage on mount
  useEffect(() => {
    try {
      const storedWishlist = JSON.parse(localStorage.getItem('trendzo-wishlist') || '[]');
      if (storedWishlist.length > 0) {
        const wishlistItems = reels.filter(reel => storedWishlist.includes(reel.id));
        setWishlist(wishlistItems);
      }
    } catch (error) {
      console.error('Failed to load wishlist from localStorage:', error);
    }
  }, []);
  
  // Values to be provided by context
  const value = {
    reels,
    wishlist,
    viewedReels,
    addToWishlist,
    removeFromWishlist,
    markAsViewed,
    isInWishlist
  };
  
  return (
    <ReelStoreContext.Provider value={value}>
      {children}
    </ReelStoreContext.Provider>
  );
}

// Custom hook to use the store
export function useReelStore() {
  const context = useContext(ReelStoreContext);
  if (context === undefined) {
    throw new Error('useReelStore must be used within a ReelStoreProvider');
  }
  return context;
}