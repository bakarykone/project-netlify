import data from "../data/home.json";
import market from "../assets/marketing-img.svg"

function Home() {
  return (
    <div className="headerHome">
      <div>
        <h1 className="homeTitle">{data.home.title}</h1>
        <p className="homeSubtitle">{data.home.desc}</p>
        <div className="lines">
          <div className="line">
            <p className="para">{data.home.line1}</p>
          </div>
          <div className="line">
            <p className="para">{data.home.line2}</p>
          </div>
          <div className="line">
            <p className="para">{data.home.line3}</p>
          </div>
        </div>
      </div>
      <div className="market">
        <img src={market} alt={"market"} />
      </div>
    </div>
  );
}

export default Home;
