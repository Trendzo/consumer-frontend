import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const TrendingNow = () => {
  // Mock data
  const trendingItems = [
    {
      id: 1,
      name: 'Cargo Pants',
      count: '4.2k searches',
      image: '/images/demo-products/trend-1.jpg',
    },
    {
      id: 2,
      name: 'Chunky Sneakers',
      count: '3.8k searches',
      image: '/images/demo-products/trend-2.jpg',
    },
    {
      id: 3,
      name: 'Maxi Dresses',
      count: '3.5k searches',
      image: '/images/demo-products/trend-3.jpg',
    },
    {
      id: 4,
      name: 'Oversized Tees',
      count: '3.1k searches',
      image: '/images/demo-products/trend-4.jpg',
    },
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {trendingItems.map((item, index) => (
        <Card
          key={item.id}
          variant="glass"
          hover
          className="relative h-36 overflow-hidden"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-darker/90 to-transparent" />
          
          <div className="absolute left-3 top-3">
            <Badge variant="primary" size="sm">#{index + 1}</Badge>
          </div>
          
          <div className="absolute left-0 right-0 bottom-0 p-3">
            <h3 className="font-bold text-white">{item.name}</h3>
            <p className="text-xs text-text-secondary">{item.count}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TrendingNow;