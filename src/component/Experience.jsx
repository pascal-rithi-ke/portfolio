import {data} from "../data_web/info";
import Contact from "./Contact";

function Experience() {
    return (
        <div className="experience light">
            <h2>My Experience</h2>
            <ul className="cards">
                {data.experience.map((exp, index) => (
                    <div key={index}>
                        <li>
                            <div className="card">
                                <div style={{ backgroundImage: `url(${exp.img})` }} className="card__image"></div>
                                <div className="card__overlay">
                                    <div className="card__header">             
                                        <img className="card__thumb" src={exp.img} alt={exp.title}/>
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
                <ul>
                    {data.tech_lang.map((tech_lang, index) => (
                        <li key={index}>
                            <img className="card__thumb" src={tech_lang.img} alt={tech_lang.title}/>
                            <p>{tech_lang.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tech_framework">
                <h2>Framework</h2>
                <ul>
                    {data.tech_framework.map((tech_framework, index) => (
                        <li key={index}>
                            <img className="card__thumb" src={tech_framework.img} alt={tech_framework.title}/>
                            <p>{tech_framework.title}</p>   
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tech_bdd">
                <h2>Database</h2>
                <ul>
                    {data.tech_bdd.map((tech_bdd, index) => (
                        <li key={index}>
                            <img className="card__thumb" src={tech_bdd.img} alt={tech_bdd.title}/>
                            <p>{tech_bdd.title}</p>   
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tech_tools">
                <h2>Tools</h2>
                <ul>
                    {data.tech_tool.map((tech_tool, index) => (
                        <li key={index}>        
                            <img className="card__thumb" src={tech_tool.img} alt={tech_tool.title}/>
                            <p>{tech_tool.title}</p> 
                        </li>
                    ))}
                </ul>
            </div>
            <Contact/>
        </div>
    );
}

export default Experience;
