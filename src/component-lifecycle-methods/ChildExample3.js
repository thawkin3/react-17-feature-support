import React, { Component } from 'react';
import './ChildExample.css';

export class ChildExample3 extends Component {
  /*
   * Called before the component mounts
   * Use the constructor to initialize your state, bind "this" to any of your methods you need to
   * DON'T use the constructor to perform any side effects. Use componentDidMount for side effects.
   *
   * Some info about super():
   *      https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
   *      http://cheng.logdown.com/posts/2016/03/26/683329
   */
  constructor(props) {
    console.group('constructor');
    super(props);
    console.log('props:', props);
    console.log('this.props:', this.props);
    console.groupEnd();

    this.state = {
      clickCount: 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  /*
   * Called after the component mounts (after the render method is called for the first time)
   * Use componentDidMount to work with the DOM (only if needed!) or to make AJAX requests
   */
  componentDidMount() {
    console.group('componentDidMount');
    console.groupEnd();
  }

  /*
   * Use shouldComponentUpdate to control whether the render method should be called
   * Return either true (the default) or false
   * Generally you don't need to use this, so just let React do its thing and decide for you when things should be updated
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.group('shouldComponentUpdate');
    console.log(
      'this.props:',
      this.props,
      'nextProps:',
      nextProps,
      'this.state:',
      this.state,
      'nextState:',
      nextState
    );
    console.groupEnd();
    return true;
  }

  /*
   * Use getDerivedStateFromProps to return a new state object in response to prop changes
   * Return null if no changes to state are needed
   * This can essentially be used in place of componentWillMount and componentWillReceiveProps if you need to update state
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.group('getDerivedStateFromProps');
    console.log('nextProps:', nextProps, 'prevState:', prevState);
    console.groupEnd();
    return null;
  }

  /*
   * getSnapshotBeforeUpdate is called just before the new content is rendered to the DOM
   * Use it to capture current values and then pass them into the componentDidUpdate lifecycle hook
   * Return null for no data, or an object (or any data type, really) for whatever data you want to store
   * This can essentially be used in place of componentWillUpdate
   */
  getSnapshotBeforeUpdate() {
    console.group('getSnapshotBeforeUpdate');
    console.groupEnd();
    return null;
  }

  /*
   * componentDidUpdate is called immediately after an update occurs
   * Use componentDidUpdate to work on the DOM or to make AJAX requests (very similar to componentDidMount)
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group('componentDidUpdate');
    console.log(
      'prevProps:',
      prevProps,
      'this.props:',
      this.props,
      'prevState:',
      prevState,
      'this.state:',
      this.state,
      'snapshot:',
      snapshot
    );
    console.groupEnd();
  }

  /*
   * componentWillUnmount is called immediately before a component is removed from the DOM
   * This is a good place to do any cleanup like clearing out any timers or intervals you may have set
   */
  componentWillUnmount() {
    console.group('componentWillUnmount');
    console.groupEnd();
  }

  /*
   * Increments the counter as an example of working with state
   */
  incrementCounter() {
    console.log(this);
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }));
  }

  /*
   * Renders your content to the DOM
   */
  render() {
    console.group('render');
    console.groupEnd();
    return (
      <div
        className="ChildExample"
        style={{ background: `${this.props.backgroundColor}` }}
      >
        <p>
          I'm the third example child component. I'm just a div. I don't use any
          legacy lifecycle methods and instead use new lifecycle methods like
          getDerivedStateFromProps and getSnapshotBeforeUpdate.
        </p>
        <p>
          This is the background color prop I've received from my parent:{' '}
          {this.props.backgroundColor}
        </p>
        <div>
          <button type="button" onClick={this.incrementCounter}>
            Click me to increment the counter
          </button>
        </div>
        <p>Click count: {this.state.clickCount}</p>
      </div>
    );
  }
}
