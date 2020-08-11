import React from "react";                                  // load react library
import LanguageContext from "../contexts/LanguageContext";

class LangugageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);

    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.context.onLanguageChange("english")} />
        <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
      </div>
    );
  }
}

export default LangugageSelector;