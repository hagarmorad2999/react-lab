import { Link } from "react-router-dom";
import Language from "../language/Language";

export default function Navbar(){
    return<>
 <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link" to="">Movies</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="trending">Trending Movies</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="favourite">Favourite</Link>

  </li>

  <li className="nav-item">
  <Link className="nav-link" to="login">Login</Link>

  </li>
  <li className="nav-item">
  <Link className="nav-link" to="signup">Signup</Link>

  </li>

  <li className="nav-item">
  <Link className="nav-link" >Logout</Link>

  </li>
  
  <li className="nav-item">
  <Language/>
  </li>
</ul>
    </>
    
    
    }