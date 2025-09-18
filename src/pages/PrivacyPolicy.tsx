import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">CLAUSULA INFORMATIVA</h2>
              <p>
                En cumplimiento de los principios de licitud y transparencia y con el objeto de suministrar la información a los interesados que establece los artículos 13 y 14 del Reglamento Europeo de Protección de Datos (Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD), le informamos de las características de los tratamientos de datos personales que se realizan bajo la responsabilidad de MAGMA SERVICIOS DE INNOVACIÓN, SL:
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tratamiento:</h3>
              <p>
                (I) Creación de cuenta de usuario. (II) Suscripción Newsletter. (III) Servicios de innovación. (IV) Realización de eventos. (V) Gestión Administrativa. (VI) Videovigilancia. (VII) Atención de los derechos sobre la privacidad de los interesados.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Finalidad:</h3>
              <p>
                (I) Permitir el acceso a los datos de su área personal (dirección de facturación, detalles de la cuenta, información de descargas y eventos recientes, etc), la inscripción en eventos y la descarga de papers y la contratación de los servicios. (II) Enviarle información sobre actividades y eventos que a juicio de Magma revistan interés por estar relacionadas con la temática de la Innovación. (III) Prestación de los servicios objeto de la actividad de Magma, como gestión de formaciones, alquiler de salas, comercialización de servicios propios, tutorización de empresas. (IV) Organización, realización y promoción de eventos. (V) Gestión administrativa relacionada con el desarrollo de la actividad. (VI) Control de las instalaciones mediante sistema de cámaras. (VII) Atender las solicitudes de ejercicios de derechos relacionados con los datos personales, así como las violaciones de seguridad que puedan afectar a los derechos y libertades de los interesados.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Legitimación:</h3>
              <p>
                (I) y (II) Consentimiento del interesado. (III), (IV) y (V) Aplicación de medidas contractuales y precontractuales. Ejecución de contrato de prestación de servicios. Interés legítimo y consentimiento del interesado en caso de promoción de eventos en los que aparezcan los asistentes, de modo que si resultan identificables, se habrá solicitado siempre previamente su consentimiento, antes de publicar las imágenes. (VI) Interés público. (VII) Obligación legal según el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Plazo de Conservación:</h3>
              <p>
                (I) y (II) En tanto en cuanto el usuario no solicite o realice por si mismo la baja, la baja será inmediata una vez realizada. (III), (IV), (V) y (VII) Mientras dure la prestación del servicio y el plazo necesario para atender cuestiones relacionadas, normalmente un año. (VI) 1 mes.
              </p>
              <p>
                El plazo necesario para atender las responsabilidades que se puedan derivar de todos los tratamientos anteriores.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Destinatarios:</h3>
              <p>
                (II) Mailchimp (https://mailchimp.com/legal/privacy/) (VI) Cuerpos y Fuerzas de Seguridad en caso de indicios de falta o delito. (VII) Agencia Española de Protección de Datos.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ejercicio de derechos:</h3>
              <p>
                Podrá ejercitar su derecho de acceso, rectificación, supresión, limitación y oposición al tratamiento, en los términos y condiciones establecidas el RGPD, enviando una solicitud por email a info@magmainnovation.io, indicando en todo caso la Referencia: "Protección de datos" junto con algún medio que acredite su identidad. Tiene derecho a presentar reclamación ante la Agencia Española de Protección de Datos, especialmente en caso de que su solicitud no haya sido atendida.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">POLITICA DE PRIVACIDAD</h2>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Quién es el responsable del tratamiento de sus datos?</h3>
              <p>
                El titular de esta página web es MAGMA SERVICIOS DE INNOVACIÓN, SL, por lo que cualesquiera datos personales que usted comunique a través de esta página web como de los formularios de recogida de datos que se realicen de manera presencial serán tratados bajo la responsabilidad de Magma Servicios de Innovación, SL.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Qué datos personales recopilamos? (¿cómo los obtenemos?)</h3>
              <p>
                Le solicitaremos los datos mínimos imprescindibles para realizar cada una de las finalidades indicadas en el apartado siguiente, normalmente, nombre y apellidos, dirección, y datos de contacto.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Cómo usamos los datos personales que gestionamos bajo nuestra responsabilidad?</h3>
              <p>Sus datos los usamos con las siguientes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creación de cuenta de usuario.</li>
                <li>Suscripción a la Newsletter.</li>
                <li>Servicios de innovación.</li>
                <li>Realización de eventos.</li>
                <li>Gestión administrativa.</li>
                <li>Videovigilancia.</li>
                <li>Atención de derechos sobre la privacidad de los interesados.</li>
              </ul>
              <p className="mt-4">
                Y el uso que hacemos de ellos es exclusivamente el indicado para cada una de las finalidades descritas, así por ejemplo para crear su cuenta de usuario, registraremos su nombre de usuario y el correo electrónico que haya indicado en el alta, además de los datos que introduzca al rellenar la ficha: nombre y apellidos, nombre que verán los demás usuarios, dirección de facturación, también registraremos determinada información a efectos internos, como la relativa a las conexiones y descargas que realice vinculadas a su cuenta, los datos se conservarán con las medidas de seguridad que garanticen que ninguna persona externa a Magma pueda tener acceso a dicha información. De resto, trataremos sus datos cuando nos obligue una norma legal o para realizar las actividades imprescindibles en relación a la prestación de los servicios que nos ha solicitado, no comunicamos datos a terceros ni tratamos datos con finalidades adicionales a las descritas.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Por cuánto tiempo?</h3>
              <p>
                Cuando el tratamiento de datos viene impuesto por una norma, normalmente esta misma incorpora el plazo durante el cual se deben tratar o guardar los datos, así el Código de Comercio establece la obligación de conservar los datos a efectos contables y mercantiles durante seis años, plazo que puede ser ampliado hasta quince en caso de necesitar acreditar determinadas deducciones fiscales y el Código Civil permite el ejercicio de las acciones derivadas de la ejecución de un contrato o de la prestación de un servicio durante cinco años tras la finalización del mismo.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Divulgación a terceros</h3>
              <p>
                Al igual que en los supuestos anteriores, los datos que comunicamos a terceros están siempre limitados al mínimo imprescindible en relación con cada una de las finalidades.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Qué medidas de Seguridad aplicamos a los datos personales?</h3>
              <p>
                Magma Servicios de Innovación, SL, cuenta con políticas apropiadas y medidas técnicas y organizativas para salvaguardar y proteger sus datos personales contra el acceso ilegal o no autorizado, pérdida o destrucción accidental, daños, uso y divulgación ilegal o no autorizada, dichas medidas se recogen y actualizan en un documento identificado como "Manual de Seguridad".
              </p>
              <p className="mt-4">
                También tomamos todas las precauciones razonables para garantizar que nuestro personal y los empleados que tienen acceso a sus datos personales hayan recibido la formación adecuada.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Cuáles son sus derechos como titular de los datos?</h3>
              <p>
                Usted tiene derecho a solicitar la supresión de sus datos cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Usted tiene derecho a obtener confirmación sobre si en Magma Servicios de Innovación, SL, estamos tratando datos personales suyos o no. Usted tiene derecho a acceder a sus datos personales y obtener copia de ellos, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, usted podrá solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones. En determinadas circunstancias y por motivos relacionados con su situación particular, usted podrá oponerse al tratamiento de sus datos. Magma Servicios de Innovación, SL, dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones. Asimismo, puede ejercer el derecho a la portabilidad de los datos, así como revocar los consentimientos que haya facilitado. Podrá ejercer dichos derechos mediante solicitud correo electrónico dirigido a info@magmainnovation.io, en determinados supuestos es posible que le solicitemos que acredite su identidad aportando algún dato adicional, e indicando claramente el derecho que quiere ejercer. Finalmente he de indicarle que puede presentar una reclamación ante la Agencia Española de Protección de Datos, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}