type AppState = {
    counter? : number,
    result? : Array<number>
}

type ActionType = {
    type : string,
    payload? : number,
    index?: number,
    counter? : number
}

type DispatchType = (action : ActionType) => ActionType