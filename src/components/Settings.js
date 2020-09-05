import React, { useEffect } from "react";
import { Checkbox, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

const languages = [
  { short: "en", long: "English" },
  { short: "jp", long: "日本語" },
];

const Settings = (props) => {
  useEffect(() => {
    props.settings.nightMode
      ? document.querySelector("html").setAttribute("data-theme", "dark")
      : document.querySelector("html").setAttribute("data-theme", "normal");

    props.settings.language === "en"
      ? document.querySelector("html").setAttribute("lang", "en")
      : document.querySelector("html").setAttribute("lang", "jp");

    return () => {};
  }, [props]);

  const languageList = languages.map((l) => {
    return (
      <Form.Field key={l.long}>
        <Checkbox
          radio
          disabled={l.short !== "en"}
          label={l.long}
          name="lang"
          value={l.short}
          checked={props.settings.language === l.short}
          onChange={() => props.changeLanguage(l.short)}
        />
      </Form.Field>
    );
  });

  return (
    <div className="w100">
      <h2 className="ui header">
        <i className="ui icon settings"></i>
        <div className="content">Settings</div>
      </h2>

      <h3 className="ui block header">Display Mode</h3>
      <div>
        <h5>Night Mode: {props.settings.nightMode ? "ON" : "OFF"}</h5>
        <Checkbox
          toggle
          onChange={() => props.changeDisplayMode()}
          checked={props.settings.nightMode}
        />
      </div>

      <h3 className="ui block header">Display Language</h3>
      <Form>{languageList}</Form>
    </div>
  );
};

const mapToState = ({ settings }) => {
  return { settings };
};

export default connect(mapToState, actions)(Settings);
