import "./sidebar.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(location.pathname)
  console.log(path)
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setCategories(res.data.categories)
    };
    getPost();
    
  }, [path]);
  

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
        <span className="sidebarTitle">VISITED CITIES</span>
        <ul className="sidebarList">
          
          {/* {categories.map(elm => {
            return <li>{elm}</li>
          }) */}
           {categories.toString().split(',').map(elm => {
             console.log(elm.trim())
             return <li>{elm.trim().charAt(0).toUpperCase() + elm.trim().slice(1)}</li>
           })}
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
