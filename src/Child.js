import React from 'react'
//child안에서 props를 받을 수 있다. 
//구조 분해 할당한 모습 -> 이렇게 쓰면 어떤 Child, 어떤 props가 
// 있는지를 명시적으로 알 수 있다.
function Child({age, name, children}) {
  console.log(age);
  console.log(name);
  console.log(children);

    return 
    <div>Child</div>;
  
}

export default Child