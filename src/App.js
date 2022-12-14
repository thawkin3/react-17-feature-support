import React from 'react';
import './App.css';
import { ComponentLifecyclesDemo } from './component-lifecycle-methods/ComponentLifecyclesDemo';
import { FindDOMNodeDemo } from './find-dom-node/FindDOMNodeDemo';
import { RefsDemo } from './refs/RefsDemo';

function App() {
  return (
    <main className="App">
      <h1>React 17 App</h1>
      <ComponentLifecyclesDemo />
      <RefsDemo />
      <FindDOMNodeDemo />
    </main>
  );
}

export default App;
