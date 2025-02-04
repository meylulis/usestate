import React, { useState } from 'react';

function DisplayText() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />
      <p>Вы ввели: {text}</p>
    </div>
  );
}

export default DisplayText;