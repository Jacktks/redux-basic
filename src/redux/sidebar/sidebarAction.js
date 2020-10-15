import {
  FETCH_TYPES,
  GET_BYBRAND,
  GET_BYPRICEEND,
  GET_BYPRICESTART,
  GET_BYRATING,
  GET_BYTYPE,
  GET_CLEARFILTER,
  GET_IDTITLE,
  GET_IDTYPE,
  GET_TITLE,
  GET_TYPE,
} from "./sidebarType";

import axios from "axios";

export const fetchDataTypes = () => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:5000/types`);

    dispatch(setTypes(res.data));
  };
};

export const setClearFilter = (state, action) => {
  state.valueByBrand = [];
  state.valueByPricesEnd = "";
  state.valueByPricesStart = "";
  state.valueByRatings = "";
  state.valueByType = [];
  state.valueTitle = "";
  state.valueType = "";
};

export const setTypes = (types) => {
  return {
    type: FETCH_TYPES,
    types,
  };
};

export const getTitle = (value) => {
  return {
    type: GET_TITLE,
    value,
  };
};

export const getIdTitle = (value) => {
  return {
    type: GET_IDTITLE,
    value,
  };
};

export const getIdType = (value) => {
  return {
    type: GET_IDTYPE,
    value,
  };
};

export const getClearFilter = () => {
  return {
    type: GET_CLEARFILTER,
  };
};

export const getByBrand = (value) => {
  return {
    type: GET_BYBRAND,
    value,
  };
};

export const getByPricesEnd = (value) => {
  return {
    type: GET_BYPRICEEND,
    value,
  };
};

export const getByPricesStart = (value) => {
  return {
    type: GET_BYPRICESTART,
    value,
  };
};

export const getByRatings = (value) => {
  return {
    type: GET_BYRATING,
    value,
  };
};

export const getByType = (value) => {
  return {
    type: GET_BYTYPE,
    value,
  };
};

export const getType = (value) => {
  return {
    type: GET_TYPE,
    value,
  };
};
