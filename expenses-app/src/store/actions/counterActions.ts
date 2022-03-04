
export const ADD_COUNTER = "ADD_COUNTER"
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER"
export const INCREMENT_BY_TEN = "INCREMENT_BY_TEN" 
export const DECREMENT_BY_FIVE = "DECREMENT_BY_FIVE"
export const STORE_RESULT = "STORE_RESULT"

// Action Creators

export function onStoreResult() : ActionType{
    return {
        type : STORE_RESULT
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