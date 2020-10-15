import React, { useEffect } from "react";

import ShowSidebar from "./ShowSidebar.component";
import ByType from "./RefineSidebar/ByType.component";
import ByBrand from "./RefineSidebar/ByBrand.component";
import ByRating from "./RefineSidebar/ByRating.component";
import ByPrices from "./RefineSidebar/ByPrices.component";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataTypes,
  getClearFilter,
} from "../../redux/sidebar/sidebarAction";

const Siderbar = () => {
  const dispatch = useDispatch();
  const {
    valueByBrand,
    valueByPricesEnd,
    valueByPricesStart,
    valueByRatings,
    valueByType,
    valueTitle,
    valueType,
    types,
  } = useSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(fetchDataTypes());
  }, [dispatch]);

  const onClick = () => {
    const actionClearFilter = getClearFilter();
    dispatch(actionClearFilter);
    console.log(actionClearFilter);
  };

  return (
    <div className="menu">
      <div className="menu__clear">
        {valueByBrand.length > 0 ||
        valueByPricesEnd ||
        valueByPricesStart ||
        valueByRatings ||
        valueByType.length > 0 ||
        valueTitle ||
        valueType ? (
          <button onClick={() => onClick()}>Clear all filter</button>
        ) : (
          ""
        )}
      </div>

      <div className="menu__result">
        <p className="menu__title-1">Show results for</p>
        <ShowSidebar types={types} />
      </div>
      <hr></hr>
      <div className="menu__refine">
        <p className="menu__title-1">Refine by</p>
        <p className="menu__title-2">Type</p>
        <ByType types={types} />
        <p className="menu__title-2">Brand</p>
        <ByBrand types={types} />
        <p className="menu__title-2">Ratings</p>
        <ByRating />
        <p className="menu__title-2">Prices</p>
        <ByPrices />
      </div>
      <hr></hr>
      <div className="menu__text">Data courtesy of Best Buy</div>
    </div>
  );
};

export default Siderbar;
