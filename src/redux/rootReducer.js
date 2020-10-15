import { combineReducers } from "redux";

import mainReducer from "./mainProduct/mainReducer";

import sidebarReducer from "./sidebar/sidebarReducer";

import headerReducer from "./header/headerReducer";

const rootReducer = combineReducers({
  product: mainReducer,
  sidebar: sidebarReducer,
  header: headerReducer,
});

export default rootReducer;
