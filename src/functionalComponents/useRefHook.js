import React from 'react';

const { useRef } = React;
export default function UseRefHook() {
  const buttonRef = useRef();
  return (
    <div>
      <h4>This button has a ref</h4>
      <button ref={buttonRef} onClick={() => console.log(buttonRef.current)}>
        Hooks Use Ref Btn
      </button>
    </div>
  );
}
