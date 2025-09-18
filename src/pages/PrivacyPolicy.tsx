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
              <p>
                En cumplimiento de los principios de licitud y transparencia y con el objeto de suministrar la información a los interesados que establece los artículos 13 y 14 del Reglamento Europeo de Protección de Datos (Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, le informamos de las características de los tratamientos de datos personales que se realizan bajo la responsabilidad de GRUPO MARTINEZ ABOLAFIO 1970, S.L.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tratamiento:</h3>
              <p>
                (I) Consultas web. (II) Selección de personal. (III) Atención de derechos sobre la privacidad de los interesados. (IV) Gestión administrativa grupo.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Finalidad:</h3>
              <p>
                (I) Atender las solicitudes recibidas a través de la web. (II) Recepción de solicitudes para la oferta de empleo concreta a la que el candidato se ha inscrito (III) Atender las solicitudes de ejercicios de derechos relacionados con los datos personales, así como las violaciones de seguridad que puedan afectar a los derechos y libertades de los interesados. (IV) Transmisión de datos dentro del grupo empresarial, para fines administrativos internos
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Legitimación:</h3>
              <p>
                (I) Consentimiento del interesado. (II) Aplicación de medidas precontractuales (III) Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales. (I) Interés legítimo.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Plazo de Conservación:</h3>
              <p>
                (I) El plazo necesario para atender la solicitud. (II) Mientras permanezca abierto el proceso de selección para el puesto al que se ha aplicado (III) El plazo necesario para el cumplimiento de dicha finalidad.
              </p>
              <p>
                En todos los casos: mientras duren las responsabilidades que se puedan derivar de ellas.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Destinatarios:</h3>
              <p>
                (III) Agencia Española de Protección de Datos. (IV) Empresas del grupo.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ejercicio de derechos:</h3>
              <p>
                Podrá ejercitar su derecho de acceso, rectificación, supresión, limitación y oposición al tratamiento, en los términos y condiciones establecidas en la normativa de protección de datos personales Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales, enviando una solicitud por email a: <a href="mailto:dpd@martinezabolafio.com" className="text-primary hover:underline">dpd@martinezabolafio.com</a> o bien enviando una solicitud por escrito a calle García Sanabria, número 1, 35500, Arrecife, Lanzarote (Las Palmas) indicando en todo caso la Referencia: "Protección de datos", tiene derecho como a presentar reclamación ante la Agencia Española de Protección de Datos, especialmente en caso de que su solicitud ante el responsable del tratamiento no haya sido atendida.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Preguntas frecuentes sobre privacidad (FAQ's)</h2>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Quién es el responsable del tratamiento de sus datos?</h3>
              <p>
                El titular de la empresa y de esta página web es GRUPO MARTINEZ ABOLAFIO 1970, S.L., por lo que cualesquiera datos personales que usted comunique a través de esta página web como de los formularios de recogida de datos que se realicen de manera presencial serán tratados bajo la responsabilidad de GRUPO MARTINEZ ABOLAFIO 1970, S.L.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Qué datos personales recopilamos? (¿cómo los obtenemos?)</h3>
              <p>
                Le solicitaremos los datos mínimos imprescindibles para realizar las finalidades indicadas en el apartado anterior:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consultas web y atención de derechos sobre la privacidad: nombre y apellidos, y datos de contacto.</li>
                <li>Ofertas de empleo: Nombre, apellidos, datos de contacto, puesto de trabajo y Curriculum Vitae.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Cómo usamos los datos personales que gestionamos bajo nuestra responsabilidad?</h3>
              <p>Sus datos los usamos con las siguientes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atención de solicitudes recibidas a través de la web.</li>
                <li>Gestión de los procesos de selección de personal.</li>
                <li>Atención de derechos sobre la privacidad de los interesados.</li>
                <li>Transmisión de datos dentro del grupo empresarial, para fines administrativos internos.</li>
              </ul>
              <p className="mt-4">
                Siendo el uso que hacemos de ellos el exclusivamente necesario para cada una de las finalidades descritas.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Por cuánto tiempo?</h3>
              <p>
                Cuando el tratamiento de datos viene impuesto por una norma, normalmente esta misma incorpora el plazo durante el cual se deben tratar o guardar los datos para atender a la finalidad del tratamiento. En otros supuestos nos limitamos a conservar los datos personales el tiempo mínimo imprescindible en relación con cada finalidad de las anteriormente indicadas.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">Divulgación a terceros</h3>
              <p>
                No se realiza salvo que exista una obligación legal o un interés legítimo en relación con fines administrativos internos del grupo de empresa.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Qué medidas de Seguridad aplicamos a los datos personales?</h3>
              <p>
                GRUPO MARTINEZ ABOLAFIO 1970, S.L. cuenta con políticas apropiadas y medidas técnicas y organizativas para salvaguardar y proteger sus datos personales contra el acceso ilegal o no autorizado, pérdida o destrucción accidental, daños, uso y divulgación ilegal o no autorizada.
              </p>
              <p className="mt-4">
                También tomamos todas las precauciones razonables para garantizar que nuestro personal y proveedores que tienen acceso a sus datos personales cumplan adecuadamente con la normativa de protección de datos personales.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Cuáles son sus derechos como titular de los datos?</h3>
              <p>
                Usted tiene derecho a solicitar la supresión de sus datos cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.
              </p>
              <p className="mt-4">
                Usted tiene derecho a obtener confirmación sobre si en GRUPO MARTINEZ ABOLAFIO 1970, S.L. estamos tratando datos personales suyos o no.
              </p>
              <p className="mt-4">
                Usted tiene derecho a acceder a sus datos personales y obtener copia de ellos, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, usted podrá solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.
              </p>
              <p className="mt-4">
                En determinadas circunstancias y por motivos relacionados con su situación particular, usted podrá oponerse al tratamiento de sus datos. GRUPO MARTINEZ ABOLAFIO 1970, S.L. dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones. Asimismo, puede revocar los consentimientos que haya facilitado. Podrá ejercer dichos derechos mediante solicitud correo electrónico dirigido a <a href="mailto:dpd@martinezabolafio.com" className="text-primary hover:underline">dpd@martinezabolafio.com</a> o enviando una solicitud por escrito a: calle García Sanabria, número 1, 35500, Arrecife, Lanzarote (Las Palmas) indicando en todo caso la Referencia: "Protección de datos" junto con algún documento que acredite su identidad como fotocopia del DNI, así como a presentar reclamación ante la Agencia Española de Protección de Datos, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">RGPD</h2>
              <p>
                Sus datos personales son tratados bajo la responsabilidad de GRUPO MARTINEZ ABOLAFIO 1970, S.L., con la finalidad de gestión administrativa y de servicios centrales de las empresas del Grupo Empresarial Grupo Martínez Abolafio y serán conservados el plazo necesario para el cumplimiento de dichos fines, así como mientras duren las responsabilidades que se puedan derivar de ellas. Puede ejercer sus derechos enviando un email a: <a href="mailto:dpd@martinezabolafio.com" className="text-primary hover:underline">dpd@martinezabolafio.com</a>. Asimismo, tiene derecho a presentar reclamación ante la Agencia Española de Protección de Datos.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}