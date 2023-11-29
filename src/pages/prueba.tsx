import { useState, useEffect } from "react";
import homeHTML from "./home.html";

const HTMLRenderer = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [effectExecuted, setEffectExecuted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("/pages/home.html");
        // const data = await response.text();
        setHtmlContent(homeHTML);
        //Encontrar e insertar scripts en el DOM
        const scriptTags = homeHTML.match(
          /<script\b[^>]*>([\s\S]*?)<\/script>/gm
        );
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
      setEffectExecuted(true);
    };

    if (!effectExecuted) {
      fetchData();
    }
  }, []); // Dependencia solo para el efecto de ejecución única

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  // return <h1>Holaaa!</h1>;
};

export default HTMLRenderer;
