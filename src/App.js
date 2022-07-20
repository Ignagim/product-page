import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import PorductInfo from "./components/PorductInfo";
import ProductImg from "./components/ProductImg";

function App() {
  const [productOnCart, setProductOnCart] = useState(0);

  return (
    <div className="App">
      <Navbar
        productOnCart={productOnCart}
        setProductOnCart={setProductOnCart}
      />
      <div className="product__container">
        <ProductImg />
        <PorductInfo />
      </div>
      <AddProduct setProductOnCart={setProductOnCart} />
    </div>
  );
}

export default App;
