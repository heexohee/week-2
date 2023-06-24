import React from 'react'
import Child from 'Child'//import해줘야 함!

function App() {
  const name='test';

  return <Child 
  age={21} 
  name={name}>
    이름
    </Child>;
    //현재 props가 세개!-> App.js에서 받을 것
  
}

export default App

