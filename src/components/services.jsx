import data from '../data/services.json'
import seo from '../assets/seo.svg'
import tech from '../assets/technology.svg'
import cloud from '../assets/cloud.svg'
import support from '../assets/support.svg'

function Services() {
  return (
    <div className="services">
      <div className="titreAndsub">
        <h1 className="titre">{data.services.title}</h1>
        <p className="subtitle">{data.services.subtitle}</p>
      </div>
      <div className="services-card">
        <div className="card">
          <img src={seo} className="icons" alt={"marketing"} />
          <div className="services-titre">{data.service1.title}</div>
          <div className="services-text">{data.service1.subtitle}</div>
        </div>
        <div className="card">
          <img src={tech} className="icons" alt={"technologie"} />
          <div className="services-titre">{data.service2.title}</div>
          <div className="services-text">{data.service2.subtitle}</div>
        </div>
        <div className="card">
          <img src={cloud} className="icons" alt={"cloud"} />
          <div className="services-titre">{data.service3.title}</div>
          <div className="services-text">{data.service3.subtitle}</div>
        </div>
        <div className="card">
          <img src={support} className="icons" alt={"support"} />
          <div className="services-titre">{data.service4.title}</div>
          <div className="services-text">{data.service4.subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
