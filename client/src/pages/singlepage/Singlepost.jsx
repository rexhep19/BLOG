import "./singlepost.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Single from "../../components/single/Single";

function Singlepost() {
  return (
    <>
      <div className="singlePage">
        <Single />
        <Sidebar />
      </div>
    </>
  );
}

export default Singlepost;
