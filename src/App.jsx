import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase / Decrease
  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + change }
        : item
    ).filter(item => item.quantity > 0));
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Total items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Header count={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <ProductList onAddToCart={addToCart} />

      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </div>
  );
}

export default App;