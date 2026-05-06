
import React from "react";
import MyContext from "./MyContext";
import Child from "./Child";

function App() {
  const message = "Hello from Parent!";

  return (
    <MyContext.Provider value={message}>
      <Child />
    </MyContext.Provider>
  );
}

export default App;
