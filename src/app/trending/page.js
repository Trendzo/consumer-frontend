import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import TrendingHeader from '@/components/trending/TrendingHeader';
import TrendingGrid from '@/components/trending/TrendingGrid';
import TrendingCategories from '@/components/trending/TrendingCategories';
import TrendingHashtags from '@/components/trending/TrendingHashtags';

export const metadata = {
  title: 'Trending Now | Trendzo - Fashion Delivered in 60 Minutes',
  description: 'Discover trending fashion items with 60-minute delivery from your favorite stores.',
};

export default function TrendingPage() {
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-16">
        <TrendingHeader />
        
        <TrendingCategories />
        
        {/* <TrendingHashtags /> */}
        
        <section className="mt-6">
          <TrendingGrid />
        </section>
      </Container>
    </>
  );
}