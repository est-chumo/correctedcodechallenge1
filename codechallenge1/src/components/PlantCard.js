import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(plant.inStock);

  const toggleStock = () => {
    setInStock((prev) => !prev);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Ksh {plant.price}</p>
      <button onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;