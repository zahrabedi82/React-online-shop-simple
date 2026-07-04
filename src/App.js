import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shops from "./Pages/Shops/shop";
import Cart from "./Pages/Cart/cart";
import Nav from "./Components/nav";
import { ShopContextProvider } from "./Components/context/shopContext";
import Welcom from "./Components/welcome"
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Welcom />
          <Routes>
            <Route path="/" element={<Shops />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
