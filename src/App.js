import { Routes, Route, useNavigate, useMatch } from "react-router-dom";
import { useState } from "react";

import Received from "./pages/parcel/Received";

import Home from "./pages/Home";
import Profile from "./pages/user/Profile";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import loginService from "./services/login";
import signupService from "./services/signup";
import packService from "./services/packing";

import Navbar from "./components/Navbar";
import PackingRequest from "./pages/PackingRequest";
import PackingRequestDetails from "./pages/PackingRequestDetails";
import AdditionalServices from "./pages/AdditionalServices";
import Ship from "./pages/Ship";
import ShipmentRates from "./pages/ShipmentRates";
import Payment from "./pages/Payment";

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
  //selected rate state
  const [selectedRate, setSelectedRate] = useState("");

  const [user, setUser] = useState(null);
  //packing requests
  const [packingRequests, setPackingRequests] = useState([
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
  ]);

  //orders
  const orders = [
    {
      orderNumber: "O1234",
      dateCreated: "02 March 2023",
      trackingNumber: "TRN1234567890",
      trackingLink: "www.google.com",
      deliveryAddress: {
        fullName: "Pete Mugasa",
        street1: "6682 Emerald Road",
        city: "Harare",
        zip: "00263",
        country: "Zimbabwe",
        phone: "0772448456",
      },
      courier: "DHL",
      addons: [
        {
          name: "Item photos",
          price: 100,
        },
        {
          name: "Bubble wrap",
          price: 50,
        },
      ],
      processingFee: 100,
      shipmentRate: 3000,
    },
    {
      orderNumber: "O5584",
      dateCreated: "03 March 2023",
      trackingNumber: "TRN12345000",
      trackingLink: "www.google.com",
      deliveryAddress: {
        fullName: "Pete Mugasa",
        street1: "6682 Emerald Road",
        city: "Harare",
        zip: "00263",
        country: "Zimbabwe",
        phone: "0772448456",
      },
      courier: "DHL Exporess",
      addons: [
        {
          name: "Item photos",
          price: 100,
        },
        {
          name: "Bubble wrap",
          price: 50,
        },
      ],
      processingFee: 100,
      shipmentRate: 5000,
    },
    {
      orderNumber: "O1888",
      dateCreated: "02 March 2023",
      trackingNumber: "TRN123451502",
      trackingLink: "www.google.com",
      deliveryAddress: {
        fullName: "Pete Mugasa",
        street1: "6682 Emerald Road",
        city: "Harare",
        zip: "00263",
        country: "Zimbabwe",
        phone: "0772448456",
      },
      processingFee: 100,
      addons: [
        {
          name: "Item photos",
          price: 100,
        },
        {
          name: "Bubble wrap",
          price: 50,
        },
      ],
      courier: "Fedex",
      shipmentRate: 5000,
    },
  ];

  const matchOrder = useMatch("/order/:id");
  //order to be rendered when link is clicked
  const order = matchOrder
    ? orders.find((o) => o.orderNumber === matchOrder.params.id)
    : null;

  //matching a specific route to a packing request
  const match = useMatch("/packing-requests/:id");

  //packing request to be rendered when a link is clicked
  const packingRequest = match
    ? packingRequests.find((pR) => pR.requestNumber === match.params.id)
    : null;

  const navigate = useNavigate();

  //handle login
  /* async function handleLogin(e) {
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
*/
  return (
    <>
      <Navbar
        packedItems={packedItems}
        receivedParcel={receivedParcel}
        //handleLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/received"
          element={
            <Received
              //user={user}
              setReceivedParcel={setReceivedParcel}
              receivedParcel={receivedParcel}
              packingRequests={packingRequests}
              setPackingRequests={setPackingRequests}
            />
          }
        />

        <Route path="/profile" element={<Profile /*user={user}*/ />} />

        <Route
          path="/packing-requests"
          element={<PackingRequest packingRequests={packingRequests} />}
        />
        <Route
          path="/packing-requests/:id"
          element={<PackingRequestDetails packingRequest={packingRequest} />}
        />
        <Route path="/additional-services" element={<AdditionalServices />} />
        <Route path="/ship" element={<Ship />} />
        <Route
          path="/shipment-rates"
          element={
            <ShipmentRates
              selectedRate={selectedRate}
              setSelectedRate={setSelectedRate}
            />
          }
        />
        <Route
          path="/payment"
          element={<Payment selectedRate={selectedRate} />}
        />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/order/:id" element={<OrderDetails order={order} />} />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password}
              //handleLogin={handleLogin}
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
              // handleSignup={handleSignup}
            />
          }
        />
        <Route path="/" element={<Home /*user={user}*/ />} />
      </Routes>
    </>
  );
};
export default App;
