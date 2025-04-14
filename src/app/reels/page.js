import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import ReelsViewer from '@/components/reels/ReelsViewer';
import ReelsCategories from '@/components/reels/ReelsCategories';

export const metadata = {
  title: 'Fashion Reels | Trendzo - Fashion Delivered in 60 Minutes',
  description: 'Explore fashion reels and get inspired with 60-minute delivery from your favorite stores.',
};

export default function ReelsPage() {
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-20 pt-2">
        <div className="my-4 mb-6">
          <h1 className="text-3xl font-display font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              Fashion Reels
            </span>
          </h1>
          <p className="text-text-secondary mt-1">
            Swipe through fashion inspiration and shop the look
          </p>
        </div>
        
        <ReelsCategories />
        
        <ReelsViewer />
      </Container>
    </>
  );
}