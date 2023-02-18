import { useState } from "react";
import AddonsForm from "./AddonsForm";
import AddressForm from "./AddressForm";
import CustomsForm from "./CustomsForm";

const MultiStepForm = ({ formData, setFormData }) => {
  const [page, setPage] = useState(0);

  const formTitles = ["Customs", "Delivery Address", "Addons"];
  //displaying the forms
  const PageDisplay = () => {
    if (page === 0) {
      return <CustomsForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <AddressForm formData={formData} setFormData={setFormData} />;
    } else {
      return <AddonsForm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="mt-2 p-8 w-screen flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full p-4">
          {PageDisplay()}
          <div className="flex mt-4 p-4">
            <button
              className="btn btn-primary btn-sm mr-auto"
              disabled={page === 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="btn btn-primary btn-sm  "
              onClick={() => {
                if (page === formTitles.length - 1) {
                  console.log(formData);
                  setFormData(formData);
                } else {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
            >
              {page === formTitles.length - 1 ? "Request Packing" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
