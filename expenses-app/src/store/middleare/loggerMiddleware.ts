// const Logger = (state) => (next) => (action) => next(action)

import { Middleware, MiddlewareAPI } from "redux";

export const logger : Middleware = function(state : MiddlewareAPI){
    return function(next : DispatchType){
        return function(action : ActionType){
            console.log("[Logger works]")
            return next(action);
        }
    }
}
