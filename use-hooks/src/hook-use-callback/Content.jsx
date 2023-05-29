import { memo } from "react";

function Content({ onClickMe }) {
  console.log("render");
  return (
    <>
      <div>Hello Word!!!!</div>
      <button onClick={onClickMe}>Click Me!!!</button>
    </>
  );
}
export default memo(Content);
