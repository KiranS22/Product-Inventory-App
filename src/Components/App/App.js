import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "../Form/AddProduct";
import Navbar from "../Navbar/Navbar";
import Details from "../Details/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-products" element={<AddProduct />}></Route>
          <Route path="/products/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
