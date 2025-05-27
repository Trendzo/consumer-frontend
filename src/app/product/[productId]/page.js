"use client";
import { use, useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import GlassPanels from "@/components/layout/GlassPanels";
import Button from "@/components/ui/Button";
import ProductsGrid from "@/components/home/ProductsGrid";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: params.productId,
    name: "Oversized Cotton T-shirt",
    price: 1299,
    originalPrice: 1999,
    store: "Zara",
    deliveryTime: "25 min",
    rating: 4.5,
    reviews: 128,
    colors: ["White", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      "/images/7.jpg",
    ],
    description:
      "A stylish oversized cotton T-shirt perfect for casual wear. Made with 100% organic cotton, this T-shirt offers comfort and durability.",
  };

  // Calculate discount percentage
  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  // Handle add to cart
  const handleAddToCart = () => {
    // Mock add to cart logic
    console.log(
      `Added ${quantity} ${product.name} (Color: ${selectedColor}, Size: ${selectedSize}) to cart`
    );
  };

  return (
    <>
      <GlassPanels />
      <Header />

      <Container className="pb-20 pt-2">
        {/* Product Header */}
        <div className="my-6">
          <h1 className="text-3xl font-display font-bold mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              {product.name}
            </span>
          </h1>
          <p className="text-text-secondary">
            From {product.store} • Delivered in {product.deliveryTime}
          </p>
        </div>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="swipe-area">
            <div className="relative glass rounded-xl overflow-hidden">
              <div
                className="w-full h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.images[0]})` }}
              />
              <div className="swipe-indicator">
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className={`swipe-dot ${index === 0 ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <Card variant="glass" className="p-4">
              {/* Pricing and Rating */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ₹{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-text-secondary line-through">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {discountPercent && (
                    <Badge variant="accent" size="sm">
                      {discountPercent}% OFF
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Color: {selectedColor}</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-purple-500"
                          : "border-white/10 dark:border-gray-200/20"
                      } neomorph`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Size: {selectedSize}</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-full neomorph ${
                        selectedSize === size
                          ? "bg-purple-500 text-white"
                          : "glass hover:bg-purple-500/10"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center glass rounded-full overflow-hidden w-fit">
                  <button
                    className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="w-8 text-center font-medium">{quantity}</div>
                  <button
                    className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                className="add-to-bag-btn bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Card>

            {/* Product Description */}
            <Card variant="glass" className="p-4">
              <h3 className="text-lg font-display font-bold mb-2">
                Product Details
              </h3>
              <p className="text-text-secondary">{product.description}</p>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <section className="my-12">
          <h2 className="text-2xl font-display font-bold mb-6">
            Related Products
          </h2>
          {/* <ProductsGrid products={products} /> */}
        </section>
      </Container>
    </>
  );
}
