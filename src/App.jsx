import { useState } from "react";
import HelloWorld from "./hello-world";
import HelloChennai from "./hello-chennai";
import MiComponent from "./mi/mi-component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloChennai />
      <MiComponent />
    </div>
  );
}

export default App;
