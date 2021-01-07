import React, { useState } from 'react';

function TernaryOperator() {
    const [isError,setIsError] = useState(false);

    return (
        <>
            <h2>Ternary operator</h2>
            <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>
            {isError ? <h1>Error...</h1> : ""}
        </>
    );
}

export default TernaryOperator;
