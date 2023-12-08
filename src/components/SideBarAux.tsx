import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
interface DashboardAppBarProps {
  closeSidebar: () => void; // Especifica el tipo de la función handle
}
export const SideBarAux: React.FC<DashboardAppBarProps> = ({
  closeSidebar,
}) => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd MMM yyyy HH:mm", {
    locale: es,
  });
  return (
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
                    45877341T-AMALIA <br /> DIEZ AGUILAR
                  </p>
                  <p className="user-role">Administrador</p>
                </div>
              </article>

              <p id="company" className="corp">
                TECH AI SOLUTIONS S.L. / B16733495
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
                        <div className="text2">Tu perfil y configuración</div>
                        <p className="card-text">
                          Accede y edita tu información personal, cambia idioma,
                          zona horaria, formatos de importes y hora.{" "}
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
                        <div className="text2">Administración de usuarios</div>
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
                          Consulta el histórico de cambios en los permisos de
                          los usuarios.
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
                Última conexión: <span className="fecha">{formattedDate}</span>{" "}
                (GMT+1)
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
