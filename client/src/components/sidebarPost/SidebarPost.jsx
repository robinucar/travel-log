import "./sidebarPost.css";
import { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../../context/Context";
import 'react-edit-text/dist/index.css';
import axios from "axios";

export default function SidebarPost() {
  const [file, setFile] = useState(null);
  const [ cats, setCats ] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [about, setAbout] = useState('');
  const [post, setPost] = useState({});
  const [categories, setCategories] = useState([]);
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  // FETCH CATEGORIES DATA
  useEffect(() => {
      const getCats = async () => { 
          const res = await axios.get("/posts/" + path) 
          await setCategories(res.data.categories);
          console.log(res, 'getcats')
      };
      getCats();
  }, []);

  // FETCH ABOUT ME DATA
  useEffect(() => {
    const getAbt = async () => { 
        const res = await axios.get(`/users/${user._id}`)
        await setAbout(res.data);
        console.log(res, 'getabt')
    };
    getAbt();
}, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <div className="settingsPP">
            <img
              src={PF+post.profilePic}
              alt=""
            />
          </div>
          <p>{post.aboutMe}</p>
          <p>{console.log(post.username, post.aboutMe)}</p>
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
        <span className="sidebarTitle">FOLLOW ME</span>
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

// onSave={handleSave}
