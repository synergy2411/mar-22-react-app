import { useSelector } from "react-redux";

const Counter = () => {

    let counter = useSelector((state : AppState)=> state.counter)

    return (
        <div>Counter is {counter}</div>
    )
}
export default Counter;