import React, { Component } from 'react';

export class CallbackRefDemo extends Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      if (this.textInput) {
        this.textInput.focus();
      }
    };
  }

  render() {
    return (
      <div>
        <h3>Callback Ref</h3>
        <label>Username
          <input
            type="text"
            ref={this.setTextInputRef}
          />
        </label>
        <button
          type="button"
          onClick={this.focusTextInput}
        >Focus the text input</button>
      </div>
    );
  }
}
