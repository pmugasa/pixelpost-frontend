import { Link } from "react-router-dom";

const Login = ({ password, setPassword, email, setEmail, handleLogin }) => {
  return (
    <>
      <div className="p-8 w-full flex justify-center items-center h-screen overflow-auto">
        <div className="border-2  border-gray-200 rounded-md  w-full mx-auto p-4 ">
          <div>
            <p className="text-center font-bold text-2xl">Login</p>
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
              <button type="submit" className="btn btn-primary btn-block mt-8">
                Login
              </button>
              <div className="form-control mt-4">
                <p>
                  Don't have an account?{" "}
                  <span>
                    <Link to="/create-account" className="link link-primary">
                      Create an account
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

export default Login;
