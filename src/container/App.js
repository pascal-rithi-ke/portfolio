import Experience from "../component/Experience";
import photo from "../images/photo.jpg"

function App() {
  return (
    <div className="light presentation">
      <h2>I'm Kien<br/>Eng Pascal<br/>A fullstack developer</h2>
      <img className="profil_photo" src={photo}/>
      <div className="wave"></div>
      <Experience/>
    </div>
  );
}

export default App;
