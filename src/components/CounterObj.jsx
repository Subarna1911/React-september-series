import React from 'react'
import { useState } from 'react'

const CounterObj = () => {

    const[count, setCount] = useState(0);

    const actions = {
        increment:()=> setCount(count + 1),
        decrement: ()=> setCount (count - 1),
        reset: ()=> setCount( 0)
    };
     
  return (
    <div>

        <h1>counter component using object</h1>
        <div>
            <div>count:{count}</div>
            <button className='bg-green-600 p-4 w-md' onClick={actions.increment }>Incerment</button>
            <button className='bg-red-600 p-4 w-md' onClick={actions.decrement }>decrement</button>
            <button className='bg-blue-600 p-4 w-md' onClick={actions.reset }>reset</button>
        </div>
      
    </div>
  )
}

export default CounterObj
