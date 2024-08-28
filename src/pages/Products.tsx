import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <div>Shopping Cart products</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products &&
          products.map((x) => (
            <ProductCard
              pic={x.image}
              description={x.description}
              price={x.price}
            />
          ))}
      </div>
    </div>
  );
}
