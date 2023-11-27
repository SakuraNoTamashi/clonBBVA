import React, { useState } from "react";
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

interface AppBarOptionProps {
  icon: () => JSX.Element;
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  logout: boolean;
}

const AppBarOption: React.FC<AppBarOptionProps> = ({
  icon,
  label,
  onClick,
  logout,
}) => {
  const [hovered, setHovered] = useState(false);
  const [Active, setActive] = useState(false);
  const handleClick = () => {
    onClick;
    setActive(!Active);
  };

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
  type ButtonTuple = [() => JSX.Element, string];
  const buttons: ButtonTuple[] = [
    [HomeIcon, "Inicio"],
    [AccountIcon, "Cuentas"],
    [GlobalPositionIcon, "Posición Global"],
    [PaymentsIcon, "Pagos"],
    [CollectionsIcon, "Cobros"],
    [FundingIcon, "Financiación"],
    [TPVsIcon, "TPVs"],
    [GuaranteesIcon, "Avales"],
    [InternationComerceIcon, "Comercio internacional"],
    [InvestmentIcon, "Iversiones y Mercados"],
    [SustainableActionIcon, "Herramientas de Acción Sostenible"],
  ];

  const buttons2: ButtonTuple[] = [
    [WalletIcon, "Tarjetas"],
    [UmbrellaIcon, "Seguros"],
  ];

  const button3: ButtonTuple = [ChatIcon, "Danos tu opinión"];
  return (
    <section className="z-99 w-[13vw] h-screen bg-navyBlue fixed left-0 flex flex-col items-start ">
      <img src={logo} />
      <div className="flex flex-col  h-[90%] items-start overflow-y-scroll">
        <div className="flex flex-col items-center w-full gap-[10px]  pt-[20px] ">
          {buttons.map((button, index) => (
            <AppBarOption
              key={`appbar-button-${index}`}
              icon={button[0]}
              label={`${button[1]}`}
              onClick={() => {}}
              logout={false}
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
        />
      </div>

      <AppBarOption
        key={`appbar-button-Opinion`}
        icon={LogoutIcon}
        label={`Salir`}
        onClick={() => {}}
        logout={true}
      />
    </section>
  );
};
export default SideBar;
