import AuthContext from "../../../context/auth-context"
import { useContext } from 'react'

const ExpenseDate : React.FC<{createdAt : Date}> = (props) => {
    const ctx = useContext(AuthContext)
    // ctx.isLoggedIn = false;
    const day = props.createdAt.toLocaleString("en-US", { day : "numeric"})
    const month = props.createdAt.toLocaleString("en-US", { month : "long"})
    const fullYear = props.createdAt.getFullYear()
    return (
        <div>Created At : {ctx.isLoggedIn! && <p>{month} {day}, {fullYear}</p>} </div>

        // <AuthContext.Consumer>
        //     {(ctx) => {
        //         return (
        //             <div>
        //                 Created At : {ctx.isLoggedIn! && <p>{month} {day}, {fullYear}</p>}
        //             </div>
        //         )
        //     }
        //     }
        // </AuthContext.Consumer>
    )
}

export default ExpenseDate;