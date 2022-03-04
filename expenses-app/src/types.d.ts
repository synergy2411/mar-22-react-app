type AppState = {
    counter : number
}

type ActionType = {
    type : string,
    payload? : number
}

type DispatchType = (action : ActionType) => ActionType