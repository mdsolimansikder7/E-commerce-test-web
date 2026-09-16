import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import Hero from "@/components/Hero";
import FlashSale from "@/components/FlashSale";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBar />
      <Header />
      <CategoryNav />
      <Hero />
      <FlashSale />
      <CategoryGrid />
      <ProductGrid />
      <Footer />
    </main>
  );
}
