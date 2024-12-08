import Cart from "@/components/cart/Cart";
import ProductCard from "@/components/products/ProductCard";
import ProductsGrid from "@/components/products/ProductsGrid";
import { products } from "@/data/products";

const Home = () => {
  return (
    <main className="px-5 pt-7 desktop:flex desktop:gap-10 max-w-[1400px] mx-auto desktop:justify-between">
      <section>
        <h1 className="font-extrabold text-4xl mb-7 text-rose-900">Desserts</h1>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={crypto.randomUUID()} product={product} />
          ))}
        </ProductsGrid>
      </section>

      <Cart />
    </main>
  );
};

export default Home;
