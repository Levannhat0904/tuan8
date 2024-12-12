import { useMemo, useState } from "react";

// hàm tính toán mất thời gian
function Input() {
  function fibonacci(n) {
    //     console.log("re-render");
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  const result = useMemo(() => {
    return fibonacci(6);
  }, []);
  console.log(result);
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  console.log(input);
  return <input value={input} onChange={(e) => handleChange(e)} />;
}
export default Input;
