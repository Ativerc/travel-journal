import React from "react";
import dataArray from "./data/data.js";
import Navbar from "./components/Navbar";
import Card from "./components/Card.js";


export default function App() {
  const placesList = dataArray.map(
    item => ( <Card {...item} /> )
  );
  return (
    <div>
      <Navbar />
      <section className="list">
        {placesList}
      </section>
    </div>
  );
}