import { useState } from "react";
import SideBar from "../../components/SideBar";
import DashboardAppBar from "../../components/appBar";
import { BsFileBarGraphFill } from "react-icons/bs";
import { TbFileCertificate, TbReportSearch } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const AccountMovementsPage = () => {
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

        <div>
          <h1>Últimos movimientos</h1>
        </div>
        <div>
          <p>
            <h1>
              El listado muestra como máximo resultados de los últimos 90 días.
            </h1>
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-5">
            <FaSearch />
            <p>Buscar</p>
          </div>

          <div className="flex gap-10">
            <div className="flex gap-5">
              <FaSearch />
              <p>Imprimir</p>
            </div>
            <div className="flex gap-5">
              <FaSearch />
              <p>Exportar</p>
            </div>
          </div>
              </div>
              
              
      </section>
    </>
  );
};

export default AccountMovementsPage;
