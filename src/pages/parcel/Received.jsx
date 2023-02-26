import { useState } from "react";
import ReceivedItem from "../../components/ReceivedItem";
import packingService from "../../services/packing";

const Received = ({ receivedParcel, setReceivedParcel, user }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(receivedParcel.length).fill(false)
  );

  console.log("token", user.token);
  //input button change
  const handleOnChange = (position) => {
    //reverse the value if it matches the index
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    //updating checked items to be sent to backend
    if (updatedCheckedState[position]) {
      const { trackingNumber } = receivedParcel[position];
      setCheckedItems([...checkedItems, trackingNumber]);
    } else {
      const updatedShipmentAddons = checkedItems.filter(
        (item) =>
          item.trackingNumber !== receivedParcel[position].trackingNumber
      );

      setCheckedItems(updatedShipmentAddons);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //send checked items to backend
    try {
      // adding token to headers
      packingService.setToken(user.token);
      const packingRequest = await packingService.pack(checkedItems);

      //getting items that are unchecked
      const uncheckedItems = receivedParcel.filter((item, index) => {
        return !checkedState[index];
      });

      console.log(packingRequest);

      // update the state of receivedParcel to exclude the selected items
      setReceivedParcel(uncheckedItems);

      // reset the checkedItems and checkedState state variables
      setCheckedItems([]);
      setCheckedState(new Array(uncheckedItems.length).fill(false));
    } catch (error) {
      console.log(error);
    }
  };

  if (receivedParcel.length <= 0) {
    return (
      <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <h3 className="font-bold text-center">
            You currently have no items in Received🫤
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <form onSubmit={handleSubmit}>
          {receivedParcel.map((parcel, index) => (
            <ReceivedItem
              parcel={parcel}
              checkedState={checkedState}
              handleOnChange={handleOnChange}
              index={index}
              key={index}
            />
          ))}

          <div className="p-2 w-full">
            <button type="submit" className="btn btn-success btn-block">
              Request packing
            </button>
          </div>
        </form>
      </>
    );
  }
};

export default Received;
