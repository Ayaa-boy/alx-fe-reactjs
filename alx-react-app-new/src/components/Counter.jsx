// src/components/Counter.jsx
import React, { useState } from 'react'; // Import useState hook

function Counter() {
  // Initialize state using useState. 'count' is the state variable,
  // 'setCount' is the function to update it, and 0 is the initial value.
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Event handler for resetting the count
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      border: '1px solid #007bff', // Added some inline style for visual appeal
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#333' }}>Current Count: {count}</p>
      <button onClick={increment} style={{ margin: '5px', padding: '10px 15px', fontSize: '1em' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 15px', fontSize: '1em' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px', padding: '10px 15px', fontSize: '1em' }}>Reset</button>
    </div>
  );
}

export default Counter;