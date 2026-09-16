export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  soldCount: number;
  image: string;
};

export const flashSaleProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Over-Ear Headphones",
    category: "Electronics",
    price: 1799,
    originalPrice: 3499,
    rating: 4.5,
    soldCount: 812,
    image: "https://placehold.co/400x400/14213D/FBF8F3?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Fitness Band",
    category: "Electronics",
    price: 990,
    originalPrice: 1650,
    rating: 4.2,
    soldCount: 456,
    image: "https://placehold.co/400x400/FF5C39/FBF8F3?text=Fitness+Band",
  },
  {
    id: 3,
    name: "Ceramic Non-Stick Pan Set",
    category: "Home & Living",
    price: 1299,
    originalPrice: 2199,
    rating: 4.6,
    soldCount: 301,
    image: "https://placehold.co/400x400/1B998B/FBF8F3?text=Pan+Set",
  },
  {
    id: 4,
    name: "Men's Slim Fit Jacket",
    category: "Fashion",
    price: 1150,
    originalPrice: 2100,
    rating: 4.1,
    soldCount: 189,
    image: "https://placehold.co/400x400/FFB627/14213D?text=Jacket",
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 850,
    originalPrice: 1400,
    rating: 4.4,
    soldCount: 674,
    image: "https://placehold.co/400x400/14213D/FBF8F3?text=Speaker",
  },
];

export const featuredProducts: Product[] = [
  {
    id: 6,
    name: "Women's Cotton Kurti",
    category: "Fashion",
    price: 690,
    originalPrice: 990,
    rating: 4.3,
    soldCount: 220,
    image: "https://placehold.co/400x400/E14A2A/FBF8F3?text=Kurti",
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    category: "Home & Living",
    price: 349,
    originalPrice: 550,
    rating: 4.7,
    soldCount: 990,
    image: "https://placehold.co/400x400/1B998B/FBF8F3?text=Bottle",
  },
  {
    id: 8,
    name: "Kids' Building Blocks Set",
    category: "Toys & Baby",
    price: 599,
    originalPrice: 899,
    rating: 4.5,
    soldCount: 145,
    image: "https://placehold.co/400x400/FFB627/14213D?text=Blocks",
  },
  {
    id: 9,
    name: "USB-C Fast Charger 33W",
    category: "Electronics",
    price: 490,
    originalPrice: 750,
    rating: 4.6,
    soldCount: 1120,
    image: "https://placehold.co/400x400/14213D/FBF8F3?text=Charger",
  },
  {
    id: 10,
    name: "Skincare Gift Set",
    category: "Beauty",
    price: 890,
    originalPrice: 1250,
    rating: 4.4,
    soldCount: 267,
    image: "https://placehold.co/400x400/FF5C39/FBF8F3?text=Skincare",
  },
  {
    id: 11,
    name: "Leather Wallet for Men",
    category: "Fashion",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    soldCount: 334,
    image: "https://placehold.co/400x400/6B7280/FBF8F3?text=Wallet",
  },
  {
    id: 12,
    name: "Air Fryer 4.5L",
    category: "Home & Living",
    price: 3450,
    originalPrice: 4990,
    rating: 4.6,
    soldCount: 88,
    image: "https://placehold.co/400x400/1B998B/FBF8F3?text=Air+Fryer",
  },
  {
    id: 13,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 390,
    originalPrice: 590,
    rating: 4.3,
    soldCount: 542,
    image: "https://placehold.co/400x400/14213D/FBF8F3?text=Mouse",
  },
];
