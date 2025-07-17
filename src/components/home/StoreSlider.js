'use client';

import { useRef } from 'react';
import Card from '@/components/ui/Card';
import Link from 'next/link';

const StoreSlider = () => {
  const scrollRef = useRef(null);
  
  const stores = [
    { id: 1, name: 'Zara', deliveryTime: '25 min', logo: 'https://thumbs.dreamstime.com/b/zara-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-210444071.jpg' },
    { id: 2, name: 'H&M', deliveryTime: '30 min', logo: 'https://seeklogo.com/images/H/h-m-logo-89DCA36A67-seeklogo.com.png' },
    { id: 3, name: 'Mango', deliveryTime: '45 min', logo: 'https://img.businessoffashion.com/resizer/v2/https%3A%2F%2Fprod-bof-media.s3.eu-west-1.amazonaws.com%2Fimport%2Ffilestack%2Favatar%2Fmango.png?auth=fcba6bce04c1b43197dc013664037f736c42528f190b68822b21e2f7d15ef7cc&width=480' },
    { id: 4, name: 'Uniqlo', deliveryTime: '40 min', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/2058px-UNIQLO_logo.svg.png' },
    { id: 5, name: 'Nike', deliveryTime: '35 min', logo: 'https://thumbs.dreamstime.com/b/nike-sport-clothing-brand-logo-editorial-image-vinnitsia-ukraine-june-nike-sport-clothing-brand-logo-editorial-image-222082882.jpg' },
    { id: 6, name: 'Adidas', deliveryTime: '35 min', logo: 'https://thumbs.dreamstime.com/b/adidas-logo-editorial-illustrative-white-background-adidas-logo-editorial-illustrative-white-background-eps-download-vector-208329055.jpg' },
    { id: 7, name: 'Levi\'s', deliveryTime: '30 min', logo: 'https://static.vecteezy.com/system/resources/previews/023/871/675/non_2x/levis-logo-brand-symbol-design-clothes-fashion-illustration-free-vector.jpg' },
    { id: 8, name: 'FabIndia', deliveryTime: '50 min', logo: 'https://content.jdmagicbox.com/comp/haldwani/i6/9999p5946.5946.171122124842.u4i6/catalogue/fabindia-haldwani-ho-haldwani-fabindia-0kspefljn4.jpg' },
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative">
      <div 
        className="flex items-center overflow-x-auto py-2 scrollbar-none" 
        ref={scrollRef}
      >
        {stores.map((store) => (
          <Link href={`/product?brand=${encodeURIComponent(store.name)}`} key={store.id}>
          <div key={store.id} className="px-2 w-40 flex-shrink-0">
            <Card variant="neomorph" hover className="p-4 h-36 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full neomorph flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={store.logo} 
                    alt={`${store.name} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-medium text-center">{store.name}</h3>
              <p className="text-xs text-text-secondary">{store.deliveryTime}</p>
            </Card>
          </div>
          </Link>
        ))}
      </div>
      
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 neomorph rounded-full flex items-center justify-center z-10"
        onClick={() => scroll('left')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 neomorph rounded-full flex items-center justify-center z-10"
        onClick={() => scroll('right')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default StoreSlider;