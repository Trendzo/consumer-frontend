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
          <ProductsGrid products={products} />
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

  // Mock data
  const products = [
    {
      id: 1,
      name: "Oversized Cotton T-shirt",
      price: 1299,
      originalPrice: 1999,
      store: "Zara",
      deliveryTime: "25 min",
      rating: 4.7,
      isNew: true,
      images: ["/images/2.jpg", "/images/3.jpg"],
    },
    {
      id: 2,
      name: "High Rise Skinny Jeans",
      price: 2499,
      store: "H&M",
      deliveryTime: "30 min",
      rating: 4.3,
      isNew: false,
      images: ["/images/4.jpg", "/images/5.jpg"],
    },
    {
      id: 3,
      name: "Floral Print Maxi Dress",
      price: 3599,
      originalPrice: 4999,
      store: "Mango",
      deliveryTime: "45 min",
      rating: 4.5,
      isNew: true,
      images: ["/images/6.jpg", "/images/7.jpg"],
    },
    {
      id: 4,
      name: "Air Max Sneakers",
      price: 7999,
      store: "Nike",
      deliveryTime: "35 min",
      rating: 4.8,
      isNew: false,
      images: ["/images/8.jpg", "/images/9.jpg"],
    },
  ];