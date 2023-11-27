import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HTMLRenderer = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [effectExecuted, setEffectExecuted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
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

      setEffectExecuted(true);
    };

    if (!effectExecuted) {
      fetchData();
    }
  }, []); // Dependencia solo para el efecto de ejecución única
  useEffect(() => {
    const handleClick = () => {
      console.log("holaaaa");
      navigate("/portal");
    };

    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
      loginButton.addEventListener("click", handleClick);
    }

    // Limpia el evento al desmontar el componente
    return () => {
      if (loginButton) {
        loginButton.removeEventListener("click", handleClick);
      }
    };
  }, [navigate]);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HTMLRenderer;
