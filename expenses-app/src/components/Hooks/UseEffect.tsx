import { useEffect, useState } from "react";

const UseEffect = () => {

    let [counter, setCounter] = useState<number>(0)
    let [isValid, setIsValid] = useState(true)
    
    // ComponentDidMount
    // useEffect(() => {
    //     console.log("UseEffect Callback function called")
    // }, [])
    
    // ComponentDidUpdate
    // useEffect(() => {
    //     console.log("UseEffect Callback function called")
    // }, [counter, isValid])

    // ComponentWillUnmount
    useEffect(() => {
        let identifier = setTimeout(( )=>{
            // Make remote Server call
            console.log("UseEffect Callback");
        }, 1000)
        return () => {
            clearInterval(identifier);
            console.log("Clean-up")
        }
    }, [counter, isValid])

    useEffect(() => () => console.log("Empty Clean up"), []);
    
    return (
        <div>
            <p>Counter : {counter} </p>
            <button className="btn btn-primary" onClick={() => setCounter(counter+1)}>
                Increase
            </button>
            <button className="btn btn-secondary" onClick={() => setIsValid(!isValid)}>
                Toggle Validity
            </button>
        </div>
    )

}
export default UseEffect;