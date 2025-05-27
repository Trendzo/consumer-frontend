"use client";

import Card from "@/components/ui/Card";
import { useRouter } from "next/navigation";

const CategoryNav = () => {
  const router = useRouter();

  // Visual category tiles matching the image
  const categoryTiles = [
    {
      id: "deal",
      label: "UP TO 40% OFF",
      subtext: "selected products",
      tag: "Online Exclusive",
      image: "/api/placeholder/400/320",
      bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
      textColor: "text-white",
      textSize: "text-2xl md:text-3xl",
      highlight: true,
    },
    {
      id: "summer-shirts",
      label: "SUMMER SHIRTS",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.zHVzhVe4pTzhGgkaf8JLjwAAAA&w=448&h=448&c=7",
      bgColor: "bg-orange-50",
      textColor: "text-white",
      textSize: "text-xl md:text-2xl",
    },
    {
      id: "check-shirts",
      label: "CHECK SHIRTS",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.3TS7k42yqMRMA1DGWLx3eAHaJh&w=474&h=474&c=7",
      bgColor: "bg-blue-50",
      textColor: "text-white",
      textSize: "text-xl md:text-2xl",
    },
    {
      id: "trousers",
      label: "TROUSERS",
      image:
        "https://www.simonjersey.com/images/contemporary-womens-straight-leg-trouser-unhemmed-length-grey-p2026-243588_image.jpg",
      bgColor: "bg-green-50",
      textColor: "text-white",
      textSize: "text-xl md:text-2xl",
    },
    {
      id: "jeans",
      label: "JEANS",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.ka1D1JNPLTIgTQBFRfRHggHaJ4&w=474&h=474&c=7",
      bgColor: "bg-purple-50",
      textColor: "text-white",
      textSize: "text-xl md:text-2xl",
    },
    {
      id: "tshirts",
      label: "BASIC T-SHIRTS",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ZYHzmXkieClq6dQxU54uuQAAAA&w=474&h=474&c=7",
      bgColor: "bg-yellow-50",
      textColor: "text-white",
      textSize: "text-xl md:text-2xl",
    },
  ];

  return (
    <div className="my-6">
      {/* Section header with "See all categories" button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-display font-bold">Categories</h2>
        <button className="text-primary text-sm font-medium">
          See all categories
        </button>
      </div>

      {/* Category visual grid - 2 items per row on mobile, 3 on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categoryTiles.map((tile) => (
          <Card
            key={tile.id}
            variant="glass"
            hover
            className="relative overflow-hidden h-40 md:h-56 cursor-pointer"
            onClick={() => router.push(`/products?filter=${tile.id}`)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${tile.image})`,
              }}
            />

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 ${
                tile.highlight
                  ? tile.bgColor
                  : "bg-gradient-to-t from-black/70 to-transparent"
              }`}
            />

            {/* Content */}
            <div className="absolute inset-0 p-3 md:p-4 flex flex-col">
              {tile.tag && (
                <div className="text-xs md:text-sm mb-1 mt-auto">
                  {tile.tag}
                </div>
              )}

              <div
                className={`${tile.textSize} font-display font-bold ${
                  tile.highlight ? tile.textColor : "text-white"
                }`}
              >
                {tile.label}
              </div>

              {tile.subtext && (
                <div className="text-sm md:text-base mt-1">{tile.subtext}</div>
              )}

              {tile.highlight && (
                <div className="absolute top-2 left-2 md:top-3 md:left-3">
                  <div className="bg-red-500 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-lg shadow-lg transform rotate-0 scale-100 animate-pulse">
                    SNATCH DEAL
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
