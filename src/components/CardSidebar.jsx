function CartSidebar({ cart, isOpen, onClose, onUpdateQuantity, onRemove }) {
  if (!isOpen) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: "300px",
      height: "100%",
      background: "white",
      color: "black",
      padding: "20px",
      overflowY: "auto"
    }}>
      <button onClick={onClose}>Close</button>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>

            <button onClick={() => onRemove(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartSidebar;