import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/hero";
import Card from "./components/card";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero className="hero " />
      <div className="container cards-container">
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
          title={"Galaxyrestaurant"}
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
    </Router>
  );
}

export default App;
