import { Link } from 'react-router-dom';
import '../App.css'

export default function NavBar() {
    const class1 = 'nav'
    const class2 = 'sticky-nav'
    return (
        <nav className = {class1 + class2}>
            <h1> Task Master </h1>
            <ul>
                <li><Link to="/" >Home </Link> </li>
                <li><Link to="/addtask" >Add New Task </Link> </li>
                <li><Link to="/tasklist" >View Task List </Link> </li>
            </ul>
        </nav>
    )
}