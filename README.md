# React 17 Feature Support

This demo app shows what functionality does or does not work in React 17. This is meant to help guide teams in upgrading their apps from React 16 to React 17.

## React 17 Blog Posts

- https://reactjs.org/blog/2020/10/20/react-v17.html
- https://reactjs.org/blog/2020/08/10/react-v17-rc.html#other-breaking-changes

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

`findDOMNode` is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction.

In most cases, you can attach a ref to the DOM node and avoid using `findDOMNode` at all.

`findDOMNode` still works in React 17.

### findDOMNode Docs

- https://reactjs.org/docs/react-dom.html#finddomnode
