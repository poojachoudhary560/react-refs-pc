import React from 'react';

const Input = React.forwardRef((props, ref) => <input type="text" ref={ref} />);

export default Input;
