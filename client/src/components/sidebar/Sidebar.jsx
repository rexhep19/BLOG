import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [cat, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <span className="sidebarHeader">About me</span>
      <img
        className="sidebarImg"
        src="https://images.pexels.com/photos/7713199/pexels-photo-7713199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <p className="sidebarDesc">
        Hi, I'm Rexhep Azizi, a passionate programmer exploring the coding
        world. This blog chronicles my tech journey, sharing insights and
        inspiration. Join me in uncovering the future of programming!
      </p>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link
              key={c._id}
              to={`/?cat=${c.name}`}
              className="sidebarListItem link"
            >
              {c.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
