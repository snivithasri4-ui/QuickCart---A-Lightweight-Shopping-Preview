import { useCart } from "../context/CartContext";
import "../styles/ProductList.css";
import "../styles/ProductCard.css";
function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="grid">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>

            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartPage;