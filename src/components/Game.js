import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Load from "./game/Load";
import Prepare from "./game/Prepare";
import Play from "./game/Play";
import Finish from "./game/Finish";

const STAGES = {
  PREPARE: 0,
  LOAD: 1,
  PLAY: 2,
  FINISH: 3,
};

const Game = ({ startTimer, stopTimer, resetTimer }) => {
  const [stage, setStage] = useState(STAGES.PREPARE);

  useEffect(() => {
    return () => {
      // set stage to prepare on leaving
      setStage(STAGES.PREPARE);
      // reset timer on leaving
      resetTimer();
    };
  }, [resetTimer]);

  if (stage === STAGES.PREPARE) {
    // passing props of loadGame - it will move to LOAD stage
    return <Prepare loadGame={() => setStage(STAGES.LOAD)} />;
  } else if (stage === STAGES.LOAD) {
    // passing props of startGame - it will start timer and move to PLAY stage
    return (
      <Load
        startGame={() => {
          startTimer();
          setStage(STAGES.PLAY);
        }}
      />
    );
  } else if (stage === STAGES.PLAY) {
    return (
      // passing props of finishGame - it will stop timer and move to FINISH stage
      <Play
        finishGame={() => {
          stopTimer();
          setStage(STAGES.FINISH);
        }}
      />
    );
  } else if (stage === STAGES.FINISH) {
    return (
      // passing props of restartGame - it will reset timer and move to PREPARE stage
      <Finish
        restartGame={() => {
          resetTimer();
          setStage(STAGES.PREPARE);
        }}
      />
    );
  }
};

export default connect(null, actions)(Game);
