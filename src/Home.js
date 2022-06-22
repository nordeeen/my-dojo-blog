import React from "react";
import { useState } from "react";

// Multiple Components
const Home = () => {
  const [name, setName] = useState("luigi");
  const [age, setAge] = useState(30);

  const handleBtn = () => {
    setName("Jhon Doe");
    setAge(24);
  };

  // function handleClick() {
  //   alert("hello, ninjas");
  // }

  // const handleClickAgain = (nama, e) => {
  //   console.log(`hello, ${nama}`, e.target);
  // };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p style={{ padding: "10px" }}>
        {name} is {age} years old
      </p>
      <button onClick={handleBtn}>Please Click</button>

      {/* <button style={{ marginLeft: "8px" }} onClick={handleClick}>
        click me
      </button>
      <button onClick={(e) => handleClickAgain("Dian", e)}>
        click me again
      </button> */}
    </div>
  );
};

export default Home;
