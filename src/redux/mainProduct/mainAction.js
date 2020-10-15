import {
  FETCH_PRODUCTSUCCESS,
  SORT_PRODUCT,
  GET_COUNTPRODUCTS,
  FETCH_PRODUCTBEGIN,
  FETCH_PRODUCTFAILURE,
} from "./mainType";
import callProducts from "../../components/fetch/callProducts";

export const fetchProductBegin = () => {
  return {
    type: FETCH_PRODUCTBEGIN,
  };
};

export const fetchProduct = ({
  valueTitle,
  valueType,
  valueByType,
  valueByBrand,
  valueByRatings,
  valueByPricesStart,
  valueByPricesEnd,
  sort,
  valueSearch,
}) => {
  return async (dispatch) => {
    try {
      const res = await callProducts({
        valueTitle,
        valueType,
        valueByType,
        valueByBrand,
        valueByRatings,
        valueByPricesStart,
        valueByPricesEnd,
        sort,
        valueSearch,
      });
      dispatch(setProduct(res.data));
      console.log(sort);
    } catch (error) {
      dispatch(fetchProductFailure(error));
    }
  };
};

export const setProduct = (product) => {
  return {
    type: FETCH_PRODUCTSUCCESS,
    product,
  };
};

export const fetchProductFailure = (value) => {
  return {
    type: FETCH_PRODUCTFAILURE,
    value,
  };
};

export const sortProduct = (sort) => {
  console.log(sort);
  return {
    type: SORT_PRODUCT,
    sort,
  };
};

export const getCountProducts = (value) => {
  return {
    type: GET_COUNTPRODUCTS,
    value,
  };
};
