import React from 'react';

import { useState } from "react";

 function App() {
 
  const [color,setcolor] = useState("Yellow")
  
  return (
    <div style={{backgroundColor : color }}>
    <div className='h-screen border-white px-104 py-140 m-4'>
    <button onClick={()=> setcolor("blue")}
    className='px-4 py-6 text-2xl text-white' style={{backgroundColor : "blue"}}>Blue</button>

 <button onClick={()=> setcolor("green")}
    className='px-4 py-6 text-2xl text-white' style={{backgroundColor : "green"}}>green</button>

     <button onClick={()=> setcolor("red")}
    className='px-4 py-6 text-2xl text-white' style={{backgroundColor : "red"}}>red</button>
    </div>
    </div>
  );
}
export default App

