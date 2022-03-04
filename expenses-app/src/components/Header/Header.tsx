import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/todos">TodoList</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/add-todo">Add Todo</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/expenses">Expenses App</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </nav>    
        </header>
    )
}
export default Header;