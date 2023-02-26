import Parcel from "../../components/Parcel";
import { useState } from "react";
const ReadyToSend = ({ formData }) => {
  const [showForm, setShowForm] = useState(true);
  const [submittedParcels, setSubmittedParcels] = useState([]);

  const parcels = [
    {
      id: 1,
      weight: 2,
      date: Date.now(),
    },
    {
      id: 2,
      weight: 1,
      date: Date.now(),
    },
    {
      id: 3,
      weight: 3,
      date: Date.now(),
    },
  ];

  const handleFormSubmit = async (e, parcelId) => {
    e.preventDefault();
    const parcelData = {
      customsData: formFields,
      deliveryAddress: formData.deliveryAddress,
    };

    setSubmittedParcels([...submittedParcels, parcelId]);
  };

  //TODO FETCH THE PARCELS FROM THE DATABASE FROM THE USER'S ACCOUNT
  return (
    <>
      <h3>Parcels</h3>
      {parcels.map((parcel) => {
        return (
          <Parcel
            key={parcel.id}
            parcel={parcel}
            handleFormSubmit={handleFormSubmit}
            setShowForm={setShowForm}
            showForm={showForm}
            formFields={formFields}
            setFormFields={setFormFields}
          />
        );
      })}

      <h3>Shipments</h3>

      <h3>Orders</h3>
      <div className="mt-2 p-8 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4">
          <div className="flex space-x-1">
            <div>
              <h4>Order no. 1234</h4>
              <p>Created on 25 Feb 2023</p>
              <p>Total cost R300</p>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-sm">
                Track
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyToSend;
