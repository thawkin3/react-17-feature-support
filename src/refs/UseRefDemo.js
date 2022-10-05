import React, { useRef } from 'react';

export function UseRefDemo() {
  // textInput must be declared here so the ref can refer to it
  const textInput = useRef(null);
  
  function focusTextInput() {
    textInput.current.focus();
  }

  return (
    <div>
        <h3>useRef Hook</h3>
        <label>Username
          <input
            type="text"
            ref={textInput}
          />
        </label>
        <button
          type="button"
          onClick={focusTextInput}
        >Focus the text input</button>
      </div>
  );
}