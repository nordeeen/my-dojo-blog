import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "welcom to the new blog";
  const likes = 50;
  const link = "https://www.unsplash.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p>{likes}</p>
        <a href={link}>Unsplash Site</a>
      </div>
    </div>
  );
}

export default App;
