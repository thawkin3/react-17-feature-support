import React, { Component, createRef } from 'react';

export class LegacyStringRefDemo extends Component {
  constructor(props) {
    super(props);

    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.refs.textInput.focus();
  }

  render() {
    return (
      <div>
        <h3>Legacy String Ref</h3>
        <label>
          Username
          <input type="text" ref="textInput" />
        </label>
        <button type="button" onClick={this.focusTextInput}>
          Focus the text input
        </button>
      </div>
    );
  }
}
