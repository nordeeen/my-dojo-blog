import "./App.css";

function App() {
  const title = "welcom to the new blog";
  const likes = 50;
  const link = "https://www.unsplash.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{likes}</p>
        <a href={link}>Unsplash Site</a>
      </div>
    </div>
  );
}

export default App;
