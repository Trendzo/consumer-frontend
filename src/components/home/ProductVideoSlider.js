'use client';

import { useRef, useState } from 'react';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import Modal from '@/components/ui/Modal'; // Assuming you have this

const ProductVideoSlider = () => {
  const scrollRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { id: 1, videoUrl: '/videos/1.mp4' },
    { id: 2, videoUrl: '/videos/2.mp4' },
    { id: 3, videoUrl: '/videos/3.mp4' },
    { id: 4, videoUrl: '/videos/4.mp4' },
    { id: 5, videoUrl: '/videos/5.mp4' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="my-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-display font-bold">Fashion Reels</h2>
        <Link href="/reels" className="text-primary text-sm font-medium">
          View All
        </Link>
      </div>

      <div className="relative">
        <div className="flex items-stretch gap-4 overflow-x-auto pb-2 scrollbar-none" ref={scrollRef}>
          {videos.map((video) => (
            <div key={video.id} className="w-64 flex-shrink-0" onClick={() => setActiveVideo(video)}>
              <Card variant="glass" className="h-96 overflow-hidden cursor-pointer">
                <div className="relative h-full w-full">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>

                  {/* Mute Icon */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/40 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10" onClick={() => scroll('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center z-10" onClick={() => scroll('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Video Modal */}
          {activeVideo && (
            <Modal onClose={() => setActiveVideo(null)}>
              <div className="relative">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  loop
                  className="w-full h-auto object-cover"
                />

                <Link
                  href="/reels"
                  className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-xs px-3 py-1 rounded-full shadow hover:scale-105 transition-transform"
                >
                  Show More
                </Link>
              </div>
            </Modal>
          )}

    </section>
  );
};

export default ProductVideoSlider;
