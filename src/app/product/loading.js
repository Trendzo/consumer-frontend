import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import Card from '@/components/ui/Card';

export default function Loading() {
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-20 pt-2">
        {/* Header skeleton */}
        <div className="my-6">
          <div className="h-10 w-52 glass animate-pulse rounded-lg mb-2"></div>
          <div className="h-5 w-64 glass animate-pulse rounded-lg"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main cart section - takes 2/3 on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart items skeleton */}
            <Card variant="glass" className="p-4">
              {/* Cart items header */}
              <div className="flex justify-between items-center mb-6">
                <div className="h-6 w-32 glass animate-pulse rounded-lg"></div>
                <div className="h-6 w-24 glass animate-pulse rounded-lg"></div>
              </div>
              
              {/* Cart items */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex py-4 border-b border-white/10 last:border-0">
                  <div className="h-24 w-24 glass animate-pulse rounded-xl"></div>
                  
                  <div className="flex-1 ml-4">
                    <div className="h-5 w-32 glass animate-pulse rounded-lg mb-2"></div>
                    <div className="h-4 w-24 glass animate-pulse rounded-lg mb-2"></div>
                    <div className="h-4 w-16 glass animate-pulse rounded-lg"></div>
                  </div>
                  
                  <div className="ml-4">
                    <div className="h-6 w-20 glass animate-pulse rounded-lg"></div>
                  </div>
                </div>
              ))}
            </Card>
            
            {/* Promo code skeleton */}
            <Card variant="glass" className="p-4">
              <div className="h-6 w-40 glass animate-pulse rounded-lg mb-4"></div>
              <div className="h-12 w-full glass animate-pulse rounded-full"></div>
            </Card>
            
            {/* Delivery options skeleton */}
            <Card variant="glass" className="p-4">
              <div className="h-6 w-40 glass animate-pulse rounded-lg mb-4"></div>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="h-24 glass animate-pulse rounded-xl"></div>
                ))}
              </div>
            </Card>
            
            {/* Wishlist skeleton (mobile) */}
            <div className="lg:hidden">
              <Card variant="glass" className="p-4">
                <div className="h-6 w-40 glass animate-pulse rounded-lg mb-4"></div>
                <div className="h-32 w-full glass animate-pulse rounded-xl"></div>
              </Card>
            </div>
            
            {/* Wishlist skeleton */}
            <Card variant="glass" className="p-4">
              <div className="h-6 w-40 glass animate-pulse rounded-lg mb-4"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="h-48 glass animate-pulse rounded-xl"></div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Cart summary skeleton */}
          <div className="hidden lg:block">
            <Card variant="glass" className="p-4">
              <div className="h-6 w-40 glass animate-pulse rounded-lg mb-6"></div>
              
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex justify-between items-center mb-4">
                  <div className="h-4 w-32 glass animate-pulse rounded-lg"></div>
                  <div className="h-4 w-16 glass animate-pulse rounded-lg"></div>
                </div>
              ))}
              
              <div className="my-4 border-t border-white/10 pt-4">
                <div className="flex justify-between items-center">
                  <div className="h-6 w-32 glass animate-pulse rounded-lg"></div>
                  <div className="h-6 w-24 glass animate-pulse rounded-lg"></div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="h-12 w-full glass animate-pulse rounded-lg"></div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Recommended items skeleton */}
        <div className="my-12">
          <div className="h-8 w-64 glass animate-pulse rounded-lg mb-6"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-64 glass animate-pulse rounded-xl"></div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}