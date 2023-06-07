import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import Cart from "./pages/cart/Cart.jsx";
import {Shopping} from "./pages/shopping/Shopping.jsx";
import { ShopContextProvider } from "./context/Shop-context";


function App() {
  return (
    <>
      <div className="App">
        <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shopping />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
