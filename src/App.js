import React from 'react';
import './style.css';
import UseRefHook from './functionalComponents/useRefHook';
import CreateRefComponent from './classComponents/createRefComponent';
import CallbackRefComponent from './classComponents/callbackRefComponent';
import CallbackRefParentComponent from './classComponents/callbackRefParentChild/callbackRefParentComponent';
import StringRefComponent from './classComponents/stringRefComponent';
import ForwardRefParentComponent from './classComponents/forwardRefParentChild/forwardRefParentComponent';

export default function App() {
  return (
    <div>
      <UseRefHook />
      <CreateRefComponent />
      <CallbackRefComponent />
      <CallbackRefParentComponent />
      <StringRefComponent />
      <ForwardRefParentComponent />
    </div>
  );
}
