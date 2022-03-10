import "./sidebar.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useLocation } from "react-router";
import 'react-edit-text/dist/index.css';
import axios from "axios";

export default function Sidebar() {
  const [file, setFile] = useState(null);
  const [ cats, setCats ] = useState([]);
  const [aboutMe, setAboutMe] = useState('');
  const [about, setAbout] = useState('');
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const [updateMode, setUpdateMode] = useState(false);
  
  const handleSave = async () => {
    try{
    const res = await axios.post(`/users/${user._id}/aboutme`, {
      aboutMe: aboutMe
    });
    setUpdateMode(false)
    window.location.reload(true);
    console.log(res);
    } catch (err) {}
  };

  // FETCH CATEGORIES DATA
  useEffect(() => {
      const getCats = async () => { 
          const res = await axios.get("/categories") 
          await setCats(res.data);
          console.log(res, 'getcats')
      };
      getCats();
  }, []);

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
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
          </div>

            {updateMode ? (
          <textarea
            type="text"
            value={aboutMe}
            className="my-custom-view-wrapper"
            placeholder="Tell me about yourself..."
            autoFocus
            onChange={(e) => setAboutMe(e.target.value)}
          /> 
        ) : (
          <p>
            {about.aboutMe}
            {about.username === user?.username && ( <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>)}
          </p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleSave}>
            Save
          </button>
        )}

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
