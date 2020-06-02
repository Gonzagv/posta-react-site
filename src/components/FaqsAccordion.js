import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import CopyRight from "../components/CopyRight";
import styled from "styled-components";
import Accordion from "../components/Accordion/Accordion";
import Terms from "../components/Terms";

const H1 = styled.h1`
  background-color: #005384;
  color: white;
  height: 15vh;
  font-size: 50px;
  padding: 10px;
  font-family: "Arial Black", Gadget, sans-serif;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 50px;
    height: 15vh;
    padding: 40px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 40px;
    height: 15vh;
    padding: 50px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 30px;
    height: 12vh;
    padding: 40px;
  }
`;

const H2 = styled.h1`
  color: #005384;
  padding: 40px;
  font-size: 35px;
  font-family: "Arial Black", Gadget, sans-serif;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 40px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 30px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 20px;
  }
`;

const Div = styled.div`
  background-color: white;
`;

function FaqsAccordion(props) {
  return (
    <div>
      <Navigation currentSection="FaqsPage" />
      <H1>
        <b>Preguntas Frecuentes</b>
      </H1>
      <Div className="accordion__section">
        <H2 id="comofuncionamos">Cómo Funcionamos</H2>
        <div className="accordion__comofuncionamos">
          <Accordion title="¿Quiénes somos y cómo funcionamos?">
            <span className="accordion-text">
              <p>
                Somos una empresa argentina dedicada a la tecnología y finanzas
                personales. Brindamos créditos personales de manera 100%
                digital, sin contrato ni papeles. Nuestro proceso de solicitud
                de dinero es 100% online e inmediato. El mismo lo podés realizar
                desde nuestra web
                <br />
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>{" "}
                o a través de cualquiera de nuestros canales de contacto:{" "}
              </p>
              <p>
                - Tel: <a href="tel:08001127678">0800 112 7678 </a>
              </p>
              <p>
                - WhatsApp:{" "}
                <a href="https://wa.me/541156906223" target="_blank">
                  11 5609 62236
                </a>
              </p>
              <p>
                - Mail:{" "}
                <a href="mailto:hola@postacred.com">hola@postacred.com</a>
              </p>
              <p>
                - Facebook:{" "}
                <a
                  target="_blank"
                  href="https://www.facebook.com/CreditosPosta/"
                >
                  CreditosPosta
                </a>
              </p>
              <p>
                - Sitio:{" "}
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Cuánto te podemos prestar y cómo lo devolvés?">
            <span className="accordion-text">
              {" "}
              <p>
                En Posta ofrecemos créditos de $
                <span data-id="minAmount">3.500</span> a $
                <span data-id="maxAmount">75.000</span> y hasta en{" "}
                <span data-id="maxDues">36</span> cuotas mensuales. El monto
                mínimo y máximo que prestamos cada caso particular, depende de
                los datos brindados en nuestra web o a nuestros asesores, debido
                a que nos interesa cuidar a nuestros clientes.
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Qué tasas tenemos?">
            <span className="accordion-text">
              <p>
                La tasa de interés varía según el valor total del crédito y la
                cantidad de cuotas que solicites. Todos nuestras líneas de
                crédito están diseñadas con un sistema de amortización francés,
                a devolver en cuotas fijas y en pesos. Para conocer cuál es la
                tasa de interés de tu crédito, podés ingresar a <br />
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>{" "}
                o comunicarte con nosotros por cualquiera de nuestros canales de
                contacto.
                <b>Te recordamos que en POSTA no solicitamos adelantos.</b>
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Cuándo y cómo recibís el crédito?">
            <span className="accordion-text">
              <p>
                Una vez aprobada tu solicitud, necesitaremos tus datos bancarios
                para transferirte tu plata en un plazo máximo 24hs hábiles. Si
                la realizas de manera 100% online y antes de las 17.30hs, podés
                obtener tu plata en 15 minutos.
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Como pago la cuota de mi crédito?">
            <span className="accordion-text">
              <p>
                Podés pagar tus cuotas a través de los siguientes medios de
                pago: Pago Fácil, RapiPago o PagosMisCuentas. En la solicitud de
                mutuo encontrarás toda la información necesaria para hacer los
                pagos y también podrás obtenerla llamando al 0800 112 6264
                (MANGO) o vía mail a hola@postacred.com
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Querés evitar punitorios?">
            <span className="accordion-text">
              {" "}
              <p>
                Los punitorios son un cargo extra que se sumarán a tu cuota en
                el caso que presentes una demora en el pago. Si querés evitar
                los punitorios, comunicate con nuestros especialistas al{" "}
                <a href="tel:08001127678">0800 112 7678 </a> o escribinos a
                <a href="mailto:cobranzas@postacred.com">
                  cobranzas@postacred.com
                </a>
                , así en conjunto acordamos una forma de pago. Te recomendamos
                que te comuniques antes de la fecha de vencimiento de tu próxima
                cuota, así evitás los intereses correspondientes.
              </p>
            </span>
          </Accordion>
          <H2 id="comosolicitar">¿Cómo solicitar un crédito?</H2>
          <Accordion title="¿Cuáles son nuestros requisitos?">
            <span className="accordion-text">
              <p>Sólo necesitás:</p>
              <p>- Ser mayor de edad</p>
              <p>- DNI argentino</p>
              <p>
                - Antigüedad laboral mínima de{" "}
                <span data-id="minMonths">4</span> meses
              </p>
              <p>- Poseer cuenta sueldo</p>
              <p>
                - Ingreso mínimo de $<span data-id="minSalary">8.000</span>{" "}
                brutos
              </p>
              <p>- Correo electrónico</p>
              <p>- Teléfono celular </p>
            </span>
          </Accordion>
          <Accordion title="¿Qué papeles necesitamos?">
            <span className="accordion-text">
              <p>
                Con Posta te olvidás de las filas y papeles ¡No necesitamos
                ningún papel para transferir tu plata!
              </p>
            </span>
          </Accordion>
          <Accordion title="Estoy en Veraz, ¿Puedo ser cliente Posta?">
            <span className="accordion-text">
              <p>
                Estar en Veraz no es una limitante para nosotros. Nuestro equipo
                de especialistas realizarán un análisis que va más allá de
                veraz. Te invitamos a realizar nuestro proceso 100% online y
                conocer qué productos tenemos disponibles para vos. Ingresá a{" "}
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>{" "}
                y sacá tu crédito hoy.
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Qué tipo de cuenta bancaria necesitás?">
            <span className="accordion-text">
              {" "}
              <p>
                Para poder obtener un crédito personal Posta, necesitás poseer
                una cuenta sueldo de cualquier Banco, en la misma recibirás
                nuestra transferencia.
              </p>
            </span>
          </Accordion>
          <Accordion title="No tenés Email, ¿Y querés saber si podés ser cliente Posta?">
            <span className="accordion-text">
              <p>
                Lamentablemente no es posible, debido a que mediante un correo
                electrónico te enviaremos el contrato y condiciones del crédito
                acordado. Te invitamos a generarte uno y realizar nuestro
                proceso 100% online y conocer qué créditos tenemos disponibles
                para vos.
              </p>
              <p>
                - Sitio web:{" "}
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Querés saber por qué tu solicitud no fue aprobada?">
            <span className="accordion-text">
              <p>
                Nuestros expertos necesitan contar con ciertos requisitos
                básicos para otorgar un crédito. Si crees que cumplís con todos
                éstos y de igual manera tu solicitud ha sido rechazada, te
                invitamos que te comuniques con nuestros asesores al{" "}
                <a href="tel:08001127678">0800 112 7678</a> o a{" "}
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>
                .
              </p>
            </span>
          </Accordion>
          <Accordion title="Tu solicitud ha sido aprobada por un monto inferior ¿Cómo pedir más?">
            <span className="accordion-text">
              <p>
                El monto aprobado es el máximo que podemos transferirte en esta
                ocasión, ya que nuestro objetivo es cuidar tu perfil crediticio.
                Si querés saber más podés comunicarte al{" "}
                <a href="tel:08001127678">0800 112 7678</a> o a nuestro correo
                electrónico
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>
                .
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Tu solicitud ha sido aprobada, pero no te llamaron?">
            <span className="accordion-text">
              <p>
                Si te hemos enviado un correo electrónico de confirmación pero
                nuestros asesores no se han comunicado con vos podés comunicarte
                al <a href="tel:08001127678">0800 112 7678</a> o a nuestro
                correo{" "}
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>
                . De todas maneras, si completaste la solicitud de manera 100%
                online, recibirás tu plata sin la necesidad de que un asesor se
                comunique con vos telefónicamente.
              </p>
            </span>
          </Accordion>
          <Accordion title="Ingreso erróneo de datos">
            <span className="accordion-text">
              <p>
                Si creés que completaste algo de forma equivocada en la
                solicitud, podés comunicarte con nosotros para modificar esto y
                obtener tu plata al instante.
              </p>
              <p>
                - Tel: <a href="tel:08001127678">0800 112 7678 </a>
              </p>
              <p>
                - WhatsApp:{" "}
                <a href="https://wa.me/541156906223" target="_blank">
                  11 5609 62236
                </a>
              </p>
              <p>
                - Mail:{" "}
                <a href="mailto:hola@postacred.com">hola@postacred.com</a>
              </p>
              <p>
                - Facebook:{" "}
                <a
                  target="_blank"
                  href="https://www.facebook.com/CreditosPosta/"
                >
                  CreditosPosta
                </a>
              </p>
              <p>
                - Sitio:{" "}
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>
              </p>
            </span>
          </Accordion>
          <H2 id="clientes">Clientes</H2>
          <Accordion title="¿Cuál es el tiempo máximo para recibir el dinero?">
            <span className="accordion-text">
              <p>
                Si tu solicitud se ha registrado antes de las 17.30hs la
                transferencia será en el día. En caso contrario, la misma se
                efectuará en un plazo máximo de 48hs. Por cualquier consulta te
                invitamos a contactarte con nosotros mediante nuestros canales
                de comunicación:
              </p>
              <p>
                - Tel: <a href="tel:08001127678">0800 112 7678 </a>
              </p>
              <p>
                - WhatsApp:{" "}
                <a href="https://wa.me/541156906223" target="_blank">
                  11 5609 62236
                </a>
              </p>
              <p>
                - Mail:{" "}
                <a href="mailto:hola@postacred.com">hola@postacred.com</a>
              </p>
              <p>
                - Facebook:{" "}
                <a
                  target="_blank"
                  href="https://www.facebook.com/CreditosPosta/"
                >
                  CreditosPosta
                </a>
              </p>
              <p>
                - Sitio:{" "}
                <a href="https://app.postacred.com/">
                  https://app.postacred.com/
                </a>
              </p>
            </span>
          </Accordion>
          <Accordion title="¿No sabés el valor de tu cuota?">
            <span className="accordion-text">
              <p>
                Te recomendamos que te comuniques a nuestro{" "}
                <a href="tel:08001127678">0800 112 7678</a> o a{" "}
                <a href="mailto:hola@postacred.com">hola@postacred.com</a> para
                hablar con nosotros y así consultes todas tus dudas. Tené a mano
                el número de tu DNI.
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Puedo realizar un pago anticipado?">
            <span className="accordion-text">
              <p>
                Si, es posible realizar un pago anticipado. Para coordinar el
                mismo comunícate al <a href="tel:08001127678">0800 112 7678</a>{" "}
                INT 3 o a
                <a href="mailto:cobranzas@postacred.com">
                  cobranzas@postacred.com
                </a>
                .
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Qué hago si a la fecha de vencimiento no puedo pagar mi cuota?">
            <p>
              Si a la fecha de vencimiento no podés pagar la cuota de tu
              préstamo es necesario que te comuniques con nosotros a{" "}
              <a href="tel:08001127678">0800 112 7678</a> o a{" "}
              <a href="mailto:cobranzas@postacred.com">
                cobranzas@postacred.com
              </a>{" "}
              para buscar una solución. Tené en cuenta que esto generará cargos
              extras a tu cuenta, además de acumular penalidades y afectar tu
              historial crediticio.
            </p>
          </Accordion>
          <H2 id="incrementarmonto">
            ¿Querés incrementar el monto de tu crédito?
          </H2>
          <Accordion
            title="Todavía estás pagando tu crédito Posta pero querés más plata ¿Cómo
                hacerlo?"
          >
            <span className="accordion-text">
              <p>
                Para conocer la oferta que tenemos disponible para vos nos podés
                llamar al <a href="tel:08001127678">0800 112 7678</a> y nuestros
                expertos te podrán asesorar.
              </p>
            </span>
          </Accordion>
          <Accordion title="Ya terminaste de pagar ¿Cómo hacer para tener otro crédito Posta?">
            <span className="accordion-text">
              <p>
                Al ser nuestro cliente ya tenés disponible un crédito
                diferencial, para conocer la oferta que tenemos disponible para
                vos nos podés llamar al{" "}
                <a href="tel:08001127678">0800 112 7678</a> o ingresar a
                <a href="https://postacred.com.ar/">
                  https://postacred.com.ar/
                </a>
                .
              </p>
            </span>
          </Accordion>
          <H2 id="datosrelevantes">Consultas sobre datos relevantes</H2>
          <Accordion title="¿Qué es el CBU? ¿Para qué lo necesitamos?">
            <span className="accordion-text">
              <p>
                Es un número de 22 dígitos, que identifica una cuenta bancaria
                de manera única en todo el sistema financiero argentino.
                Necesitamos contar con el mismo para realizar la transferencia
                correspondiente.
              </p>
            </span>
          </Accordion>
          <Accordion title="¿Cómo saber cuál es el CBU de tu Cuenta Sueldo?">
            <span className="accordion-text">
              <p>
                El número de CBU lo podés encontrar en tu Home Banking junto a
                tus datos financieros (Número de cuenta, alias, CBU). O
                realizando una consulta desde un cajero automático, ingresando a
                Consultas >> Número de CBU.
              </p>
            </span>
          </Accordion>
        </div>
      </Div>
    </div>
  );
}

export default FaqsAccordion;
