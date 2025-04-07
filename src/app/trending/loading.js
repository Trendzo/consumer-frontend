import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import Card from '@/components/ui/Card';

export default function Loading() {
  // Create an array of 8 elements for the loading skeleton
  const skeletonItems = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-16">
        {/* Header skeleton */}
        <div className="my-6">
          <div className="h-10 w-64 glass animate-pulse rounded-lg mb-6"></div>
          
          <div className="w-full h-12 glass animate-pulse rounded-full mb-6"></div>
          
          <div className="flex items-center overflow-x-auto scrollbar-none pb-2">
            <div className="glass rounded-full px-1 py-1 flex items-center">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-10 w-24 mx-1 animate-pulse glass rounded-full"></div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6 mb-2">
            <div className="h-6 w-48 glass animate-pulse rounded-lg"></div>
            
            <div className="h-10 w-36 glass animate-pulse rounded-full"></div>
          </div>
        </div>
        
        {/* Categories skeleton */}
        <div className="relative my-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index}
                className="glass rounded-xl py-3 px-4 w-32 h-20 animate-pulse flex-shrink-0"
              ></div>
            ))}
          </div>
        </div>
        
        {/* Hashtags skeleton */}
        <div className="relative my-6">
          <div className="h-8 w-48 glass animate-pulse rounded-lg mb-4"></div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div 
                key={index}
                className="glass rounded-xl py-2 px-4 w-40 h-16 animate-pulse flex-shrink-0"
              ></div>
            ))}
          </div>
        </div>
        
        {/* Items grid skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {skeletonItems.map((index) => (
            <Card 
              key={index}
              variant="glass" 
              className="overflow-hidden"
            >
              <div className="h-64 animate-pulse"></div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div className="h-4 w-16 glass animate-pulse rounded-full"></div>
                  <div className="h-4 w-16 glass animate-pulse rounded-full"></div>
                </div>
                <div className="h-6 w-full glass animate-pulse rounded-lg mb-3"></div>
                <div className="h-6 w-24 glass animate-pulse rounded-lg"></div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="h-6 w-16 glass animate-pulse rounded-full"></div>
                  <div className="h-6 w-24 glass animate-pulse rounded-full"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}