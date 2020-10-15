import React, { useEffect, useState } from "react";
import Product from "./Product.component";
import Pagination from "./Pagination.component";
import SortProduct from "./SortProduct.component";
import SpinnerPage from "../waiting.component";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  getCountProducts,
  fetchProductBegin,
} from "../../redux/mainProduct/mainAction";
const Main = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { products, isloading, sort, error } = useSelector(
    (state) => state.product
  );

  const { valueSearch } = useSelector((state) => state.header);

  const {
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
  } = useSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(fetchProductBegin());
    const actionProducts = fetchProduct({
      valueTitle,
      valueType,
      valueByType,
      valueByBrand,
      valueByRatings,
      valueByPricesStart,
      valueByPricesEnd,
      valueSearch,
      sort,
    });
    dispatch(actionProducts);
  }, [
    valueTitle,
    valueType,
    valueByType,
    valueByBrand,
    valueByRatings,
    valueByPricesStart,
    valueByPricesEnd,
    valueSearch,
    sort,
    dispatch,
  ]);

  useEffect(() => {
    const actionCountProducts = getCountProducts(products);
    dispatch(actionCountProducts);
  }, [dispatch, products]);

  const LastProduct = currentPage * 8;
  const FirstProduct = LastProduct - 8;

  const currentProduct = products.slice(FirstProduct, LastProduct);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main">
      {isloading ? (
        <SpinnerPage />
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <>
          <SortProduct products={products} />
          <Product currentProduct={currentProduct} />
          <Pagination
            currentPage={currentPage}
            totalProducts={products.length}
            handlePaginate={handlePaginate}
          />
        </>
      )}
    </div>
  );
};

export default Main;
