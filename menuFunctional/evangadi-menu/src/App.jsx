import "./App.css";
import "./commonResource/data";
import FoodItem from "./Components/FoodItem";


const Menu = [
  {
    id: 1,
    price: "$10",
    desc: "Delicious pasta with creamy sauce",
    title: "Pasta Alfredo",
    img: "pasta-alfredo.jpg",
  },
  {
    id: 2,
    price: "$12",
    desc: "Savory grilled chicken with herbs",
    title: "Grilled Chicken",
    img: "grilled-chicken.jpg",
  },
  {
    id: 3,
    price: "$8",
    desc: "Classic cheeseburger with fresh ingredients",
    title: "Cheeseburger",
    img: "cheeseburger.jpg",
  },
  {
    id: 4,
    price: "$5",
    desc: "Crispy golden french fries",
    title: "French Fries",
    img: "french-fries.jpg",
  },
];

function App() {
  return (
    <div className="all-container">
      <header className="title">
        <h1>Evangadi Menu</h1>
        <div></div>
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
  );
}

export default App;
