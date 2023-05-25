import { useState } from "react";
import Content from "./Content";

function HookUseEffect() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div style={{ padding: 80 }}>
      <button onClick={handleToggle}>toggle</button>
      {toggle && <Content />}
    </div>
  );
}

export default HookUseEffect;
