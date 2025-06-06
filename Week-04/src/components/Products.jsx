import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  const noProducts = !isLoading && !error && filteredProducts.length === 0;

  return (
    <main className="absolute z-50 flex flex-col items-center justify-center w-full gap-10 py-12 -mt-16 bg-white px-44 rounded-4xl">
      <Form setFilter={setFilter} />
      {error && (
        <div className="flex justify-center items-center min-h-[50dvh]">
          <h2 className="text-center text-red-600 text-2xl font-bold">
            {error}
          </h2>
        </div>
      )}

      {noProducts && (
        <div className="flex justify-center items-center min-h-[50dvh]">
          <h2 className="text-center text-red-600 text-2xl font-bold">
            No Products Found
          </h2>
        </div>
      )}

      <section className="w-full grid grid-cols-3 gap-12 items-stretch">
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)}

        {!isLoading &&
          !error &&
          !noProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </section>
    </main>
  );
};

export default Products;
