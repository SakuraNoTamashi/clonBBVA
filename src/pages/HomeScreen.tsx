import { useState } from "react";
import { homeImage, logo } from "../assets";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import HomeAccordion from "../components/accordion/Accordion";

const HomePage = () => {
  const [showAccordion, setshowAccordion] = useState(false);
  const handleAccordion = () => {
    setshowAccordion(!showAccordion);
  };
  return (
    <>
      <div className=" fixed flex flex-wrap w-screen bg-navyBlue h-[13vh] items-center ">
        <div className="flex">
          <img src={logo} />
          <span>PERSONAS</span>
          <span>AUTÓNOMOS Y EMPRESAS</span>
        </div>
        <div>Hazte Cliente</div>
        <button onClick={handleAccordion}> Acceso</button>
      </div>
      {showAccordion ? <HomeAccordion /> : null}

      <section className=" h-[25vh] w-screen flex flex-col mt-[12vh] justify-center items-center">
        <div className=" h-[20%] w-[80%] border border-gray-400 flex flex-col justify-center items-center">
          <h5 className={`${styles.riskLevel__title}`}>NIVEL DE RIESGO</h5>
        </div>
        <div className=" h-[40%] w-[80%] border border-gray-400 flex ">
          <h1>1/6</h1>
          <p className={`${styles.lightParagraph}`}>
            Este número es indicativo del riesgo del producto, siendo 1 / 6
            indicativo de menor riesgo y 6 / 6 de mayor riesgo.
          </p>
          <p className={`${styles.lightParagraph}`}>
            BBVA está adherido al Fondo de Garantía de Depósitos de Entidades de
            Crédito de España. La cantidad máxima garantizada es de 100.000€ por
            la totalidad de depósitos constituidos en BBVA por persona.
          </p>
        </div>
      </section>

      <section className=" bg-blue2 h-[79vh] flex">
        <div className="flex flex-col">
          <h3>Cuentas sin comisiones para autónomos y empresas</h3>
          <h1>Abre una Cuenta Bienvenida y haz avanzar tu negocio</h1>
          <button>Saber más </button>
          <p>Cero comisiones en servicios habituales.</p>
        </div>

        <img src={homeImage} className="h-auto w-[50%]" />
      </section>
    </>
  );
};

export default HomePage;
