import React, { useState } from "react";

function FoodItem(props) {
  const [text, setText] = useState("read more");

  const read = (event) => {
    const desc = event.currentTarget.previousElementSibling;
    desc.classList.toggle("expanded");
    const parent = event.currentTarget.parentElement.parentElement;
    parent.classList.toggle("extended");

    // Toggle the button text
    const toggleText = text === "read more" ? "read less" : "read more";
    setText(toggleText);
  };

  return (
    <div className="single-food">
      <div className="img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="title-price">
        <h3>{props.title}</h3>
        <p>{props.price}</p>
      </div>
      <div className="food-desc-container">
        <p className="food-desc">{props.desc}</p>
        <button onClick={read} className="read-more-btn">
          {text}
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
