const AddressForm = ({ formData, setFormData }) => {
  return (
    <>
      <div className="">
        <div className="mb-4">
          <h3 className="text-center text-lg text-gray-500 font-bold ">
            DELIVERY ADDRESS
          </h3>
        </div>

        <div className="p-4">
          <div className="divider"></div>

          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.address.fullName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,
                    fullName: e.target.value,
                  },
                })
              }
              placeholder="Full Name"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="street1"
              value={formData.address.street1}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,
                    street1: e.target.value,
                  },
                })
              }
              placeholder="Street Address 1"
              required
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="street2"
              value={formData.address.street2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,
                    street2: e.target.value,
                  },
                })
              }
              placeholder="Street Address 2"
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="city"
              value={formData.address.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,
                    city: e.target.value,
                  },
                })
              }
              placeholder="City"
              required
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="postalCode"
              value={formData.address.postalCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,
                    postalCode: e.target.value,
                  },
                })
              }
              placeholder="Postal Code"
              required
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="country"
              value={formData.address.country}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,
                    country: e.target.value,
                  },
                })
              }
              placeholder="Country"
              required
              className="input input-bordered  w-full "
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phone"
              value={formData.address.phoneNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,
                    phoneNumber: e.target.value,
                  },
                })
              }
              placeholder="Phone Number"
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
