import { FETCH_SEARCH } from "./headerType";

export const searchItem = (value) => {
  return {
    type: FETCH_SEARCH,
    value,
  };
};
