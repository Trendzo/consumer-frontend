import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import CartHeader from '@/components/cart/CartHeader';
import CartItems from '@/components/cart/CartItems';
import CartSummary from '@/components/cart/CartSummary';
import WishlistSection from '@/components/cart/WishlistSection';
import PromoCodeInput from '@/components/cart/PromoCodeInput';
import DeliveryOptions from '@/components/cart/DeliveryOptions';
import RecommendedItems from '@/components/cart/RecommendedItems';

export const metadata = {
  title: 'Your Cart | Trendzo - Fashion Delivered in 60 Minutes',
  description: 'View your cart and checkout with 60-minute delivery from your favorite stores.',
};

export default function CartPage() {
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-20 pt-2">
        <CartHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main cart section - takes 2/3 on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <CartItems />
            
            <PromoCodeInput />
            
            <DeliveryOptions />
            
            {/* Only show on mobile */}
            <div className="lg:hidden">
              <CartSummary />
            </div>
            
            <WishlistSection />
          </div>
          
          {/* Cart summary - takes 1/3 on large screens */}
          <div className="hidden lg:block">
            <CartSummary />
          </div>
        </div>
        
        <section className="my-12">
          <h2 className="text-2xl font-display font-bold mb-6">Recommended For You</h2>
          <RecommendedItems />
        </section>
      </Container>
    </>
  );
}