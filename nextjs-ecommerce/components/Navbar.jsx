import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p>
        <Link href="/" className="logo">
          TF Headphones
        </Link>
      </p>
      <button type="button" className="cart-icon" onCLick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">0</span>
      </button>
    </div>
  );
};

export default Navbar;
