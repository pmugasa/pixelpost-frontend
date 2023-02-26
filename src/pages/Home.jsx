const Home = ({ user }) => {
  console.log(user.user);
  return (
    <>
      <div className="  mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-gray-200 w-full  h-fit mx-auto p-4 ">
          <h3>Hi 👋🏿 {user.user.email}</h3>
          <div className="divider"></div>
          <p className="font-bold text-primary">
            Use the following address on checkout:
          </p>
          <p className="font-medium text-gray-400 text-sm">Your Name</p>
          <p className="font-medium text-gray-400 text-sm">
            18 Redcliffe Close
          </p>
          <p className="font-medium text-gray-400 text-sm">
            {user.user.lockerNumber}
          </p>
          <p className="font-medium text-gray-400 text-sm">Parklands</p>
          <p className="font-medium text-gray-400 text-sm">7441</p>
          <p className="font-medium text-gray-400 text-sm">Cape Town</p>
          <p className="font-medium text-gray-400 text-sm">0746888479</p>
        </div>
      </div>

      <div className="mt-2 p-2 w-full flex flex-col justify-center items-center">
        <div className="border-2  border-red-200 w-full  h-fit mx-auto p-4 ">
          <p>Please make sure to include the locker number. </p>
        </div>
      </div>
    </>
  );
};

export default Home;
