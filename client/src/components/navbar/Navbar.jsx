import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import defaultPicture from "../../images/default.jpg";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/default.jpg";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClass = isMenuOpen ? "navbarCenter-open" : "";

  return (
    <div className="Navbar">
      {!isMenuOpen && <div className="logo">Blog</div>}
      <div className="navbarLeft">
        <i className="navbarSocial fa-brands fa-instagram"></i>
        <i className="navbarSocial fa-brands fa-facebook"></i>
        <i className="navbarSocial fa-brands fa-square-twitter"></i>
      </div>
      <div className={`navbarCenter ${menuClass}`}>
        <ul className="navbarLinksHolder">
          <li className="navbarLinks">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navbarLinks">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="navbarLinks">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </li>
          {user ? (
            <li onClick={handleLogout} className="navbarLinks">
              <Link className="link" to={"/"}>
                Logout
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="navbarRight">
        {user ? (
          <Link to={"/settings"}>
            <img
              className="navbarImg"
              src={user.profilePic ? PF + user.profilePic : defaultPicture}
              alt=""
            />
          </Link>
        ) : (
          <ul className={`topList ${menuClass}`}>
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {user ? (
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        ) : null}
      </div>
      <div className="toggler" onClick={handleToggler}>
        <i className="menu fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
