import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  height: 30vh;
  padding: 20px 20px 20px 20px;

  @media (min-width: 1901px) {
    height: 25vh;
  }

  @media (min-width: 1500px) and (max-width: 1900px) {
    height: 30vh;
  }

  @media (min-width: 1200px) and (max-width: 1499px) {
    height: 28vh;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    height: 28vh;
  }
`;

const P = styled.p`
  color: white;
  font-family: "Arial Black", Gadget, sans-serif;
  margin-bottom: 0px;

  @media (min-width: 1551px) {
    font-size: 14px;
  }

  @media (min-width: 1501px) and (max-width: 1550px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) and (max-width: 1500px) {
    font-size: 12px;
  }
  @media (min-width: px) and (max-width: 1199px) {
    font-size: 11px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 7px;
  }
`;

const H5 = styled.h5`
  color: white;
  font-family: "Arial Black", Gadget, sans-serif;

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 15px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 10px;
  }
`;

function Terms() {
  return (
    <Div>
      <div className="firstTerms" data-id="firstTerms">
        <P>
          El usuario debe leer con atención los siguientes Términos y
          Condiciones, de forma previa a la utilización de los servicios de
          www.postacred.com.ar. El acceso y utilización de los servicios
          ofrecidos por Créditos al Río S.A. en el sitio antes mencionado,
          implicarán la aceptación y adhesión a todos los Términos y Condiciones
          de forma automática. Cualquier usuario que no aceptase los Términos y
          Condiciones (cuyo carácter es vinculante y obligatorio), deberá
          abstenerse de utilizar el sitio y/o sus servicios disponibles. La Tasa
          Nominal Anual (TNA) y el Costo Financiero Total (CFT) varían según el
          perfil crediticio del solicitante del crédito, el monto de capital
          solicitado y plazo de financiación elegido. Ejemplo de crédito
          solicitado: Monto = ARS 10.000; Plazo = 3 meses; Tasa Nominal Anual
          (TNA) = 150,00% - Tasa Efectiva Anual (TEA) = 310,99% - Costo
          financiero Total Nominal Anual con IVA (CFTNA c/IVA) = 182,09% - Costo
          financiero Total Nominal Anual sin IVA (CFTNA s/IVA): 150,49%; Primera
          cuota = ARS 4.389; Cuota promedio = ARS 4.389; Monto total a pagar =
          ARS 13.167. Plazo mínimo 3 meses; Plazo máximo 48 meses; TNA mínima =
          150,00% y TNA máxima = 440,00%;
        </P>
      </div>
      <div className="secondTerms" data-id="secondTerms">
        <H5>máximo CFTNA (c/IVA) = 534,72%; mínimo CFTNA (c/IVA) = 181,71%.</H5>
      </div>
      <div className="thrirdTerms" data-id="thirdTerms">
        <P>
          Las cuotas serán debitadas mensualmente de la cuenta bancaria
          informada por el cliente, en los términos, condiciones y plazos
          pactados. Si el cliente incurriera en mora, se aplicará en forma
          adicional a los intereses compensatorios, un interés punitorio diario
          sobre el saldo adeudado equivalente al 50% de la TNA. Para mayor
          información, consulte los Términos y Condiciones y/o comuníquese con
          nuestro Centro de Atención al Cliente al 0800-112-7678 (Posta) o por
          correo electrónico a hola@postacred.com. El otorgamiento del crédito
          está sujeto a evaluación crediticia. Créditos al Río S.A.; CUIT:
          30-71600460-7; domicilio legal: Olga Cossettini 363 - Edificio Yacht
          VI - Puerto Madero, Ciudad Autónoma de Buenos Aires.
        </P>
      </div>
    </Div>
  );
}

export default Terms;
