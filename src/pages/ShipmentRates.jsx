import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDhl, faFedex } from "@fortawesome/free-brands-svg-icons";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ShipmentRates = ({ selectedRate, setSelectedRate }) => {
  //token state
  const [token, setToken] = useState("");

  const rates = [
    {
      amount: 500,
      duration_terms: "Delivery in 3 to 7 business days ",
      provider: "DHL",
      provider_image_200: <FontAwesomeIcon icon={faDhl} size="3x" />,
    },
    {
      amount: 800,
      duration_terms: "Delivery in 1 to 3 business days ",
      provider: "Fedex",
      provider_image_200: <FontAwesomeIcon icon={faFedex} size="3x" />,
    },
  ];

  //navigation config
  const navigate = useNavigate();

  //YOCO config
  const yoco = new window.YocoSDK({
    publicKey: process.env.REACT_APP_YOCO_TEST_PUBLIC_KEY,
  });

  //handle radio change
  const handleChange = (e) => {
    setSelectedRate(e.target.value);
  };

  //TODO move this function to the backend
  const sendCharge = (tk) => {
    axios
      .post(
        "https://online.yoco.com/v1/charges/",
        {
          token: tk,
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
  //payment details form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //navigate("/payment");
    yoco.showPopup({
      amountInCents: selectedRate * 100,
      currency: "ZAR",
      name: "PixelPost",
      description: "Shop & Ship",
      callback: function (result) {
        //this function returns a token that the server can user to capture a payment

        if (result.error) {
          const errorMessage = result.error.message;
          console.log("error occured" + errorMessage);
        } else {
          console.log("card successfully tokenised:", result.id);
          setToken(result.id);
          navigate("/orders");
          //TODO send the TOKEN to backend
        }
      },
    });
    console.log("selected", selectedRate);
  };
  return (
    <>
      <Card>
        <h3 className="font-bold text-lg text-primary">
          Select your desired courier
        </h3>
        <form onSubmit={handleSubmit} className="mt-4">
          {rates.map((rate) => {
            return (
              <label
                className="label cursor-pointer flex space-x-4"
                key={rate.provider}
              >
                <input
                  type="radio"
                  name="rates"
                  value={rate.amount}
                  onChange={handleChange}
                  className="radio checked:bg-primary radio-sm"
                />
                <span className="label-text font-medium text-gray-400">
                  {rate.provider_image_200}
                </span>
                <span className="label-text font-medium text-gray-400">
                  {rate.duration_terms}
                </span>
                <span className="label-text font-bold text-gray-500">
                  R{rate.amount}
                </span>
              </label>
            );
          })}
          <div className="mt-4">
            <button className="btn btn-block btn-success ">ship</button>
          </div>
        </form>
      </Card>
    </>
  );
};
export default ShipmentRates;
