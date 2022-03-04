import { useState } from "react";

const DummyCounter = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <div>
            <p role="para">Counter is {counter}</p>
            <button role="increase" onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
    )
}

export default DummyCounter;