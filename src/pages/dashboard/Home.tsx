import ItemCard from "../../components/ItemsCard";
import React, { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
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

const MainDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const currentDate = new Date();

  // Formatear la fecha según tu formato
  const formattedDate = format(currentDate, "dd MMM yyyy HH:mm", {
    locale: es,
  });
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
      <section className=" w-[86vw] h-[120vh] absolute right-0 top-[15vh] flex flex-col z-[-1]   items-center ">
        <div className="flex  w-[90%] h-[30vh]  justify-around ">
          <div className="bg-white p-6 rounded-sm shadow-lg w-[45%] h-[25vh] overflow-hidden">
            <h1 className="font-benton-sans font-sans  font-semibold  text-base text-gray-800">
              ACCIONES RAPIDAS
            </h1>
            <div className="flex w-[90%] h-[70%] ml-[5%] items-center justify-evenly mt-[2%]">
              <div className="w-[150px] items-center flex flex-col">
                <img src={transaction} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Realizar transferencia individual
                </a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <img src={historico} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Realizar transferencia individual
                </a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <img src={docs} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Realizar transferencia individual
                </a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <img src={docs} />
                <a className="text-center text-infoBlue font-semibold  text-[12px]">
                  Correspondencia virtual
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-lg w-[45%] h-[25vh]">
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
          <h2 className="text-[35px] text-gray-700 font-light">
            {" "}
            Tu impacto ambiental
          </h2>
        </div>
        <div className="flex w-[85%] h-[14vh] items-center bg-white p-10 border  rounded-sm shadow-xl  justify-evenly">
          <img src={hdcLogo} height={70} />
          <h2 className="text-[35px] font-bold">
            ¿Sabes cúanto gastas en energía y cúanto podrías ahorrar?
          </h2>
          <button className="h-[7vh] w-[15%] ml-[0%] text-white font-bold text-[20px] bg-infoBlue">
            Saber más
          </button>
        </div>
      </section>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-content">
            {/* Contenido del sidebar */}
            <div
              className="allSizes close"
              onClick={closeSidebar}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <svg
                viewBox="0 0 260 260"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                aria-hidden="true"
                style={{
                  pointerEvents: "none",
                  display: "block",
                  width: "24px",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <path d="M56.4 220 40 203.6l74.44-74.34L41.58 56.4 56.4 41.58l72.86 72.86L203.6 40 220 56.4l-74.44 74.34L220 205.07 205.07 220l-74.33-74.44L56.4 220z"></path>
              </svg>
            </div>
            <p className="heading">Perfil</p>
            <div className="scroller">
              <div style={{ width: "380px" }}>
                <section className="user-info">
                  <article id="avatar" className="avatar">
                    <div className="right-col__list-item--clickable initials-clip-box">
                      <svg
                        className="fill"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                      >
                        <rect width="10" height="5" y="5"></rect>
                      </svg>
                      <div
                        className="content"
                        role="img"
                        aria-label="Perfil"
                        aria-hidden="false"
                      >
                        <slot name="content">
                          {" "}
                          <span className="text">5 </span>{" "}
                        </slot>
                      </div>
                    </div>
                    <div>
                      <p className="user-name">
                        51024736H-SANTIAGO MESIAS <br /> ANANGONO ESPINOSA
                      </p>
                      <p className="user-role">Administrador</p>
                    </div>
                  </article>

                  <p id="company" className="corp">
                    CUSTOM TECHNOLOGY S.L. / B16733495
                  </p>

                  <p id="reference" className="corp">
                    Código de empresa: 20714535
                  </p>
                </section>
                <section className="scrollable ">
                  <div className="scrollable-content">
                    <div className="panel-card">
                      <div className="container-card">
                        <div className="content-card">
                          <div>
                            <div className="text2">
                              Tu perfil y configuración
                            </div>
                            <p className="card-text">
                              Accede y edita tu información personal, cambia
                              idioma, zona horaria, formatos de importes y hora.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-card">
                      <div className="container-card">
                        <div className="content-card">
                          <div>
                            <div className="text2">Agenda</div>
                            <p className="card-text">
                              Accede a la información de tus contactos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-card">
                      <div className="container-card">
                        <div className="content-card">
                          <div>
                            <div className="text2">
                              Administración de usuarios
                            </div>
                            <p className="card-text">
                              Define los permisos de los usuarios.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-card">
                      <div className="container-card">
                        <div className="content-card">
                          <div>
                            <div className="text2">Gestión de dispositivos</div>
                            <p className="card-text">
                              Administra y solicita los tokens.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-card">
                      <div className="container-card">
                        <div className="content-card">
                          <div>
                            <div className="text2">Auditoría</div>
                            <p className="card-text">
                              Consulta el histórico de cambios en los permisos
                              de los usuarios.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <footer className="footer">
                  <div id="footer-links" className="footer-links">
                    <div
                      data-id="tarifas"
                      role="link"
                      aria-disabled="false"
                      className="text2"
                    >
                      Tarifas
                    </div>

                    <div
                      data-id="seguridad"
                      role="link"
                      aria-disabled="false"
                      className="text2"
                    >
                      Seguridad
                    </div>
                  </div>

                  <p className="connection">
                    Última conexión:{" "}
                    <span className="fecha">{formattedDate}</span> (GMT+1)
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MainDashboard;
