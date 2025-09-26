import React from 'react'
import ChipsInput from './components/ChipsInput'
import DrakMode from './components/DrakMode'
import ToggleMode from './components/ToggleMode'
import Accordian from './components/Accordian'
import Counter from './components/Counter'
import CounterObj from './components/CounterObj'

const App = () => {
  return (

    <div>
      <Counter/>
      <CounterObj/>

      <Accordian/>
      <ChipsInput/>
      <DrakMode/>
      <ToggleMode/>
    </div>

  )
}

export default App
