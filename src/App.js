import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Received from "./pages/parcel/Received";
import NewParcel from "./pages/parcel/NewParcel";
import ReadyToSend from "./pages/parcel/ReadyToSend";
import ShippingRates from "./pages/shipping/ShippingRates";
import Profile from "./pages/user/Profile";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import loginService from "./services/login";
import signupService from "./services/signup";
import packService from "./services/packing";
import orderService from "./services/order";
import Navbar from "./components/Navbar";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [packedItems, setPackedItems] = useState([]);
  const [receivedParcel, setReceivedParcel] = useState([
    {
      dateReceived: " 13 Feb 2023",
      trackingNumber: "TRN3202384923",
      weight: 2,
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
  const [formData, setFormData] = useState({
    //customs items
    customsItems: [],

    //addons
    addons: [],

    //address
    address: {},

    //packed items
    parcels: [],
  });
  const navigate = useNavigate();

  //handle login
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const user = await loginService.login({ email, password });

      //saving token to local storage
      window.localStorage.setItem("loggedPixelPostUser", JSON.stringify(user));
      packService.setToken(user.token);
      orderService.setToken(user.token);
      setUser(user);
      navigate("/received", { replace: true });

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

  console.log("logged in user", user);

  //adding a received parcel to new parcel
  function handleAddToParcel(parcel) {
    //updating packed items state
    setPackedItems([...packedItems, parcel]);
    //items available in received after adding to parcel
    setReceivedParcel(
      receivedParcel.filter((i) => i.trackingNumber !== parcel.trackingNumber)
    );
  }

  //deleting parcel from new parcel
  function handleDeleteParcel(parcel) {
    setReceivedParcel([...receivedParcel, parcel]);
    setPackedItems(
      packedItems.filter(
        (item) => item.trackingNumber !== parcel.trackingNumber
      )
    );
  }
  if (!user) {
  }
  return (
    <>
      <Navbar
        packedItems={packedItems}
        receivedParcel={receivedParcel}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/received"
            element={
              <Received
                receivedParcel={receivedParcel}
                handleAddToParcel={handleAddToParcel}
              />
            }
          />
          <Route
            path="/new-parcel"
            element={
              <NewParcel
                packedItems={packedItems}
                setPackedItems={setPackedItems}
                handleDeleteParcel={handleDeleteParcel}
                formData={formData}
                setFormData={setFormData}
                user={user}
              />
            }
          />
          <Route
            path="/ready-to-send"
            element={
              <ProtectedRoute user={user}>
                <ReadyToSend formData={formData} />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile user={user} />} />
        </Route>
        <Route path="/shipping-rates" element={<ShippingRates />} />

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
