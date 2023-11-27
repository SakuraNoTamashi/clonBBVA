import { RiSettingsFill } from "react-icons/ri";
import { andMore, bankia, lacaixa, sabadell, santander } from "../../assets";
import SideBar from "../../components/SideBar";
import AccountsPerBank from "../../components/accountsPerBank";
import DashboardAppBar from "../../components/appBar";
import { IoPrint } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { TbFileCertificate } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import React, { useState } from "react";
import { SideBarAux } from "../../components/SideBarAux";

const Card = ({ image = "", title = "", description = "" }) => {
  return (
    <div className="w-[20vw] h-[45vh] bg-gray-200 flex flex-col justify-start gap-[20px]">
      <img
        alt=""
        id="image"
        className="w-full h-[60%]"
        aria-hidden="true"
        src={image}
      />
      <h1 className="text-[35px] ml-[30px]">{title}</h1>
      <p className="text-[20px] ml-[30px] text-gray-500 text-left w-[80%]">
        {description}
      </p>
    </div>
  );
};

const AccountsPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
      <section className=" w-[86vw] h-[120vh] absolute right-0 top-[15vh] flex flex-col z-[-1]  gap-[20px] items-center ">
        <div className="w-[85%] flex">
          <h1 className="text-[25px] text-gray-800  font-light font-sans">
            Posición de cuentas
          </h1>
        </div>
        <div className="flex  w-[85%] h-[10vh]  justify-around border border-gray-100">
          <div className="bg-white p-6 rounded-sm shadow-lg w-full h-full flex gap-[30px] font-sans">
            <div className="flex items-center gap-[10px]">
              <BsFileBarGraphFill color="#1973b8" size={30} />
              <a className="text-infoBlue   font-semibold text-[20px]">
                Tesoreria
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <TbFileCertificate color="#1973b8" size={30} />
              <a className="text-infoBlue   font-semibold text-[20px]">
                Certificados
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <TbReportSearch color="#1973b8" size={30} />
              <a className="text-infoBlue   font-semibold text-[20px]">
                Saldos e informes
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <IoIosMore color="#1973b8" size={30} />
              <a className="text-infoBlue   font-semibold text-[20px]">
                Correspondencia virtual
              </a>
            </div>
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
          <div className="flex gap-[15px]">
            <img src={sabadell} width={45} />
            <img src={santander} width={45} />
            <img src={bankia} width={45} />
            <img src={lacaixa} width={45} />
            <img src={andMore} width={45} />
          </div>
          <div className="border-r-[3px] border-gray-400 h-[4vh] w-[3px]"></div>
          <p className="text-[22px] text-gray-600">
            Añade más bancos para tener una visión completa de tu tesorería.
          </p>
          <button className=" h-[7vh] w-[15%] ml-[10%] text-white font-bold text-[20px] bg-infoBlue">
            Añadir banco
          </button>
        </div>

        <div className="w-[85%] mt-[5vh]">
          <h2 className="text-[30px] text-gray-500 font-light">
            {" "}
            SOLUCIONES PARA UNA GESTIÓN MÁS EFICIENTE
          </h2>
          <div className="flex justify-around mt-[20px]">
            <Card
              image="https://assets.caasbbva.com/content/dam/caas/spain/ufe/images/cards/cuentas/factoring.jpg"
              title="Factoring"
              description="Cobra anticipadamente las deudas que otros tengan contigo. En BBVA gestionamos tus créditos comerciales."
            />
            <Card
              image="https://assets.caasbbva.com/content/dam/caas/spain/ufe/images/cards/cuentas/confirming.jpg"
              title="Confirming"
              description="Te anticipamos el cobro del 100 % de las facturas pendientes, sin documentación extra ni estudios previos."
            />
          </div>
        </div>
      </section>
      {isSidebarOpen && <SideBarAux closeSidebar={closeSidebar} />}
    </>
  );
};

export default AccountsPage;
