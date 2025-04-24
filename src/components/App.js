import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 1: Create a state variable for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Step 2: Determine class name based on the current mode
  const appClass = darkMode ? "App dark" : "App light";

  // Step 3: Toggle the dark mode state when the button is clicked
  function handleDarkModeClick() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
