import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight, faCalendar } from "@fortawesome/free-solid-svg-icons";

const ReceivedItem = ({ parcel, checkedState, index, handleOnChange }) => {
  return (
    <>
      <div className="  p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <div className="flex items-center">
            <div>
              <h3 className="font-bold text-primary">
                {parcel.trackingNumber}
              </h3>
              <div className="flex space-x-4 mt-2">
                <p className="font-bold text-gray-400 text-sm">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  {parcel.dateReceived}
                </p>
                <p className="font-bold text-gray-400 text-sm">
                  <FontAwesomeIcon icon={faWeight} className="mr-2" />
                  {parcel.weight}kg
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              value={parcel.trackingNumber}
              name={parcel.trackingNumber}
              onChange={() => handleOnChange(index)}
              checked={checkedState[index]}
              className="checkbox checkbox-primary ml-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivedItem;
