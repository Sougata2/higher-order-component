import React from "react";

function ProductItem({ product }) {
  return (
    <li>
      <p>{product.productName}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </li>
  );
}

function ProductList({ title, items }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {items.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </ul>
    </>
  );
}

export default ProductList;
