import React, { useState, useEffect } from "react";

const HTMLRenderer = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        const response = await fetch("../../home.html");
        const data = await response.text();
        setHtmlContent(data);

        // Encontrar e insertar scripts en el DOM
        const scriptTags = data.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gm);
        if (scriptTags) {
          scriptTags.forEach((scriptTag) => {
            const script = document.createElement("script");
            script.innerHTML = scriptTag.replace(/<\/?script\b[^>]*>/g, "");
            document.head.appendChild(script);
          });
        }
      } catch (error) {
        console.error("Error fetching and executing HTML:", error);
      }
    };

    fetchHTML();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HTMLRenderer;
