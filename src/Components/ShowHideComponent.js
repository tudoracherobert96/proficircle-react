import React, { useState, useEffect } from 'react';

const ShowHideComponent = () => {
    const [show,setShow] = useState(false);

    return (
        <>
            <h2>Show/Hide</h2>
            <button className="btn" onClick={() => setShow(!show)}>Toggle Component</button>
            {show ? <Item /> : ""}
        </>
    );
}

const Item = () => {
    const [size,setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize',checkSize);
        }
    },[])

    return(
        <>
        <div>
            <h1>The Item component.</h1>
            <h3>Width:{size}</h3>
        </div>
        </>
    )
}

export default ShowHideComponent;
