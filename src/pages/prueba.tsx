// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const HTMLRenderer = () => {
  // const [htmlContent, setHtmlContent] = useState("");
  // const [effectExecuted, setEffectExecuted] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("../../src/pages/home.html");
  //       const data = await response.text();
  //       setHtmlContent(data);

  //       //Encontrar e insertar scripts en el DOM
  //       const scriptTags = data.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gm);
  //       if (scriptTags) {
  //         scriptTags.forEach((scriptTag) => {
  //           const script = document.createElement("script");
  //           script.innerHTML = scriptTag.replace(/<\/?script\b[^>]*>/g, "");
  //           document.head.appendChild(script);
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching and executing HTML:", error);
  //     }
  //     const handleClick = () => {
  //       // alert("hola");
  //       // console.log("holaaaa");
  //       navigate("/portal");
  //     };
  //     const loginButton = document.getElementById("loginButton");
  //     loginButton?.addEventListener("click", handleClick);
  //     setEffectExecuted(true);
  //   };

  //   if (!effectExecuted) {
  //     fetchData();
  //   }
  // }, []); // Dependencia solo para el efecto de ejecución única

  // return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  return <h1>Holaaa!</h1>;
};

export default HTMLRenderer;
