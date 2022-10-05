import React from 'react';
import { CallbackRefDemo } from './CallbackRefDemo';
import { CreateRefDemo } from './CreateRefDemo';
import { LegacyStringRefDemo } from './LegacyStringRefDemo';
import { UseRefDemo } from './UseRefDemo';

export const RefsDemo = () => {
  return (
    <div className="section">
      <h2>Refs</h2>
      <p>
        <a href="https://reactjs.org/docs/refs-and-the-dom.html">Refs</a> can be
        created several different ways.
      </p>
      <p>
        React.createRef() and the useRef hook are the current recommended
        approaches. Callback refs are discouraged, and string refs are
        deprecated.
      </p>
      <CreateRefDemo />
      <UseRefDemo />
      <CallbackRefDemo />
      <LegacyStringRefDemo />
    </div>
  );
};
