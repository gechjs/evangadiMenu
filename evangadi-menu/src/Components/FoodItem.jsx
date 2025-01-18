import { Component } from "react";

class FoodItem extends Component {
  constructor() {
    super();
  }
  
  text = 'read'
  expand(){

    if(text == 'more'){
      text = 'less'
    }
    else{
      text = 'more'
    }
  }

  render() {
    
    let { price, desc, img, title } = this.props;

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{desc}</div>
        <button onClick={this.expand} className="read-button">
          {text}
        </button>
      </div>
    );
  }
}
export default FoodItem;
