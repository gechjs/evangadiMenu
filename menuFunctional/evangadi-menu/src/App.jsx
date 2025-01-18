import "./App.css";
import "./commonResource/data";
import { Component } from "react";
import FoodItem from "./Components/FoodItem";
import Menu from "./commonResource/data";

function App() {
  return (
    <div className="all-container ">
      <header className="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
      <div className="foods-container">
        {Menu.map((obj) => {
          return (
            <FoodItem
              key={obj.id}
              price={obj.price}
              desc={obj.desc}
              title={obj.title}
              img={obj.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
