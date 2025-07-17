'use client';

import { useEffect, useRef } from 'react';

const Modal = ({ children, onClose }) => {
  const overlayRef = useRef();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md w-full bg-black">
        {children}
      </div>
    </div>
  );
};

export default Modal;
