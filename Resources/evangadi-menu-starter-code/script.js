// import Menu from "./data.js";

// console.log(
//   Menu.map((obj) => {
//     return (
//       '<FoodItem key={obj.id} price={obj.price} desc={obj.desc} title={obj.title}img={obj.img}/>'
//     );
//   })
// );


function fun(x, y=[]){
  y.push(x)
  console.log(y)
}

fun(1)
fun(2)