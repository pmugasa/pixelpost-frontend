import axios from "axios";
const baseUrl = "http://localhost:4000/order";
let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

//adding the address and customs items to order
const orderDetails = async (formData) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.post(baseUrl, formData, config);
  console.log("RESPONSE DATA ADDRESS & CUSTOMS", res.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { orderDetails, setToken };
