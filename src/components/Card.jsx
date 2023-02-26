const Card = ({ children }) => {
  return (
    <>
      <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
