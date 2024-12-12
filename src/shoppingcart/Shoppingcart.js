import { useMemo, useState } from "react";
import ProductList from "./ProductList";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "product a", price: 100 },
    { id: 2, name: "product b", price: 200 },
    { id: 3, name: "product c", price: 300 },
  ]);
  const [discount, setDiscount] = useState(0);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const total = useMemo(() => {
    return cart.reduce((sum, product) => sum + product.price, 0) - discount;
  }, [cart, discount]);
  const addProduct = () => {
    if (!newProductName || !newProductPrice || isNaN(newProductPrice)) {
      alert("please enter valid product name or price");
      return;
    }
    const newProductId = cart.length + 1;
    const newProduct = {
      id: newProductId,
      name: newProductName,
      price: parseFloat(newProductPrice),
    };
    setCart((pre) => [...cart, newProduct]);
    setNewProductName("");
    setNewProductPrice("");
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList products={cart} />
      <div style={{ marginTop: "20px" }}>
        <label>
          discount:
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
          />
        </label>
        <p>total: ${total}</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Add new product</h3>
        <input
          type="text"
          placeholder="product name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="product price"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <button onClick={addProduct} style={{ marginTop: "10px" }}>
          Add product
        </button>
      </div>
    </div>
  );
};
export default ShoppingCart;
