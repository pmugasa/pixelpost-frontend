const AddressForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className="">
        <div className="mb-4">
          <h3 className="text-center text-lg text-primary font-bold ">
            DELIVERY ADDRESS
          </h3>
        </div>

        <div className="">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deliveryAddress: {
                    ...formData.deliveryAddress,
                    fullName: e.target.value,
                  },
                })
              }
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Street Address 1"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deliveryAddress: {
                    ...formData.deliveryAddress,
                    street1: e.target.value,
                  },
                })
              }
              required
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Street Address 2"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deliveryAddress: {
                    ...formData.deliveryAddress,
                    street2: e.target.value,
                  },
                })
              }
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="City"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deliveryAddress: {
                    ...formData.deliveryAddress,
                    city: e.target.value,
                  },
                })
              }
              required
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Zip code"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deliveryAddress: {
                    ...formData.deliveryAddress,
                    zip: e.target.value,
                  },
                })
              }
              required
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Country"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deliveryAddress: {
                    ...formData.deliveryAddress,
                    country: e.target.value,
                  },
                })
              }
              required
              className="input input-bordered w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  deliveryAddress: {
                    ...formData.deliveryAddress,
                    phone: e.target.value,
                  },
                })
              }
              required
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AddressForm;
