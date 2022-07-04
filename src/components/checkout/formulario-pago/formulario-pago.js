import React from "react";
import "./formulario-pago.css";
import ReactInputMask from "react-input-mask";
import tarjetaVacia from "../../../assets/img/tarjeta-vacia.jpg";
import tarjetaVisa from "../../../assets/img/tarjeta-visa.jpg";

export default function FormularioPago(params) {
  const { 
    setIsFormularioPagoCompleted, 
    dataFormulario, 
    setDataFormulario } = params;

  const checkFormularioCompleted = () => {
    let completed = true;
    Object.keys(dataFormulario).forEach((k) => {
      if (dataFormulario[k].toString().trim() === "") {
        console.log(k, dataFormulario[k]);
        completed = false;
      }
    });
    setIsFormularioPagoCompleted(completed);
  };

  return (
    <>
      <p className="title-form">
        Paga con tarjeta de crédito o débito. <a href="/#">Ver tarjetas</a>
      </p>

      <form>
        <div className=" d-flex flex-column mt-5">
          <label htmlFor="num-input" className="form-label fw-bold">
            Número de tarjeta
          </label>
          <div>
            <div className="d-flex justify-content-end">
              {dataFormulario.num.trim() === "" ? (
                <img
                  alt="vacio"
                  className="tarjeta rounded"
                  src={tarjetaVacia}
                ></img>
              ) : (
                <img
                  alt="visa"
                  className="tarjeta rounded"
                  src={tarjetaVisa}
                ></img>
              )}
            </div>
            <ReactInputMask
              className="w-100"
              id="num-input"
              placeholder="1111 1111 1111 1111"
              value={dataFormulario.num}
              onChange={(e) => {
                setDataFormulario({ ...dataFormulario, num: e.target.value });
                checkFormularioCompleted();
              }}
              mask="9999 9999 9999 9999"
              name="Numero"
              maskChar=" "
            ></ReactInputMask>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5 mx-1">
          <div className="d-flex flex-column mx-1 w-50">
            <ReactInputMask
              id="expiracion-input"
              mask="99/99"
              name="expiracion"
              placeholder="MM/AA"
              value={dataFormulario.exp}
              onChange={(e) => {
                setDataFormulario({ ...dataFormulario, exp: e.target.value });
                checkFormularioCompleted();
              }}
            ></ReactInputMask>
            <label htmlFor="expiracion-input" className="form-label fw-bold ">
              Fecha de expiración
            </label>
          </div>

          <div className="d-flex flex-column mx-2 w-50">
            <ReactInputMask
              id="cod"
              mask="999"
              name="cod"
              placeholder="Cód. de seguridad"
              maskChar=" "
              type="tel"
              value={dataFormulario.cod}
              onChange={(e) => {
                setDataFormulario({ ...dataFormulario, cod: e.target.value });
                checkFormularioCompleted();
              }}
            ></ReactInputMask>
            <label htmlFor="cod" className="form-label fw-bold">
              3 números al dorso de tarjeta
            </label>
          </div>
        </div>

        <div className=" d-flex flex-column mt-5">
          <ReactInputMask
            id="nombre-titular"
            name="nombre-titular"
            placeholder="Nombre del titular"
            value={dataFormulario.nombre}
            onChange={(e) => {
              setDataFormulario({ ...dataFormulario, nombre: e.target.value });
              checkFormularioCompleted();
            }}
          ></ReactInputMask>
          <label htmlFor="nombre-titular" className="form-label fw-bold ">
            Como figura en la tarjeta
          </label>
        </div>

        <div className=" d-flex flex-column mt-5">
          <ReactInputMask
            id="dni-titular"
            mask="99999999"
            type="tel"
            name="dni-titular"
            maskChar=" "
            placeholder="DNI del titular"
            value={dataFormulario.dni}
            onChange={(e) => {
              if (e.target.value.toString().length < 9) {
                setDataFormulario({ ...dataFormulario, dni: e.target.value });
                checkFormularioCompleted();
              }
            }}
          ></ReactInputMask>
          <label htmlFor="dni-titular" className="form-label fw-bold">
            Número de documento
          </label>
        </div>
      </form>
    </>
  );
}
