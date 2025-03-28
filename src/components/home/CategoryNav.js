'use client';

import { useState } from 'react';

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'clothing', label: 'Clothing' },
    { id: 'shoes', label: 'Shoes' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'athleisure', label: 'Athleisure' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'denim', label: 'Denim' },
    { id: 'ethnic', label: 'Ethnic' },
    { id: 'winterwear', label: 'Winter' },
  ];
  
  return (
    <div className="my-6">
      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="flex space-x-2 py-1 min-w-max">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === category.id 
                ? 'neomorph text-primary font-medium' 
                : 'text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;