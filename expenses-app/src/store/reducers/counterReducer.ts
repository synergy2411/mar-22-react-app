import * as counterActions from '../actions/counterActions';

const initialState : AppState = {
    counter : 0,
    result : []
} 

export function counterReducer(state : AppState = initialState, action : ActionType) : AppState{
    switch (action.type) {
        case counterActions.ADD_COUNTER:{
            return {
                ...state,
                counter : state.counter + 1
            }
        }
        case counterActions.SUBTRACT_COUNTER:{
            return {
                ...state,
                counter : state.counter - 1
            }
        }
        case counterActions.INCREMENT_BY_TEN:{
            return {
                ...state,
                counter : state.counter + action.payload!
            }
        }
        case counterActions.DECREMENT_BY_FIVE:{
            return {
                ...state,
                counter : state.counter - action.payload!
            }
        }
        case counterActions.STORE_RESULT :{
            return {
                ...state,
                result : [state.counter, ...state.result]
            }
        }
        default:
            return state
    }
}