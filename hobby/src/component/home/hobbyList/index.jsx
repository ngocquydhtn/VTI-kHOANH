import React from "react";
import PropTypes from "prop-types";
import "./index.css";

HobbyList.defaultProps = {
  hobbyList: [],
  hobbyId: null,
  onClickActive: null,
};

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  hobbyId: PropTypes.number,
  onClickActive: PropTypes.func,
};

function HobbyList(props) {
  const { hobbyList, hobbyId, onClickActive } = props;
  const activeHobby = (hobbyId) => {
    if (onClickActive) {
      onClickActive(hobbyId);
    }
  };

  return (
    <React.Fragment>
      <ul>
        {hobbyList.map((res) => {
          return (
            <li
              onClick={() => {
                activeHobby(res.hobbyId);
              }}
              className={res.hobbyId === hobbyId ? "active" : ""}
              key={res.hobbyId}
            >
              {res.hobbyName}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
export default HobbyList;
