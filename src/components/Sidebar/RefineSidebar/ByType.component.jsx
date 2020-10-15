import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByType } from "../../../redux/sidebar/sidebarAction";

const ByType = (props) => {
  const { types } = props;
  const dispatch = useDispatch();

  const { valueIdTitle, valueByType } = useSelector((state) => state.sidebar);
  const countProducts = useSelector((state) => state.product.countProducts);

  console.log(types);
  console.log(countProducts);

  const onChange = (type) => {
    const newChecked = [...valueByType];

    const currentType = newChecked.indexOf(type);

    if (currentType === -1) {
      newChecked.push(type);
    } else {
      newChecked.splice(currentType, 1);
    }
    const actionByType = getByType(newChecked);
    dispatch(actionByType);
  };

  return (
    <div className="refine-by-type">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.info.map((e) => (
              <li key={e.id}>
                <input
                  type="checkbox"
                  id={e.id}
                  checked={valueByType.includes(e.type) ? true : false}
                  onChange={() => onChange(e.type)}
                />
                <label htmlFor={e.id}>
                  {e.type}(
                  {
                    countProducts.filter((product) => product.type === e.type)
                      .length
                  }
                  )
                </label>
              </li>
            ))
          )}
      </ul>
    </div>
  );
};

export default ByType;
