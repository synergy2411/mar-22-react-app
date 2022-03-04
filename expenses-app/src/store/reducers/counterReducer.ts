
const initialState : AppState = {
    counter : 0
} 

export function counterReducer(state : AppState = initialState, action : ActionType){
    console.log("[STATE]", state);
    console.log("[ACTION]", action);
    return state
}