'use client';

import React, { useState, useEffect, use } from 'react';
import { Heart, Share2, Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Plus, Minus, Zap, Sparkles } from 'lucide-react';
import GlassPanels from '@/components/layout/GlassPanels';
import Header from '@/components/layout/Header';
import Image from 'next/image';

const sampleProducts = [
  {
    id: '1',
    title: 'Red Sneakers',
    subtitle: 'Fire Drop 🔥',
    price: 999,
    originalPrice: 1999,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop'
    ],
    description: "Step out in style with our Red Sneakers, crafted for comfort and impact. Perfect for daily wear or a casual outing.",
    rating: 4.8,
    reviews: 324,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Red', 'Black', 'White'],
    features: ['Premium leather', 'Cushioned sole', 'Breathable fabric', 'Durable construction'],
    inStock: true,
    fastDelivery: true,
    trending: true
  },
  {
    id: '2',
    title: 'Blue Hoodie',
    subtitle: 'Comfort Vibes 💙',
    price: 1299,
    originalPrice: 1799,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop'
    ],
    description: 'Stay warm and trendy with this Blue Hoodie made from premium fabric. Ideal for chilly evenings and cozy nights in. Main character energy fr 💯',
    rating: 4.6,
    reviews: 189,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue', 'Gray', 'Navy'],
    features: ['100% Cotton', 'Fleece lined', 'Adjustable hood', 'Kangaroo pocket'],
    inStock: true,
    fastDelivery: false,
    trending: false
  },
];


export default function ProductPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const id = params?.id || '1';
  const product = sampleProducts.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgSrc, setImgSrc] = useState(product?.images[0] || '');
  const [thumbsSrc, setThumbsSrc] = useState(product?.images || []);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setImgSrc(product.images[activeImage]);
      setThumbsSrc(product.images);
    }
  }, [product, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Product not found bestie 😔</h2>
          <p className="text-gray-400">The product you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <>
      <GlassPanels />
      <Header />

      <div className="min-h-screen pb-10 text-white">
        <div className="px-4 py-6 max-w-7xl mx-auto">
          <div className="text-sm text-gray-400 mb-6">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Home</span>
            <span className="mx-2 text-gray-600">/</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Products</span>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-white font-medium">{product.title}</span>
          </div>
        </div>

        <div className="px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 lg:min-h-[800px]">
            <div className="space-y-6 flex flex-col">
              <div className="relative group flex-1">
                <div className="h-full relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 cursor-zoom-in">
                  <Image
                    src={imgSrc}
                    alt={product.title}
                    width={600}
                    height={600}
                    unoptimized
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={() => setImgSrc('https://via.placeholder.com/600x600?text=Image+Not+Found')}
                  />

                  {product.trending && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      Trending
                    </div>
                  )}

                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full">
                    <ChevronLeft size={20} />
                  </button>

                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4 pb-2 flex-shrink-0">
                {thumbsSrc.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                      activeImage === index
                        ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900 scale-105'
                        : 'hover:scale-105 hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900'
                    }`}
                  >
                    <Image
                      src={thumb}
                      alt={`View ${index + 1}`}
                      width={70}
                      height={70}
                      unoptimized
                      className="w-full h-full object-cover"
                      onError={() => {
                        const updatedThumbs = [...thumbsSrc];
                        updatedThumbs[index] = 'https://via.placeholder.com/80x80/374151/9CA3AF?text=N/A';
                        setThumbsSrc(updatedThumbs);
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

          {/* Product Details */}
          <div className="space-y-8 flex flex-col justify-start lg:h-full">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30">
                  {product.subtitle}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      isWishlisted 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-pink-400'
                    }`}
                  >
                    <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {product.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-green-400">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {discount}% OFF
                </span>
              </div>
              <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                <Sparkles size={14} />
                You save ₹{(product.originalPrice - product.price).toLocaleString()} fr
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Size</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-900/50 text-purple-300'
                        : 'border-gray-600 hover:border-gray-500 bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Color</h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      selectedColor === color
                        ? 'border-purple-500 bg-purple-900/50 text-purple-300'
                        : 'border-gray-600 hover:border-gray-500 bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-600 rounded-xl bg-gray-800">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-700 transition-colors rounded-l-xl"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-700 transition-colors rounded-r-xl"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className={`text-sm font-medium ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                  {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 transform hover:shadow-lg hover:shadow-purple-500/25">
                Add to Cart • ₹{(product.price * quantity).toLocaleString()}
              </button>
              <button className="w-full border-2 border-purple-500 text-purple-400 py-4 rounded-xl font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105">
                Buy Now ⚡
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-900/30 rounded-xl border border-green-500/30">
                <Truck className="text-green-400" size={20} />
                <div>
                  <p className="text-sm font-medium text-green-400">Free Delivery</p>
                  <p className="text-xs text-green-300">On orders over ₹500</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
                <Shield className="text-blue-400" size={20} />
                <div>
                  <p className="text-sm font-medium text-blue-400">Secure Payment</p>
                  <p className="text-xs text-blue-300">100% Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-900/30 rounded-xl border border-orange-500/30">
                <RotateCcw className="text-orange-400" size={20} />
                <div>
                  <p className="text-sm font-medium text-orange-400">Easy Returns</p>
                  <p className="text-xs text-orange-300">30 days policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="text-yellow-400" size={24} />
            Product Details
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {product.description}
          </p>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}