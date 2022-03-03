import { useRef } from "react";

const UseRef = ( ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const clickHandler = () => {
        console.log(inputRef.current)
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default UseRef;