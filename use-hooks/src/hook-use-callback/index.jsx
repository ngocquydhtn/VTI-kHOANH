import { useCallback, useState } from "react";
import Content from "./Content";

function HookUseCallBack() {
  const [count, setCount] = useState(0);
  const handleClickMe = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <Content onClickMe={handleClickMe} />
      <h1>{count}</h1>
    </div>
  );
}
export default HookUseCallBack;
