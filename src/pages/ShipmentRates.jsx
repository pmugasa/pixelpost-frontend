import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDhl, faFedex } from "@fortawesome/free-brands-svg-icons";
import Card from "../components/Card";
import { useState } from "react";

const ShipmentRates = () => {
  //selected rate state
  const [selectedRate, setSelectedRate] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  onChange={(e) => setSelectedRate(e.target.value)}
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
            <button className="btn btn-block btn-success ">make payment</button>
          </div>
        </form>
      </Card>
    </>
  );
};
export default ShipmentRates;
