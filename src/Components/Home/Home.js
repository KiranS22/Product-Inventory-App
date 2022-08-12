import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "../Form/AddProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("useEffect has ran!");
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {products.map((product) => {
        return (
          <div style={{ border: "2px solid #000" }}>
            <p>title: {product.title}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
          </div>
      
        );
      })}
          <AddProduct/>
    </>
  );
};

export default Home;
