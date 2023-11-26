import { useState } from "react";

const AccountsPerBank = () => {
  const [Active, setActive] = useState(false);
  const data = [
    ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
    ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"],
    ["Row 3, Cell 1", "Row 3, Cell 2", "Row 3, Cell 3"],
  ];
  return (
    <>
      <div className=" w-[80%] h-[30vh] flex flex-col items-center border-b border-gray-200">
        <div className="flex justify-between h-[5vh] w-full border-b border-gray-200">
          <p>EUR</p>
          <div className="flex">SALDO DISPONIBLE / SALDO EN CUENTA</div>
        </div>
        <div className="w-[95%] h-[5vh] flex justify-between">
          <div className="flex">
            {Active ? <h1>-</h1> : <h1>+</h1>}
            <h2>Icon</h2>
            <div className="flex flex-col">
              <strong>BBVA</strong>
              <p>1 Cuenta</p>
            </div>
          </div>
          <div className="flex">0,00 EUR / 0,00 EUR</div>
        </div>

        <div className=" w-[96%] ml-[4vw]">
          <table className="table-auto">
            <thead className="border-b px-4 py-2">
              <th>FAV.</th>
              <th className="w-[65%]">ALIAS/NÚMERO DE CUENTA</th>
              <th className="w-[10%]">SALDO DISPONIBLE</th>
              <th className="">SALDO EN CUENTA</th>
              <th>a</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1>icon</h1>
                </td>

                <td>ES3801826975660201653022</td>
                <td>
                  <div className="flex flex-col justify-center items-end">
                    <p className="flex">
                      0,00 <p>EUR</p>
                    </p>
                    <p>Hace 2 minutos</p>
                  </div>
                </td>

                <td>
                  <div className="flex flex-col justify-center items-end">
                    <p className="flex">
                      0,00 <p>EUR</p>
                    </p>
                    <p>Hace 2 minutos</p>
                  </div>
                </td>

                <td>
                  <div className="flex w-[50px] justify-center items-center">
                    <a>:</a>
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
