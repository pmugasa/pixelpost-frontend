import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Received from "./pages/parcel/Received";
import NewParcel from "./pages/parcel/NewParcel";
import ReadyToSend from "./pages/parcel/ReadyToSend";
import ShippingRates from "./pages/shipping/ShippingRates";
import Profile from "./pages/user/Profile";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
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

  const [formData, setFormData] = useState({
    //customs items
    customsItems: [],

    //addons
    addons: [],

    //address
    address: {},

    //packed items
    pack: [],
  });
  console.log("APP FORM", formData);
  console.log("PACKED ITEMS", packedItems[0]);
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

  //Login user
  function handleLogin(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Router>
        <Navbar packedItems={packedItems} receivedParcel={receivedParcel} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
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
              />
            }
          />
          <Route path="/ready-to-send" element={<ReadyToSend />} />
          <Route path="/shipping-rates" element={<ShippingRates />} />
          <Route path="/profile" element={<Profile />} />
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
          <Route path="/create-account" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
