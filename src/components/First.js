import React, { useEffect, useState,useMemo,useCallback } from "react";

function First() {
  const [add,setAdd]=useState(0);
  const [sub,setSub]=useState(100);

  const increment=useCallback(()=>{
    setAdd(add+1);
  },[add])

  const decrement=useCallback(()=>{
    setSub(sub-1);
  },[sub])

  useEffect(()=>{
    document.title = `You clicked ${add} times`;
});


 useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    console.log(sum);
    return sum;
  }, []);
  
  


  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Increment: {add}</p>
      <button onClick={decrement}>Decrement</button>
      <p>Decrement: {sub}</p>
    </div>
  );
}

export default First;
