import { useState } from "react";

function HookUseState() {
  const [counter, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter((preCounter) => preCounter + 1);

    // setCounter({ ...counter, add: "quan12" });
  };

  console.log("re-render");
  return (
    <div style={{ padding: 20 }}>
      <h1>{JSON.stringify(counter)}</h1>
      <button onClick={updateCounter}>Counter</button>
    </div>
  );
}

export default HookUseState;
