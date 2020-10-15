import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getTitle,
  getType,
  getIdTitle,
  getIdType,
} from "../../redux/sidebar/sidebarAction";

const ShowSidebar = (props) => {
  const { types } = props;

  const dispatch = useDispatch();

  const { valueTitle, valueType } = useSelector((state) => state.sidebar);

  const toggleTitle = (id, title, info) => {
    let index = types.findIndex((x) => x.id === id);

    const actionGetTitle = getTitle(title);
    const actionGetType = getType((info = ""));
    const actionGetIdTitle = getIdTitle(id);

    if (index !== -1) {
      dispatch(actionGetIdTitle);
      dispatch(actionGetTitle);
      dispatch(actionGetType);
    }
  };

  const toggleSub = (id, type, typeMain) => {
    let index = typeMain.info.findIndex((x) => x.id === id);

    const actionGetType = getType(type);
    const actionGetIdType = getIdType(id);

    if (index !== -1) {
      dispatch(actionGetIdType);
      dispatch(actionGetType);
    }
  };
  return (
    <div className="show-result-for">
      <ul>
        {types.map((type) => (
          <li key={type.id}>
            <span
              className={valueTitle.includes(type.title) ? "active" : ""}
              onClick={() => {
                toggleTitle(type.id, type.title, type.info);
              }}
            >
              <i className="fa fa-angle-right"></i> {type.title}
            </span>

            <ul
              style={{
                display: valueTitle.includes(type.title) ? "block" : "none",
              }}
            >
              {type.info.map((sub) => (
                <li key={sub.id}>
                  <span
                    className={valueType.includes(sub.type) ? "active" : ""}
                    onClick={() => {
                      toggleSub(sub.id, sub.type, type);
                    }}
                  >
                    <i className="fa fa-angle-right"></i> {sub.type}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowSidebar;
