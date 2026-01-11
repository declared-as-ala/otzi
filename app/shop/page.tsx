import ProductsGrid from "@/components/ProductsGrid";

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6">
        <h1 className="mb-8 text-4xl font-bold">Boutique</h1>
      </div>
      <ProductsGrid />
    </div>
  );
}

