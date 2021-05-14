import React from 'react';

const { useRef } = React;
export default function UseRefHook() {
  const buttonRef = useRef();
  return (
    <div>
      <h1>React Ref - useRef Hook</h1>
      <button ref={buttonRef} onClick={() => console.log(buttonRef.current)}>
        Hooks Use Ref Btn
      </button>
    </div>
  );
}
