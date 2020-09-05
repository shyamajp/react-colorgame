import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Twitter, Facebook } from "react-sharingbuttons";
import { twitter, facebook } from "../../config/share";

export const Finish = ({ timer, restartGame }) => {
  const [score, setScore] = useState(null);
  const now = new Date().toString();

  useEffect(() => {
    // set score to display
    setScore((timer.endAt - timer.startAt) / 1000);
    return () => {
      // reset score on leaving
      setScore(null);
    };
  }, [timer]);

  return (
    <div className="ui column">
      <div className="ui card grid centered row">
        <div className="content">
          <div className="header">YOUR FINAL SCORE</div>
          <div className="meta">{now}</div>
          <div className="description">
            <table className="w100">
              <tbody>
                <tr>
                  <td>Mode</td>
                  <td>EASY</td>
                </tr>
                <tr>
                  <td>Missed</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>{score}s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="ui grid row centered mt-l">
        <li className="neumorphic-box" onClick={() => restartGame()}>
          <i className="power icon"></i>
          Restart
        </li>
      </div>
      <div className="ui grid row centered">
        <li className="neumorphic-box">
          <i className="twitter icon"></i>
          <Twitter
            url={twitter(score).url}
            shareText={twitter(score).shareText}
          />
        </li>
        <li className="neumorphic-box">
          <i className="facebook icon"></i>
          <Facebook url={facebook().url} />
        </li>
      </div>
    </div>
  );
};

const mapStateToProps = ({ timer }) => {
  return { timer };
};

export default connect(mapStateToProps)(Finish);
