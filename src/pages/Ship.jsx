import Card from "../components/Card";
import CustomsForm from "../components/forms/CustomsForm";
import AddressForm from "../components/forms/AddressForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Ship = () => {
  //state for the customs form
  const [formFields, setFormFields] = useState([
    { description: "", value_amount: "", quantity: "" },
  ]);

  //form to be submitted to the backend
  const [formData, setFormData] = useState({
    customsItems: [],
    deliveryAddress: {
      fullName: "",
      street1: "",
      stree2: "",
      city: "",
      zip: "",
      coutry: "",
      phone: "",
    },
  });

  //navigation config
  const navigate = useNavigate();

  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.customsItems = formFields;
    navigate("/shipment-rates");
    console.log("submitted", formData);
  };
  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <CustomsForm formFields={formFields} setFormFields={setFormFields} />
          <div className="divider"></div>
          <AddressForm formData={formData} setFormData={setFormData} />
          <button type="submit" className="btn btn-block btn-primary">
            continue
          </button>
        </form>
      </Card>
    </>
  );
};

export default Ship;
