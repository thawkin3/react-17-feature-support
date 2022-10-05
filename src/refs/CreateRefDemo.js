import React, { Component, createRef } from 'react';

export class CreateRefDemo extends Component {
  constructor(props) {
    super(props);

    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <h3>React.createRef()</h3>
        <label>
          Username
          <input type="text" ref={this.textInput} />
        </label>
        <button type="button" onClick={this.focusTextInput}>
          Focus the text input
        </button>
      </div>
    );
  }
}
