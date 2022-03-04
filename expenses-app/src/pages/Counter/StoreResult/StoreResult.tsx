import { useDispatch, useSelector } from "react-redux";
import * as counterActions from '../../../store/actions/counterActions';
import classes from './StoreResult.module.css';

const StoreCounter = ( ) => {
    let result = useSelector((state : {res : {result : Array<number>}}) => state.res.result);
    
    let counter = useSelector((state : {ctr : {counter : number}}) => state.ctr.counter);
    const dispatch : DispatchType =  useDispatch()

    const onStoreResultHandler = () => dispatch(counterActions.onStoreResult(counter))

    const itemDeleteHandler = (idx : number) => dispatch(counterActions.onDeleteResult(idx))

    return (
        <div className="row">
            <div className="col-4 offset-4">
                <button className="btn btn-block btn-success" onClick={onStoreResultHandler} >Store Result</button>
                <ul className="list-group">
                    {
                        result!.map((r,i) => (
                        <li key={i} 
                        className={`list-group-item ${classes["my-list"]}`}
                        onClick = {() => itemDeleteHandler(i)}
                        > {r}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default StoreCounter;