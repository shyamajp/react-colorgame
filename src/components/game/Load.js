import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Load = ({ startGame, resetBoxState }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    // reset box state while loading
    resetBoxState();
    // start game when count is 0 - wait for 3 seconds
    count === 0 && startGame();
    // decrese count of number every second
    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => {
      // clear interval to avoid dmemory leak on leaving
      clearInterval(interval);
    };
  }, [count, startGame, resetBoxState]);

  return (
    <div className="parent">
      <h1 className="ui header child">{count}</h1>
      <div className="spin child"></div>
    </div>
  );
};

export default connect(null, actions)(Load);
