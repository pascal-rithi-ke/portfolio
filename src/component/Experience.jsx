import {data} from "../data_web/info";
import Contact from "./Contact";

function Experience(){
    return(
    <div className="experience light">
        <h2>My Experience</h2>
        <ul className="cards">
        {data.experience.map((project)=>(
            <div key={project.title}>
            <li>
            <div className="card">
            <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                <img className="card__thumb" src={project.img}/>
                <div className="card__header-text">
                  <p className="card__title">{project.title}</p>
                  <p className="card__status">{project.subtitle}</p>
                </div>          
              </div>
              <p className="card__description">{project.description}</p>
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
export default Experience;