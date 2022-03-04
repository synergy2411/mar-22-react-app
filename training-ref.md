# What is React ?
- Render the UI quickly
- No Direct DOM manipulation
- Virtual DOM
- Component based
- Client side JavaScript library
- SPA (react-router)
- Large Community support
- Easy learning path
- Faster rendering
- Data binding
- 25-30 Kb
- Declarative
- Form Validation (third-party)
- State Management (redux)

# Component - reusable piece of code
- set of controls
- HTML + JavaScript
- Small part of UI
- JSX converted into HTML

# Atomic Design in Web-designing
- Atom : Smallest unit. e.g single button, single input box
- Molecule : Combo of atoms e.g searchbar - one button + one input field
- Organism : Combo of molecules - e.g navigation bar - various links + Searchbar
- Template : Combo of organism - e.g complete form
- Page : complete page

# Thinking in React

# React App
- React - renders the UI
- React DOM - connects react app with real DOM

> npx create-react-app <app-name> --template typescript
> cd expenses-app
> npm start / npm run start -> triggers webpack-dev-server -> loads the public/index.html -> Index.tsx

(Hot module reloading - HMR)

> npm run eject - configuration -> Webpack-dev-server config



# What is DOM ?
- Document Object Model
- Hierarchical HTML Element representation
html
    head
        link
        script
        meta
    body
        div
            p
        ul
            li 
                a    

# Component Types 
- Class based component : class keyword
- Functional component : functional approach

React v16.8 - hooks - simple function, provide some functionality
- useState
- useEffect
- useContext
- useParams

# Packages Commands
- npm i bootstrap@4
- npm i uuid @types/uuid


- React Introduction
- Props
- functional components
- state management in functional component
- Lifting up the state - functional props
- control the form element state


- Styles
    > inline styles : Radium
    > CSS Module system : CSS Scoped to component
    > Global CSS : import CSS file 
- Form Validation
    > react-form-hook
    > formik
- Hooks / hitting REST endpoints
- SPA
- Context API


#  to installl Radium
> npm install radium @types/radium

# to validate form control
> npm install react-hook-form


# Component Types (before v16.8) - useState()
- Stateless / Functional Comp / Presentational Comp / Dump
- Stateful / Class Based / Container Comp / Smart

- Functional Components : useEffect()


# React - to render the UI quickly
> Side Effects - e.g set the state, making XHR call, async operation etc

# Working with useEffect -
- useEffect(CallbackFn) : executes at initial stage/rendering and after each state update
- useEffect(CallbackFn, []) / componentDidMount : execute after initial rendering 
- useEffect(CallbackFn, [Dependencies]) / componentDidUpdate : execute after initial rendering and after each dependency state update
- useEffect(CallbackFn => CleanupFn, [Dependencies]) / componentWillUnmount : Clean-up function executes before callback function, but NOT after initial rendering

- Initial Rendering : UseEffect Callback Function
- update the state (Counter, isValid) - 
    > Clean-up Function
    > UseEffect Callback Function
- Unload the Component
    > Clean-up Function


# useReducer - maintain the complex state; one state is dependent on other state;

const [state, dispatchFn] = useReducer(reducerFn, initialState)

reducerFn = (prevState, action) => newState

# useContext : Context API
# useRef : direct access to DOM using references


# useParams
# useHistory
# useLocation


http://our-domain.com/about -> About Component
http://our-domain.com/products -> Products Component

# npm install react-router-dom@5 @types/react-router-dom@5




# Redux
# Integrate redux with react
# Test
# MongoDB

> npm i redux react-redux @types/react-redux

> npm install --save redux-devtools-extension