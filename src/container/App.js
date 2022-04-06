import Experience from "../component/Experience";
import Info from "../component/Info";

import photo from "../images/photo.jpg";

function App() {
  return (
    <>
    <div className="presentation">
      <h2 className="light">I'm<br/>Kien Eng Pascal<br/>A fullstack developer</h2>
      <img className="profil_photo" src={photo}/>
      <div className="wave light"></div>
      </div>
      <Info></Info>
      <Experience className="light"/>
   
    </>
  );
}

export default App;
