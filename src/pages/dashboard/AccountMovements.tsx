import { useState } from "react";
import SideBar from "../../components/SideBar";
import DashboardAppBar from "../../components/appBar";
import { BsFileBarGraphFill } from "react-icons/bs";
import { TbFileCertificate, TbReportSearch } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { bbvaLogo } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoPrint } from "react-icons/io5";
import { SideBarAux } from "../../components/SideBarAux";
const AccountMovementsPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  //   const movements = [
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //     {
  //       fecha: "21-05-2023",
  //       clave: "123123123",
  //       concepto1: "TRANSFERENCIAS",
  //       concepto2: "-",
  //       fechaValor: "21-06-2023",
  //       importes: "-200",
  //       saldo: "32.191,17",
  //     },
  //   ];
  return (
    <>
      <SideBar />
      <DashboardAppBar handle={openSidebar} />
      <section className=" w-[86vw] h-[120vh] absolute right-0 top-[15vh] flex flex-col z-1  gap-[20px] items-center ">
        <div className="w-[85%] flex">
          <h1 className="text-[25px] text-gray-800  font-light font-sans">
            Posición de cuentas
          </h1>
        </div>
        <div className="flex  w-[85%] h-[30vh]  justify-around border border-gray-100">
          <div className="bg-white p-6 rounded-sm shadow-lg w-full h-full flex flex-col font-sans gap-[50px]">
            <div className="w-full flex justify-between">
              <div className="w-[45%] h-[7vh] bg-gray-200 border border-gray-300 flex items-center gap-5">
                <img
                  src={bbvaLogo}
                  width={50}
                  className=" object-scale-down ml-10"
                />
                <div className="flex flex-col">
                  <p className="text-[20px] text-gray-500 font-bold">
                    Cuenta BBVA EMpresas
                  </p>
                  <p className="text-[23px] text-gray-500">
                    ES380182600850005351247
                  </p>
                </div>
                <FaChevronDown color="#1973B8" className="ml-[30%]" />
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col items-end">
                  <p className="text-[24px] text-gray-500">Disponible</p>
                  <p className="text-[24px] text-black font-medium">45.522,12 EUR</p>
                </div>

                <div className="flex flex-col items-end font-sans">
                  <p className="text-[24px] text-gray-500">Saldo en cuenta</p>
                  <p className="text-[24px] text-black font-medium">50.504,26 EUR</p>
                </div>
              </div>
            </div>

            <div className="flex gap-14 font-sans">
              <h1 className="text-[32px] text-gray-500">cuenta corriente</h1>
              <h1 className="text-[32px] text-gray-500">
                TECH AI SOLUTIONS S.L
              </h1>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <BsFileBarGraphFill color="#1973b8" size={30} />
                <a className="text-infoBlue   font-semibold text-[20px]">
                  Hacer transferencia
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <TbFileCertificate color="#1973b8" size={30} />
                <a className="text-infoBlue   font-semibold text-[20px]">
                  Solicitar certificados
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <TbReportSearch color="#1973b8" size={30} />
                <a className="text-infoBlue   font-semibold text-[20px]">
                  Extracto mensual
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <IoIosMore color="#1973b8" size={30} />
                <a className="text-infoBlue   font-semibold text-[20px]">
                  Más Acciones
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[85%] flex justify-start ">
          <h1 className="font-sans text-[35px]">Últimos movimientos</h1>
        </div>
        <div className="w-[85%] flex justify-start ">
          <p className="text-[27px] text-gray-500 font-sans">
            El listado muestra como máximo resultados de los últimos 90 días.
          </p>
        </div>

        <div className="flex justify-between w-[85%]">
          <div className="flex gap-5">
            <FaSearch color="#1973b8" size={20} />
            <a className="text-infoBlue   font-semibold text-[18px]">Buscar</a>
          </div>

          <div className="flex gap-10">
            <div className="flex gap-5">
              <IoPrint color="#1973b8" size={20} />
              <a className="text-infoBlue   font-semibold text-[18px]">
                Imprimir
              </a>
            </div>
            <div className="flex gap-5">
              <MdDownloadForOffline color="#1973b8" size={20} />
              <a className="text-infoBlue   font-semibold text-[18px]">
                Exportar
              </a>
            </div>
          </div>
        </div>
      </section>
      {isSidebarOpen && <SideBarAux closeSidebar={closeSidebar} />}
    </>
  );
};

export default AccountMovementsPage;
