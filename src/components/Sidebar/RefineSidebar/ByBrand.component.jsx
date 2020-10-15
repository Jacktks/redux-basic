import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByBrand } from "../../../redux/sidebar/sidebarAction";
const ByBrand = (props) => {
  const { types } = props;

  const dispatch = useDispatch();

  const { valueByBrand, valueIdTitle, valueIdType } = useSelector(
    (state) => state.sidebar
  );
  const countProducts = useSelector((state) => state.product.countProducts);

  const handleCheck = (brand) => {
    const newChecked = [...valueByBrand];

    const currentType = newChecked.indexOf(brand);

    if (currentType === -1) {
      newChecked.push(brand);
    } else {
      newChecked.splice(currentType, 1);
    }
    const actionByBrand = getByBrand(newChecked);
    dispatch(actionByBrand);
  };
  return (
    <div className="refine-by-brand">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.info
              .filter((e) => e.id === valueIdType)
              .map((e) =>
                e.info.map((e) => (
                  <li key={e.id}>
                    <input
                      type="checkbox"
                      id={e.id}
                      checked={valueByBrand.includes(e.brand) ? true : false}
                      onChange={() => handleCheck(e.brand)}
                    />
                    <label htmlFor={e.id}>
                      {e.brand} (
                      {
                        countProducts.filter(
                          (product) => product.brand === e.brand
                        ).length
                      }
                      )
                    </label>
                  </li>
                ))
              )
          )}
      </ul>
    </div>
  );
};

export default ByBrand;
