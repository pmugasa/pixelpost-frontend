import { useState } from "react";

const AddonsForm = ({ setFormData, formData }) => {
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
  const [total, setTotal] = useState(0);

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
      setFormData({
        ...formData,
        addons: [
          ...formData.addons,
          { name: addons[position].name, price: addons[position].price },
        ],
      });
      console.log("Checked Name:", addons[position].name);
      console.log("Checked Value:", addons[position].price);
    }
  }
  console.log("Total Price", total);
  console.log("form data", formData);
  return (
    <>
      <div className="">
        <div className="mb-4">
          <h3 className="text-center text-lg text-gray-500 font-bold ">
            ADDONS
          </h3>
        </div>
        <div className="divider"></div>

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
      </div>
    </>
  );
};

export default AddonsForm;
