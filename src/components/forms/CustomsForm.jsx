const CustomsForm = ({ formData, setFormData, formFields, setFormFields }) => {
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
      net_weight: "",
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
  console.log("customs form data", formFields);
  return (
    <>
      <div className=" w-96">
        <div className="mb-4">
          <h3 className="text-center text-gray-500 text-lg font-bold">
            CUSTOMS DECLARATION
          </h3>
        </div>

        <div>
          {formFields.map((input, index) => {
            return (
              <div key={index}>
                <div>
                  <label className="label">
                    <span className="label-text">Item description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={(e) => handleFormChange(index, e)}
                    placeholder="e.g running shoes"
                    required
                    className="input input-bordered w-full "
                  />

                  <div className="">
                    <div className="">
                      <label className="label">
                        <span className="label-text">Item value</span>
                      </label>
                      <input
                        type="text"
                        name="value_amount"
                        value={input.value_amount}
                        onChange={(e) => handleFormChange(index, e)}
                        inputMode="numeric"
                        placeholder="R1 000.00"
                        required
                        className="input input-bordered  w-full "
                      />
                    </div>

                    <div className="">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={input.quantity}
                        onChange={(e) => handleFormChange(index, e)}
                        inputMode="numeric"
                        placeholder="1"
                        required
                        className="input input-bordered  w-full "
                      />
                    </div>

                    <div className="">
                      <label className="label">
                        <span className="label-text">Weight (kg)</span>
                      </label>
                      <input
                        type="text"
                        name="net_weight"
                        value={input.net_weight}
                        onChange={(e) => handleFormChange(index, e)}
                        inputMode="numeric"
                        placeholder="1"
                        required
                        className="input input-bordered  w-full "
                      />
                    </div>
                  </div>
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
