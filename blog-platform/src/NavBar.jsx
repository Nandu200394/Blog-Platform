import { Link } from "react-router-dom";
import "./css/NavBar.css"
import { getCurrentUser, logout } from "./services/Loginservice";

function NavBar() {
    const user=getCurrentUser()
   /*const handelLogout =()=>{
    logout()
   }*/
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Blogger_icon_2017.svg/1200px-Blogger_icon_2017.svg.png"/></Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Blogs" className="nav-link">Blogs</Link>
            <Link to="/Create" className="nav-link">Create</Link>
            <Link to="/Edit" className="nav-link">Edit</Link>
            {user==="Guest" ?
            <Link to="/Login" className="nav-link">Login</Link>:<div onClick ={()=>{logout()}} className="nav-link">Logout</div>}
            
        </div>
    </nav>
}

export default NavBar