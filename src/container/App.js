import Experience from "../component/Experience";
import photo from "../images/photo.jpg";

function App() {
  return (
    <div className="presentation">
      <h2 className="light">I'm Kien<br/>Eng Pascal<br/>A fullstack developer</h2>
      <img className="profil_photo" src={photo}/>
      <div className="wave light"></div>
      <Experience className="light"/>
    </div>
  );
}

export default App;
