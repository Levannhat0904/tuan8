import { memo } from "react";

function Content() {
  console.log("re-render");
  return <h1>Hello world</h1>;
}
// export default Content;
export default memo(Content);
