import { useState } from "react";
import Checkout from "./components/checkout/checkout";
import CheckoutError from "./components/checkout/chekout-error/checkout-error";
import Navbar from "./components/navbar/navbar";

function App() {
  const json = require("./checkoutData.json");
  const data = json.data;

  const [checkoutError, setCheckoutError] = useState(false);
  return (
    <div>
      <Navbar checkoutError={checkoutError} shop_name={data.shop_name} />

      {!checkoutError ? (
        <Checkout
          setCheckoutError={setCheckoutError}
          currency_symbol={data.attributes.currency_symbol}
          installments={data.attributes.installments}
          items={data.attributes.items}
          total_price={data.attributes.total_price}
        />
      ) : (
        <CheckoutError 
        setCheckoutError={setCheckoutError}/>
      )}
    </div>
  );
}

export default App;
