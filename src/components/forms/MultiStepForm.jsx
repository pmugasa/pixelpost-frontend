import { useState } from "react";
import AddressForm from "./AddressForm";
import CustomsForm from "./CustomsForm";

const MultiStepForm = ({
  handleFormSubmit,
  formFields,
  setFormFields,
  parcel,
}) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    deliveryAddress: {
      fullName: "",
      street1: "",
      street2: "",
      city: "",
      zip: "",
      country: "",
      phoneNumber: "",
    },
  });

  const formTitles = ["Customs", "Delivery Address"];

  //displaying the forms
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CustomsForm formFields={formFields} setFormFields={setFormFields} />
      );
    } else if (page === 1) {
      return <AddressForm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="  flex flex-col justify-center items-center">
        <div>
          {PageDisplay()}
          <div className="flex mt-4 p-4">
            <button
              className="btn btn-primary btn-sm mr-auto"
              type="button"
              disabled={page === 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Prev
            </button>
            {page === formTitles.length - 1 ? (
              <button
                type="submit"
                className="btn btn-success btn-sm"
                onClick={(e) => handleFormSubmit(e, parcel.id)}
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-sm "
                onClick={() => setPage((currentPage) => currentPage + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
