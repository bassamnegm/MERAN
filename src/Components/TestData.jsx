import React, { useEffect, useState } from 'react'
import style from './Test.module.css'
let i = 0;
function TestData() {
    // init mounting  component life cycle
    let [name, setName] = useState("ali");
    const [count, setCount] = useState(0);

    const [flag, setFlag] = useState(false);
    console.log(name);

    // console.log(i);
    // setTimeout(() => {
    //     i++;
    //     setName('sayed');

    // }, 2000);
    useEffect(() => {
        // component did mount life cycle most use  api requests 
        console.log("ok render done");
    }, []);
    function counter(x) {
        setCount(count + 1);
        setFlag(!flag);
    }
    let ui;
    if (flag == true) {
        ui = <h1>hi in our web site</h1>
    }
    else
        ui = <h1>error </h1>
    return (
        <>
            <button onClick={() => counter()}> click</button>
            <h1 className={flag ? style.iti : style.red}>{count}</h1>
            {flag ? <h1>hi</h1> : <h1>error</h1>}
            {flag && <h2>hallo  </h2>}


        </>



    )
}

export default TestData