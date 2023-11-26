import { logo } from "../assets";

const SideBar = () => {
  return (
    <section className="z-99 w-[13vw] h-screen bg-navyBlue fixed left-0 flex flex-col items-start">
      <img src={logo} />
     
    </section>
  );
};
export default SideBar;
