import { useDispatch, useSelector } from "react-redux";
import * as counterActions from '../../../store/actions/counterActions';

const StoreCounter = ( ) => {
    let result = useSelector((state : AppState) => state.result);
    const dispatch : DispatchType =  useDispatch()

    const onStoreResultHandler = () => dispatch(counterActions.onStoreResult())

    return (
        <div className="row">
            <div className="col-4 offset-4">
                <button className="btn btn-block btn-success" onClick={onStoreResultHandler} >Store Result</button>
                <ul className="list-group">
                    {
                        result.map((r,i) => <li key={i} className="list-group-item"> {r}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default StoreCounter;