import React, { useState, useEffect } from "react";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <div>Welcome to About!</div>}
    </div>
  );
}

export default About;
