import "./cuota.css";

export default function Cuota(props) {
  const { financialRate, installment, installmentPrice, total, index, setCuota} = props;
  return (
    <div className="form-check rounded">
      <div className="m-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <input
              onClick={()=>{setCuota(index)}}
              className="form-check-input rounded-circle "
              type="radio"
              name="flexRadioDefault"
              id={"flexRadio-"+index}
            ></input>
          </div>
          <div className="d-flex flex-column">
            <label
              className="form-check-label pt-2 fs-6"
              htmlFor={"flexRadio-"+index}
            >
              {installment} cuotas de ${installmentPrice}
            </label>
            <label
              className="form-check-label pb-2 fs-6 cf"
              htmlFor={"flexRadio-"+index}
            >
              CF: {financialRate}%
            </label>
          </div>
        </div>

        <div>
          <label
            className="form-check-label fw-bolder fs-6"
            htmlFor={"flexRadio-"+index}
          >
            {financialRate===0? 'Sin interés': total} 
          </label>
        </div>
      </div>
    </div>
  );
}
