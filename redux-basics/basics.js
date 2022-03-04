const { createStore } = require("redux");

const initialState = {
    todos : []
}

// Reducer Function
function reducerFn(state = initialState, action){

    if(action.type === "ADD_TODO"){
        return {
            todos : [...state.todos, action.text]
        }
    }else if(action.type === "DELETE_TODO"){
        const duplicateTodos = [...state.todos];
        duplicateTodos.splice(action.todoId, 1)
        return {
            todos : duplicateTodos
        }
    }
    return state;
}

const store = createStore(reducerFn)

// Subscribe
store.subscribe(() => {
    console.log("[UPDATED STATE]", store.getState());
})

// Dispatch Action
store.dispatch({type : "ADD_TODO", text : "need to brush"})

store.dispatch({type : "DELETE_TODO", todoId : 0})