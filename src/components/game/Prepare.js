import React from "react";

const Prepare = ({ loadGame }) => {
  return (
    <div className="w100">
      <h2 className="ui header">
        <i className="ui icon question circle"></i>
        <div className="content">How to play</div>
      </h2>
      <h3 className="ui block header">Rules</h3>
      <h2 className="ui header center aligned">Find Lightest Color!</h2>
      <h4 className="ui header center aligned">Be accurate and quick.</h4>
      <br />
      <div className="ui column centered grid">
        <li
          className="neumorphic-box"
          onClick={() => {
            loadGame();
          }}
        >
          <i className=" power icon"></i>
          Start
        </li>
      </div>
    </div>
  );
};

export default Prepare;
