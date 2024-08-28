import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products";
import { useCartStore } from "./store/cartStore";
import { RiShoppingCartFill } from "@remixicon/react";

function App() {
  const items = useCartStore((state) => state.items);

  return (
    <Router>
      <div
        style={{
          backgroundColor: "#00000020",
          height: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 30px",
        }}
      >
        <div></div>
        <h1>Shopping Cart Manager</h1>
        <div style={{ display: "flex" }}>
          <button style={{ backgroundColor: "transparent", border: "none" }}>
            <RiShoppingCartFill />
          </button>
          <div>{items.length}</div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
