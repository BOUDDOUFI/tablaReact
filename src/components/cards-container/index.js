import React from "react";
// import Card from "../card";
import { useState } from "react";

function CardsContainer() {
  //   const [Items, setItems] = useState([
  //     "one",
  //     "two",
  //     "three",
  //     "one",
  //     "two",
  //     "three",
  //     "one",
  //     "two",
  //     "three",
  //     "one",
  //     "two",
  //     "three",
  //     "one",
  //     "two",
  //     "three",
  //     "one",
  //     "two",
  //     "three",
  //     "one",
  //     "two",
  //     "three",
  //   ]);

  const [Cards, setCards] = useState([3]);
  function loadMoreItems() {
    setCards(Cards + 3);
  }
  function loadLessItems() {
    setCards(Cards - 3);
  }

  return (
    <>
      <div className="container cards-container">{() => {}}</div>
      {<button onClick={loadMoreItems}>Load more</button>}
      {<button onClick={loadLessItems}>Load Less</button>}
    </>
  );
}

export default CardsContainer;
