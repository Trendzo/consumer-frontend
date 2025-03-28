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
        '/images/demo-products/tshirt-1.jpg',
        '/images/demo-products/tshirt-2.jpg',
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
        '/images/demo-products/jeans-1.jpg',
        '/images/demo-products/jeans-2.jpg',
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
        '/images/demo-products/dress-1.jpg',
        '/images/demo-products/dress-2.jpg',
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
        '/images/demo-products/shoes-1.jpg',
        '/images/demo-products/shoes-2.jpg',
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