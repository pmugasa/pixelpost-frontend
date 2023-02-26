import { useState } from "react";

const NewParcel = ({ user }) => {
  let packingRequests = user.user.packingRequests;

  packingRequests.forEach((request) => {
    console.log(request);
  });
  return (
    <>
      <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <h3 className="font-bold text-center">
            You currently have no items in New Parcel🫤
          </h3>
        </div>
      </div>
    </>
  );
};

export default NewParcel;
