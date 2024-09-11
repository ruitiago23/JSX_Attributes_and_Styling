import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random image" src={img + "?grayscale"} />
    <img
      className="food-img"
      src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"
      alt="plate of noodles"
    />
    <img
      className="food-img"
      src="https://www.tapasmagazine.es/wp-content/uploads/2023/03/ppjamon-cebo-plato-gigapixel-standard-scale-4_00x.jpg"
      alt="plate of jamon"
    />
    <img
      className="food-img"
      src="https://media.istockphoto.com/id/508755080/photo/cooked-bacon-rashers-close-up-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=XLmDH3d2J50Q1y7rufm9VE6Q_o8p7-0MY_e2NFTa6lA="
      alt="crunchy bacon"
    />
  </div>,
  document.getElementById("root")
);
