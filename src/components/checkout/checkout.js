import React, { useState } from "react";
import "./checkout.css";
import FormularioPago from "./formulario-pago/formulario-pago";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cuota from "./cuota/couta";

export default function Checkout(props) {
  const {
    setCheckoutError,
    currency_symbol,
    installments,
    items,
    total_price,
  } = props;


  const [dataFormulario, setDataFormulario] = useState({
    dni: "",
    num: "",
    exp: "",
    nombre: "",
    cod: "",
  });
  const [isFormularioPagoCompleted, setIsFormularioPagoCompleted] = useState(false);
  const [cuota, setCuota] = useState(null);
  const [emailPersonal, setEmailPersonal] = useState("");
  const [loading, setLoading] = useState(null);

  return (
    <>
      <div className="container pt-5">
        <h4 className="text-center font-roboto fw-bold">
          Completá los datos datos para pagar
        </h4>
        <div className="pt-3">
          <div className="border border-1 rounded">
            <div className="pt-2 px-3 d-flex justify-content-between ">
              <p className="name-total-compra font-bbva ">Total</p>
              <p className="total-compra font-bbva">
                {currency_symbol}
                {total_price.toFixed(2)}
              </p>
            </div>
            {items.map((item) => {
              return (
                <div
                  key={item.name}
                  className="px-3 d-flex justify-content-between "
                >
                  <p className="items-compra font-roboto">
                    {item.name} x{item.quantity}
                  </p>
                  <p className="items-compra font-roboto">
                    {currency_symbol}
                    {(item.unitPrice.amount * item.quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mt-5">
          <FormularioPago
            dataFormulario={dataFormulario}
            setDataFormulario={setDataFormulario}
            setIsFormularioPagoCompleted={setIsFormularioPagoCompleted}
          />
        </div>

        <div>
          <h4 className="mt-5 font-roboto fw-bold">Cuotas</h4>
          <div>
            {installments.map((i, index) => {
              return (
                <div key={"couta-" + index}>
                  <Cuota
                    setCuota={setCuota}
                    index={index}
                    financialRate={i.financialRate}
                    installment={i.installment}
                    installmentPrice={i.installmentPrice}
                    total={i.total}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <h4 className=" font-roboto fw-bold">Datos personales</h4>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email-input"
              placeholder="E-mail"
              value={emailPersonal}
              onChange={(e) => {
                setEmailPersonal(e.target.value);
              }}
            ></input>
            <label htmlFor="email-input" className="form-label ">
              A este email te enviaremos el recibo de compra
            </label>
          </div>
        </div>

        <div>
          <div class="ls-elevation">
            { loading?  <div class="loadingSpinner">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>: <></>}
            <button
              onClick={() => {
                setLoading(true)
                setTimeout(() => {
                  console.log(isFormularioPagoCompleted, dataFormulario, cuota, emailPersonal)
                  setCheckoutError(true);
                }, 2500);
              }}
            >
              Continuar
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center my-3 encript">
          <FontAwesomeIcon icon={faLock} color="grey" />
          <p className="mx-1">
            Todas las transacciones son seguras y encriptadas.
          </p>
        </div>
      </div>
    </>
  );
}
