// const Logger = (state) => (next) => (action) => next(action)

import { Middleware } from "redux";

export const logger : Middleware = function(state){
    return function(next){
        return function(action){
            console.log("[Logger works]")
            return next(action);
        }
    }
}