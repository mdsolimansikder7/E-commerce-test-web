import { featuredProducts } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="font-display font-700 text-xl sm:text-2xl text-ink mb-4">
        Just for you
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
