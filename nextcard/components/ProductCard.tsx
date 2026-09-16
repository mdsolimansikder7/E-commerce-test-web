import Image from "next/image";
import type { Product } from "@/data/products";

function discountPercent(price: number, originalPrice: number) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = discountPercent(product.price, product.originalPrice);

  return (
    <div className="bg-white border border-ink/10 rounded-card overflow-hidden flex flex-col">
      <div className="relative aspect-square bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 20vw"
          className="object-cover"
        />
        {discount > 0 && (
          <span className="ribbon absolute top-0 left-0 bg-brand text-cream text-xs font-semibold px-2.5 py-1">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col gap-1 flex-1">
        <p className="text-xs text-slate-soft">{product.category}</p>
        <h3 className="text-sm font-medium text-ink line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display font-700 text-ink">
            ৳{product.price.toLocaleString()}
          </span>
          {discount > 0 && (
            <span className="text-xs text-slate-soft line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="mt-auto pt-2 flex items-center justify-between text-xs text-slate-soft">
          <span>★ {product.rating}</span>
          <span>{product.soldCount} sold</span>
        </div>
      </div>
    </div>
  );
}
