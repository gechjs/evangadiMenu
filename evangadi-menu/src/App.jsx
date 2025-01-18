import "./App.css";
import "./commonResource/data";
import FoodItem from "./Components/FoodItem";
import Menu from "./commonResource/data";

function App() {

  return (
    <>
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
        </header>
        <div className="foods-container">
          {Menu.map(({ id, price, desc, title, img }) => (
            <FoodItem
              key={id}
              price={price}
              desc={desc}
              title={title}
              img={img}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
