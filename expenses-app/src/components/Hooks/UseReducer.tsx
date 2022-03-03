import { useReducer } from "react";

enum ActionTypes {
  INCREMENT,
  DECREMENT,
  STORE_RESULT
}
interface Action {
  type: ActionTypes;
  payload?: number;
}

interface CounterState {
  counter: number;
  result : Array<number>;
}

const reducerFn = (prevState: CounterState, action: Action) : CounterState=> {
    if(action.type === ActionTypes.INCREMENT){
        return { 
            ...prevState,
            counter : prevState.counter + action.payload! 
        }
    }else if(action.type === ActionTypes.DECREMENT){
        return { 
            ...prevState,
            counter : prevState.counter - action.payload! 
        }
    }else if(action.type === ActionTypes.STORE_RESULT){
        return {
            ...prevState,
            result : [prevState.counter, ...prevState.result]
        }
    }else{
        return prevState;
    }
};

const UseReducer = () => {
    const [state, dispatchFn] = useReducer(reducerFn, { counter: 0, result : [] });
  
  const increaseHandler = () => {
    dispatchFn({
      type: ActionTypes.INCREMENT,
      payload: 10,
    });
  };

  const decreaseHandler = () => {
      dispatchFn({
          type : ActionTypes.DECREMENT,
          payload : 5
      })
  }

  const storeResultHandler = () => {
      dispatchFn({type : ActionTypes.STORE_RESULT})
  }
  return (
    <div className="text-center">
      <p className="display-4">Counter : {state.counter} </p>
      <button className="btn btn-primary" onClick={increaseHandler}>
        Increase
      </button>
      <button className="btn btn-warning" onClick={decreaseHandler}>
        Decrease
      </button>
      <hr />
      <div className="row">
          <div className="col-6 offset-3">
              <button className="btn btn-success" onClick={storeResultHandler}>Store</button>
          </div>
      </div>
      <br />
      <ul className="list-group">
          {state.result.map((r, index) => {
            return <li key={index} className="list-group-item">{r}</li>
          }
          )}
      </ul>
    </div>
  );
};

export default UseReducer;
