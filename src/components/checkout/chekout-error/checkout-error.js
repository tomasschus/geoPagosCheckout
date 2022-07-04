import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import "./checkout-error.css";

export default function CheckoutError(props) {

  const {setCheckoutError} = props

  return (
    <>
      <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <FontAwesomeIcon className="important" icon={faExclamationCircle} />
      </div>
      <div>
        <h4 className="text-center my-4">Transacción denegada</h4>
        <p className="text-center desc">
          ¡Disculpas! Se ha producido un error, por favor vuelve a intentar.
        </p>
      </div>
      <div className="reintentar mt-5 mx-5">
        <button
            onClick={()=>{
                setCheckoutError(false)
            }}
            > Volver a intentar </button>
        </div>
      </div>
    </>
  );
}
