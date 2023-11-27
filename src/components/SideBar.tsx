import React, { useState, useEffect } from "react";
import "./custom.css";
import { logo } from "../assets";
import {
  AccountIcon,
  ChatIcon,
  CollectionsIcon,
  FundingIcon,
  GlobalPositionIcon,
  GuaranteesIcon,
  HomeIcon,
  InternationComerceIcon,
  InvestmentIcon,
  LogoutIcon,
  PaymentsIcon,
  SustainableActionIcon,
  TPVsIcon,
  UmbrellaIcon,
  WalletIcon,
} from "../assets/icons";
import { useNavigate } from "react-router-dom";
interface AppBarOptionProps {
  icon: () => JSX.Element;
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  logout: boolean;
  route: string;
}

const AppBarOption: React.FC<AppBarOptionProps> = ({
  icon,
  label,
  onClick,
  logout,
  route,
}) => {
  const [hovered, setHovered] = useState(false);
  const [Active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    onClick;
    navigate(route);
    setActive(!Active);
  };
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActive(currentPath == route);
  }, []);

  return (
    <div
      className={`w-full h-[60px]  ${Active ? "border-l-[4px]" : ""} 
      "border-white"
      ${
        hovered || Active ? "bg-appBarHighlighted " : "bg-navyBlue"
      }  flex items-center  gap-[15px] `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="w-[25px] h-[25px] ml-[20px]">{icon()}</div>
      <p
        className={`font-'Benton Sans', sans-serif  font-bold ${
          false ? "text-indicativeYellow" : "text-white"
        }`}
      >
        {label}
      </p>
    </div>
  );
};
const SideBar = () => {
  type ButtonTuple = [() => JSX.Element, string, string];
  const buttons: ButtonTuple[] = [
    [HomeIcon, "Inicio", "/portal"],
    [AccountIcon, "Cuentas", "/portal/accounts"],
    [GlobalPositionIcon, "Posición Global", "/portal2"],
    [PaymentsIcon, "Pagos", "/portal2"],
    [CollectionsIcon, "Cobros", "/portal2"],
    [FundingIcon, "Financiación", "/portal2"],
    [TPVsIcon, "TPVs", "/portal2"],
    [GuaranteesIcon, "Avales", "/portal2"],
    [InternationComerceIcon, "Comercio internacional", "/portal2"],
    [InvestmentIcon, "Iversiones y Mercados", "/portal2"],
    [SustainableActionIcon, "Herramientas de Acción Sostenible", "/portal2"],
  ];

  const buttons2: ButtonTuple[] = [
    [WalletIcon, "Tarjetas", "/portal2"],
    [UmbrellaIcon, "Seguros", "/portal2"],
  ];

  const button3: ButtonTuple = [ChatIcon, "Danos tu opinión", "/portal2"];
  return (
    <section className="z-99 w-[13vw] h-screen bg-navyBlue fixed left-0 flex flex-col items-start ">
      <img src={logo} />
      <div className="flex flex-col  h-[90%] items-start overflow-y-scroll customScroll">
        <div className="flex flex-col items-center w-full gap-[10px]  pt-[20px] ">
          {buttons.map((button, index) => (
            <AppBarOption
              key={`appbar-button-${index}`}
              icon={button[0]}
              label={`${button[1]}`}
              onClick={() => {}}
              logout={false}
              route={`${button[2]}`}
            />
          ))}
          <div className="w-[90%] border-b-[2px] border-white"></div>
        </div>

        <div className="flex flex-col items-center w-full gap-[10px] ">
          {buttons2.map((button, index) => (
            <AppBarOption
              key={`appbar-button-${index}`}
              icon={button[0]}
              label={`${button[1]}`}
              onClick={() => {}}
              logout={false}
              route={`${button[2]}`}
            />
          ))}
          <div className="w-[90%] border-b-[2px] border-white"></div>
        </div>
        <AppBarOption
          key={`appbar-button-Opinion`}
          icon={button3[0]}
          label={`${button3[1]}`}
          onClick={() => {}}
          logout={false}
          route={`${button3[2]}`}
        />
      </div>

      <AppBarOption
        key={`appbar-button-Opinion`}
        icon={LogoutIcon}
        label={`Salir`}
        onClick={() => {}}
        logout={true}
        route={`/portal`}
      />
    </section>
  );
};
export default SideBar;
