import {data} from "../data_web/info";
import Contact from "./Contact";

function Project(){
    return(
    <div className="project light">
        <h2>My Projects</h2>
        <div className="wave"></div>
        <ul className="cards">
        {data.project.map((data,index)=>(
            <div key={index}>
            <li>
            <div className="card">
            <div style={{backgroundImage: `url(${data.img})`}} className="card__image"></div>
            <div className="card__overlay">
              <div className="card__header">
                <img className="card__thumb" src={data.img}/>
                <div className="card__header-text">
                  <p className="card__title">{data.title} {data.subtitle}</p>
                  <a href={data.link} className="card__status">Link</a>
                </div>          
              </div>
              <p className="card__description">{data.description}</p>
            </div>
          </div>
        </li>   
        </div>
        ))}
        </ul>
      <Contact/>
    </div>
    );
}
export default Project;