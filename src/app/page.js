import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import HeroSection from '@/components/home/HeroSection';
import CategoryNav from '@/components/home/CategoryNav';
import StoreSlider from '@/components/home/StoreSlider';
import ProductVideoSlider from '@/components/home/ProductVideoSlider';
import ProductsGrid from '@/components/home/ProductsGrid';
import ReelSection from '@/components/home/ReelSection';
import PromoBar from '@/components/home/PromoBar';
import TrendingNow from '@/components/home/TrendingNow';

export default function Home() {
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container>
        <HeroSection />
        
        <CategoryNav />
        
        <section className="my-8">
          <h2 className="text-2xl font-display font-bold mb-4">Popular Stores</h2>
          <StoreSlider />
        </section>
        
        <ProductVideoSlider />
        
        <PromoBar />
        
        <section className="my-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-display font-bold">New Arrivals</h2>
            <a href="/products" className="text-primary text-sm font-medium">View All</a>
          </div>
          <ProductsGrid />
        </section>
        
        <section className="my-8">
          <h2 className="text-2xl font-display font-bold mb-4">Style Inspiration</h2>
          <ReelSection />
        </section>
        
        <section className="my-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-display font-bold">#TrendingNow</h2>
            <a href="/trending" className="text-primary text-sm font-medium">Explore</a>
          </div>
          <TrendingNow />
        </section>
      </Container>
    </>
  );
}