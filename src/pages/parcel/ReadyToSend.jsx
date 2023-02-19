import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const ReadyToSend = ({ formData }) => {
  const [selectedRate, setSelectedRate] = useState("");

  //shipping rates
  const rates = [
    {
      amount: 600,
      provider: "DHL",
      // provider_image_200: <FontAwesomeIcon icon={faDhl} size="2xl" />,
      servicelevel: "Priority Mail",
      estimated_days: 2,
    },
    {
      amount: 1000,
      provider: "Fedex",
      //  provider_image_200: <FontAwesomeIcon icon={faFedex} size="2xl" />,
      servicelevel: "Priority Mail",
      estimated_days: 3,
    },
    {
      amount: 500,
      provider: "UPS",
      //  provider_image_200: <FontAwesomeIcon icon={faUps} size="2xl" />,
      servicelevel: "Priority Mail",
      estimated_days: 2,
    },
  ];

  const parcel = {
    length: 5,
    width: 5,
    height: 5,
    distance_unit: "cm",
    weight: 2,
    mass_unit: "kg",
  };

  console.log("form in ready to send", formData);

  //getting the value of selected shipping rate
  const handleSelect = (e) => {
    setSelectedRate(e.target.value);
    console.log("rate selected", selectedRate);
  };

  //calculating total costs for payment
  const handleClick = () => {
    console.log("Total Cost", selectedRate);
  };
  return (
    <>
      <>
        <div className="w-full p-4 flex justify-center items-center ">
          <div className="border-2 border-gray-400 shadow-sm rounded-md w-full h-fit mx-auto">
            <div className="flex p-4 border-b-2 border-gray-200">
              <h2 className="font-bold text-base">Parcel #001</h2>
              <div className="badge badge-info ml-auto ">
                <span className="font-bold">Ready for Payment</span>
              </div>
            </div>

            <div className="w-full flex justify-start items-center p-4 space-x-8 ">
              <div className="avatar ">
                <div className="w-32 rounded">
                  <img src="https://placeimg.com/192/192/people" alt="parcel" />
                </div>
              </div>

              <div className="">
                <p className="font-bold">
                  Total Weight <span className="font-light">5.1kg</span>
                </p>
                <p className="font-bold">
                  Dimensional Weight <span className="font-light">12.2kg</span>
                </p>

                <a
                  href="https://www.fedex.com/en-us/shipping/packaging/what-is-dimensional-weight.html"
                  target="_blank"
                  rel="noreferrer"
                  className="link link-hover link-primary"
                >
                  <FontAwesomeIcon icon={faCircleQuestion} size="sm" />
                  Dimension Weight
                </a>
              </div>
            </div>

            <div className="divider"></div>
            <div className="w-full p-4">
              <h3 className="font-bold text-gray-500">DECLARED ITEMS</h3>
              {formData.customsItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-b-2 border-gray-200 mt-4"
                  >
                    <p>{item.quantity}</p>
                    <p className="ml-4 text-gray-500">{item.description}</p>
                    <p className="ml-auto text-gray-500">{item.value_amount}</p>
                  </div>
                );
              })}
            </div>
            <div className="divider"></div>

            <div className="p-4 w-full">
              <h3 className="font-bold text-gray-500">DESTINATION</h3>
              <div className="mt-4">
                <p className="font-semibold text-gray-500">
                  {formData.address.fullName}
                </p>
                <p className="font-semibold text-gray-500">
                  {formData.address.phoneNumber}
                </p>
                <p className="font-semibold text-gray-500">
                  {formData.address.street1}
                </p>
                <p className="font-semibold text-gray-500">
                  {formData.address.city}
                </p>
                <p className="font-semibold text-gray-500">
                  {formData.address.postalCode}
                </p>
                <p className="font-semibold text-gray-500">
                  {formData.address.country}
                </p>
              </div>
            </div>
            <div className="divider"></div>

            <div className="p-4 w-full">
              <h3 className="font-bold text-gray-500">
                CHOOSE YOUR CARRIER OF CHOICE
              </h3>
              {rates.map((rate) => {
                return (
                  <div key={rate.provider}>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value={rate.amount}
                        name="rate"
                        className="radio radio-primary radio-sm"
                        onChange={handleSelect}
                        defaultChecked={selectedRate === rate.amount}
                      />
                      <div className="grid  grid-flow-col auto-cols-max items-center space-x-3">
                        <span>{rate.provider_image_200}</span>

                        <p className="italic text-sm">{rate.servicelevel}</p>
                        <p className="italic text-sm">
                          Estimated arrival {rate.estimated_days} days
                        </p>
                        <p className="font-bold">R{rate.amount}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p>{selectedRate}</p>
            </div>
            <div className="w-full p-4 space-x-4">
              <button className="btn btn-sm btn-primary" onClick={handleClick}>
                Make payment
              </button>
              <button className="btn btn-sm btn-outline btn-ghost ">
                Edit Address
              </button>
            </div>
          </div>
        </div>
      </>

      <div className="  mt-2 p-8 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <h3 className="font-bold text-center">
            You currently have no items Ready To Be Sent🫤
          </h3>
        </div>
      </div>
    </>
  );
};

export default ReadyToSend;
