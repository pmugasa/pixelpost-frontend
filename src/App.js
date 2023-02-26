import { Routes, Route, useNavigate, useMatch } from "react-router-dom";
import { useState } from "react";

import Received from "./pages/parcel/Received";

import Home from "./pages/Home";
import Profile from "./pages/user/Profile";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";

import loginService from "./services/login";
import signupService from "./services/signup";
import packService from "./services/packing";

import Navbar from "./components/Navbar";
import PackingRequest from "./pages/PackingRequest";
import PackingRequestDetails from "./pages/PackingRequestDetails";
import Ship from "./pages/Ship";
import ShipmentRates from "./pages/ShipmentRates";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [packedItems, setPackedItems] = useState([]);
  const [receivedParcel, setReceivedParcel] = useState([
    {
      dateReceived: " 13 Feb 2023",
      trackingNumber: "TRN3202384923",
      weight: 3,
    },
    {
      dateReceived: " 16 Feb 2023",
      trackingNumber: "TRN3202384925",
      weight: 2,
    },
    {
      dateReceived: " 18 Feb 2023",
      trackingNumber: "TRN3202384924",
      weight: 1,
    },
  ]);
  const [user, setUser] = useState(null);
  //packing requests
  const packingRequests = [
    {
      requestNumber: "R123455",
      weight: 5,
      dateCreated: "26 Feb 2023",
      dimensions: "L 20 x W 20 H 10",
      items: ["TRN123450000", "TRN1234566887", "TRN123456789"],
    },
    {
      requestNumber: "R13454",
      weight: null,
      dateCreated: "25 Feb 2023",
      dimensions: null,
      items: ["TRN123450000", "TRN1234566887", "TRN123456789"],
    },
    {
      requestNumber: "R13453",
      weight: null,
      dateCreated: "25 Feb 2023",
      dimensions: null,
      items: ["TRN123450000", "TRN1234566887", "TRN123456789"],
    },
  ];

  //matching a specific route to a packing request
  const match = useMatch("/packing-requests/:id");

  //packing request to be rendered when a link is clicked
  const packingRequest = match
    ? packingRequests.find((pR) => pR.requestNumber === match.params.id)
    : null;

  const navigate = useNavigate();

  //handle login
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const user = await loginService.login({ email, password });

      //saving token to local storage
      window.localStorage.setItem("loggedPixelPostUser", JSON.stringify(user));
      // packService.setToken(user.token);
      // orderService.setToken(user.token);
      setUser(user);
      navigate("/", { replace: true });

      //resetting login form
      setEmail("");
      setPassword("");
    } catch (exception) {
      console.log(exception);
    }
  }

  // handle logout
  async function handleLogout() {
    setUser(null);
    window.localStorage.removeItem("loggedPixelPostUser");
    navigate("/login", { replace: true });
  }
  //handle signup
  async function handleSignup(e) {
    e.preventDefault();

    try {
      const user = await signupService.signup({ email, password });

      //saving token to local storage
      window.localStorage.setItem("loggedPixelPostUser", JSON.stringify(user));
      packService.setToken(user.token);
      setUser(user);
      navigate("/received", { replace: true });

      //resetting the form
      setEmail("");
      setPassword("");
    } catch (exception) {
      console.log(exception);
    }
  }

  return (
    <>
      {user ? (
        <Navbar
          packedItems={packedItems}
          receivedParcel={receivedParcel}
          handleLogout={handleLogout}
        />
      ) : null}

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/received"
          element={
            <Received
              user={user}
              setReceivedParcel={setReceivedParcel}
              receivedParcel={receivedParcel}
            />
          }
        />

        <Route path="/profile" element={<Profile user={user} />} />

        <Route
          path="/packing-requests"
          element={<PackingRequest packingRequests={packingRequests} />}
        />
        <Route
          path="/packing-requests/:id"
          element={<PackingRequestDetails packingRequest={packingRequest} />}
        />
        <Route path="/ship" element={<Ship />} />
        <Route path="/shipment-rates" element={<ShipmentRates />} />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/create-account"
          element={
            <Signup
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password}
              handleSignup={handleSignup}
            />
          }
        />
      </Routes>
    </>
  );
};
export default App;
