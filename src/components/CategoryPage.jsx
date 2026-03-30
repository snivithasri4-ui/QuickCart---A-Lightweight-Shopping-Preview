import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import "../styles/ProductList.css";
import "../styles/ProductCard.css";
function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filtered = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
  <div className="category-container">
    <h2 className="category-title">{category}</h2>

    <div className="grid">
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
      ))}
    </div>
  </div>
);
}

export default CategoryPage;