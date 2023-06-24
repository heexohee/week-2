import React from 'react'
//child안에서 props를 하나 받을 수 있다. 
function Child({age, name, children}) {
  console.log(age);
  console.log(name);
  console.log(children);

    return 
    <div>Child</div>;
  
}

export default Child