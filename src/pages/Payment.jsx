import { useState } from "react";
import Card from "../components/Card";
import axios from "axios";

//YOCO config
const sdk = new window.YocoSDK({
  publicKey: process.env.REACT_APP_YOCO_TEST_PUBLIC_KEY,
});

//new dropping form instance
let inline = sdk.inline({
  layout: "field",
  amountInCents: 2499,
  currency: "ZAR",
});
const Payment = ({ selectedRate }) => {
  //submit button state
  const [btnDisable, setBtnDisable] = useState(false);
  //token state
  const [token, setToken] = useState("");
  console.log(process.env.REACT_APP_YOCO_TEST_PUBLIC_KEY);

  //mount inline
  console.log(inline.createToken);

  //sending data to charge API
  const charge = () => {
    axios
      .post(
        "https://online.yoco.com/v1/charges/",
        {
          token: token,
          amountInCents: selectedRate * 100,
          currency: "ZAR",
        },
        {
          headers: {
            "X-Auth-Secret-Key": process.env.REACT_APP_YOCO_TEST_SECRET_KEY,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handling payment submission form
  const handleSubmit = (e) => {
    e.preventDefault();
    //disabling button to prevent multiple clicks while processing
    setBtnDisable(true);

    //creating charge token
    inline
      .createToken()
      .then(function (result) {
        //re-enable button when request is complete
        setBtnDisable(false);
        if (result.error) {
          const errorMessage = result.error.message;

          console.log("error occured:", errorMessage);
        } else {
          setToken(result);
          //const token = result
          console.log("card successfully tokenised", token.id);
          charge();
        }
      })
      .catch(function (error) {
        //re-enable button when request is complete
        setBtnDisable(false);
        console.log("error occured", error);
      });
    //TODO send success message to backend & save to DB
    //TODO send to shippo API
    console.log("form submitted");
    console.log("token", token);
  };

  return (
    <>
      <Card>
        <h3>Enter your payment details</h3>
        <form onSubmit={handleSubmit}>
          <div id="card-frame">{}</div>
          <button
            type="submit"
            className={`btn btn-block btn-success ${
              btnDisable ? "btn-disabled" : null
            }`}
          >
            Pay R{selectedRate}
          </button>
        </form>
      </Card>
    </>
  );
};

export default Payment;
