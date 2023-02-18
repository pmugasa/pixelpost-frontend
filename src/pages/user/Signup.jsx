import { Link } from "react-router-dom";

const Signup = ({ password, setPassword, email, setEmail, handleLogin }) => {
  return (
    <>
      <div className="p-8 w-full flex justify-center items-center h-screen overflow-auto">
        <div className="border-2  border-gray-200 rounded-md  w-full mx-auto p-4 ">
          <div>
            <p className="text-center font-bold text-2xl">Signup</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-control w-full ">
              <div className="mt-8">
                <input
                  type="text"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  placeholder="Email"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="mt-8">
                <input
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="Password"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="mt-8">
                <input
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="Confirm password"
                  className="input input-bordered w-full "
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-8">
                Signup
              </button>
              <div className="form-control mt-4">
                <p>
                  Already have an account?
                  <span className="ml-2">
                    <Link to="/login" className="link link-primary">
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
