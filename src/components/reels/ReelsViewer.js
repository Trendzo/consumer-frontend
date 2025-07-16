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
  const [isTransitioning, setIsTransitioning] = useState(false); // New state to track transitions
  const reelsContainerRef = useRef(null);
  
  // Handle swipe gesture (using mobile-friendly navigation)
  const handleSwipe = (direction) => {
    if (isTransitioning) return; // Prevent multiple swipes during transition
    
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
    if (isTransitioning) return; // Prevent action during transition
    setIsTransitioning(true); // Start transition
    
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
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 500);
  };
  
  // Function to handle reject
  const handleReject = () => {
    if (isTransitioning) return; // Prevent action during transition
    setIsTransitioning(true); // Start transition
    
    // Show reject animation
    setShowRejectEffect(true);
    setSwipeAnimation('left');
    
    // Reset animation after a delay
    setTimeout(() => {
      setShowRejectEffect(false);
      setSwipeAnimation(null);
      
      // Move to next reel
      moveToNextReel();
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
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
    if (isTransitioning) return; // Prevent action during transition
    
    if (reelHistory.length > 0) {
      setIsTransitioning(true); // Start transition
      
      // Pop the last item from history
      const newHistory = [...reelHistory];
      const previousIndex = newHistory.pop();
      
      // Update state
      setReelHistory(newHistory);
      setCurrentReelIndex(previousIndex);
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };
  
  // Toggle wishlist drawer
  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };
  
  // Current reel
  const currentReel = reels[currentReelIndex];
  
  return (
    <div className="fixed top-0 left-0 right-0 bottom-16 z-30 overflow-hidden">
      <div
          ref={reelsContainerRef}
          className="relative max-w-md mx-auto w-full h-full overflow-hidden"
        >
        {/* Reel Viewer */}
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
              isTransitioning={isTransitioning}
              className='!rounded-none'
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating Previous Button */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <Button 
            variant="glass" 
            size="icon"
            onClick={goToPreviousReel}
            disabled={reelHistory.length === 0 || isTransitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7" />
            </svg>
          </Button>
        </div>

        {/* Floating Skip Button */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <Button 
            variant="glass" 
            size="icon"
            onClick={() => handleSwipe('left')}
            disabled={isTransitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        {/* Floating Wishlist Button */}
        {wishlist.length > 0 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-gray-200/10 backdrop-blur-sm border border-white/20 rounded-full px-2 py-1">
            <Button 
              variant="primary" 
              size="sm"
              onClick={toggleWishlist}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Wishlist ({wishlist.length})
            </Button>
          </div>
        )}

        {/* Like & Reject Effects */}
        {showLikeEffect && (
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
            <div className="animate-float-up">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}

        {showRejectEffect && (
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
            <div className="animate-float-up">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        <WishlistDrawer 
          isOpen={isWishlistOpen} 
          onClose={() => setIsWishlistOpen(false)} 
          className='max-w-md w-full'
        />
      </div>
    </div>
    
  );
};

export default ReelsViewer;