const SecurityTips = () => {
  return (
    <div className="h-[60vh] w-[50] bg-gray-200 flex flex-col">
      <div className="ml-[8%] flex">
        <h1>Icon</h1>
        <h2>Consejos de seguridad</h2>
      </div>
      <div className="w-[80%] flex items-center  ml-[10%]">
        <ul className="list-disc ">
          <li>
            Tus claves de acceso son secretas e intransferibles. No las
            compartas con nadie ni las proporciones a través de correo ni de
            SMS.
          </li>
          <li>
            Recuerda que BBVA nunca te va a solicitar un código de un solo uso
            (OTP) en emails, SMS o llamadas que no has iniciado tú.
          </li>
          <li>
            Es recomendable acceder a la banca online tecleando la dirección
            www.bbva.es directamente en el navegador, evitando hacerlo desde los
            buscadores.
          </li>
          <li>
            Si recibes emails o SMS sospechosos o de remitentes desconocidos, no
            accedas a los enlaces que puedan contener.
          </li>
          <li>
            Mantén siempre actualizados el navegador, las aplicaciones y el
            sistema operativo de tus dispositivos.
          </li>
          <li>
            Instala y mantén en funcionamiento y actualizados un antivirus y un
            antimalware.
          </li>
          <li>
            Contacta con BBVA en el 900 102 801 si sufres cualquier incidente de
            seguridad relacionado con tus cuentas o tarjetas.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityTips;