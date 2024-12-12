import { useState } from "react";

// hàm tính toán mất thời gian
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
//       // Ví dụ:
//       console.log(fibonacciRecursive(6)); // Output: 8f
function Input() {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  return <input value={input} onChange={(e) => handleChange()} />;
}
