import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    // timer has started and has ended
    if (!!props.timer.startAt && !!props.timer.endAt) {
      clearInterval(interval);
      // timer has started and has NOT ended
    } else if (!!props.timer.startAt && !props.timer.endAt) {
      interval = setInterval(() => {
        let now = new Date().getTime();
        let time = ((now - props.timer.startAt) / 1000).toFixed(1); // round to 1 decimal place
        setTime(time);
      }, 100);
      // timer has NOT started or has been reset
    } else {
      setTime((0.0).toFixed(1));
    }
    return () => clearInterval(interval);
  }, [props.timer.startAt, props.timer.endAt]);

  return (
    <div className="ui column centered grid secondary menu mt-s">
      <li className="neumorphic-box">
        {!!props.timer.startAt ? (
          <>
            <i className="clock icon"></i>
            {time}
          </>
        ) : (
          <Link to="/">
            <i className="gamepad icon"></i>Play
          </Link>
        )}
      </li>
      <li className="neumorphic-box">
        <Link to="/about">
          <i className="info circle icon"></i>
          About
        </Link>
      </li>
      <li className="neumorphic-box">
        <Link to="/settings">
          <i className="settings icon"></i>
          Settings
        </Link>
      </li>
    </div>
  );
};

const mapStateToProps = (props) => {
  return props;
};

export default connect(mapStateToProps, actions)(Header);
