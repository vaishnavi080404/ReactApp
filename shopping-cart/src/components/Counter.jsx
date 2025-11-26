import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice'

const Counter = () => {

    const count = useSelector((state=>state.counter.value))//slice k ansdar se value access useSelector se hoti h ->fisrt it goes to store and then to slice
    const dispatch = useDispatch() //dispatch is used to dispatch "actions" to the reducer
  return (
    <div>
      <button
      onClick={() =>dispatch(increment())}
       >
        Increment
      </button>
      <br/>
      <br/>
      <div>
       {count}
      </div>
      <br/>
      <br/>
      <button
       onClick={() =>dispatch(decrement())}
      >
        Decrement
      </button>

    </div>
    
  )
}

export default Counter
