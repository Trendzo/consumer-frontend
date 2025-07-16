'use client';

import { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useReelStore } from './ReelStore';

const ReelCard = ({ 
  reel, 
  onSwipe, 
  showInstructions = false,
  onInstructionsShown = () => {},
  isTransitioning = false // Add transitioning prop with default
}) => {
  const { isInWishlist } = useReelStore();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);
  
  // Hide instructions after delay and notify parent
  useEffect(() => {
    if (showInstructions) {
      const timer = setTimeout(() => {
        onInstructionsShown(); // Call the callback to notify parent
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showInstructions, onInstructionsShown]);
  
  // Set up swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => !isTransitioning && onSwipe('left'),  // Reject, only if not transitioning
    onSwipedRight: () => !isTransitioning && onSwipe('right'), // Like, only if not transitioning
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });
  
  // Initialize video playback and progress tracking
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      videoElement.muted = isMuted;
      
      if (isPlaying && !isTransitioning) {
        const playPromise = videoElement.play();
        
        // Handle play promise properly to avoid the error
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Auto-play was prevented, handle silently
            console.log("Auto-play prevented:", error);
          });
        }
        
        // Set up progress tracking
        progressIntervalRef.current = setInterval(() => {
          if (videoElement.duration) {
            setProgress((videoElement.currentTime / videoElement.duration) * 100);
          }
        }, 100);
      } else {
        // Pause video during transitions to prevent errors
        try {
          videoElement.pause();
        } catch (e) {
          // Ignore pause errors
        }
        clearInterval(progressIntervalRef.current);
      }
    }
    
    return () => {
      clearInterval(progressIntervalRef.current);
      // Ensure video is properly cleaned up on component unmount
      if (videoRef.current) {
        try {
          videoRef.current.pause();
          videoRef.current.src = ""; // Clear the source
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    };
  }, [isPlaying, isMuted, reel.id, isTransitioning]);
  
  // Toggle video play/pause
  const togglePlay = (e) => {
    e.stopPropagation();
    if (!isTransitioning) {
      setIsPlaying(!isPlaying);
    }
  };
  
  // Toggle mute/unmute
  const toggleMute = (e) => {
    e.stopPropagation();
    if (!isTransitioning) {
      setIsMuted(!isMuted);
    }
  };
  
  // Format numbers for display (e.g., 1.2k)
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };
  
  // Format price with currency
  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };
  
  // Calculate discount percentage
  const calculateDiscount = () => {
    if (!reel.product.originalPrice) return null;
    const discount = ((reel.product.originalPrice - reel.product.price) / reel.product.originalPrice) * 100;
    return Math.round(discount);
  };
  
  // Handle like action
  const handleLike = (e) => {
    e.stopPropagation();
    if (!isTransitioning) {
      onSwipe('right');
    }
  };
  
  // Handle reject action
  const handleReject = (e) => {
    e.stopPropagation();
    if (!isTransitioning) {
      onSwipe('left');
    }
  };
  
  const discountPercent = calculateDiscount();
  const inWishlist = isInWishlist(reel.id);
  
  return (
    <Card 
      variant="glass" 
      className="w-full h-full relative overflow-hidden !rounded-none"
      {...swipeHandlers}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video element */}
      <div className="absolute inset-0 bg-gray-900">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={reel.posterUrl}
          loop
          playsInline
          onClick={togglePlay}
          preload="metadata"
        >
          <source src={reel.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Top controls */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
        <button 
          className="w-10 h-10 glass rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
          onClick={toggleMute}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        <button 
          className={`w-10 h-10 glass rounded-full flex items-center justify-center opacity-80 hover:opacity-100 ${!isPlaying ? 'bg-purple-500/50' : ''}`}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      
      {/* User info */}
      <div className="absolute top-4 left-4 flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold">
            {reel.user.name.charAt(0)}
          </div>
        </div>
        <div className="ml-2">
          <div className="text-white font-medium text-sm">{reel.user.name}</div>
          <div className="text-white/70 text-xs">{reel.views} views</div>
        </div>
      </div>
      
      {/* Discount badge if available */}
      {discountPercent && (
        <div className="absolute top-16 right-4 z-10">
          <Badge variant="accent" size="md" className="font-display font-bold">
            {discountPercent}% OFF
          </Badge>
        </div>
      )}
      
      {/* Bottom information overlay */}
      <div className="absolute bottom-0 left-0 right-0 glass p-4 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-white mb-1">{reel.title}</h3>
        
        <div className="flex justify-between items-center mb-2">
          <div className="text-white text-sm font-medium">{reel.product.name}</div>
          <div className="text-purple-400 font-bold">{formatPrice(reel.product.price)}</div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-white/70 mb-4">
          <div>{reel.product.store}</div>
          <div>Delivery in {reel.product.deliveryTime}</div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {reel.tags.map((tag, index) => (
            <span 
              key={index}
              className="glass px-2 py-1 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="ml-1 text-sm">{formatNumber(reel.likes)}</span>
          </div>
          
          <Button 
            variant={inWishlist ? "accent" : "primary"}
            size="sm"
            className="py-1 px-3"
            onClick={handleLike}
            disabled={isTransitioning}
          >
            {inWishlist ? 'In Wishlist' : 'Shop now'}
          </Button>
        </div>
      </div>
      
      {/* Left/Right action buttons */}
      <div 
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/90 backdrop-blur-md border border-red-500/30 hover:bg-red-500/20 transition-all hover:scale-110"
          onClick={handleReject}
          disabled={isTransitioning}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div 
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/90 backdrop-blur-md border border-green-500/30 hover:bg-green-500/20 transition-all hover:scale-110"
          onClick={handleLike}
          disabled={isTransitioning}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
      
      {/* Swipe instructions overlay (only shown initially) */}
      {showInstructions && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="text-white text-center glass px-6 py-4 rounded-xl animate-fadeInOut">
            <div className="flex justify-between items-center gap-8 mb-2">
              <span>← Swipe left to reject</span>
              <span>Swipe right to like →</span>
            </div>
            <div className="text-xs text-white/70">Tap to pause/play</div>
          </div>
        </div>
      )}
      
      {/* Overlay during transition to prevent user interaction */}
      {isTransitioning && (
        <div className="absolute inset-0 z-30 bg-transparent"></div>
      )}
    </Card>
  );
};

export default ReelCard;