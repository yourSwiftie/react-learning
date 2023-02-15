import React, { useState } from 'react';

function Test({ name, age = 18 }) {
  return (
    <h1>
      name:{name},age:{age}
    </h1>
  );
}

function App() {
  const [value, setValue] = useState(0);

  const person = {
    name: 'John',
    age: undefined, // 如果是null，则不使用默认age
  };

  return (
    <>
      value:{value}
      <button type='button' onClick={() => setValue(preState => ++preState)}>
        {/**注意++在前与在后的区别 **/}+
      </button>
      <button type='button' onClick={() => setValue(preState => --preState)}>
        {/**注意--在前与在后的区别 **/}-
      </button>
      <Test {...person} />;
    </>
  );
}

export default App;
