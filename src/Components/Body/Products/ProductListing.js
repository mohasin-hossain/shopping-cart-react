import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../../../Redux/actionCreators/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    dispatch(setProducts(response.data));
  };
  console.log("Products", products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
