import React from "react";

function Card(props) {
  var path = "./";
  return (
    <>
      <div className="card div-inline restaurant-card ">
        <div className="card-imaged div-inline pt-2">
          <img src={props.img} alt="" className="card-image"></img>
          <span className="isLiked"></span>
        </div>
        <div className="card-title card-item div-inline">{props.title}</div>
        <div className="card-description card-item div-inline">
          {props.desc}
        </div>
        <div className="card-review my-auto card-item">
          <img src="./star.png" alt="" className="starIcon"></img>
          <span className="reviewNum">{props.review}</span>
        </div>
        <div className="card-category card-item div-inline">
          <img src="./catIcon.png" alt="" className="starIcon"></img>
          <span className="category-txt">{props.category}</span>
          <img
            src={path.concat(props.status, ".png")}
            alt=""
            className="starIcon card-status"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Card;
