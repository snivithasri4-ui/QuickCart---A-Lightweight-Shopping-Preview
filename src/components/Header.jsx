import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";
function Header() {
  const { cart } = useCart();

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h1>QuickCart</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/Electronics">Electronics</Link>
        <Link to="/category/Fashion">Fashion</Link>
        <Link to="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}

export default Header;