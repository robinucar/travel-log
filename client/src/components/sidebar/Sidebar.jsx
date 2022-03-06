import "./sidebar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
  const [ cats, setCats ] = useState([]);

  useEffect(() => {
      const getCats = async () =>
      { 
          const res = await axios.get("/categories")
          console.log(res.data)
          await setCats(res.data);
          console.log(setCats)
      };
      getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          deleniti accusantium voluptas dolores cupiditate adipisci, alias eaque
          doloribus at aspernatur, nesciunt quos blanditiis quia maiores? Harum
          laboriosam id quaerat labore.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">MOST VISITED CITIES</span>
        <ul className="sidebarList">
          {cats?.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
