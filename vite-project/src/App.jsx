import { useState } from "react";

 function App() {
   
  let [counter,setCounter]= useState(15)
  const addvalue = ()=>{
    setCounter(counter+1)
  } 
  const lessvalue = ()=>{
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
