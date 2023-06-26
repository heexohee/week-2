import React, { useState } from 'react'
import Child from 'Child'//import해줘야 함!

function App() {
  

  // hook
  // 구조 분해 할당으로
  // const [state, useState] = useState('initial Value');
 
  //const [count, setCount] = useState(0); 
  //const [todoList, setTodoList] = useState([]);

  const [name, setName] = useState("김할아부지");


  return (<div>
   {name}
   <br/>
   <button 
   onClick = {function(){
   alert("hello");
  }}
   >
    클릭</button>
   </div>)
}

export default App

