import React from "react";
import { useDispatch } from "react-redux";
import { sortProduct } from "../../redux/mainProduct/mainAction";

const SortProduct = (props) => {
  const { products } = props;

  const dispatch = useDispatch();

  const onChange = (value) => {
    const actionSort = sortProduct(value);
    dispatch(actionSort);
    console.log(actionSort);
  };
  return (
    <div className="result-top">
      <div className="result-top__left">{products.length}</div>
      <div className="result-top__right">
        <label>Sort by</label>
        <select onChange={(value) => onChange(value.target.value)}>
          <option value="">Featured</option>
          <option value="asc.">Price asc.</option>
          <option value="desc">Price desc.</option>
        </select>
      </div>
    </div>
  );
};

export default SortProduct;
