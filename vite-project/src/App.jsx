import { useState } from "react";

 function App() {
   
  let [counter,setCounter]= useState(15)
  const addvalue = ()=>{
    if(counter<20)
    setCounter(counter+1)
  else {
    h3
  }
  } 
  const lessvalue = ()=>{
    if(counter>0)
    setCounter(counter-1)}
  return (
    <>
    <h1>Value : {counter}</h1>
    <button onClick={addvalue}>Increase </button>
    <button onClick={lessvalue}>Decrease </button>
    
    
    </>
  );
}
export default App
