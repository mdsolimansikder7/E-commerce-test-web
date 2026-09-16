"use client";

import { useState } from "react";

export default function Header() {
  const [cartCount] = useState(3);
  const [query, setQuery] = useState("");

  return (
    <header className="bg-cream border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4 sm:gap-8">
        <a href="/" className="font-display font-800 text-2xl text-ink shrink-0">
          Next<span className="text-brand">Card</span>
        </a>

        <div className="flex-1 hidden sm:flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products, brands and categories"
            className="w-full border border-ink/15 rounded-l-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <button className="bg-brand text-cream rounded-r-card px-5 py-2 text-sm font-semibold hover:bg-brand-dark transition-colors">
            Search
          </button>
        </div>

        <button className="relative shrink-0" aria-label="Cart">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-ink"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand text-cream text-[11px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="sm:hidden px-4 pb-3 flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NextCard"
          className="w-full border border-ink/15 rounded-l-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <button className="bg-brand text-cream rounded-r-card px-4 text-sm font-semibold">
          Go
        </button>
      </div>
    </header>
  );
}
