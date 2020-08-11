import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // how to wire LanguageContext (contextType is a special name that must be used)
  // static contextType = LanguageContext;

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(color) =>
          <button className={ `ui button ${color}`}>
            <LanguageContext.Consumer>
              {{ langugage } => value === "english" ? "Submit" : "Voorleggen"}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;