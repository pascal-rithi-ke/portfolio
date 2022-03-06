import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="link light">
            <Link to="/portfolio">Home</Link>
            <span>|</span>
            <Link to="portfolio/project">Project</Link>
        </div>
    )
}
export default NavBar;