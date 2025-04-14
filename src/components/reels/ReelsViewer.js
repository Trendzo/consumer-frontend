'use client';

import { useState, useRef, useEffect } from 'react';
import ReelCard from './ReelCard';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { useReelStore } from './ReelStore';
import WishlistDrawer from './WishlistDrawer';

const ReelsViewer = () => {
  const { reels, wishlist, addToWishlist, markAsViewed } = useReelStore();
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [reelHistory, setReelHistory] = useState([]);
  const [showLikeEffect, setShowLikeEffect] = useState(false);
  const [showRejectEffect, setShowRejectEffect] = useState(false);
  const [swipeAnimation, setSwipeAnimation] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [hasShownInstructions, setHasShownInstructions] = useState(false);
  const reelsContainerRef = useRef(null);
  
  // Handle swipe gesture (using mobile-friendly navigation)
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      // Reject (skip to next)
      handleReject();
    } else if (direction === 'right') {
      // Like/add to wishlist
      handleLike();
    }
  };
  
  // Function to handle like/add to wishlist
  const handleLike = () => {
    // Add current reel to wishlist
    const currentReel = reels[currentReelIndex];
    addToWishlist(currentReel.id);
    
    // Show success animation
    setShowLikeEffect(true);
    setSwipeAnimation('right');
    
    // Reset animation after a delay
    setTimeout(() => {
      setShowLikeEffect(false);
      setSwipeAnimation(null);
      
      // Move to next reel
      moveToNextReel();
    }, 500);
  };
  
  // Function to handle reject
  const handleReject = () => {
    // Show reject animation
    setShowRejectEffect(true);
    setSwipeAnimation('left');
    
    // Reset animation after a delay
    setTimeout(() => {
      setShowRejectEffect(false);
      setSwipeAnimation(null);
      
      // Move to next reel
      moveToNextReel();
    }, 500);
  };
  
  // Move to next reel
  const moveToNextReel = () => {
    // Mark current reel as viewed
    markAsViewed(reels[currentReelIndex].id);
    
    // Add current index to history
    setReelHistory([...reelHistory, currentReelIndex]);
    
    // Go to next reel (cycle back to start if at end)
    setCurrentReelIndex((prev) => (prev + 1) % reels.length);
  };
  
  // Go back to previous reel
  const goToPreviousReel = () => {
    if (reelHistory.length > 0) {
      // Pop the last item from history
      const newHistory = [...reelHistory];
      const previousIndex = newHistory.pop();
      
      // Update state
      setReelHistory(newHistory);
      setCurrentReelIndex(previousIndex);
    }
  };
  
  // Toggle wishlist drawer
  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };
  
  // Current reel
  const currentReel = reels[currentReelIndex];
  
  return (
    <div className="flex flex-col items-center">
      {/* Main reels viewer */}
      <div 
        ref={reelsContainerRef}
        className="w-full max-w-md relative h-[80vh] rounded-2xl overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReel.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full h-full ${swipeAnimation === 'right' ? 'animate-swipe-right' : swipeAnimation === 'left' ? 'animate-swipe-left' : ''}`}
          >
            <ReelCard 
              reel={currentReel} 
              onSwipe={handleSwipe}
              showInstructions={!hasShownInstructions}
              onInstructionsShown={() => setHasShownInstructions(true)}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Like effect overlay */}
        {showLikeEffect && (
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
            <div className="animate-float-up">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Reject effect overlay */}
        {showRejectEffect && (
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
            <div className="animate-float-up">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      <div className="mt-6 w-full max-w-md flex justify-between">
        <Button 
          variant="glass" 
          size="lg"
          className="flex items-center"
          onClick={goToPreviousReel}
          disabled={reelHistory.length === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          Previous
        </Button>
        
        <Button 
          variant="glass" 
          size="lg"
          className="flex items-center"
          onClick={() => handleSwipe('left')}
        >
          Skip
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
      
      {/* Wishlist counter and button */}
      {wishlist.length > 0 && (
        <div className="mt-4 w-full max-w-md flex justify-center">
          <Button 
            variant="primary" 
            size="md"
            className="flex items-center px-6"
            onClick={toggleWishlist}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="font-medium">View Wishlist</span>
            <Badge 
              variant="accent" 
              size="sm" 
              className="ml-2"
            >
              {wishlist.length}
            </Badge>
          </Button>
        </div>
      )}
      
      {/* Wishlist Drawer */}
      <WishlistDrawer 
        isOpen={isWishlistOpen} 
        onClose={() => setIsWishlistOpen(false)} 
      />
    </div>
  );
};

export default ReelsViewer;