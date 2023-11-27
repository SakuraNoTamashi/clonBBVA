import { useNavigate } from "react-router-dom";
import SquareCheckbox from "./SquareCheckBox";

const BusinessLoginForm = () => {
    const navigate = useNavigate();
    const handleSubmitClick = () => {
        navigate("/portal")
     }
  const handleCheckboxChange = () => {};
  return (
    <>
      <form>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Codigo de empresa"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Usuario"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Contraseña"
            required
          />
        </div>
        <SquareCheckbox
          onChange={handleCheckboxChange}
          text="Recordar código de empresa y usuario"
        />

        <div className="flex items-center gap-[5%]">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={handleSubmitClick}
                  >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default BusinessLoginForm;
