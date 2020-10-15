import {
  FETCH_PRODUCTSUCCESS,
  SORT_PRODUCT,
  GET_COUNTPRODUCTS,
  FETCH_PRODUCTBEGIN,
  FETCH_PRODUCTFAILURE,
} from "./mainType";

const initialState = {
  sort: "",
  isloading: false,
  products: [],
  countProducts: [],
  error: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTBEGIN:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_PRODUCTSUCCESS:
      return {
        ...state,
        products: action.product,
        isloading: false,
      };
    case FETCH_PRODUCTFAILURE:
      return {
        ...state,
        products: [],
        error: action.value,
        isloading: false,
      };
    case SORT_PRODUCT:
      return {
        ...state,
        sort: action.sort,
      };

    case GET_COUNTPRODUCTS:
      return {
        ...state,
        countProducts: action.value,
      };
    default:
      return state;
  }
};

export default mainReducer;
