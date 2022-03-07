import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="Post Image" />
      )}
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            <span className="postCat" key={c.id}>
              {c.name}
            </span>;
          })}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postTitle"> {post.title} </span>
        </Link>
        <hr />
        <span className="postDate">
          {" "}
          {new Date(post.createdAt).toDateString}
        </span>
      </div>
      <p className="postDesc"></p>
    </div>
  );
}
