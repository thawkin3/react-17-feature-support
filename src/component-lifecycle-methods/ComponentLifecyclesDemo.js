import React, { Component } from 'react';
import { ChildExample1 } from './ChildExample1';
import { ChildExample2 } from './ChildExample2';
import { ChildExample3 } from './ChildExample3';

export class ComponentLifecyclesDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChildComponent1: false,
      showChildComponent2: false,
      showChildComponent3: false,
      backgroundColorForChild: '',
    };

    this.toggleChildComponent1 = this.toggleChildComponent1.bind(this);
    this.toggleChildComponent2 = this.toggleChildComponent2.bind(this);
    this.toggleChildComponent3 = this.toggleChildComponent3.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  toggleChildComponent1() {
    this.setState((prevState) => ({
      showChildComponent1: !prevState.showChildComponent1,
    }));
  }

  toggleChildComponent2() {
    this.setState((prevState) => ({
      showChildComponent2: !prevState.showChildComponent2,
    }));
  }

  toggleChildComponent3() {
    this.setState((prevState) => ({
      showChildComponent3: !prevState.showChildComponent3,
    }));
  }

  inputChangeHandler(e) {
    this.setState({
      backgroundColorForChild: e.target.value,
    });
  }

  render() {
    return (
      <div className="section">
        <h2>React Component Lifecycle Methods</h2>

        <div>
          <p>
            Open up your JavaScript Console to see what's logged as you interact
            with the app.
          </p>
          <p>
            The{' '}
            <a
              href="https://reactjs.org/docs/react-component.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Component documentation
            </a>{' '}
            will be incredibly helpful in understanding the inner workings of
            React.
          </p>
        </div>

        <div className="buttonContainer container">
          <button type="button" onClick={this.toggleChildComponent1}>
            Toggle showing Child Component 1
          </button>
          <button type="button" onClick={this.toggleChildComponent2}>
            Toggle showing Child Component 2
          </button>
          <button type="button" onClick={this.toggleChildComponent3}>
            Toggle showing Child Component 3
          </button>
        </div>

        <div className="inputContainer container">
          <label htmlFor="backgroundColorInput">
            Background color for child component:{' '}
          </label>
          <input
            id="backgroundColorInput"
            type="text"
            value={this.state.backgroundColorForChild}
            onChange={this.inputChangeHandler}
          />
        </div>

        {this.state.showChildComponent1 && (
          <ChildExample1 backgroundColor={this.state.backgroundColorForChild} />
        )}
        {this.state.showChildComponent2 && (
          <ChildExample2 backgroundColor={this.state.backgroundColorForChild} />
        )}
        {this.state.showChildComponent3 && (
          <ChildExample3 backgroundColor={this.state.backgroundColorForChild} />
        )}
      </div>
    );
  }
}
