"use client";

import { useState } from "react";
import { storeData, Product } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Simple category extraction from captions
  const getCategory = (caption: string): string => {
    const lowerCaption = caption.toLowerCase();
    if (lowerCaption.includes("chaussure") || lowerCaption.includes("shoe") || lowerCaption.includes("sneaker") || lowerCaption.includes("boot") || lowerCaption.includes("mocassin")) {
      return "shoes";
    }
    if (lowerCaption.includes("coat") || lowerCaption.includes("jacket") || lowerCaption.includes("manteau") || lowerCaption.includes("veste")) {
      return "outerwear";
    }
    if (lowerCaption.includes("sweater") || lowerCaption.includes("pull") || lowerCaption.includes("cardigan")) {
      return "knitwear";
    }
    if (lowerCaption.includes("pantalon") || lowerCaption.includes("pants") || lowerCaption.includes("trouser")) {
      return "pants";
    }
    return "other";
  };

  const categories = [
    { id: "all", label: "Tous les produits" },
    { id: "shoes", label: "Chaussures" },
    { id: "outerwear", label: "Vêtements d'extérieur" },
    { id: "knitwear", label: "Tricots" },
    { id: "pants", label: "Pantalons" },
    { id: "other", label: "Autres" },
  ];

  const filteredProducts = storeData.posts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || getCategory(product.caption) === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <h2 className="mb-6 text-3xl font-bold">Nos produits</h2>
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Rechercher des produits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:w-96"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">Aucun produit trouvé correspondant à vos critères.</p>
        </div>
      )}
    </section>
  );
}

