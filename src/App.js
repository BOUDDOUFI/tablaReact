import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/hero";
import Card from "./components/card";
import SecondPart from "./components/secondPart";
// import CardsContainer from "./components/cards-container";

function App() {
  // function loadmore() {
  //   alert("load more just clicked");
  // }
  return (
    <Router>
      <Navbar />
      <Hero className="hero mb-5" />
      <div className="container cards-container mb-5 mt-5 ">
        <Card
          img={"./restaurant1.png"}
          title={"Burger King restaurant"}
          isLiked={true}
          desc={"this is a product description"}
          review={4.7}
          category={"family restaurant"}
          status={"closed"}
        />
        <Card
          img={"./restaurant2.png"}
          title={"Galaxy restaurant"}
          isLiked={true}
          desc={"this is a product description"}
          review={4.9}
          category={"fast food"}
          status={"open"}
        />
        <Card
          img={"./restaurant3.png"}
          title={"belkadi restaurant"}
          isLiked={false}
          desc={"this is a product description"}
          review={4.5}
          category={"its category"}
          status={"closed"}
        />
      </div>
      <div className="container my-auto mb-5 ">
        <div className="mt-4 Popular-restaurants">
          <h2> Popular Restaurants</h2>
          <button className="popular-restaurant-viewMore">View more</button>
        </div>
      </div>
      <div className="container cards-container mb-5 ">
        <Card
          img={"./restaurant3.png"}
          title={"belkadi restaurant"}
          isLiked={false}
          desc={"this is a product description"}
          review={4.5}
          category={"its category"}
          status={"closed"}
        />
        <Card
          img={"./restaurant2.png"}
          title={"Galaxy restaurant"}
          isLiked={true}
          desc={"this is a product description"}
          review={4.9}
          category={"fast food"}
          status={"closed"}
        />
        <Card
          img={"./restaurant3.png"}
          title={"belkadi restaurant"}
          isLiked={true}
          desc={"this is a product description"}
          review={4.5}
          category={"its category"}
          status={"closed"}
        />
        <Card
          img={"./restaurant3.png"}
          title={"belkadi restaurant"}
          isLiked={false}
          desc={"this is a product description"}
          review={4.5}
          category={"its category"}
          status={"closed"}
        />
        <Card
          img={"./restaurant2.png"}
          title={"Galaxy restaurant"}
          isLiked={true}
          desc={"this is a product description"}
          review={4.9}
          category={"fast food"}
          status={"closed"}
        />
        <Card
          img={"./restaurant3.png"}
          title={"belkadi restaurant"}
          isLiked={true}
          desc={"this is a product description"}
          review={4.5}
          category={"its category"}
          status={"closed"}
        />
      </div>
      <div className="container my-auto mb-5 ">
        <div className="mt-4 Popular-restaurants">
          <h2>Categories</h2>
          {/* <button className="popular-restaurant-viewMore">View more</button> */}
        </div>
      </div>
      <div className="container my-auto mb-5 " id="category">
        <div className="category-item">
          <div className="category-contents">
            <img
              src="./svg/categories/noto_hamburger.svg"
              alt=""
              className="category-img"
            ></img>
            <div className="category-name">Fast Food</div>
          </div>
        </div>
        <div className="category-item">
          <div className="category-contents">
            <img
              src="./svg/categories/noto_1st-place-medal.svg"
              alt=""
              className="category-img"
            ></img>
            <div className="category-name">Class Places</div>
          </div>
        </div>
        <div className="category-item">
          <div className="category-contents">
            <img
              src="./svg/categories/noto_fish.svg"
              alt=""
              className="category-img"
            ></img>
            <div className="category-name">Fish</div>
          </div>
        </div>
        <div className="category-item">
          <div className="category-contents">
            <img
              src="./svg/categories/noto_family-man-woman-boy.svg"
              alt=""
              className="category-img"
            ></img>
            <div className="category-name">family</div>
          </div>
        </div>
        <div className="category-item">
          <div className="category-contents">
            <img
              src="./svg/categories/noto_sushi.svg"
              alt=""
              className="category-img"
            ></img>
            <div className="category-name">Sushi</div>
          </div>
        </div>
      </div>
      <SecondPart />
    </Router>
  );
}

export default App;
