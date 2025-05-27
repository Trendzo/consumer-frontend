"use client";

import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import GlassPanels from "@/components/layout/GlassPanels";
import ProductsGrid from "@/components/home/ProductsGrid";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");

  const [sortOption, setSortOption] = useState("relevance");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (filterParams) {
    }
  });

  // Mock sort options
  const sortOptions = [
    { id: "relevance", name: "Relevance" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "newest", name: "Newest First" },
    { id: "rating", name: "Customer Rating" },
  ];

  // Mock filter options
  const filters = [
    {
      id: "price",
      name: "Price Range",
      options: [
        { id: "0-1000", name: "Under ₹1000" },
        { id: "1000-2000", name: "₹1000 - ₹2000" },
        { id: "2000-5000", name: "₹2000 - ₹5000" },
        { id: "5000+", name: "₹5000 & Above" },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { id: "zara", name: "Zara" },
        { id: "hnm", name: "H&M" },
        { id: "nike", name: "Nike" },
        { id: "adidas", name: "Adidas" },
        { id: "mango", name: "Mango" },
        { id: "uniqlo", name: "Uniqlo" },
        { id: "levis", name: "Levi's" },
        { id: "fabindia", name: "FabIndia" },
      ],
    },
    {
      id: "rating",
      name: "Customer Rating",
      options: [
        { id: "4", name: "4★ & Above" },
        { id: "3", name: "3★ & Above" },
        { id: "2", name: "2★ & Above" },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { id: "tshirts", name: "BASIC T-SHIRTS" },
        { id: "jeans", name: "JEANS" },
        { id: "trousers", name: "TROUSERS" },
        { id: "check-shirts", name: "CHECK SHIRTS" },
        { id: "summer-shirts", name: "SUMMER SHIRTS" },
      ],
    },
  ];

  return (
    <>
      <GlassPanels />
      <Header />

      <Container className="pb-20 pt-2">
        {/* Search Bar Section */}
        <div className="my-6">
          <SearchBar
            placeholder="Search products, brands, and more..."
            className="w-full"
            variant="glass"
          />
        </div>

        {/* Page Header with Sort and Filter */}
        <div className="my-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-display font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              All Products
            </span>
          </h1>
          <div className="flex gap-4">
            <div className="relative">
              <select
                className="glass rounded-lg bg-purple-500 hover:bg-purple-600 text-white neomorph px-4 py-2 pr-8 focus:outline-none border-none appearance-none cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option
                    key={option.id}
                    value={option.id}
                    className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-white"
                  >
                    {option.name}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <Button
              variant="primary"
              className="rounded-full bg-purple-500 hover:bg-purple-600 text-white neomorph"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        {isFilterOpen && (
          <div className="mb-6 glass rounded-lg p-4 animate-fade-in-up">
            <h3 className="text-lg font-display font-bold mb-4 text-gray-700 dark:text-white">
              Filters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filters.map((filter) => {
                const numColumns = Math.ceil(filter.options.length / 5);
                return (
                  <div key={filter.id}>
                    <h4 className="font-medium mb-2 text-gray-700 dark:text-white border-b border-gray-700">
                      {filter.name}
                    </h4>
                    <div className={`grid grid-cols-${numColumns} gap-4`}>
                      {Array.from({ length: numColumns }, (_, colIndex) => {
                        const startIdx = colIndex * 5;
                        const endIdx = startIdx + 5;
                        const columnOptions = filter.options.slice(
                          startIdx,
                          endIdx
                        );
                        return (
                          <div key={colIndex} className="space-y-2">
                            {columnOptions.map((option) => (
                              <label
                                key={option.id}
                                className="flex items-center gap-2"
                              >
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 accent-purple-500 rounded focus:ring-2 focus:ring-purple-500 bg-gray-50 dark:bg-gray-900"
                                />
                                <span className="text-sm text-gray-700 dark:text-white">
                                  {option.name}
                                </span>
                              </label>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <section className="my-8">
          <ProductsGrid products={products} />
        </section>
      </Container>
    </>
  );
}

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
  {
    id: 5,
    name: "Oversized Cotton T-shirt",
    price: 1299,
    originalPrice: 1999,
    store: "Zara",
    deliveryTime: "25 min",
    rating: 4.7,
    isNew: true,
    images: ["/images/17.jpg", "/images/10.jpg"],
  },
  {
    id: 6,
    name: "High Rise Skinny Jeans",
    price: 2499,
    store: "H&M",
    deliveryTime: "30 min",
    rating: 4.3,
    isNew: false,
    images: ["/images/11.jpg", "/images/12.jpg"],
  },
  {
    id: 7,
    name: "Floral Print Maxi Dress",
    price: 3599,
    originalPrice: 4999,
    store: "Mango",
    deliveryTime: "45 min",
    rating: 4.5,
    isNew: true,
    images: ["/images/13.jpg", "/images/14.jpg"],
  },
  {
    id: 8,
    name: "Air Max Sneakers",
    price: 7999,
    store: "Nike",
    deliveryTime: "35 min",
    rating: 4.8,
    isNew: false,
    images: ["/images/15.jpg", "/images/16.jpg"],
  },
];
