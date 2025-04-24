import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Add state to track cart status
  const [inCart, setInCart] = useState(false);

  // Step 2: Toggle inCart when button is clicked
  function handleAddToCartClick() {
    setInCart((prevInCart) => !prevInCart);
  }

  // Step 3: Set className based on inCart state
  const liClass = inCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
