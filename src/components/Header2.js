import { useNavigate, Link } from "react-router-dom";
// import homebanner from "./homebanner.css";

const Header2 = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return(
    <header className="topNav2">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo2" src="./Ankitaassets/netflix-logo.png" alt="logo" />
          </Link>
          
          <div className="navbar2">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger" onClick={clickHandler}>Sign In</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header2;