import { useDispatch } from "react-redux";
import * as counterActions from '../../../store/actions/counterActions';
const CounterAction = () => {

    const dispatch : DispatchType = useDispatch()

    const increaseHandler = () => {
        // dispatch({type : "INCREMENT"})
        dispatch(counterActions.onIncrement());
    }

    const decreaseHandler = () => dispatch(counterActions.onDecrement());

    const addCounterHandler = () => dispatch(counterActions.onAddTen(10));

    const subtractCounterHandler = () => dispatch(counterActions.onSubtractFive(5))

    return (
        <div className="text-center">
            <div className="btn-group">
                <button className="btn btn-primary" onClick={increaseHandler}>Increase</button>
                <button className="btn btn-secondary" onClick={decreaseHandler}>Decrease</button>
                <button className="btn btn-info" onClick={addCounterHandler}>ADD (10)</button>
                <button className="btn btn-warning" onClick={subtractCounterHandler}>Subtract (5)</button>
            </div>
        </div>
    )

}

export default CounterAction;