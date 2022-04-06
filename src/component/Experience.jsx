import {data} from "../data_web/info";
import Contact from "./Contact";

function Experience(){
    return(
    <div className="experience light">
        <h2>My Experience</h2>
        <ul className="cards">
        {data.experience.map((exp)=>(
            <div key={exp.title}>
            <li>
            <div className="card">
              <div style={{backgroundImage: `url(${exp.img})`}} className="card__image"></div>
            <div className="card__overlay">
              <div className="card__header">             
                <img className="card__thumb" src={exp.img}/>
                <div className="card__header-text">
                  <p className="card__title">{exp.title}</p>
                  <p className="card__status">{exp.subtitle}</p>
                </div>          
              </div>
              <p className="card__description">{exp.description}</p>
            </div>
          </div>
        </li>
        </div>
        ))}
        </ul>
      <div className="tech_lang">
        <h2>Language</h2>
        {data.tech_lang.map((tech_lang)=>(
          <li>
            <img className="card__thumb" src={tech_lang.img}/>
            <p>{tech_lang.title}</p>
          </li>
        ))}
        </div>
        <div className="tech_framework">
        <h2>FrameWork</h2>
        {data.tech_framework.map((tech_framework)=>(
            <li>
              <img className="card__thumb" src={tech_framework.img}/>
              <p>{tech_framework.title}</p>   
            </li>
        ))}
        </div>
      <div className="tech_bdd">
        <h2>Database</h2>
        {data.tech_bdd.map((tech_bdd)=>(
            <li>
              <img className="card__thumb" src={tech_bdd.img}/>
              <p>{tech_bdd.title}</p>   
            </li>
        ))}
        </div>
      <div className="tech_tools">
        <h2>Tools</h2>
        {data.tech_tool.map((tech_tool)=>(
            <li>        
              <img className="card__thumb" src={tech_tool.img}/>
              <p>{tech_tool.title}</p> 
            </li>
        ))}
        </div>
    <Contact/>
    </div>
    );
}
export default Experience;