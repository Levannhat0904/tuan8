import { memo, useCallback, useMemo, useRef, useState } from "react";

const ChildComponent = memo(({ compute, value }) => {
  console.log("children re-render");
  return (
    <div>
      <h3>compute value: {compute(value)}</h3>
    </div>
  );
});
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const expensiveComputation = useMemo(() => {
    console.log("expensiveComputation re-render");
    return count * 2;
  }, [count]);
  const compute = useCallback((num) => {
    console.log("compute re-render");
    return num * 2;
  }, []);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>useMemo-useCallback-memo</h1>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter your number"
      />
      <button onClick={handleFocus}>focus input</button>
      <p>expensiveComputation result: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <p>Count: {count}</p>
      <ChildComponent compute={compute} value={count} />
    </div>
  );
};
export default ParentComponent;
