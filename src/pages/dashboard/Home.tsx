import { useState } from "react";

import "./SidebarModal.css";
import SideBar from "../../components/SideBar";
import AccountsPerBank from "../../components/accountsPerBank";
import DashboardAppBar from "../../components/appBar";
import { IoIosInformationCircle } from "react-icons/io";
import { RiSettingsFill } from "react-icons/ri";
import { IoPrint } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import {
  andMore,
  bankia,
  docs,
  hdcLogo,
  historico,
  lacaixa,
  sabadell,
  santander,
  transaction,
} from "../../assets";
import { SideBarAux } from "../../components/SideBarAux";

const MainDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Formatear la fecha según tu formato

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <SideBar />
      <DashboardAppBar handle={openSidebar} />
      <section className=" w-[86vw] h-[120vh] absolute right-0 top-[15vh] flex flex-col z-1   items-center ">
        <div className="flex  w-[90%] h-[30vh]  justify-around ">
          <div className="bg-white p-6 rounded-sm shadow-lg w-[45%] 2xl:h-[25vh] h-[27vh] overflow-hidden">
            <h1 className="font-benton-sans font-sans  font-semibold  text-base text-gray-800">
              ACCIONES RAPIDAS
            </h1>
            <div className="flex w-[90%] h-[70%] ml-[5%] items-center gap-5 justify-evenly mt-[3%]">
              <div className="2xl:w-[150px] h-[100px]  items-center flex flex-col">
                <img className="h-[50px]" src={transaction} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Realizar transferencia individual
                </a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <img className="h-[50px]" src={historico} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Realizar transferencia individual
                </a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <img className="h-[50px]" src={docs} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Realizar transferencia individual
                </a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <img className="h-[50px]" src={docs} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Correspondencia virtual
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-lg w-[45%] 2xl:h-[25vh] h-[27vh]">
            <h1 className="font-benton-sans font-sans  font-semibold  text-base text-gray-800">
              FIRMAS PENDIENTES
            </h1>

            <p className="text-gray-800 flex items-center gap-[10px] mt-[5%]">
              <IoIosInformationCircle color="#49a5e6" size={32} />
              No tienes ninguna operacion pendiente de firma
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex w-[85%]  h-[10vh] justify-between items-center">
          <h1 className="font-sans font-normal tracking-normal text-gray-800  text-[24px] leading-normal  small-caps-normal normal-nums-normal ordinal-normal tabular-nums-normal diagonal-fractions-normal stacked-fractions-normal">
            Posicion de cuentas por banco
          </h1>
          <div className="flex items-center gap-[20px]">
            {" "}
            <div className="flex items-center gap-[10px]">
              <RiSettingsFill color="#1973b8" size={25} />
              <a className="text-infoBlue   font-semibold text-[18px]">
                configurar cuentas
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <IoPrint color="#1973b8" size={25} />
              <a className="text-infoBlue   font-semibold text-[18px]">
                Imprimir
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <MdDownloadForOffline color="#1973b8" size={25} />
              <a className="text-infoBlue   font-semibold text-[18px]">
                Exportar
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <AccountsPerBank />

        <div className="flex w-[85%] h-[12vh] items-center bg-white p-10 border  rounded-sm shadow-xl  gap-[30px] ">
          <div className="flex 2xl:gap-[15px]">
            <img src={sabadell} width={45} />
            <img src={santander} width={45} />
            <img src={bankia} width={45} />
            <img src={lacaixa} width={45} />
            <img src={andMore} width={45} />
          </div>
          <div className="border-l-[3px] border-gray-400 2xl:h-[4vh] h-[6vh] w-[3px] 2xl:ml-10 ml-[10%]"></div>
          <p className="2xl:text-[22px] text-[19px] text-gray-600">
            Añade más bancos para tener una visión completa de tu tesorería.
          </p>
          <button className=" h-[7vh] 2xl:w-[15%] w-[25%] ml-[10%] text-white font-bold 2xl:text-[20px] text-[15px] bg-infoBlue">
            Añadir banco
          </button>
        </div>

        <div className="w-[85%] mt-[5vh]">
          <h2 className="2xl:text-[35px] text-[25px] text-gray-700 font-light">
            {" "}
            Tu impacto ambiental
          </h2>
        </div>
        <div className="flex w-[85%] h-[14vh] items-center bg-white p-10 border  rounded-sm shadow-xl  justify-evenly">
          <img src={hdcLogo} height={70} />
          <h2 className="2xl:text-[35px] text-[20px] font-bold">
            ¿Sabes cúanto gastas en energía y cúanto podrías ahorrar?
          </h2>
          <button className="h-[7vh] w-[15%] 2xl:ml-[0%] ml-[2%] text-white font-bold 2xl:text-[20px] text-[15px] bg-infoBlue">
            Saber más
          </button>
        </div>
      </section>
      {isSidebarOpen && <SideBarAux closeSidebar={closeSidebar} />}
    </>
  );
};
export default MainDashboard;
