import React from "react";

// only this is needed to create a context object (the data pipe)
const Context = React.createContext("english");

class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
