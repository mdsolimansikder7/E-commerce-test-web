import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="font-display font-700 text-xl sm:text-2xl text-ink mb-4">
        Shop by category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href="#"
            className="rounded-card py-6 flex items-center justify-center text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: cat.color, color: cat.textColor }}
          >
            {cat.name}
          </a>
        ))}
      </div>
    </section>
  );
}
