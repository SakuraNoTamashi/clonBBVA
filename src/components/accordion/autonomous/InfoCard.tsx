const InfoCardNoKey = () => {
  return (
    <div className=" bg-lightDarkBlue flex flex-col w-[50%] h-[30vh]">
      <h2>
        Si ya eres cliente de BBVA pero
        <strong> no tienes claves para acceder</strong>, solo tienes que
        crearlas.
        <button>Crear clave de acceso</button>
        <p>
          Conoce las <a>ventajas</a> de utilizar banca online
        </p>
      </h2>
    </div>
  );
};

export default InfoCardNoKey;