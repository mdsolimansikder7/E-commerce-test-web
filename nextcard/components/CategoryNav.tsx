import { categories } from "@/data/categories";

export default function CategoryNav() {
  return (
    <nav className="bg-ink">
      <div className="max-w-6xl mx-auto px-4 flex gap-6 overflow-x-auto text-sm text-cream/90 py-2.5">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href="#"
            className="whitespace-nowrap hover:text-brand transition-colors"
          >
            {cat.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
