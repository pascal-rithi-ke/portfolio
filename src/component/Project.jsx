import {data} from "../data_web/info";

function Project(){
    return(
        <>
        <h1>My Projects</h1>
        {data.map((project)=>(
            <div key={project.title} className={project.title}>
            <p>{project.title}</p>
            <li>{project.subtitle}</li>
            <li>Purpose: {project.description}</li>
            </div>
        ))}
        </>
    );
}
export default Project;