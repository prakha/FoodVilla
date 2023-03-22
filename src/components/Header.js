import { useState, useEffect, useContext  } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContexts";
import useOnline from "../hooks/useOnline";
import FoodFireLogo from "../Images/Food Fire Logo.png";




// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  useEffect(() => {
    console.log("useEffect")
  }, []);

  console.log("render");

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector(store =>  store.cart.items);


  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/cart">
          <li className="px-2">Cart</li>
          </Link>
          
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to = "/cart">
            <li className="px-2">Cart- {cartItems.length} </li>
          </Link>
        </ul>
      </div>

      <li>
        <i className="fa-solid fa-cart-shopping"></i>
      </li>
      <li>
        {/* use conditional rendering for login and logout */}

        <h1>{isOnline ? "✅" : "🔴"}</h1>
        <span className="p-10 font-bold text-red-900">{user.name}</span>

        {isLoggedin ? (
          <button className="logout-btn" onClick={() => setIsLoggedin(false)}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={() => setIsLoggedin(true)}>
            Login
          </button>
        )}
      </li>
    </div>
  );
};

export default Header;
