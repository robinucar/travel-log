import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="body">
    <div className="post">
      
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="Post Image" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            <span className="postCat" key={c.id}>
              {c.name}
            </span>;
          })}
        </div>
        <div className="info">
        <Link to={`/post/${post._id}`} style={{textDecoration: 'none', color: '#444'}}>
          <span className="postTitle"> {post.title} </span>
        </Link>
        <hr />
        <span className="postDate">
          {" "}
          {new Date(post.createdAt).toDateString}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      <button className="btn-post"><Link className="postButton" to={`/post/${post._id}`}>Read more</Link></button>
      </div>
    </div>
    </div>
    //example
  );
}
