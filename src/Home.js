import React from "react";

// Multiple Components
const Home = () => {
  function handleClick() {
    alert("hello, ninjas");
  }

  const handleClickAgain = (nama, e) => {
    console.log(`hello, ${nama}`, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button style={{ marginLeft: "8px" }} onClick={handleClick}>
        click me
      </button>
      <button onClick={(e) => handleClickAgain("Dian", e)}>
        click me again
      </button>
    </div>
  );
};

export default Home;
