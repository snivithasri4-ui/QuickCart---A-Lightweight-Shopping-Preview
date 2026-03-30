import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ onAddToCart }) {
  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;