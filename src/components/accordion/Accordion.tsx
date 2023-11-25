import { useState } from "react";
import AutonomousForm from "./autonomous/FormLogin";
import InfoCardNoKey from "./autonomous/InfoCard";
import SecurityTips from "./autonomous/SecurityTips";
import RoundedCheckbox from "./businesses/RoundedCheckBox";
import BusinessLoginForm from "./businesses/loginForm";

const HomeAccordion = () => {
  const [Active, setActive] = useState(false);
  const [businesses, setbusinesses] = useState(false);

  const handleClick = () => {
    setActive(!Active);
  };
  const handleBusinessesClick = () => {
    setbusinesses(true);
  };
  const handleAutonomous = () => {
    setbusinesses(false);
  };

  return (
    <>
      <section className=" w-screen h-screen mt-[13vh] flex flex-col items-center">
        <button className="relative left-[39%]" onClick={handleClick}>
          X
        </button>
        <div className="flex border-b border-gray-400 w-[80vw] justify-center ">
          <span onClick={handleAutonomous}>Autónomos</span>
          <span onClick={handleBusinessesClick}>Empresas</span>
        </div>
        {businesses ? (
          <div className="flex flex-col w-[30vw] h-[80vh]">
            <div className="flex items-center justify-center">
              <RoundedCheckbox text="Soy cliente" />
              <RoundedCheckbox text="No soy cliente" />
            </div>
            <strong>
              Introduce tus claves y entra en tu banca online de empresa
            </strong>
            <BusinessLoginForm />
            <p>
              Si eres cliente pero aún no eres usuario de la banca online
              empresas
            </p>
            <div className="flex ">
              <a>Date de alta</a>
              <a>Retoma de alta</a>
            </div>
          </div>
        ) : (
          <div className="flex  w-[50vw] h-screen">
            <AutonomousForm />
            <InfoCardNoKey />
          </div>
        )}

        {businesses ? null : <SecurityTips />}
      </section>
    </>
  );
};
export default HomeAccordion;
