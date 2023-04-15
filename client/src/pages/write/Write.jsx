import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../components/context/Context";
import "./write.css";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handlePublish = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      photo: null,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    console.log(newPost);
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      <form action="" onSubmit={handlePublish}>
        <div className="writeGroup">
          {file && (
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
          )}
          <div className="headerWrite">
            <label htmlFor="writeFile">
              <i className=" writeIcon fa-thin fa-plus"></i>
            </label>
            <input
              id="writeFile"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              placeholder="Title"
              className="writeTitle"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="publishButton">
              Publish
            </button>
          </div>
        </div>
        <div className="writeGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Write;
