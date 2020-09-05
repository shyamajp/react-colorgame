import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Box from "../Box";

const Play = (props) => {
  useEffect(() => {
    const lastBox = props.box.find((b) => b.id === props.box.length - 1);
    // finish game when all boxes are deleted
    if (lastBox.deleted === true) {
      props.finishGame();
    }
  }, [props]);

  const boxList = props.box.map((b) => {
    return <Box key={b.id} id={b.id} deleted={b.deleted} color={b.color} />;
  });

  return (
    <div id="game" className="w100">
      {boxList}
    </div>
  );
};

const mapStateToProps = ({ box }) => {
  return { box };
};

export default connect(mapStateToProps, actions)(Play);
