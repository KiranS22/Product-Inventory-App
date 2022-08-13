import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const HandleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form has submitted");
    const body = { title: title, category: category, price: price };
    try {
      const resp = await axios.post("http://localhost:4000/products/add", body);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitle(e)}
          id="title"
        />

        <label for="category">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => HandleCategory(e)}
          id="category"
        />

        <label for="price">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => handlePrice(e)}
          id="price"
        />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
};

export default AddProduct;
