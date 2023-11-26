import React, { useState, useEffect } from "react";

const HTMLRenderer = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        const response = await fetch("../../home.html");
        const data = await response.text();
        setHtmlContent(data);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };

    fetchHTML();
  }, []); // El efecto se ejecutará solo una vez al montar el componente

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HTMLRenderer;
