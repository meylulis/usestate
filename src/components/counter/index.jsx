import React, { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Текущее значение: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default SimpleCounter;