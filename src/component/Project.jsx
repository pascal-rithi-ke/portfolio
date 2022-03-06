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
            <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
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