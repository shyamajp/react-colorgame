import React from "react";

const About = () => {
  return (
    <div className="w100">
      <div>
        <h2 className="ui header">
          <i className="ui icon info circle"></i>
          <div className="content">About</div>
        </h2>

        <h3 className="ui block header">ColorGame</h3>
        <p>
          ColorGame is a simple color game developed by{" "}
          <a href="https://github.com/meripirn">meripirn</a>. The objective of
          ColorGame is to find the lightest color as quickly as possible.
          Setting aside the primary use of the app, players can make use of its
          content as a test - if your monitor displays clear colors or even
          better, for a quick eye test.
        </p>

        <h3 className="ui block header">Technologies</h3>
        <div>
          Technologies that have been used to develop this app are the
          followings:
          <br />
          <div className="ui list">
            <li className="item">
              <i className="right triangle icon"></i>
              <div className="content">
                <div className="header">React</div>
                <div className="description">
                  This app is developed in{" "}
                  <a href="https://reactjs.org/">React</a>, fully with React
                  Hooks.
                </div>
              </div>
            </li>
            <li className="item">
              <i className="right triangle icon"></i>
              <div className="content">
                <div className="header">Redux</div>
                <div className="description">
                  The state of the entire application is maintained by{" "}
                  <a href="https://redux.js.org/">Redux</a>.
                </div>
              </div>
            </li>
            <li className="item">
              <i className="right triangle icon"></i>
              <div className="content">
                <div className="header">Semantic UI</div>
                <div className="description">
                  Design is mostly done with great help of{" "}
                  <a href="https://semantic-ui.com/">Semantic UI</a>. Buttons
                  are inspired by neumorphic design.
                </div>
              </div>
            </li>
            <li className="item">
              <i className="right triangle icon"></i>
              <div className="content">
                <div className="header">Github</div>
                <div className="description">
                  This app is hosted at{" "}
                  <a href="https://pages.github.com/">Github pages</a>.
                </div>
              </div>
            </li>
            <br />
            Source code can be found at{" "}
            <a href="https://github.com/meripirn/colorgame">GitHub</a>.
          </div>
        </div>

        <h3 className="ui block header">Developer</h3>
        <p>
          I am a full-time cyber security student and part-time frontend
          developer.
        </p>
      </div>
    </div>
  );
};

export default About;
