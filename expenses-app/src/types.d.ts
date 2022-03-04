type AppState = {
    counter : number,
    result : Array<number>
}

type ActionType = {
    type : string,
    payload? : number
}

type DispatchType = (action : ActionType) => ActionType