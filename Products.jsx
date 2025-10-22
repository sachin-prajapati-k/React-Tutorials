import React from "react";
function Products() {
  const products = ["Rea", "Jupiter", "amber", "zava"];
  const prolist = products.map((item, keys) => <li key={keys}>{item}</li>);
  const nums = [2, 4, 3, 6, 1, 7];
  return (
    <div>
      {products.map((prods, index) => (
        <h1 key={index}>{prods}</h1>
      ))}
      {<ul>{prolist}</ul>}
    </div>
  );
}
export default Products;
