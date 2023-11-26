import ItemCard from "../../components/ItemsCard";
import SideBar from "../../components/SideBar";
import AccountsPerBank from "../../components/accountsPerBank";
import DashboardAppBar from "../../components/appBar";

const MainDashboard = () => {
  return (
    <>
      <SideBar />
      <DashboardAppBar />
      <section className=" w-[86vw] h-[200vh] absolute right-0 top-[15vh] flex flex-col z-[-1]   items-center ">
        <div className="flex  w-[90%] h-[30vh]  justify-around mt-[5vh]">
          <div className="bg-white p-6 rounded-sm shadow-lg w-[40%]">
            <h1>ACCIONES RAPIDAS</h1>
            <div className="flex w-[90%] h-[70%] ml-[5%] items-center justify-evenly">
              <div className="w-[150px] items-center flex flex-col">
                <h2>Icon</h2>
                <a className="text-center">Realizar transferencia individual</a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <h2>Icon</h2>
                <a className="text-center">Realizar transferencia individual</a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <h2>Icon</h2>
                <a className="text-center">Realizar transferencia individual</a>
              </div>

              <div className="w-[150px] items-center flex flex-col">
                <h2>Icon</h2>
                <a className="text-center">Realizar transferencia individual</a>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-lg w-[40%]">
            <h1>FIRMAS PENDIENTES</h1>
            <p className="text-gray-800">
              No tienes ninguna operacion pendiente de firma
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex w-full  h-[10vh] justify-between">
          <h1>Posicion de cuentas por banco</h1>
          <div className="flex">
            {" "}
            <div className="flex">
              <h1>icon</h1>
              <a>configurar cuentas</a>
            </div>
            <div className="flex">
              <h1>icon</h1>
              <a>Imprimir</a>
            </div>
            <div className="flex">
              <h1>icon</h1>
              <a>Exportar</a>
            </div>
          </div>
        </div>
        {/*  */}
        <AccountsPerBank />

        <div className="flex w-[90%] h-[7vh] items-center bg-white p-10 border  rounded-sm shadow-xl  ">
          <div className="flex gap-[10px]">
            <h1>img</h1>
            <h1>img</h1>
            <h1>img</h1>
            <h1>img</h1>
            <h1>img</h1>
          </div>
          <div className="border-r border-gray-400 h-[4vh] w-[3px]"></div>
          <p>
            Añade más bancos para tener una visión completa de tu tesorería.
          </p>
          <button className="">Añadir banco</button>
        </div>

        <h2> Tu impacto ambiental</h2>
        <div className="flex w-[90%] h-[14vh] items-center bg-white p-10 border  rounded-sm shadow-xl  justify-evenly">
          <h1>icon</h1>
          <h2>¿Sabes cúanto gastas en energía y cúanto podrías ahorrar?</h2>
          <button className="">Saber más</button>
        </div>
      </section>
    </>
  );
};
export default MainDashboard;
