import { useSelector } from "react-redux";
import CounterAction from "./CounterAction/CounterAction";
import StoreCounter from "./StoreResult/StoreResult";

const Counter = () => {

    let counter = useSelector((state : AppState)=> state.counter)

    return (
        <div className="container">
            <p className="display-4 text-center"> Counter is {counter}</p>
            <br />
            <CounterAction />
            <hr />
            <StoreCounter />
        </div>
    )
}
export default Counter;