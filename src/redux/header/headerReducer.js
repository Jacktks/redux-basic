import { FETCH_SEARCH } from "./headerType";

const initialState = {
  valueSearch: "",
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        valueSearch: action.value,
      };
    default:
      return state;
  }
};

export default headerReducer;
