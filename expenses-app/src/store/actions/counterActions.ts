
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"
export const INCREMENT_BY_TEN = "INCREMENT_BY_TEN" 
export const DECREMENT_BY_FIVE = "DECREMENT_BY_FIVE"
export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"

// Action Creators

export function onDeleteResult(index : number) : ActionType{
    return {
        type : DELETE_RESULT,
        index
    }
}

export function onStoreResult(counter : number) : ActionType{
    return {
        type : STORE_RESULT,
        counter
    }
}

export function onSubtractFive(payload : number) : ActionType{
    return {
        type : DECREMENT_BY_FIVE,
        payload
    }
}

export function onAddTen(payload : number): ActionType{
    return {
        type : INCREMENT_BY_TEN,
        payload
    }
}

export function onIncrement() : ActionType{
    return {
        type : ADD_COUNTER
    }
}

export function onDecrement() : ActionType {
    return {
        type : SUBTRACT_COUNTER
    }
}