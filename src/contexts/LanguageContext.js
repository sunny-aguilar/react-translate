import React from "react";

// only this is needed to create a context object (the data pipe)
const Context = React.createContext("english");

class LanguageStore extends React.Component {
  state = { language: "english" };
  render() {

  }
}
