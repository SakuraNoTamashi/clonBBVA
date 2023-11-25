import ItemCard from "../../components/ItemsCard";
import SideBar from "../../components/SideBar";
import DashboardAppBar from "../../components/appBar";

const MainDashboard = () => {
  return (
    <>
      <SideBar />
      <DashboardAppBar />
      <section className=" w-[95vw] h-[200vh] absolute right-0 top-[15vh]">
        <ItemCard />
      </section>
    </>
  );
};
export default MainDashboard;
