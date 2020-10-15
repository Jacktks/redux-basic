import React from "react";
import Item from "./Item.component";

const Product = (props) => {
  const { currentProduct } = props;
  return (
    <div className="products">
      {currentProduct.map((product, i) => (
        <Item product={product} key={i} />
      ))}
    </div>
  );
};

export default Product;
