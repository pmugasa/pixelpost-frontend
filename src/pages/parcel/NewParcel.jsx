import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Addons from "../../components/forms/AddonsForm";

const NewParcel = ({ packedItems, handleDeleteParcel, user }) => {
  if (packedItems.length > 0) {
    return (
      <>
        {packedItems.map((parcel, i) => {
          return (
            <div key={parcel.trackingNumber}>
              <div>
                <div className="flex flex-col w-full px-2">
                  <div className=" w-full h-10 mx-auto  p-2 ">
                    <div className="flex justify-start items-start">
                      <div className="avatar  flex-none">
                        <div className="w-8 rounded">
                          <img src={packedItems[i].img} alt="parcel" />
                        </div>
                      </div>

                      <div className="mx-4  my-auto w-44 flex space-x-2 ">
                        <p className="text-base font-semibold">
                          Shipment: {packedItems[i].trackingNumber}
                        </p>
                        <div className="space-x-2 ">
                          <p className="badge badge-ghost badge-sm">
                            {packedItems[i].weight} kg
                          </p>
                        </div>
                      </div>
                      <div className="ml-auto ">
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          size="sm"
                          onClick={() => handleDeleteParcel(parcel)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          );
        })}
        <Addons packedItems={packedItems} user={user} />
      </>
    );
  } else {
    return (
      <>
        <div className="  mt-2 p-8 w-full flex flex-col justify-center items-center">
          <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
            <h3 className="font-bold text-center">
              You currently have no items in New Parcel🫤
            </h3>
          </div>
        </div>
      </>
    );
  }
};

export default NewParcel;
