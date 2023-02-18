const CustomsForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className=" w-96">
        <div className="mb-4">
          <h3 className="text-center text-gray-500 text-lg font-bold">
            CUSTOMS DECLARATION
          </h3>
        </div>

        <div className="p-4">
          <div className="divider"></div>

          <div>
            <label className="label">
              <span className="label-text">Item description</span>
            </label>
            <input
              type="text"
              name="description"
              value={formData.customsItems.description}
              onChange={({ target }) =>
                setFormData({
                  ...formData,
                  customsItems: {
                    ...formData.customsItems,
                    description: target.value,
                  },
                })
              }
              placeholder="e.g running shoes"
              required
              className="input input-bordered w-full "
            />
          </div>

          <div className="">
            <div className="">
              <label className="label">
                <span className="label-text">Item value</span>
              </label>
              <input
                type="text"
                name="value_amount"
                value={formData.customsItems.value_amount}
                onChange={({ target }) =>
                  setFormData({
                    ...formData,
                    customsItems: {
                      ...formData.customsItems,
                      value_amount: target.value,
                    },
                  })
                }
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
                value={formData.customsItems.quantity}
                onChange={({ target }) =>
                  setFormData({
                    ...formData,
                    customsItems: {
                      ...formData.customsItems,
                      quantity: target.value,
                    },
                  })
                }
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
                value={formData.customsItems.net_weight}
                onChange={({ target }) =>
                  setFormData({
                    ...formData,
                    customsItems: {
                      ...formData.customsItems,
                      net_weight: target.value,
                    },
                  })
                }
                inputMode="numeric"
                placeholder="1"
                required
                className="input input-bordered  w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomsForm;
