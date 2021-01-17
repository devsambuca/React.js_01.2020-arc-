import React from "react";
import DishesList from "./components/DishesList";
import dishes from "./data.json";
function App() {
  return (
    <div className="app">
      <DishesList dishes={dishes} />
    </div>
  );
}

export default App;
