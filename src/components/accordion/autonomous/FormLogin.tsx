const AutonomousForm = () => {
  return (
    <div className="flex flex-col  w-[50%]">
      <h2 className="text-justify">
        Hola, introduce tu usuario y clave de acceso y entra en BBVA online:
      </h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
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
            placeholder="Clave de acceso"
            required
          />
        </div>

        <div className="flex items-center gap-[5%]">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
          <a>¿Olvidaste tu clave de acceso?</a>
        </div>
      </form>
    </div>
  );
};

export default AutonomousForm;