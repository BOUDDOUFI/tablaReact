import React from "react";
import { HeroSVG } from "./hero-elements";
import icon from "./Icon.png";
import svgHero from "./HeroVector.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Hero() {
  return (
    <>
      <div className="hero-container ">
        <div className="hero-txt">
          <div className="hero-tabla">
            <img width="15px" src={icon} alt="icon" /> at tabla.ma
          </div>
          <div className="hero-h">
            <h2>Discover Your Next Table</h2>
          </div>
          <div className="hero-p">
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using lorem ipsum is that it.
          </div>
        </div>
        <HeroSVG>
          <img className="svgHero" src={svgHero} alt="heroVSG" />
        </HeroSVG>
        <div className="date-picker row container ">
          <div className="col-sm my-auto search-grp">
            <i className="fas fa-search "></i>
            <input
              type="text"
              className="inp-search"
              placeholder="Search..."
            ></input>
          </div>
          <div className="col-sm  my-auto date-grp">
            <div className="date-time">
              <i className="far fa-calendar"></i>
              <span className="date-txt">Date & Time</span>
            </div>
          </div>
          <div className="col-sm my-auto city-grp">
            <i className="fas fa-city"></i>
            <select
              className="custom-select city-select"
              id="inputGroupSelect02"
            >
              <option selected disabled>
                City
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-sm my-auto book-grp">
            <button type="submit" className="btn btn-success btn-book">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
