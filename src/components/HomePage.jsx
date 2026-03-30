import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import "../styles/ProductList.css";
function HomePage() {
  const { addToCart } = useCart();

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
      ))}
    </div>
  );
}

export default HomePage;