import { memo } from "react";

function Content() {
  console.log("render");
  return <div>Hello Word!!!!</div>;
}
// export default memo(Content);

export default memo(Content, (prevProps, nextProps) => {
  console.log(prevProps, nextProps);
});
