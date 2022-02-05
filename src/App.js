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
          img={"./restaurant4.png"}
          title={"Burger King restaurant"}
          isLiked={true}
          desc={"this is a product description"}
          review={4.8}
          category={"its category"}
          status={"open"}
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
      </div>
      <SecondPart />
    </Router>
  );
}

export default App;
