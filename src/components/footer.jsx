import logo from "../assets/logo.png";
import data from "../data/footer.json";

function Footer() {
  return (
    <div className="">
      <div className="logo2">
        <img src={logo} alt={"logo"}/>
      </div>
      <div className="copyright">{data.footer.text}</div>
    </div>
  );
}

export default Footer;
