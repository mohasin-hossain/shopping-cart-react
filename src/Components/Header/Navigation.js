import React from "react";
import Logo from "../../Assets/images/Logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img src={Logo} />
        <div className="cart">
          <a>
            <RiShoppingCartLine className="cart-icon" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
