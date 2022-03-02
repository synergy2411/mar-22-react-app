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