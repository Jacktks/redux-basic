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

const initialState = {
  valueTitle: "",
  valueType: "",
  valueByType: [],
  valueByBrand: [],
  valueByRatings: "",
  valueByPricesStart: "",
  valueByPricesEnd: "",
  valueIdTitle: "",
  valueIdType: "",
  types: [],
  isloading: false,
  error: null,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TYPES:
      return {
        ...state,
        types: action.types,
      };
    case GET_BYBRAND:
      return {
        ...state,
        valueByBrand: action.value,
      };

    case GET_BYPRICEEND:
      return {
        ...state,
        valueByPricesEnd: action.value,
      };

    case GET_BYPRICESTART:
      return {
        ...state,
        valueByPricesStart: action.value,
      };

    case GET_BYRATING:
      return {
        ...state,
        valueByRatings: action.value,
      };
    case GET_BYTYPE:
      return {
        ...state,
        valueByType: action.value,
      };

    case GET_CLEARFILTER:
      return {
        ...state,
        valueTitle: "",
        valueType: "",
        valueByType: [],
        valueByBrand: [],
        valueByRatings: "",
        valueByPricesStart: "",
        valueByPricesEnd: "",
      };

    case GET_IDTITLE:
      return {
        ...state,
        valueIdTitle: action.value,
      };
    case GET_IDTYPE:
      return {
        ...state,
        valueIdType: action.value,
      };

    case GET_TITLE:
      return {
        ...state,
        valueTitle: action.value,
      };
    case GET_TYPE:
      return {
        ...state,
        valueType: action.value,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
