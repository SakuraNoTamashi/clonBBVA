import { useState } from "react";
import SideBar from "../../components/SideBar";
import DashboardAppBar from "../../components/appBar";
import { BsFileBarGraphFill } from "react-icons/bs";
import { TbFileCertificate, TbReportSearch } from "react-icons/tb";
import { IoIosMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { SideBarAux } from "../../components/SideBarAux";
import { bbvaLogo } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoPrint } from "react-icons/io5";

const AccountMovementsPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const movements = [
    {
      fecha: "29-10-2023",
      clave: "54321098",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "29-10-2023",
      importes: "200",
      saldo: "45.522,12",
    },
    {
      fecha: "29-10-2023",
      clave: "87654321",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "29-10-2023",
      importes: "150",
      saldo: "45.722,12",
    },
    {
      fecha: "28-10-2023",
      clave: "12345678",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "28-10-2023",
      importes: "-50",
      saldo: "45.572,12",
    },
    {
      fecha: "28-10-2023",
      clave: "98761234",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "28-10-2023",
      importes: "30",
      saldo: "45.622,12",
    },
    {
      fecha: "27-10-2023",
      clave: "65432109",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "27-10-2023",
      importes: "20",
      saldo: "45.592,12",
    },
    {
      fecha: "27-10-2023",
      clave: "45678901",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "27-10-2023",
      importes: "10",
      saldo: "45.572,12",
    },
    {
      fecha: "26-10-2023",
      clave: "98765432",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "26-10-2023",
      importes: "40",
      saldo: "45.562,12",
    },
    {
      fecha: "26-10-2023",
      clave: "21514511",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "26-10-2023",
      importes: "-30",
      saldo: "45.522,12",
    },
    {
      fecha: "25-10-2023",
      clave: "82125216",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "25-10-2023",
      importes: "50",
      saldo: "45.552,12",
    },
    {
      fecha: "25-10-2023",
      clave: "11223344",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "25-10-2023",
      importes: "70",
      saldo: "45.592,12",
    },
    {
      fecha: "24-10-2023",
      clave: "33445566",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "24-10-2023",
      importes: "25",
      saldo: "45.617,12",
    },
    {
      fecha: "24-10-2023",
      clave: "55667788",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "24-10-2023",
      importes: "-15",
      saldo: "45.602,12",
    },
    {
      fecha: "23-10-2023",
      clave: "77889900",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "23-10-2023",
      importes: "120",
      saldo: "45.722,12",
    },
    {
      fecha: "23-10-2023",
      clave: "00112233",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "23-10-2023",
      importes: "40",
      saldo: "45.762,12",
    },
    {
      fecha: "22-10-2023",
      clave: "22334455",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "22-10-2023",
      importes: "60",
      saldo: "45.822,12",
    },
    {
      fecha: "22-10-2023",
      clave: "44556677",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "22-10-2023",
      importes: "-25",
      saldo: "45.797,12",
    },
    {
      fecha: "21-10-2023",
      clave: "66778899",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "21-10-2023",
      importes: "90",
      saldo: "45.887,12",
    },
    {
      fecha: "21-10-2023",
      clave: "88990011",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "21-10-2023",
      importes: "15",
      saldo: "45.902,12",
    },
    {
      fecha: "20-10-2023",
      clave: "11001122",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "20-10-2023",
      importes: "80",
      saldo: "45.982,12",
    },
    {
      fecha: "20-10-2023",
      clave: "33112244",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "20-10-2023",
      importes: "-25",
      saldo: "45.957,12",
    },
    {
      fecha: "19-10-2023",
      clave: "55443322",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "19-10-2023",
      importes: "35",
      saldo: "45.992,12",
    },
    {
      fecha: "19-10-2023",
      clave: "77665544",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "19-10-2023",
      importes: "50",
      saldo: "46.042,12",
    },
    {
      fecha: "18-10-2023",
      clave: "99887766",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "18-10-2023",
      importes: "-20",
      saldo: "46.022,12",
    },
    {
      fecha: "18-10-2023",
      clave: "22110033",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "18-10-2023",
      importes: "60",
      saldo: "46.082,12",
    },
    {
      fecha: "17-10-2023",
      clave: "44332211",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "17-10-2023",
      importes: "25",
      saldo: "46.107,12",
    },
    {
      fecha: "17-10-2023",
      clave: "66554433",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "17-10-2023",
      importes: "-15",
      saldo: "46.092,12",
    },
    {
      fecha: "16-10-2023",
      clave: "88776655",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "16-10-2023",
      importes: "40",
      saldo: "46.132,12",
    },
    {
      fecha: "16-10-2023",
      clave: "10998877",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "16-10-2023",
      importes: "20",
      saldo: "46.152,12",
    },
    {
      fecha: "15-10-2023",
      clave: "33112233",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "15-10-2023",
      importes: "-30",
      saldo: "46.122,12",
    },
    {
      fecha: "15-10-2023",
      clave: "55443322",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "15-10-2023",
      importes: "50",
      saldo: "46.172,12",
    },
    {
      fecha: "14-10-2023",
      clave: "77665544",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "14-10-2023",
      importes: "30",
      saldo: "46.202,12",
    },
    {
      fecha: "14-10-2023",
      clave: "99887766",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "14-10-2023",
      importes: "-20",
      saldo: "46.182,12",
    },
    {
      fecha: "13-10-2023",
      clave: "22110033",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "13-10-2023",
      importes: "40",
      saldo: "46.222,12",
    },
    {
      fecha: "13-10-2023",
      clave: "44332211",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "13-10-2023",
      importes: "25",
      saldo: "46.247,12",
    },
    {
      fecha: "12-10-2023",
      clave: "66554433",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "12-10-2023",
      importes: "-15",
      saldo: "46.232,12",
    },
    {
      fecha: "12-10-2023",
      clave: "88776655",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "12-10-2023",
      importes: "60",
      saldo: "46.292,12",
    },
    {
      fecha: "11-10-2023",
      clave: "10998877",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "11-10-2023",
      importes: "20",
      saldo: "46.312,12",
    },
    {
      fecha: "11-10-2023",
      clave: "33112233",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "11-10-2023",
      importes: "-30",
      saldo: "46.282,12",
    },
    {
      fecha: "10-10-2023",
      clave: "55443322",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "10-10-2023",
      importes: "50",
      saldo: "46.332,12",
    },
    {
      fecha: "10-10-2023",
      clave: "77665544",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "10-10-2023",
      importes: "30",
      saldo: "46.362,12",
    },
    {
      fecha: "09-10-2023",
      clave: "99887766",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "09-10-2023",
      importes: "-20",
      saldo: "46.342,12",
    },
    {
      fecha: "09-10-2023",
      clave: "22110033",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "09-10-2023",
      importes: "40",
      saldo: "46.382,12",
    },
    {
      fecha: "08-10-2023",
      clave: "44332211",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "08-10-2023",
      importes: "25",
      saldo: "46.407,12",
    },
    {
      fecha: "08-10-2023",
      clave: "66554433",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "08-10-2023",
      importes: "-15",
      saldo: "46.392,12",
    },
    {
      fecha: "07-10-2023",
      clave: "88776655",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "07-10-2023",
      importes: "60",
      saldo: "46.452,12",
    },
    {
      fecha: "07-10-2023",
      clave: "10998877",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "07-10-2023",
      importes: "20",
      saldo: "46.472,12",
    },
    {
      fecha: "06-10-2023",
      clave: "33112233",
      concepto1: "GASTO",
      concepto2: "-",
      fechaValor: "06-10-2023",
      importes: "-30",
      saldo: "46.442,12",
    },
    {
      fecha: "06-10-2023",
      clave: "55443322",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "06-10-2023",
      importes: "50",
      saldo: "46.492,12",
    },
    {
      fecha: "05-10-2023",
      clave: "77665544",
      concepto1: "INGRESO",
      concepto2: "-",
      fechaValor: "05-10-2023",
      importes: "30",
      saldo: "46.522,12",
    },
  ];

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
        <div className="flex  w-[85%] 2xl:h-[30vh]  justify-around border border-gray-100">
          <div className="bg-white p-6 rounded-sm shadow-lg w-full h-full flex flex-col font-sans gap-[50px]">
            <div className="w-full flex justify-between">
              <div className="2xl:w-[45%] 2xl:h-[7vh] bg-gray-200 border border-gray-300 flex items-center gap-5">
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
                <FaChevronDown color="#1973B8" className="ml-[28%]" />
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col items-end">
                  <p className="text-[24px] text-gray-500">Disponible</p>
                  <p className="text-[24px] text-black font-medium">
                    45.522,12 EUR
                  </p>
                </div>

                <div className="flex flex-col items-end font-sans">
                  <p className="text-[24px] text-gray-500">Saldo en cuenta</p>
                  <p className="text-[24px] text-black font-medium">
                    50.504,26 EUR
                  </p>
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
        <table className="especial">
          <thead className="especial">
            <tr className="especial">
              <th className="especial" style={{ width: "12%" }}>
                F. OPER.
              </th>
              <th className="especial" style={{ width: "12%" }}>
                CLAVE
              </th>
              <th className="especial" style={{ width: "40%" }}>
                CONCEPTO
              </th>
              <th className="especial" style={{ width: "12%" }}>
                F. VALOR
              </th>
              <th className="especial" style={{ width: "12%" }}>
                IMPORTES
              </th>
              <th className="especial" style={{ width: "12%" }}>
                SALDO
              </th>
            </tr>
          </thead>
          <tbody className="especial">
            {movements.map((el, i) => {
              return (
                <tr className="especial" key={`fila_movimiento_${i}`}>
                  <td className="especial">{el.fecha}</td>
                  <td className="especial">{el.clave}</td>
                  <td className="especial" style={{ textAlign: "left" }}>
                    {el.concepto1} <br /> {el.concepto2}
                  </td>
                  <td className="especial">{el.fechaValor}</td>
                  <td className="especial">{el.importes}</td>
                  <td className="especial" style={{ textAlign: "right" }}>
                    {el.saldo}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      {isSidebarOpen && <SideBarAux closeSidebar={closeSidebar} />}
    </>
  );
};

export default AccountMovementsPage;
