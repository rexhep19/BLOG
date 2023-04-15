import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerText">
        <span className="smallHeaderText">React & Node</span>
        <span className="bigHeaderText">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  );
};

export default Header;
