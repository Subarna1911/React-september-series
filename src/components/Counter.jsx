
import React from 'react'
import { useState } from 'react'

const Counter = () => {

const[isCount, setIsCount]  = useState(0);

const handleIncreClick = ()=>{
    setIsCount(isCount + 1);
}


const handleDecClick = ()=>{
    setIsCount(isCount - 1);
}

const handleReset = ()=>{
    setIsCount(0);
}



  return (
    <div className='bg-amber-300 px-5 py-7 text-center w-full'>
      <h1>React Counter App</h1>
      <div>
        <div> count : {isCount}</div>
        <button onClick={handleIncreClick} className='bg-green-500'>Increment</button>
        <button onClick={handleDecClick} className='bg-red-500'>Decrement</button>
        <button onClick={handleReset} className='bg-blue-500'>Reset</button>
      </div>

    </div>
  )
}

export default Counter
