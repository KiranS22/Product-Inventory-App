import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    console.log("useEffect has ran!");
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleClick = async (id) => {
    console.log("handle click pressed");
    console.log(id);

    const response = await axios.delete(`http://localhost:4000/products/${id}`);
    if (response.data.status == "success") {
      fetchData();
    } else {
      console.log("Something went Wrong");
    }
    console.log(response.data);
  };

  const hamdleViewClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid #000" }}>
            <p>title: {product.title}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <button
              onClick={() => handleClick(product.id)}
              className="delbtn"
              type="button"
            >
              Delete Item
            </button>
            <button type="button" onClick={() => hamdleViewClick(product.id)}>
              {" "}
              Product Details
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Home;
