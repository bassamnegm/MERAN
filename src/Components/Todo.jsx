import React, { useState } from 'react'
import './todo.css'
function Todo() {
    const [input, setInput] = useState('');
    const [arr, setArr] = useState([]);
    function addInput() {
        setArr([...arr, { text: input, done: false }]);
    }
    function changeInput(e) {
        setInput(e.target.value);
    }
    function beDone(index) {
        arr[index].done = !arr[index].done;
        setArr([...arr]);
    }
    function removeLi(index) {
        arr.splice(index, 1);
        setArr([...arr]);
    }
    return (
        <>
            <div id="myDIV" className="header">
                <h2 style={{ margin: 5 }}>My To Do List</h2>
                <input onChange={changeInput} type="text" id="myInput" placeholder="Title..." />
                <span onClick={addInput} className="addBtn">
                    Add
                </span>
            </div>
            <ul id="myUL">
                {
                    arr.map((item, index) => {
                        return <li onClick={() => beDone(index)} className={item.done && 'checked'} key={index} >{item.text} <span onClick={() => removeLi(index)} className='close'>X</span></li>


                    })
                }

            </ul>
        </>
    )
}

export default Todo