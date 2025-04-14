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
        <div className="my-4 mb-6">
          <div className="h-10 w-52 glass animate-pulse rounded-lg mb-2"></div>
          <div className="h-5 w-64 glass animate-pulse rounded-lg"></div>
        </div>
        
        {/* Reels loading skeleton */}
        <div className="flex flex-col items-center">
          <Card variant="glass" className="w-full max-w-md h-[80vh] rounded-2xl overflow-hidden relative animate-pulse">
            <div className="absolute bottom-0 left-0 right-0 glass p-4">
              <div className="h-6 w-48 glass animate-pulse rounded-lg mb-3"></div>
              <div className="h-4 w-24 glass animate-pulse rounded-lg mb-3"></div>
              <div className="h-4 w-36 glass animate-pulse rounded-lg mb-2"></div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="h-6 w-16 glass animate-pulse rounded-full"></div>
                <div className="h-6 w-24 glass animate-pulse rounded-full"></div>
                <div className="h-6 w-20 glass animate-pulse rounded-full"></div>
              </div>
            </div>
            
            {/* Floating action buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <div className="w-12 h-12 glass animate-pulse rounded-full"></div>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <div className="w-12 h-12 glass animate-pulse rounded-full"></div>
            </div>
          </Card>
          
          <div className="mt-6 w-full max-w-md">
            <div className="flex justify-between">
              <div className="h-10 w-24 glass animate-pulse rounded-full"></div>
              <div className="h-10 w-24 glass animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}