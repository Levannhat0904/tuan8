import { memo, useCallback } from "react";

const ProductItem = memo(({ product }) => {
  console.log(`re-render ${product.name}`);
  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid, #ccc",
        padding: "10px",
      }}
    >
      <h4>{product.name}</h4>
      <p>price: ${product.price}</p>
    </div>
  );
});
const ProductList = ({ products }) => {
  console.log("re-render productList");
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
