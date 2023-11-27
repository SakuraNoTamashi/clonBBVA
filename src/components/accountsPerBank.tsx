import { useState } from "react";
import { bbvaLogo } from "../assets";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AccountsPerBank = () => {
  const [Active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleSpanClick = () => {
    navigate("/portal/details");
  };
  return (
    <>
      <div className=" w-[85%] h-[30vh] flex flex-col items-center border-b border-gray-200">
        <div className="flex justify-between h-[5vh] w-full border-b border-gray-200 text-currency font-sans font-bold">
          <p>EUR</p>
          <div className="flex">SALDO DISPONIBLE / SALDO EN CUENTA</div>
        </div>
        <div className="w-[95%] h-[5vh] flex justify-between items-center mt-[2vh]">
          <div className="flex gap-[25px] ">
            {Active ? <h1>-</h1> : <h1>+</h1>}
            <img src={bbvaLogo} height={40} width={40} />
            <div className="flex flex-col">
              <p className="text-[19px] font-semibold">BBVA</p>
              <p className="text-gray-500 font-medium">1 Cuenta</p>
            </div>
          </div>
          <p className="text-[19px] font-semibold">0,00 EUR / 0,00 EUR</p>
        </div>

        <div className=" w-[96%] ml-[4vw] mt-5">
          <table className="table-auto">
            <thead className="border-b px-4 py-2 text-gray-500  font-sans text-left">
              <th className=" font-medium ">FAV.</th>
              <th className="w-[65%] font-medium ">ALIAS/NÚMERO DE CUENTA</th>
              <th className="w-[10%] font-medium ">SALDO DISPONIBLE</th>
              <th className="font-medium text-end">SALDO EN CUENTA</th>
              <th></th>
            </thead>
            <tbody className="border-b border-gray-200">
              <tr>
                <td className="text-center">
                  <FaStar
                    color="#ffcc00"
                    size={30}
                    className="cursor-pointer"
                  />
                </td>

                <td className="text-infoBlue font-bold text-[22px]">
                  <span style={{ cursor: "pointer" }} onClick={handleSpanClick}>
                    ES3801826975660201653022
                  </span>
                </td>
                <td>
                  <div className="flex flex-col justify-center items-end">
                    <p className="flex text-[25px] text-gray-600 items-center gap-2">
                      0,00 <p className="text-[15px]">EUR</p>
                    </p>
                    <p className="text-gray-400 text-[16px]">Hace 2 minutos</p>
                  </div>
                </td>

                <td>
                  <div className="flex flex-col justify-center items-end">
                    <p className="flex text-[25px] text-gray-600 items-center gap-2">
                      0,00 <p className="text-[15px]">EUR</p>
                    </p>
                    <p className="text-gray-400 text-[16px]">Hace 2 minutos</p>
                  </div>
                </td>

                <td>
                  <div className="flex  justify-center items-center  cursor-pointer">
                    <IoMdMore color="#1973B8" size={30} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AccountsPerBank;
