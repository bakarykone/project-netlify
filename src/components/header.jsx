import logo from "../assets/logo.png";
import "../App.css";
import data from "../data/header.json";
import banner from "../assets/banner.png";

function Header() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt={"logo"} />
      </div>
      <div className="header">
        <div>
          <h1 className="headerTitle">{data.header.title}</h1>
          <p className="subtitle">{data.header.text}</p>
          <button className="btn">{data.header.button}</button>
        </div>
        <div className="bannerHead">
          <img src={banner} alt={"banner image"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
