import React, { useRef, useState } from "react";
import Pages from "./pages";
import Input from "./Profiler";

const ExampleComponent = () => {
  const countRef = useRef(0); // useRef để lưu trữ giá trị
  const [count, setCount] = useState(0); // useState để render lại component khi giá trị thay đổi

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const saveClick = () => {
    countRef.current = count; // Lưu giá trị của count vào ref
    console.log("Saved count:", countRef.current); // Hiển thị giá trị đã lưu trong console
  };

  return (
    <div>
      <h2>Profiler</h2>
      <Input />
    </div>
  );
};

export default ExampleComponent;
