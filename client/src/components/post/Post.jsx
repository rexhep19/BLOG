import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PublicFolder = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PublicFolder + post.photo} alt="" />
      )}
      <div className="headerInfo">
        <span className="category">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </span>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postTime">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postDesc">{post.desc}</p>
      </div>
      <p></p>
    </div>
  );
}

export default Post;
