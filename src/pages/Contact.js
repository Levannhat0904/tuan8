import React, { useState, useEffect } from "react";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div> // Trước khi tải xong
      ) : (
        <div>Welcome to Contact!</div> // Sau khi tải xong
      )}
    </div>
  );
}

export default Contact;
