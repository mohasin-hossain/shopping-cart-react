import React from "react";
import { useSelector } from "react-redux";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="card">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta-price">${price}</div>
          <button className="cart-btn">Add to Cart</button>
        </div>
      </div>
    );
  });

  return (
    <div className="cards-container">
      <div className="cards">{renderList}</div>
    </div>
  );
};

export default ProductComponent;
