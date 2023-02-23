import { useState } from "react";
import packingServices from "../../services/packing";

const AddonsForm = ({ packedItems, user }) => {
  const addons = [
    {
      name: "Item photos",
      price: 50,
    },
    {
      name: "Device testing",
      price: 100,
    },
    {
      name: "Extra bubble wrap",
      price: 20,
    },
  ];
  const [checkedState, setCheckedState] = useState(
    new Array(addons.length).fill(false)
  );
  const [shipmentAddons, setShipmentAddons] = useState([]);
  const [total, setTotal] = useState(0);

  console.log("checked item", checkedState);
  function handleOnChange(position) {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    //total cost
    const totalCost = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + addons[index].price;
      }
      return sum;
    }, 0);
    setTotal(totalCost);
    if (updatedCheckedState[position]) {
      const { name, price } = addons[position];
      setShipmentAddons([...shipmentAddons, { name, price }]);
    } else {
      const updatedShipmentAddons = shipmentAddons.filter(
        (addon) => addon.name !== addons[position].name
      );

      setShipmentAddons(updatedShipmentAddons);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      parcels: packedItems,
      addons: shipmentAddons,
    };
    console.log(formData);
    try {
      await packingServices.pack(formData);
      packingServices.setToken(user.token);
    } catch (error) {
      console.log("error", error);
    }
  }
  console.log("SHIPMENT ADDONS", shipmentAddons);
  return (
    <>
      <div className="">
        <div className="mb-4">
          <h3 className="text-center text-lg text-gray-500 font-bold ">
            ADDONS
          </h3>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSubmit}>
          <ul className="">
            {addons.map(({ name, price }, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-items-start items-center space-x-8 mt-4 p-4"
                >
                  <input
                    type="checkbox"
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    className="toggle toggle-primary toggle-sm "
                  />
                  <div className="my-auto text-normal">
                    <label htmlFor={`custom-checkbox-${index}`}>
                      {name}
                      <span className="font-bold text-primary "> R{price}</span>
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
          <button type="submit" className="btn btn-success btn-xs">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddonsForm;
