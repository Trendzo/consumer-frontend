import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative py-10 my-4 overflow-hidden">
      <div className="glass rounded-2xl overflow-hidden">
        <div className="relative py-12 px-6 md:px-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/20 blur-2xl" />
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Fashion
              </span> Delivered in 
              <span className="text-accent"> 60 Min</span>
            </h1>
            
            <p className="text-lg text-text-secondary max-w-xl mb-8">
              Discover the latest trends from local stores and get them delivered to your doorstep within 60 minutes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Shop Now
              </Button>
              
              <Button variant="glass" size="lg">
                Find Stores
              </Button>
            </div>
            
            <div className="flex items-center mt-8 space-x-8">
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-display font-bold">100+</span>
                <span className="text-sm text-text-secondary">Local Stores</span>
              </div>
              
              <div className="w-px h-10 bg-white/10"></div>
              
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-display font-bold">10k+</span>
                <span className="text-sm text-text-secondary">Products</span>
              </div>
              
              <div className="w-px h-10 bg-white/10"></div>
              
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-display font-bold">60min</span>
                <span className="text-sm text-text-secondary">Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;