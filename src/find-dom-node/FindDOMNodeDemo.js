import React from 'react';
import { findDOMNode } from 'react-dom';

export const FindDOMNodeDemo = () => {
  const handleClick = () => {
    const sectionHeader = document.querySelector('#findDOMNodeHeader');
    const sectionHeaderDOMNode = findDOMNode(sectionHeader);
    console.log(sectionHeaderDOMNode);
  };

  return (
    <div className="section">
      <h2 id="findDOMNodeHeader">findDOMNode</h2>
      <p>
        findDOMNode is an escape hatch used to access the underlying DOM node.
        In most cases, use of this escape hatch is discouraged because it
        pierces the component abstraction.
      </p>
      <p>
        In most cases, you can attach a ref to the DOM node and avoid using
        findDOMNode at all.
      </p>
      <p>
        Click the button below to find the DOM node for the section header. It
        will be logged to the JavaScript console.
      </p>
      <button onClick={handleClick}>Find Section Header DOM Node</button>
    </div>
  );
};
