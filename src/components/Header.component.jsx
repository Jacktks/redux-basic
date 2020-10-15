import React from "react";
import logo from "../images/logo-is.png";
import { useDispatch } from "react-redux";

import { searchItem } from "../redux/header/headerAction";
const Header = () => {
  const dispatch = useDispatch();
  const handleSearchItem = (value) => {
    const action = searchItem(value);

    dispatch(action);
  };

  return (
    <header>
      <a href="./" className="header__logo">
        <img src={logo} alt="" />
      </a>
      <a href="./" className="header__text">
        amazing
      </a>
      <div className="header__input">
        <input
          placeholder="Search a product"
          onChange={(e) => handleSearchItem(e.target.value)}
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
