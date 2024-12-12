import React, { useState, useEffect } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Sử dụng setTimeout để làm cho component render chậm hơn
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>{isLoading ? <div>Loading...</div> : <div>Welcome to Home!</div>}</div>
  );
}

export default Home;
