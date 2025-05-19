import ProductCard from './ProductCard';

const ProductsGrid = () => {
  // Mock data
  const products = [
    {
      id: 1,
      name: 'Oversized Cotton T-shirt',
      price: 1299,
      originalPrice: 1999,
      store: 'Zara',
      deliveryTime: '25 min',
      rating: 4.7,
      isNew: true,
      images: [
        '/images/2.jpg',
        '/images/3.jpg',
      ],
    },
    {
      id: 2,
      name: 'High Rise Skinny Jeans',
      price: 2499,
      store: 'H&M',
      deliveryTime: '30 min',
      rating: 4.3,
      isNew: false,
      images: [
        '/images/4.jpg',
        '/images/5.jpg',
      ],
    },
    {
      id: 3,
      name: 'Floral Print Maxi Dress',
      price: 3599,
      originalPrice: 4999,
      store: 'Mango',
      deliveryTime: '45 min',
      rating: 4.5,
      isNew: true,
      images: [
        '/images/6.jpg',
        '/images/7.jpg',
      ],
    },
    {
      id: 4,
      name: 'Air Max Sneakers',
      price: 7999,
      store: 'Nike',
      deliveryTime: '35 min',
      rating: 4.8,
      isNew: false,
      images: [
        '/images/8.jpg',
        '/images/9.jpg',
      ],
    },
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;