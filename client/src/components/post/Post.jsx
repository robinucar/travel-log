import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="Post Image" />
      )}
      <div className="postInfo">
        <Link to={`/post/${post._id}`}>
          <span className="postTitle"> {post.title} </span>
        </Link>
        <hr />
        <span className="postDate">
          {" "}
          {new Date(post.createdAt).toDateString}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
