import React, {useEffect, useRef } from 'react'

//preserves the vlaue
//doesn't trigger re-render

const UseRef = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }
    useEffect(() => {
        refContainer.current.focus();
    })

    return (
        <>
            <h2>Use Ref</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer } />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div ref={divContainer}>hello world</div>
        </>
    )
};

export default UseRef;