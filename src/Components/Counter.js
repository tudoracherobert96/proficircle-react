import React, { useState, useEffect } from 'react';

function Counter() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        if(count > 0){
            document.title = 'New Messages(' + count + ')';
        }
    });

    const increaseCounter = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        })
    };

    return (
        <>
            <h2>Simple counter</h2>
            <p>{count}</p>
            <button onClick={() => increaseCounter()}>Increase Counter</button>
        </>
    );
}

export default Counter;
