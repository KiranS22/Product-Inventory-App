import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getSingleProductDetails = async () => {
    console.log("getSingleProductDetails has ran!");
    const response = await axios.get(`http://localhost:4000/products/${id}`);
    console.log(response.data);
    setProduct(response.data);
  };
  useEffect(() => {
    getSingleProductDetails();
  }, []);
  return (
    <div>
      {product.title} - {product.category} - {product.price}
    </div>
  );
};

export default Details;
