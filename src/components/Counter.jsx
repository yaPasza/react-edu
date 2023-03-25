import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1 className="m-1">{count}</h1>
            <button className="btn btn-primary m-1" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-primary m-1" onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default Counter;