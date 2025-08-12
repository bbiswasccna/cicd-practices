import { useReducer } from 'react'
import './App.css'

const initialState = {count:0};

const reducer = (state, action) => {
        switch(action.type){
          case "increase" :
            return {count: state.count + 1};
          case "decrease" :
            return {count: state.count - 1};
          default:
            return state;
        }
        
    }

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
  
    const increaseCount = () => {
      dispatch({type:"increase"})
    }
    const decreaseCount = () => {
      dispatch({type:"decrease"})
    }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
