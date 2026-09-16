import { flashSaleProducts } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FlashSale() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-display font-700 text-xl sm:text-2xl text-ink">
          Flash sale
        </h2>
        <a href="#" className="text-brand text-sm font-medium">
          See all
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {flashSaleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
