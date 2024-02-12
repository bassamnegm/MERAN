import React, { useContext } from 'react'
import { counterContext } from '../context/counterContext'
import { useDispatch } from 'react-redux'
import { increaseCounter } from '../Redux/slices/counterSlice'

function Home() {
    const dispatch = useDispatch()
    //const { count, setCount } = useContext(counterContext);
    return (
        <div>

            <button onClick={() => dispatch(increaseCounter(10))}> counter</button>
        </div>
    )
}

export default Home