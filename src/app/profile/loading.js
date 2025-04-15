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
        {/* Profile header skeleton */}
        <Card variant="glass" className="relative mt-4 rounded-3xl overflow-hidden p-6 pt-16">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 glass animate-pulse rounded-full"></div>
          </div>
          
          <div className="text-center mt-10">
            <div className="h-6 w-40 mx-auto glass animate-pulse rounded-lg mb-2"></div>
            <div className="h-4 w-32 mx-auto glass animate-pulse rounded-lg"></div>
          </div>
          
          <div className="mt-6 flex justify-center gap-4">
            <div className="h-10 w-24 glass animate-pulse rounded-full"></div>
            <div className="h-10 w-24 glass animate-pulse rounded-full"></div>
          </div>
        </Card>
        
        {/* Stats skeleton */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card 
              key={index}
              variant="glass" 
              className="p-4 text-center animate-pulse"
            >
              <div className="h-10 w-10 mx-auto glass rounded-full mb-3"></div>
              <div className="h-5 w-16 mx-auto glass rounded-lg mb-2"></div>
              <div className="h-4 w-24 mx-auto glass rounded-lg"></div>
            </Card>
          ))}
        </div>
        
        {/* Tabs skeleton */}
        <div className="mt-8">
          <div className="flex items-center overflow-x-auto scrollbar-none mb-6">
            <div className="glass rounded-full px-1 py-1 flex items-center">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-10 w-24 mx-1 animate-pulse glass rounded-full"></div>
              ))}
            </div>
          </div>
          
          {/* Orders skeleton */}
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} variant="glass" className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-5 w-32 glass animate-pulse rounded-lg"></div>
                  <div className="h-5 w-24 glass animate-pulse rounded-lg"></div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-20 w-20 glass animate-pulse rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-5 w-40 glass animate-pulse rounded-lg mb-2"></div>
                    <div className="h-4 w-32 glass animate-pulse rounded-lg mb-2"></div>
                    <div className="h-4 w-24 glass animate-pulse rounded-lg"></div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <div className="h-8 w-24 glass animate-pulse rounded-lg"></div>
                  <div className="h-8 w-24 glass animate-pulse rounded-lg"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}