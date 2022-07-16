import { useState } from 'react'
import { increment, decrement, changeValueIncrement } from './reducers/counterReducer';
import './App.css'
import { useCounterDispatch, useCounterSelector } from './store';



function App() {
  const count = useCounterSelector(state => state.rootReducer.counter.value)
  const dispatch = useCounterDispatch();

  return (
    <>
      <button onClick={() => dispatch({type: "counter/increment", payload: 69})}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>Counter: {count}</h1>
    </>
  )
}

export default App
