import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";


function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
