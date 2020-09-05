import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import classNames from "classnames";

const Box = ({ id, deleted, color, changeBoxState }) => {
  return (
    <div
      className={classNames({
        box: true,
        deleted: deleted,
      })}
      style={{ backgroundColor: color }}
      onClick={() => changeBoxState(id)}
    ></div>
  );
};

const mapStateToProps = ({ box }) => {
  return { box };
};

export default connect(mapStateToProps, actions)(Box);
