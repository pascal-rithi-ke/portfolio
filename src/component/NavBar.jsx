import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="link">
            <Link to="/">Home</Link>
            <Link to="project">Project</Link>
        </div>
    )
}
export default NavBar;