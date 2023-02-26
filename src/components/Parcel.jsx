import MultiStepForm from "./forms/MultiStepForm";

const Parcel = ({
  parcel,
  handleFormSubmit,
  setShowForm,
  showForm,
  formFields,
  setFormFields,
}) => {
  return (
    <>
      <div className="  mt-2 p-8 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <div className="flex space-x-4 items-center">
            <div className="avatar">
              <div className="w-20 rounded">
                <img
                  src="https://bpando.org/wp-content/uploads/australia-post-domestic-parcel-01.jpg"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>

            <div className="">
              <p className="font-medium text-sm text-gray-500">Weight 5kg</p>
              <p className="font-medium text-sm text-gray-500">
                Dimensional weight{parcel.weight}kg
              </p>
              <p className="font-medium text-sm text-gray-500">
                Created on {parcel.date}
              </p>
            </div>
          </div>
          <div className="flex">
            <button
              type="button"
              className="btn btn-primary btn-sm ml-auto"
              onClick={() => setShowForm(!showForm)}
            >
              Ship
            </button>
          </div>

          <div className={showForm ? "hidden" : "block"}>
            <div className="p-8">
              <MultiStepForm
                handleFormSubmit={handleFormSubmit}
                setFormFields={setFormFields}
                formFields={formFields}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parcel;
