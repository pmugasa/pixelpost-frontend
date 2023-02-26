const CustomsForm = ({ formFields, setFormFields }) => {
  //handle data change from the inputs
  const handleFormChange = (index, e) => {
    let data = [...formFields];
    data[index][e.target.name] = e.target.value;
    setFormFields(data);
  };

  //add more form fields
  const addFields = () => {
    let newField = {
      description: "",
      value_amount: "",
      quantity: "",
    };
    setFormFields([...formFields, newField]);
  };
  const removeFields = (index) => {
    if (formFields.length > 1) {
      const newFields = [...formFields];
      newFields.splice(index, 1);
      setFormFields(newFields);
    }
  };

  return (
    <>
      <div className=" ">
        <div className="mb-4">
          <h3 className="text-center text-primary text-lg font-bold">
            CUSTOMS DECLARATION
          </h3>
        </div>

        <div>
          <div className="grid grid-cols-5 gap-x-2">
            <p className=" font-semibold text-gray-400 col-span-3 w-full ">
              Description
            </p>

            <p className="font-semibold text-gray-400 w-12 text-left">Value</p>
            <p className="font-semibold text-gray-400 w-12 text-left">
              Quantity
            </p>
          </div>
          {formFields.map((input, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-5 gap-x-2">
                  <input
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={(e) => handleFormChange(index, e)}
                    placeholder="e.g running shoes"
                    required
                    className="input input-bordered col-span-3 w-full  "
                  />

                  <input
                    type="text"
                    name="value_amount"
                    value={input.value_amount}
                    onChange={(e) => handleFormChange(index, e)}
                    inputMode="numeric"
                    placeholder="R1 000"
                    required
                    className="input input-bordered  "
                  />

                  <input
                    type="text"
                    name="quantity"
                    value={input.quantity}
                    onChange={(e) => handleFormChange(index, e)}
                    inputMode="numeric"
                    placeholder="1"
                    required
                    className="input input-bordered   "
                  />
                </div>

                <button onClick={addFields}>Add more...</button>
                {index > 0 && (
                  <button onClick={() => removeFields(index)}>Remove...</button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CustomsForm;
