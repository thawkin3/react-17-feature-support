# React 17 Feature Support

This demo app shows what functionality does or does not work in React 17. This is meant to help guide teams in upgrading their apps from React 16 to React 17.

## Component Lifecycle Methods

Class components use lifecycle methods. Three of them have been deprecated since React v16.3 in March 2018:

- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

Each of these can be prefixed with `UNSAFE_` to guarantee that they'll work longer, like this:

- `UNSAFE_componentWillMount`
- `UNSAFE_componentWillReceiveProps`
- `UNSAFE_componentWillUpdate`

In React 17, all of these deprecated lifecycle methods still work, even without using the `UNSAFE_` prefix:

- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`
- `UNSAFE_componentWillMount`
- `UNSAFE_componentWillReceiveProps`
- `UNSAFE_componentWillUpdate`

In React 18, only the `UNSAFE_` names work for these deprecated lifecycle methods.

- `UNSAFE_componentWillMount`
- `UNSAFE_componentWillReceiveProps`
- `UNSAFE_componentWillUpdate`

### Component Lifecycle Methods Docs

- https://reactjs.org/docs/react-component.html
- https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

## Refs

Refs can be created several different ways:

- `React.createRef()`
- `useRef` hook
- Callback refs
- Legacy string refs

`React.createRef()` and the `useRef` hook are the current recommended approaches. Callback refs are discouraged, and string refs are deprecated. But, all four of these approaches still work in React 17.

### Refs Docs

- https://reactjs.org/docs/refs-and-the-dom.html

## findDOMNode

TODO
