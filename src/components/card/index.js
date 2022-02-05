import React from "react";

function Card(props) {
  var path = "./info-";
  return (
    <>
      <div className="card div-inline restaurant-card ">
        <div className="card-imaged div-inline pt-2">
          <img src={props.img} alt="" className="card-image"></img>
          <div className="isLiked-cercle mt-3 container ">
            <img
              src={props.isLiked ? "./Liked.svg" : "./like.svg"}
              alt=""
              className="isLiked "
            ></img>
          </div>
          {/* <span className="isLiked"></span> */}
        </div>
        <div className="card-title card-item div-inline">{props.title}</div>
        <div className="card-description card-item div-inline">
          {props.desc}
        </div>
        <div className="card-review my-auto card-item">
          <img src="./star.png" alt="" className="starIcon"></img>
          <span className="reviewNum">{props.review}</span>
        </div>
        <div className="card-category card-item">
          <img src="./catIcon.png" alt="" className="starIcon"></img>
          <span className="category-txt">{props.category}</span>
          <div className="status">
            <img
              src={path.concat(props.status, ".svg")}
              alt=""
              className="starIcon card-status"
            ></img>
            <span className={"restaurant-status " + props.status}>
              {props.status}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
