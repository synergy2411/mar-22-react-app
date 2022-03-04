import * as counterActions from '../actions/counterActions';

const initialState : AppState = {
    result : []
} 

export function resultReducer(state : AppState = initialState, action : ActionType) : AppState{
    switch (action.type) {
        case counterActions.STORE_RESULT :{
            return {
                ...state,
                result : [action.counter!, ...state.result!]
            }
        }
        case counterActions.DELETE_RESULT : {
            let duplicateResult = [...state.result!];
            duplicateResult.splice(action.index!, 1)
            return {
                ...state,
                result : [...duplicateResult]
            }
        }
        default:
            return state
    }
}