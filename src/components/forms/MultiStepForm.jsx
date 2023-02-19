import { useState } from "react";
import AddonsForm from "./AddonsForm";
import AddressForm from "./AddressForm";
import CustomsForm from "./CustomsForm";

const MultiStepForm = ({
  formData,
  setFormData,
  packedItems,
  setPackedItems,
}) => {
  const [page, setPage] = useState(0);
  const [formFields, setFormFields] = useState([
    { description: "", value_amount: "", quantity: "", net_weight: "" },
  ]);
  const formTitles = ["Customs", "Delivery Address", "Addons"];
  console.log(packedItems);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      pack: packedItems.forEach((element) => {
        formData.pack.push(element);
      }),
      customsItems: formFields.forEach((element) => {
        formData.customsItems.push(element);
      }),
    });
    setFormData(formData);
    setPackedItems([]);

    console.log("FORM DATA AFTER SUBMIT:", formData);
  };
  //displaying the forms
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CustomsForm
          formData={formData}
          setFormData={setFormData}
          packedItems={packedItems}
          formFields={formFields}
          setFormFields={setFormFields}
        />
      );
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
                onClick={handleFormSubmit}
                className="btn btn-success btn-sm"
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
