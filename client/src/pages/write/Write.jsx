import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import {Context} from '../../context/Context'

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([])
  const { user } = useContext(Context);
console.log(categories)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      aboutMe: user.aboutMe,
      profilePic: user.profilePic,
      title,
      categories,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);

      window.location.replace("/");

    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <span>
          <input
            type="text"
            placeholder="Title"
            className="writeTitle"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          <br/>
          <input
            type="text"
            placeholder="City"
            className="writeCity"
            autoFocus={true}
            onChange={e=>setCategories(e.target.value)}
          />
          </span>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
          <button className="writeSubmit" type="submit">
          Publish
          </button>
      </form>
    </div>
  );
}